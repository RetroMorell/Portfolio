// Minimal JS behaviors
(function () {
  // Theme handling
  function getPreferredTheme() {
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch (e) {}
    if (stored && stored !== 'auto') return stored;
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  function setTheme(theme) {
    if (theme === 'auto') {
      var resolved = getPreferredTheme();
      document.documentElement.setAttribute('data-bs-theme', resolved);
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  }

  function showActiveTheme(theme) {
    var dropdown = document.getElementById('themeDropdown');
    if (!dropdown) return;
    var label = theme === 'auto' ? 'Theme: Auto' : 'Theme: ' + theme.charAt(0).toUpperCase() + theme.slice(1);
    dropdown.textContent = label;
  }

  var themeButtons = document.querySelectorAll('[data-theme-value]');
  themeButtons.forEach(function(btn) {
    btn.addEventListener('click', function () {
      var value = this.getAttribute('data-theme-value');
      try { localStorage.setItem('theme', value); } catch (e) {}
      setTheme(value);
      showActiveTheme(value);
    });
  });

  // Initialize theme on load and listen to system changes when auto
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  showActiveTheme(stored || 'auto');
  setTheme(stored || 'auto');

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
      var s = null; try { s = localStorage.getItem('theme'); } catch (e) {}
      if (!s || s === 'auto') setTheme('auto');
    });
  }

  // Carousel behavior
  const carouselElement = document.querySelector('#portfolioCarousel');
  if (carouselElement && window.bootstrap) {
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 4000,
      pause: 'hover',
      ride: false
    });
  }
})();
