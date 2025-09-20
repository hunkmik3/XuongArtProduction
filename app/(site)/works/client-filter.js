"use client";
import { useState, useMemo } from 'react';

export default function ClientFilter({ categories }) {
  const [active, setActive] = useState(categories?.[0] || 'All');
  return (
    <div className="flex flex-wrap items-center gap-3 mb-10">
      {categories.map(c => (
        <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 rounded-full border transition-colors ${active===c? 'bg-primary text-white border-primary' : 'hover:border-secondary'}`} data-cta>
          {c}
        </button>
      ))}
    </div>
  );
}


