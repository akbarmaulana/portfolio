# Portfolio — Akbar Maulana

Website portofolio pribadi, dibangun dengan **React + TypeScript + Vite + Tailwind CSS v4**, berdasarkan data dari CV.

## Arsitektur

Struktur mengikuti prinsip **separation of concerns** (selaras dengan Clean Architecture yang biasa dipakai di pekerjaan sehari-hari):

```
src/
  data/resume.ts          -> single source of truth untuk semua isi (profile, experience, projects, skills, education)
  types/resume.types.ts   -> tipe TypeScript untuk data di atas
  hooks/useScrollSpy.ts   -> logic scroll-tracking, dipisah dari komponen UI
  components/
    ui/                   -> komponen kecil & reusable (Tag, SectionHeading, ArchitectureRings)
    layout/               -> struktur halaman (SideNav)
    sections/             -> section-section halaman (Hero, About, Experience, Projects, Skills, Education, Contact)
  App.tsx                 -> merangkai layout + sections
```

Kenapa dipisah begini:
- **Update konten tanpa sentuh UI.** Semua teks/riwayat kerja/skill ada di `src/data/resume.ts`. Kalau ada pengalaman kerja baru, cukup tambah 1 object di array `experiences`, tidak perlu ubah komponen.
- **Tipe aman.** `resume.types.ts` memastikan data selalu punya bentuk yang benar (TypeScript akan error kalau ada field yang lupa diisi).
- **Komponen kecil & bisa dipakai ulang** (`Tag`, `SectionHeading`) dipisah dari section besar, supaya gampang dites & diubah stylingnya di satu tempat.
- **Scalable**: kalau nanti mau ditambah halaman blog / dark-light mode toggle, struktur ini sudah siap tanpa refactor besar.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Build untuk production

```bash
npm run build
```

Hasil build ada di folder `dist/` — tinggal deploy ke Vercel, Netlify, GitHub Pages, atau hosting static apa pun.

## Mengubah isi konten

Edit `src/data/resume.ts` — semua teks portofolio (profil, pengalaman kerja, proyek, skill, pendidikan) ada di file ini.

## Localization (EN / ID)

Bahasa default: **English**. Pengguna bisa ganti ke Bahasa Indonesia lewat tombol `EN | ID` di sidebar (desktop) atau top bar (mobile). Pilihan disimpan di `localStorage` supaya persist saat reload.

Struktur i18n:

```
src/
  types/i18n.types.ts        -> tipe Lang ('en' | 'id') dan LocalizedText
  i18n/LanguageContext.tsx   -> context + hook useLanguage() -> { lang, setLang, toggleLang, tx }
  i18n/ui.ts                 -> dictionary string UI statis (heading, label, tombol) untuk kedua bahasa
```

Konten yang berasal dari CV (summary, deskripsi pengalaman kerja, deskripsi proyek, kategori, label skill group, jenjang pendidikan) disimpan sebagai `{ en: "...", id: "..." }` langsung di `src/data/resume.ts`, lalu di-resolve lewat `tx()` dari `useLanguage()`.

Menambah bahasa baru (misalnya `ja`): update `Lang` di `i18n.types.ts`, lengkapi setiap `LocalizedText` di `resume.ts` dan `ui.ts` dengan key baru, lalu tambahkan tombolnya di `LanguageSwitcher.tsx`.

## Desain

- Font: **IBM Plex Mono** (heading/label, nuansa code editor) + **IBM Plex Sans** (body text)
- Palet: navy gelap (`#0F1620`) sebagai dasar, amber (`#D9A441`) sebagai aksen utama, teal (`#4FD1C5`) sebagai aksen sekunder
- Signature element: sidebar navigasi bergaya *file explorer* (about.md, experience.ts, projects/, dst) dan diagram cincin di hero yang merepresentasikan layer Clean Architecture (Presentation → Domain → Data)
