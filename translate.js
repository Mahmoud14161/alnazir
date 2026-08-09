import fs from 'fs';

const departments = [
  { id: 'clinics', titleAr: 'العيادات', titleEn: 'Clinics', icon: 'Stethoscope', descAr: 'نخبة من الاستشاريين والأخصائيين في مختلف التخصصات الطبية لتقديم أفضل رعاية.', descEn: 'Top consultants and specialists in various medical specialties to provide the best care.' },
  { id: 'operations', titleAr: 'العمليات', titleEn: 'Operations', icon: 'Activity', descAr: 'غرف عمليات مجهزة بأحدث التقنيات الجراحية لضمان أعلى مستويات الأمان والدقة، تحت إشراف نخبة من كبار الجراحين.', descEn: 'Operating rooms equipped with the latest surgical technologies to ensure the highest levels of safety and precision.' },
  { id: 'radiology', titleAr: 'الأشعة التشخيصية', titleEn: 'Radiology', icon: 'HeartPulse', descAr: 'أحدث أجهزة الأشعة المقطعية والرنين المغناطيسي والموجات الصوتية لتقديم أدق التشخيصات الطبية.', descEn: 'Latest CT, MRI, and ultrasound equipment for accurate medical diagnoses.' },
  { id: 'icu', titleAr: 'الرعاية المركزة', titleEn: 'ICU', icon: 'BedDouble', descAr: 'وحدة عناية مركزة متكاملة مزودة بأجهزة مراقبة حديثة تحت إشراف طاقم طبي متخصص على مدار الساعة.', descEn: 'Integrated intensive care unit equipped with modern monitoring devices under specialist supervision 24/7.' },
  { id: 'incubators', titleAr: 'الحضانات', titleEn: 'Incubators', icon: 'Baby', descAr: 'رعاية فائقة للأطفال حديثي الولادة والمبتسرين، مجهزة بأحدث تقنيات التنفس الصناعي والمراقبة.', descEn: 'Superior care for newborns and premature babies, equipped with the latest ventilation and monitoring technologies.' },
  { id: 'lab', titleAr: 'معمل التحاليل', titleEn: 'Laboratory', icon: 'Microscope', descAr: 'معمل تحاليل شامل بأدق الأجهزة الميكنة لضمان سرعة وموثوقية النتائج الطبية على مدار 24 ساعة.', descEn: 'Comprehensive laboratory with the most accurate automated equipment to ensure fast and reliable medical results 24/7.' },
  { id: 'daycare', titleAr: 'إقامة اليوم الواحد', titleEn: 'Day Care', icon: 'Clock', descAr: 'خدمات طبية وجراحية سريعة تتيح للمريض تلقي العلاج اللازم والعودة لمنزله في نفس اليوم بأمان تام.', descEn: 'Fast medical and surgical services allowing the patient to receive necessary treatment and return home safely the same day.' },
];

let newData = `import { 
  Stethoscope, 
  Activity, 
  Microscope, 
  Baby, 
  Clock, 
  BedDouble, 
  HeartPulse 
} from 'lucide-react';

export const departments = [
`;

for (const d of departments) {
  newData += `  { id: '${d.id}', title: { ar: '${d.titleAr}', en: '${d.titleEn}' }, icon: ${d.icon}, desc: { ar: '${d.descAr}', en: '${d.descEn}' } },\n`;
}
newData += `];\n\n`;

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop', altAr: 'مدخل المستشفى والاستقبال', altEn: 'Hospital Entrance and Reception' },
  { url: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1000&auto=format&fit=crop', altAr: 'غرف العمليات المجهزة', altEn: 'Equipped Operating Rooms' },
  { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop', altAr: 'العيادات الخارجية', altEn: 'Outpatient Clinics' },
  { url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop', altAr: 'غرف إقامة المرضى', altEn: 'Patient Rooms' },
  { url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop', altAr: 'معمل التحاليل', altEn: 'Laboratory' },
  { url: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1000&auto=format&fit=crop', altAr: 'أجهزة الأشعة المقطعية', altEn: 'CT Scan Devices' },
];

newData += `export const galleryImages = [\n`;
for (const g of galleryImages) {
  newData += `  { url: '${g.url}', alt: { ar: '${g.altAr}', en: '${g.altEn}' } },\n`;
}
newData += `];\n\n`;

const faqs = [
  { qAr: "كيف يمكنني حجز موعد في العيادات الخارجية؟", aAr: "يمكنك حجز موعد من خلال النقر على زر 'احجز موعدك الآن' في الموقع، أو الاتصال بنا مباشرة على أرقام المستشفى. سيقوم فريق خدمة العملاء بتأكيد موعدك في أقرب وقت متاح.", qEn: "How can I book an appointment in the outpatient clinics?", aEn: "You can book an appointment by clicking the 'Book Appointment Now' button on the website, or by contacting us directly. Our customer service team will confirm your appointment as soon as possible." },
  { qAr: "هل توفر المستشفى خدمة الطوارئ على مدار الساعة؟", aAr: "نعم، قسم الطوارئ في مستشفى النذير يعمل على مدار 24 ساعة طوال أيام الأسبوع، ومجهز لاستقبال كافة الحالات الحرجة والتعامل معها فوراً.", qEn: "Does the hospital provide emergency services 24/7?", aEn: "Yes, the emergency department at Al-Nazir Hospital operates 24/7 and is fully equipped to handle all critical cases immediately." },
  { qAr: "ما هي الأوراق المطلوبة عند الحضور للموعد؟", aAr: "يُرجى إحضار بطاقة الهوية الوطنية أو جواز السفر، بالإضافة إلى أي تقارير طبية سابقة أو تحاليل أو أشعة تتعلق بحالتك الصحية لمساعدة الطبيب في التشخيص.", qEn: "What documents are required when attending the appointment?", aEn: "Please bring your national ID card or passport, in addition to any previous medical reports, tests, or scans related to your condition." },
  { qAr: "هل تقبلون بطاقات التأمين الطبي؟", aAr: "نعم، نتعامل مع معظم شركات التأمين الطبي الكبرى. يُرجى التواصل معنا هاتفياً وتوضيح شركة التأمين الخاصة بك للتأكد من التغطية وتفاصيل الموافقة.", qEn: "Do you accept medical insurance cards?", aEn: "Yes, we accept most major medical insurance companies. Please contact us and provide your insurance details to check coverage." },
  { qAr: "كيف يمكنني الحصول على نتائج التحاليل أو الأشعة؟", aAr: "يمكنك استلام النتائج مطبوعة من قسم الاستقبال بالمستشفى، أو يمكننا إرسالها إليك عبر الواتساب أو البريد الإلكتروني الخاص بك لضمان راحتك.", qEn: "How can I get my lab or radiology results?", aEn: "You can collect the printed results from the hospital reception, or we can send them to you via WhatsApp or Email." },
];

newData += `export const faqs = [\n`;
for (const f of faqs) {
  newData += `  { question: { ar: "${f.qAr}", en: "${f.qEn}" }, answer: { ar: "${f.aAr}", en: "${f.aEn}" } },\n`;
}
newData += `];\n\n`;

const reviews = [
  { id: 1, nameAr: "أحمد مصطفى", nameEn: "Ahmed Mostafa", textAr: "مستشفى ممتازة، دكاترة محترمين وتمريض بيهتم جداً بالمريض.", textEn: "Excellent hospital, respectable doctors, and very caring nursing staff.", rating: 5, roleAr: "مريض عيادات", roleEn: "Clinic Patient" },
  { id: 2, nameAr: "سارة عبد الرحمن", nameEn: "Sarah Abdelrahman", textAr: "عناية فائقة ونضافة ملحوظة.. شكراً ستاف التمريض.", textEn: "Superior care and noticeable cleanliness.. Thanks to the nursing staff.", rating: 5, roleAr: "مريضة جراحة", roleEn: "Surgery Patient" },
  { id: 3, nameAr: "محمود حسن", nameEn: "Mahmoud Hassan", textAr: "النضافة والاهتمام ممتازين، تحس إنك في فندق. دكاترة العظام شاطرين جداً.", textEn: "Cleanliness and attention are excellent. Orthopedic doctors are very skilled.", rating: 5, roleAr: "مريض عظام", roleEn: "Orthopedic Patient" },
  { id: 4, nameAr: "فاطمة علي", nameEn: "Fatma Ali", textAr: "الاستقبال محترم والإجراءات سريعة. دكتورة النسا ممتازة.", textEn: "The reception is respectful and procedures are fast. The OBGYN doctor is excellent.", rating: 5, roleAr: "مريضة عيادات", roleEn: "Clinic Patient" },
];

newData += `export const reviews = [\n`;
for (const r of reviews) {
  newData += `  { id: ${r.id}, name: { ar: "${r.nameAr}", en: "${r.nameEn}" }, text: { ar: "${r.textAr}", en: "${r.textEn}" }, rating: ${r.rating}, role: { ar: "${r.roleAr}", en: "${r.roleEn}" } },\n`;
}
newData += `];\n\n`;

const clinicsData = [
  { id: 'internal-medicine', nameAr: 'الباطنة', nameEn: 'Internal Medicine', doctors: [ { id: 'dr-mohamed-khalil', nameAr: 'د/ محمد خليل (استشاري)', nameEn: 'Dr. Mohamed Khalil (Consultant)' } ] },
  { id: 'pediatrics', nameAr: 'الاطفال', nameEn: 'Pediatrics', doctors: [ { id: 'dr-elham-fathy', nameAr: 'د/ الهام فتحي', nameEn: 'Dr. Elham Fathy' } ] },
];

newData += `export const clinicsData = [\n`;
for (const c of clinicsData) {
  newData += `  { id: '${c.id}', name: { ar: '${c.nameAr}', en: '${c.nameEn}' }, doctors: [\n`;
  for (const doc of c.doctors) {
    newData += `    { id: '${doc.id}', name: { ar: '${doc.nameAr}', en: '${doc.nameEn}' } },\n`;
  }
  newData += `  ] },\n`;
}
newData += `];\n`;

fs.writeFileSync('src/data.ts', newData);
