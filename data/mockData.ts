
import { StoreProduct, Ebook, Course, Resource } from '../types';

export const PRODUCTS: StoreProduct[] = [
  {
    id: 's1',
    name: 'The Entanglement Hoodie',
    price: 59.00,
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600',
    category: 'Apparel',
    description: 'A premium heavyweight hoodie featuring a minimalist visualization of quantum entanglement on the back.'
  },
  {
    id: 's2',
    name: 'Superposition Poster Set',
    price: 35.00,
    imageUrl: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=600',
    category: 'Home Office',
    description: 'Museum-quality posters depicting the Schrodinger wave equation in high-fidelity aesthetic detail.'
  },
  {
    id: 's3',
    name: 'Cosmic Singularity Tee',
    price: 29.00,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600',
    category: 'Apparel',
    description: '100% organic cotton tee with a geometric interpretation of a gravitational singularity.'
  },
  {
    id: 's4',
    name: 'Event Horizon Mug',
    price: 18.00,
    imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fbed20?auto=format&fit=crop&q=80&w=600',
    category: 'Accessories',
    description: 'Matte black ceramic mug that changes color to reveal Hawking radiation patterns when heated.'
  }
];

export const EBOOKS: Ebook[] = [
  {
    id: 'e1',
    title: 'The Quantum Handbook',
    summary: 'A visual guide to subatomic mechanics.',
    pages: 184,
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600',
    price: 24.99,
    description: 'Our flagship publication. Deconstructing the most complex equations into intuitive, high-resolution visual diagrams.'
  },
  {
    id: 'e2',
    title: 'Relativity Visualized',
    summary: 'Mastering space-time curvature.',
    pages: 120,
    level: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=600',
    price: 19.99,
    description: 'A beginner-friendly exploration of Einsteinian physics focusing on intuition over raw calculus.'
  }
];

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Quantum Computing Fundamentals',
    duration: '12 Weeks',
    modules: 24,
    instructor: 'Dr. Aris Thorne',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600',
    price: 199.00,
    description: 'Learn the principles of qubits, gates, and algorithms from the ground up.'
  },
  {
    id: 'c2',
    title: 'Astrophysics & Deep Space',
    duration: '8 Weeks',
    modules: 16,
    instructor: 'Prof. Elena Vance',
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=600',
    price: 149.00,
    description: 'An advanced deep dive into stellar evolution and galactic dynamics.'
  }
];

export const RESOURCES: Resource[] = [
  {
    id: 'r1',
    title: 'Standard Model Cheat Sheet',
    type: 'PDF',
    author: 'Quantum Explained Team',
    imageUrl: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=600',
    description: 'High-density reference sheet for every particle in the standard model.'
  },
  {
    id: 'r2',
    title: 'Orbital Mechanics Tool',
    type: 'Tool',
    author: 'Lab Zero',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=600',
    description: 'Web-based simulator for visualizing planetary trajectories.'
  }
];
