'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const coreValues = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Sản xuất chuyên nghiệp",
      description: "Từ concept đến hoàn thiện với chất lượng cao nhất",
      color: "primary"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Sáng tạo không giới hạn",
      description: "Luôn tìm kiếm những ý tưởng mới và độc đáo",
      color: "secondary"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Cam kết chất lượng",
      description: "Đảm bảo mọi dự án đều vượt quá mong đợi",
      color: "accent"
    }
  ];

  return (
    <section className="py-32 px-6 mx-auto max-w-7xl relative overflow-hidden" data-scroll-section>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10" ref={ref}>
        {/* Content - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Artistic Heading */}
          <motion.h2 
            className="text-6xl md:text-7xl font-accent mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-primary">Về</span>
            <span className="block text-secondary">chúng tôi</span>
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            className="text-xl text-gray-700 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            XƯỞNG ART PRODUCTION là studio sản xuất video chuyên nghiệp với hơn 5 năm kinh nghiệm 
            trong lĩnh vực quảng cáo, music video và phim tài liệu. Chúng tôi tự hào là đối tác 
            tin cậy của nhiều thương hiệu lớn tại Việt Nam.
          </motion.p>

          {/* Core Values */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {coreValues.map((value, index) => (
              <motion.div 
                key={value.title}
                className="flex items-start gap-6 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              >
                <motion.div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    value.color === 'primary' ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white' :
                    value.color === 'secondary' ? 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white' :
                    'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-black'
                  }`}
                  whileHover={{ rotate: 5 }}
                >
                  {value.icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-heading mb-2 text-black group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual - Right Side */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Behind the Scenes Video/Image */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            {/* Video Background */}
            <video
              className="w-full h-full object-cover"
              src="/videos/behind-scenes.mp4"
              poster="/images/behind-scenes-poster.jpg"
              autoPlay
              loop
              muted
              playsInline
            />
            
            {/* Fallback Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-heading mb-2">Behind the Scenes</h3>
              <p className="text-white/90">Quy trình sản xuất chuyên nghiệp</p>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute top-8 right-8 w-12 h-12 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
