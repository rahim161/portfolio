/* ═══════════════════════════════════════════════════════
   PORTFOLIO — Md. Abdur Rahim
   script.js — Vanilla JS, no frameworks, no dependencies
   ═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── DOM REFERENCES ──────────────────────────────── */
  const navbar    = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');
  const navLinks  = document.querySelectorAll('.nav-link');
  const sections  = document.querySelectorAll('section[id]');
  const footerYear = document.getElementById('footerYear');

  /* ── FOOTER YEAR ─────────────────────────────────── */
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  /* ── NAVBAR SCROLL SHADOW ────────────────────────── */
  function onScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    highlightActiveSection();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* ── HAMBURGER TOGGLE ────────────────────────────── */
  function closeMenu() {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openMenu() {
    navMenu.classList.add('open');
    navToggle.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  navToggle.addEventListener('click', function () {
    const isOpen = navMenu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  /* Close menu when a nav link is clicked */
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  /* Close menu on outside click */
  document.addEventListener('click', function (e) {
    if (
      navMenu.classList.contains('open') &&
      !navMenu.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      closeMenu();
    }
  });

  /* Close menu on Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
      navToggle.focus();
    }
  });

  /* ── ACTIVE NAV SECTION HIGHLIGHT ───────────────── */
  function highlightActiveSection() {
    const scrollY = window.scrollY + 80; // offset for sticky nav

    let current = '';
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  /* ── INTERSECTION OBSERVER — FADE IN SECTIONS ────── */
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.08
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  /* Observe cards and timeline items */
  const animatables = document.querySelectorAll(
    '.fact-card, .timeline-card, .skill-group, .project-card, .edu-card, .extra-item, .contact-card'
  );

  animatables.forEach(function (el, index) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease ' + (index % 4) * 0.08 + 's, transform 0.5s ease ' + (index % 4) * 0.08 + 's';
    observer.observe(el);
  });

  /* Apply visible state */
  const visibilityObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        visibilityObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatables.forEach(function (el) {
    visibilityObserver.observe(el);
  });

  /* ── SMOOTH SCROLL POLYFILL for older browsers ─── */
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navHeight = navbar ? navbar.offsetHeight : 64;
          const targetY = target.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }
    });
  });

  /* ── RESIZE: close mobile menu on desktop resize ── */
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768 && navMenu.classList.contains('open')) {
      closeMenu();
    }
  });

})();
