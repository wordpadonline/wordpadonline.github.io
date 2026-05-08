// header.js - WordPad Online Header Component

(function() {
  'use strict';

  function createHeader() {
    const headerRoot = document.getElementById('header-root');
    if (!headerRoot) return;

    headerRoot.innerHTML = `
      <header class="site-header" id="site-header">
        <div class="header-inner">
          <!-- Logo -->
          <a href="#home" class="logo" aria-label="WordPad Online Home">
            <div class="logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </div>
            <span>WordPad <span class="accent">Online</span></span>
          </a>

          <!-- Desktop Navigation -->
          <nav class="nav-links" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#editor">Editor</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#shortcuts">Shortcuts</a>
            <a href="#faq">FAQ</a>
            <a href="#about">About</a>
          </nav>

          <!-- Header CTA -->
          <div class="header-cta">
            <a href="/#editor" class="btn btn-primary btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
              Start Writing
            </a>
            <!-- Hamburger Menu Button -->
            <button class="hamburger" id="hamburger-btn" aria-label="Toggle menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">
          <a href="#home">🏠 Home</a>
          <a href="#editor">✏️ Editor</a>
          <a href="#features">✨ Features</a>
          <a href="#how-it-works">📋 How It Works</a>
          <a href="#use-cases">👥 Use Cases</a>
          <a href="#shortcuts">⌨️ Shortcuts</a>
          <a href="#faq">❓ FAQ</a>
          <a href="#about">ℹ️ About</a>
          <a href="#editor" class="btn btn-primary btn-sm" style="display: inline-flex; margin-top: 8px; width: fit-content;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9"/>
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
            Start Writing Free
          </a>
        </nav>
      </header>
    `;

    setupHeaderEvents();
  }

  function setupHeaderEvents() {
    const header = document.getElementById('site-header');
    const hamburger = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!header || !hamburger || !mobileMenu) return;

    // Scroll effect for header shadow
    let scrollTimeout;
    window.addEventListener('scroll', function() {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(function() {
          if (window.scrollY > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          scrollTimeout = null;
        }, 10);
      }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('open');
      
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        closeMobileMenu();
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!header.contains(e.target) && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    // Close mobile menu on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
        hamburger.focus();
      }
    });

    // Handle resize - close mobile menu on desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth > 900 && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    function openMobileMenu() {
      mobileMenu.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      
      // Animate hamburger to X
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      
      // Trap focus inside mobile menu
      const firstLink = mobileMenu.querySelector('a');
      if (firstLink) setTimeout(() => firstLink.focus(), 100);
    }

    function closeMobileMenu() {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      
      // Reset hamburger icon
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }

    // Highlight active section in navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    
    if (sections.length > 0) {
      window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
          }
        });
        
        navLinks.forEach(link => {
          link.style.background = '';
          link.style.color = '';
          
          const href = link.getAttribute('href');
          if (href && href.substring(1) === current) {
            link.style.background = 'var(--primary-light, #eff6ff)';
            link.style.color = 'var(--primary, #2563eb)';
          }
        });
      });
    }
  }

  // Initialize header when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createHeader);
  } else {
    createHeader();
  }
})();
