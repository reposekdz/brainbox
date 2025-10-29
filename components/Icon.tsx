import React from 'react';

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const icons: { [key: string]: React.ReactNode } = {
    menu: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    'chevron-down': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    ),
    'chevron-right': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    ),
    folder: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
    python: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M14.28,2.18L15,2.5V8.5C15,10.16 13.66,11.5 12,11.5C10.34,11.5 9,10.16 9,8.5V2.5L9.72,2.18C10.61,1.75 11.23,2.06 11.5,2.5L12,3.3L12.5,2.5C12.77,2.06 13.39,1.75 14.28,2.18M11,1.5C10.1,1.06 8.71,1.38 7.82,2.18L7.5,2.5V8.5C7.5,11.24 9.5,13.5 12,13.5C14.5,13.5 16.5,11.24 16.5,8.5V2.5L16.18,2.18C15.29,1.38 13.9,1.06 13,1.5C12.5,1.73 12.21,2.1 12,2.5C11.79,2.1 11.5,1.73 11,1.5M9.72,21.82L9,21.5V15.5C9,13.84 10.34,12.5 12,12.5C13.66,12.5 15,13.84 15,15.5V21.5L14.28,21.82C13.39,22.25 12.77,21.94 12.5,21.5L12,20.7L11.5,21.5C11.23,21.94 10.61,22.25 9.72,21.82M13,22.5C13.9,22.94 15.29,22.62 16.18,21.82L16.5,21.5V15.5C16.5,12.76 14.5,10.5 12,10.5C9.5,10.5 7.5,12.76 7.5,15.5V21.5L7.82,21.82C8.71,22.62 10.1,22.94 11,22.5C11.5,22.27 11.79,21.9 12,21.5C12.21,21.9 12.5,22.27 13,22.5Z" />
        </svg>
    ),
    markdown: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M20,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.9 21.1,4 20,4M14.5,16H12.5V10.5L10.75,12.25L9.5,11L13,7.5L16.5,11L15.25,12.25L13.5,10.5V16H14.5M6,16H4V10H6V16M8.5,16H6.5V8H8.5V16M20,16H18V10H20V16M17.5,16H15.5V8H17.5V16Z" />
        </svg>
    ),
    file: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    plus: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    edit: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
      </svg>
    ),
    upload: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    close: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    save: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
      </svg>
    ),
  };

  return icons[name] || null;
};

export default Icon;
