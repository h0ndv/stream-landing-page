import React from 'react';
import PillNav from './reactbits/PillNav';

export default function Header() {
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-2 flex justify-center">
        <PillNav
          logo="https://avatars.githubusercontent.com/u/118297178?s=96&v=4"
          logoAlt="Profile Avatar"
          items={navItems}
          activeHref="/"
          className="w-auto"
          ease="power2.easeOut"
          baseColor="#ffffff"
          pillColor="#000000"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#ffffff"
        />
      </div>
    </header>
  );
}