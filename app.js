// Super landing interactions
(function () {
  if (typeof window === 'undefined') return;

  function safeGSAP(fn) {
    if (window.gsap) {
      fn(window.gsap);
    }
  }

  safeGSAP(function (gsap) {
    gsap.from('.hero h1', { y: 40, opacity: 0, duration: 1.2, ease: 'power3.out' });
    gsap.from('.hero-sub', { y: 30, opacity: 0, duration: 1, delay: 0.2 });
    gsap.from('.hero-actions', { y: 20, opacity: 0, duration: 0.8, delay: 0.4 });
  });
})();