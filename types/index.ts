import { ReactNode } from 'react';

export type User = {
  tokenVersion: never;
  password: string | undefined;
  medications: Medication[]; // Changed from any to Medication[]
  id: string;
  name: string;
  email: string;
  lastGlucose: number;
  lastA1C: number;
  diabetesType?: 'type1' | 'type2' | 'gestational' | 'prediabetes';
  diagnosisDate?: string;
  doctor?: string;
};

export type Medication = {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  instructions?: string;
};

export type GlucoseReading = {
  id: string;
  userId: string;
  value: number;
  date: string;
  time: string;
  notes?: string;
  mealContext?: 'fasting' | 'beforeMeal' | 'afterMeal' | 'bedtime';
};

export type Article = {
  href: string; // Changed from any to string
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'nutrition' | 'exercise' | 'medication' | 'general';
  publishedAt: string;
  slug: string;
};

export type QuickAction = {
  id: string;
  icon: ReactNode;
  label: string;
  href: string;
  color: string;
};

export type DashboardLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
  onClick?: () => void;
};

export type StatCardProps = {
  icon: ReactNode;
  title: string;
  value: string | number;
  subtitle: string;
  trend?: 'up' | 'down';
};

export type ArticleCardProps = {
  title: string;
  excerpt: string;
  href: string;
};

export type MedicationCardProps = {
  name: string;
  dosage: string;
  frequency: string;
  instructions?: string;
};
export type GlucoseReadingCardProps = {
  value: number;
  date: string;
  time: string;
  notes?: string;
  mealContext?: 'fasting' | 'beforeMeal' | 'afterMeal' | 'bedtime';
};
export type UserProfileProps = {
  name: string;
  email: string;
  diabetesType?: string;
  diagnosisDate?: string;
  lastA1C?: number;
  doctor?: string;
  medications: Medication[];
  glucoseReadings: GlucoseReading[];  
  articles: Article[];
  quickActions: QuickAction[];
  stats: StatCardProps[];
  dashboardLinks: DashboardLinkProps[];
}

