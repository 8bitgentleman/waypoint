import type { PageServerLoadEvent } from "./$types";
import * as Y from 'yjs';

export async function load({ params }: PageServerLoadEvent) {
  // Create a new Yjs document
  const ydoc = new Y.Doc();
  ydoc.guid = params.guid;

  // Return a mock token and URL
  return {
    docId: params.guid,
    url: `ws://localhost:1234`, // This is a mock URL
    token: "mock-token"
  };
}