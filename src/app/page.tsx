'use client'
import FuzzyText from '../components/reactbits/FuzzyText';
import PillNav from '../components/reactbits/PillNav';
import KickStream from '../components/KickStream';

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
      
      <div className="flex items-center justify-center min-h-[calc(50vh-200px)]">
        <FuzzyText
          baseIntensity={0.30}
          hoverIntensity={hoverIntensity}
          enableHover={enableHover}
        >
          Hello World
        </FuzzyText>
      </div>
      
      {/* Kick Stream component*/}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="w-full max-w-4xl mx-auto">
            <KickStream 
              channelName="#"
              width="100%"
              height="500px"
              className="shadow-2xl rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
