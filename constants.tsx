
import React from 'react';
import { Atom, Compass, Database, Globe, Zap, Cpu } from 'lucide-react';
import { Feature, Post, Testimonial, StoreProduct } from './types';

export const COLORS = {
  deepSpace: '#020617',
  quantumBlue: '#38bdf8',
  galacticViolet: '#9333ea',
  stellarWhite: '#f8fafc',
  border: 'rgba(255, 255, 255, 0.1)',
};

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Quantum Mechanics',
    description: 'Deconstructing the subatomic world through high-fidelity visual storytelling.',
    icon: <Atom className="w-6 h-6" />,
  },
  {
    id: '2',
    title: 'Astrophysics',
    description: 'Exploring cosmic evolution from the Big Bang to the Heat Death of the Universe.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: '3',
    title: 'Advanced Tech',
    description: 'Insights into the engineering marvels of the next decade: fusion, AI, and beyond.',
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    id: '4',
    title: 'Visual Logic',
    description: 'Complex equations translated into intuitive graphics for cognitive clarity.',
    icon: <Database className="w-6 h-6" />,
  },
];

export const INSTAGRAM_POSTS: Post[] = [
  {
    id: 'p1',
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=400',
    caption: 'The event horizon is where physics as we know it breaks down...',
    likes: '12.4k',
  },
  {
    id: 'p2',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=400',
    caption: 'Schrödinger\'s Cat explained in 60 seconds.',
    likes: '9.8k',
  },
  {
    id: 'p3',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=400',
    caption: 'Dark Matter: The invisible glue of the cosmos.',
    likes: '15.1k',
  },
  {
    id: 'p4',
    imageUrl: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&q=80&w=400',
    caption: 'Why time dilation is the most trippy concept in relativity.',
    likes: '11.2k',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Sarah Chen',
    role: 'Theoretical Physicist',
    content: 'The most visually stunning science communication I’ve seen on social media. Truly premium content.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: 't2',
    name: 'Marcus Thorne',
    role: 'Aerospace Engineering Student',
    content: 'Their cheat sheets saved my electromagnetics finals. The clarity is unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=marcus',
  },
  {
    id: 't3',
    name: 'Elena Volkov',
    role: 'Tech Enthusiast',
    content: 'Quantum Explained makes the most complex topics feel like a sci-fi movie. Addictive learning.',
    avatar: 'https://i.pravatar.cc/150?u=elena',
  },
];

export const STORE_PRODUCTS: StoreProduct[] = [
  {
    id: 's1',
    name: 'The Entanglement Hoodie',
    // Fixed: changed string price to number to match StoreProduct type
    price: 59.00,
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400',
    category: 'Apparel',
  },
  {
    id: 's2',
    name: 'Superposition Poster Set',
    // Fixed: changed string price to number to match StoreProduct type
    price: 35.00,
    imageUrl: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=400',
    category: 'Home Office',
  },
  {
    id: 's3',
    name: 'Cosmic Singularity Tee',
    // Fixed: changed string price to number to match StoreProduct type
    price: 29.00,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400',
    category: 'Apparel',
  },
  {
    id: 's4',
    name: 'Event Horizon Mug',
    // Fixed: changed string price to number to match StoreProduct type
    price: 18.00,
    imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fbed20?auto=format&fit=crop&q=80&w=400',
    category: 'Accessories',
  },
];
