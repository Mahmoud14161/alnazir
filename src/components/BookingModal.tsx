import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2 } from 'lucide-react';
import { clinicsData } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [bookingNumber, setBookingNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t, language } = useLanguage();
  
  // ضع رابط الـ Web App الذي ستحصل عليه من Google Apps Script هنا
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxtAza5f20nR5fEjhMJGv-0bwpEMGZSO8XrbF1x_w4TAkVP2cSPwp9456ob_e3ByRHq/exec';
  
  const [selectedClinic, setSelectedClinic] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setBookingNumber('');
      setSelectedClinic('');
      setSelectedDoctor('');
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const num = Math.floor(1000 + Math.random() * 9000);
    const generatedBookingNumber = `#BKG-${num}`;
    
    const clinicObj = clinicsData.find(c => c.id === selectedClinic);
    const doctorObj = clinicObj?.doctors.find(d => d.id === selectedDoctor);

    const bookingData = new URLSearchParams();
    bookingData.append('bookingId', generatedBookingNumber);
    bookingData.append('name', formData.get('name') as string);
    bookingData.append('phone', formData.get('phone') as string);
    bookingData.append('clinic', clinicObj ? clinicObj.name.ar : 'غير محدد');
    bookingData.append('doctor', doctorObj ? doctorObj.name.ar : 'غير محدد');
    bookingData.append('date', formData.get('date') as string);
    bookingData.append('timestamp', new Date().toLocaleString('ar-EG'));

    try {
      if (GOOGLE_SCRIPT_URL !== 'ضع_رابط_سكربت_جوجل_هنا') {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          body: bookingData,
        });
      } else {
        await new Promise(r => setTimeout(r, 800)); // Mock delay
      }
      setBookingNumber(generatedBookingNumber);
      setStep('success');
    } catch (error) {
      console.error('Error saving booking to sheet:', error);
      alert(language === 'ar' ? 'حدث خطأ أثناء الحجز، يرجى المحاولة مرة أخرى.' : 'Error occurred, please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const currentClinicDoctors = clinicsData.find(c => c.id === selectedClinic)?.doctors || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            {step === 'form' ? (
              <>
                <div className="bg-gray-50 p-6 border-b border-gray-100 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-1">{t('booking.title')}</h3>
                    <p className="text-gray-500 text-sm font-medium">{t('booking.subtitle')}</p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-red-100 hover:text-red-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-6">
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">{t('booking.name')}</label>
                        <input type="text" name="name" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all bg-gray-50 hover:bg-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">{t('booking.phone')}</label>
                        <input type="tel" name="phone" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all bg-gray-50 hover:bg-white" dir="ltr" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">{t('booking.clinic')}</label>
                      <select 
                        required
                        value={selectedClinic}
                        onChange={(e) => {
                          setSelectedClinic(e.target.value);
                          setSelectedDoctor(''); // reset doctor when clinic changes
                        }}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all bg-gray-50 hover:bg-white text-gray-700"
                      >
                        <option value="">{language === 'ar' ? 'اختر العيادة...' : 'Choose a clinic...'}</option>
                        {clinicsData.map(c => <option key={c.id} value={c.id}>{c.name[language as keyof typeof c.name]}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">{t('booking.doctor')}</label>
                      <select 
                        value={selectedDoctor}
                        onChange={(e) => setSelectedDoctor(e.target.value)}
                        disabled={!selectedClinic}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all bg-gray-50 hover:bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">{selectedClinic ? (language === 'ar' ? 'اختر الطبيب...' : 'Choose a doctor...') : (language === 'ar' ? 'اختر العيادة أولاً' : 'Choose a clinic first')}</option>
                        {currentClinicDoctors.map(d => <option key={d.id} value={d.id}>{d.name[language as keyof typeof d.name]}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">{t('booking.date')}</label>
                      <input type="date" name="date" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all bg-gray-50 hover:bg-white text-gray-700" />
                    </div>

                    <button disabled={isLoading} type="submit" className="w-full py-4 mt-6 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 shadow-md shadow-red-600/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-wait">
                      {isLoading ? (language === 'ar' ? 'جاري الحجز...' : 'Booking...') : t('booking.submit')}
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="p-10 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">{t('booking.success')}</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-xl py-4 px-8 mb-8 w-full mt-4">
                  <span className="block text-sm text-gray-500 font-bold mb-1">{language === 'ar' ? 'رقم الحجز الخاص بك' : 'Your Booking Number'}</span>
                  <span className="block text-2xl font-black text-red-600 tracking-wider" dir="ltr">{bookingNumber}</span>
                </div>
                <button 
                  onClick={onClose}
                  className="w-full py-3.5 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {language === 'ar' ? 'إغلاق' : 'Close'}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
