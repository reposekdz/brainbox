
import React, { useEffect, useState } from 'react';
import { FileNode } from '../types';
import Icon from './Icon';

interface CodeEditorProps {
  file: FileNode | null;
  onContentChange: (fileId: string, newContent: string) => void;
  onClose: () => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ file, onContentChange, onClose }) => {
  const [content, setContent] = useState(file?.content || '');

  useEffect(() => {
    setContent(file?.content || '');
  }, [file]);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  
  const handleSave = () => {
    if (file) {
      onContentChange(file.id, content);
      // Here you would typically show a notification
      console.log(`Saved ${file.name}`);
    }
  };

  if (!file) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 text-gray-500 p-4">
        <Icon name="file" className="w-24 h-24 text-gray-300" />
        <p className="mt-4 text-lg">Select a file to view or edit</p>
        <p className="text-sm">You can manage your AI models and documentation here.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-white h-full">
      <div className="flex items-center justify-between p-2 border-b border-gray-200 bg-gray-50 flex-shrink-0">
        <div className="flex items-center">
            <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-200 mr-2 md:hidden">
                <Icon name="close" className="w-5 h-5" />
            </button>
            <span className="font-medium text-sm text-gray-700">{file.name}</span>
        </div>
        <div className="flex items-center space-x-2">
            <button 
             onClick={handleSave}
             className="flex items-center px-3 py-1.5 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
                <Icon name="save" className="w-4 h-4 mr-2" />
                Save
            </button>
             <button
             onClick={onClose}
             className="p-2 rounded-md hover:bg-gray-200 hidden md:block"
            >
             <Icon name="close" className="w-5 h-5 text-gray-600" />
            </button>
        </div>
      </div>
      <div className="flex-1 relative">
        <textarea
          value={content}
          onChange={handleContentChange}
          className="w-full h-full p-4 resize-none border-0 focus:ring-0 font-mono text-sm leading-6 bg-gray-50 text-gray-800"
          placeholder="Start typing your code or documentation..."
          spellCheck="false"
        />
      </div>
       <div className="p-2 border-t border-gray-200 bg-gray-50 text-xs text-gray-500 flex justify-end">
          <span>{`Lines: ${content.split('\n').length}`}</span>
          <span className="mx-2">|</span>
          <span>{`Chars: ${content.length}`}</span>
        </div>
    </div>
  );
};

export default CodeEditor;
