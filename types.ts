import { LucideIcon } from "lucide-react";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductBrand {
  name: string;
  logoUrl: string; // Using text for placeholder in this demo
}