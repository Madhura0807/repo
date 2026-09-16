/**
 * MADHURA KALE — DEVELOPER PORTFOLIO INTERACTIONS
 * Vanilla ES6+ • Zero external dependencies • Lightning fast
 */

(function () {
  'use strict';

  // DOM Elements Cache
  const root = document.documentElement;
  const scrollContainer = document.getElementById('scroll');
  const tabsContainer = document.getElementById('tabs');
  const tabs = document.querySelectorAll('.tab');
  const files = document.querySelectorAll('.file');
  const docSections = document.querySelectorAll('.doc-section');
  const themeToggle = document.getElementById('theme-toggle');
  const themeLabel = document.getElementById('theme-label');
  const themeIcon = document.getElementById('theme-icon');
  const mobileToggle = document.getElementById('mobile-toggle');
  const sidebar = document.getElementById('sidebar');
  const toast = document.getElementById('toast');
  const cmdModal = document.getElementById('cmd-modal');
  const cmdBtn = document.getElementById('cmd-btn');
  const cmdInput = document.getElementById('cmd-input');
  const cmdResults = document.getElementById('cmd-results');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyPhoneBtn = document.getElementById('copy-phone-btn');
  const filterPills = document.querySelectorAll('.filter-pill');
  const skillGroups = document.querySelectorAll('.skill-group');

  // SVG Icons for theme toggle
  const sunIcon = `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>`;
  const moonIcon = `<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>`;

  /* ==========================================================================
     1. THEME MANAGEMENT (Dark / Light with LocalStorage & OS Preference)
     ========================================================================== */
  function applyTheme(theme) {
    if (theme !== 'dark' && theme !== 'light') theme = 'dark';
    root.setAttribute('data-theme', theme);
    if (themeLabel) themeLabel.textContent = theme === 'dark' ? 'Dark' : 'Light';
    if (themeIcon) themeIcon.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
    try {
      localStorage.setItem('madhura-theme', theme);
    } catch (e) {
      /* ignore */
    }
  }

  function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem('madhura-theme');
    } catch (e) {}

    if (saved) {
      applyTheme(saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'dark'); // default to sleek dark
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'dark';
      applyTheme(current === 'dark' ? 'light' : 'dark');
      showToast(`Switched to ${current === 'dark' ? 'Light' : 'Dark'} theme`);
    });
  }

  /* ==========================================================================
     2. NAVIGATION: TABS & SCROLL SYNCHRONIZATION
     ========================================================================== */
  function scrollToSection(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Close mobile sidebar if open
    if (sidebar && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
    }
  }

  function setActiveTabAndFile(sectionId) {
    // Map section IDs to tab IDs
    let activeKey = sectionId;
    if (sectionId === 'achievements') activeKey = 'certifications';

    // Update Tabs
    tabs.forEach((tab) => {
      const go = tab.getAttribute('data-go');
      const isActive = go === activeKey;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      if (isActive) {
        tab.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
      }
    });

    // Update Sidebar Files
    files.forEach((file) => {
      const go = file.getAttribute('data-go');
      const isActive = go === sectionId;
      file.classList.toggle('active', isActive);
    });
  }

  // Setup click triggers for elements with data-go & data-proj
  document.querySelectorAll('[data-go]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const proj = el.getAttribute('data-proj');
      if (proj) {
        const projEl = document.getElementById(`proj-${proj}`);
        if (projEl) {
          projEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (sidebar && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
          }
          return;
        }
      }
      const target = el.getAttribute('data-go');
      if (target) {
        scrollToSection(target);
      }
    });
  });

  // Also support any standard in-page hash links (e.g. href="#contact")
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').substring(1);
      if (targetId) {
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          scrollToSection(targetId);
        }
      }
    });
  });

  // IntersectionObserver for tracking scroll position in the editor view
  let isManualScrolling = false;
  if ('IntersectionObserver' in window && scrollContainer) {
    const observerOptions = {
      root: scrollContainer,
      rootMargin: '-10% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      if (isManualScrolling) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const secId = entry.target.getAttribute('id');
          if (secId) {
            setActiveTabAndFile(secId);
          }
        }
      });
    }, observerOptions);

    docSections.forEach((section) => sectionObserver.observe(section));
  }

  /* ==========================================================================
     3. EXPLORER FOLDER ACCORDION
     ========================================================================== */
  const folders = document.querySelectorAll('.folder');
  folders.forEach((folder) => {
    folder.addEventListener('click', () => {
      const nextNest = folder.nextElementSibling;
      if (nextNest && nextNest.classList.contains('nest')) {
        const isCollapsed = nextNest.style.display === 'none';
        nextNest.style.display = isCollapsed ? 'block' : 'none';
        const caret = folder.querySelector('.caret');
        if (caret) {
          caret.style.transform = isCollapsed ? 'rotate(0deg)' : 'rotate(-90deg)';
        }
      }
    });
  });

  /* ==========================================================================
     4. MOBILE SIDEBAR DRAWER TOGGLE
     ========================================================================== */
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });

    // Close when clicking outside on mobile
    scrollContainer.addEventListener('click', () => {
      if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      }
    });
  }

  /* ==========================================================================
     5. SKILLS FILTER TABS
     ========================================================================== */
  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      const cat = pill.getAttribute('data-cat');
      skillGroups.forEach((group) => {
        const groupCat = group.getAttribute('data-category');
        if (cat === 'all' || cat === groupCat) {
          group.style.display = 'flex';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     6. QUICK COPY ACTIONS (EMAIL & PHONE) WITH TOAST NOTIFICATION
     ========================================================================== */
  function showToast(message) {
    if (!toast) return;
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
      <span>${message}</span>
    `;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  function copyToClipboard(text, label) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`${label} copied to clipboard!`);
      }).catch(() => {
        fallbackCopy(text, label);
      });
    } else {
      fallbackCopy(text, label);
    }
  }

  function fallbackCopy(text, label) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(`${label} copied to clipboard!`);
    } catch (err) {
      showToast(`Please manually copy: ${text}`);
    }
    document.body.removeChild(tempInput);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      copyToClipboard('madhurakale0807@gmail.com', 'Email (madhurakale0807@gmail.com)');
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      copyToClipboard('+919607029819', 'Phone (+91 9607029819)');
    });
  }

  /* ==========================================================================
     7. CONTACT FORM SUBMISSION HANDLER
     ========================================================================== */
  window.handleFormSubmit = function (event) {
    event.preventDefault();
    const nameEl = document.getElementById('c-name');
    const emailEl = document.getElementById('c-email');
    const msgEl = document.getElementById('c-msg');

    const name = nameEl ? nameEl.value.trim() : '';
    const email = emailEl ? emailEl.value.trim() : '';
    const msg = msgEl ? msgEl.value.trim() : '';

    if (!name || !email || !msg) {
      showToast('Please fill out all fields.');
      return false;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hello Madhura,\n\n${msg}\n\nBest regards,\n${name}\nEmail: ${email}`
    );

    showToast('Opening your default email client...');
    setTimeout(() => {
      window.location.href = `mailto:madhurakale0807@gmail.com?subject=${subject}&body=${body}`;
    }, 400);

    return false;
  };

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', window.handleFormSubmit);
  }

  /* ==========================================================================
     8. COMMAND PALETTE (CTRL+K / CMD+K / SEARCH BUTTON)
     ========================================================================== */
  function openCmdPalette() {
    if (!cmdModal) return;
    cmdModal.classList.add('open');
    if (cmdInput) {
      cmdInput.value = '';
      filterCmdItems('');
      setTimeout(() => cmdInput.focus(), 50);
    }
  }

  function closeCmdPalette() {
    if (!cmdModal) return;
    cmdModal.classList.remove('open');
  }

  function filterCmdItems(query) {
    const q = query.toLowerCase().trim();
    const items = cmdResults ? cmdResults.querySelectorAll('.cmd-item') : [];
    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      if (!q || text.includes(q)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  if (cmdBtn) {
    cmdBtn.addEventListener('click', openCmdPalette);
  }

  const actSearch = document.getElementById('act-search');
  if (actSearch) {
    actSearch.addEventListener('click', openCmdPalette);
  }

  const actCert = document.getElementById('act-cert');
  if (actCert) {
    actCert.addEventListener('click', () => scrollToSection('certifications'));
  }

  const actExplorer = document.getElementById('act-explorer');
  if (actExplorer && sidebar) {
    actExplorer.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  if (cmdModal) {
    cmdModal.addEventListener('click', (e) => {
      if (e.target === cmdModal) closeCmdPalette();
    });
  }

  if (cmdInput) {
    cmdInput.addEventListener('input', (e) => {
      filterCmdItems(e.target.value);
    });
  }

  // Handle Command Item Execution
  if (cmdResults) {
    cmdResults.querySelectorAll('.cmd-item').forEach((item) => {
      item.addEventListener('click', () => {
        const action = item.getAttribute('data-action');
        const target = item.getAttribute('data-target');
        closeCmdPalette();

        if (action === 'go') {
          scrollToSection(target);
        } else if (action === 'copy' && target === 'email') {
          copyToClipboard('madhurakale0807@gmail.com', 'Email');
        } else if (action === 'toggle' && target === 'theme') {
          const current = root.getAttribute('data-theme') || 'dark';
          applyTheme(current === 'dark' ? 'light' : 'dark');
          showToast(`Theme toggled to ${current === 'dark' ? 'Light' : 'Dark'}`);
        }
      });
    });
  }

  // Global Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    // Open Palette with Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdModal && cmdModal.classList.contains('open')) {
        closeCmdPalette();
      } else {
        openCmdPalette();
      }
    }
    // Close with Escape
    if (e.key === 'Escape') {
      closeCmdPalette();
      if (sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      }
    }
  });

  /* ==========================================================================
     9. INITIALIZATION
     ========================================================================== */
  initTheme();
  console.log('⚡ Madhura Kale Portfolio Initialized Successfully.');
})();
