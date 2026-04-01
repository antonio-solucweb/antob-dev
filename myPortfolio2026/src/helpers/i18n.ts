/**
 * i18n Helper for One-Page Portfolio
 * Lightweight translation system with localStorage persistence
 */

export type Language = 'en' | 'es' | 'pt';

const STORAGE_KEY = 'portfolio-language';
export const DEFAULT_LANGUAGE: Language = 'en';

/**
 * Get language from a cookie value (for use in Astro SSR frontmatter)
 * Usage: getLanguageFromCookieValue(Astro.cookies.get('portfolio-language')?.value)
 */
export const getLanguageFromCookieValue = (cookieValue: string | undefined): Language => {
  if (cookieValue && ['en', 'es', 'pt'].includes(cookieValue)) {
    return cookieValue as Language;
  }
  return DEFAULT_LANGUAGE;
};

/**
 * Get current language from localStorage or default
 */
export const getCurrentLanguage = (): Language => {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && ['en', 'es', 'pt'].includes(stored)) {
      return stored as Language;
    }
  } catch (error) {
    console.error('Error loading language preference:', error);
  }
  
  return DEFAULT_LANGUAGE;
};

/**
 * Set current language and persist to localStorage
 */
export const setLanguage = (lang: Language): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (error) {
    console.error('Error saving language preference:', error);
  }
};

/**
 * Load JSON data for specific language
 */
export const loadData = async <T>(filename: string, lang: Language = getCurrentLanguage()): Promise<T> => {
  try {
    const data = await import(`../assets/data/${lang}/${filename}.json`);
    return data.default as T;
  } catch (error) {
    console.error(`Error loading ${filename} for language ${lang}:`, error);
    // Fallback to English if translation not found
    if (lang !== 'en') {
      const fallback = await import(`../assets/data/en/${filename}.json`);
      return fallback.default as T;
    }
    throw error;
  }
};

/**
 * Static translations for UI elements (navbar, buttons, etc.)
 */
export const translations = {
  'en': {
    nav: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      badge: 'Senior WordPress Developer',
      title: {
        line1: 'Digital',
        line2: 'Logic.',
        line3: 'Engineered.',
      },
      description: 'Computer Engineer with 7+ years of expertise. I am passionate about creating innovative solutions and unique digital experiences.',
      cta: {
        projects: 'Explore Projects',
        contact: 'Get in Touch',
      },
    },
    accessibility: {
      theme: 'Toggle Theme',
      listen: 'Read Aloud',
      spacing: 'Text Spacing',
      fontIncrease: 'Increase Font Size',
      fontDecrease: 'Decrease Font Size',
      fontReset: 'Reset Font Size',
    },
  },
  'es': {
    nav: {
      home: 'Inicio',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Desarrollador WordPress Senior',
      title: {
        line1: 'Lógica',
        line2: 'Digital.',
        line3: 'Diseñada.',
      },
      description: 'Ingeniero en Computación con más de 7 años de experiencia. Me apasiona crear soluciones innovadoras y experiencias digitales únicas.',
      cta: {
        projects: 'Explorar Proyectos',
        contact: 'Contactar',
      },
    },
    accessibility: {
      theme: 'Cambiar Tema',
      listen: 'Leer en Voz Alta',
      spacing: 'Espaciado de Texto',
      fontIncrease: 'Aumentar Tamaño',
      fontDecrease: 'Disminuir Tamaño',
      fontReset: 'Restablecer Tamaño',
    },
  },
  'pt': {
    nav: {
      home: 'Início',
      skills: 'Habilidades',
      projects: 'Projetos',
      experience: 'Experiência',
      contact: 'Contato',
    },
    hero: {
      badge: 'Desenvolvedor WordPress Sênior',
      title: {
        line1: 'Lógica',
        line2: 'Digital.',
        line3: 'Projetada.',
      },
      description: 'Engenheiro de Computação com mais de 7 anos de experiência. Sou apaixonado por criar soluções inovadoras e experiências digitais únicas.',
      cta: {
        projects: 'Explorar Projetos',
        contact: 'Entre em Contato',
      },
    },
    accessibility: {
      theme: 'Alternar Tema',
      listen: 'Ler em Voz Alta',
      spacing: 'Espaçamento de Texto',
      fontIncrease: 'Aumentar Tamanho',
      fontDecrease: 'Diminuir Tamanho',
      fontReset: 'Redefinir Tamanho',
    },
  },
};

/**
 * Get translations for current language
 */
export const t = (lang: Language = getCurrentLanguage()) => {
  return translations[lang];
};
