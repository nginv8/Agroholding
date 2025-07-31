import type React from 'react';
import * as lucideIcons from 'react-icons/lu';

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

  const IconComponent = lucideIcons[name as keyof typeof lucideIcons] as
    | React.ElementType
    | undefined;

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in react-icons/lu`);
    return null;
  }

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
