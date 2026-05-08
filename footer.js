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
              <a href="#home" class="logo footer-logo-link" aria-label="WordPad Online Home">
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
                <li><a href="#home" class="footer-nav-link">Home</a></li>
                <li><a href="#editor" class="footer-nav-link">Online Editor</a></li>
                <li><a href="#features" class="footer-nav-link">All Features</a></li>
                <li><a href="#how-it-works" class="footer-nav-link">How It Works</a></li>
                <li><a href="#use-cases" class="footer-nav-link">Use Cases</a></li>
                <li><a href="#shortcuts" class="footer-nav-link">Shortcuts</a></li>
              </ul>
            </div>

            <!-- Resources -->
            <div class="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#faq" class="footer-nav-link">FAQ & Help</a></li>
                <li><a href="#about" class="footer-nav-link">About Us</a></li>
                <li><a href="#editor" class="footer-action-link" data-action="export-pdf">Export to PDF</a></li>
                <li><a href="#editor" class="footer-action-link" data-action="export-docx">Export to DOCX</a></li>
                <li><a href="#editor" class="footer-action-link" data-action="export-txt">Export to TXT</a></li>
                <li><a href="#editor" class="footer-action-link" data-action="new-doc">New Document</a></li>
              </ul>
            </div>

            <!-- Legal & Contact -->
            <div class="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#" class="footer-info-link" data-info="privacy">Privacy Policy</a></li>
                <li><a href="#" class="footer-info-link" data-info="terms">Terms of Service</a></li>
                <li><a href="#" class="footer-info-link" data-info="cookies">Cookie Policy</a></li>
                <li><a href="#" class="footer-info-link" data-info="accessibility">Accessibility</a></li>
                <li><a href="mailto:support@wordpadonline.com" class="footer-email-link">Contact Support</a></li>
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
              <a href="#about" class="footer-bottom-link">📄 Open Source</a>
              <span style="color: #475569;">·</span>
              <a href="#about" class="footer-bottom-link">🔒 Privacy First</a>
              <span style="color: #475569;">·</span>
              <a href="#about" class="footer-bottom-link">🌍 Accessible to All</a>
              <span style="color: #475569;">·</span>
              <a href="#about" class="footer-bottom-link">⚡ Fast & Lightweight</a>
            </div>
          </div>
        </div>
      </footer>
    `;

    setupFooterEvents();
  }

  function setupFooterEvents() {
    // Smooth scroll function
    function smoothScrollTo(targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        const headerHeight = 68;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        return true;
      }
      return false;
    }

    // Show toast message helper
    function showToastMsg(message) {
      if (typeof window.showToastMessage === 'function') {
        window.showToastMessage(message);
      } else {
        // Fallback toast
        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = message;
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3000);
        }
      }
    }

    // Handle all navigation links in footer
    document.querySelectorAll('.footer-nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
          const targetId = href.substring(1);
          smoothScrollTo(targetId);
        }
      });
    });

    // Handle footer logo link
    const logoLink = document.querySelector('.footer-logo-link');
    if (logoLink) {
      logoLink.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScrollTo('home');
      });
    }

    // Handle footer bottom links
    document.querySelectorAll('.footer-bottom-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
          const targetId = href.substring(1);
          smoothScrollTo(targetId);
        }
      });
    });

    // Handle action links (export, new doc)
    document.querySelectorAll('.footer-action-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const action = this.getAttribute('data-action');
        
        switch(action) {
          case 'export-pdf':
            if (typeof window.exportToPDF === 'function') {
              window.exportToPDF();
            } else {
              handleExportFallback('pdf');
            }
            break;
            
          case 'export-docx':
            if (typeof window.exportToDocx === 'function') {
              window.exportToDocx();
            } else {
              handleExportFallback('docx');
            }
            break;
            
          case 'export-txt':
            if (typeof window.exportToTxt === 'function') {
              window.exportToTxt();
            } else {
              handleExportFallback('txt');
            }
            break;
            
          case 'new-doc':
            createNewDocument();
            break;
        }
      });
    });

    // Handle info links (privacy, terms, etc.)
    document.querySelectorAll('.footer-info-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const info = this.getAttribute('data-info');
        const messages = {
          'privacy': 'Privacy Policy: Your documents never leave your device. We don\'t collect any personal data.',
          'terms': 'Terms of Service: This tool is provided free of charge with no warranties.',
          'cookies': 'Cookie Policy: We don\'t use any cookies or tracking technologies.',
          'accessibility': 'Accessibility: We strive to make our tool accessible to everyone.'
        };
        showToastMsg(messages[info] || 'Information not available');
      });
    });

    // Handle email link
    document.querySelectorAll('.footer-email-link').forEach(link => {
      link.addEventListener('click', function(e) {
        // Let the mailto link work naturally
        console.log('Support email clicked');
      });
    });

    // New document function
    function createNewDocument() {
      const editor = document.getElementById('wordpad-editor');
      if (editor) {
        editor.innerHTML = '<p>Start writing your new document here...</p>';
        localStorage.removeItem('wordpad-online-content');
        
        // Update word count
        const wordCountEl = document.getElementById('word-count');
        const charCountEl = document.getElementById('char-count');
        if (wordCountEl) wordCountEl.textContent = 'Words: 0';
        if (charCountEl) charCountEl.textContent = 'Characters: 0';
        
        // Update save status
        const saveStatus = document.getElementById('save-status');
        if (saveStatus) {
          saveStatus.textContent = '✓ Auto-saved';
          saveStatus.className = 'save-status saved';
        }
        
        // Scroll to editor
        smoothScrollTo('editor');
        
        // Focus on editor
        setTimeout(() => editor.focus(), 500);
        
        showToastMsg('New document created successfully!');
      } else {
        // If editor doesn't exist, just scroll to editor section
        smoothScrollTo('editor');
        showToastMsg('Please wait for the editor to load');
      }
    }

    // Export fallback functions
    function handleExportFallback(type) {
      const editor = document.getElementById('wordpad-editor');
      if (!editor) {
        showToastMsg('Please open the editor first before exporting');
        smoothScrollTo('editor');
        return;
      }

      switch(type) {
        case 'pdf':
          window.print();
          showToastMsg('Document sent to printer');
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
          document.body.appendChild(docxLink);
          docxLink.click();
          document.body.removeChild(docxLink);
          URL.revokeObjectURL(docxUrl);
          showToastMsg('Document exported as DOCX');
          break;
          
        case 'txt':
          const text = editor.innerText;
          const txtBlob = new Blob([text], { type: 'text/plain' });
          const txtUrl = URL.createObjectURL(txtBlob);
          const txtLink = document.createElement('a');
          txtLink.href = txtUrl;
          txtLink.download = 'document.txt';
          document.body.appendChild(txtLink);
          txtLink.click();
          document.body.removeChild(txtLink);
          URL.revokeObjectURL(txtUrl);
          showToastMsg('Document exported as TXT');
          break;
      }
    }
  }

  // Initialize footer when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createFooter);
  } else {
    createFooter();
  }
})();
