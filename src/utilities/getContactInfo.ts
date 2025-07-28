import { getCachedGlobal } from './getGlobals';
import type { Config } from 'src/payload-types';

type ContactInfo = Config['globals']['contactInfo'];

export const getContactInfo = () => getCachedGlobal('contactInfo', 1)() as Promise<ContactInfo>;

// Helper functions to get specific contact data
export const getPrimaryPhone = async (): Promise<string | null> => {
  const contactInfo = await getContactInfo();
  const primaryPhone = contactInfo?.phones?.find(phone => phone.isPrimary);
  return primaryPhone?.number || contactInfo?.phones?.[0]?.number || null;
};

export const getPrimaryEmail = async (): Promise<string | null> => {
  const contactInfo = await getContactInfo();
  const primaryEmail = contactInfo?.emails?.find(email => email.isPrimary);
  return primaryEmail?.email || contactInfo?.emails?.[0]?.email || null;
};

export const getPrimaryAddress = async (): Promise<ContactInfo['addresses'][0] | null> => {
  const contactInfo = await getContactInfo();
  const primaryAddress = contactInfo?.addresses?.find(address => address.isPrimary);
  return primaryAddress || contactInfo?.addresses?.[0] || null;
};

export const getFormattedAddress = async (): Promise<string | null> => {
  const address = await getPrimaryAddress();
  if (!address) return null;
  
  const parts = [
    address.street,
    address.city,
    address.region,
    address.postalCode,
    address.country
  ].filter(Boolean);
  
  return parts.join(', ');
};