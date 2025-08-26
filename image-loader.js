'use client';

export default function smartCloudinaryLoader({ src, width, quality }) {
  if (!src.startsWith('https://res.cloudinary.com')) {
    return src;
  }

  const params = ['f_auto', `q_${quality || 'auto'}`, 'c_limit', `w_${width}`];

  return src.replace('/upload/', `/upload/${params.join(',')}/`);
}
