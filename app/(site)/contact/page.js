export default function ContactPage() {
  return (
    <main className="min-h-screen mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-4xl mb-6">Gửi brief</h1>
      <form className="grid gap-4">
        <div>
          <label className="text-sm text-neutral-600">Tên</label>
          <input className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="Tên của bạn" />
        </div>
        <div>
          <label className="text-sm text-neutral-600">Email</label>
          <input type="email" className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="email@domain.com" />
        </div>
        <div>
          <label className="text-sm text-neutral-600">Mục tiêu</label>
          <input className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="TVC ra mắt sản phẩm..." />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-neutral-600">Ngân sách</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="VD: 200tr - 500tr" />
          </div>
          <div>
            <label className="text-sm text-neutral-600">Deadline</label>
            <input type="date" className="mt-1 w-full rounded-lg border px-3 py-2" />
          </div>
        </div>
        <div>
          <label className="text-sm text-neutral-600">Mô tả</label>
          <textarea rows={5} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="Tóm tắt yêu cầu, key visual, benchmark..." />
        </div>
        <button className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-heading text-white hover:bg-secondary transition-colors" data-cta>Gửi</button>
      </form>
      <div className="mt-10 text-sm text-neutral-600">
        <div>Email: hello@xuong.art</div>
        <div>Social: Instagram, Facebook, Vimeo</div>
      </div>
    </main>
  );
}


