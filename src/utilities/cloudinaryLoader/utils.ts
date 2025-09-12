import {
  CLOUDINARY_TRANSFORMS,
  DEFAULT_CROP,
  DEFAULT_FORMAT,
  DEFAULT_QUALITY,
  URL_PATTERNS,
  type CloudinaryLoaderParams,
} from './types';

export const getCloudName = (): string | undefined => {
  return process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
};

export const buildTransformations = (params: CloudinaryLoaderParams): string[] => {
  const transforms: string[] = [];

  // Format
  if (params.format) {
    transforms.push(`${CLOUDINARY_TRANSFORMS.FORMAT}_${params.format}`);
  } else {
    transforms.push(`${CLOUDINARY_TRANSFORMS.FORMAT}_${DEFAULT_FORMAT}`);
  }

  // Quality
  const quality = params.quality || DEFAULT_QUALITY;
  transforms.push(`${CLOUDINARY_TRANSFORMS.QUALITY}_${quality}`);

  // Crop mode
  const crop = params.crop || DEFAULT_CROP;
  transforms.push(`${CLOUDINARY_TRANSFORMS.CROP}_${crop}`);

  // Width
  if (params.width) {
    transforms.push(`${CLOUDINARY_TRANSFORMS.WIDTH}_${params.width}`);
  }

  // Height
  if (params.height) {
    transforms.push(`${CLOUDINARY_TRANSFORMS.HEIGHT}_${params.height}`);
  }

  // Gravity
  if (params.gravity) {
    transforms.push(`${CLOUDINARY_TRANSFORMS.GRAVITY}_${params.gravity}`);
  }

  // Device pixel ratio
  transforms.push(`${CLOUDINARY_TRANSFORMS.DPR}_auto`);

  return transforms;
};

export const isCloudinaryUrl = (url: string): boolean => {
  const cloudName = getCloudName();
  if (!cloudName) return false;

  return URL_PATTERNS.CLOUDINARY_BASE.test(url) && url.includes(`/${cloudName}/`);
};

export const shouldBypassLoader = (src: string): boolean => {
  // Skip processing for non-HTTP URLs that aren't media paths
  if (!URL_PATTERNS.HTTP.test(src) && !URL_PATTERNS.MEDIA_RELATIVE.test(src)) {
    return true;
  }

  // Skip raw upload URLs (documents, etc.)
  if (URL_PATTERNS.RAW_UPLOAD.test(src)) {
    return true;
  }

  return false;
};

export const buildCloudinaryUrl = (src: string, params: CloudinaryLoaderParams): string => {
  const cloudName = getCloudName();

  if (!cloudName) {
    console.warn('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not configured');
    return src;
  }

  const transformations = buildTransformations(params);
  const transformString = transformations.join(',');

  // If it's already a Cloudinary URL, inject transformations
  if (isCloudinaryUrl(src)) {
    return src.replace('/upload/', `/upload/${transformString}/`);
  }

  // Build new Cloudinary URL
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformString}/${src}`;
};

export const validateLoaderParams = (params: CloudinaryLoaderParams): void => {
  if (!params.src) {
    throw new Error('CloudinaryLoader: src parameter is required');
  }

  if (!params.width || params.width <= 0) {
    throw new Error('CloudinaryLoader: width must be a positive number');
  }

  if (params.height && params.height <= 0) {
    throw new Error('CloudinaryLoader: height must be a positive number');
  }

  if (
    params.quality &&
    typeof params.quality === 'number' &&
    (params.quality < 1 || params.quality > 100)
  ) {
    throw new Error('CloudinaryLoader: quality must be between 1 and 100');
  }
};
