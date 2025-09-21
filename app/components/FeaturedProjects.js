'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import ProjectModal from './ProjectModal';

export default function FeaturedProjects({ projects = [] }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Tạo dữ liệu mẫu nếu không có projects
  const featuredProjects = projects.length > 0 
    ? projects.slice(0, 6)
    : [
        {
          id: 1,
          title: "TVC Samsung Galaxy",
          category: "TVC",
          year: 2024,
          description: "Quảng cáo TVC cho dòng sản phẩm Samsung Galaxy mới với concept công nghệ tương lai",
          video: "/videos/preview-1.mp4",
          poster: "/images/project-1.jpg",
          credits: [
            { role: "Director", name: "Nguyễn Văn A" },
            { role: "Producer", name: "Trần Thị B" },
            { role: "DOP", name: "Lê Văn C" }
          ],
          process: [
            { title: "Concept", description: "Phát triển ý tưởng và storyboard" },
            { title: "Pre-production", description: "Chuẩn bị kỹ thuật và casting" },
            { title: "Production", description: "Quay phim và thu âm" },
            { title: "Post-production", description: "Edit và color grading" }
          ]
        },
        {
          id: 2,
          title: "Music Video - Đen Vâu",
          category: "Music Video",
          year: 2024,
          description: "Music video cho ca khúc mới của Đen Vâu với phong cách urban và nghệ thuật",
          video: "/videos/preview-2.mp4",
          poster: "/images/project-2.jpg",
          credits: [
            { role: "Director", name: "Phạm Văn D" },
            { role: "Producer", name: "Hoàng Thị E" },
            { role: "Editor", name: "Vũ Văn F" }
          ],
          process: [
            { title: "Concept", description: "Phát triển visual concept" },
            { title: "Location", description: "Tìm kiếm và chuẩn bị địa điểm" },
            { title: "Shooting", description: "Quay phim theo timeline" },
            { title: "Editing", description: "Edit và sync với nhạc" }
          ]
        },
        {
          id: 3,
          title: "Documentary - Hà Nội 36 Phố Phường",
          category: "Documentary",
          year: 2023,
          description: "Phim tài liệu về văn hóa và cuộc sống của người dân Hà Nội",
          video: "/videos/preview-3.mp4",
          poster: "/images/project-3.jpg",
          credits: [
            { role: "Director", name: "Ngô Văn G" },
            { role: "Producer", name: "Đinh Thị H" },
            { role: "Sound", name: "Bùi Văn I" }
          ],
          process: [
            { title: "Research", description: "Nghiên cứu và phỏng vấn" },
            { title: "Planning", description: "Lên kế hoạch quay" },
            { title: "Filming", description: "Quay phim tài liệu" },
            { title: "Post", description: "Edit và hoàn thiện" }
          ]
        },
        {
          id: 4,
          title: "TVC VinFast",
          category: "TVC",
          year: 2024,
          description: "Quảng cáo TVC cho thương hiệu xe điện VinFast với concept tương lai xanh",
          video: "/videos/preview-4.mp4",
          poster: "/images/project-4.jpg",
          credits: [
            { role: "Director", name: "Lê Văn J" },
            { role: "Producer", name: "Phạm Thị K" },
            { role: "DOP", name: "Trần Văn L" }
          ],
          process: [
            { title: "Concept", description: "Phát triển ý tưởng xanh" },
            { title: "Pre-production", description: "Chuẩn bị kỹ thuật" },
            { title: "Production", description: "Quay phim" },
            { title: "Post-production", description: "Edit và VFX" }
          ]
        },
        {
          id: 5,
          title: "Music Video - Sơn Tùng M-TP",
          category: "Music Video",
          year: 2023,
          description: "Music video cho ca khúc mới của Sơn Tùng M-TP với phong cách hiện đại",
          video: "/videos/preview-5.mp4",
          poster: "/images/project-5.jpg",
          credits: [
            { role: "Director", name: "Nguyễn Văn M" },
            { role: "Producer", name: "Hoàng Thị N" },
            { role: "Editor", name: "Vũ Văn O" }
          ],
          process: [
            { title: "Concept", description: "Phát triển visual" },
            { title: "Location", description: "Tìm địa điểm" },
            { title: "Shooting", description: "Quay phim" },
            { title: "Editing", description: "Edit và sync" }
          ]
        },
        {
          id: 6,
          title: "Corporate Video - FPT",
          category: "Corporate",
          year: 2023,
          description: "Video giới thiệu công ty FPT với phong cách chuyên nghiệp",
          video: "/videos/preview-6.mp4",
          poster: "/images/project-6.jpg",
          credits: [
            { role: "Director", name: "Đinh Văn P" },
            { role: "Producer", name: "Bùi Thị Q" },
            { role: "Sound", name: "Lê Văn R" }
          ],
          process: [
            { title: "Research", description: "Nghiên cứu thương hiệu" },
            { title: "Planning", description: "Lên kế hoạch" },
            { title: "Filming", description: "Quay phim" },
            { title: "Post", description: "Edit và hoàn thiện" }
          ]
        }
      ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section className="min-h-screen flex" data-scroll-section ref={ref}>
        {/* Left Side - Content (1/3) - Dark Background */}
        <motion.div 
          className="w-full lg:w-1/3 bg-gray-900 flex flex-col justify-center px-8 lg:px-16 py-16"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Large Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-accent text-white mb-8 leading-tight italic">
            Dự án nổi bật
          </h2>
          
          {/* Description Paragraphs */}
          <div className="space-y-6 text-white/90 text-lg leading-relaxed">
            <p>
              Khám phá những tác phẩm đặc sắc nhất của chúng tôi, 
              nơi nghệ thuật và công nghệ hòa quyện tạo nên những câu chuyện đầy cảm xúc.
            </p>
            <p>
              Từ TVC quảng cáo đến music video, từ phim tài liệu đến corporate video, 
              chúng tôi tạo ra những sản phẩm chất lượng cao với phong cách độc đáo.
            </p>
          </div>

          {/* CTA Button */}
          <motion.a
            href="/works"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-heading text-lg font-bold hover:bg-secondary transition-all duration-300 group mt-12 w-fit"
            data-cta
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Xem tất cả dự án
            <motion.svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>

        {/* Right Side - Projects Grid (2/3) - Light Background */}
        <motion.div 
          className="w-full lg:w-2/3 bg-gray-100 flex items-center justify-center px-8 lg:px-16 py-16"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            {featuredProjects.slice(0, 3).map((project, idx) => (
              <motion.div 
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0 
                } : { 
                  opacity: 0, 
                  scale: 0.8, 
                  y: 50 
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + idx * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -8
                }}
                onClick={() => handleProjectClick(project)}
                data-project-card
              >
                {/* Project Image - Square */}
                <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                  <motion.div
                    className="relative w-full h-full"
                    initial={{ scale: 1.1, opacity: 0.8 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0.8 }}
                    transition={{ 
                      duration: 1.2, 
                      delay: 0.6 + idx * 0.2,
                      ease: "easeOut"
                    }}
                  >
                    <Image
                      src={project.poster}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </motion.div>
                  
                  {/* Hover Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  
                  {/* Play Icon on Hover */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
                    </div>
                  </motion.div>
                </div>
                
                {/* Project Label */}
                <motion.h3 
                  className="text-lg font-heading text-gray-900 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + idx * 0.2,
                    ease: "easeOut"
                  }}
                >
                  {project.category}
                </motion.h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}
