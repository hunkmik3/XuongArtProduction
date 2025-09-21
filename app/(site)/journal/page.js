export default function JournalPage() {
  const posts = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: `Bài viết ${i + 1}`,
    excerpt: 'Nhật ký hậu trường, chia sẻ nghệ thuật và kỹ thuật làm phim.'
  }));
  return (
    <main className="min-h-screen mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-heading text-4xl mb-8">Journal</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(p => (
          <a key={p.id} href={`/journal/${p.id}`} className="p-6 rounded-2xl border hover:shadow-md transition-shadow">
            <div className="h-40 bg-neutral-100 rounded-xl mb-4" />
            <div className="font-heading text-xl mb-1">{p.title}</div>
            <p className="text-sm text-neutral-600">{p.excerpt}</p>
          </a>
        ))}
      </div>
    </main>
  );
}


