import type React from 'react';
import * as lucideIcons from 'react-icons/lu';

import { isValidIconName, suggestIconNames } from '@/utilities/validateIcon';

type IconRendererProps = {
  name?: string;
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

/**
 * IconRenderer component for rendering icons from react-icons/lu library
 *
 * @param name - Icon name from lucide icons (LuIconName)
 * @param size - Icon size in pixels
 * @param color - Icon color (CSS color value)
 * @param className - Additional CSS classes
 * @param onClick - Click handler function
 * @param style - Additional inline styles
 */

export const IconRenderer: React.FC<IconRendererProps> = ({
  name,
  size = 24,
  color,
  className = '',
  onClick,
  style,
}) => {
  if (!name) return null;

  // Validate and get the correct icon name
  if (!isValidIconName(name)) {
    const suggestions = suggestIconNames(name, 3);
    console.warn(
      `Icon "${name}" not found in react-icons/lu.${
        suggestions.length > 0 ? ` Did you mean: ${suggestions.join(', ')}?` : ''
      }`
    );
    return null;
  }

  const IconComponent = lucideIcons[name] as React.ElementType;

  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
      onClick={onClick}
      style={style}
    />
  );
};
