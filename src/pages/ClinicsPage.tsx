import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Users, CalendarCheck, UserRound, Search } from 'lucide-react';
import { clinicsData } from '../data';
import { useOutletContext } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function ClinicsPage() {
  const { openBooking } = useOutletContext<{ openBooking: () => void }>();
  const [searchQuery, setSearchQuery] = useState('');
  const { t, language } = useLanguage();

  const filteredClinics = clinicsData.map(clinic => {
    // If the clinic name matches, include all its doctors
    if (clinic.name[language as keyof typeof clinic.name].toLowerCase().includes(searchQuery.toLowerCase())) {
      return clinic;
    }
    // Otherwise, filter doctors by name
    const matchingDoctors = clinic.doctors.filter(doctor => doctor.name[language as keyof typeof doctor.name].toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Return clinic with only matching doctors, if any
    if (matchingDoctors.length > 0) {
      return { ...clinic, doctors: matchingDoctors };
    }
    
    return null;
  }).filter(Boolean) as typeof clinicsData;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop" 
            alt="Clinics" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-red-600/30"
          >
            <Stethoscope className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            {t('nav.clinics')}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto font-medium mb-10"
          >
            {t('home.bestDoctorsDesc')}
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={openBooking}
            className="px-8 py-4 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 mx-auto"
          >
            <CalendarCheck className="w-5 h-5" />
            {t('home.bookNow')}
          </motion.button>
        </div>
      </section>

      {/* Clinics and Doctors Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h4 className="text-red-600 font-bold mb-3 tracking-wide">{t('home.featuresSubtitle')}</h4>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
              {t('nav.clinics')}
            </h2>
            <div className="w-16 h-1.5 bg-red-600 rounded-full mx-auto mb-6"></div>
          </div>

          <div className="max-w-2xl mx-auto mb-16 relative">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder={language === 'ar' ? 'ابحث عن تخصص أو اسم طبيب...' : 'Search for a specialty or doctor name...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full ${language === 'ar' ? 'pl-14 pr-6' : 'pr-14 pl-6'} py-4 bg-white border border-gray-200 rounded-xl shadow-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all text-gray-800 text-lg`}
              />
              <div className={`absolute ${language === 'ar' ? 'left-5' : 'right-5'} text-gray-400`}>
                <Search className="w-6 h-6" />
              </div>
            </div>
          </div>

          {filteredClinics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClinics.map((clinic, index) => (
              <motion.div 
                key={clinic.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all flex flex-col group"
              >
                <div className="p-6 border-b border-gray-50 relative overflow-hidden">
                  <div className={`absolute top-0 ${language === 'ar' ? 'right-0 rounded-bl-full' : 'left-0 rounded-br-full'} w-32 h-32 bg-red-50 -z-10 opacity-50 group-hover:scale-110 transition-transform`}></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors shadow-sm shrink-0">
                      <Stethoscope className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-black text-xl text-gray-900 mb-1">
                        {clinic.name[language as keyof typeof clinic.name]}
                      </h3>
                      <span className="text-gray-500 font-medium text-sm flex items-center gap-1">
                        <Users className="w-4 h-4" /> {clinic.doctors.length} {language === 'ar' ? 'أطباء' : 'Doctors'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-1 bg-gray-50/50">
                  <div className="space-y-3">
                    {clinic.doctors.map((doctor) => (
                      <div key={doctor.id} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-red-200 transition-colors">
                        <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center text-red-600 shrink-0">
                          <UserRound className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-gray-800 text-sm">{doctor.name[language as keyof typeof doctor.name]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <Search className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{language === 'ar' ? 'لا توجد نتائج مطابقة' : 'No matching results found'}</h3>
              <p className="text-gray-500 font-medium">{language === 'ar' ? 'جرب البحث بكلمات أخرى أو تحقق من التخصصات المتاحة.' : 'Try searching with different keywords or check available specialties.'}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
