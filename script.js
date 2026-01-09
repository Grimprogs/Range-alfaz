// CINEMATIC SCROLL-CONTROLLED EXPERIENCE
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Hero dust-reveal animation on load
  function revealHero(){
    const heroEls = document.querySelectorAll('.dust-reveal');
    if(!heroEls.length) return;

    heroEls.forEach((el, i) => {
      if(prefersReduced){
        el.classList.add('visible');
      } else {
        setTimeout(() => {
          el.classList.add('visible');
        }, 500 + (i * 300));
      }
    });
  }

  // IntersectionObserver for segment zoom effect
  function setupSegmentObserver(){
    const segments = document.querySelectorAll('.segment');
    if(!segments.length) return;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          // Add active class to zoom in
          entry.target.classList.add('active');
        } else {
          // Remove active class to zoom out
          entry.target.classList.remove('active');
        }
      });
    }, options);

    // Observe all segments
    segments.forEach(seg => observer.observe(seg));
  }

  // Keyboard accessibility for buttons
  function setupButtonAccessibility(){
    const buttons = document.querySelectorAll('.submit-btn, .cta-btn');
    buttons.forEach(btn => {
      btn.addEventListener('focus', () => {
        btn.style.outline = '3px solid rgba(201,161,74,0.6)';
      });
      btn.addEventListener('blur', () => {
        btn.style.outline = 'none';
      });
    });
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    revealHero();
    setupSegmentObserver();
    setupButtonAccessibility();
  });
})();
