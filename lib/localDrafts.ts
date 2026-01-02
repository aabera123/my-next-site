// lib/localDrafts.ts
export type Draft = {
  id: string;
  title: string;
  content: string;
  updatedAt: number;
};

export type Revision = {
  id: string;
  draftId: string;
  content: string;
  label: string; // e.g. "Original", "Apply: Professional"
  createdAt: number;
};

type StoreV1 = {
  version: 1;
  drafts: Record<string, Draft>;
  revisions: Record<string, Revision[]>; // keyed by draftId
};

const KEY = "sendable:store:v1";

function hasWindow() {
  return typeof window !== "undefined";
}

function uid() {
  // crypto.randomUUID exists in modern browsers
  if (hasWindow() && "crypto" in window && "randomUUID" in crypto) return crypto.randomUUID();
  return `id_${Math.random().toString(16).slice(2)}_${Date.now()}`;
}

function loadStore(): StoreV1 {
  if (!hasWindow()) {
    // Server render fallback (won't be used in client components)
    return { version: 1, drafts: {}, revisions: {} };
  }
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { version: 1, drafts: {}, revisions: {} };
    const parsed = JSON.parse(raw) as StoreV1;
    if (parsed?.version !== 1) return { version: 1, drafts: {}, revisions: {} };
    return parsed;
  } catch {
    return { version: 1, drafts: {}, revisions: {} };
  }
}

function saveStore(store: StoreV1) {
  if (!hasWindow()) return;
  localStorage.setItem(KEY, JSON.stringify(store));
}

// ===== Public API =====

export function listDrafts(): Draft[] {
  const store = loadStore();
  return Object.values(store.drafts).sort((a, b) => b.updatedAt - a.updatedAt);
}

export function getDraft(draftId: string): Draft | null {
  const store = loadStore();
  return store.drafts[draftId] ?? null;
}

export function getRevisions(draftId: string): Revision[] {
  const store = loadStore();
  return store.revisions[draftId] ?? [];
}

export function createDraft(initial?: Partial<Pick<Draft, "title" | "content">>): Draft {
  const store = loadStore();
  const id = uid();
  const now = Date.now();

  const draft: Draft = {
    id,
    title: initial?.title ?? "Untitled",
    content: initial?.content ?? "",
    updatedAt: now,
  };

  store.drafts[id] = draft;
  store.revisions[id] = [
    {
      id: uid(),
      draftId: id,
      content: draft.content,
      label: "Original",
      createdAt: now,
    },
  ];

  saveStore(store);
  return draft;
}

export function updateDraft(draftId: string, patch: Partial<Pick<Draft, "title" | "content">>) {
  const store = loadStore();
  const d = store.drafts[draftId];
  if (!d) return;

  const now = Date.now();
  store.drafts[draftId] = {
    ...d,
    ...patch,
    updatedAt: now,
  };

  saveStore(store);
}

export function pushRevision(draftId: string, content: string, label: string) {
  const store = loadStore();
  const d = store.drafts[draftId];
  if (!d) return;

  const now = Date.now();
  const rev: Revision = {
    id: uid(),
    draftId,
    content,
    label,
    createdAt: now,
  };

  // Save revision snapshot
  const arr = store.revisions[draftId] ?? [];
  arr.push(rev);
  store.revisions[draftId] = arr;

  // Also update draft content
  store.drafts[draftId] = { ...d, content, updatedAt: now };

  saveStore(store);
}

export function restoreRevision(draftId: string, revisionId: string) {
  const store = loadStore();
  const d = store.drafts[draftId];
  const arr = store.revisions[draftId] ?? [];
  if (!d) return;

  const target = arr.find((r) => r.id === revisionId);
  if (!target) return;

  const now = Date.now();
  store.drafts[draftId] = { ...d, content: target.content, updatedAt: now };

  // Optional: record restore as a new revision (keeps history consistent)
  arr.push({
    id: uid(),
    draftId,
    content: target.content,
    label: `Restore: ${target.label}`,
    createdAt: now,
  });
  store.revisions[draftId] = arr;

  saveStore(store);
}
