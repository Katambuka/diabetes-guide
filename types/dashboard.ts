export interface ProfileData {
   name: string;
   email: string;
   diabetesType: string;
   diagnosisYear: number;
   medications: string[];
   doctor: string;
   phone: string;
 }
 
 export interface GlucoseMetrics {
   current: number;
   targetRange: string;
   lastCheck: string;
   trend: 'rising' | 'falling' | 'stable';
 }
 
 export interface A1cMetrics {
   value: number;
   target: string;
   lastTest: string;
 }
 
 export interface ActivityMetrics {
   steps: number;
   target: number;
   minutes: number;
   calories: number;
 }
 
 export interface NutritionMetrics {
   carbs: number;
   protein: number;
   fats: number;
   water: number;
 }
 
 export interface HealthMetrics {
   glucose: GlucoseMetrics;
   a1c: A1cMetrics;
   activity: ActivityMetrics;
   nutrition: NutritionMetrics;
 }
 
 export interface Reading {
   time: string;
   value: number;
   timeSince: string;
 }
 
 export interface GlucoseChartData {
   labels: string[];
   values: number[];
 }