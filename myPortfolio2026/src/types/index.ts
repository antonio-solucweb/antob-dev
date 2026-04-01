import { z } from 'zod';

// Skill Schema
export const SkillSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  command: z.string(),
  icon: z.string().optional(),
  status: z.string().optional(),
  level: z.string().optional(),
});

// Skill Category Schema
export const SkillCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.string().optional(),
  level: z.string().optional(),
  skills: z.array(SkillSchema),
});

// Skills Interface Schema
export const SkillsInterfaceSchema = z.object({
  label: z.string(),
  title: z.string(),
  titleHighlight: z.string(),
  titleSuffix: z.string(),
  description: z.string(),
  button: z.string(),
});

// Skills Data Schema
export const SkillsDataSchema = z.object({
  interfaces: SkillsInterfaceSchema,
  categories: z.array(SkillCategorySchema),
});

// Project Schema
export const ProjectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  tags: z.array(z.string()),
  ctaText: z.string().optional(),
  readMore: z.string().optional(),
  link: z.string().optional(),
});

// Projects Interface Schema
export const ProjectsInterfaceSchema = z.object({
  label: z.string(),
  title: z.string(),
  disclaimer: z.string(),
});

// Projects Data Schema
export const ProjectsDataSchema = z.object({
  interfaces: ProjectsInterfaceSchema,
  projects: z.array(ProjectSchema),
});

// Experience Schema
export const ExperienceSchema = z.object({
  id: z.number(),
  period: z.string(),
  position: z.string(),
  company: z.string(),
  location: z.string(),
  description: z.string(),
  isActive: z.boolean().optional(),
});

// Experience Data Schema
export const ExperienceDataSchema = z.object({
  interface: z.object({
    titleLine1: z.string(),
    titleLine2: z.string(),
    subtitle: z.string(),
    yearsText: z.string(),
    yearsNumber: z.number(),
    countriesText: z.string(),
    countriesNumber: z.number(),
    linkedinText: z.string(),
  }),
  timeline: z.array(ExperienceSchema),
  linkedinUrl: z.string().optional(),
});

// Certification Schema
export const CertificationSchema = z.object({
  id: z.number(),
  title: z.string(),
  issuer: z.string(),
  date: z.string(),
  icon: z.string().optional(),
  category: z.string(),
});

// Certifications Data Schema
export const CertificationsDataSchema = z.array(CertificationSchema);


export const ContactInfoSchema = z.object({
  number: z.string().regex(/^\+\d{10,15}$/, 'Invalid WhatsApp number format'),
  email: z.string().email('Invalid email address')
});

export const ContactDataSchema = z.object({
  interfaces: z.object({
    titleLine1: z.string(),
    titleLine2: z.string(),
    subtitle: z.string(),
    location: z.string(),
    whatsappMessage: z.string(),
    nameLabel: z.string(),
    namePlaceholder: z.string(),
    emailLabel: z.string(),
    emailPlaceholder: z.string(),
    messageLabel: z.string(),
    messagePlaceholder: z.string(),
    submitButton: z.string(),
    sendingText: z.string(),
    successText: z.string(),
    errorText: z.string(),
    tooltipText: z.string(),
  }),
});



export const GlobalUiSchema = z.object({
  interfaces: z.object({
    pageTitle: z.string(),
    metaDescription: z.string(),
    footerCopyright: z.string(),
    footerLinkedInAriaLabel: z.string(),
  }),
  accessibility: z.object({
    theme: z.string(),
    listen: z.string(),
    spacing: z.string(),
    fontIncrease: z.string(),
    fontDecrease: z.string(),
    fontReset: z.string(),
  }),
});

export const ProfileDataSchema = z.object({
  interfaces: z.object({
    titleRegular: z.string(),
    titleHighlight: z.string(),
    imageAlt: z.string(),
    description: z.string(),
    corePhilosophyLabel: z.string(),
    corePhilosophyValue: z.string(),
    technicalNicheLabel: z.string(),
    technicalNicheValue: z.string(),
    quote: z.string(),
  }),
});

// Type Inference
export type Skill = z.infer<typeof SkillSchema>;
export type SkillCategory = z.infer<typeof SkillCategorySchema>;
export type SkillsInterface = z.infer<typeof SkillsInterfaceSchema>;
export type SkillsData = z.infer<typeof SkillsDataSchema>;

export type Project = z.infer<typeof ProjectSchema>;
export type ProjectsData = z.infer<typeof ProjectsDataSchema>;

export type Experience = z.infer<typeof ExperienceSchema>;
export type ExperienceData = z.infer<typeof ExperienceDataSchema>;

export type Certification = z.infer<typeof CertificationSchema>;
export type CertificationsData = z.infer<typeof CertificationsDataSchema>;

export type ContactInfo = z.infer<typeof ContactInfoSchema>;
export type ContactData = z.infer<typeof ContactDataSchema>;
export type GlobalUi = z.infer<typeof GlobalUiSchema>;

export type ProfileData = z.infer<typeof ProfileDataSchema>;
