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
              <a href="#home" class="logo" aria-label="WordPad Online Home">
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
                <li><a href="#home">Home</a></li>
                <li><a href="#editor">Online Editor</a></li>
                <li><a href="#features">All Features</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#use-cases">Use Cases</a></li>
                <li><a href="#shortcuts">Shortcuts</a></li>
              </ul>
            </div>

            <!-- Resources -->
            <div class="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#faq">FAQ & Help</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#editor" class="export-pdf-link">Export to PDF</a></li>
                <li><a href="#editor" class="export-docx-link">Export to DOCX</a></li>
                <li><a href="#editor" class="export-txt-link">Export to TXT</a></li>
                <li><a href="#editor" class="new-doc-link">New Document</a></li>
              </ul>
            </div>

            <!-- Legal & Contact -->
            <div class="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#" class="privacy-link">Privacy Policy</a></li>
                <li><a href="#" class="terms-link">Terms of Service</a></li>
                <li><a href="#" class="cookies-link">Cookie Policy</a></li>
                <li><a href="#" class="accessibility-link">Accessibility</a></li>
                <li><a href="mailto:support@wordpadonline.com">Contact Support</a></li>
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

          <!-- Extended Footer Info -->
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #1e293b; text-align: center;">
            <p style="font-size: 0.78rem; color: #475569; line-height: 1.8; max-width: 800px; margin: 0 auto;">
              WordPad Online is an independent, free web-based word processor inspired by the simplicity of classic WordPad. 
              We are not affiliated with Microsoft Corporation. WordPad is a registered trademark of Microsoft. 
              Our tool works entirely in your browser — your documents never leave your device, ensuring complete privacy and security.
            </p>
            <div style="margin-top: 16px; display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
              <a href="#" class="info-link" style="color: #64748b; font-size: 0.78rem; font-weight: 600; text-decoration: none;">📄 Open Source</a>
              <span style="color: #475569;">·</span>
              <a href="#" class="info-link" style="color: #64748b; font-size: 0.78rem; font-weight: 600; text-decoration: none;">🔒 Privacy First</a>
              <span style="color: #475569;">·</span>
              <a href="#" class="info-link" style="color: #64748b; font-size: 0.78rem; font-weight: 600; text-decoration: none;">🌍 Accessible to All</a>
              <span style="color: #475569;">·</span>
              <a href="#" class="info-link" style="color: #64748b; font-size: 0.78rem; font-weight: 600; text-decoration: none;">⚡ Fast & Lightweight</a>
            </div>
          </div>
        </div>
      </footer>
    `;

    setupFooterEvents();
  }

  function setupFooterEvents() {
    // Export to PDF link
    document.querySelector('.export-pdf-link')?.addEventListener('click', function(e) {
      e.preventDefault();
      if (typeof window.exportToPDF === 'function') {
        window.exportToPDF();
      } else {
        handleExportFallback('pdf');
      }
    });

    // Export to DOCX link
    document.querySelector('.export-docx-link')?.addEventListener('click', function(e) {
      e.preventDefault();
      if (typeof window.exportToDocx === 'function') {
        window.exportToDocx();
      } else {
        handleExportFallback('docx');
      }
    });

    // Export to TXT link
    document.querySelector('.export-txt-link')?.addEventListener('click', function(e) {
      e.preventDefault();
      if (typeof window.exportToTxt === 'function') {
        window.exportToTxt();
      } else {
        handleExportFallback('txt');
      }
    });

    // New Document link
    document.querySelector('.new-doc-link')?.addEventListener('click', function(e) {
      e.preventDefault();
      const editor = document.getElementById('wordpad-editor');
      if (editor) {
        editor.innerHTML = '<p>Start writing your new document here...</p>';
        localStorage.removeItem('wordpad-online-content');
        
        // Scroll to editor
        const editorSection = document.getElementById('editor');
        if (editorSection) {
          const headerHeight = 68;
          const targetPosition = editorSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
        
        // Show toast notification
        const toast = document.getElementById('toast');
        if (toast && typeof window.showToastMessage === 'function') {
          window.showToastMessage('New document created');
        }
        
        // Update word count
        const wordCountEl = document.getElementById('word-count');
        const charCountEl = document.getElementById('char-count');
        if (wordCountEl) wordCountEl.textContent = 'Words: 0';
        if (charCountEl) charCountEl.textContent = 'Characters: 0';
      }
    });

    // Legal links - show info toast
    const legalLinks = document.querySelectorAll('.privacy-link, .terms-link, .cookies-link, .accessibility-link');
    legalLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const linkText = this.textContent.trim();
        if (typeof window.showToastMessage === 'function') {
          window.showToastMessage(`${linkText}: Your documents never leave your device. We don't collect any personal data.`);
        } else {
          alert(`${linkText}: Your documents never leave your device. We don't collect any personal data.`);
        }
      });
    });

    // Info links
    const infoLinks = document.querySelectorAll('.info-link');
    infoLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        // Scroll to about section
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          const headerHeight = 68;
          const targetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Handle email protection
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Optional: Add analytics tracking here
        console.log('Support email clicked');
      });
    });
  }

  function handleExportFallback(type) {
    const editor = document.getElementById('wordpad-editor');
    if (!editor) {
      if (typeof window.showToastMessage === 'function') {
        window.showToastMessage('Please open the editor first before exporting');
      } else {
        alert('Please open the editor first before exporting');
      }
      return;
    }

    // Fallback export functions if editor.js hasn't loaded yet
    switch(type) {
      case 'pdf':
        window.print();
        break;
      case 'docx':
        const content = editor.innerHTML;
        const htmlContent = `
          <html xmlns:o="urn:schemas-microsoft-com:office:office" 
                xmlns:w="urn:schemas-microsoft-com:office:word" 
                xmlns="http://www.w3.org/TR/REC-html40">
          <head><meta charset="UTF-8" /></head>
          <body>${content}</body>
          </html>`;
        
        const docxBlob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
        const docxUrl = URL.createObjectURL(docxBlob);
        const docxLink = document.createElement('a');
        docxLink.href = docxUrl;
        docxLink.download = 'document.doc';
        docxLink.click();
        URL.revokeObjectURL(docxUrl);
        break;
      case 'txt':
        const text = editor.innerText;
        const txtBlob = new Blob([text], { type: 'text/plain' });
        const txtUrl = URL.createObjectURL(txtBlob);
        const txtLink = document.createElement('a');
        txtLink.href = txtUrl;
        txtLink.download = 'document.txt';
        txtLink.click();
        URL.revokeObjectURL(txtUrl);
        break;
    }

    if (typeof window.showToastMessage === 'function') {
      window.showToastMessage(`Document exported as ${type.toUpperCase()}`);
    }
  }

  // Initialize footer when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createFooter);
  } else {
    createFooter();
  }
})();
