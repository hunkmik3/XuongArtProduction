'use client';

// Circle Mark SVG
export function CircleMark({ className = '', size = 24, color = '#D0232E' }) {
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none"/>
      <circle cx="12" cy="12" r="4" fill={color}/>
    </svg>
  );
}

// Arrow Splashing SVG
export function ArrowSplashing({ className = '', size = 32, color = '#FFD200' }) {
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M16 4L28 16L16 28L16 20H4L4 12H16V4Z" 
        fill={color}
        stroke={color}
        strokeWidth="1"
      />
      <circle cx="8" cy="16" r="2" fill="white" opacity="0.8"/>
      <circle cx="24" cy="8" r="1.5" fill="white" opacity="0.6"/>
      <circle cx="24" cy="24" r="1.5" fill="white" opacity="0.6"/>
    </svg>
  );
}

// Roundcut Board SVG
export function RoundcutBoard({ className = '', width = 200, height = 100, color = '#00673A' }) {
  return (
    <svg 
      className={className}
      width={width} 
      height={height} 
      viewBox="0 0 200 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect 
        x="10" 
        y="10" 
        width="180" 
        height="80" 
        rx="20" 
        ry="20" 
        fill={color}
        opacity="0.1"
        stroke={color}
        strokeWidth="2"
      />
      <rect 
        x="20" 
        y="20" 
        width="160" 
        height="60" 
        rx="15" 
        ry="15" 
        fill={color}
        opacity="0.2"
      />
      <circle cx="50" cy="50" r="8" fill={color} opacity="0.6"/>
      <circle cx="150" cy="50" r="8" fill={color} opacity="0.6"/>
      <rect x="80" y="45" width="40" height="10" rx="5" fill={color} opacity="0.8"/>
    </svg>
  );
}

// Section Divider - Wave
export function WaveDivider({ className = '', color = '#D0232E', flip = false }) {
  return (
    <svg 
      className={`${className} ${flip ? 'rotate-180' : ''}`}
      width="100%" 
      height="60" 
      viewBox="0 0 1200 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path 
        d="M0,30 C150,10 300,50 450,30 C600,10 750,50 900,30 C1050,10 1200,50 1200,30 L1200,60 L0,60 Z" 
        fill={color}
        opacity="0.1"
      />
    </svg>
  );
}

// Section Divider - Geometric
export function GeometricDivider({ className = '', color = '#FFD200' }) {
  return (
    <svg 
      className={className}
      width="100%" 
      height="80" 
      viewBox="0 0 1200 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <polygon 
        points="0,80 200,0 400,80 600,0 800,80 1000,0 1200,80 1200,80 0,80" 
        fill={color}
        opacity="0.15"
      />
    </svg>
  );
}

// Section Divider - Circle Pattern
export function CirclePatternDivider({ className = '', color = '#00673A' }) {
  return (
    <svg 
      className={className}
      width="100%" 
      height="100" 
      viewBox="0 0 1200 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <circle cx="100" cy="50" r="30" fill={color} opacity="0.1"/>
      <circle cx="300" cy="50" r="25" fill={color} opacity="0.15"/>
      <circle cx="500" cy="50" r="35" fill={color} opacity="0.1"/>
      <circle cx="700" cy="50" r="20" fill={color} opacity="0.2"/>
      <circle cx="900" cy="50" r="28" fill={color} opacity="0.12"/>
      <circle cx="1100" cy="50" r="32" fill={color} opacity="0.1"/>
    </svg>
  );
}

// Brand Logo Element
export function BrandLogo({ className = '', size = 48 }) {
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#D0232E"/>
      <rect x="8" y="8" width="32" height="32" rx="4" fill="#FFD200"/>
      <text x="24" y="30" textAnchor="middle" fill="#00673A" fontSize="16" fontWeight="bold">X</text>
    </svg>
  );
}

// Decorative Elements
export function DecorativeDots({ className = '', color = '#FFD200', count = 5 }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div 
          key={i}
          className="w-2 h-2 rounded-full"
          style={{ 
            backgroundColor: color,
            opacity: 0.3 + (i * 0.15),
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}
    </div>
  );
}
