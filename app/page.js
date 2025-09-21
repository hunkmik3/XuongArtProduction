import PageTransition from './components/PageTransition';
import ArtisticHero from './components/ArtisticHero';
import FeaturedProjects from './components/FeaturedProjects';
import AboutSection from './components/AboutSection';
import { WaveDivider, GeometricDivider, CirclePatternDivider } from './components/SVGElements';
import { getProjects } from './lib/strapi';

export default async function HomePage() {
  const projects = await getProjects();
  
  return (
    <PageTransition>
      <main className="min-h-screen brand-gradient">
        {/* Hero Banner */}
        <ArtisticHero />
        
        {/* Section Divider */}
        <WaveDivider color="#D0232E" />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Section Divider */}
        <GeometricDivider color="#FFD200" />
        
        {/* Featured Projects */}
        <div id="featured-projects">
          <FeaturedProjects projects={projects} />
        </div>
        
        {/* Section Divider */}
        <CirclePatternDivider color="#00673A" />
      </main>
    </PageTransition>
  );
}


