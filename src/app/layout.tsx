import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Particles from "../components/reactbits/Particles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen w-full">
          <div className="fixed inset-0 z-0">
            <Particles
              particleCount={600}
              particleSpread={10}
              speed={0.05}
              particleColors={['#ffffff', '#e0e0e0', '#c0c0c0']}
              moveParticlesOnHover={true}
              particleHoverFactor={0.5}
              alphaParticles={true}
              particleBaseSize={80}
              sizeRandomness={0.8}
              cameraDistance={25}
              disableRotation={false}
              className="w-full h-full"
            />
          </div>
          
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
