document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  const animated = document.querySelectorAll('[data-animate]');

  if ('IntersectionObserver' in window && animated.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    animated.forEach(el => observer.observe(el));
  } else {
    animated.forEach(el => el.classList.add('is-visible'));
  }

});

