const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const heroSlides = [...document.querySelectorAll('.hero-image')];
let activeHeroSlide = 0;

const showNextHeroSlide = () => {
  heroSlides[activeHeroSlide].classList.remove('is-active');
  activeHeroSlide = (activeHeroSlide + 1) % heroSlides.length;
  heroSlides[activeHeroSlide].classList.add('is-active');
};

if (heroSlides.length > 1) {
  window.setInterval(showNextHeroSlide, 5200);
}
