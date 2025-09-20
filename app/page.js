import { MotionH1, MotionA } from './components/ClientMotion';
import { getProjects } from './lib/strapi';

export default async function HomePage() {
  const projects = await getProjects();
  return (
    <main className="min-h-screen brand-gradient">
      <section className="relative h-[88vh] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.jpg"
          data-video
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-heading text-5xl md:text-7xl tracking-tight"
          >
            XƯỞNG ART PRODUCTION
          </MotionH1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-heading text-3xl md:text-4xl">Dự án nổi bật</h2>
          <a className="text-primary hover:text-secondary transition-colors" href="/works" data-cta>
            Xem tất cả →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(projects.length ? projects.slice(0,6) : [1,2,3,4,5,6]).map((item,idx)=> {
            const id = item?.id || idx+1;
            const title = item?.attributes?.title || `Project ${idx+1}`;
            const category = item?.attributes?.category?.data?.attributes?.name || 'TVC';
            const poster = item?.attributes?.cover?.data?.attributes?.url || `/images/preview-${(idx%6)+1}.jpg`;
            const preview = `/videos/preview-${(idx%6)+1}.mp4`;
            return (
              <MotionA key={id} href={`/works/${id}`} className="group relative block overflow-hidden rounded-xl bg-black" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx*0.05 }}>
                <video className="h-64 w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src={preview} muted loop playsInline preload="none" poster={poster} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="font-heading">{title}</span>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded-full">{category}</span>
                </div>
              </MotionA>
            );
          })}
        </div>
      </section>
    </main>
  );
}


