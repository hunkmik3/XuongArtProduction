export default function ArticleDetail({ params }) {
  const { id } = params;
  return (
    <main className="min-h-screen mx-auto max-w-3xl px-6 py-16 prose prose-neutral">
      <h1>Bài viết {id}</h1>
      <p>Chia sẻ hậu trường và góc nhìn nghệ thuật.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id dolor nec lacus aliquet porttitor.</p>
    </main>
  );
}


