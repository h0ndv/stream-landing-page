'use client'
import React, { useState, useEffect } from 'react';

interface KickStreamProps {
  channelName: string;
  width?: string | number;
  height?: string | number;
  autoplay?: boolean;
  muted?: boolean;
  className?: string;
}

const KickStream: React.FC<KickStreamProps> = ({
  channelName,
  width = '100%',
  height = '400px',
  className = ''
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
  }, [channelName]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError('Error loading stream. Check if the channel is live.');
    setIsLoading(false);
  };

  const iframeStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    border: 'none',
    borderRadius: '8px',
    minHeight: '300px'
  };

  return (
    <div className={`relative w-full ${className}`}>
      {isLoading && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg z-10"
          style={iframeStyle}
        >
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
            <p>Loading stream...</p>
          </div>
        </div>
      )}
      
      {error ? (
        <div 
          className="flex items-center justify-center bg-gray-900 text-white rounded-lg"
          style={iframeStyle}
        >
          <div className="text-center p-4">
            <p className="text-red-400 mb-2 text-2xl">⚠️</p>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      ) : (
        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <iframe
            src={`https://player.kick.com/${channelName}`}
            style={iframeStyle}
            allowFullScreen
            onLoad={handleLoad}
            onError={handleError}
            title={`Stream of ${channelName} on Kick`}
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  );
};

export default KickStream;
