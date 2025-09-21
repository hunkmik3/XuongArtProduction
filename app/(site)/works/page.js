import { AnimatePresence } from '../../components/ClientMotion';
import ScrollReveal from '../../components/ScrollReveal';
import PageTransition from '../../components/PageTransition';
import ProjectCard from './ProjectCard';
import { getProjects } from '../../lib/strapi';
import ClientFilter from './client-filter';

const ALL = 'All';
const CATEGORIES = [ALL, 'TVC', 'Music Video', 'Documentary'];

export default async function WorksPage() {
  const data = await getProjects();
  const projects = (data?.length ? data : Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    category: CATEGORIES[(i % (CATEGORIES.length - 1)) + 1],
    video: `/videos/preview-${(i % 6) + 1}.mp4`,
    poster: `/images/preview-${(i % 6) + 1}.jpg`,
  })));

  return (
    <PageTransition>
      <main className="min-h-screen px-6 py-16 mx-auto max-w-7xl bg-white" data-scroll-section>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading mb-4 text-black">
            Portfolio
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Khám phá tất cả các dự án của chúng tôi
          </p>
        </div>

        {/* Filter */}
        <div className="mb-12">
          <ClientFilter categories={CATEGORIES} />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => {
            const id = p?.id || idx+1;
            const title = p?.attributes?.title || p.title;
            const category = p?.attributes?.category?.data?.attributes?.name || p.category;
            const poster = p?.attributes?.cover?.data?.attributes?.url || p.poster;
            const video = `/videos/preview-${(idx % 6) + 1}.mp4`;
            return (
              <div key={id} className="group relative overflow-hidden rounded-2xl bg-gray-200 cursor-pointer">
                {/* Placeholder Background */}
                <div className="relative h-80 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[12px] border-y-transparent" />
                    </div>
                    <h3 className="text-xl font-heading mb-2 text-black">{title}</h3>
                    <div className="flex items-center justify-center gap-3">
                      <span className="px-3 py-1 bg-primary/20 rounded-full text-sm text-black">
                        {category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </PageTransition>
  );
}


