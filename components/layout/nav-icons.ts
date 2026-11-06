import {
  BookOpen,
  Briefcase,
  Building2,
  Calculator,
  ClipboardCheck,
  Crown,
  Globe2,
  Landmark,
  Percent,
  Plane,
  Receipt,
  ShieldCheck,
  Sparkles,
  Tag,
  type LucideIcon,
} from 'lucide-react';
import type { NavIcon } from '@/lib/nav';

/** Client-side lookup for the icon names that nav data carries as strings. */
export const navIcons: Record<NavIcon, LucideIcon> = {
  building: Building2,
  briefcase: Briefcase,
  landmark: Landmark,
  plane: Plane,
  receipt: Receipt,
  calculator: Calculator,
  clipboard: ClipboardCheck,
  tag: Tag,
  globe: Globe2,
  crown: Crown,
  sparkles: Sparkles,
  book: BookOpen,
  percent: Percent,
  shield: ShieldCheck,
};
