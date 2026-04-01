/**
 * Accessibility Helper Functions
 * Manages accessibility features with localStorage persistence
 */

export interface AccessibilitySettings {
  fontSize: number;
  theme: 'dark' | 'light';
  textSpacing: boolean;
  readAloud: boolean;
}

const STORAGE_KEY = 'accessibility-settings';
const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSize: 100, // percentage
  theme: 'dark',
  textSpacing: false,
  readAloud: false,
};

/**
 * Get accessibility settings from localStorage
 */
export const getAccessibilitySettings = (): AccessibilitySettings => {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
    }
  } catch (error) {
    console.error('Error loading accessibility settings:', error);
  }
  
  return DEFAULT_SETTINGS;
};

/**
 * Save accessibility settings to localStorage
 */
export const saveAccessibilitySettings = (settings: AccessibilitySettings): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving accessibility settings:', error);
  }
};

/**
 * Apply font size to document
 */
export const applyFontSize = (percentage: number): void => {
  if (typeof document === 'undefined') return;
  
  // Clamp between 80% and 150%
  const clampedSize = Math.max(80, Math.min(150, percentage));
  document.documentElement.style.fontSize = `${clampedSize}%`;
};

/**
 * Increase font size
 */
export const increaseFontSize = (): number => {
  const settings = getAccessibilitySettings();
  const newSize = Math.min(150, settings.fontSize + 10);
  
  applyFontSize(newSize);
  saveAccessibilitySettings({ ...settings, fontSize: newSize });
  
  return newSize;
};

/**
 * Decrease font size
 */
export const decreaseFontSize = (): number => {
  const settings = getAccessibilitySettings();
  const newSize = Math.max(80, settings.fontSize - 10);
  
  applyFontSize(newSize);
  saveAccessibilitySettings({ ...settings, fontSize: newSize });
  
  return newSize;
};

/**
 * Reset font size to default
 */
export const resetFontSize = (): void => {
  applyFontSize(100);
  const settings = getAccessibilitySettings();
  saveAccessibilitySettings({ ...settings, fontSize: 100 });
};

/**
 * Toggle theme between dark and light mode
 */
export const toggleTheme = (): 'dark' | 'light' => {
  if (typeof document === 'undefined') return 'dark';
  
  const settings = getAccessibilitySettings();
  const newTheme = settings.theme === 'dark' ? 'light' : 'dark';
  
  if (newTheme === 'light') {
    document.documentElement.classList.add('light-mode');
  } else {
    document.documentElement.classList.remove('light-mode');
  }
  
  saveAccessibilitySettings({ ...settings, theme: newTheme });
  return newTheme;
};

/**
 * Toggle text spacing
 */
export const toggleTextSpacing = (): boolean => {
  if (typeof document === 'undefined') return false;
  
  const settings = getAccessibilitySettings();
  const newValue = !settings.textSpacing;
  
  if (newValue) {
    document.documentElement.classList.add('enhanced-spacing');
  } else {
    document.documentElement.classList.remove('enhanced-spacing');
  }
  
  saveAccessibilitySettings({ ...settings, textSpacing: newValue });
  return newValue;
};

/**
 * Initialize accessibility settings on page load
 */
export const initAccessibility = (): void => {
  if (typeof document === 'undefined') return;
  
  const settings = getAccessibilitySettings();
  
  // Apply font size
  applyFontSize(settings.fontSize);
  
  // Apply theme
  if (settings.theme === 'light') {
    document.documentElement.classList.add('light-mode');
  }
  
  // Apply text spacing
  if (settings.textSpacing) {
    document.documentElement.classList.add('enhanced-spacing');
  }
};

/**
 * Text-to-Speech functionality
 */
export class TextToSpeech {
  private synthesis: SpeechSynthesis | null = null;
  private utterance: SpeechSynthesisUtterance | null = null;
  private isReading: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synthesis = window.speechSynthesis;
      
      // Stop any ongoing speech on page load/reload
      this.synthesis.cancel();
      
      // Stop speech on page unload
      window.addEventListener('beforeunload', () => {
        this.stop();
      });
      
      // Stop speech on page visibility change (tab switch)
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.stop();
        }
      });
    }
  }

  /**
   * Read text aloud
   */
  read(text: string): void {
    if (!this.synthesis) {
      console.warn('Speech synthesis not supported');
      return;
    }

    // Stop any ongoing speech
    this.stop();

    const langMap: Record<string, string> = { en: 'en-US', es: 'es-MX', pt: 'pt-BR' };
    const cookieLang = document.cookie.match(/portfolio-language=([^;]+)/)?.[1] ?? 'en';
    const speechLang = langMap[cookieLang] ?? 'en-US';

    this.utterance = new SpeechSynthesisUtterance(text);
    this.utterance.lang = speechLang;
    this.utterance.rate = 1;
    this.utterance.pitch = 1;
    
    this.utterance.onend = () => {
      this.isReading = false;
    };

    this.synthesis.speak(this.utterance);
    this.isReading = true;
  }

  /**
   * Read page content
   */
  readPageContent(): void {
    if (typeof document === 'undefined') return;

    // Get main content
    const main = document.querySelector('main');
    if (!main) return;

    // Extract text content, excluding scripts and styles
    const textContent = this.extractTextContent(main);
    this.read(textContent);
  }

  /**
   * Extract clean text content from element
   */
  private extractTextContent(element: Element): string {
    const clone = element.cloneNode(true) as Element;
    
    // Remove script and style elements
    clone.querySelectorAll('script, style, nav, footer').forEach(el => el.remove());
    
    // Get text content and clean it
    const text = clone.textContent || '';
    return text.replace(/\s+/g, ' ').trim();
  }

  /**
   * Stop reading
   */
  stop(): void {
    if (this.synthesis) {
      this.synthesis.cancel();
      this.isReading = false;
    }
  }

  /**
   * Toggle reading
   */
  toggle(): boolean {
    if (this.isReading) {
      this.stop();
      return false;
    } else {
      this.readPageContent();
      return true;
    }
  }

  /**
   * Check if currently reading
   */
  getIsReading(): boolean {
    return this.isReading;
  }
}
