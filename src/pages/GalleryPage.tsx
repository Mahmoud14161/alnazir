import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X } from 'lucide-react';
import { galleryImages, galleryVideos } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{url: string} | null>(null);
  const { t, language } = useLanguage();

  return (
    <>
      <div className="bg-gray-900 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{t('gallery.title')}</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
          {t('gallery.desc')}
        </p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.url} 
                  alt="Gallery" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">{language === 'ar' ? 'معرض الفيديوهات' : 'Video Gallery'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryVideos.map((video, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg h-72">
                <iframe 
                  src={video.url}
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-gray-900/95 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selectedImage.url} 
                alt="Gallery Preview" 
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
