import { ContactInfoSchema, type ContactInfo } from '@/types';

/**
 * Contact Information Data
 * Single source of truth for all contact details
 */
const contactData: ContactInfo = {
  number: '+5595984009715',
  email: 'solucwebs@gmail.com',
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
export const getWhatsAppLink = (message: string): string => {
  const { number } = getContactInfo();
  const cleanNumber = number.replace(/\+/g, '');
  const encodedMessage = encodeURIComponent(message);
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
  const { number } = getContactInfo();
  return number;
};
