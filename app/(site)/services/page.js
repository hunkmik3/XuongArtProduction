export default function ServicesPage() {
  const services = [
    { title: 'Production', desc: 'Tổ chức quay, đạo diễn, sản xuất hiện trường', icon: '🎬' },
    { title: 'Post-Production', desc: 'Dựng, âm thanh, VFX', icon: '💻' },
    { title: 'Color', desc: 'Color grading, finishing', icon: '🎨' },
    { title: 'Livestream', desc: 'Multi-cam, encoder, broadcast', icon: '📡' },
  ];
  return (
    <main className="min-h-screen mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-heading text-4xl mb-8">Dịch vụ</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(s => (
          <div key={s.title} className="p-6 rounded-2xl border hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">{s.icon}</div>
            <div className="font-heading text-xl">{s.title}</div>
            <p className="text-sm text-neutral-600 mt-1">{s.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}


