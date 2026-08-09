import { 
  Stethoscope, 
  Activity, 
  Microscope, 
  Baby, 
  Clock, 
  BedDouble, 
  HeartPulse 
} from 'lucide-react';

export const departments = [
  { id: 'clinics', title: { ar: 'العيادات', en: 'Clinics' }, icon: Stethoscope, image: '/photos/عيادات.jfif', desc: { ar: 'نخبة من الاستشاريين والأخصائيين في مختلف التخصصات الطبية لتقديم أفضل رعاية.', en: 'Top consultants and specialists in various medical specialties to provide the best care.' } },
  { id: 'operations', title: { ar: 'العمليات', en: 'Operations' }, icon: Activity, image: '/photos/عمليات.jfif', subImages: [], desc: { ar: 'غرف عمليات مجهزة بأحدث التقنيات الجراحية لضمان أعلى مستويات الأمان والدقة، تحت إشراف نخبة من كبار الجراحين.', en: 'Operating rooms equipped with the latest surgical technologies to ensure the highest levels of safety and precision.' } },
  { id: 'radiology', title: { ar: 'الأشعة التشخيصية', en: 'Radiology' }, icon: HeartPulse, image: '/photos/اشعة.jfif', subImages: ['/photos/اشعة 2.jfif', '/photos/اشعة 3.jpg'], desc: { ar: 'أحدث أجهزة الأشعة السينية والسونار والإيكو، بالإضافة إلى توفر أشعة بانوراما الأسنان لتقديم أدق التشخيصات الطبية.', en: 'Latest X-ray, Sonar, Echo equipment, and Dental Panorama X-rays for accurate medical diagnoses.' } },
  { id: 'icu', title: { ar: 'الرعاية المركزة', en: 'ICU' }, icon: BedDouble, image: '/photos/رعاية مركزة.jpg', desc: { ar: 'وحدة عناية مركزة متكاملة مزودة بأجهزة مراقبة حديثة تحت إشراف طاقم طبي متخصص على مدار الساعة.', en: 'Integrated intensive care unit equipped with modern monitoring devices under specialist supervision 24/7.' } },
  { id: 'incubators', title: { ar: 'الحضانات', en: 'Incubators' }, icon: Baby, image: '/photos/حضانات.jfif', desc: { ar: 'رعاية فائقة للأطفال حديثي الولادة والمبتسرين، مجهزة بأحدث تقنيات التنفس الصناعي والمراقبة.', en: 'Superior care for newborns and premature babies, equipped with the latest ventilation and monitoring technologies.' } },
  { id: 'lab', title: { ar: 'معمل التحاليل', en: 'Laboratory' }, icon: Microscope, image: '/photos/معمل.jpg', desc: { ar: 'معمل تحاليل شامل بأدق الأجهزة الميكنة لضمان سرعة وموثوقية النتائج الطبية على مدار 24 ساعة.', en: 'Comprehensive laboratory with the most accurate automated equipment to ensure fast and reliable medical results 24/7.' } },
  { id: 'daycare', title: { ar: 'إقامة اليوم الواحد', en: 'Day Care' }, icon: Clock, image: '/photos/اليوم الواحد.jfif', desc: { ar: 'خدمات طبية وجراحية سريعة تتيح للمريض تلقي العلاج اللازم والعودة لمنزله في نفس اليوم بأمان تام.', en: 'Fast medical and surgical services allowing the patient to receive necessary treatment and return home safely the same day.' } },
];

export const galleryImages = [
  { url: '/photos/معرض/Screenshot 2026-08-09 150700.png' },
  { url: '/photos/معرض/Screenshot 2026-08-09 150718.png' },
  { url: '/photos/معرض/Screenshot 2026-08-09 150736.png' },
  { url: '/photos/معرض/Screenshot 2026-08-09 150802.png' },
  { url: '/photos/معرض/Screenshot 2026-08-09 150822.png' },
];

export const galleryVideos = [
  { url: 'https://www.youtube.com/embed/RviKx0Ed0HY', type: 'youtube' },
  { url: 'https://www.youtube.com/embed/kNp4uBGMBns', type: 'youtube' },
  { url: 'https://www.youtube.com/embed/Htv8q1PpJVU', type: 'youtube' },
  { url: 'https://www.youtube.com/embed/1zaFroLJtsk', type: 'youtube' },
  { url: 'https://www.youtube.com/embed/cU14SNiB2xk', type: 'youtube' },
  { url: 'https://www.youtube.com/embed/eAiKGF4HL8E', type: 'youtube' },
  { url: 'https://www.youtube.com/embed/j8PodFIRj0M', type: 'youtube' },
];

export const faqs = [
  { question: { ar: "كيف يمكنني حجز موعد في العيادات الخارجية؟", en: "How can I book an appointment in the outpatient clinics?" }, answer: { ar: "يمكنك حجز موعد من خلال النقر على زر 'احجز موعدك الآن' في الموقع، أو الاتصال بنا مباشرة على أرقام المستشفى. سيقوم فريق خدمة العملاء بتأكيد موعدك في أقرب وقت متاح.", en: "You can book an appointment by clicking the 'Book Appointment Now' button on the website, or by contacting us directly. Our customer service team will confirm your appointment as soon as possible." } },
  { question: { ar: "هل توفر المستشفى خدمة الطوارئ على مدار الساعة؟", en: "Does the hospital provide emergency services 24/7?" }, answer: { ar: "نعم، قسم الطوارئ في مستشفى النذير يعمل على مدار 24 ساعة طوال أيام الأسبوع، ومجهز لاستقبال كافة الحالات الحرجة والتعامل معها فوراً.", en: "Yes, the emergency department at Al-Nazir Hospital operates 24/7 and is fully equipped to handle all critical cases immediately." } },
  { question: { ar: "ما هي الأوراق المطلوبة عند الحضور للموعد؟", en: "What documents are required when attending the appointment?" }, answer: { ar: "يُرجى إحضار بطاقة الهوية الوطنية أو جواز السفر، بالإضافة إلى أي تقارير طبية سابقة أو تحاليل أو أشعة تتعلق بحالتك الصحية لمساعدة الطبيب في التشخيص.", en: "Please bring your national ID card or passport, in addition to any previous medical reports, tests, or scans related to your condition." } },
  { question: { ar: "هل تقبلون بطاقات التأمين الطبي؟", en: "Do you accept medical insurance cards?" }, answer: { ar: "نعم، نتعامل مع معظم شركات التأمين الطبي الكبرى. يُرجى التواصل معنا هاتفياً وتوضيح شركة التأمين الخاصة بك للتأكد من التغطية وتفاصيل الموافقة.", en: "Yes, we accept most major medical insurance companies. Please contact us and provide your insurance details to check coverage." } },
  { question: { ar: "كيف يمكنني الحصول على نتائج التحاليل أو الأشعة؟", en: "How can I get my lab or radiology results?" }, answer: { ar: "يمكنك استلام النتائج مطبوعة من قسم الاستقبال بالمستشفى، أو يمكننا إرسالها إليك عبر الواتساب أو البريد الإلكتروني الخاص بك لضمان راحتك.", en: "You can collect the printed results from the hospital reception, or we can send them to you via WhatsApp or Email." } },
];

export const reviews = [
  { id: 1, name: { ar: "أحمد مصطفى", en: "Ahmed Mostafa" }, text: { ar: "مستشفى ممتازة، دكاترة محترمين وتمريض بيهتم جداً بالمريض.", en: "Excellent hospital, respectable doctors, and very caring nursing staff." }, rating: 5, role: { ar: "مريض عيادات", en: "Clinic Patient" } },
  { id: 2, name: { ar: "سارة عبد الرحمن", en: "Sarah Abdelrahman" }, text: { ar: "عناية فائقة ونضافة ملحوظة.. شكراً ستاف التمريض.", en: "Superior care and noticeable cleanliness.. Thanks to the nursing staff." }, rating: 5, role: { ar: "مريضة جراحة", en: "Surgery Patient" } },
  { id: 3, name: { ar: "محمود حسن", en: "Mahmoud Hassan" }, text: { ar: "النضافة والاهتمام ممتازين، تحس إنك في فندق. دكاترة العظام شاطرين جداً.", en: "Cleanliness and attention are excellent. Orthopedic doctors are very skilled." }, rating: 5, role: { ar: "مريض عظام", en: "Orthopedic Patient" } },
  { id: 4, name: { ar: "فاطمة علي", en: "Fatma Ali" }, text: { ar: "الاستقبال محترم والإجراءات سريعة. دكتورة النسا ممتازة.", en: "The reception is respectful and procedures are fast. The OBGYN doctor is excellent." }, rating: 5, role: { ar: "مريضة عيادات", en: "Clinic Patient" } },
];

export const clinicsData = [
  { id: 'internal-medicine', name: { ar: 'الباطنة', en: 'Internal Medicine' }, doctors: [
    { id: 'dr-mohamed-khalil', name: { ar: 'د. محمد خليل (استشاري)', en: 'Dr. Mohamed Khalil (Consultant)' } },
    { id: 'dr-mahmoud-salama', name: { ar: 'د. محمود سلامة', en: 'Dr. Mahmoud Salama' } },
    { id: 'dr-essam-essawy', name: { ar: 'د. عصام عيسوى (استشاري)', en: 'Dr. Essam Essawy (Consultant)' } },
    { id: 'dr-kamal-abo-elhassan', name: { ar: 'د. كمال أبو الحسن', en: 'Dr. Kamal Abo Elhassan' } },
    { id: 'dr-mostafa-nada', name: { ar: 'د. مصطفى ندا (أخصائي باطنة وكلى)', en: 'Dr. Mostafa Nada (Specialist)' } },
    { id: 'dr-mohamed-mohy', name: { ar: 'د. محمد محي (صدر)', en: 'Dr. Mohamed Mohy (Chest)' } },
  ] },
  { id: 'pediatrics', name: { ar: 'الأطفال', en: 'Pediatrics' }, doctors: [
    { id: 'dr-elham-fathy', name: { ar: 'د. إلهام فتحي', en: 'Dr. Elham Fathy' } },
  ] },
  { id: 'obgyn', name: { ar: 'نساء وتوليد', en: 'Obstetrics & Gynecology' }, doctors: [
    { id: 'dr-mostafa-kamel', name: { ar: 'د. مصطفى كامل', en: 'Dr. Mostafa Kamel' } },
    { id: 'dr-abdallah-mahmoud', name: { ar: 'د. عبدالله محمود', en: 'Dr. Abdallah Mahmoud' } },
    { id: 'dr-enas-ahmed', name: { ar: 'د. إيناس أحمد', en: 'Dr. Enas Ahmed' } },
    { id: 'dr-wessam-ragab', name: { ar: 'د. وسام رجب', en: 'Dr. Wessam Ragab' } },
  ] },
  { id: 'orthopedics', name: { ar: 'العظام', en: 'Orthopedics' }, doctors: [
    { id: 'dr-ahmed-mamdouh', name: { ar: 'د. أحمد ممدوح', en: 'Dr. Ahmed Mamdouh' } },
    { id: 'dr-omar-khaled', name: { ar: 'د. عمر خالد', en: 'Dr. Omar Khaled' } },
    { id: 'dr-ismail-yassin', name: { ar: 'د. إسماعيل ياسين', en: 'Dr. Ismail Yassin' } },
    { id: 'dr-ahmed-shaalan', name: { ar: 'د. أحمد شعلان (روماتويد)', en: 'Dr. Ahmed Shaalan' } },
    { id: 'dr-mahmoud-tarek', name: { ar: 'د. محمود طارق', en: 'Dr. Mahmoud Tarek' } },
    { id: 'dr-mohamed-abdel-fattah', name: { ar: 'د. محمد عبد الفتاح', en: 'Dr. Mohamed Abdel Fattah' } },
  ] },
  { id: 'surgery', name: { ar: 'الجراحة', en: 'Surgery' }, doctors: [
    { id: 'dr-ibrahim-osama', name: { ar: 'د. إبراهيم أسامة', en: 'Dr. Ibrahim Osama' } },
    { id: 'dr-ahmed-mahmoud', name: { ar: 'د. أحمد محمود', en: 'Dr. Ahmed Mahmoud' } },
    { id: 'dr-adel-lasheen', name: { ar: 'د. عادل لاشين', en: 'Dr. Adel Lasheen' } },
    { id: 'dr-mohamed-elsayed', name: { ar: 'د. محمد السيد (أوعية دموية)', en: 'Dr. Mohamed Elsayed' } },
    { id: 'dr-abanoub-wagih', name: { ar: 'د. أبانوب وجيه', en: 'Dr. Abanoub Wagih' } },
    { id: 'dr-heba-serageldin', name: { ar: 'د. هبة سراج الدين', en: 'Dr. Heba Serag Eldin' } },
  ] },
  { id: 'ent', name: { ar: 'أنف وأذن', en: 'ENT' }, doctors: [
    { id: 'dr-mazen-abdel-sadek', name: { ar: 'د. مازن عبد الصادق (استشاري)', en: 'Dr. Mazen Abdel Sadek' } },
    { id: 'dr-elsayed-sameh', name: { ar: 'د. السيد سامح', en: 'Dr. Elsayed Sameh' } },
    { id: 'dr-adham-samir', name: { ar: 'د. أدهم سمير (أخصائي)', en: 'Dr. Adham Samir' } },
  ] },
  { id: 'dermatology', name: { ar: 'جلدية', en: 'Dermatology' }, doctors: [
    { id: 'dr-hussein-makki', name: { ar: 'د. حسين مكي', en: 'Dr. Hussein Makki' } },
    { id: 'dr-abdel-rahman-rizk', name: { ar: 'د. عبد الرحمن رزق', en: 'Dr. Abdel Rahman Rizk' } },
  ] },
  { id: 'urology', name: { ar: 'مسالك بولية', en: 'Urology' }, doctors: [
    { id: 'dr-ahmed-kotb', name: { ar: 'د. أحمد قطب (استشاري)', en: 'Dr. Ahmed Kotb' } },
    { id: 'dr-abdel-rahman-abdel-fattah', name: { ar: 'د. عبد الرحمن عبد الفتاح (استشاري)', en: 'Dr. Abdel Rahman Abdel Fattah' } },
  ] },
  { id: 'physiotherapy', name: { ar: 'سمنة ونحافة وعلاج طبيعي', en: 'Physical Therapy' }, doctors: [
    { id: 'dr-ahmed-ramadan', name: { ar: 'د. أحمد رمضان (استشاري)', en: 'Dr. Ahmed Ramadan' } },
    { id: 'dr-asmaa-abdel-aal', name: { ar: 'د. أسماء عبد العال', en: 'Dr. Asmaa Abdel Aal' } },
  ] },
  { id: 'cardiology', name: { ar: 'قلب وأوعية دموية', en: 'Cardiology' }, doctors: [
    { id: 'dr-khaled-rizk', name: { ar: 'د. خالد رزق (أخصائي)', en: 'Dr. Khaled Rizk' } },
    { id: 'dr-george-khalaf', name: { ar: 'د. جورج خلف', en: 'Dr. George Khalaf' } },
    { id: 'dr-mohamed-mousa', name: { ar: 'د. محمد موسى', en: 'Dr. Mohamed Mousa' } },
    { id: 'dr-mohamed-rashid', name: { ar: 'د. محمد رشيد (أخصائي)', en: 'Dr. Mohamed Rashid' } },
  ] },
  { id: 'dentistry', name: { ar: 'أسنان', en: 'Dentistry' }, doctors: [
    { id: 'dr-nabil-galal-mousa', name: { ar: 'د. نبيل جلال موسى (استشاري)', en: 'Dr. Nabil Galal Mousa' } },
    { id: 'dr-mohamed-ibrahim', name: { ar: 'د. محمد إبراهيم', en: 'Dr. Mohamed Ibrahim' } },
    { id: 'dr-mohamed-radwan', name: { ar: 'د. محمد رضوان (تقويم)', en: 'Dr. Mohamed Radwan' } },
    { id: 'dr-mohamed-abdel-baset', name: { ar: 'د. محمد عبد الباسط (أخصائي)', en: 'Dr. Mohamed Abdel Baset' } },
    { id: 'dr-mohamed-abo-elmaaty', name: { ar: 'د. محمد أبو المعاطي (أخصائي)', en: 'Dr. Mohamed Abo Elmaaty' } },
    { id: 'dr-islam-mohamed-elhussieny', name: { ar: 'د. إسلام محمد الحسيني', en: 'Dr. Islam Mohamed Elhussieny' } },
  ] },
  { id: 'ophthalmology', name: { ar: 'الرمد', en: 'Ophthalmology' }, doctors: [
    { id: 'dr-mahmoud-mabrouk', name: { ar: 'د. محمود مبروك (أخصائي)', en: 'Dr. Mahmoud Mabrouk' } },
    { id: 'dr-yasser-adam', name: { ar: 'د. ياسر آدم', en: 'Dr. Yasser Adam' } },
    { id: 'dr-ahmed-ismail', name: { ar: 'د. أحمد إسماعيل', en: 'Dr. Ahmed Ismail' } },
    { id: 'dr-abdel-ghany-ahmed', name: { ar: 'د. عبد الغني أحمد', en: 'Dr. Abdel Ghany Ahmed' } },
    { id: 'dr-mahmoud-mokhtar', name: { ar: 'د. محمود مختار', en: 'Dr. Mahmoud Mokhtar' } },
    { id: 'dr-ahmed-mahmoud-eye', name: { ar: 'د. أحمد محمود', en: 'Dr. Ahmed Mahmoud' } },
  ] },
  { id: 'neurology', name: { ar: 'المخ والأعصاب', en: 'Neurology' }, doctors: [
    { id: 'dr-mohamed-emad', name: { ar: 'د. محمد عماد', en: 'Dr. Mohamed Emad' } },
    { id: 'dr-amr-taha', name: { ar: 'د. عمرو طه (رسم عصب)', en: 'Dr. Amr Taha' } },
    { id: 'dr-soliman-elsokkary', name: { ar: 'د. سليمان السكري (استشاري)', en: 'Dr. Soliman Elsokkary' } },
    { id: 'dr-ahmed-keshk', name: { ar: 'د. أحمد كشك', en: 'Dr. Ahmed Keshk' } },
    { id: 'dr-mohamed-abo-shagar', name: { ar: 'د. محمد أبو شجر (أخصائي)', en: 'Dr. Mohamed Abo Shagar' } },
  ] },
  { id: 'ultrasound', name: { ar: 'سونار ودوبلر 4D', en: 'Ultrasound & Doppler 4D' }, doctors: [
    { id: 'dr-abdel-rahman-elgabry', name: { ar: 'د. عبد الرحمن الجابري', en: 'Dr. Abdel Rahman Elgabry' } },
    { id: 'dr-mohamed-elgabbas', name: { ar: 'د. محمد الجباس', en: 'Dr. Mohamed Elgabbas' } },
    { id: 'dr-somaya-eltamimy', name: { ar: 'د. سمية التميمي', en: 'Dr. Somaya Eltamimy' } },
    { id: 'dr-rahma-younis', name: { ar: 'د. رحمة يونس', en: 'Dr. Rahma Younis' } },
    { id: 'dr-ahmed-elmonzer', name: { ar: 'د. أحمد المنذر', en: 'Dr. Ahmed Elmonzer' } },
    { id: 'dr-nourhan-mohamed', name: { ar: 'د. نورهان محمد', en: 'Dr. Nourhan Mohamed' } },
  ] },
  { id: 'speech-therapy', name: { ar: 'تخاطب', en: 'Speech Therapy' }, doctors: [
    { id: 'dr-rokaya-mohamed', name: { ar: 'د. رقية محمد', en: 'Dr. Rokaya Mohamed' } },
  ] },
];
