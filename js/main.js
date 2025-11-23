document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');
  const backToTop = document.getElementById('backToTop');

  // Mobile nav toggle
  if(navToggle){
    navToggle.addEventListener('click', function(){
      nav.classList.toggle('show');
    });
  }

  // Close mobile nav when clicking a link
  document.querySelectorAll('.nav a').forEach(a=>{
    a.addEventListener('click', ()=>{
      if(nav.classList.contains('show')) nav.classList.remove('show');
    });
  });

  // Active link highlighting
  function setActiveLink(){
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(a=>{
      try{
        const href = a.getAttribute('href');
        if(href && (path === href || path.endsWith(href) || href.endsWith(path))){
          a.classList.add('active');
        } else {
          a.classList.remove('active');
        }
      }catch(e){}
    });
  }
  setActiveLink();

  // Counter animation on scroll
  const counters = document.querySelectorAll('.count');
  const counterObserver = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el = entry.target;
        const target = +el.getAttribute('data-target') || 0;
        const duration = 1400;
        let start = null;
        function step(ts){
          if(!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          el.textContent = Math.floor(progress * target);
          if(progress < 1) window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
        obs.unobserve(el);
      }
    });
  },{threshold:0.4});
  counters.forEach(c=>counterObserver.observe(c));

  // Back to top button
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300) backToTop.style.display = 'flex';
    else backToTop.style.display = 'none';
  });
  backToTop.addEventListener('click', ()=>{
    window.scrollTo({top:0,behavior:'smooth'});
  });

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });
});
