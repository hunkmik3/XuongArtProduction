import { AnimatePresence } from '../../components/ClientMotion';
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
    <main className="min-h-screen px-6 py-16 mx-auto max-w-7xl">
      <ClientFilter categories={CATEGORIES} />

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        <AnimatePresence initial={false}>
          {projects.map((p, idx) => {
            const id = p?.id || idx+1;
            const title = p?.attributes?.title || p.title;
            const category = p?.attributes?.category?.data?.attributes?.name || p.category;
            const poster = p?.attributes?.cover?.data?.attributes?.url || p.poster;
            const video = `/videos/preview-${(idx % 6) + 1}.mp4`;
            return (
              <ProjectCard
                key={id}
                href={`/works/${id}`}
                poster={poster}
                video={video}
                title={title}
                category={category}
                idx={idx}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </main>
  );
}


