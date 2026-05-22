import { GalleryItem } from '../types';

export const galleryItems: GalleryItem[] = [
  // Training images
  { id: 't1', url: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&h=800&fit=crop', caption: 'Morning training session at Koyambedu dojo', category: 'TRAINING', featured: true },
  { id: 't2', url: 'https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=600&h=600&fit=crop', caption: 'Kata practice — Seisan', category: 'TRAINING', featured: false },
  { id: 't3', url: 'https://images.unsplash.com/photo-1517438329945-1482644e35b4?w=600&h=700&fit=crop', caption: 'Kids class warm-up exercises', category: 'TRAINING', featured: false },
  { id: 't4', url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=500&fit=crop', caption: 'Weapons training with bo staff', category: 'TRAINING', featured: true },
  { id: 't5', url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=750&fit=crop', caption: 'Flexibility and stretching session', category: 'TRAINING', featured: false },

  // Tournament images
  { id: 'tu1', url: 'https://images.unsplash.com/photo-1611095973763-414019e0de5b?w=600&h=400&fit=crop', caption: 'State Championship 2024 — Medal ceremony', category: 'TOURNAMENT', featured: true },
  { id: 'tu2', url: 'https://images.unsplash.com/photo-1571495113984-ec1a4eb6126b?w=600&h=600&fit=crop', caption: 'Kumite finals — Black belt division', category: 'TOURNAMENT', featured: false },
  { id: 'tu3', url: 'https://images.unsplash.com/photo-1580951837117-4fd05a8f854c?w=600&h=650&fit=crop', caption: 'Team kata competition', category: 'TOURNAMENT', featured: false },

  // Grading images
  { id: 'g1', url: 'https://images.unsplash.com/photo-1562088287-b35c14839eba?w=600&h=500&fit=crop', caption: 'Belt grading examination', category: 'GRADING', featured: false },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1551214010-5250e4760d3d?w=600&h=700&fit=crop', caption: 'Black belt candidates demonstrating kata', category: 'GRADING', featured: true },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=550&fit=crop', caption: 'New black belts receiving their certificates', category: 'GRADING', featured: false },

  // Events images
  { id: 'e1', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=450&fit=crop', caption: 'Annual Awards Ceremony 2024', category: 'EVENTS', featured: false },
  { id: 'e2', url: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&h=600&fit=crop', caption: 'Self-defense workshop for women', category: 'EVENTS', featured: true },
  { id: 'e3', url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=500&fit=crop', caption: 'Summer camp group photo', category: 'EVENTS', featured: false },

  // Seminars images
  { id: 's1', url: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=600&h=550&fit=crop', caption: 'Sensei conducting advanced seminar', category: 'SEMINARS', featured: true },
  { id: 's2', url: 'https://images.unsplash.com/photo-1562772572-7a4b88ac1f8f?w=600&h=650&fit=crop', caption: 'Weapons seminar with visiting master', category: 'SEMINARS', featured: false },
];
