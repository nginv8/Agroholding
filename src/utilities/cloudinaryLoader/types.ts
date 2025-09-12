export interface CloudinaryLoaderParams {
  src: string;
  width: number;
  quality?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'limit' | 'scale' | 'crop' | 'thumb' | 'pad';
  gravity?: 'auto' | 'face' | 'center' | 'north' | 'south' | 'east' | 'west';
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
}

export interface CloudinaryTransformations {
  f_auto?: boolean;
  q_auto?: boolean;
  w?: number;
  h?: number;
  c?: string;
  g?: string;
  dpr?: 'auto' | number;
}

export const DEFAULT_QUALITY = 'auto';
export const DEFAULT_FORMAT = 'auto';
export const DEFAULT_CROP = 'limit';

export const CLOUDINARY_TRANSFORMS = {
  QUALITY: 'q',
  WIDTH: 'w',
  HEIGHT: 'h',
  CROP: 'c',
  GRAVITY: 'g',
  FORMAT: 'f',
  DPR: 'dpr',
} as const;

export const URL_PATTERNS = {
  HTTP: /^https?:\/\//,
  CLOUDINARY_BASE: /^https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\//,
  MEDIA_RELATIVE: /^media\//,
  RAW_UPLOAD: /\/raw\/upload\//,
} as const;
