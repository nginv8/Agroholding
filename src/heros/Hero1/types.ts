import type { Media, Page } from '@/payload-types';

export type HeroBlock = NonNullable<Page['hero']>[number] & { isFirst?: boolean };
export type HeroTitle = HeroBlock['title'];
export type HeroLink = NonNullable<HeroBlock['links']>[number];

export interface BackgroundImageProps {
  backgroundImage: number | Media;
  isFirst?: boolean;
}

export interface HeroSubtitleProps {
  subtitle: string;
}

export interface HeroTitleProps {
  beforeText: string;
  accentStyles: { text: string; className: string } | null;
  afterText: string;
}

export interface HeroDescriptionProps {
  description: string;
}

export interface HeroLinksProps {
  links: HeroLink[];
  alignment?: string | null;
}
