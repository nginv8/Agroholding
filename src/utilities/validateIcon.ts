import * as lucideIcons from 'react-icons/lu';

/**
 * Validates if a string is a valid Lucide icon name
 *
 * @param iconName - The icon name to validate (should be in format LuIconName)
 * @returns boolean - true if the icon exists in react-icons/lu library
 */
export const isValidIconName = (
  iconName: string | null | undefined
): iconName is keyof typeof lucideIcons => {
  if (!iconName || typeof iconName !== 'string') {
    return false;
  }

  return iconName in lucideIcons;
};

/**
 * Gets all available Lucide icon names
 *
 * @returns Array of all available icon names from react-icons/lu
 */
export const getAvailableIcons = (): string[] => {
  return Object.keys(lucideIcons).sort();
};

/**
 * Validates icon name and returns it if valid, otherwise returns fallback
 *
 * @param iconName - The icon name to validate
 * @param fallback - Fallback icon name (defaults to 'LuHelpCircle')
 * @returns Valid icon name or fallback
 */
export const validateIconName = (
  iconName: string | null | undefined,
  fallback: string = 'LuHelpCircle'
): string => {
  if (isValidIconName(iconName)) {
    return iconName;
  }

  // Validate fallback as well
  if (isValidIconName(fallback)) {
    return fallback;
  }

  // Last resort fallback
  return 'LuHelpCircle';
};

/**
 * Suggests similar icon names based on partial match
 *
 * @param partialName - Partial icon name to search for
 * @param limit - Maximum number of suggestions (defaults to 5)
 * @returns Array of suggested icon names
 */
export const suggestIconNames = (partialName: string, limit: number = 5): string[] => {
  if (!partialName || typeof partialName !== 'string') {
    return [];
  }

  const lowerPartial = partialName.toLowerCase();
  const allIcons = getAvailableIcons();

  const suggestions = allIcons
    .filter((iconName) => iconName.toLowerCase().includes(lowerPartial))
    .slice(0, limit);

  return suggestions;
};
