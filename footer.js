// footer.js - WordPad Online Footer Component

(function() {
  'use strict';

  function createFooter() {
    const footerRoot = document.getElementById('footer-root');
    if (!footerRoot) return;

    const currentYear = new Date().getFullYear();

    footerRoot.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <!-- Footer Grid -->
          <div class="footer-grid">
            <!-- Brand Column -->
            <div class="footer-brand">
              <a href="/" class="logo" aria-label="WordPad Online Home">
                <div class="logo-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                </div>
                <span>WordPad <span class="accent">Online</span></span>
              </a>
              <p>A free, browser-based word processor with rich text editing, spell check, and document export features. No download needed, no account required.</p>
              <div style="margin-top: 16px; display: flex; gap: 12px; align-items: center;">
                <span style="color: #64748b; font-size: 0.82rem; font-weight: 600;">🇺🇸 English</span>
                <span style="color: #475569;">·</span>
                <span style="color: #64748b; font-size: 0.82rem; font-weight: 600;">🌍 Free Worldwide</span>
              </div>
            </div>

            <!-- Quick Links -->
            <div class="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/#editor">Online Editor</a></li>
                <li><a href="/#features">All Features</a></li>
                <li><a href="/#how-it-works">How It Works</a></li>
                <li><a href="/#use-cases">Use Cases</a></li>
                <li><a href="/#shortcuts">Shortcuts</a></li>
              </ul>
            </div>

            <!-- Resources -->
            <div class="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="/#faq">FAQ & Help</a></li>                
                <li><a href="/#editor" onclick="exportToPDF()">Export to PDF</a></li>
                <li><a href="/#editor" onclick="exportToDocx()">Export to DOCX</a></li>
                <li><a href="/#editor" onclick="exportToTxt()">Export to TXT</a></li>
                <li><a href="/#editor">New Document</a></li>
              </ul>
            </div>

            <!-- Contact -->
            <div class="footer-col">
              <h4>Pages</h4>
              <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Use</a></li>
                <li><a href="/cookies">Cookies Policy</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>

          <!-- Footer Bottom -->
          <div class="footer-bottom">
            <p>&copy; ${currentYear} WordPad Online. All rights reserved. Made with ❤️ for writers everywhere.</p>
            <div class="footer-tags">
              <span class="footer-tag">Free</span>
              <span class="footer-tag">No Sign-Up</span>
              <span class="footer-tag">Online Editor</span>
              <span class="footer-tag">Word Processor</span>
              <span class="footer-tag">PDF Export</span>
              <span class="footer-tag">Secure</span>
              <span class="footer-tag">Private</span>
            </div>
          </div>          
        </div>
      </footer>
    `;

    setupFooterEvents();
  }

  function setupFooterEvents() {
    // Back to top functionality
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
          backToTopBtn.style.opacity = '1';
          backToTopBtn.style.pointerEvents = 'all';
        } else {
          backToTopBtn.style.opacity = '0';
          backToTopBtn.style.pointerEvents = 'none';
        }
      });

      backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // Handle email protection (basic anti-spam)
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // You could add analytics tracking here
        console.log('Support email clicked');
      });
    });
  }

  // Initialize footer when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createFooter);
  } else {
    createFooter();
  }
})();
