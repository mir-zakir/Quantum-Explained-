
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Post {
  id: string;
  imageUrl: string;
  caption: string;
  likes: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface StoreProduct {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description?: string;
}

export interface Ebook {
  id: string;
  title: string;
  summary: string;
  pages: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  imageUrl: string;
  price: number;
  description?: string;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  modules: number;
  instructor: string;
  imageUrl: string;
  price: number;
  description?: string;
}

export interface Resource {
  id: string;
  title: string;
  type: "PDF" | "Dataset" | "Tool";
  author: string;
  imageUrl: string;
  description?: string;
}
