export const ORDER_FORM_CONFIG = {
  API_ENDPOINT: '/api/orders',
  TOAST_DURATION: 5000,
} as const;

export const FORM_VALIDATION = {
  EMAIL_PATTERN: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  PHONE_PATTERN: /^[+]?[0-9\s]+$/,
} as const;
