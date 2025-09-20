'use client';

import { MotionA } from '../../components/ClientMotion';

export default function ProjectCard({ href, poster, video, title, category, idx }) {
  return (
    <MotionA
      href={href}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      className="group mb-6 block overflow-hidden rounded-xl bg-neutral-100"
    >
      <video
        className="w-full object-cover"
        src={video}
        muted
        loop
        playsInline
        preload="none"
        onMouseOver={(e)=>e.currentTarget.play()}
        onMouseOut={(e)=>e.currentTarget.pause()}
        poster={poster}
        data-video
      />
      <div className="p-4 flex items-center justify-between">
        <h3 className="font-heading">{title}</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-accent/20">{category}</span>
      </div>
    </MotionA>
  );
}


