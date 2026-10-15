/* ============================================================
   PRECIOS Y CONTENIDO DE LOS 3 PAQUETES. Edita aquí y se actualizan
   las tres páginas. Moneda: COP. Los USD son aproximados.
   ============================================================ */
const PACKAGES = {
  esencial: {
    n: 1, name: "Esencial", file: "esencial.html",
    title: "Una página que presenta tu negocio y te trae clientes.",
    lead: "Una landing clara y rápida: quién eres, qué ofreces y cómo contactarte, lista en una semana.",
    min: 700000, max: 1300000, usdMin: 175, usdMax: 325, from: false,
    chips: ["1 página", "5 a 7 días", "Soporte 15 días"],
    forWho: "Emprendedores, profesionales independientes y negocios pequeños que aún no tienen página, o que solo tienen redes sociales.",
    result: "Un sitio propio que se ve profesional en el celular, que se encuentra en Google por tu nombre y que lleva a la gente directo a tu WhatsApp.",
    includes: [
      ["Diseño a tu medida", "Con tu logo, tus colores y tu estilo. No usamos plantillas genéricas."],
      ["Adaptada a celular, tablet y computador", "Se ve y funciona bien en cualquier pantalla."],
      ["WhatsApp y formulario de contacto", "Botón flotante de WhatsApp y un formulario para recibir mensajes."],
      ["SEO básico", "Título, descripción, velocidad de carga e indexación en Google."],
      ["Publicación con candado de seguridad", "Tu página en línea con HTTPS, lista para compartir."],
      ["2 rondas de cambios", "Ajustamos textos, colores e imágenes antes de publicar."],
      ["Guía de uso de 15 minutos", "Te explicamos cómo pedir cambios y cómo funciona todo."],
      ["Soporte de 15 días", "Corregimos cualquier detalle que aparezca después de publicar."]
    ],
    screens: [
      ["Sección 1", "Portada", "Tu propuesta en una frase, con un botón de acción.", "hero"],
      ["Sección 2", "Servicios o beneficios", "Lo que ofreces, en tarjetas fáciles de leer.", "c3"],
      ["Sección 3", "Sobre ti", "Tu historia o equipo, para generar confianza.", "text"],
      ["Sección 4", "Testimonios y ubicación", "Opiniones de clientes y dónde encontrarte.", "c2"],
      ["Sección 5", "Contacto", "Formulario y WhatsApp.", "form"]
    ],
    notIncluded: ["Redacción de textos", "Fotografías o producción de video", "Diseño de logo o identidad", "Más de una página", "Dominio y correo corporativo", "Mantenimiento mensual"],
    steps: [
      ["Brief y propuesta", "Hablamos de tu negocio, definimos secciones y firmamos el alcance. Pagas el 50%.", "Día 1"],
      ["Diseño", "Te mostramos cómo se verá tu página antes de programarla.", "Días 2 a 3"],
      ["Desarrollo", "La construimos y la probamos en celular y computador.", "Días 3 a 5"],
      ["Revisión", "Dos rondas de cambios con tus comentarios.", "Días 5 a 6"],
      ["Publicación", "La ponemos en línea. Pagas el 50% restante y recibes la guía de uso.", "Día 7"]
    ],
    examples: [],
    faq: [
      ["¿Qué necesito enviarte?", "Tu logo, los textos que quieras mostrar (o te ayudamos a escribirlos por un costo adicional), fotos y tus datos de contacto."],
      ["¿Quién paga el dominio?", "El dominio (por ejemplo tunegocio.com) se paga aparte, a precio de costo, y queda a tu nombre. Si prefieres, la página puede salir en una dirección gratuita."],
      ["¿Puedo pedir cambios después?", "Sí. Durante los primeros 15 días están incluidos los ajustes. Después se cotizan, o puedes contratar el mantenimiento mensual."],
      ["¿Puedo ampliarla más adelante?", "Sí. Puedes subir al paquete Profesional descontando lo que ya pagaste por la landing."]
    ]
  },
  profesional: {
    n: 2, name: "Profesional", file: "profesional.html",
    title: "Un sitio completo para tu empresa, con catálogo y presencia fuerte.",
    lead: "Varias páginas, catálogo de productos o servicios y todo lo necesario para que te encuentren y te compren.",
    min: 2000000, max: 3800000, usdMin: 500, usdMax: 950, from: false,
    chips: ["5 a 8 páginas", "2 a 3 semanas", "Soporte 30 días"],
    forWho: "Empresas y marcas que ya venden y necesitan mostrar su catálogo, sus servicios y su credibilidad en un solo lugar.",
    result: "Un sitio corporativo propio, con tu dominio, que se posiciona en Google y recibe pedidos por WhatsApp sin que tengas que explicar todo cada vez.",
    includes: [
      ["5 a 8 páginas", "Inicio, servicios o catálogo, nosotros, contacto y las que tu negocio necesite."],
      ["Catálogo con fichas", "Cada producto o servicio con foto, descripción y botón para pedir por WhatsApp."],
      ["Dominio propio y correo", "Configuramos tu dominio y tus cuentas de correo (el costo del dominio se paga aparte)."],
      ["Analítica y Search Console", "Sabrás cuánta gente entra, de dónde viene y qué mira."],
      ["SEO por página", "Títulos, descripciones y estructura pensados para Google."],
      ["Galería o blog", "Un espacio para mostrar trabajos o publicar novedades."],
      ["2 rondas de cambios por etapa", "Revisas el diseño y luego el sitio terminado."],
      ["Capacitación de 1 hora y soporte de 30 días", "Te enseñamos a manejarlo y te acompañamos el primer mes."]
    ],
    screens: [
      ["Página 1", "Inicio", "Propuesta de valor, servicios destacados y llamada a la acción.", "hero"],
      ["Página 2", "Catálogo", "Todos tus productos o servicios, con filtros.", "grid4"],
      ["Página 3", "Ficha de producto", "Foto, detalle y botón para pedir.", "product"],
      ["Página 4", "Nosotros", "Quiénes son, valores y equipo.", "text"],
      ["Página 5", "Contacto", "Formulario, mapa y WhatsApp.", "form"]
    ],
    notIncluded: ["Pagos en línea y carrito", "Panel para editar el catálogo tú mismo", "Redacción de textos y fotografía", "Diseño de logo o identidad", "Idiomas adicionales", "Mantenimiento mensual"],
    steps: [
      ["Brief y propuesta", "Definimos páginas, catálogo y objetivos. Firmamos alcance y pagas el 50%.", "Días 1 a 2"],
      ["Estructura y diseño", "Mapa del sitio y diseño de las páginas clave para tu aprobación.", "Días 3 a 6"],
      ["Desarrollo", "Programación, carga del catálogo, SEO y analítica.", "Días 7 a 14"],
      ["Revisión", "Dos rondas de cambios sobre el sitio ya funcionando.", "Días 14 a 18"],
      ["Publicación y capacitación", "Salimos en línea, pagas el 50% restante y te capacitamos.", "Días 18 a 21"]
    ],
    examples: [],
    faq: [
      ["¿Puedo editar el catálogo yo mismo?", "En este paquete los cambios al catálogo los hacemos nosotros (se incluyen durante el soporte). Si quieres administrarlo tú, el paquete Tienda incluye un panel."],
      ["¿Cuántos productos caben?", "Hasta 30 fichas están incluidas. Más productos se cotizan según la cantidad."],
      ["¿Se puede pagar en línea?", "No en este paquete: los clientes piden por WhatsApp. Para pagos con tarjeta o PSE necesitas el paquete Tienda."],
      ["¿Y si ya tengo dominio?", "Perfecto. Lo conectamos al sitio sin costo adicional."]
    ]
  },
  tienda: {
    n: 3, name: "Tienda o a medida", file: "tienda.html",
    title: "Tu tienda en línea o una aplicación hecha para tu negocio.",
    lead: "Carrito, pagos, panel de administración y funciones propias. Es el tipo de proyecto de Dermix, Loop y reActiva.",
    min: 5000000, max: null, usdMin: 1250, usdMax: null, from: true,
    chips: ["4 a 8 semanas", "Cotización a medida", "Soporte 60 días"],
    forWho: "Marcas que quieren vender en línea las 24 horas, o equipos que necesitan una herramienta digital que no existe lista para usar.",
    result: "Una tienda o plataforma propia que cobra, organiza pedidos y crece con tu negocio, sin depender de comisiones de terceros.",
    includes: [
      ["Catálogo con filtros y búsqueda", "Los clientes encuentran rápido lo que buscan."],
      ["Carrito y pago en línea", "Con la pasarela que mejor sirva a tu país (tarjeta, PSE, billeteras)."],
      ["Panel de administración", "Tú agregas productos, precios y revisas pedidos sin pedir ayuda."],
      ["Cuentas de cliente y favoritos", "Los compradores guardan datos y productos para volver más rápido."],
      ["Correos de confirmación y avisos", "Cliente y negocio reciben notificación de cada pedido."],
      ["Funciones a medida", "Personalizadores, calculadoras, agendamiento o lo que tu negocio necesite (se cotiza)."],
      ["Páginas legales y de políticas", "Términos, privacidad, envíos y cambios, como en Loop Uniformes."],
      ["Capacitación de 2 horas y soporte de 60 días", "Aprendes a operar todo y te acompañamos el arranque."]
    ],
    screens: [
      ["Pantalla 1", "Catálogo", "Productos con filtros, búsqueda y ordenamiento.", "grid4"],
      ["Pantalla 2", "Producto", "Galería, variantes, precio y botón de compra.", "product"],
      ["Pantalla 3", "Carrito", "Resumen, cantidades y total.", "cart"],
      ["Pantalla 4", "Pago", "Datos de envío y pasarela de pago.", "form"],
      ["Pantalla 5", "Panel de administración", "Pedidos, productos e inventario.", "table"]
    ],
    notIncluded: ["Redacción de textos y fotografía de producto", "Diseño de logo o identidad", "Comisiones de la pasarela de pago", "Costos de plataforma (Shopify, Firebase u otros)", "Envío y logística", "Mantenimiento mensual"],
    steps: [
      ["Descubrimiento y cotización", "Reunión larga para definir alcance, funciones y plataforma. Pagas el 50% para empezar.", "Semana 1"],
      ["Diseño y prototipo", "Diseño completo de las pantallas y del flujo de compra.", "Semanas 1 a 2"],
      ["Desarrollo", "Programación de tienda, pagos, panel y funciones a medida, con avances semanales.", "Semanas 2 a 6"],
      ["Pruebas y ajustes", "Pedidos de prueba, correcciones y dos rondas de cambios.", "Semanas 6 a 7"],
      ["Lanzamiento", "Publicación, pagas el 50% restante y te capacitamos.", "Semana 8"]
    ],
    examples: [
      ["Dermix", "Tienda de skincare con carrito, favoritos y cuentas de cliente.", "https://dermix-tienda.web.app/", "../assets/dermix.jpg"],
      ["Loop Uniformes", "Tienda con personalizador 3D de uniformes y envíos nacionales.", "https://loop-uniformes.pages.dev/", "../assets/loop.jpg"],
      ["reActiva", "Plataforma clínica con planes, descargas y varias disciplinas.", "https://reactivagroup.org/", "../assets/reactiva.jpg"]
    ],
    faq: [
      ["¿Por qué el precio es \"desde\"?", "Porque una tienda sencilla y una plataforma con funciones propias no cuestan lo mismo. Después de la reunión inicial recibes un precio cerrado por escrito."],
      ["¿Qué plataforma usan?", "Depende del proyecto: Shopify cuando conviene una tienda administrada, o desarrollo propio con Firebase cuando necesitas funciones a medida."],
      ["¿Quién es dueño del código?", "Tú. Al terminar y pagar el total, el proyecto queda a tu nombre."],
      ["¿Puedo empezar con Profesional y pasar a Tienda?", "Sí. Lo ya construido se aprovecha y se descuenta del proyecto."]
    ]
  }
};

const COMMON_TERMS = [
  ["Pago", "50% al empezar y 50% al entregar."],
  ["Cambios", "Las rondas indicadas están incluidas; los cambios extra se cotizan."],
  ["Propiedad", "Al pagar el total, el proyecto es tuyo."],
  ["Dominio y hosting", "Se pagan aparte, a precio de costo y a tu nombre."],
  ["Mantenimiento", "Opcional: entre 80.000 y 250.000 COP al mes, con cambios pequeños, respaldos y soporte."]
];

const ORDER = ["esencial", "profesional", "tienda"];
const fmt = n => n.toLocaleString("es-CO");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const CHECK = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
const nav = '<div class="nav"><i></i><span class="bar"></span><span class="bar"></span><span class="bar"></span></div>';

function wf(type) {
  const inner = {
    hero: `${nav}<div class="hero-b"><span class="bar"></span><span class="bar s"></span><span class="pill"></span></div>`,
    c3: `${nav}<div class="row c3"><div class="tile"></div><div class="tile"></div><div class="tile"></div></div><span class="bar"></span>`,
    c2: `${nav}<div class="row c2"><div class="tile l"><span class="bar"></span><span class="bar"></span></div><div class="tile l"><span class="bar"></span><span class="bar"></span></div></div>`,
    text: `${nav}<div class="row c2"><div class="tile"></div><div class="tile l"><span class="bar"></span><span class="bar"></span><span class="bar"></span></div></div>`,
    form: `${nav}<span class="field"></span><span class="field"></span><span class="field"></span><span class="btnb"></span>`,
    grid4: `${nav}<div class="row c2"><div class="tile"></div><div class="tile"></div><div class="tile"></div><div class="tile"></div></div>`,
    product: `${nav}<div class="row c2"><div class="tile"></div><div class="tile l"><span class="bar"></span><span class="bar"></span><span class="btnb"></span></div></div>`,
    cart: `${nav}<div class="line"><span class="sq"></span><span class="bar"></span></div><div class="line"><span class="sq"></span><span class="bar"></span></div><div class="line"><span class="sq"></span><span class="bar"></span></div><span class="total"></span>`,
    table: `${nav}<span class="bar"></span><div class="line"><span class="sq"></span><span class="bar"></span></div><div class="line"><span class="sq"></span><span class="bar"></span></div><div class="line"><span class="sq"></span><span class="bar"></span></div>`
  }[type] || nav;
  return `<div class="wf" aria-hidden="true">${inner}</div>`;
}

function priceText(p) {
  return p.max ? `$${fmt(p.min)} a $${fmt(p.max)}` : `Desde $${fmt(p.min)}`;
}
function usdPrice(p) {
  return p.usdMax ? `US$${fmt(p.usdMin)} a US$${fmt(p.usdMax)}` : `Desde US$${fmt(p.usdMin)}`;
}

function render(id) {
  const p = PACKAGES[id];
  document.title = `Paquete ${p.name} · Neurologic`;
  const tabs = ORDER.map(k => `<a href="${PACKAGES[k].file}" class="${k === id ? "on" : ""}" ${k === id ? 'aria-current="page"' : ""}>${PACKAGES[k].n}. ${k === "tienda" ? "Tienda" : PACKAGES[k].name}</a>`).join("");

  const compareRows = [
    ["Precio en pesos (COP)", ...ORDER.map(k => priceText(PACKAGES[k]))],
    ["Precio en dólares (USD, aprox.)", ...ORDER.map(k => usdPrice(PACKAGES[k]))],
    ["Páginas", "1", "5 a 8", "Las que necesite"],
    ["Pedidos por WhatsApp", "✓", "✓", "✓"],
    ["Catálogo de productos", "—", "✓", "✓"],
    ["Carrito y pagos en línea", "—", "—", "✓"],
    ["Panel de administración", "—", "—", "✓"],
    ["Funciones a medida", "—", "—", "✓"],
    ["Tiempo de entrega", "5 a 7 días", "2 a 3 semanas", "4 a 8 semanas"],
    ["Soporte incluido", "15 días", "30 días", "60 días"]
  ];
  const cmp = `<table><thead><tr><th></th>${ORDER.map(k => `<th class="${k === id ? "me" : ""}">${PACKAGES[k].name}</th>`).join("")}</tr></thead><tbody>${compareRows.map(r => `<tr><td>${r[0]}</td>${r.slice(1).map((c, i) => `<td class="${ORDER[i] === id ? "me" : ""} ${c === "✓" ? "yes" : c === "—" ? "no" : ""}">${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;

  const examples = p.examples.length ? `
  <section class="block"><h2>Proyectos de este tipo</h2><p class="sub">Ejemplos reales que construimos y siguen publicados.</p>
  <div class="examples">${p.examples.map(e => `<article class="ex glass"><img src="${esc(e[3])}" alt="Captura de ${esc(e[0])}" loading="lazy"><b>${esc(e[0])}</b><p>${esc(e[1])}</p><a class="btn s" href="${esc(e[2])}" target="_blank" rel="noopener">Ver sitio</a></article>`).join("")}</div></section>` : "";

  document.getElementById("app").innerHTML = `
  <header class="top"><a href="../" aria-label="Neurologic, portafolio"><img class="logo" src="../assets/logo-black.png" alt="Neurologic"></a>
    <nav class="tabs" aria-label="Paquetes">${tabs}<a href="../">Portafolio</a></nav></header>

  <section class="hero glass"><div class="mark" aria-hidden="true"></div>
    <div class="eb">Paquete ${p.n} de 3</div>
    <h1>${esc(p.title)}</h1>
    <p class="lead">${esc(p.lead)}</p>
    <div class="price">
      <div class="pbox"><span class="big">${priceText(p)}</span><span class="lab">Pesos colombianos (COP)</span></div>
      <div class="pbox"><span class="big usd">${usdPrice(p)}</span><span class="lab">Dólares estadounidenses (USD), aprox.</span></div>
    </div>
    <div class="chips">${p.chips.map(c => `<span class="chip">${esc(c)}</span>`).join("")}</div>
    <div class="cta"><a class="btn p" href="../#contacto">Pedir cotización</a><a class="btn s" href="#incluye">Ver qué incluye</a></div>
    <p class="note">Precios de referencia. La propuesta final se entrega por escrito después de conocer tu proyecto.</p>
  </section>

  <section class="block"><div class="two">
    <div class="panel glass"><h3>Para quién es</h3><p>${esc(p.forWho)}</p></div>
    <div class="panel glass"><h3>Qué obtienes</h3><p>${esc(p.result)}</p></div>
  </div></section>

  <section class="block" id="incluye"><h2>Qué incluye</h2><p class="sub">Todo esto está dentro del precio.</p>
    <div class="checks">${p.includes.map(i => `<div class="check glass"><i>${CHECK}</i><div><b>${esc(i[0])}</b><span>${esc(i[1])}</span></div></div>`).join("")}</div></section>

  <section class="block"><h2>Cómo se organiza</h2><p class="sub">Un esquema de lo que recibirás. El diseño final se hace a tu medida.</p>
    <div class="screens">${p.screens.map(s => `<div class="screen glass">${wf(s[3])}<small>${esc(s[0])}</small><b>${esc(s[1])}</b><p>${esc(s[2])}</p></div>`).join("")}</div></section>

  <section class="block"><h2>Qué no incluye</h2>
    <div class="notin glass"><p class="sub" style="margin:0">Se puede agregar, pero se cotiza aparte.</p><ul>${p.notIncluded.map(n => `<li>${esc(n)}</li>`).join("")}</ul></div></section>

  <section class="block"><h2>Cómo trabajamos</h2><p class="sub">Cinco pasos, con fechas claras desde el inicio.</p>
    <div class="steps">${p.steps.map(s => `<div class="step glass"><div><b>${esc(s[0])}</b><span>${esc(s[1])}</span></div><em>${esc(s[2])}</em></div>`).join("")}</div></section>
  ${examples}

  <section class="block"><h2>Condiciones</h2>
    <div class="checks">${COMMON_TERMS.map(t => `<div class="check glass"><i>${CHECK}</i><div><b>${esc(t[0])}</b><span>${esc(t[1])}</span></div></div>`).join("")}</div></section>

  <section class="block"><h2>Comparar paquetes</h2><p class="sub">El tuyo aparece resaltado.</p><div class="tablewrap glass">${cmp}</div></section>

  <section class="block"><h2>Preguntas frecuentes</h2>
    <div class="faq">${p.faq.map(f => `<details class="glass"><summary>${esc(f[0])}</summary><p>${esc(f[1])}</p></details>`).join("")}</div></section>

  <section class="cta-band glass"><h2>¿Hablamos de tu proyecto?</h2><a class="btn p" href="../#contacto">Pedir cotización</a></section>

  <footer><img src="../assets/logo-black.png" alt="Neurologic"><span>© ${new Date().getFullYear()} Neurologic. Todos los derechos reservados.</span></footer>`;
}
