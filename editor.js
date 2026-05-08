// editor.js - WordPad Online Rich Text Editor

(function() {
  'use strict';

  // ============ EDITOR CREATION ============
  function createEditor() {
    const wrapper = document.getElementById('editor-wrapper');
    if (!wrapper) return;

    wrapper.innerHTML = `
      <div class="editor-container">
        <!-- Main Toolbar -->
        <div class="editor-toolbar" id="editor-toolbar">
          <div class="toolbar-group">
            <button class="tool-btn" data-command="undo" title="Undo (Ctrl+Z)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
            </button>
            <button class="tool-btn" data-command="redo" title="Redo (Ctrl+Y)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
            </button>
          </div>
          <div class="toolbar-separator"></div>
          <div class="toolbar-group">
            <button class="tool-btn" data-command="bold" title="Bold (Ctrl+B)"><strong>B</strong></button>
            <button class="tool-btn" data-command="italic" title="Italic (Ctrl+I)"><em>I</em></button>
            <button class="tool-btn" data-command="underline" title="Underline (Ctrl+U)"><u>U</u></button>
            <button class="tool-btn" data-command="strikeThrough" title="Strikethrough"><s>S</s></button>
          </div>
          <div class="toolbar-separator"></div>
          <div class="toolbar-group">
            <select class="tool-select" id="font-family-select" title="Font Family">
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
              <option value="Georgia">Georgia</option>
              <option value="Verdana">Verdana</option>
              <option value="Comic Sans MS">Comic Sans MS</option>
              <option value="Trebuchet MS">Trebuchet MS</option>
              <option value="Impact">Impact</option>
            </select>
            <select class="tool-select" id="font-size-select" title="Font Size">
              <option value="1">8</option>
              <option value="2">10</option>
              <option value="3" selected>12</option>
              <option value="4">14</option>
              <option value="5">18</option>
              <option value="6">24</option>
              <option value="7">36</option>
            </select>
          </div>
          <div class="toolbar-separator"></div>
          <div class="toolbar-group">
            <input type="color" class="tool-color" id="fore-color" value="#000000" title="Text Color" />
            <input type="color" class="tool-color" id="back-color" value="#ffff00" title="Highlight Color" />
          </div>
          <div class="toolbar-separator"></div>
          <div class="toolbar-group">
            <button class="tool-btn" data-command="justifyLeft" title="Align Left (Ctrl+L)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v2H3V3zm0 4h12v2H3V7zm0 4h18v2H3v-2zm0 4h12v2H3v-2zm0 4h18v2H3v-2z"/></svg>
            </button>
            <button class="tool-btn" data-command="justifyCenter" title="Align Center (Ctrl+E)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v2H3V3zm4 4h10v2H7V7zm-4 4h18v2H3v-2zm4 4h10v2H7v-2zm-4 4h18v2H3v-2z"/></svg>
            </button>
            <button class="tool-btn" data-command="justifyRight" title="Align Right (Ctrl+R)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v2H3V3zm6 4h12v2H9V7zm-6 4h18v2H3v-2zm6 4h12v2H9v-2zm-6 4h18v2H3v-2z"/></svg>
            </button>
            <button class="tool-btn" data-command="justifyFull" title="Justify (Ctrl+J)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/></svg>
            </button>
          </div>
          <div class="toolbar-separator"></div>
          <div class="toolbar-group">
            <button class="tool-btn" data-command="insertUnorderedList" title="Bullet List">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="4" cy="6" r="2"/><line x1="8" y1="6" x2="20" y2="6" stroke="currentColor" stroke-width="2"/><circle cx="4" cy="12" r="2"/><line x1="8" y1="12" x2="20" y2="12" stroke="currentColor" stroke-width="2"/><circle cx="4" cy="18" r="2"/><line x1="8" y1="18" x2="20" y2="18" stroke="currentColor" stroke-width="2"/></svg>
            </button>
            <button class="tool-btn" data-command="insertOrderedList" title="Numbered List">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><text x="2" y="8" font-size="8">1.</text><line x1="16" y1="8" x2="22" y2="8" stroke="currentColor" stroke-width="2"/><text x="2" y="16" font-size="8">2.</text><line x1="16" y1="16" x2="22" y2="16" stroke="currentColor" stroke-width="2"/></svg>
            </button>
          </div>
          <div class="toolbar-separator"></div>
          <div class="toolbar-group">
            <button class="tool-btn" id="insert-table-btn-toolbar" title="Insert Table">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>
            </button>
            <button class="tool-btn" id="insert-image-btn-toolbar" title="Insert Image">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </button>
            <button class="tool-btn" id="insert-link-btn-toolbar" title="Insert Link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            </button>
          </div>
          <div class="toolbar-separator"></div>
          <div class="toolbar-group">
            <button class="tool-btn" id="find-replace-btn-toolbar" title="Find & Replace (Ctrl+F)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
          </div>
        </div>
        
        <!-- Editor Area -->
        <div class="editor-content-area">
          <div id="wordpad-editor" class="wordpad-editor" contenteditable="true" spellcheck="true">
            <h2 style="text-align: center;">Welcome to WordPad Online</h2>
            <p>Start typing here to create your document. This is a fully-featured rich text editor right in your browser.</p>
            <p><br></p>
            <p>✨ <strong>Features:</strong></p>
            <ul>
              <li>Rich text formatting with bold, italic, underline</li>
              <li>Font families and sizes</li>
              <li>Tables and lists</li>
              <li>Image insertion</li>
              <li>Auto-save to browser storage</li>
            </ul>
            <p><br></p>
            <p style="text-align: center; color: #64748b;">Start writing your document now!</p>
          </div>
        </div>
        
        <!-- Status Bar -->
        <div class="editor-statusbar">
          <span id="word-count">Words: 0</span>
          <span id="char-count">Characters: 0</span>
          <span id="save-status" class="save-status saved">✓ Auto-saved</span>
        </div>
      </div>
    `;

    setupEditorEvents();
  }

  // ============ TOOLBAR ACTIONS ============
  function execCommand(command, value = null) {
    document.execCommand(command, false, value);
    updateToolbarState();
    updateWordCount();
    autoSave();
  }

  function setupEditorEvents() {
    const editor = document.getElementById('wordpad-editor');
    if (!editor) return;

    // Toolbar button clicks
    document.querySelectorAll('.tool-btn[data-command]').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const command = this.dataset.command;
        execCommand(command);
        editor.focus();
      });
    });

    // Font family select
    const fontSelect = document.getElementById('font-family-select');
    if (fontSelect) {
      fontSelect.addEventListener('change', function() {
        execCommand('fontName', this.value);
        editor.focus();
      });
    }

    // Font size select
    const sizeSelect = document.getElementById('font-size-select');
    if (sizeSelect) {
      sizeSelect.addEventListener('change', function() {
        execCommand('fontSize', this.value);
        editor.focus();
      });
    }

    // Color pickers
    const foreColor = document.getElementById('fore-color');
    if (foreColor) {
      foreColor.addEventListener('input', function() {
        execCommand('foreColor', this.value);
        editor.focus();
      });
    }

    const backColor = document.getElementById('back-color');
    if (backColor) {
      backColor.addEventListener('input', function() {
        execCommand('backColor', this.value);
        editor.focus();
      });
    }

    // Table button
    const tableBtn = document.getElementById('insert-table-btn-toolbar');
    if (tableBtn) {
      tableBtn.addEventListener('click', function() {
        document.getElementById('table-modal').classList.add('open');
        document.getElementById('modal-overlay').classList.add('open');
        document.getElementById('table-rows').focus();
      });
    }

    // Image button
    const imageBtn = document.getElementById('insert-image-btn-toolbar');
    if (imageBtn) {
      imageBtn.addEventListener('click', function() {
        document.getElementById('image-modal').classList.add('open');
        document.getElementById('modal-overlay').classList.add('open');
      });
    }

    // Link button
    const linkBtn = document.getElementById('insert-link-btn-toolbar');
    if (linkBtn) {
      linkBtn.addEventListener('click', function() {
        document.getElementById('link-modal').classList.add('open');
        document.getElementById('modal-overlay').classList.add('open');
        document.getElementById('link-text-input').focus();
      });
    }

    // Find & Replace button
    const findBtn = document.getElementById('find-replace-btn-toolbar');
    if (findBtn) {
      findBtn.addEventListener('click', function() {
        document.getElementById('find-replace-modal').classList.add('open');
        document.getElementById('modal-overlay').classList.add('open');
        document.getElementById('find-input').focus();
      });
    }

    // Editor input events
    editor.addEventListener('input', function() {
      updateWordCount();
      autoSave();
      updateToolbarState();
    });

    editor.addEventListener('keyup', function(e) {
      updateToolbarState();
    });

    editor.addEventListener('mouseup', function() {
      updateToolbarState();
    });

    // Keyboard shortcuts
    editor.addEventListener('keydown', function(e) {
      if (e.ctrlKey || e.metaKey) {
        switch(e.key.toLowerCase()) {
          case 's':
            e.preventDefault();
            autoSave(true);
            break;
          case 'p':
            e.preventDefault();
            window.print();
            break;
          case 'f':
            e.preventDefault();
            document.getElementById('find-replace-modal').classList.add('open');
            document.getElementById('modal-overlay').classList.add('open');
            document.getElementById('find-input').focus();
            break;
        }
      }
    });

    // Initial state
    updateWordCount();
    updateToolbarState();
    loadSavedContent();
  }

  // ============ TOOLBAR STATE ============
  function updateToolbarState() {
    document.querySelectorAll('.tool-btn[data-command]').forEach(btn => {
      const command = btn.dataset.command;
      if (document.queryCommandState(command)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update font select
    const fontSelect = document.getElementById('font-family-select');
    if (fontSelect) {
      const fontName = document.queryCommandValue('fontName');
      if (fontName && fontSelect.querySelector(`option[value="${fontName}"]`)) {
        fontSelect.value = fontName;
      }
    }
  }

  // ============ WORD COUNT ============
  function updateWordCount() {
    const editor = document.getElementById('wordpad-editor');
    const wordCountEl = document.getElementById('word-count');
    const charCountEl = document.getElementById('char-count');
    
    if (!editor || !wordCountEl || !charCountEl) return;

    const text = editor.innerText || '';
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const chars = text.length;

    wordCountEl.textContent = `Words: ${words}`;
    charCountEl.textContent = `Characters: ${chars}`;
  }

  // ============ AUTO SAVE ============
  let saveTimeout;
  function autoSave(manual = false) {
    const editor = document.getElementById('wordpad-editor');
    const saveStatus = document.getElementById('save-status');
    if (!editor || !saveStatus) return;

    clearTimeout(saveTimeout);
    
    saveStatus.textContent = '● Saving...';
    saveStatus.className = 'save-status saving';

    saveTimeout = setTimeout(() => {
      try {
        localStorage.setItem('wordpad-online-content', editor.innerHTML);
        saveStatus.textContent = '✓ Auto-saved';
        saveStatus.className = 'save-status saved';
        
        if (manual) {
          showToast('Document saved successfully!');
        }
      } catch(e) {
        saveStatus.textContent = '⚠ Save failed';
        saveStatus.className = 'save-status error';
      }
    }, manual ? 0 : 1500);
  }

  function loadSavedContent() {
    const editor = document.getElementById('wordpad-editor');
    if (!editor) return;

    try {
      const saved = localStorage.getItem('wordpad-online-content');
      if (saved) {
        editor.innerHTML = saved;
        updateWordCount();
        showToast('Previous document loaded from auto-save');
      }
    } catch(e) {
      // Ignore load errors
    }
  }

  // ============ MODAL HANDLERS ============
  function setupModalHandlers() {
    // Table modal
    document.getElementById('insert-table-btn')?.addEventListener('click', function() {
      const rows = parseInt(document.getElementById('table-rows').value) || 3;
      const cols = parseInt(document.getElementById('table-cols').value) || 3;
      
      let tableHTML = '<table border="1" style="border-collapse: collapse; width: 100%;">';
      for (let i = 0; i < rows; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < cols; j++) {
          tableHTML += '<td style="padding: 8px; border: 1px solid #ccc;">&nbsp;</td>';
        }
        tableHTML += '</tr>';
      }
      tableHTML += '</table><p><br></p>';
      
      document.execCommand('insertHTML', false, tableHTML);
      closeModal('table-modal');
      document.getElementById('wordpad-editor')?.focus();
      autoSave();
    });

    // Image modal - file upload
    document.getElementById('image-upload')?.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          const img = `<img src="${event.target.result}" style="max-width: 100%;" alt="Uploaded image" />`;
          document.execCommand('insertHTML', false, img);
          closeModal('image-modal');
          document.getElementById('wordpad-editor')?.focus();
          autoSave();
        };
        reader.readAsDataURL(file);
      }
    });

    // Image modal - URL
    document.getElementById('insert-image-btn')?.addEventListener('click', function() {
      const url = document.getElementById('image-url-input').value.trim();
      if (url) {
        const img = `<img src="${url}" style="max-width: 100%;" alt="Image" />`;
        document.execCommand('insertHTML', false, img);
        closeModal('image-modal');
        document.getElementById('wordpad-editor')?.focus();
        autoSave();
      } else {
        showToast('Please enter an image URL or upload a file');
      }
    });

    // Link modal
    document.getElementById('insert-link-btn')?.addEventListener('click', function() {
      const text = document.getElementById('link-text-input').value.trim();
      const url = document.getElementById('link-url-input').value.trim();
      
      if (url) {
        const linkText = text || url;
        const link = `<a href="${url}" target="_blank">${linkText}</a>`;
        document.execCommand('insertHTML', false, link);
        closeModal('link-modal');
        document.getElementById('wordpad-editor')?.focus();
        autoSave();
      } else {
        showToast('Please enter a URL');
      }
    });

    // Find & Replace
    document.getElementById('find-next-btn')?.addEventListener('click', function() {
      const findText = document.getElementById('find-input').value;
      if (!findText) {
        showToast('Please enter text to find');
        return;
      }
      
      const editor = document.getElementById('wordpad-editor');
      if (!editor) return;
      
      // Simple find - highlight the text
      const content = editor.innerHTML;
      const regex = new RegExp(`(${escapeRegExp(findText)})`, 'gi');
      
      if (regex.test(content)) {
        editor.innerHTML = content.replace(regex, '<mark style="background-color: yellow;">$1</mark>');
        showToast('Text found and highlighted');
      } else {
        showToast('Text not found');
      }
    });

    document.getElementById('replace-btn')?.addEventListener('click', function() {
      const findText = document.getElementById('find-input').value;
      const replaceText = document.getElementById('replace-input').value;
      
      if (!findText) {
        showToast('Please enter text to find');
        return;
      }
      
      const editor = document.getElementById('wordpad-editor');
      if (!editor) return;
      
      const content = editor.innerHTML;
      const regex = new RegExp(escapeRegExp(findText), 'gi');
      
      if (regex.test(content)) {
        editor.innerHTML = content.replace(regex, replaceText);
        showToast('Text replaced');
        autoSave();
      } else {
        showToast('Text not found');
      }
    });

    document.getElementById('replace-all-btn')?.addEventListener('click', function() {
      const findText = document.getElementById('find-input').value;
      const replaceText = document.getElementById('replace-input').value;
      
      if (!findText) {
        showToast('Please enter text to find');
        return;
      }
      
      const editor = document.getElementById('wordpad-editor');
      if (!editor) return;
      
      const content = editor.innerHTML;
      const regex = new RegExp(escapeRegExp(findText), 'gi');
      const newContent = content.replace(regex, replaceText);
      
      const count = (content.match(regex) || []).length;
      editor.innerHTML = newContent;
      showToast(`Replaced ${count} occurrence(s)`);
      autoSave();
    });
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // ============ UTILITY FUNCTIONS ============
  function closeModal(modalId) {
    document.getElementById(modalId)?.classList.remove('open');
    document.getElementById('modal-overlay')?.classList.remove('open');
    
    // Clear inputs
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.querySelectorAll('input[type="text"], input[type="url"], input[type="number"]').forEach(input => {
        input.value = '';
      });
      const fileInput = modal.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
    }
  }

  function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.classList.add('show');
    
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // ============ EXPORT FUNCTIONS ============
  window.exportToPDF = function() {
    window.print();
  };

  window.exportToDocx = function() {
    const editor = document.getElementById('wordpad-editor');
    if (!editor) return;
    
    const content = editor.innerHTML;
    const htmlContent = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" 
            xmlns:w="urn:schemas-microsoft-com:office:word" 
            xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="UTF-8" />
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h2 { color: #1e293b; }
          table { border-collapse: collapse; width: 100%; }
          td { padding: 8px; border: 1px solid #ccc; }
        </style>
      </head>
      <body>${content}</body>
      </html>
    `;
    
    const blob = new Blob(['\ufeff', htmlContent], {
      type: 'application/msword'
    });
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'document.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showToast('Document exported as DOCX');
  };

  window.exportToTxt = function() {
    const editor = document.getElementById('wordpad-editor');
    if (!editor) return;
    
    const text = editor.innerText;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'document.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showToast('Document exported as TXT');
  };

  // ============ INITIALIZATION ============
  function init() {
    createEditor();
    setupModalHandlers();

    // Add editor-specific CSS
    const style = document.createElement('style');
    style.textContent = `
      .editor-container {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        overflow: hidden;
        border: 1px solid #e2e8f0;
      }
      
      .editor-toolbar {
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 10px 16px;
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
        flex-wrap: wrap;
        position: sticky;
        top: 68px;
        z-index: 10;
      }
      
      .toolbar-group {
        display: flex;
        align-items: center;
        gap: 2px;
      }
      
      .tool-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        border: 1px solid transparent;
        background: transparent;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 600;
        color: #475569;
        transition: all 0.15s;
        font-family: 'Nunito', sans-serif;
      }
      
      .tool-btn:hover {
        background: #e8f4ff;
        color: #2563eb;
      }
      
      .tool-btn.active {
        background: #2563eb;
        color: #fff;
        border-color: #2563eb;
      }
      
      .toolbar-separator {
        width: 1px;
        height: 24px;
        background: #e2e8f0;
        margin: 0 6px;
      }
      
      .tool-select {
        padding: 6px 10px;
        border: 1px solid #e2e8f0;
        border-radius: 6px;
        font-size: 13px;
        font-family: 'Nunito', sans-serif;
        background: #fff;
        color: #475569;
        cursor: pointer;
        outline: none;
      }
      
      .tool-select:focus {
        border-color: #2563eb;
      }
      
      .tool-color {
        width: 32px;
        height: 32px;
        border: 1px solid #e2e8f0;
        border-radius: 6px;
        cursor: pointer;
        padding: 2px;
        background: #fff;
      }
      
      .editor-content-area {
        min-height: 400px;
        max-height: 60vh;
        overflow-y: auto;
        padding: 8px;
      }
      
      .wordpad-editor {
        min-height: 380px;
        padding: 24px 32px;
        outline: none;
        font-family: 'Nunito', 'Segoe UI', sans-serif;
        font-size: 14px;
        line-height: 1.8;
        color: #1e293b;
        background: #fff;
      }
      
      .wordpad-editor:focus {
        outline: none;
      }
      
      .wordpad-editor h1 { font-size: 2em; margin: 0.67em 0; font-family: 'Playfair Display', serif; }
      .wordpad-editor h2 { font-size: 1.5em; margin: 0.75em 0; font-family: 'Playfair Display', serif; }
      .wordpad-editor h3 { font-size: 1.17em; margin: 0.83em 0; font-family: 'Playfair Display', serif; }
      .wordpad-editor p { margin: 0.5em 0; }
      .wordpad-editor ul, .wordpad-editor ol { margin: 0.5em 0; padding-left: 2em; }
      .wordpad-editor table { margin: 12px 0; }
      .wordpad-editor img { max-width: 100%; height: auto; margin: 8px 0; }
      .wordpad-editor a { color: #2563eb; }
      
      .editor-statusbar {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 10px 20px;
        background: #f8fafc;
        border-top: 1px solid #e2e8f0;
        font-size: 12px;
        font-weight: 600;
        color: #64748b;
      }
      
      .save-status {
        margin-left: auto;
        padding: 3px 10px;
        border-radius: 50px;
        font-size: 11px;
      }
      
      .save-status.saved { color: #10b981; background: #ecfdf5; }
      .save-status.saving { color: #f59e0b; background: #fffbeb; }
      .save-status.error { color: #ef4444; background: #fef2f2; }
      
      /* Export buttons in toolbar */
      .export-btns {
        margin-left: auto;
      }
      
      @media (max-width: 900px) {
        .editor-toolbar {
          top: 68px;
        }
        .wordpad-editor {
          padding: 16px 20px;
        }
        .tool-btn {
          width: 30px;
          height: 30px;
          font-size: 12px;
        }
        .toolbar-separator {
          margin: 0 3px;
        }
      }
      
      @media (max-width: 640px) {
        .editor-toolbar {
          padding: 8px;
          gap: 1px;
        }
        .wordpad-editor {
          min-height: 300px;
          padding: 12px 16px;
          font-size: 13px;
        }
        .editor-content-area {
          max-height: 50vh;
        }
        .editor-statusbar {
          flex-wrap: wrap;
          gap: 10px;
          font-size: 11px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Start the editor when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
