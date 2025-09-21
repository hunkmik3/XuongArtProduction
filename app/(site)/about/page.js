export default function AboutPage() {
  const team = [
    { name: 'Nguyễn A', role: 'Director' },
    { name: 'Trần B', role: 'Producer' },
    { name: 'Lê C', role: 'DP' },
    { name: 'Phạm D', role: 'Editor' },
  ];
  return (
    <main className="min-h-screen mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-heading text-4xl mb-4">Manifesto</h1>
      <p className="max-w-3xl text-neutral-700 mb-8">Chúng tôi kể câu chuyện bằng hình ảnh, tập trung vào cảm xúc và hiệu quả thương hiệu. Từ tiền kỳ đến hậu kỳ, quy trình tinh gọn và sáng tạo.</p>
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {[1,2,3].map(i => (
          <img key={i} src={`/images/${i+4}.webp`} alt="behind the scenes" className="rounded-xl" />
        ))}
      </div>
      <h2 className="font-heading text-2xl mb-4">Core Team</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map(m => (
          <div key={m.name} className="p-4 rounded-xl border">
            <div className="h-40 w-full bg-neutral-100 rounded-lg mb-3" />
            <div className="font-heading">{m.name}</div>
            <div className="text-sm text-neutral-600">{m.role}</div>
          </div>
        ))}
      </div>
    </main>
  );
}


