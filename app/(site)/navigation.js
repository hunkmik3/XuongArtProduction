export function Nav() {
  const items = [
    { href: '/', label: 'Home' },
    { href: '/works', label: 'Works' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/journal', label: 'Journal' },
    { href: '/contact', label: 'Contact' },
  ];
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40">
      <div className="rounded-full bg-white/80 backdrop-blur border px-4 py-2 flex gap-4">
        {items.map(i => (
          <a key={i.href} href={i.href} className="text-sm hover:text-primary transition-colors" data-cta>{i.label}</a>
        ))}
      </div>
    </nav>
  );
}


