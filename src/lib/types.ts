export interface Instructor {
  id: string;
  name: string;
  rank: string;
  danLevel: number;
  branch: string;
  bio: string;
  photoUrl: string;
  featured: boolean;
}

export interface Event {
  id: string;
  title: string;
  type: 'TOURNAMENT' | 'GRADING' | 'SEMINAR' | 'CAMP' | 'SPECIAL';
  date: string;
  location: string;
  description: string;
  capacity?: number;
  cost?: number;
  published: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  beltLevel: string;
  quote: string;
  photoUrl: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  schedule: string;
  coordinates: [number, number];
  isHeadOffice: boolean;
}

export interface BeltRequirement {
  rank: string;
  color: string;
  minimumMonths: number;
  kata: string[];
  techniques: string[];
  selfDefense: string[];
  sparring: string;
}

export interface FAQ {
  id: string;
  category: 'GENERAL' | 'JOINING' | 'TRAINING' | 'GRADING' | 'TOURNAMENT' | 'KIDS';
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: 'TRAINING' | 'TOURNAMENT' | 'GRADING' | 'EVENTS' | 'SEMINARS';
  featured: boolean;
}

export interface TournamentRegistration {
  fullName: string;
  dob: string;
  email: string;
  phone: string;
  beltLevel: string;
  yearsTraining: number;
  homeDojo: string;
  categories: string[];
  ageGroup: string;
  weightClass?: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  branch: string;
  message: string;
}
