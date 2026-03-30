import { ContactInfoSchema, type ContactInfo } from '@/types';

/**
 * Contact Information Data
 * Single source of truth for all contact details
 */
const contactData: ContactInfo = {
  whatsapp: {
    number: '+55959840097150000',
    message: 'Hi! I see your portfolio and I would like to talk with you.',
  },
  email: 'solucwebs@gmail.com',
  location: 'Based on Brazil. - Available for global remote work.',
};

// Validate contact data
const validationResult = ContactInfoSchema.safeParse(contactData);
if (!validationResult.success) {
  console.error('Contact info validation failed:', validationResult.error);
  throw new Error('Invalid contact information configuration');
}

/**
 * Get validated contact information
 */
export const getContactInfo = (): ContactInfo => {
  return validationResult.data;
};

/**
 * Get WhatsApp link with encoded message
 */
export const getWhatsAppLink = (): string => {
  const { whatsapp } = getContactInfo();
  const cleanNumber = whatsapp.number.replace(/\+/g, '');
  const encodedMessage = encodeURIComponent(whatsapp.message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
};

/**
 * Get email mailto link
 */
export const getEmailLink = (subject?: string): string => {
  const { email } = getContactInfo();
  const subjectParam = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${email}${subjectParam}`;
};

/**
 * Get formatted WhatsApp number for display
 */
export const getFormattedWhatsAppNumber = (): string => {
  const { whatsapp } = getContactInfo();
  return whatsapp.number;
};
