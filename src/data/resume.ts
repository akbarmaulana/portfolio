import type {
  Profile,
  Experience,
  Project,
  SkillGroup,
  EducationItem,
  NavSection,
} from '../types/resume.types'

export const profile: Profile = {
  name: 'Akbar Maulana',
  title: 'Senior Flutter Developer / Senior Mobile Engineer',
  location: 'Jakarta, Indonesia',
  email: 'akbar.maulana1027@gmail.com',
  phone: '+62-878-0816-2283',
  yearsExperience: 13,
  summary: [
    {
      en: 'Senior Flutter Developer with over 13 years of experience in mobile application development, specializing in Flutter, Dart, Android (Java/Kotlin), and React Native.',
      id: 'Senior Flutter Developer dengan pengalaman lebih dari 13 tahun di Mobile Application Development, dengan fokus pada Flutter, Dart, Android (Java/Kotlin), dan React Native.',
    },
    {
      en: 'Experienced building enterprise-scale mobile applications across Banking, Retail, Government, Logistics, Oil & Gas, and FMCG industries. Skilled in designing scalable mobile architectures using Clean Architecture, MVVM, Repository Pattern, and modern state management (BLoC, Provider, GetX).',
      id: 'Berpengalaman membangun aplikasi mobile enterprise-scale lintas industri: Banking, Retail, Government, Logistics, Oil & Gas, dan FMCG. Terbiasa merancang arsitektur mobile yang scalable dengan Clean Architecture, MVVM, Repository Pattern, dan state management modern (BLoC, Provider, GetX).',
    },
    {
      en: 'Skilled in REST API integration, Firebase, Push Notifications, CI/CD, Git, Agile Scrum, and application performance optimization — while mentoring junior developers and collaborating cross-functionally.',
      id: 'Terbiasa dengan integrasi REST API, Firebase, Push Notification, CI/CD, Git, Agile Scrum, dan optimasi performa aplikasi — sambil membimbing developer junior dan berkolaborasi lintas fungsi.',
    },
  ],
}

export const navSections: NavSection[] = [
  { id: 'about', fileName: 'about.md', label: 'About' },
  { id: 'experience', fileName: 'experience.ts', label: 'Experience' },
  { id: 'projects', fileName: 'projects/', label: 'Projects' },
  { id: 'skills', fileName: 'skills.json', label: 'Skills' },
  { id: 'education', fileName: 'education.yaml', label: 'Education' },
  { id: 'contact', fileName: 'contact.sh', label: 'Contact' },
]

export const experiences: Experience[] = [
  {
    id: 'infosys',
    role: 'Product Specialist (Mobile Security)',
    company: 'PT Infosys Solusi Terpadu',
    period: '2024 — now',
    current: true,
    responsibilities: [
      { en: 'Understand and implement technologies from the principal\u2019s products into client applications.', id: 'Memahami dan mengimplementasikan teknologi dari produk principal ke dalam aplikasi klien.' },
      { en: 'Design and build demo applications integrated with the principal\u2019s products for client presentations.', id: 'Merancang dan mengembangkan aplikasi demo yang terintegrasi dengan produk principal untuk presentasi dan demonstrasi klien.' },
      { en: 'Collaborate with Product Managers, Delivery Teams, Sales Teams, and Clients to ensure successful product implementation.', id: 'Berkolaborasi dengan Product Manager, Delivery Team, Sales Team, dan Klien untuk memastikan implementasi produk berjalan sukses.' },
      { en: 'Act as the primary technical liaison between the principal and clients, including support throughout the project lifecycle.', id: 'Menjadi liaison teknis utama antara principal dan klien, termasuk dukungan sepanjang siklus proyek.' },
    ],
    achievements: [
      { en: 'Served as the primary technical liaison in discussions and meetings between clients and the principal.', id: 'Menjadi liaison teknis utama dalam diskusi dan meeting antara klien dan principal.' },
      { en: 'Actively participated in Proof of Concept (PoC) sessions to validate products in front of clients.', id: 'Berpartisipasi aktif dalam sesi Proof of Concept (PoC) untuk validasi produk di depan klien.' },
    ],
  },
  {
    id: 'freelance',
    role: 'Freelancer — Mobile App',
    company: 'Independent',
    period: 'now',
    current: true,
    responsibilities: [
      { en: 'Develop cross-platform mobile applications based on client needs.', id: 'Mengembangkan aplikasi mobile lintas platform sesuai kebutuhan klien.' },
      { en: 'Integrate RESTful APIs and collaborate with Backend Engineers, QA, and Tech Leads.', id: 'Integrasi RESTful API dan kolaborasi dengan Backend Engineer, QA, dan Tech Lead.' },
      { en: 'Maintain enterprise applications already running in production.', id: 'Memelihara aplikasi enterprise yang sudah berjalan di production.' },
    ],
    achievements: [
      { en: 'Collaborated directly with enterprise clients.', id: 'Berkolaborasi langsung dengan klien enterprise.' },
      { en: 'Applied Clean Architecture to improve maintainability.', id: 'Menerapkan Clean Architecture untuk meningkatkan maintainability.' },
      { en: 'Reduced bugs through modular architecture implementation.', id: 'Mengurangi bug melalui implementasi arsitektur modular.' },
    ],
    projects: [
      { name: 'Elsimi / SIGA Mobile', description: { en: 'BKKBN application for stunting prevention', id: 'Aplikasi BKKBN untuk pencegahan stunting' }, stack: 'Flutter' },
      { name: 'Pasti Angkut', description: { en: 'Waste management application', id: 'Aplikasi manajemen limbah (waste management)' }, stack: 'Android Java' },
      { name: 'PEP Pertamina', description: { en: 'Enterprise application for Pertamina', id: 'Aplikasi enterprise untuk Pertamina' }, stack: 'Android · Flutter' },
    ],
  },
  {
    id: 'tigadaya',
    role: 'Senior Mobile Developer',
    company: 'PT Tiga Daya Digital Indonesia',
    period: '2018 — 2024',
    current: false,
    responsibilities: [
      { en: 'Developed cross-platform mobile applications using Flutter and React Native.', id: 'Mengembangkan aplikasi mobile cross-platform menggunakan Flutter dan React Native.' },
      { en: 'Designed scalable applications using Clean Architecture.', id: 'Merancang aplikasi scalable dengan Clean Architecture.' },
      { en: 'Collaborated with Backend Engineers, QA, UI/UX Designers, Product Owners, and Clients.', id: 'Berkolaborasi dengan Backend Engineer, QA, UI/UX Designer, Product Owner, dan Klien.' },
      { en: 'Conducted code reviews and maintained the team\u2019s coding standards.', id: 'Melakukan code review dan menjaga standar coding tim.' },
      { en: 'Shipped applications to Android and iOS, and maintained enterprise applications in production.', id: 'Merilis aplikasi ke Android dan iOS, serta memelihara aplikasi enterprise yang berjalan.' },
    ],
    achievements: [
      { en: 'Successfully developed multiple enterprise Flutter applications.', id: 'Berhasil mengembangkan berbagai aplikasi enterprise berbasis Flutter.' },
      { en: 'Migrated native Android applications to Flutter.', id: 'Memigrasikan aplikasi native Android ke Flutter.' },
      { en: 'Improved maintainability through Clean Architecture implementation.', id: 'Meningkatkan maintainability lewat implementasi Clean Architecture.' },
      { en: 'Delivered applications for the Government, Retail, Logistics, and Enterprise sectors.', id: 'Mengirim aplikasi untuk sektor Government, Retail, Logistics, dan Enterprise.' },
    ],
    projects: [
      { name: 'KedaiMart', description: { en: 'Retail marketplace application', id: 'Aplikasi marketplace retail' }, stack: 'Flutter' },
      { name: 'KedaiSayur', description: { en: 'Retail marketplace application', id: 'Aplikasi marketplace retail' }, stack: 'Android Java' },
      { name: 'Mobile Inspection TAP', description: { en: 'Enterprise inspection application', id: 'Aplikasi inspeksi enterprise' }, stack: 'React Native' },
    ],
  },
  {
    id: 'indocyber',
    role: 'Mobile Developer',
    company: 'PT Indocyber Global Teknologi',
    period: '2012 — 2018',
    current: false,
    responsibilities: [
      { en: 'Developed Android mobile applications using Java.', id: 'Mengembangkan aplikasi mobile Android menggunakan Java.' },
      { en: 'Integrated RESTful APIs.', id: 'Integrasi RESTful API.' },
      { en: 'Collaborated with Backend Engineers, QA, Tech Leads, and Clients.', id: 'Berkolaborasi dengan Backend Engineer, QA, Tech Lead, dan Klien.' },
      { en: 'Maintained enterprise applications already in production.', id: 'Memelihara aplikasi enterprise yang sudah berjalan.' },
    ],
    achievements: [
      { en: 'Delivered multiple enterprise applications.', id: 'Mengirimkan berbagai aplikasi enterprise.' },
      { en: 'Collaborated directly with enterprise clients.', id: 'Berkolaborasi langsung dengan klien enterprise.' },
      { en: 'Participated fully across the software development lifecycle (SDLC).', id: 'Berpartisipasi penuh dalam siklus pengembangan software (SDLC).' },
    ],
    projects: [
      { name: 'FIF Mobile Approval', description: { en: 'Credit approval application', id: 'Aplikasi persetujuan kredit' }, stack: 'Android Java' },
      { name: 'FIF Digital Application Form', description: { en: 'Digital application form', id: 'Formulir aplikasi digital' }, stack: 'Android Java' },
      { name: 'TAP Mobile Inspection', description: { en: 'Field inspection application', id: 'Aplikasi inspeksi lapangan' }, stack: 'Android Java' },
      { name: 'Medion Collection', description: { en: 'Field collection application', id: 'Aplikasi collection lapangan' }, stack: 'Android Java' },
      { name: 'AAB Mobile Car Inspection', description: { en: 'Vehicle inspection application', id: 'Aplikasi inspeksi kendaraan' }, stack: 'Android Java' },
      { name: 'Tabloid Bintang', description: { en: 'Media / content application', id: 'Aplikasi media/konten' }, stack: 'Android Java' },
      { name: 'Bank & Finance Mobile Application Generator', description: { en: 'Mobile application generator for the finance sector', id: 'Generator aplikasi mobile untuk sektor finance' }, stack: 'Android Java' },
    ],
  },
]

export const projects: Project[] = [
  { id: 'kedaimart', name: 'KedaiMart', description: { en: 'Retail marketplace application for buying and selling between sellers and buyers.', id: 'Aplikasi marketplace retail untuk transaksi jual-beli antar penjual dan pembeli.' }, stack: ['Flutter', 'Clean Architecture'], category: { en: 'Retail', id: 'Ritel' } },
  { id: 'kedaisayur', name: 'KedaiSayur', description: { en: 'Retail marketplace application for fresh produce and groceries.', id: 'Aplikasi marketplace retail untuk kebutuhan sayur dan bahan pangan.' }, stack: ['Android', 'Java'], category: { en: 'Retail', id: 'Ritel' } },
  { id: 'tap-inspection', name: 'Mobile Inspection TAP', description: { en: 'Enterprise inspection application supporting field inspection processes.', id: 'Aplikasi inspeksi enterprise untuk mendukung proses pemeriksaan lapangan.' }, stack: ['React Native'], category: { en: 'Enterprise', id: 'Enterprise' } },
  { id: 'elsimi', name: 'Elsimi / SIGA Mobile', description: { en: 'BKKBN application supporting the national stunting-prevention program.', id: 'Aplikasi BKKBN untuk mendukung program pencegahan stunting.' }, stack: ['Flutter'], category: { en: 'Government', id: 'Pemerintahan' } },
  { id: 'pasti-angkut', name: 'Pasti Angkut', description: { en: 'Application for waste transport and management.', id: 'Aplikasi manajemen pengangkutan dan pengelolaan limbah.' }, stack: ['Android', 'Java'], category: { en: 'Logistics', id: 'Logistik' } },
  { id: 'pep-pertamina', name: 'PEP Pertamina', description: { en: 'Enterprise application supporting Pertamina\u2019s operations.', id: 'Aplikasi enterprise untuk mendukung operasional Pertamina.' }, stack: ['Android', 'Flutter'], category: { en: 'Oil & Gas', id: 'Migas' } },
  { id: 'fif-approval', name: 'FIF Mobile Approval', description: { en: 'Credit approval application for FIF field teams.', id: 'Aplikasi persetujuan kredit untuk tim lapangan FIF.' }, stack: ['Android', 'Java'], category: { en: 'Banking & Finance', id: 'Perbankan & Keuangan' } },
  { id: 'aab-inspection', name: 'AAB Mobile Car Inspection', description: { en: 'Vehicle inspection application for the appraisal process.', id: 'Aplikasi inspeksi kendaraan untuk proses appraisal.' }, stack: ['Android', 'Java'], category: { en: 'Automotive', id: 'Otomotif' } },
]

export const skillGroups: SkillGroup[] = [
  { id: 'languages', label: { en: 'Languages', id: 'Bahasa Pemrograman' }, items: ['Dart', 'Kotlin', 'Java', 'JavaScript', 'TypeScript'] },
  { id: 'mobile', label: { en: 'Mobile Development', id: 'Pengembangan Mobile' }, items: ['Flutter', 'Android Native', 'React Native'] },
  { id: 'architecture', label: { en: 'Architecture', id: 'Arsitektur' }, items: ['Clean Architecture', 'MVVM', 'MVC', 'Repository Pattern', 'Dependency Injection'] },
  { id: 'state', label: { en: 'State Management', id: 'State Management' }, items: ['Bloc', 'Cubit', 'Provider', 'GetX'] },
  { id: 'backend', label: { en: 'Backend Integration', id: 'Integrasi Backend' }, items: ['REST API', 'JSON', 'Firebase', 'Node.js', 'React JS', 'MySQL'] },
  { id: 'tools', label: { en: 'Tools & Methodology', id: 'Perkakas & Metodologi' }, items: ['Android Studio', 'VS Code', 'Xcode', 'Git', 'GitHub', 'Postman', 'Figma', 'Jira', 'Agile Scrum', 'Waterfall'] },
]

export const education: EducationItem[] = [
  { id: 'utel', school: 'Politeknik Telkom Bandung (U-Tel)', degree: { en: 'Computer Engineering', id: 'Teknik Komputer' }, period: '2008 — 2011', gpa: '3.6' },
  { id: 'mercubuana', school: 'Perguruan Mercu Buana', degree: { en: 'Mechanical Engineering', id: 'Sarjana Teknik Mesin' }, period: '2014 — 2018', gpa: '3.4' },
]

export const languages = ['English', 'Bahasa Indonesia']
