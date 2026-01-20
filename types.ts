export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
}

export interface EventItem {
  id: number;
  date: string;
  month: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
