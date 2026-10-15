/* Doble hélice de pirámides 3D que reacciona al scroll.
   Requiere three.js (r128). Si no hay WebGL, la página funciona igual sin el fondo. */
(function () {
  "use strict";
  var canvas = document.getElementById("bg3d");
  if (!canvas || typeof THREE === "undefined") return;

  var renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  } catch (e) { canvas.remove(); return; }
  renderer.setClearColor(0x000000, 0);

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 0, 16);

  scene.add(new THREE.AmbientLight(0xffffff, 0.75));
  var key = new THREE.DirectionalLight(0xffffff, 1.15); key.position.set(5, 8, 7); scene.add(key);
  var rim = new THREE.DirectionalLight(0x7fa0ff, 0.6); rim.position.set(-6, -3, -5); scene.add(rim);

  /* ---- parámetros de la hélice ---- */
  var STRANDS = 2, PER = 52, TURNS = 2.6, HEIGHT = 15;
  var group = new THREE.Group();
  scene.add(group);

  var geo = new THREE.ConeGeometry(0.5, 1, 4, 1);   // pirámide de base cuadrada
  geo.rotateY(Math.PI / 4);
  var edgeGeo = new THREE.EdgesGeometry(geo);
  var edgeMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 });

  var c1 = new THREE.Color(0x17c3b2), c2 = new THREE.Color(0x3556e8), c3 = new THREE.Color(0x9a74ff);
  function colorAt(t) {
    var c = new THREE.Color();
    if (t < 0.5) c.copy(c1).lerp(c2, t * 2); else c.copy(c2).lerp(c3, (t - 0.5) * 2);
    return c;
  }

  var items = [];
  for (var s = 0; s < STRANDS; s++) {
    for (var i = 0; i < PER; i++) {
      var t = i / (PER - 1);
      var mat = new THREE.MeshStandardMaterial({
        color: colorAt(t), metalness: 0.15, roughness: 0.28, flatShading: true,
        transparent: true, opacity: 0.9
      });
      var m = new THREE.Mesh(geo, mat);
      m.add(new THREE.LineSegments(edgeGeo, edgeMat));
      group.add(m);
      items.push({ mesh: m, s: s, i: i, t: t });
    }
  }

  var up = new THREE.Vector3(0, 1, 0);
  var tangent = new THREE.Vector3();
  var qAlign = new THREE.Quaternion();
  var qSpin = new THREE.Quaternion();

  function layout(p, time) {
    var R = 2.1 + 0.6 * Math.sin(p * Math.PI * 2);          // la hélice se abre y se cierra
    var twist = TURNS * Math.PI * 2;
    for (var k = 0; k < items.length; k++) {
      var it = items[k], t = it.t;
      var a = t * twist + it.s * Math.PI;
      var y = (t - 0.5) * HEIGHT;
      var r = R * (1 + 0.06 * Math.sin(t * 7 + p * 3));
      it.mesh.position.set(r * Math.cos(a), y, r * Math.sin(a));
      tangent.set(-r * Math.sin(a) * twist, HEIGHT, r * Math.cos(a) * twist).normalize();
      qAlign.setFromUnitVectors(up, tangent);
      qSpin.setFromAxisAngle(up, p * Math.PI * 3 + it.i * 0.35 + time * 0.2);
      it.mesh.quaternion.copy(qAlign).multiply(qSpin);
      var sc = 0.5 + 0.12 * Math.sin(t * Math.PI * 4 + p * 4 + it.s) + 0.22 * t;
      it.mesh.scale.setScalar(sc);
    }
  }

  /* ---- tamaño y posición según pantalla ---- */
  var wide = true;
  function resize() {
    var w = window.innerWidth, h = window.innerHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    wide = w / h > 1.15;
    var halfW = Math.tan((camera.fov * Math.PI) / 360) * camera.position.z * camera.aspect;
    group.position.x = wide ? halfW * 0.5 : 0;
    var sc = wide ? 1 : 1;
    group.scale.setScalar(sc);
    group.userData.baseScale = sc;
    if (reduced) draw(0.12);
  }

  /* ---- scroll con inercia ---- */
  var target = 0, current = 0, mx = 0, my = 0, tmx = 0, tmy = 0;
  function readScroll() {
    var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    target = Math.min(1, Math.max(0, window.scrollY / max));
  }
  window.addEventListener("scroll", readScroll, { passive: true });
  window.addEventListener("pointermove", function (e) {
    tmx = (e.clientX / window.innerWidth - 0.5) * 2;
    tmy = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });
  window.addEventListener("resize", resize);

  function draw(p, time) {
    layout(p, time || 0);
    group.position.y = (p - 0.5) * 9;
    group.rotation.y = p * Math.PI * 2 + (time || 0) * 0.03;
    group.rotation.x = -0.08 + my * 0.08;
    group.rotation.z = 0.06 + mx * 0.05;
    renderer.render(scene, camera);
  }

  var start = performance.now();
  function loop(now) {
    current += (target - current) * 0.05;
    mx += (tmx - mx) * 0.05; my += (tmy - my) * 0.05;
    draw(current, (now - start) / 1000);
    requestAnimationFrame(loop);
  }

  resize();
  readScroll();
  current = target;
  if (reduced) { draw(0.12); }
  else { requestAnimationFrame(loop); }
  canvas.classList.add("ready");
})();




