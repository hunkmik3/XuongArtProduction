"use client";
import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function HlsVideo({ src, poster, className, autoPlay=false, muted=true, controls=true }) {
  const ref = useRef(null);
  useEffect(() => {
    const video = ref.current;
    if (!video || !src) return;
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    } else if (Hls.isSupported()) {
      const hls = new Hls({ maxBufferLength: 30 });
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => { hls.destroy(); };
    } else {
      video.src = src; // fallback progressive
    }
  }, [src]);
  return (
    <video ref={ref} poster={poster} className={className} autoPlay={autoPlay} muted={muted} controls={controls} playsInline />
  );
}


