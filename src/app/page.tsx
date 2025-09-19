'use client'
import FuzzyText from '../components/reactbits/FuzzyText';
import Header from '../components/Header';

export default function Home() {
  const hoverIntensity = 0.8;
  const enableHover = true;

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <FuzzyText
          baseIntensity={0.30}
          hoverIntensity={hoverIntensity}
          enableHover={enableHover}
        >
          Hello World
        </FuzzyText>
      </div>
    </>
  );
}
