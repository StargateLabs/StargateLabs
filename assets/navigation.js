(() => {
  const links = [...document.querySelectorAll('header nav a[href^="#"]')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        if (link.getAttribute('href') === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-18% 0px -72% 0px' });
  sections.forEach(section => observer.observe(section));
  const hero = document.querySelector('.hero');
  if (hero) new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) links.forEach(link => link.removeAttribute('aria-current'));
  }, { threshold: .45 }).observe(hero);
})();
