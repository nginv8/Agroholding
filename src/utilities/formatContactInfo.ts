import type { ContactInfo } from '@/payload-types';

/**
 * Get primary phone number or first available phone
 */
export const getPrimaryPhone = (contactInfo: ContactInfo): string | undefined => {
  return (
    contactInfo?.phones?.items?.find((item) => item.isPrimary)?.number ||
    contactInfo?.phones?.items?.[0]?.number
  );
};

/**
 * Get primary email or first available email
 */
export const getPrimaryEmail = (contactInfo: ContactInfo): string | undefined => {
  return (
    contactInfo?.emails?.items?.find((item) => item.isPrimary)?.email ||
    contactInfo?.emails?.items?.[0]?.email
  );
};

/**
 * Get primary address or first available address
 */
export const getPrimaryAddress = (
  contactInfo: ContactInfo
): NonNullable<NonNullable<ContactInfo['addresses']>['items']>[0] | undefined => {
  return (
    contactInfo?.addresses?.items?.find((addr) => addr.isPrimary) ||
    contactInfo?.addresses?.items?.[0]
  );
};

/**
 * Format address object into readable string
 */
export const formatAddress = (
  address: NonNullable<NonNullable<ContactInfo['addresses']>['items']>[0]
): string => {
  if (!address) return '';

  const parts = [
    address.street,
    address.city && address.postalCode ? `${address.city}, ${address.postalCode}` : address.city,
    address.region,
    address.country,
  ].filter(Boolean);

  return parts.join('\n');
};

/**
 * Get social media links
 */
export const getSocialLinks = (contactInfo: ContactInfo) => {
  return contactInfo?.socialMedia?.items || [];
};

/**
 * Get working hours
 */
export const getWorkingHours = (contactInfo: ContactInfo) => {
  return contactInfo?.workingHours;
};

/**
 * Sort items with primary first
 */
export function sortPrimaryFirst<
  T extends {
    isPrimary?: boolean | null;
  },
>(items: T[]): T[] {
  return [...items].sort((a, b) => (b.isPrimary ? 1 : 0) - (a.isPrimary ? 1 : 0));
}

/**
 * Format address object into comma-separated string (for single line display)
 */
export const formatAddressInline = (
  address: NonNullable<NonNullable<ContactInfo['addresses']>['items']>[0]
): string => {
  if (!address) return '';

  const parts = [address.street, address.city, address.region, address.country].filter(Boolean);
  return parts.join(', ');
};

/**
 * Get all phones with primary first
 */
export const getAllPhonesSorted = (contactInfo: ContactInfo) => {
  const phones = contactInfo?.phones?.items || [];
  return sortPrimaryFirst(phones);
};

/**
 * Get all emails with primary first
 */
export const getAllEmailsSorted = (contactInfo: ContactInfo) => {
  const emails = contactInfo?.emails?.items || [];
  return sortPrimaryFirst(emails);
};

/**
 * Get all addresses with primary first
 */
export const getAllAddressesSorted = (contactInfo: ContactInfo) => {
  const addresses = contactInfo?.addresses?.items || [];
  return sortPrimaryFirst(addresses);
};
