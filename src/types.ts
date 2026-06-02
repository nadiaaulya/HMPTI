/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Member {
  id: string;
  name: string;
  nim?: string;
  position: string;
  photoUrl: string;
  email?: string;
  linkedin?: string;
}

export interface Division {
  id: string;
  name: string;
  iconName: string;
  description: string;
  members: Member[];
}

export interface ProgramKerja {
  id: string;
  title: string;
  description: string;
  category: 'Akademik' | 'Sosial' | 'Kreatif' | 'Kewirausahaan' | 'Teknologi';
  date: string;
  status: 'Rencana' | 'Persiapan' | 'Berjalan' | 'Selesai';
  targetAudience: string;
}

export interface Aspirasi {
  id: string;
  name: string;
  nim: string;
  message: string;
  createdAt: string;
}
