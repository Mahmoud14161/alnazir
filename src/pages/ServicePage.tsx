import React from 'react';
import { useParams, Navigate, useOutletContext } from 'react-router-dom';
import { motion } from 'motion/react';
import { departments } from '../data';
import { ShieldCheck, CalendarCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServicePage() {
  const { id } = useParams<{ id: string }>();
  const { openBooking } = useOutletContext<{ openBooking: () => void }>();
  const { t, language } = useLanguage();
  
  const service = departments.find(d => d.id === id);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Service Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-24">
        <div className="absolute inset-0">
          <img 
            src={service.image || "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop"}
            alt={service.title[language as keyof typeof service.title]}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-red-600/30"
          >
            <service.icon className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            {service.title[language as keyof typeof service.title]}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl font-medium"
          >
            {service.desc[language as keyof typeof service.desc]}
          </motion.p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-red-600" />
                <h2 className="text-3xl font-black text-gray-900">{t('service.features')}</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium">
                {language === 'ar' ? `في قسم ${service.title.ar}، ` : `In the ${service.title.en} department, `}
                {t('service.featuresDesc')}
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  t('service.feature1'),
                  t('service.feature2'),
                  t('service.feature3'),
                  t('service.feature4')
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-lg font-bold text-gray-800">
                    <CheckCircle2 className={`w-6 h-6 text-red-500 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
                    {item}
                  </li>
                ))}
              </ul>

              <button 
                onClick={openBooking}
                className="px-8 py-4 bg-gray-900 text-white rounded-lg font-bold hover:bg-red-600 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-5 h-5" />
                {t('nav.book')}
              </button>
            </div>
            
            <div className="relative">
              <div className={`absolute -inset-4 bg-red-50 rounded-3xl transform ${language === 'ar' ? 'translate-x-4' : '-translate-x-4'} translate-y-4 -z-10`}></div>
              
              {service.subImages && service.subImages.length > 0 ? (
                <div className="flex gap-4 h-[500px]">
                  <div className="w-1/2 h-full">
                    <img 
                      src={service.image || "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop"} 
                      alt={service.title[language as keyof typeof service.title]} 
                      className="rounded-2xl shadow-xl w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col gap-4 h-full">
                    {service.subImages.map((img: string, idx: number) => (
                      <div key={idx} className="h-[calc(50%-0.5rem)] w-full">
                        <img 
                          src={img} 
                          alt={`${service.title[language as keyof typeof service.title]} ${idx + 1}`} 
                          className="rounded-2xl shadow-md w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <img 
                  src={service.image || "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop"} 
                  alt={service.title[language as keyof typeof service.title]} 
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
