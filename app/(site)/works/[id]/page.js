import { MotionImg } from '../../../components/ClientMotion';
import { getProjectById } from '../../../lib/strapi';
import VideoPlayer from '../../../components/VideoPlayer';

export default async function ProjectDetail({ params }) {
  const { id } = params;
  const data = await getProjectById(id);
  const title = data?.attributes?.title || `Case Study #${id}`;
  const hls = data?.attributes?.hls; // string URL to .m3u8
  return (
    <main className="min-h-screen mx-auto max-w-5xl px-6 py-12">
      <header className="mb-8">
        <h1 className="font-heading text-3xl md:text-5xl">{title}</h1>
        <p className="text-neutral-600 mt-2">TVC / 2025</p>
      </header>

      <section className="mb-10">
        <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
          {hls ? (
            <VideoPlayer className="h-full w-full" poster={`/images/preview-1.jpg`} src={hls} />
          ) : (
            <video className="h-full w-full" controls playsInline preload="metadata" poster={`/images/preview-1.jpg`} src={`/videos/preview-1.mp4`} />
          )}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3 mb-12">
        {[1,2,3,4,5,6].map(i => (
          <MotionImg key={i} src={`/images/${i}.webp`} alt="frame grab" className="w-full h-auto rounded-lg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} />
        ))}
      </section>

      <section className="mb-12">
        <h2 className="font-heading text-2xl mb-4">Quy trình</h2>
        <ol className="grid md:grid-cols-3 gap-4">
          {['Pre-Production','Production','Post-Production'].map((t,i)=>(
            <li key={t} className="p-4 rounded-lg border">
              <div className="text-sm text-neutral-500">Bước {i+1}</div>
              <div className="font-heading text-xl">{t}</div>
              <p className="mt-2 text-sm">Mô tả ngắn về công việc chính và phạm vi thực hiện.</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-16">
        <h2 className="font-heading text-2xl mb-4">Credits</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            ['Director', 'Nguyễn A'],
            ['Producer', 'Trần B'],
            ['DP', 'Lê C'],
            ['Editor', 'Phạm D'],
            ['Colorist', 'Võ E'],
          ].map(([role,name])=> (
            <div key={role} className="flex items-center justify-between py-2 border-b">
              <span className="text-neutral-600">{role}</span>
              <span className="font-heading">{name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


