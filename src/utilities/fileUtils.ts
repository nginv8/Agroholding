import { IMAGE_EXTENSIONS, VIDEO_EXTENSIONS } from '@/constants/mediaExtensions';

export type FileTypeInfo = {
  type: string;
  color: string;
};

const getFileExtension = (filename: string | undefined): string => {
  if (!filename) return '';
  const parts = filename.split('.');
  if (parts.length < 2) return '';
  return '.' + parts.pop()?.toLowerCase();
};

export const getFileType = (
  mimeType: string | null | undefined,
  filename?: string
): FileTypeInfo => {
  const extension = getFileExtension(filename);

  if (mimeType?.includes('pdf') || extension === '.pdf') {
    return { type: 'PDF', color: 'bg-red-50 text-red-700 border-red-200' };
  }

  if (
    mimeType?.includes('word') ||
    mimeType?.includes('msword') ||
    ['.doc', '.docx'].includes(extension)
  ) {
    return { type: 'DOC', color: 'bg-blue-50 text-blue-700 border-blue-200' };
  }

  if (
    mimeType?.includes('excel') ||
    mimeType?.includes('spreadsheet') ||
    ['.xls', '.xlsx'].includes(extension)
  ) {
    return { type: 'XLS', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
  }

  if (
    mimeType?.includes('powerpoint') ||
    mimeType?.includes('presentation') ||
    ['.ppt', '.pptx'].includes(extension)
  ) {
    return { type: 'PPT', color: 'bg-orange-50 text-orange-700 border-orange-200' };
  }

  if (mimeType?.includes('text') || ['.txt', '.md'].includes(extension)) {
    return { type: 'TXT', color: 'bg-slate-50 text-slate-700 border-slate-200' };
  }

  if (mimeType?.includes('csv') || extension === '.csv') {
    return { type: 'CSV', color: 'bg-teal-50 text-teal-700 border-teal-200' };
  }

  if (['.json', '.xml'].includes(extension)) {
    return {
      type: extension === '.json' ? 'JSON' : 'XML',
      color: 'bg-violet-50 text-violet-700 border-violet-200',
    };
  }

  if (
    mimeType?.includes('zip') ||
    mimeType?.includes('rar') ||
    mimeType?.includes('archive') ||
    ['.zip', '.rar', '.7z', '.tar', '.gz'].includes(extension)
  ) {
    return { type: 'ZIP', color: 'bg-amber-50 text-amber-700 border-amber-200' };
  }

  if (mimeType?.includes('image') || IMAGE_EXTENSIONS.includes(extension)) {
    return { type: 'IMG', color: 'bg-purple-50 text-purple-700 border-purple-200' };
  }

  if (mimeType?.includes('video') || VIDEO_EXTENSIONS.includes(extension)) {
    return { type: 'VID', color: 'bg-pink-50 text-pink-700 border-pink-200' };
  }

  if (mimeType?.includes('audio')) {
    return { type: 'AUD', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' };
  }

  return { type: 'FILE', color: 'bg-gray-50 text-gray-700 border-gray-200' };
};

export const formatFileSize = (size: number | undefined | null): string | null => {
  if (!size) return null;

  if (size < 1024) return `${size} B`;
  if (size < 1048576) return `${(size / 1024).toFixed(2)} KB`;
  if (size < 1073741824) return `${(size / 1048576).toFixed(2)} MB`;
  return `${(size / 1073741824).toFixed(2)} GB`;
};
