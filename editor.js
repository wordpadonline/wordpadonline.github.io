/* ============================================
   WordPad Online — Editor Stylesheet
   Rich Text Editor · Toolbar · Responsive
   ============================================ */

/* ====== EDITOR CONTAINER ====== */
.editor-container {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  border: 1.5px solid #e2e8f0;
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.editor-container:focus-within {
  box-shadow: 0 8px 32px rgba(37, 99, 235, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);
  border-color: #2563eb;
}

/* ====== EDITOR TOOLBAR ====== */
.editor-toolbar {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 12px 16px;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
  border-bottom: 1.5px solid #e2e8f0;
  flex-wrap: wrap;
  flex-shrink: 0;
  min-height: 52px;
  position: relative;
  z-index: 2;
}

.toolbar-group {
  display: flex;
  align-items: center;
  gap: 2px;
}

/* ====== TOOL BUTTONS ====== */
.tool-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1.5px solid transparent;
  background: transparent;
  border-radius: 7px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  color: #475569;
  transition: all 0.18s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Nunito', 'Segoe UI', sans-serif;
  position: relative;
  outline: none;
}

.tool-btn:hover {
  background: #eff6ff;
  color: #2563eb;
  border-color: #bfdbfe;
}

.tool-btn:active {
  transform: scale(0.94);
  background: #dbeafe;
}

.tool-btn.active {
  background: #2563eb;
  color: #fff;
  border-color: #1d4ed8;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);
}

.tool-btn:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* Tool button tooltips */
.tool-btn[title]:hover::after {
  content: attr(title);
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translateX(-50%);
  background: #1e293b;
  color: #fff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
  pointer-events: none;
  z-index: 100;
  font-family: 'Nunito', sans-serif;
}

/* ====== TOOLBAR SEPARATOR ====== */
.toolbar-separator {
  width: 1.5px;
  height: 26px;
  background: linear-gradient(180deg, transparent 0%, #cbd5e1 20%, #cbd5e1 80%, transparent 100%);
  margin: 0 8px;
  border-radius: 2px;
}

/* ====== TOOL SELECTS ====== */
.tool-select {
  padding: 7px 28px 7px 12px;
  border: 1.5px solid #e2e8f0;
  border-radius: 7px;
  font-size: 12px;
  font-family: 'Nunito', 'Segoe UI', sans-serif;
  font-weight: 600;
  background: #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 12px;
  color: #334155;
  cursor: pointer;
  outline: none;
  transition: all 0.18s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.tool-select:hover {
  border-color: #94a3b8;
  background-color: #f8fafc;
}

.tool-select:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

#font-family-select {
  min-width: 140px;
}

#font-size-select {
  min-width: 70px;
}

/* ====== COLOR PICKERS ====== */
.tool-color {
  width: 34px;
  height: 34px;
  border: 1.5px solid #e2e8f0;
  border-radius: 7px;
  cursor: pointer;
  padding: 3px;
  background: #fff;
  transition: all 0.18s ease;
  outline: none;
}

.tool-color:hover {
  border-color: #94a3b8;
  transform: scale(1.05);
}

.tool-color:focus-visible {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

.tool-color::-webkit-color-swatch-wrapper {
  padding: 0;
}

.tool-color::-webkit-color-swatch {
  border: none;
  border-radius: 4px;
}

/* ====== EDITOR CONTENT AREA ====== */
.editor-content-area {
  flex: 1;
  min-height: 400px;
  max-height: 60vh;
  overflow-y: auto;
  background: #fff;
  scroll-behavior: smooth;
}

.editor-content-area::-webkit-scrollbar {
  width: 8px;
}

.editor-content-area::-webkit-scrollbar-track {
  background: #f8fafc;
  border-radius: 10px;
}

.editor-content-area::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
  border: 2px solid #f8fafc;
}

.editor-content-area::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* ====== EDITABLE AREA ====== */
.wordpad-editor {
  min-height: 380px;
  padding: 28px 36px;
  outline: none;
  font-family: 'Nunito', 'Segoe UI', system-ui, -apple-system, sans-serif;
  font-size: 15px;
  line-height: 1.8;
  color: #1e293b;
  background: #fff;
  word-wrap: break-word;
  overflow-wrap: break-word;
  caret-color: #2563eb;
}

.wordpad-editor:focus {
  outline: none;
}

/* Placeholder styling */
.wordpad-editor:empty::before {
  content: 'Start typing your document here...';
  color: #94a3b8;
  font-style: italic;
  pointer-events: none;
}

/* Selection styling */
.wordpad-editor ::selection {
  background: #bfdbfe;
  color: #1e293b;
}

.wordpad-editor ::-moz-selection {
  background: #bfdbfe;
  color: #1e293b;
}

/* ====== EDITOR CONTENT STYLES ====== */
.wordpad-editor h1 {
  font-size: 2em;
  margin: 0.67em 0;
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 900;
  color: #0f172a;
  line-height: 1.3;
}

.wordpad-editor h2 {
  font-size: 1.5em;
  margin: 0.75em 0;
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.3;
}

.wordpad-editor h3 {
  font-size: 1.17em;
  margin: 0.83em 0;
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  color: #334155;
}

.wordpad-editor p {
  margin: 0.6em 0;
  line-height: 1.8;
}

.wordpad-editor ul,
.wordpad-editor ol {
  margin: 0.6em 0;
  padding-left: 2em;
}

.wordpad-editor li {
  margin: 0.3em 0;
  line-height: 1.7;
}

.wordpad-editor ul li {
  list-style-type: disc;
}

.wordpad-editor ul ul li {
  list-style-type: circle;
}

.wordpad-editor ul ul ul li {
  list-style-type: square;
}

.wordpad-editor ol li {
  list-style-type: decimal;
}

.wordpad-editor blockquote {
  margin: 12px 0;
  padding: 12px 20px;
  border-left: 4px solid #2563eb;
  background: #f8fafc;
  color: #475569;
  font-style: italic;
  border-radius: 0 8px 8px 0;
}

/* ====== TABLE STYLES ====== */
.wordpad-editor table {
  margin: 16px 0;
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.wordpad-editor table td,
.wordpad-editor table th {
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  text-align: left;
  vertical-align: top;
  min-width: 60px;
}

.wordpad-editor table th {
  background: #f1f5f9;
  font-weight: 700;
  color: #1e293b;
}

.wordpad-editor table td {
  background: #fff;
}

.wordpad-editor table tr:nth-child(even) td {
  background: #f8fafc;
}

.wordpad-editor table tr:hover td {
  background: #eff6ff;
}

/* ====== IMAGE STYLES ====== */
.wordpad-editor img {
  max-width: 100%;
  height: auto;
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.2s ease;
}

.wordpad-editor img:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

/* ====== LINK STYLES ====== */
.wordpad-editor a {
  color: #2563eb;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.15s ease;
  cursor: pointer;
}

.wordpad-editor a:hover {
  color: #1d4ed8;
}

.wordpad-editor a:visited {
  color: #7c3aed;
}

/* ====== CODE / PRE STYLES ====== */
.wordpad-editor code {
  background: #f1f5f9;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 0.9em;
  color: #e11d48;
}

.wordpad-editor pre {
  background: #1e293b;
  color: #e2e8f0;
  padding: 16px 20px;
  border-radius: 10px;
  overflow-x: auto;
  margin: 12px 0;
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
}

.wordpad-editor pre code {
  background: none;
  color: inherit;
  padding: 0;
  font-size: inherit;
}

/* ====== HIGHLIGHT MARK ====== */
.wordpad-editor mark {
  background-color: #fef08a;
  padding: 2px 4px;
  border-radius: 3px;
}

/* ====== EDITOR STATUSBAR ====== */
.editor-statusbar {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
  border-top: 1.5px solid #e2e8f0;
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  min-height: 40px;
  flex-shrink: 0;
}

.editor-statusbar span {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* ====== SAVE STATUS INDICATOR ====== */
.save-status {
  margin-left: auto;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.02em;
  transition: all 0.3s ease;
}

.save-status.saved {
  color: #059669;
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
}

.save-status.saving {
  color: #d97706;
  background: #fffbeb;
  border: 1px solid #fde68a;
  animation: pulse-status 1.5s ease-in-out infinite;
}

.save-status.error {
  color: #dc2626;
  background: #fef2f2;
  border: 1px solid #fecaca;
}

@keyframes pulse-status {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

/* ====== EXPORT BUTTONS ROW ====== */
.export-buttons-row {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.export-buttons-row .btn {
  padding: 10px 22px;
  font-size: 0.88rem;
  gap: 8px;
  transition: all 0.2s ease;
  background: #fff;
}

.export-buttons-row .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.export-buttons-row .btn svg {
  flex-shrink: 0;
}

/* ====== RESPONSIVE STYLES ====== */
@media (max-width: 1100px) {
  .wordpad-editor {
    padding: 24px 28px;
    font-size: 14px;
  }
  
  .editor-content-area {
    max-height: 55vh;
  }
}

@media (max-width: 900px) {
  .editor-toolbar {
    padding: 10px 12px;
    gap: 1px;
  }
  
  .tool-btn {
    width: 32px;
    height: 32px;
    font-size: 12px;
    border-radius: 6px;
  }
  
  .toolbar-separator {
    margin: 0 4px;
    height: 22px;
  }
  
  .tool-select {
    padding: 6px 24px 6px 10px;
    font-size: 11px;
    background-position: right 6px center;
  }
  
  #font-family-select {
    min-width: 120px;
  }
  
  #font-size-select {
    min-width: 60px;
  }
  
  .tool-color {
    width: 32px;
    height: 32px;
  }
  
  .wordpad-editor {
    padding: 20px 24px;
    min-height: 320px;
    font-size: 14px;
  }
  
  .editor-content-area {
    max-height: 50vh;
  }
  
  .editor-statusbar {
    padding: 8px 16px;
    gap: 14px;
    font-size: 11px;
  }
  
  .export-buttons-row .btn {
    padding: 8px 16px;
    font-size: 0.82rem;
  }
}

@media (max-width: 640px) {
  .editor-toolbar {
    padding: 8px 8px;
    gap: 1px;
    min-height: auto;
  }
  
  .tool-btn {
    width: 30px;
    height: 30px;
    font-size: 11px;
    border-radius: 5px;
  }
  
  .toolbar-separator {
    margin: 0 2px;
    height: 20px;
  }
  
  .tool-select {
    padding: 5px 20px 5px 8px;
    font-size: 11px;
    border-radius: 5px;
  }
  
  #font-family-select {
    min-width: 100px;
  }
  
  #font-size-select {
    min-width: 50px;
  }
  
  .tool-color {
    width: 28px;
    height: 28px;
    border-radius: 5px;
  }
  
  .wordpad-editor {
    padding: 16px 18px;
    min-height: 280px;
    font-size: 13px;
    line-height: 1.7;
  }
  
  .wordpad-editor h1 {
    font-size: 1.5em;
  }
  
  .wordpad-editor h2 {
    font-size: 1.25em;
  }
  
  .wordpad-editor h3 {
    font-size: 1.1em;
  }
  
  .editor-content-area {
    max-height: 45vh;
  }
  
  .editor-statusbar {
    padding: 7px 12px;
    gap: 10px;
    font-size: 10px;
    flex-wrap: wrap;
  }
  
  .save-status {
    margin-left: 0;
    font-size: 10px;
    padding: 3px 10px;
  }
  
  .export-buttons-row {
    gap: 8px;
    margin-bottom: 16px;
  }
  
  .export-buttons-row .btn {
    padding: 7px 14px;
    font-size: 0.78rem;
    gap: 6px;
  }
  
  .wordpad-editor table td,
  .wordpad-editor table th {
    padding: 6px 8px;
    font-size: 12px;
  }
}

@media (max-width: 400px) {
  .tool-btn {
    width: 28px;
    height: 28px;
    font-size: 10px;
  }
  
  .tool-select {
    font-size: 10px;
    padding: 5px 16px 5px 6px;
  }
  
  #font-family-select {
    min-width: 80px;
  }
  
  .wordpad-editor {
    padding: 12px 14px;
    font-size: 12px;
  }
  
  .editor-content-area {
    max-height: 40vh;
  }
}

/* ====== PRINT STYLES ====== */
@media print {
  .editor-toolbar,
  .editor-statusbar,
  .export-buttons-row {
    display: none !important;
  }
  
  .editor-container {
    box-shadow: none;
    border: none;
  }
  
  .editor-content-area {
    max-height: none !important;
    overflow: visible !important;
  }
  
  .wordpad-editor {
    padding: 0;
    min-height: auto;
  }
}

/* ====== ANIMATIONS ====== */
@keyframes toolbar-btn-pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}

.tool-btn:active {
  animation: toolbar-btn-pop 0.2s ease;
}

/* Focus visible animation for accessibility */
.tool-btn:focus-visible,
.tool-select:focus-visible,
.tool-color:focus-visible {
  animation: focus-pulse 0.6s ease;
}

@keyframes focus-pulse {
  0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
  50% { box-shadow: 0 0 0 6px rgba(37, 99, 235, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
}

/* Smooth toolbar appearance */
.editor-toolbar {
  animation: toolbar-slide-in 0.4s ease;
}

@keyframes toolbar-slide-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Editor content fade in */
.wordpad-editor {
  animation: content-fade-in 0.5s ease;
}

@keyframes content-fade-in {
  from {
    opacity: 0.8;
  }
  to {
    opacity: 1;
  }
}
