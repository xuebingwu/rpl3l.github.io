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

// Tabs (progressive enhancement: without JS every panel is shown in sequence)
(function () {
  document.querySelectorAll('[data-tabs]').forEach(function (root) {
    var list = root.querySelector('[role="tablist"]');
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
    if (!list || !tabs.length) return;
    list.hidden = false;
    root.classList.add('tabs-on');
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) tab.focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () {
        select(t);
        history.replaceState(null, '', '#' + t.getAttribute('aria-controls'));
      });
      t.addEventListener('keydown', function (e) {
        var j = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : null;
        if (j === null) return;
        e.preventDefault();
        select(tabs[(j + tabs.length) % tabs.length], true);
      });
    });
    // Deep links such as support.html#donors open that tab
    var fromHash = tabs.filter(function (t) { return '#' + t.getAttribute('aria-controls') === location.hash; })[0];
    select(fromHash || tabs[0]);
  });
})();
