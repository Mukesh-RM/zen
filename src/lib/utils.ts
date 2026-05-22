import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(amount);
}

export function getBeltColor(rank: string): string {
  const colors: Record<string, string> = {
    'White': '#F5F0E8',
    'Yellow': '#EAB308',
    'Orange': '#F97316',
    'Green': '#22C55E',
    'Blue': '#3B82F6',
    'Purple': '#A855F7',
    'Brown': '#8B4513',
    'Brown 3': '#78350F',
    'Brown 2': '#92400E',
    'Brown 1': '#B45309',
    'Black 1st Dan': '#1A1A1A',
    'Black 2nd Dan': '#1A1A1A',
    'Black 3rd Dan': '#1A1A1A',
    'Black 4th Dan': '#1A1A1A',
    'Black 5th Dan': '#1A1A1A',
    'Black 6th Dan': '#1A1A1A',
    'Black 7th Dan': '#1A1A1A',
    'Black 8th Dan': '#1A1A1A',
    'Black 9th Dan': '#1A1A1A',
  };
  return colors[rank] || '#F5F0E8';
}
