'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function ProjectModal({ isOpen, onClose, project }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Section */}
            <div className="relative h-[60vh] bg-black">
              <video
                className="w-full h-full object-cover"
                src={project.video || `/videos/preview-${(project.id % 6) + 1}.mp4`}
                poster={project.poster || `/images/preview-${(project.id % 6) + 1}.jpg`}
                autoPlay
                loop
                muted
                playsInline
                controls
              />
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Project Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h2 className="text-3xl md:text-4xl font-heading mb-2">{project.title}</h2>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    {project.category}
                  </span>
                  {project.year && (
                    <span className="text-sm opacity-80">{project.year}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-heading mb-4">Giới thiệu dự án</h3>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      {project.description || "Đây là một dự án sản xuất video chuyên nghiệp với chất lượng cao và ý tưởng sáng tạo. Chúng tôi đã tạo ra những hình ảnh đẹp mắt và câu chuyện hấp dẫn để truyền tải thông điệp của khách hàng."}
                    </p>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Credits */}
                  {project.credits && project.credits.length > 0 && (
                    <div>
                      <h4 className="font-heading mb-3">Credits</h4>
                      <div className="space-y-2">
                        {project.credits.map((credit, idx) => (
                          <div key={idx} className="text-sm">
                            <span className="font-medium">{credit.role}:</span>
                            <span className="text-gray-600 ml-2">{credit.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Process */}
                  {project.process && project.process.length > 0 && (
                    <div>
                      <h4 className="font-heading mb-3">Quy trình</h4>
                      <div className="space-y-2">
                        {project.process.map((step, idx) => (
                          <div key={idx} className="text-sm">
                            <span className="font-medium">{step.title}:</span>
                            <span className="text-gray-600 ml-2">{step.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Gallery */}
                  {project.gallery && project.gallery.length > 0 && (
                    <div>
                      <h4 className="font-heading mb-3">Hình ảnh</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.gallery.slice(0, 4).map((image, idx) => (
                          <img
                            key={idx}
                            src={image.url}
                            alt={`${project.title} - Image ${idx + 1}`}
                            className="w-full h-20 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
