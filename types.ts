
export type FileType = 'python' | 'markdown' | 'folder' | 'generic';

export interface FileNode {
  id: string;
  name: string;
  type: FileType;
  content?: string;
  children?: FileNode[];
}

export interface User {
  username: string;
  email: string;
  avatarUrl: string;
}
