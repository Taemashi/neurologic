/* Selector de temas + fondos con efectos al hacer scroll.
   Tema principal: "aura" (Aura Frost, el que está en index.html + hélice 3D). */
(function () {
  "use strict";
  var root = document.documentElement;
  var DEFAULT = "aura", KEY = "neuro-tema";
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var G = "https://fonts.googleapis.com/css2?";

  var THEMES = [
    { id: "aura", name: "Aura Frost", tag: "Tema principal", sw: ["#E8EEFB", "#17C3B2", "#3556E8"], meta: "#E8EEFB" },
    { id: "chrome", name: "Chrome Y2K", tag: "Cromo y burbujas", sw: ["#DDE4EF", "#2F6BFF", "#0F1B3D"], meta: "#DDE4EF", sep: " • ",
      fonts: "family=Syncopate:wght@400;700&family=Exo+2:wght@400;600;700&family=Share+Tech+Mono" },
    { id: "arcade", name: "Arcade Pixel", tag: "Videojuego 8-bit", sw: ["#0B0B1E", "#FFE600", "#FF2E9A"], meta: "#0B0B1E", sep: " ■ ",
      fonts: "family=Silkscreen:wght@400;700&family=VT323" },
    { id: "riso", name: "Riso Print", tag: "Impresión a dos tintas", sw: ["#F3F2EE", "#1B2BD6", "#FF5A1F"], meta: "#F3F2EE", sep: " / ",
      fonts: "family=Bricolage+Grotesque:wght@400;600;800&family=Space+Mono:wght@400;700" },
    { id: "enterprise", name: "Enterprise", tag: "Corporativo sobrio", sw: ["#F3F5F9", "#0B5FFF", "#0F1B33"], meta: "#F3F5F9", sep: " · ",
      fonts: "family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500" },
    { id: "sunset", name: "Sunset Wave", tag: "Atardecer retrowave", sw: ["#2B0A4A", "#FF5F8F", "#FFC15A"], meta: "#2B0A4A", sep: " + ",
      fonts: "family=Righteous&family=Rubik:wght@400;500;600&family=Share+Tech+Mono" },
    { id: "academia", name: "Academia", tag: "Cuero, oro y serif", sw: ["#1B1410", "#C9A66B", "#6E1F2B"], meta: "#1B1410", sep: " — ",
      fonts: "family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Lora:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500" },
    { id: "clay", name: "Clay Candy", tag: "Plastilina 3D", sw: ["#FDE7F3", "#FF6FB5", "#6FD3FF"], meta: "#FDE7F3", sep: " • ",
      fonts: "family=Baloo+2:wght@600;800&family=Nunito:wght@400;600;800&family=DM+Mono:wght@400;500" },
    { id: "gaceta", name: "Gaceta", tag: "Portada de periódico", sw: ["#E9E9E4", "#111111", "#C8102E"], meta: "#E9E9E4", sep: " • ",
      fonts: "family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Libre+Franklin:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500" },
    { id: "material", name: "Material Tonal", tag: "Estilo app móvil", sw: ["#FEF7FF", "#6750A4", "#E8DEF8"], meta: "#FEF7FF", sep: " • ",
      fonts: "family=Outfit:wght@400;500;600&family=Roboto+Mono:wght@400;500" },
    { id: "hud", name: "HUD Cockpit", tag: "Panel de nave", sw: ["#05090D", "#00D4FF", "#FF9B1F"], meta: "#05090D", sep: " // ",
      fonts: "family=Oxanium:wght@500;700&family=Rajdhani:wght@500;600;700&family=Share+Tech+Mono" }
  ];
  var BY = {}; THEMES.forEach(function (t) { BY[t.id] = t; });
  var TICKS = ["Software con lógica", "Tiendas en línea", "Aplicaciones web", "Hecho a tu medida", "Neurologic"];

  /* ---------- utilidades ---------- */
  function div(cls, parent, html) { var e = document.createElement("div"); e.className = cls; if (html) e.innerHTML = html; if (parent) parent.appendChild(e); return e; }
  function mod(a, n) { return ((a % n) + n) % n; }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function pad(n, l) { n = String(n); while (n.length < l) n = "0" + n; return n; }
  var loaded = {};
  function loadFonts(t) {
    if (!t.fonts || loaded[t.id]) return; loaded[t.id] = true;
    var l = document.createElement("link"); l.rel = "stylesheet"; l.href = G + t.fonts + "&display=swap"; document.head.appendChild(l);
  }

  /* ---------- fondos por tema: cada uno devuelve update(S) ---------- */
  var B = {};

  B.chrome = function (bg) {
    var cfg = [[.08, .15, 150, .25, "#9CD8FF", "#2F6BFF"], [.84, .30, 110, .40, "#FFB3E6", "#C23CFF"], [.16, .66, 92, .55, "#9CD8FF", "#2F6BFF"],
      [.90, .78, 170, .30, "#C9F0FF", "#3F7BFF"], [.52, .92, 70, .70, "#FFB3E6", "#C23CFF"], [.64, .08, 60, .80, "#9CD8FF", "#2F6BFF"], [.34, .42, 46, .95, "#FFB3E6", "#C23CFF"]];
    var bubbles = cfg.map(function (c) { var e = div("ch-b", bg); e.style.setProperty("--c1", c[4]); e.style.setProperty("--c2", c[5]); return { e: e, c: c }; });
    var stars = [[.74, .55, 84, .35], [.22, .22, 52, .6], [.46, .72, 38, .85]].map(function (c) { return { e: div("ch-s", bg), c: c }; });
    return function (S) {
      var k = clamp(S.w / 1300, .55, 1), H = S.h;
      bubbles.forEach(function (b, i) {
        var size = b.c[2] * k, span = H + size * 2;
        b.e.style.width = b.e.style.height = size + "px";
        var y = mod(b.c[1] * H - S.y * b.c[3], span) - size, x = b.c[0] * S.w + Math.sin(S.t * .8 + i) * 14;
        b.e.style.transform = "translate3d(" + x + "px," + y + "px,0) scale(" + (1 + .06 * Math.sin(S.t + i)) + ")";
      });
      stars.forEach(function (s, i) {
        var size = s.c[2] * k, span = H + size * 2;
        s.e.style.width = s.e.style.height = size + "px";
        var y = mod(s.c[1] * H - S.y * s.c[3], span) - size;
        s.e.style.transform = "translate3d(" + (s.c[0] * S.w) + "px," + y + "px,0) rotate(" + (S.y * .22 + i * 40) + "deg) scale(" + (1 + .25 * Math.sin(S.y / 180 + i)) + ")";
      });
    };
  };

  B.arcade = function (bg, fg) {
    var ST = div("ar-st", bg);
    ST.style.backgroundImage = "radial-gradient(#fff 1.4px, transparent 2px), radial-gradient(#39FF88 1.2px, transparent 1.8px)";
    ST.style.backgroundSize = "70px 70px, 110px 110px"; ST.style.opacity = ".4";
    var A = ["00100000100", "00010001000", "00111111100", "01101110110", "11111111111", "10111111101", "10100000101", "00011011000"];
    var Sq = ["00011000", "00111100", "01111110", "11011011", "11111111", "00100100", "01011010", "10100101"];
    function sprite(map, color, px) {
      var w = map[0].length * px, h = map.length * px, r = "";
      for (var y = 0; y < map.length; y++) for (var x = 0; x < map[y].length; x++) if (map[y][x] === "1") r += '<rect x="' + x * px + '" y="' + y * px + '" width="' + px + '" height="' + px + '"/>';
      return '<svg width="' + w + '" height="' + h + '" shape-rendering="crispEdges" fill="' + color + '">' + r + "</svg>";
    }
    var px = clamp(Math.round(window.innerWidth / 300), 3, 5), cols = window.innerWidth < 700 ? 5 : 8, rows = 4, cellW = 14 * px + 18, cellH = 8 * px + 18;
    var form = div("ar-inv", bg), colors = ["#FF3D5A", "#FFD23F", "#39FF88", "#39FF88"];
    for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) {
      var useA = r % 2 === 0, map = useA ? A : Sq, wpx = map[0].length * px, hpx = map.length * px;
      var holder = document.createElement("div"); holder.innerHTML = sprite(map, colors[r], px);
      var svg = holder.firstChild; svg.style.left = (c * cellW + (cellW - 18 - wpx) / 2) + "px"; svg.style.top = (r * cellH + (cellH - 18 - hpx) / 2) + "px"; form.appendChild(svg);
    }
    var formW = cols * cellW;
    var ship = div("ar-ship", bg), buls = [div("ar-bul", bg), div("ar-bul", bg), div("ar-bul", bg)];
    div("ar-crt", fg); var hud = div("ar-hud", fg), last = "";
    return function (S) {
      var H = S.h, W = S.w;
      ST.style.backgroundPosition = "0 " + (-S.y * .12 % 70) + "px, 0 " + (-S.y * .25 % 110) + "px";
      var sway = Math.round((Math.sin(S.y / 240) * W * .16 + Math.sin(S.t * .5) * 10) / 12) * 12;
      var fx = (W - formW) / 2 + sway, fy = 108 + S.p * H * .2 + (Math.floor(S.t * 2) % 2) * 6;
      form.style.transform = "translate3d(" + fx + "px," + fy + "px,0)";
      var sx = W * .5 + Math.sin(S.y / 210) * W * .3 - 28, sy = H - 150;
      ship.style.transform = "translate3d(" + sx + "px," + sy + "px,0)";
      buls.forEach(function (b, i) {
        var ph = mod(S.t * 1.1 + i / 3, 1);
        b.style.opacity = ph < .96 ? 1 : 0;
        b.style.transform = "translate3d(" + (sx + 26) + "px," + (sy - ph * (H * .85)) + "px,0)";
      });
      var txt = "1UP  " + pad(Math.floor(S.y * 3.7), 6) + "\nHI   099999\nNIVEL " + pad(1 + Math.floor(S.p * 8), 2);
      if (txt !== last) { hud.textContent = txt; last = txt; }
    };
  };

  B.riso = function (bg, fg) {
    var ht = div("ri-ht", bg);
    function circ(col) { var e = div("ri-c", bg); e.style.background = col; return e; }
    var c1 = circ("#FF5A1F"), c2 = circ("#1B2BD6"), c3 = circ("#FFD400"); c2.style.opacity = ".82";
    var stamp = div("ri-stamp", fg, "HECHO<br>A MANO");
    return function (S) {
      var m = Math.min(S.w, S.h), a = m * .56, b = m * .5, c = m * .34, p = S.p, v = clamp(S.v, -40, 40);
      c1.style.width = c1.style.height = a + "px"; c2.style.width = c2.style.height = b + "px"; c3.style.width = c3.style.height = c + "px";
      var cx = S.w * .66, cy = S.h * .22;
      c1.style.transform = "translate3d(" + (cx + p * 130) + "px," + (cy - p * 100) + "px,0) scale(" + (1 + .22 * Math.sin(p * Math.PI)) + ")";
      c2.style.transform = "translate3d(" + (cx + a * .45 - p * 110 + v * 1.4) + "px," + (cy + a * .2 + p * 80) + "px,0)";
      c3.style.transform = "translate3d(" + (cx + a * .2 + p * 50) + "px," + (cy + a * .55 + v * 1.4) + "px,0)";
      ht.style.transform = "translate3d(0," + (-S.y * .15) + "px,0)";
      stamp.style.transform = "rotate(" + (-12 + S.y * .08) + "deg)";
    };
  };

  B.enterprise = function (bg, fg) {
    div("en-grid", bg);
    var N = 30, bars = div("en-bars", bg), hs = [], els = [];
    for (var i = 0; i < N; i++) { hs.push(.3 + .7 * Math.abs(Math.sin(i * 1.7 + 1))); var e = document.createElement("i"); bars.appendChild(e); els.push(e); }
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); svg.setAttribute("class", "en-line"); svg.setAttribute("viewBox", "0 0 100 100"); svg.setAttribute("preserveAspectRatio", "none");
    var pl = document.createElementNS("http://www.w3.org/2000/svg", "polyline"); pl.setAttribute("fill", "none"); pl.setAttribute("stroke", "#0B5FFF"); pl.setAttribute("stroke-width", "2"); pl.setAttribute("vector-effect", "non-scaling-stroke"); pl.setAttribute("opacity", ".7"); svg.appendChild(pl); bg.appendChild(svg);
    var pr = div("en-prog", fg), last = "";
    return function (S) {
      var pts = [];
      for (var i = 0; i < N; i++) {
        var s = clamp(hs[i] * (.1 + .9 * clamp(S.p * 1.1 - i / N * .1, 0, 1)) + .03 * Math.sin(S.t + i), .04, 1);
        els[i].style.transform = "scaleY(" + s + ")";
        pts.push((i / (N - 1) * 100).toFixed(1) + "," + (100 - s * 100).toFixed(1));
      }
      pl.setAttribute("points", pts.join(" "));
      var txt = "PROGRESO DE LECTURA " + Math.round(S.p * 100) + "%";
      if (txt !== last) { pr.textContent = txt; last = txt; }
    };
  };

  B.sunset = function (bg) {
    div("su-sky", bg); var night = div("su-night", bg), sun = div("su-sun", bg), ma = div("su-m a", bg), mb = div("su-m b", bg), fl = div("su-floor", bg), dark = div("su-dark", bg);
    return function (S) {
      var p = S.p, H = S.h;
      night.style.opacity = clamp(p * 1.3 - .1, 0, 1); dark.style.opacity = (.55 * p).toFixed(3);
      sun.style.transform = "translate3d(0," + (H * .26 + p * H * .42) + "px,0) scale(" + (1 - .22 * p) + ")";
      ma.style.transform = "translate3d(0," + (p * H * .05) + "px,0)"; mb.style.transform = "translate3d(" + (-S.y * .01) + "px," + (p * H * .1) + "px,0)";
      fl.style.backgroundPosition = "0 " + (S.y * .7 % 40) + "px, 0 0, 0 0";
    };
  };

  B.academia = function (bg, fg) {
    div("ac-vig", bg);
    var seal = div("ac-seal", bg, "<i></i>");
    var NS = "http://www.w3.org/2000/svg", svg = document.createElementNS(NS, "svg"); svg.setAttribute("class", "ac-frame");
    var r1 = document.createElementNS(NS, "rect"), r2 = document.createElementNS(NS, "rect");
    [r1, r2].forEach(function (r) { r.setAttribute("fill", "none"); r.setAttribute("stroke", "#C9A66B"); svg.appendChild(r); });
    r1.setAttribute("stroke-width", "2"); r2.setAttribute("stroke-width", "1"); r2.setAttribute("opacity", ".5");
    fg.appendChild(svg); div("ac-est", bg, "EST. MMXXVI");
    var L = 0;
    function size(S) {
      r1.setAttribute("x", 10); r1.setAttribute("y", 44); r1.setAttribute("width", S.w - 20); r1.setAttribute("height", S.h - 54);
      r2.setAttribute("x", 16); r2.setAttribute("y", 50); r2.setAttribute("width", S.w - 32); r2.setAttribute("height", S.h - 66);
      L = 2 * (S.w - 20 + S.h - 54); r1.setAttribute("stroke-dasharray", L);
    }
    var lw = 0, lh = 0;
    return function (S) {
      if (S.w !== lw || S.h !== lh) { lw = S.w; lh = S.h; size(S); }
      r1.setAttribute("stroke-dashoffset", L * (1 - clamp(.06 + S.p * .94, 0, 1)));
      seal.style.transform = "translate3d(0," + (-S.p * 70) + "px,0) rotate(" + (S.y * .12) + "deg) scale(" + (1 + .06 * Math.sin(S.y / 300)) + ")";
    };
  };

  B.clay = function (bg) {
    var cfg = [["50%", 150, .10, .18, .22, "#FF6FB5", 1], ["34%", 120, .84, .30, .38, "#6FD3FF", -1], ["tor", 124, .18, .64, .5, "#FFE66D", 1],
      ["50%", 80, .90, .78, .62, "#C9A7FF", -1], ["32%", 96, .55, .90, .30, "#9BF0C8", 1], ["50%", 60, .60, .06, .75, "#FF9AD0", -1]];
    var items = cfg.map(function (c) {
      var e = div("cl-s", bg);
      if (c[0] === "tor") { e.style.borderRadius = "50%"; e.style.background = "radial-gradient(circle, transparent 0 18%, " + c[5] + " 19%)"; }
      else { e.style.borderRadius = c[0]; e.style.background = c[5]; }
      return { e: e, c: c };
    });
    return function (S) {
      var k = clamp(S.w / 1300, .55, 1), H = S.h, sq = clamp(S.v * .012, -.35, .35);
      items.forEach(function (it, i) {
        var size = it.c[1] * k, span = H + size * 2;
        it.e.style.width = it.e.style.height = size + "px";
        var y = mod(it.c[3] * H - S.y * it.c[4], span) - size, x = it.c[2] * S.w + Math.sin(S.t * .6 + i) * 10;
        it.e.style.transform = "translate3d(" + x + "px," + y + "px,0) rotate(" + (S.y * .05 * it.c[6]) + "deg) scale(" + (1 - sq * .6) + "," + (1 + sq) + ")";
      });
    };
  };

  B.gaceta = function (bg) {
    var ht = div("ga-ht", bg), b1 = div("ga-burst", bg, "EXTRA"), b2 = div("ga-burst s", bg, "HOY");
    return function (S) {
      ht.style.transform = "translate3d(0," + (-S.y * .2) + "px,0)";
      b1.style.transform = "translate3d(0," + (-S.p * 40) + "px,0) rotate(" + (-10 + S.y * .22) + "deg) scale(" + (1 + .1 * Math.sin(S.y / 250)) + ")";
      b2.style.transform = "rotate(" + (8 - S.y * .18) + "deg) scale(" + (1 + .1 * Math.sin(S.y / 200 + 1)) + ")";
    };
  };

  B.material = function (bg) {
    var A = [[30, 70, 70, 30, 30, 30, 70, 70], [60, 40, 30, 70, 60, 30, 70, 40]], Bm = [[70, 30, 30, 70, 70, 60, 40, 30], [30, 70, 70, 30, 40, 70, 30, 60]];
    var cfg = [[.10, .20, 230, 200, .18, "#E8DEF8"], [.80, .35, 180, 170, .30, "#D0BCFF"], [.22, .72, 150, 150, .42, "#EFB8C8"], [.88, .80, 200, 190, .24, "#CCE8E7"], [.55, .06, 120, 110, .55, "#E8DEF8"]];
    var items = cfg.map(function (c, i) { var e = div("ma-b", bg); e.style.background = c[5]; return { e: e, c: c, a: A[i % 2], b: Bm[i % 2] }; });
    return function (S) {
      var k = clamp(S.w / 1300, .55, 1), H = S.h;
      items.forEach(function (it, i) {
        var w = it.c[2] * k, h = it.c[3] * k, span = H + h * 2, m = .5 + .5 * Math.sin(S.y / 260 + i * 1.7 + S.t * .4), r = [];
        for (var j = 0; j < 8; j++) r.push((it.a[j] + (it.b[j] - it.a[j]) * m).toFixed(1));
        it.e.style.width = w + "px"; it.e.style.height = h + "px";
        it.e.style.borderRadius = r[0] + "% " + r[1] + "% " + r[2] + "% " + r[3] + "% / " + r[4] + "% " + r[5] + "% " + r[6] + "% " + r[7] + "%";
        var y = mod(it.c[1] * H - S.y * it.c[4], span) - h, x = it.c[0] * S.w;
        it.e.style.transform = "translate3d(" + x + "px," + y + "px,0) rotate(" + (S.y * .04 * (i % 2 ? -1 : 1)) + "deg)";
      });
    };
  };

  B.hud = function (bg, fg) {
    var grid = div("hu-grid", bg); div("hu-vig", bg); div("hu-rd", bg); var sw = div("hu-sw", bg), scan = div("hu-scan", bg);
    var blipsCfg = [[-10, -6, 0], [8, 12, 1.4], [-16, 10, 2.8], [14, -14, 4.1]], blips = blipsCfg.map(function (c) { return { e: div("hu-bl", bg), c: c }; });
    ["tl", "tr", "bl", "br"].forEach(function (c) { div("hu-c " + c, fg); });
    var tele = div("hu-tele", fg), last = "";
    return function (S) {
      var vm = Math.min(S.w, S.h) / 100, cx = S.w + 10 * vm - 36 * vm, cy = S.h * .16 + 36 * vm;
      sw.style.transform = "rotate(" + (S.y * .35 + S.t * 40) + "deg)";
      grid.style.backgroundPosition = "0 " + (-S.y * .3 % 52) + "px, 0 " + (-S.y * .3 % 52) + "px";
      scan.style.transform = "translate3d(0," + mod(S.y * .6 + S.t * 60, S.h) + "px,0)";
      blips.forEach(function (b) { b.e.style.left = (cx + b.c[0] * vm) + "px"; b.e.style.top = (cy + b.c[1] * vm) + "px"; b.e.style.opacity = (.25 + .75 * Math.abs(Math.sin(S.t * 1.4 + b.c[2]))).toFixed(2); });
      var txt = "SYS ONLINE\nSCAN " + pad(Math.round(S.p * 100), 3) + "%\nENLACE NEURAL OK";
      if (txt !== last) { tele.textContent = txt; last = txt; }
    };
  };

  /* ---------- motor: scroll suave + bucle ---------- */
  var bgx, fgx, tick, updateFn = null;
  var S = { y: 0, p: 0, v: 0, t: 0, w: window.innerWidth, h: window.innerHeight };
  var tgtY = 0, running = false;
  function docMax() { return Math.max(1, root.scrollHeight - window.innerHeight); }
  function readTarget() { tgtY = window.scrollY || 0; }
  function step(now) {
    S.w = window.innerWidth; S.h = window.innerHeight;
    var prev = S.y; S.y += (tgtY - S.y) * .14; if (Math.abs(tgtY - S.y) < .05) S.y = tgtY;
    S.v += ((S.y - prev) - S.v) * .25; S.p = clamp(S.y / docMax(), 0, 1); S.t = now / 1000;
    if (updateFn) updateFn(S);
    if (running) requestAnimationFrame(step);
  }
  function start() { if (running || reduced) return; running = true; requestAnimationFrame(step); }
  function stop() { running = false; }
  window.addEventListener("scroll", readTarget, { passive: true });

  function mount(id) {
    bgx.innerHTML = ""; fgx.innerHTML = ""; updateFn = null; stop();
    if (id === DEFAULT || !B[id]) return;
    updateFn = B[id](bgx, fgx);
    readTarget(); S.y = tgtY;
    if (reduced) { S.p = .25; S.y = S.h * .5; S.t = 0; S.v = 0; S.w = window.innerWidth; S.h = window.innerHeight; updateFn(S); }
    else start();
  }
  window.addEventListener("resize", function () { if (reduced && updateFn) { S.w = window.innerWidth; S.h = window.innerHeight; updateFn(S); } });

  function buildTick(t) {
    if (!t.sep) { tick.innerHTML = ""; return; }
    var line = TICKS.join(t.sep) + t.sep, txt = ""; for (var i = 0; i < 4; i++) txt += line;
    tick.innerHTML = '<div class="track"><span></span><span></span></div>';
    var sp = tick.querySelectorAll("span"); sp[0].textContent = txt; sp[1].textContent = txt;
  }

  /* ---------- selector ---------- */
  var current = DEFAULT, box, pop, tbtn;
  function setTheme(id, save) {
    if (!BY[id]) id = DEFAULT;
    var t = BY[id]; current = id; loadFonts(t);
    if (id === DEFAULT) root.removeAttribute("data-theme"); else root.setAttribute("data-theme", id);
    var m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute("content", t.meta);
    buildTick(t); mount(id);
    if (box) [].forEach.call(box.querySelectorAll(".opt"), function (o) { o.setAttribute("aria-checked", o.dataset.id === id ? "true" : "false"); });
    if (save) { try { localStorage.setItem(KEY, id); } catch (e) {} }
  }

  function buildUI() {
    box = document.createElement("div"); box.id = "tm";
    box.innerHTML = '<div class="tpop" id="tmPop" role="radiogroup" aria-label="Estilo visual de la página"><div class="thead">Elige un estilo</div></div>' +
      '<button class="tbtn" type="button" aria-expanded="false" aria-controls="tmPop" aria-label="Cambiar estilo de la página"><span class="sq" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span class="lbl">Estilo</span></button>';
    document.body.appendChild(box);
    pop = box.querySelector(".tpop"); tbtn = box.querySelector(".tbtn");
    THEMES.forEach(function (t) {
      var b = document.createElement("button"); b.type = "button"; b.className = "opt"; b.dataset.id = t.id; b.setAttribute("role", "radio"); b.setAttribute("aria-checked", "false");
      b.innerHTML = '<span class="sw3">' + t.sw.map(function (c) { return '<i style="background:' + c + '"></i>'; }).join("") + '</span><span><b>' + t.name + '</b><small>' + t.tag + '</small></span>' + (t.id === DEFAULT ? "<em>Principal</em>" : "");
      b.addEventListener("click", function () { setTheme(t.id, true); });
      b.addEventListener("mouseenter", function () { loadFonts(t); });
      pop.appendChild(b);
    });
    function open(v) {
      box.classList.toggle("open", v); tbtn.setAttribute("aria-expanded", v);
      if (v) { var sel = pop.querySelector('[aria-checked="true"]') || pop.querySelector(".opt"); setTimeout(function () { sel && sel.focus(); }, 30); }
    }
    tbtn.addEventListener("click", function () { open(!box.classList.contains("open")); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && box.classList.contains("open")) { open(false); tbtn.focus(); }
      if (box.classList.contains("open") && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
        var o = [].slice.call(pop.querySelectorAll(".opt")), i = o.indexOf(document.activeElement);
        o[(i + (e.key === "ArrowDown" ? 1 : -1) + o.length) % o.length].focus(); e.preventDefault();
      }
    });
    document.addEventListener("click", function (e) { if (box.classList.contains("open") && !box.contains(e.target)) open(false); });
  }

  function init() {
    bgx = document.getElementById("bgx"); fgx = document.getElementById("fgx"); tick = document.getElementById("tick");
    if (!bgx || !fgx || !tick) return;
    buildUI();
    var q = null; try { q = new URLSearchParams(location.search).get("tema"); } catch (e) {}
    var saved = null; try { saved = localStorage.getItem(KEY); } catch (e) {}
    var first = (q && BY[q]) ? q : (saved && BY[saved]) ? saved : DEFAULT;
    setTheme(first, !!(q && BY[q]));
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();



