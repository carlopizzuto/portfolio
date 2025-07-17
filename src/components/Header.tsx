import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-[#0A1128] border-b border-[#3A86FF]/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-[#3A86FF] font-bold text-xl mr-2">&gt;</span>
          <h1 className="text-xl font-bold">
            <span className="text-[#3A86FF]">dev</span>
            <span className="text-gray-300">@portfolio</span>
          </h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => <li key={item} className="hover:text-[#3A86FF] transition-colors">
                <a href={`#${item.toLowerCase()}`} className="group">
                  <span className="text-[#3A86FF] opacity-70 group-hover:opacity-100">
                    $
                  </span>{' '}
                  {item}
                </a>
              </li>)}
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 hover:text-[#3A86FF] transition-colors" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-[#0C1B3A] border-t border-[#3A86FF]/20">
          <ul className="container mx-auto px-4 py-2 space-y-3">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => <li key={item} className="py-2 hover:text-[#3A86FF] transition-colors">
                <a href={`#${item.toLowerCase()}`} className="block" onClick={toggleMenu}>
                  <span className="text-[#3A86FF] opacity-70">$</span> {item}
                </a>
              </li>)}
          </ul>
        </nav>}
    </header>;
};