
import React, { useState, useCallback } from 'react';
import { FileNode, User } from '../types';
import Header from './Header';
import FileExplorer from './FileExplorer';
import CodeEditor from './CodeEditor';
import Icon from './Icon';

// Mock Data
const mockUser: User = {
  username: 'Alex Doe',
  email: 'alex.doe@example.com',
  avatarUrl: 'https://picsum.photos/id/237/200/200',
};

const initialFiles: FileNode[] = [
  {
    id: '1',
    name: 'models',
    type: 'folder',
    children: [
      { id: '2', name: 'classifier.py', type: 'python', content: '# Python code for classification model\n\nclass Classifier:\n    pass' },
      { id: '3', name: 'regressor.py', type: 'python', content: '# Python code for regression model' },
    ],
  },
  {
    id: '4',
    name: 'notebooks',
    type: 'folder',
    children: [
      { id: '5', name: 'data_exploration.ipynb', type: 'python', content: '{\n "cells": [],\n "metadata": {},\n "nbformat": 4,\n "nbformat_minor": 2\n}' },
    ],
  },
  { id: '6', name: 'README.md', type: 'markdown', content: '# AI Model Hub\n\nWelcome to your AI model hosting platform.' },
];

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [files, setFiles] = useState<FileNode[]>(initialFiles);
  const [selectedFileId, setSelectedFileId] = useState<string | null>('6');
  const [isExplorerVisible, setIsExplorerVisible] = useState(true);

  const findFile = useCallback((nodes: FileNode[], id: string): FileNode | null => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = findFile(node.children, id);
        if (found) return found;
      }
    }
    return null;
  }, []);

  const handleFileContentChange = useCallback((fileId: string, newContent: string) => {
    const updateContent = (nodes: FileNode[]): FileNode[] => {
      return nodes.map(node => {
        if (node.id === fileId) {
          return { ...node, content: newContent };
        }
        if (node.children) {
          return { ...node, children: updateContent(node.children) };
        }
        return node;
      });
    };
    setFiles(updateContent);
  }, []);

  const selectedFile = selectedFileId ? findFile(files, selectedFileId) : null;

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100 text-gray-800">
      <Header user={mockUser} onLogout={onLogout} />
      <main className="flex-1 flex overflow-hidden">
        {/* Mobile menu button to toggle file explorer */}
        <div className="md:hidden p-2">
            <button onClick={() => setIsExplorerVisible(!isExplorerVisible)} className="p-2 rounded-md hover:bg-gray-200">
                <Icon name="menu" className="w-6 h-6"/>
            </button>
        </div>
        
        <aside className={`transition-all duration-300 ${isExplorerVisible ? 'w-full md:w-64 lg:w-80' : 'w-0'} overflow-hidden flex-shrink-0`}>
             <FileExplorer 
                files={files} 
                onFileSelect={(id) => {
                    setSelectedFileId(id);
                    if (window.innerWidth < 768) { // md breakpoint
                        setIsExplorerVisible(false);
                    }
                }} 
                selectedFileId={selectedFileId}
              />
        </aside>
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <CodeEditor
            file={selectedFile}
            onContentChange={handleFileContentChange}
            onClose={() => setSelectedFileId(null)}
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
