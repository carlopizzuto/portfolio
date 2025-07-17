import React from 'react';
import { HeartIcon } from 'lucide-react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-[#0A1128] border-t border-[#1A2A4A] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} Carlo Pizzuto Allende. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500 text-sm flex items-center">
              Built with
              <HeartIcon size={14} className="mx-2 text-[#3A86FF]" />
              and React
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-xs font-mono">
            <span className="text-[#3A86FF]">$</span> echo "Thanks for
            visiting!"
          </p>
        </div>
      </div>
    </footer>;
};