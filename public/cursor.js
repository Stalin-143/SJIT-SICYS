(function() {
  'use strict';
  
  let cursor = null;
  let cursorRing = null;
  let isInitialized = false;
  let animationFrame = null;
  
  function createCursor() {
    // Remove existing cursors
    if (cursor) {
      cursor.remove();
    }
    if (cursorRing) {
      cursorRing.remove();
    }
    
    // Create main pink cursor
    cursor = document.createElement('div');
    cursor.className = 'pink-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 24px;
      height: 24px;
      background: linear-gradient(135deg, #fce7f3 0%, #f8bbd9 50%, #f472b6 100%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      transform: translate(-50%, -50%);
      transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 0 20px rgba(248, 187, 217, 0.4), inset 0 0 8px rgba(255, 255, 255, 0.3);
      opacity: 1;
    `;
    document.body.appendChild(cursor);
    
    // Create pink cursor ring
    cursorRing = document.createElement('div');
    cursorRing.className = 'pink-cursor-ring';
    cursorRing.setAttribute('aria-hidden', 'true');
    cursorRing.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      border: 2px solid rgba(248, 187, 217, 0.6);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      background: radial-gradient(circle, rgba(248, 187, 217, 0.1) 0%, transparent 70%);
      opacity: 0.7;
      animation: cursor-pulse 3s ease-in-out infinite;
    `;
    document.body.appendChild(cursorRing);
  }
  
  function updateCursorPosition(x, y) {
    if (cursor) {
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    }
    if (cursorRing) {
      cursorRing.style.left = x + 'px';
      cursorRing.style.top = y + 'px';
    }
  }
  
  function handleMouseMove(e) {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
    
    animationFrame = requestAnimationFrame(() => {
      updateCursorPosition(e.clientX, e.clientY);
    });
  }
  
  function handleMouseDown() {
    if (cursor) {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
      cursor.style.background = 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)';
    }
    if (cursorRing) {
      cursorRing.style.width = '70px';
      cursorRing.style.height = '70px';
      cursorRing.style.opacity = '0.5';
      cursorRing.style.borderWidth = '3px';
    }
  }
  
  function handleMouseUp() {
    if (cursor) {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.background = 'linear-gradient(135deg, #fce7f3 0%, #f8bbd9 50%, #f472b6 100%)';
    }
    if (cursorRing) {
      cursorRing.style.width = '40px';
      cursorRing.style.height = '40px';
      cursorRing.style.opacity = '0.7';
      cursorRing.style.borderWidth = '2px';
    }
  }
  
  function handleMouseEnter(e) {
    const target = e.target;
    if (target && target.matches && target.matches('a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"]), .btn, .card, .hover-raise')) {
      if (cursor) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.background = 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)';
        cursor.style.boxShadow = '0 0 25px rgba(244, 114, 182, 0.6), inset 0 0 12px rgba(255, 255, 255, 0.4)';
      }
      if (cursorRing) {
        cursorRing.style.width = '60px';
        cursorRing.style.height = '60px';
        cursorRing.style.borderColor = 'rgba(244, 114, 182, 0.8)';
        cursorRing.style.opacity = '0.9';
      }
    }
  }
  
  function handleMouseLeave(e) {
    const target = e.target;
    if (target && target.matches && target.matches('a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"]), .btn, .card, .hover-raise')) {
      if (cursor) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.background = 'linear-gradient(135deg, #fce7f3 0%, #f8bbd9 50%, #f472b6 100%)';
        cursor.style.boxShadow = '0 0 20px rgba(248, 187, 217, 0.4), inset 0 0 8px rgba(255, 255, 255, 0.3)';
      }
      if (cursorRing) {
        cursorRing.style.width = '40px';
        cursorRing.style.height = '40px';
        cursorRing.style.borderColor = 'rgba(248, 187, 217, 0.6)';
        cursorRing.style.opacity = '0.7';
      }
    }
  }
  
  function handleVisibilityChange() {
    if (document.hidden) {
      if (cursor) {
        cursor.style.opacity = '0';
      }
      if (cursorRing) {
        cursorRing.style.opacity = '0';
      }
    } else {
      if (cursor) {
        cursor.style.opacity = '1';
      }
      if (cursorRing) {
        cursorRing.style.opacity = '0.7';
      }
    }
  }
  
  function addEventListeners() {
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseover', handleMouseEnter, { passive: true });
    document.addEventListener('mouseout', handleMouseLeave, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange, { passive: true });
  }
  
  function removeEventListeners() {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mousedown', handleMouseDown);
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mouseover', handleMouseEnter);
    document.removeEventListener('mouseout', handleMouseLeave);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  }
  
  function addCursorStyles() {
    if (document.getElementById('pink-cursor-styles')) {
      return;
    }
    
    const style = document.createElement('style');
    style.id = 'pink-cursor-styles';
    style.textContent = `
      * {
        cursor: none !important;
      }
      
      @keyframes cursor-pulse {
        0%, 100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.7;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.05);
          opacity: 0.9;
        }
      }
      
      @media (prefers-reduced-motion: reduce) {
        .pink-cursor,
        .pink-cursor-ring {
          transition: none !important;
          animation: none !important;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  function init() {
    if (isInitialized) {
      return;
    }
    
    // Check if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }
    
    // Check if device supports hover (desktop/laptop)
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!supportsHover) {
      return;
    }
    
    addCursorStyles();
    createCursor();
    addEventListeners();
    isInitialized = true;
    
    // Initialize cursor position at center
    const rect = document.body.getBoundingClientRect();
    updateCursorPosition(rect.width / 2, rect.height / 2);
  }
  
  function destroy() {
    if (!isInitialized) {
      return;
    }
    
    removeEventListeners();
    
    if (cursor && cursor.parentNode) {
      cursor.parentNode.removeChild(cursor);
      cursor = null;
    }
    
    if (cursorRing && cursorRing.parentNode) {
      cursorRing.parentNode.removeChild(cursorRing);
      cursorRing = null;
    }
    
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
    
    isInitialized = false;
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // Use setTimeout to ensure all components are loaded
    setTimeout(init, 100);
  }
  
  // Handle SPA navigation
  let currentUrl = window.location.href;
  const observer = new MutationObserver(() => {
    if (window.location.href !== currentUrl) {
      currentUrl = window.location.href;
      setTimeout(() => {
        if (!isInitialized) {
          init();
        }
      }, 100);
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  // Cleanup on page unload
  window.addEventListener('beforeunload', destroy);
  
  // Export for debugging
  window.PinkCursor = {
    init: init,
    destroy: destroy,
    isInitialized: () => isInitialized
  };
})();
