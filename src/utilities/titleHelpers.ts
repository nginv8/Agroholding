export const getTitleParts = (title?: string, accentText?: string) => {
  if (!title || !accentText) {
    return { beforeText: title || '', accentText: accentText || '', afterText: '' };
  }

  const titleParts = title.split(accentText);
  const beforeText = titleParts[0];
  const afterText = titleParts[1] || '';

  return { beforeText, accentText, afterText };
};

interface AccentTextProps {
  accentText: string;
  variant?: 'colorAccent' | 'weightAccent' | null;
  theme?: 'dark' | 'light' | null;
}

export const getAccentTextStyles = ({ accentText, variant, theme }: AccentTextProps) => {
  if (!accentText) return null;

  if (variant === 'weightAccent') {
    return { text: accentText, className: 'font-light' };
  }

  // Default colorAccent behavior
  const colorClass = theme === 'light' ? 'text-primary-700' : 'text-accent-400';
  return { text: accentText, className: colorClass };
};

export const getAlignmentClasses = (alignment?: 'left' | 'center' | 'right' | null) => {
  const alignmentClasses = {
    left: 'text-left items-start justify-start',
    center: 'text-center items-center justify-center',
    right: 'text-right items-end justify-end',
  };

  return alignmentClasses[alignment || 'left'];
};
