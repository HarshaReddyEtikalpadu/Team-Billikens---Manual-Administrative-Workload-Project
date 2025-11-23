// Navigation, interactions, and utility helpers
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav') || document.querySelector('.nav-menu') || document.getElementById('main-nav');

    // Mobile Navigation Toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            navToggle.classList.toggle('active');
            navToggle.textContent = navMenu.classList.contains('show') ? '✕' : '☰';
        });
    }

    // Close mobile menu when clicking a link (mobile)
    document.querySelectorAll('.nav a, .nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && navMenu) {
                navMenu.classList.remove('show');
                if (navToggle) {
                    navToggle.classList.remove('active');
                    navToggle.textContent = '☰';
                }
            }
        });
    });

    // Active link highlighting
    (function setActiveLink(){
        const path = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav a, .nav-menu a').forEach(a => {
            const href = a.getAttribute('href');
            if (!href) return;
            if (path === href || path.endsWith(href) || href.endsWith(path)) a.classList.add('active');
            else a.classList.remove('active');
        });
    })();

    // Counter animation (if used)
    const counters = document.querySelectorAll('.count');
    if (counters.length) {
        const counterObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = +el.getAttribute('data-target') || 0;
                    const duration = 1400;
                    let start = null;
                    function step(ts) {
                        if (!start) start = ts;
                        const progress = Math.min((ts - start) / duration, 1);
                        el.textContent = Math.floor(progress * target);
                        if (progress < 1) window.requestAnimationFrame(step);
                    }
                    window.requestAnimationFrame(step);
                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.4 });
        counters.forEach(c => counterObserver.observe(c));
    }

    // Back-to-top button (create if missing)
    let backToTop = document.getElementById('backToTop');
    if (!backToTop) {
        backToTop = document.createElement('button');
        backToTop.id = 'backToTop';
        backToTop.title = 'Back to top';
        backToTop.innerHTML = '↑';
        backToTop.style.display = 'none';
        backToTop.className = 'back-to-top';
        document.body.appendChild(backToTop);
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) backToTop.style.display = 'flex';
        else backToTop.style.display = 'none';
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Utility: copy to clipboard
    window.copyToClipboard = function(text) {
        if (!navigator.clipboard) {
            // fallback
            const ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); alert('Copied to clipboard: ' + text); } catch (e) { console.error(e); }
            document.body.removeChild(ta);
            return;
        }
        navigator.clipboard.writeText(text).then(function() {
            alert('Copied to clipboard: ' + text);
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    };
});
