(() => {
  const WA = 'https://wa.me/393357421758';
  const img = (id, w, h) =>
    `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85,enc_auto/${id}`;

  // y = incluso, r = su richiesta, n = non previsto
  const SPEC = [
    ['collettori', 'Collettori'],
    ['downpipe', 'Downpipe'],
    ['cat', 'Catalizzatore'],
    ['centrale', 'Centrale (mid-pipe)'],
    ['risonatore', 'Risonatore'],
    ['finale', 'Silenziatore finale'],
    ['valvola', 'Valvola di scarico'],
    ['terminali', 'Terminali'],
    ['staffe', 'Supporti e staffe'],
    ['coibentata', 'Coibentazione'],
  ];
  const spec = (s) => Object.fromEntries(SPEC.map(([k], i) => [k, s[i]]));
  const BMW = spec('nyryrryyyy');
  const BMW_DESC = (m) =>
    `Downpipe e centrale riducono le perdite di carico e rendono il motore della ${m} più pronto. La valvola attiva regola il sound, da discreto a pieno; risonatore e silenziatore si configurano su richiesta.`;

  const PRODUCTS = [
    {
      brand: 'Ferrari', model: 'Purosangue', kind: 'Luxury performance', steel: '304 / 310',
      cover: 'bc3bfb_8ad3a8003b0f4f009f4a80d2f5c3db45~mv2.jpg', detail: 'bc3bfb_1e9154d8215d4c67927e51f18a0952f2~mv2.png',
      desc: 'Downpipe e centrale migliorano il flusso dei gas e la risposta del V12 senza togliere comfort. Il sound resta quello della Purosangue: più pieno, mai invadente.',
      spec: spec('nyrynnnnyy'),
    },
    {
      brand: 'McLaren', model: '600LT', kind: 'Performance', steel: '304 / 310',
      cover: 'bc3bfb_b5f401504f8c49f997f56793779cf337~mv2.jpg', detail: 'bc3bfb_e102de796cc74ef7b1faaa047b96c423~mv2.png',
      desc: 'Collettori e downpipe abbassano la contropressione e migliorano l’allungo. La valvola attiva tiene il sound sotto controllo, con un sistema leggero e resistente.',
      spec: spec('yyrnnyynyy'),
    },
    {
      brand: 'Lamborghini', model: 'Revuelto', kind: 'High performance', steel: '310',
      cover: 'bc3bfb_d4ba2f00dce44c1f9bbcd8257a52f191~mv2.jpg', detail: 'bc3bfb_f95df6e5b5ab4ddaaab4a58ca6cb04bf~mv2.png',
      desc: 'Un sistema completo, dai collettori al silenziatore, pensato per i carichi termici del V12 ibrido. Interamente in inox 310 per restare stabile alle temperature più alte.',
      spec: spec('yyrnyyynyy'),
    },
    {
      brand: 'Lamborghini', model: 'Urus', kind: 'Downpipe', steel: '304 / 310',
      cover: 'bc3bfb_afcf519642074302b30f3b1f1e9cea84~mv2.png', detail: 'bc3bfb_0e96db6d8684404eb17e065e84669321~mv2.png',
      desc: 'Downpipe ad alto flusso che elimina le restrizioni a valle dei turbo: risposta più rapida e spinta più piena, con l’affidabilità di serie.',
      spec: spec('nyrnnnnnyy'),
    },
    {
      brand: 'Porsche', model: '992 GT3 RS', kind: 'Track performance', steel: '304 / 310',
      cover: 'bc3bfb_b71e7d676dae44f1be28f38122d6bf90~mv2.jpg', detail: 'bc3bfb_a29acc0550f74017b322440ab2761f33~mv2.png',
      desc: 'Collettori e sezione posteriore sviluppati per l’uso intensivo in pista: meno peso, flusso più diretto e un sound tecnico, senza filtri.',
      spec: spec('ynrnnyyyyy'),
    },
    {
      brand: 'Porsche', model: '992 GT3', kind: 'Performance', steel: '304 / 310',
      cover: 'bc3bfb_f1f47aafc32b476ab98735737d198cdb~mv2.png', detail: 'bc3bfb_85c1c6e86b2e405cbd762b17e99293df~mv2.jpeg',
      desc: 'Collettori dedicati e sezione posteriore per un flusso diretto fino al limitatore. La valvola attiva permette di scegliere quanto far cantare il boxer aspirato.',
      spec: spec('ynrnnyyyyy'),
    },
    {
      brand: 'BMW', model: 'M4', kind: 'Performance', steel: '304 / 310',
      cover: 'bc3bfb_d279208c9c7246f4a7c5b3dd72b67217~mv2.png', detail: 'bc3bfb_5955295cc6514120823d2d5bbe900025~mv2.png',
      desc: BMW_DESC('M4'), spec: BMW,
    },
    {
      brand: 'BMW', model: 'M3', kind: 'Performance', steel: '304 / 310',
      cover: 'bc3bfb_afc700d7e5174cd0955e40a8ee4d52f7~mv2.png', detail: 'bc3bfb_134c091dbb194750bfdd21b7db5c60d6~mv2.png',
      desc: BMW_DESC('M3'), spec: BMW,
    },
    {
      brand: 'BMW', model: 'M2', kind: 'Performance', steel: '304 / 310',
      cover: 'bc3bfb_f82a0b976b684df692e8654d59c11674~mv2.png', detail: 'bc3bfb_24ac8865dfc34181b10962041e5a505d~mv2.png',
      desc: BMW_DESC('M2'), spec: BMW,
    },
  ];

  const $ = (s, r = document) => r.querySelector(s);
  const wa = (text) => `${WA}?text=${encodeURIComponent(text)}`;

  // Prefilled WhatsApp links
  document.querySelectorAll('a[data-wa]').forEach((a) => {
    a.href = wa(a.dataset.wa);
    a.target = '_blank';
    a.rel = 'noopener';
  });

  // Mobile menu
  const menuBtn = $('.menu-btn');
  const nav = $('#nav');
  const setMenu = (open) => {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? 'Chiudi' : 'Menu';
  };
  menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  nav.addEventListener('click', (e) => e.target.closest('a') && setMenu(false));

  // Product grid + brand filter
  const grid = $('#products');
  const filters = $('#filters');
  const brands = ['Tutti', ...new Set(PRODUCTS.map((p) => p.brand))];
  let active = 'Tutti';

  const renderGrid = () => {
    grid.innerHTML = PRODUCTS.map((p, i) =>
      active !== 'Tutti' && p.brand !== active ? '' : `
      <li>
        <button class="card" type="button" data-i="${i}">
          <span class="card-img"><img loading="lazy" width="600" height="750" alt="Scarico ASTEK per ${p.brand} ${p.model}" src="${img(p.cover, 600, 750)}"></span>
          <span class="card-meta">
            <span class="card-brand">${p.brand}</span>
            <span class="card-model">${p.model}</span>
            <span class="card-more">Inox ${p.steel} · Vedi scheda</span>
          </span>
        </button>
      </li>`).join('');
  };
  const renderFilters = () => {
    filters.innerHTML = brands.map((b) =>
      `<button type="button" class="chip" aria-pressed="${b === active}">${b}</button>`).join('');
  };
  filters.addEventListener('click', (e) => {
    const b = e.target.closest('.chip');
    if (!b) return;
    active = b.textContent;
    renderFilters();
    renderGrid();
  });
  renderFilters();
  renderGrid();

  // Product sheet
  const sheet = $('#sheet');
  const LABEL = { y: 'Incluso', r: 'Su richiesta', n: 'Non previsto' };
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    const p = PRODUCTS[card.dataset.i];
    const name = `${p.brand} ${p.model}`;
    $('#sheet-kind').textContent = `${p.kind} · Inox ${p.steel}`;
    $('#sheet-title').textContent = name;
    $('#sheet-desc').textContent = p.desc;
    const im = $('#sheet-img');
    im.src = img(p.detail, 800, 1000);
    im.alt = `Componenti dello scarico ASTEK per ${name}`;
    $('#sheet-spec').innerHTML = SPEC.map(([k, label]) =>
      `<div class="${p.spec[k]}"><dt>${label}</dt><dd><i class="dot ${p.spec[k]}"></i>${LABEL[p.spec[k]]}</dd></div>`).join('');
    const cta = $('#sheet-cta');
    cta.href = wa(`Ciao, vorrei un preventivo per lo scarico ASTEK per ${name}.`);
    cta.target = '_blank';
    cta.rel = 'noopener';
    sheet.showModal();
    requestAnimationFrame(() => { sheet.scrollTop = 0; });
  });
  $('.close', sheet).addEventListener('click', () => sheet.close());
  sheet.addEventListener('click', (e) => e.target === sheet && sheet.close());

  // Dealer application -> WhatsApp message
  const form = $('#dealer-form');
  const msg = $('#form-msg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const bad = [...form.elements].find((el) => el.willValidate && !el.checkValidity());
    form.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));
    if (bad) {
      bad.setAttribute('aria-invalid', 'true');
      msg.textContent = bad.type === 'checkbox'
        ? 'Per inviare serve accettare termini e privacy.'
        : bad.type === 'email' && bad.value
          ? 'Controlla l’indirizzo email: sembra incompleto.'
          : 'Manca un campo obbligatorio: lo abbiamo evidenziato.';
      msg.hidden = false;
      bad.focus();
      return;
    }
    const d = Object.fromEntries(new FormData(form));
    const text = [
      'Candidatura rivenditore ASTEK',
      `Nome: ${d.nome} ${d.cognome}`,
      `Azienda: ${d.azienda}`,
      `Email: ${d.email}`,
      `Telefono: ${d.telefono}`,
      `Paese/città: ${d.luogo}`,
      `Web/social: ${d.web}`,
      d.messaggio ? `Messaggio: ${d.messaggio}` : '',
    ].filter(Boolean).join('\n');
    msg.textContent = 'Si è aperto WhatsApp con la candidatura: premi invio per mandarla.';
    msg.hidden = false;
    window.open(wa(text), '_blank', 'noopener');
  });
})();
