/**
 * KC Theory Accessibility Features
 * ADHD-friendly controls and accessibility enhancements
 */

class KCAccessibility {
  constructor() {
    this.settings = {
      fontSize: 'normal',
      highContrast: false,
      reducedMotion: false,
      focusMode: false,
      dyslexiaFont: false
    };
    
    this.init();
  }
  
  init() {
    this.loadSettings();
    this.createAccessibilityMenu();
    this.bindKeyboardShortcuts();
    this.applySettings();
  }
  
  loadSettings() {
    const saved = localStorage.getItem('kc-accessibility-settings');
    if (saved) {
      this.settings = { ...this.settings, ...JSON.parse(saved) };
    }
  }
  
  saveSettings() {
    localStorage.setItem('kc-accessibility-settings', JSON.stringify(this.settings));
  }
  
  createAccessibilityMenu() {
    const menuHTML = `
      <div class="kc-accessibility-menu" id="kc-accessibility-menu" role="dialog" aria-label="Accessibility Settings">
        <div class="kc-accessibility-menu__overlay" id="kc-accessibility-overlay"></div>
        <div class="kc-accessibility-menu__panel">
          <div class="kc-accessibility-menu__header">
            <h2>Accessibility Settings</h2>
            <button class="kc-accessibility-menu__close" id="kc-accessibility-close" aria-label="Close accessibility menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div class="kc-accessibility-menu__content">
            <!-- Text Size Control -->
            <div class="kc-accessibility-option">
              <label for="kc-font-size">Text Size</label>
              <div class="kc-button-group" role="radiogroup" aria-label="Text size options">
                <button class="kc-btn-option ${this.settings.fontSize === 'small' ? 'active' : ''}" 
                        data-setting="fontSize" data-value="small" role="radio" 
                        aria-checked="${this.settings.fontSize === 'small'}">Small</button>
                <button class="kc-btn-option ${this.settings.fontSize === 'normal' ? 'active' : ''}" 
                        data-setting="fontSize" data-value="normal" role="radio"
                        aria-checked="${this.settings.fontSize === 'normal'}">Normal</button>
                <button class="kc-btn-option ${this.settings.fontSize === 'large' ? 'active' : ''}" 
                        data-setting="fontSize" data-value="large" role="radio"
                        aria-checked="${this.settings.fontSize === 'large'}">Large</button>
                <button class="kc-btn-option ${this.settings.fontSize === 'xlarge' ? 'active' : ''}" 
                        data-setting="fontSize" data-value="xlarge" role="radio"
                        aria-checked="${this.settings.fontSize === 'xlarge'}">X-Large</button>
              </div>
            </div>
            
            <!-- High Contrast Toggle -->
            <div class="kc-accessibility-option">
              <label>
                <input type="checkbox" id="kc-high-contrast" 
                       ${this.settings.highContrast ? 'checked' : ''}
                       data-setting="highContrast">
                <span>High Contrast Mode</span>
              </label>
              <p class="kc-option-description">Increases contrast for better visibility</p>
            </div>
            
            <!-- Reduced Motion Toggle -->
            <div class="kc-accessibility-option">
              <label>
                <input type="checkbox" id="kc-reduced-motion" 
                       ${this.settings.reducedMotion ? 'checked' : ''}
                       data-setting="reducedMotion">
                <span>Reduce Motion</span>
              </label>
              <p class="kc-option-description">Minimizes animations and transitions</p>
            </div>
            
            <!-- Focus Mode Toggle -->
            <div class="kc-accessibility-option">
              <label>
                <input type="checkbox" id="kc-focus-mode" 
                       ${this.settings.focusMode ? 'checked' : ''}
                       data-setting="focusMode">
                <span>Focus Mode</span>
              </label>
              <p class="kc-option-description">Removes distractions and simplifies the interface</p>
            </div>
            
            <!-- Dyslexia Font Toggle -->
            <div class="kc-accessibility-option">
              <label>
                <input type="checkbox" id="kc-dyslexia-font" 
                       ${this.settings.dyslexiaFont ? 'checked' : ''}
                       data-setting="dyslexiaFont">
                <span>Dyslexia-Friendly Font</span>
              </label>
              <p class="kc-option-description">Uses OpenDyslexic font for easier reading</p>
            </div>
            
            <!-- Reset Button -->
            <div class="kc-accessibility-option">
              <button class="btn btn-secondary btn-block" id="kc-reset-settings">
                Reset to Defaults
              </button>
            </div>
          </div>
          
          <div class="kc-accessibility-menu__footer">
            <p class="kc-keyboard-shortcuts">
              <strong>Keyboard Shortcuts:</strong><br>
              Alt+A: Open this menu | Alt+F: Toggle Focus Mode
            </p>
          </div>
        </div>
      </div>
      
      <!-- Accessibility Toggle Button -->
      <button class="kc-accessibility-toggle" id="kc-accessibility-toggle" 
              aria-label="Open accessibility settings" title="Accessibility Settings (Alt+A)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 2"></path>
        </svg>
      </button>
    `;
    
    document.body.insertAdjacentHTML('beforeend', menuHTML);
    this.bindMenuEvents();
  }
  
  bindMenuEvents() {
    // Toggle button
    const toggleBtn = document.getElementById('kc-accessibility-toggle');
    const closeBtn = document.getElementById('kc-accessibility-close');
    const overlay = document.getElementById('kc-accessibility-overlay');
    const menu = document.getElementById('kc-accessibility-menu');
    
    toggleBtn?.addEventListener('click', () => this.openMenu());
    closeBtn?.addEventListener('click', () => this.closeMenu());
    overlay?.addEventListener('click', () => this.closeMenu());
    
    // Option buttons
    const optionButtons = document.querySelectorAll('.kc-btn-option');
    optionButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const setting = e.target.dataset.setting;
        const value = e.target.dataset.value;
        this.updateSetting(setting, value);
        
        // Update active state
        const group = e.target.parentElement;
        group.querySelectorAll('.kc-btn-option').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        e.target.classList.add('active');
        e.target.setAttribute('aria-checked', 'true');
      });
    });
    
    // Checkboxes
    const checkboxes = document.querySelectorAll('.kc-accessibility-option input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        const setting = e.target.dataset.setting;
        this.updateSetting(setting, e.target.checked);
      });
    });
    
    // Reset button
    const resetBtn = document.getElementById('kc-reset-settings');
    resetBtn?.addEventListener('click', () => this.resetSettings());
  }
  
  bindKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Alt+A: Open accessibility menu
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        this.openMenu();
      }
      
      // Alt+F: Toggle focus mode
      if (e.altKey && e.key === 'f') {
        e.preventDefault();
        this.updateSetting('focusMode', !this.settings.focusMode);
        const checkbox = document.getElementById('kc-focus-mode');
        if (checkbox) checkbox.checked = this.settings.focusMode;
      }
      
      // Escape: Close menu
      if (e.key === 'Escape') {
        this.closeMenu();
      }
    });
  }
  
  openMenu() {
    const menu = document.getElementById('kc-accessibility-menu');
    menu?.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus first interactive element
    const firstButton = menu?.querySelector('button, input');
    firstButton?.focus();
  }
  
  closeMenu() {
    const menu = document.getElementById('kc-accessibility-menu');
    menu?.classList.remove('active');
    document.body.style.overflow = '';
    
    // Return focus to toggle button
    document.getElementById('kc-accessibility-toggle')?.focus();
  }
  
  updateSetting(setting, value) {
    this.settings[setting] = value;
    this.saveSettings();
    this.applySettings();
    this.announceChange(setting, value);
  }
  
  applySettings() {
    const html = document.documentElement;
    
    // Font Size
    html.setAttribute('data-font-size', this.settings.fontSize);
    
    // High Contrast
    if (this.settings.highContrast) {
      html.classList.add('kc-high-contrast');
    } else {
      html.classList.remove('kc-high-contrast');
    }
    
    // Reduced Motion
    if (this.settings.reducedMotion) {
      html.classList.add('kc-reduced-motion');
    } else {
      html.classList.remove('kc-reduced-motion');
    }
    
    // Focus Mode
    if (this.settings.focusMode) {
      html.classList.add('kc-focus-mode');
    } else {
      html.classList.remove('kc-focus-mode');
    }
    
    // Dyslexia Font
    if (this.settings.dyslexiaFont) {
      html.classList.add('kc-dyslexia-font');
    } else {
      html.classList.remove('kc-dyslexia-font');
    }
  }
  
  resetSettings() {
    this.settings = {
      fontSize: 'normal',
      highContrast: false,
      reducedMotion: false,
      focusMode: false,
      dyslexiaFont: false
    };
    
    this.saveSettings();
    this.applySettings();
    
    // Update UI
    document.querySelectorAll('.kc-btn-option').forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-checked', 'false');
      if (btn.dataset.value === 'normal') {
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
      }
    });
    
    document.querySelectorAll('.kc-accessibility-option input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = false;
    });
    
    this.announceChange('all', 'reset');
  }
  
  announceChange(setting, value) {
    const announcer = document.getElementById('kc-announcer') || this.createAnnouncer();
    
    const messages = {
      fontSize: `Text size changed to ${value}`,
      highContrast: `High contrast mode ${value ? 'enabled' : 'disabled'}`,
      reducedMotion: `Reduced motion ${value ? 'enabled' : 'disabled'}`,
      focusMode: `Focus mode ${value ? 'enabled' : 'disabled'}`,
      dyslexiaFont: `Dyslexia-friendly font ${value ? 'enabled' : 'disabled'}`,
      all: 'All settings reset to defaults'
    };
    
    announcer.textContent = messages[setting] || 'Setting updated';
  }
  
  createAnnouncer() {
    const announcer = document.createElement('div');
    announcer.id = 'kc-announcer';
    announcer.setAttribute('role', 'status');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    document.body.appendChild(announcer);
    return announcer;
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.kcAccessibility = new KCAccessibility();
  });
} else {
  window.kcAccessibility = new KCAccessibility();
}

