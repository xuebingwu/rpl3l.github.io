// Mobile navigation toggle (progressive enhancement: nav is fully usable without JS)
(function () {
  document.documentElement.classList.add('js');
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.focus();
    }
  });
})();
