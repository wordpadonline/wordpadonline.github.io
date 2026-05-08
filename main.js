// main.js - WordPad Online Main Application Logic

(function() {
  'use strict';

  // ============ HEADER FUNCTIONALITY ============
  function initHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    // Scroll effect
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
        const spans = hamburger.querySelectorAll('span');
        if (mobileMenu.classList.contains('open')) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
          spans[0].style.transform = '';
          spans[1].style.opacity = '';
          spans[2].style.transform = '';
        }
      });

      // Close mobile menu on link click
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
          mobileMenu.classList.remove('open');
          const spans = hamburger.querySelectorAll('span');
          spans[0].style.transform = '';
          spans[1].style.opacity = '';
          spans[2].style.transform = '';
        });
      });
    }
  }

  // ============ SMOOTH SCROLLING ============
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const headerHeight = 68;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ============ FAQ ACCORDION ============
  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(button => {
      button.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        
        // Close all other FAQs
        document.querySelectorAll('.faq-question').forEach(btn => {
          btn.setAttribute('aria-expanded', 'false');
          btn.nextElementSibling?.classList.remove('open');
        });
        
        // Toggle current
        if (!expanded) {
          this.setAttribute('aria-expanded', 'true');
          this.nextElementSibling?.classList.add('open');
        }
      });
    });
  }

  // ============ MODAL MANAGEMENT ============
  function initModals() {
    const overlay = document.getElementById('modal-overlay');
    if (!overlay) return;

    // Close modals on overlay click
    overlay.addEventListener('click', function() {
      closeAllModals();
    });

    // Close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        if (modal) {
          modal.classList.remove('open');
          overlay.classList.remove('open');
          clearModalInputs(modal);
        }
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeAllModals();
      }
    });
  }

  function closeAllModals() {
    document.querySelectorAll('.modal.open').forEach(modal => {
      modal.classList.remove('open');
      clearModalInputs(modal);
    });
    document.getElementById('modal-overlay')?.classList.remove('open');
  }

  function clearModalInputs(modal) {
    modal.querySelectorAll('input[type="text"], input[type="url"], input[type="number"]').forEach(input => {
      input.value = '';
    });
    const fileInput = modal.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = '';
  }

  // ============ INTERSECTION OBSERVER FOR ANIMATIONS ============
  function initAnimations() {
    if (!('IntersectionObserver' in window)) return;

    const animatedElements = document.querySelectorAll('.animate-card, .feature-card, .step-card, .usecase-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }

  // ============ EXPORT BUTTONS IN HEADER ============
  function createExportButtons() {
    // Add export buttons to the editor section
    const editorSection = document.querySelector('#editor .container');
    if (!editorSection) return;

    // Check if already added
    if (document.getElementById('export-buttons-row')) return;

    const exportRow = document.createElement('div');
    exportRow.id = 'export-buttons-row';
    exportRow.className = 'export-buttons-row';
    exportRow.style.cssText = `
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    `;
    
    exportRow.innerHTML = `
      <button class="btn btn-sm btn-outline" onclick="exportToPDF()" title="Export to PDF">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        Export PDF
      </button>
      <button class="btn btn-sm btn-outline" onclick="exportToDocx()" title="Export to DOCX">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        Export DOCX
      </button>
      <button class="btn btn-sm btn-outline" onclick="exportToTxt()" title="Export to TXT">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        Export TXT
      </button>
      <button class="btn btn-sm btn-outline" onclick="document.querySelector('.wordpad-editor').innerHTML = '<p>Start writing your new document here...</p>'; localStorage.removeItem('wordpad-online-content'); showToastMessage('New document created')" title="New Document">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        New Document
      </button>
    `;

    const editorWrapper = document.getElementById('editor-wrapper');
    if (editorWrapper) {
      editorWrapper.parentNode.insertBefore(exportRow, editorWrapper);
    }
  }

  // ============ TOAST MESSAGE ============
  function showToastMessage(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.classList.add('show');
    
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // Expose for global use
  window.showToastMessage = showToastMessage;

  // ============ PRINT FUNCTIONALITY ============
  function initPrintStyles() {
    // Add print styles
    const printStyle = document.createElement('style');
    printStyle.setAttribute('media', 'print');
    printStyle.textContent = `
      @media print {
        body * {
          visibility: hidden;
        }
        .wordpad-editor, .wordpad-editor * {
          visibility: visible;
        }
        .wordpad-editor {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          padding: 20px;
        }
        .site-header, .editor-toolbar, .editor-statusbar, .export-buttons-row,
        .hero, .features-section, .how-section, .usecases-section,
        .shortcuts-section, .faq-section, .about-section, .cta-section,
        .site-footer, .modal, .modal-overlay, .toast {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(printStyle);
  }

  // ============ INITIALIZE EVERYTHING ============
  function init() {
    initHeader();
    initSmoothScroll();
    initFAQ();
    initModals();
    initAnimations();
    initPrintStyles();
    
    // Create export buttons after a short delay to ensure editor is ready
    setTimeout(createExportButtons, 500);
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
