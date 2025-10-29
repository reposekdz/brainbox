import React from 'react';
import Icon from '../Icon';

interface NavbarProps {
    onGetStarted: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onGetStarted }) => {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">AI Model Hub</span>
              <Icon name="python" className="h-8 w-auto text-primary-600" />
              <span className="ml-2 text-lg font-semibold text-gray-900">AI Model Hub</span>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Use Cases</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Pricing</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Company</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button onClick={onGetStarted} className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </nav>
      </header>
    );
};

export default Navbar;
