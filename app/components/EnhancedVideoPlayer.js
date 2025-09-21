'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function EnhancedVideoPlayer({ 
  src, 
  poster, 
  className = '', 
  autoPlay = false, 
  loop = true, 
  muted = true,
  ...props 
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        preload="metadata"
        data-video
        {...props}
      />
      
      {/* Overlay effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: isHovered ? 0.3 : 0.6 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Play indicator */}
      {!isPlaying && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
