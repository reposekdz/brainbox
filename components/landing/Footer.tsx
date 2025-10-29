import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    <div className="pb-6">
                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
                    </div>
                    <div className="pb-6">
                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a>
                    </div>
                    <div className="pb-6">
                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Jobs</a>
                    </div>
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    {/* Social icons would go here */}
                </div>
                <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                    &copy; 2023 AI Model Hub, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
