const i18n = {
    currentLang: 'en',
    defaultLang: 'en',
    defaultTexts: {},
    
    init() {
        // Guardar los textos predeterminados del HTML
        this.saveDefaultTexts();
        
        // Detectar el idioma del navegador o usar el almacenado
        this.currentLang = localStorage.getItem('preferred-lang') || 
                          navigator.language.substring(0, 2) ||
                          this.defaultLang;
        
        this.setupLanguageSelector();
        this.updateContent();
    },

    saveDefaultTexts() {
        // Guardar todos los textos predeterminados del HTML
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (element.hasAttribute('data-i18n-html')) {
                this.defaultTexts[key] = element.innerHTML;
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                this.defaultTexts[key] = element.placeholder;
            } else {
                this.defaultTexts[key] = element.textContent;
            }
        });
    },

    setupLanguageSelector() {
        const selector = document.getElementById('language-selector');
        if (selector) {
            selector.value = this.currentLang;
            selector.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
            });
        }
    },

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('preferred-lang', lang);
        this.updateContent();
    },

    updateContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            // Usar la traducción si existe, si no, usar el texto predeterminado
            const translation = window.translations?.[this.currentLang]?.[key] || this.defaultTexts[key];
            
            if (translation) {
                if (element.hasAttribute('data-i18n-html') || translation.includes('<')) {
                    element.innerHTML = translation;
                } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    },

    t(key) {
        return window.translations?.[this.currentLang]?.[key] || this.defaultTexts[key] || key;
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => i18n.init());