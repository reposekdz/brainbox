
import React, { useState } from 'react';
import { FileNode, FileType } from '../types';
import Icon from './Icon';

interface FileItemProps {
  node: FileNode;
  onSelect: (id: string) => void;
  selectedFileId: string | null;
  level: number;
}

const getFileIcon = (type: FileType) => {
  switch (type) {
    case 'folder': return 'folder';
    case 'python': return 'python';
    case 'markdown': return 'markdown';
    default: return 'file';
  }
};

const FileItem: React.FC<FileItemProps> = ({ node, onSelect, selectedFileId, level }) => {
  const [isOpen, setIsOpen] = useState(true);
  const isFolder = node.type === 'folder';
  const isSelected = node.id === selectedFileId;

  const handleSelect = () => {
    if (isFolder) {
      setIsOpen(!isOpen);
    } else {
      onSelect(node.id);
    }
  };

  return (
    <div>
      <div
        onClick={handleSelect}
        className={`flex items-center p-2 rounded-md cursor-pointer transition-colors duration-150 ${
          isSelected ? 'bg-primary-100 text-primary-800' : 'hover:bg-gray-200'
        }`}
        style={{ paddingLeft: `${level * 1.25 + 0.5}rem` }}
      >
        {isFolder && (
          <Icon name={isOpen ? 'chevron-down' : 'chevron-right'} className="w-4 h-4 mr-2 flex-shrink-0" />
        )}
        <Icon name={getFileIcon(node.type)} className={`w-5 h-5 mr-3 flex-shrink-0 ${isFolder ? 'text-yellow-600' : 'text-gray-500'}`} />
        <span className="truncate text-sm font-medium">{node.name}</span>
      </div>
      {isFolder && isOpen && node.children && (
        <div>
          {node.children.map((child) => (
            <FileItem key={child.id} node={child} onSelect={onSelect} selectedFileId={selectedFileId} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

interface FileExplorerProps {
  files: FileNode[];
  onFileSelect: (id: string) => void;
  selectedFileId: string | null;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ files, onFileSelect, selectedFileId }) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };
    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        // Handle file drop logic here
        console.log(e.dataTransfer.files);
    };


  return (
    <div className="h-full bg-white border-r border-gray-200 flex flex-col p-2">
      <div className="p-2 flex justify-between items-center">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Explorer</h2>
        <div className="flex space-x-1">
          <button className="p-1.5 rounded text-gray-500 hover:bg-gray-200"><Icon name="plus" className="w-4 h-4" /></button>
          <button className="p-1.5 rounded text-gray-500 hover:bg-gray-200"><Icon name="edit" className="w-4 h-4" /></button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto pr-1 space-y-1">
        {files.map((node) => (
          <FileItem key={node.id} node={node} onSelect={onFileSelect} selectedFileId={selectedFileId} level={0} />
        ))}
      </div>
       <div 
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`mt-4 border-2 border-dashed rounded-lg p-4 text-center transition-colors duration-200 ${isDragging ? 'border-primary-500 bg-primary-50' : 'border-gray-300'}`}
      >
        <Icon name="upload" className="w-8 h-8 mx-auto text-gray-400"/>
        <p className="mt-2 text-sm text-gray-600">Drag & drop files here</p>
        <input type="file" className="hidden" multiple />
      </div>
    </div>
  );
};

export default FileExplorer;
