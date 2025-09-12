import type { CloudinaryLoaderParams } from './types';
import { buildCloudinaryUrl, shouldBypassLoader, validateLoaderParams } from './utils';

/**
 * Cloudinary image loader for Next.js Image component
 * Handles image transformations and optimizations
 */
export default function cloudinaryLoader(params: CloudinaryLoaderParams): string {
  try {
    validateLoaderParams(params);

    const { src } = params;

    // Return original URL for non-processable sources
    if (shouldBypassLoader(src)) {
      return src;
    }

    // Build optimized Cloudinary URL
    return buildCloudinaryUrl(src, params);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('CloudinaryLoader Error:', error);
    }
    // Fallback to original source on error
    return params.src;
  }
}

/**
 * Convenience function for basic image loading
 */
export function loadImage(src: string, width: number, quality?: number): string {
  return cloudinaryLoader({ src, width, quality });
}

/**
 * Advanced image loader with full transformation support
 */
export function loadImageAdvanced(params: CloudinaryLoaderParams): string {
  return cloudinaryLoader(params);
}
