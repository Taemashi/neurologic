/* Botón flotante de WhatsApp con dos números (Colombia y Venezuela).
   Mensaje inicial: define window.WA_MSG antes de cargar este archivo. */
(function () {
  "use strict";
  var NUMS = [
    { pais: "Colombia", texto: "+57 322 926 9521", num: "573229269521" },
    { pais: "Venezuela", texto: "+58 416 776 0728", num: "584167760728" }
  ];
  var msg = window.WA_MSG || "Hola Neurologic, quiero cotizar una página web.";
  var link = function (n) { return "https://wa.me/" + n.num + "?text=" + encodeURIComponent(msg); };

  var css = "\
#wa{position:fixed;right:20px;bottom:20px;z-index:50;font-family:'Plus Jakarta Sans',system-ui,sans-serif}\
#wa .fab{width:62px;height:62px;border-radius:50%;border:0;cursor:pointer;background:#25D366;display:grid;place-items:center;box-shadow:0 12px 30px rgba(11,18,48,.28),inset 0 1px 0 rgba(255,255,255,.4);transition:transform .2s}\
#wa .fab:hover{transform:scale(1.06)}\
#wa .fab svg{width:32px;height:32px;fill:#fff}\
#wa .fab::after{content:'';position:absolute;inset:0;border-radius:50%;border:2px solid #25D366;animation:wapulse 2.4s ease-out infinite;pointer-events:none}\
@keyframes wapulse{0%{transform:scale(1);opacity:.7}100%{transform:scale(1.6);opacity:0}}\
#wa .pop{position:absolute;right:0;bottom:76px;width:290px;padding:16px;border-radius:22px;background:linear-gradient(145deg,rgba(255,255,255,.95),rgba(255,255,255,.8));border:1px solid #fff;box-shadow:0 24px 60px rgba(40,60,130,.28);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);opacity:0;transform:translateY(10px) scale(.97);pointer-events:none;transition:opacity .2s,transform .2s;color:#0B1230}\
#wa.open .pop{opacity:1;transform:none;pointer-events:auto}\
#wa .pop h4{font-size:1rem;font-weight:800;letter-spacing:-.02em;margin:2px 4px 4px}\
#wa .pop p{font-size:.85rem;color:#4C5A82;margin:0 4px 12px;line-height:1.4}\
#wa .opt{display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:16px;text-decoration:none;color:#0B1230;background:rgba(255,255,255,.9);border:1px solid rgba(11,18,48,.08);margin-top:8px;transition:transform .2s,border-color .2s}\
#wa .opt:hover{transform:translateY(-2px);border-color:#25D366}\
#wa .opt i{flex:none;width:34px;height:34px;border-radius:50%;background:#25D366;display:grid;place-items:center}\
#wa .opt i svg{width:18px;height:18px;fill:#fff}\
#wa .opt b{display:block;font-size:.92rem;font-weight:800}\
#wa .opt span{font:500 .8rem 'DM Mono',ui-monospace,monospace;color:#4C5A82}\
#wa a:focus-visible,#wa button:focus-visible{outline:3px solid #3556E8;outline-offset:3px}\
@media(prefers-reduced-motion:reduce){#wa .fab::after{animation:none;display:none}#wa .pop,#wa .fab,#wa .opt{transition:none}}\
@media(max-width:480px){#wa{right:14px;bottom:14px}#wa .pop{width:min(290px,calc(100vw - 28px))}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var ICON = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.04 3C8.84 3 3 8.83 3 16.02c0 2.3.6 4.55 1.75 6.53L3 29l6.6-1.73a13.03 13.03 0 0 0 6.44 1.64h.01C23.2 28.91 29 23.08 29 15.9 29 8.82 23.22 3 16.04 3zm0 23.7h-.01a10.8 10.8 0 0 1-5.5-1.5l-.4-.23-3.92 1.03 1.05-3.82-.26-.4a10.7 10.7 0 0 1-1.65-5.74c0-5.94 4.85-10.77 10.8-10.77 2.88 0 5.59 1.12 7.62 3.15a10.65 10.65 0 0 1 3.16 7.62c0 5.94-4.85 10.76-10.89 10.76zm5.92-8.07c-.32-.16-1.92-.95-2.22-1.05-.3-.11-.52-.16-.73.16-.22.32-.84 1.05-1.03 1.27-.19.21-.38.24-.7.08-.32-.16-1.37-.5-2.6-1.6-.96-.86-1.6-1.91-1.8-2.23-.19-.32-.02-.5.14-.66.15-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.68 0 1.58 1.15 3.1 1.31 3.32.16.21 2.26 3.45 5.47 4.84.76.33 1.36.52 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.92-.78 2.19-1.54.27-.75.27-1.4.19-1.54-.08-.13-.3-.21-.62-.37z"/></svg>';

  var box = document.createElement("div");
  box.id = "wa";
  box.innerHTML =
    '<div class="pop" id="waPop" role="dialog" aria-label="Contactar por WhatsApp">' +
    '<h4>Escríbenos por WhatsApp</h4><p>Elige el número que te quede mejor. Respondemos lo antes posible.</p>' +
    NUMS.map(function (n) {
      return '<a class="opt" href="' + link(n) + '" target="_blank" rel="noopener"><i>' + ICON + '</i><div><b>' + n.pais + '</b><span>' + n.texto + '</span></div></a>';
    }).join("") + '</div>' +
    '<button class="fab" type="button" aria-label="Contactar por WhatsApp" aria-expanded="false" aria-controls="waPop">' + ICON + '</button>';
  document.body.appendChild(box);

  var fab = box.querySelector(".fab");
  function set(open) { box.classList.toggle("open", open); fab.setAttribute("aria-expanded", open); }
  fab.addEventListener("click", function () { set(!box.classList.contains("open")); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") set(false); });
  document.addEventListener("click", function (e) { if (!box.contains(e.target)) set(false); });
})();
