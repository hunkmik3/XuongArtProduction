'use client';

import { useEffect, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function LocomotiveProvider({ children }) {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        multiplier: 1,
        class: 'is-revealed',
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef} style={{ minHeight: '100vh' }}>
        {children}
      </div>
    </LocomotiveScrollProvider>
  );
}
