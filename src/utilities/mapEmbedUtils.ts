/**
 * Extracts URL from iframe embed code or validates direct URL
 */
export const extractMapUrl = (input: string): string | null => {
  if (!input || typeof input !== 'string') {
    return null;
  }

  const trimmedInput = input.trim();

  // Check if it's an iframe tag
  if (trimmedInput.startsWith('<iframe')) {
    const srcMatch = trimmedInput.match(/src\s*=\s*["']([^"']+)["']/i);
    return srcMatch ? srcMatch[1] : null;
  }

  // If it's not an iframe, treat as direct URL
  return trimmedInput;
};

/**
 * Validates if the URL is a valid map embed URL
 */
export const validateMapUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);

    // Check for known map embed domains
    const validDomains = [
      'www.google.com',
      'maps.google.com',
      'www.openstreetmap.org',
      'embed.windy.com',
      'www.bing.com',
    ];

    const hostname = urlObj.hostname.toLowerCase();

    // Check if it's a valid domain
    const isValidDomain = validDomains.some(
      (domain) => hostname === domain || hostname.endsWith('.' + domain)
    );

    if (!isValidDomain) {
      return false;
    }

    // Additional checks for Google Maps
    if (hostname.includes('google.com')) {
      return urlObj.pathname.includes('/maps/embed') || urlObj.pathname.includes('/maps/');
    }

    // Additional checks for OpenStreetMap
    if (hostname.includes('openstreetmap.org')) {
      return urlObj.pathname.includes('/export/embed.html') || urlObj.search.includes('bbox');
    }

    return true;
  } catch {
    return false;
  }
};

/**
 * Processes map input: extracts URL from iframe and validates
 */
export const processMapInput = (
  input: string
): { url: string | null; isValid: boolean; error?: string } => {
  if (!input || typeof input !== 'string') {
    return { url: null, isValid: false, error: 'Input is required' };
  }

  const extractedUrl = extractMapUrl(input);

  if (!extractedUrl) {
    return {
      url: null,
      isValid: false,
      error: 'Could not extract URL from input. Please provide a valid URL or iframe embed code.',
    };
  }

  const isValid = validateMapUrl(extractedUrl);

  if (!isValid) {
    return {
      url: extractedUrl,
      isValid: false,
      error:
        'Please provide a valid map embed URL from Google Maps, OpenStreetMap, or other supported map services.',
    };
  }

  return { url: extractedUrl, isValid: true };
};
