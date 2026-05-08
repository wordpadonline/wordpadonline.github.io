/**
 * WordPad Online - Footer Component
 * Handles site footer injection and year auto-update.
 */

const footerHTML = `
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
              <h4>Pages</h4>
              <ul>
                <li><a href="privacy" class="footer-info-link" data-info="privacy">Privacy Policy</a></li>
                <li><a href="terms" class="footer-info-link" data-info="terms">Terms of Service</a></li>
                <li><a href="cookies" class="footer-info-link" data-info="cookies">Cookie Policy</a></li>
                <li><a href="about" class="footer-info-link" data-info="accessibility">About</a></li>
                <li><a href="contact" class="footer-info-link" data-info="accessibility">Contact</a></li>
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

document.addEventListener('DOMContentLoaded', () => {
  const footerRoot = document.getElementById('footer-root');
  if (footerRoot) {
    footerRoot.innerHTML = footerHTML;
  }
});
