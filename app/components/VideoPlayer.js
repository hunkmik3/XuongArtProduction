"use client";
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const HlsVideo = dynamic(() => import('./HlsVideo'), { ssr: false });

export default function VideoPlayer({ src, poster, className }) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      });
    }, { rootMargin: '200px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {visible ? (
        <HlsVideo src={src} poster={poster} className="h-full w-full" controls muted={false} />
      ) : (
        <video className="h-full w-full" poster={poster} preload="none" muted playsInline />
      )}
    </div>
  );
}


