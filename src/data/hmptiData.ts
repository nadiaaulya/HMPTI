/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Division, Member, ProgramKerja } from '../types';

export const HMPTI_INFO = {
  name: 'HMPTI',
  fullName: 'Himpunan Mahasiswa Prodi Teknik Informatika',
  university: 'Universitas Intra Kampus',
  tagline: 'Sinergi, Inovasi, Kolaborasi',
  establishedYear: '2015',
  email: 'hmpti@kampus.ac.id',
  instagram: '@hmpti.official',
  github: 'https://github.com/hmpti',
};

export const VISI_MISI = {
  visi: 'Mengembangkan HMPTI sebagai wadah inovatif dan berkualitas bagi mahasiswa teknik informatika.',
  misi: [
    'Mengembangkan solidaritas dan kekeluargaan antar mahasiswa teknik informatika.',
    'Menyediakan platform aspirasi dan kreatifitas dalam bidang akademik maupun non-akademik.',
    'Meningkatkan kesadaran, tanggung jawab, serta integritas sosial seluruh anggota.'
  ]
};

export const KETUA: Member = {
  id: 'exec-1',
  name: 'Revanza Aditama',
  nim: 'A11.2023.14201',
  position: 'Ketua Umum',
  photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300',
  email: 'revan@hmpti.or.id',
  linkedin: 'https://linkedin.com/in/revanza-aditama'
};

export const WAKIL: Member = {
  id: 'exec-2',
  name: 'Dinda Ayu Lestari',
  nim: 'A11.2023.14255',
  position: 'Wakil Ketua Umum',
  photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300',
  email: 'dinda@hmpti.or.id',
  linkedin: 'https://linkedin.com/in/dinda-ayu-lestari'
};

export const DIVISIONS: Division[] = [
  {
    id: 'psdm',
    name: 'Divisi PSDM',
    iconName: 'Users',
    description: 'Divisi Pengembangan Sumber Daya Mahasiswa berfokus pada pengembangan soft-skills, kepemimpinan, kekeluargaan, serta kaderisasi mahasiswa Teknik Informatika.',
    members: [
      {
        id: 'psdm-1',
        name: 'Aris Wicaksono',
        nim: 'A11.2023.14301',
        position: 'Koordinator Divisi PSDM',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'psdm-2',
        name: 'Siti Rahmawati',
        nim: 'A11.2023.14302',
        position: 'Sekretaris Divisi PSDM',
        photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'psdm-3',
        name: 'Nanda Pratama',
        nim: 'A11.2023.14303',
        position: 'Anggota Divisi PSDM',
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'psdm-4',
        name: 'Amalia Safitri',
        nim: 'A11.2024.15102',
        position: 'Anggota Divisi PSDM',
        photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'psdm-5',
        name: 'Bagus Setyawan',
        nim: 'A11.2024.15105',
        position: 'Anggota Divisi PSDM',
        photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'psdm-6',
        name: 'Kania Dwi Lestari',
        nim: 'A11.2024.15120',
        position: 'Anggota Divisi PSDM',
        photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300',
      },
    ]
  },
  {
    id: 'pendidikan',
    name: 'Divisi Pendidikan',
    iconName: 'GraduationCap',
    description: 'Divisi yang bergerak di bidang peningkatan kapasitas akademik, membagikan wawasan sains, coding camps, dan pelatihan teknologi terupdate.',
    members: [
      {
        id: 'pend-1',
        name: 'Farhan Muzakki',
        nim: 'A11.2023.14410',
        position: 'Koordinator Divisi Pendidikan',
        photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'pend-2',
        name: 'Hani Amara',
        nim: 'A11.2023.14412',
        position: 'Sekretaris Divisi Pendidikan',
        photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'pend-3',
        name: 'Gilang Ramadhan',
        nim: 'A11.2023.14415',
        position: 'Anggota Divisi Pendidikan',
        photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'pend-4',
        name: 'Rifa Handayani',
        nim: 'A11.2024.15220',
        position: 'Anggota Divisi Pendidikan',
        photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'pend-5',
        name: 'Kevin Jonathan',
        nim: 'A11.2024.15221',
        position: 'Anggota Divisi Pendidikan',
        photoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'pend-6',
        name: 'Zahra Nabilla',
        nim: 'A11.2024.15243',
        position: 'Anggota Divisi Pendidikan',
        photoUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=300',
      },
    ]
  },
  {
    id: 'kewirausahaan',
    name: 'Divisi Kewirausahaan',
    iconName: 'ShoppingBag',
    description: 'Divisi yang melayani pengembangan potensi bisnis mandiri, techno-preneurship, merchandise resmi, dan pembiayaan kreatif organisasi.',
    members: [
      {
        id: 'wira-1',
        name: 'Dimas Setiawan',
        nim: 'A11.2023.14501',
        position: 'Koordinator Divisi Kewirausahaan',
        photoUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'wira-2',
        name: 'Nabila Syakieb',
        nim: 'A11.2023.14502',
        position: 'Sekretaris Divisi Kewirausahaan',
        photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'wira-3',
        name: 'Aditya Herlambang',
        nim: 'A11.2023.14510',
        position: 'Anggota Divisi Kewirausahaan',
        photoUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'wira-4',
        name: 'Fiona Wijaya',
        nim: 'A11.2024.15340',
        position: 'Anggota Divisi Kewirausahaan',
        photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'wira-5',
        name: 'Satria Dewa',
        nim: 'A11.2024.15345',
        position: 'Anggota Divisi Kewirausahaan',
        photoUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'wira-6',
        name: 'Tiara Aurelia',
        nim: 'A11.2024.15350',
        position: 'Anggota Divisi Kewirausahaan',
        photoUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=300',
      },
    ]
  },
  {
    id: 'kominfo',
    name: 'Divisi Kominfo',
    iconName: 'Laptop',
    description: 'Divisi Komunikasi & Informasi mengelola website resmi, media sosial Instagram @hmpti, penyebaran infografis menarik, dan multimedia kreatif.',
    members: [
      {
        id: 'info-1',
        name: 'Fajar Nugraha',
        nim: 'A11.2023.14605',
        position: 'Koordinator Divisi Kominfo',
        photoUrl: 'https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'info-2',
        name: 'Aulia Salsabila',
        nim: 'A11.2023.14611',
        position: 'Sekretaris Divisi Kominfo',
        photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'info-3',
        name: 'Gavin Alvaro',
        nim: 'A11.2023.14620',
        position: 'Anggota Divisi Kominfo',
        photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'info-4',
        name: 'Dwi Lestari',
        nim: 'A11.2024.15412',
        position: 'Anggota Divisi Kominfo',
        photoUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'info-5',
        name: 'Rama Raditya',
        nim: 'A11.2024.15418',
        position: 'Anggota Divisi Kominfo',
        photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'info-6',
        name: 'Lulu Nurhaliza',
        nim: 'A11.2024.15433',
        position: 'Anggota Divisi Kominfo',
        photoUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=300',
      },
    ]
  },
  {
    id: 'litbang',
    name: 'Divisi Litbang',
    iconName: 'SearchCode',
    description: 'Divisi Penelitian dan Pengembangan mengkaji kualitas pelaksanaan program, berinovasi menciptakan sistem digital, dan riset akademik teknologi informasi.',
    members: [
      {
        id: 'lit-1',
        name: 'Yusuf Habibi',
        nim: 'A11.2023.14777',
        position: 'Koordinator Divisi Litbang',
        photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'lit-2',
        name: 'Syifa Nuraini',
        nim: 'A11.2023.14780',
        position: 'Sekretaris Divisi Litbang',
        photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'lit-3',
        name: 'Reno Saputra',
        nim: 'A11.2023.14788',
        position: 'Anggota Divisi Litbang',
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'lit-4',
        name: 'Kezia Angeline',
        nim: 'A11.2024.15501',
        position: 'Anggota Divisi Litbang',
        photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'lit-5',
        name: 'Vian Danendra',
        nim: 'A11.2024.15510',
        position: 'Anggota Divisi Litbang',
        photoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'lit-6',
        name: 'Annisa Maharani',
        nim: 'A11.2024.15514',
        position: 'Anggota Divisi Litbang',
        photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
      },
    ]
  },
  {
    id: 'humas',
    name: 'Divisi Humas',
    iconName: 'Globe',
    description: 'Divisi Hubungan Masyarakat menjembatani kemitraan strategis, mengoordinasikan kunjungan industri, studi banding, kolaborasi eksternal, dan aksi sosial.',
    members: [
      {
        id: 'humas-1',
        name: 'Bima Satria',
        nim: 'A11.2023.14811',
        position: 'Koordinator Divisi Humas',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'humas-2',
        name: 'Mila Rosanti',
        nim: 'A11.2023.14820',
        position: 'Sekretaris Divisi Humas',
        photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'humas-3',
        name: 'Irfan Hakim',
        nim: 'A11.2023.14825',
        position: 'Anggota Divisi Humas',
        photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'humas-4',
        name: 'Citra Kirana',
        nim: 'A11.2024.15610',
        position: 'Anggota Divisi Humas',
        photoUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'humas-5',
        name: 'Zidan Aliansyah',
        nim: 'A11.2024.15632',
        position: 'Anggota Divisi Humas',
        photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 'humas-6',
        name: 'Eka Septianingsih',
        nim: 'A11.2024.15640',
        position: 'Anggota Divisi Humas',
        photoUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=300',
      },
    ]
  }
];

export const WORK_PROGRAMS: ProgramKerja[] = [
  {
    id: 'proker-1',
    title: 'Informatics National Seminar (IFS)',
    description: 'Seminar nasional bertema teknologi masa kini (Artificial Intelligence, Cybersecurity, Blockchain) dengan pembicara ahli dari industri teknologi papan atas.',
    category: 'Akademik',
    date: 'Oktober 2026',
    status: 'Persiapan',
    targetAudience: 'Mahasiswa Umum & Pelajar'
  },
  {
    id: 'proker-2',
    title: 'Informatics Coding Camp',
    description: 'Pelatihan pemrograman intensif yang dibimbing oleh senior dan expert di tim HMPTI. Mempelajari Web Development, UI/UX, dan Flutter mobile app development.',
    category: 'Teknologi',
    date: 'Setiap Hari Sabtu',
    status: 'Berjalan',
    targetAudience: 'Mahasiswa Informatika'
  },
  {
    id: 'proker-3',
    title: 'HMPTI Hackathon & IT Fest',
    description: 'Kompetisi coding 48 jam tingkat regional, inkubasi gagasan aplikasi, pameran hasil karya, diikuti networking session untuk menghubungkan talenta dengan inkubator.',
    category: 'Kreatif',
    date: 'Desember 2026',
    status: 'Rencana',
    targetAudience: 'Mahasiswa Se-Indonesia'
  },
  {
    id: 'proker-4',
    title: 'Informatics Social Care & IT Charity',
    description: 'Aksi kepedulian masyarakat, berupa digital literacy bootcamp gratis untuk sekolah dasar panti asuhan, didukung donasi perangkat laptop layak pakai.',
    category: 'Sosial',
    date: 'April 2026',
    status: 'Selesai',
    targetAudience: 'Sekolah & Panti Asuhan Binaan'
  },
  {
    id: 'proker-5',
    title: 'HMPTI Merch Store & Techno-Preneurship',
    description: 'Pilar kewirausahaan mahasiswa mandiri, meluncurkan merchandise premium (kaos, hoodie, gantungan kunci, sticker set) dan workshop kewirausahaan digital.',
    category: 'Kewirausahaan',
    date: 'Sepanjang Kepengurusan',
    status: 'Berjalan',
    targetAudience: 'Seluruh Sivitas Akademika'
  },
  {
    id: 'proker-6',
    title: 'Informatics Gathering & Welcoming Party',
    description: 'Acara penyambutan mahasiswa baru Informatika untuk mempererat kekeluargaan, saling mengenal dosen, senior, divisi HMPTI, serta mengukuhkan solidaritas angkatan.',
    category: 'Kreatif',
    date: 'September 2026',
    status: 'Rencana',
    targetAudience: 'Mahasiswa Baru Teknik Informatika'
  }
];
