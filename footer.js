/**
 * WordPad Online - Footer Component
 * Handles site footer injection and year auto-update.
 */

const footerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">
            <div class="logo-icon">W</div>
            <span>WordPad <span class="accent">Online</span></span>
          </div>
          <p>The web-based word processor designed for simplicity, speed, and privacy. Create beautiful documents anywhere, anytime.</p>
        </div>

        <div class="footer-col">
          <h4>Product</h4>
          <ul>
            <li><a href="#editor">Online Editor</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#shortcuts">Shortcuts</a></li>
            <li><a href="#how-it-works">Process</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#faq">Help & FAQ</a></li>
            <li><a href="#use-cases">Use Cases</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-info">
          <p>&copy; ${new Date().getFullYear()} WordPad Online. All rights reserved.</p>
        </div>
        <div class="footer-tags">
          <span class="footer-tag">v2.4.0</span>
          <span class="footer-tag">SSL Secure</span>
          <span class="footer-tag">Browser-Based</span>
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
