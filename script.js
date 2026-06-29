/**
 * Jhelum Cafe & Fine Dine - Shared JS Foundation
 */
document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // NAVBAR SCROLL & HAMBURGER TOGGLE
  // ==========================================
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // Add scrolled class on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Toggle mobile overlay menu
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile menu when links are clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ==========================================
  // SCROLL-TRIGGERED FADE-IN (INTERSECTION OBSERVER)
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ==========================================
  // ANIMATED NUMBER COUNTER (COUNTUP)
  // ==========================================
  const counterElements = document.querySelectorAll('.countup-number');

  function triggerCountUp(el) {
    const target = parseInt(el.getAttribute('data-target') || '0', 10);
    const duration = 2000; // Duration in ms
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * target);
      
      el.textContent = currentValue.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = target.toLocaleString() + (el.getAttribute('data-suffix') || '');
      }
    }

    requestAnimationFrame(updateCounter);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        triggerCountUp(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  counterElements.forEach(el => counterObserver.observe(el));

  // ==========================================
  // SMOOTH ANCHOR LINK SCROLLING
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navOffset = navbar ? navbar.offsetHeight : 72;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navOffset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
