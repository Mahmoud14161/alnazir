import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, CalendarCheck, ChevronLeft, Stethoscope, Star, Quote } from 'lucide-react';
import { Link, useOutletContext } from 'react-router-dom';
import { departments, reviews } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { openBooking } = useOutletContext<{ openBooking: () => void }>();
  const { t, language } = useLanguage();

  const videos = ['/رعاية.webm', '/اشعة.webm', '/حضانات.webm'];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const isReaya = videos[currentVideoIndex] === '/رعاية.webm';
      const skipTime = isReaya ? 7 : 0;
      
      if (skipTime > 0 && videoRef.current.currentTime >= videoRef.current.duration - skipTime) {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
      }
    }
  };

  const handleEnded = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videos[currentVideoIndex];
      videoRef.current.play().catch(console.error);
    }
  }, [currentVideoIndex]);

  return (
    <>
      {/* Professional Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden min-h-[60vh] lg:min-h-[75vh] flex items-center">
        <div className="absolute inset-0 bg-gray-900">
          <video 
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
            muted 
            playsInline
            className="w-full h-full object-cover opacity-50 object-center transition-opacity duration-1000 scale-125 md:scale-150 transform-gpu"
          />
          <div className={`absolute inset-0 bg-gradient-to-${language === 'ar' ? 'l' : 'r'} from-gray-900/90 via-gray-900/70 to-transparent`}></div>
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-6 h-6 text-red-500" />
              <span className="text-red-400 font-bold tracking-wide">{t('home.heroTitle1')}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[1.2] mb-6 text-white">
              {language === 'ar' ? <>مستشفى <span className="text-red-500">النذير</span> التخصصي</> : <><span className="text-red-500">Al-Nazir</span> Specialist Hospital</>}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl font-medium">
              {t('home.heroDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                onClick={openBooking}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-[#A3924A] text-white rounded-lg font-bold text-base sm:text-lg hover:bg-[#8D7F41] shadow-lg shadow-[#A3924A]/30 transition-all flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-5 h-5" />
                {t('home.bookNow')}
              </button>
              <Link 
                to="/services/clinics"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 text-white backdrop-blur-sm border border-white/20 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center"
              >
                {t('home.viewServices')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-red-600 font-bold mb-3 tracking-wide">{t('home.featuresSubtitle')}</h4>
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900 leading-tight">
                {t('home.featuresTitle')}
              </h2>
              <div className="w-20 h-1.5 bg-red-600 rounded-full mb-8"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
                {t('home.feature2Desc')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                {t('home.feature4Desc')}
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-gray-900 mb-2">24/7</span>
                  <span className="text-gray-500 font-bold">{t('home.feature1')}</span>
                </div>
                <div className={`flex flex-col ${language === 'ar' ? 'border-r-2 pr-8' : 'border-l-2 pl-8'} border-gray-100`}>
                  <span className="text-4xl font-black text-gray-900 mb-2">+50</span>
                  <span className="text-gray-500 font-bold">{t('home.feature2')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: language === 'ar' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className={`absolute -inset-4 bg-gray-100 rounded-3xl transform ${language === 'ar' ? 'translate-x-4' : '-translate-x-4'} translate-y-4 -z-10`}></div>
              <div className={`absolute -inset-4 bg-red-600/10 rounded-3xl transform ${language === 'ar' ? '-translate-x-4' : 'translate-x-4'} -translate-y-4 -z-10`}></div>
              <img 
                src="/photos/واجهة.png" 
                alt="Hospital Exterior" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Department: Clinics snippet */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Stethoscope className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
                {t('nav.clinics')}
              </h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                {t('home.bestDoctorsDesc')}
              </p>
              
              <Link 
                to="/services/clinics"
                className="inline-flex items-center mt-4 px-8 py-3.5 bg-gray-900 text-white rounded-lg font-bold hover:bg-red-600 transition-colors shadow-lg"
              >
                {t('home.viewServices')}
              </Link>
            </div>
            
            <div className="lg:w-1/2 w-full">
               <div className="grid grid-cols-2 gap-4">
                  <img src="/photos/معرض/Screenshot 2026-08-09 150700.png" alt="Clinic Interior" className="rounded-2xl h-64 w-full object-cover shadow-lg" />
                  <img src="/photos/معرض/Screenshot 2026-08-09 150736.png" alt="Doctor Consultation" className="rounded-2xl h-64 w-full object-cover mt-12 shadow-lg" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Departments Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-red-600 font-bold mb-3 tracking-wide">{language === 'ar' ? 'الخدمات الطبية' : 'Medical Services'}</h4>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
              {language === 'ar' ? 'أقسام المستشفى' : 'Hospital Departments'}
            </h2>
            <div className="w-20 h-1.5 bg-red-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 font-medium">
              {language === 'ar' ? 'نقدم رعاية صحية متكاملة من خلال أقسامنا الطبية المجهزة بأحدث التقنيات تحت إشراف نخبة من الاستشاريين.' : 'We provide comprehensive healthcare through our medical departments equipped with the latest technologies.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.filter(d => d.image).map((dept, index) => (
              <motion.div 
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl shadow-lg flex flex-col h-[300px] md:h-[400px] hover:shadow-2xl hover:shadow-red-900/20 transition-shadow duration-300 border border-gray-100/10"
              >
                {/* Background Image & Gradient */}
                <div className="absolute inset-0">
                  <img src={dept.image} alt={dept.title[language as keyof typeof dept.title]} className="w-full h-full object-cover transform-gpu will-change-transform group-hover:scale-110 transition-transform duration-500 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/20 opacity-90 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                  <div className={`w-14 h-14 bg-white/20 border border-white/20 text-white rounded-2xl flex items-center justify-center mb-auto shadow-sm ${language === 'ar' ? 'ml-auto' : 'mr-auto'}`}>
                    <dept.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-black mb-3 text-white">{dept.title[language as keyof typeof dept.title]}</h3>
                  <p className="text-gray-300 font-medium leading-relaxed mb-6 line-clamp-3">
                    {dept.desc[language as keyof typeof dept.desc]}
                  </p>
                  
                  <Link 
                    to={`/services/${dept.id}`}
                    className="inline-flex items-center text-white font-bold group-hover:text-red-400 transition-colors"
                  >
                    {language === 'ar' ? 'اكتشف المزيد' : 'Learn More'} <ChevronLeft className={`w-5 h-5 ${language === 'ar' ? 'mr-2' : 'ml-2 rotate-180'} group-hover:translate-x-1 transition-transform`} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h4 className="text-red-600 font-bold mb-3 tracking-wide">{t('home.reviewsSubtitle')}</h4>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
              {t('home.reviewsTitle')}
            </h2>
            <div className="w-16 h-1.5 bg-red-600 rounded-full mx-auto mb-6"></div>
          </div>

          <div className="relative overflow-hidden py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden relative flex" dir="ltr">
              <motion.div 
                className="flex gap-6 w-max will-change-transform"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  repeat: Infinity, 
                  ease: "linear", 
                  duration: 40
                }}
              >
                {[...reviews, ...reviews].map((review, index) => (
                  <div 
                    key={`${review.id}-${index}`} 
                    className="w-[300px] md:w-[350px] flex-shrink-0"
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  >
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col relative hover:shadow-md transition-shadow">
                      <Quote className={`absolute top-6 ${language === 'ar' ? 'left-6 rotate-180' : 'right-6'} w-10 h-10 text-gray-50`} />
                      <div className="flex text-yellow-400 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 leading-relaxed font-medium mb-8 flex-1 text-lg relative z-10">
                        "{review.text[language as keyof typeof review.text]}"
                      </p>
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                          {review.name[language as keyof typeof review.name].charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{review.name[language as keyof typeof review.name]}</h4>
                          <span className="text-sm text-gray-500 font-medium">{review.role[language as keyof typeof review.role]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Map Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h4 className="text-red-600 font-bold mb-3 tracking-wide">{t('home.locationSubtitle')}</h4>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
              {t('home.locationTitle')}
            </h2>
            <div className="w-16 h-1.5 bg-red-600 rounded-full mx-auto mb-6"></div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 h-[400px] md:h-[500px] relative mb-8">
            <iframe 
              src={`https://maps.google.com/maps?q=${language === 'ar' ? 'مستشفى%20النذير%20التخصصي' : 'Al-Nazir%20Specialist%20Hospital'}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title={language === 'ar' ? 'موقع مستشفى النذير التخصصي' : 'Al-Nazir Specialist Hospital Location'}
            ></iframe>
          </div>
          <div className="text-center">
            <a 
              href="https://maps.app.goo.gl/NrzAmSS7YpxGwG9y7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition-colors shadow-md"
            >
              {t('home.directions')}
            </a>
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="py-20 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
            {t('home.ctaTitle')}
          </h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto font-medium">
            {t('home.ctaDesc')}
          </p>
          <button 
            onClick={openBooking}
            className="px-10 py-4 bg-white text-red-600 rounded-lg font-black text-lg hover:bg-gray-50 shadow-xl transition-all hover:-translate-y-1"
          >
            طلب حجز موعد
          </button>
        </div>
      </section>
    </>
  );
}
