// Initialise WOW.js so every .wow element animates once
  var wow = new WOW({
    // other options you may need…
    // boxClass:     'wow',
    // animateClass: 'animated',
    // offset:       0,
    // mobile:       true,
    // live:         true,
    resetAnimation: false   // ← prevents re‑animation
  });
  wow.init();