import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { faqs } from '../data';
import { useOutletContext } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function FaqPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { openBooking } = useOutletContext<{ openBooking: () => void }>();
  const { t, language } = useLanguage();

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <section className="relative bg-gray-900 text-white overflow-hidden py-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop" 
            alt="FAQ" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gray-900/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-red-600/30"
          >
            <HelpCircle className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            {t('faq.title')}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl font-medium"
          >
            {t('faq.desc')}
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-gray-50 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'border-red-200 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-right px-6 py-5 flex items-center justify-between focus:outline-none rtl:text-right ltr:text-left"
                >
                  <span className={`font-bold text-lg ${openFaqIndex === index ? 'text-red-600' : 'text-gray-900'}`}>
                    {faq.question[language as keyof typeof faq.question]}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'bg-red-50 text-red-600 rotate-180' : 'bg-gray-50 text-gray-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-gray-600 font-medium leading-relaxed border-t border-gray-50 pt-4">
                        {faq.answer[language as keyof typeof faq.answer]}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
            <h3 className="text-2xl font-black text-gray-900 mb-4">{t('faq.moreQuestions')}</h3>
            <p className="text-gray-600 font-medium mb-6 max-w-xl mx-auto">
              {t('faq.moreQuestionsDesc')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+1234567890" className="px-8 py-4 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center gap-2">
                <PhoneCall className="w-5 h-5" />
                {t('faq.callNow')}
              </a>
              <button onClick={openBooking} className="px-8 py-4 bg-red-50 text-red-600 rounded-lg font-bold hover:bg-red-100 transition-colors">
                {t('faq.requestBooking')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
