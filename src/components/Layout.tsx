import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Activity, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock,
  CalendarCheck,
  Globe,
  Facebook,
  Instagram,
  Youtube,
  Twitter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BookingModal from './BookingModal';
import { useLanguage } from '../contexts/LanguageContext';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex flex-col bg-[#F8FAFC] text-gray-900 font-sans selection:bg-red-100 selection:text-red-900 ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2.5 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center font-medium">
              <Phone className={`w-4 h-4 ${language === 'ar' ? 'ml-2' : 'mr-2'} text-red-500`} /> 
              <span dir="ltr">0224230003</span>
            </span>
            <span className="flex items-center text-gray-300">
              <MapPin className={`w-4 h-4 ${language === 'ar' ? 'ml-2' : 'mr-2'} text-red-500`} /> 
              {language === 'ar' ? 'ش منشية الجمل, الزاوية الحمراء, القاهرة' : 'Manshiyat Al-Jamal St, El Zawya El Hamra, Cairo'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 font-medium">
            <Clock className="w-4 h-4 text-red-500" />
            {language === 'ar' ? 'نعمل على مدار 24 ساعة طوال أيام الأسبوع' : 'Open 24 hours a day, 7 days a week'}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link to="/" className="flex items-center cursor-pointer shrink-0">
              <img src="/logo.png" alt="Logo" className={`w-20 h-20 md:w-24 md:h-24 object-contain scale-110 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              <div className="flex flex-col justify-center items-start mt-1">
                <span className="text-lg md:text-xl font-black text-gray-900 whitespace-nowrap">
                   {language === 'ar' ? <>مستشفى <span className="text-red-600">النذير</span></> : <><span className="text-red-600">Al-Nazir</span> Hospital</>}
                </span>
                <span className="text-xs md:text-sm font-bold text-gray-500 tracking-wider">
                  {language === 'ar' ? 'التخصصي' : 'Specialist'}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-5 flex-1 justify-center px-4">
              <Link to="/" className="text-gray-700 hover:text-red-600 font-semibold text-[13px] xl:text-sm whitespace-nowrap transition-colors">{t('nav.home')}</Link>
              <Link to="/services/clinics" className="text-gray-700 hover:text-red-600 font-semibold text-[13px] xl:text-sm whitespace-nowrap transition-colors">{t('nav.clinics')}</Link>
              <Link to="/services/operations" className="text-gray-700 hover:text-red-600 font-semibold text-[13px] xl:text-sm whitespace-nowrap transition-colors">{t('nav.operations')}</Link>
              <Link to="/services/radiology" className="text-gray-700 hover:text-red-600 font-semibold text-[13px] xl:text-sm whitespace-nowrap transition-colors">{t('nav.radiology')}</Link>
              <Link to="/services/icu" className="text-gray-700 hover:text-red-600 font-semibold text-[13px] xl:text-sm whitespace-nowrap transition-colors">{t('nav.icu')}</Link>
              <Link to="/services/incubators" className="text-gray-700 hover:text-red-600 font-semibold text-[13px] xl:text-sm whitespace-nowrap transition-colors">{t('nav.incubators')}</Link>
              <Link to="/services/lab" className="text-gray-700 hover:text-red-600 font-semibold text-[13px] xl:text-sm whitespace-nowrap transition-colors">{t('nav.lab')}</Link>
              <Link to="/services/daycare" className="text-gray-700 hover:text-red-600 font-semibold text-[13px] xl:text-sm whitespace-nowrap transition-colors">{t('nav.daycare')}</Link>
              <Link to="/gallery" className="text-gray-700 hover:text-red-600 font-semibold text-[13px] xl:text-sm whitespace-nowrap transition-colors">{t('nav.gallery')}</Link>
            </div>

            {/* Actions */}
            <div className="flex items-center shrink-0 gap-3">
              <button 
                onClick={toggleLanguage}
                className="flex items-center justify-center p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title={language === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
              >
                <Globe className="w-5 h-5" />
                <span className={`text-sm font-semibold ${language === 'ar' ? 'mr-1' : 'ml-1'}`}>
                  {language === 'ar' ? 'En' : 'عربي'}
                </span>
              </button>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="hidden md:flex items-center justify-center px-6 py-2.5 bg-[#A3924A] text-white text-sm font-bold rounded-lg hover:bg-[#8D7F41] shadow-md shadow-[#A3924A]/20 transition-all active:scale-95"
              >
                {t('nav.book')}
              </button>
              <button 
                className={`lg:hidden ${language === 'ar' ? 'mr-2' : 'ml-2'} text-gray-700 hover:text-red-600 p-2`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-gray-900/60 z-[60] lg:hidden backdrop-blur-sm"
              />
              
              {/* Drawer */}
              <motion.div 
                initial={{ x: language === 'ar' ? '100%' : '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: language === 'ar' ? '100%' : '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className={`fixed top-0 ${language === 'ar' ? 'right-0' : 'left-0'} h-full w-4/5 max-w-sm bg-white z-[70] lg:hidden shadow-2xl flex flex-col`}
              >
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
                    <div className="flex flex-col">
                      <span className="text-xl font-black text-gray-900 leading-none mb-1">
                        {language === 'ar' ? <>مستشفى <span className="text-red-600">النذير</span></> : <><span className="text-red-600">Al-Nazir</span></>}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col space-y-2">
                  <Link to="/" className={`text-${language === 'ar' ? 'right' : 'left'} text-gray-800 font-bold py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors`}>{t('nav.home')}</Link>
                  <Link to="/services/clinics" className={`text-${language === 'ar' ? 'right' : 'left'} text-gray-800 font-bold py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors`}>{t('nav.clinics')}</Link>
                  <Link to="/services/operations" className={`text-${language === 'ar' ? 'right' : 'left'} text-gray-800 font-bold py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors`}>{t('nav.operations')}</Link>
                  <Link to="/services/radiology" className={`text-${language === 'ar' ? 'right' : 'left'} text-gray-800 font-bold py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors`}>{t('nav.radiology')}</Link>
                  <Link to="/services/icu" className={`text-${language === 'ar' ? 'right' : 'left'} text-gray-800 font-bold py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors`}>{t('nav.icu')}</Link>
                  <Link to="/services/incubators" className={`text-${language === 'ar' ? 'right' : 'left'} text-gray-800 font-bold py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors`}>{t('nav.incubators')}</Link>
                  <Link to="/services/lab" className={`text-${language === 'ar' ? 'right' : 'left'} text-gray-800 font-bold py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors`}>{t('nav.lab')}</Link>
                  <Link to="/services/daycare" className={`text-${language === 'ar' ? 'right' : 'left'} text-gray-800 font-bold py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors`}>{t('nav.daycare')}</Link>
                  <Link to="/gallery" className={`text-${language === 'ar' ? 'right' : 'left'} text-gray-800 font-bold py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors`}>{t('nav.gallery')}</Link>
                </div>
                
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <button 
                    onClick={() => {
                      setIsBookingModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }} 
                    className="w-full px-6 py-4 font-bold text-white bg-[#A3924A] rounded-xl hover:bg-[#8D7F41] transition-colors shadow-lg shadow-[#A3924A]/20 flex items-center justify-center gap-2"
                  >
                    <CalendarCheck className="w-5 h-5" />
                    {t('nav.book')}
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1">
        <Outlet context={{ openBooking: () => setIsBookingModalOpen(true) }} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img src="/logo.png" alt="Logo" className={`w-12 h-12 object-contain ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
                <span className="text-2xl font-black text-white">
                  {language === 'ar' ? 'مستشفى النذير' : 'Al-Nazir Hospital'}
                </span>
              </div>
              <p className="mb-6 max-w-md leading-relaxed font-medium">
                {t('footer.aboutText')}
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-6">{t('footer.quickLinks')}</h3>
              <ul className="space-y-3">
                <li><Link to="/services/clinics" className="hover:text-red-500 font-medium transition-colors">{t('nav.clinics')}</Link></li>
                <li><Link to="/services/operations" className="hover:text-red-500 font-medium transition-colors">{t('nav.operations')}</Link></li>
                <li><Link to="/services/radiology" className="hover:text-red-500 font-medium transition-colors">{t('nav.radiology')}</Link></li>
                <li><Link to="/services/icu" className="hover:text-red-500 font-medium transition-colors">{t('nav.icu')}</Link></li>
                <li><Link to="/faq" className="hover:text-red-500 font-medium transition-colors">{t('nav.faq')}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">{t('footer.contact')}</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Phone className={`w-5 h-5 ${language === 'ar' ? 'ml-3' : 'mr-3'} text-red-500 shrink-0`} />
                  <span dir="ltr" className="font-medium">0224230003</span>
                </li>
                <li className="flex items-start">
                  <MapPin className={`w-5 h-5 ${language === 'ar' ? 'ml-3' : 'mr-3'} text-red-500 shrink-0 mt-1`} />
                  <span className="font-medium leading-relaxed">
                    {language === 'ar' ? 'ش منشية الجمل, الزاوية الحمراء, القاهرة' : 'Manshiyat Al Gamal St, El Zawya El Hamra, Cairo'}
                  </span>
                </li>
                <li className="pt-4 mt-2 border-t border-gray-800 flex items-center gap-4">
                  <a href="https://www.facebook.com/Al.Nazir.Hospital" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-[#1877F2] transition-colors" aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/alnazir.hospital" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-[#E4405F] transition-colors" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@al-nazirhospital1305" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-[#FF0000] transition-colors" aria-label="YouTube">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/NazirHospital" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-[#1DA1F2] transition-colors" aria-label="X (Twitter)">
                    <Twitter className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-medium">
            <p>{t('footer.rights')}</p>
          </div>
        </div>
      </footer>

      {/* Modals and Floating Action Buttons */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />

      {/* Phone Call Floating Button */}
      <a 
        href="tel:0224230003" 
        className={`fixed bottom-[5.5rem] md:bottom-28 ${language === 'ar' ? 'left-6' : 'right-6'} z-50 bg-[#A3924A] text-white p-4 rounded-full shadow-lg shadow-[#A3924A]/40 hover:scale-110 transition-transform flex items-center justify-center hover:shadow-xl hover:shadow-[#A3924A]/50`}
        aria-label="اتصل بنا"
      >
        <Phone className="w-8 h-8 fill-current" />
      </a>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/201118880954" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`fixed bottom-6 ${language === 'ar' ? 'left-6' : 'right-6'} z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center hover:shadow-[0_6px_16px_rgba(37,211,102,0.5)]`}
        aria-label="تواصل معنا عبر واتساب"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
