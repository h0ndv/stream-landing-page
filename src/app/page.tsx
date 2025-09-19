'use client'
import FuzzyText from '../components/reactbits/FuzzyText';
import PillNav from '../components/reactbits/PillNav';

export default function Home() {
  const hoverIntensity = 0.8;
  const enableHover = true;

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#' },
  ];

  return (
    <div className="min-h-screen">
      <div className="flex justify-center pt-8 pb-12">
        <PillNav
          logo="https://avatars.githubusercontent.com/u/118297178?s=96&v=4"
          logoAlt="Profile Avatar"
          items={navItems}
          activeHref="/"
          className="w-auto"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#000000"
          pillTextColor="#000000"
        />
      </div>
      
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <FuzzyText
          baseIntensity={0.30}
          hoverIntensity={hoverIntensity}
          enableHover={enableHover}
        >
          Hello World
        </FuzzyText>
      </div>
    </div>
  );
}
