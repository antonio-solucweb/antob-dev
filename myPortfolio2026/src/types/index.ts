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

// Skills Data Schema (array of categories)
export const SkillsDataSchema = z.array(SkillCategorySchema);

// Project Schema
export const ProjectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  tags: z.array(z.string()),
  ctaText: z.string().optional(),
  link: z.string().optional(),
});

// Projects Data Schema
export const ProjectsDataSchema = z.array(ProjectSchema);

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
  stats: z.object({
    years: z.string(),
    projects: z.string(),
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
  whatsapp: z.object({
    number: z.string().regex(/^\+\d{10,15}$/, 'Invalid WhatsApp number format'),
    message: z.string().min(1, 'WhatsApp message cannot be empty'),
  }),
  email: z.string().email('Invalid email address'),
  location: z.string().min(1, 'Location cannot be empty'),
});



// Type Inference
export type Skill = z.infer<typeof SkillSchema>;
export type SkillCategory = z.infer<typeof SkillCategorySchema>;
export type SkillsData = z.infer<typeof SkillsDataSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type ProjectsData = z.infer<typeof ProjectsDataSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type ExperienceData = z.infer<typeof ExperienceDataSchema>;
export type Certification = z.infer<typeof CertificationSchema>;
export type CertificationsData = z.infer<typeof CertificationsDataSchema>;
export type ContactInfo = z.infer<typeof ContactInfoSchema>;
