(function () {
  'use strict';

  var TG = 'https://www.technogym.com/en-US/product/';

  // base: 'stack' (máquina/polea) | 'figure' (peso corporal)
  // badge: [símbolo, x, y, ancho, alto]
  var DAYS = {
    A: [
      { id: 'a-prensa', name: 'Prensa de piernas', muscle: 'Cuádriceps / Glúteo',
        desc: 'Asiento reclinado hacia atrás; empujas una plataforma con los pies, alejándola de ti.',
        sets: '3×10-12', base: 'stack', badge: ['arrow-fwd', 12, 12, 10, 10],
        link: { label: 'Technogym Selection Leg Press', href: TG + 'selection-700-leg-press_MNAC.html' } },
      { id: 'a-pecho', name: 'Press de pecho en máquina', muscle: 'Pecho / Tríceps',
        desc: 'Sentado con respaldo vertical; empujas dos asas hacia delante a la altura del pecho.',
        sets: '3×8-10', base: 'stack', badge: ['arrow-diag', 12, 10, 10, 10],
        link: { label: 'Technogym Selection Chest Press', href: TG + 'selection-700-chest-press_MNFC.html' } },
      { id: 'a-remo', name: 'Remo sentado en máquina', muscle: 'Espalda / Bíceps',
        desc: 'Sentado con apoyo en el pecho; tiras de las asas hacia el torso.',
        sets: '3×10-12', base: 'stack', badge: ['arrow-pull', 11, 12, 10, 10],
        link: { label: 'Technogym Selection Low Row', href: TG + 'selection-700-low-row_MNHC.html' } },
      { id: 'a-militar', name: 'Press militar en máquina', muscle: 'Hombro',
        desc: 'Sentado con respaldo vertical; empujas las asas hacia arriba, por encima de la cabeza.',
        sets: '3×10-12', base: 'stack', badge: ['arrow-up', 12, 11, 10, 10],
        link: { label: 'Technogym Selection Shoulder Press', href: TG + 'selection-700-shoulder-press_MNEC.html' } },
      { id: 'a-femoral', name: 'Curl femoral en máquina', muscle: 'Isquiotibiales',
        desc: 'Tumbado boca abajo (o sentado); flexionas la rodilla llevando el rodillo del tobillo hacia el glúteo.',
        sets: '3×12-15', base: 'stack', badge: ['arrow-curl', 11, 11, 10, 10],
        link: { label: 'Technogym Selection Leg Curl', href: TG + 'selection-700-leg-curl_MNIC.html' } },
      { id: 'a-biceps', name: 'Curl bíceps en máquina/polea', superset: true, muscle: 'Bíceps',
        desc: 'Sentado con el brazo apoyado en un cojín inclinado; flexionas el codo llevando el agarre hacia el hombro.',
        sets: '2×12-15', base: 'stack', badge: ['arrow-curl', 11, 11, 10, 10],
        link: { label: 'Technogym Selection Arm Curl', href: TG + 'selection-900-arm-curl_MNRP.html' } },
      { id: 'a-triceps', name: 'Extensión tríceps en polea', superset: true, muscle: 'Tríceps',
        desc: 'De pie frente a la polea alta con una barra o cuerda; empujas hacia abajo hasta extender el codo.',
        sets: '2×12-15', base: 'stack', badge: ['arrow-down', 12, 11, 10, 10],
        link: { label: 'Technogym Selection Arm Extension', href: TG + 'selection-900-arm-extension_MNSP.html' } },
      { id: 'a-plancha', name: 'Plancha', muscle: 'Core',
        desc: 'Boca abajo, apoyado en antebrazos y puntas de los pies, con el cuerpo recto.',
        sets: '3×30-45 s', base: 'figure', badge: ['hourglass', 12, 11, 10, 10],
        note: 'Sin máquina: peso corporal.' }
    ],
    B: [
      { id: 'b-cuadriceps', name: 'Extensión de cuádriceps', muscle: 'Cuádriceps',
        desc: 'Sentado; un rodillo se apoya en la espinilla y extiendes la rodilla hacia delante.',
        sets: '3×10-12', base: 'stack', badge: ['arrow-diag', 12, 10, 10, 10],
        link: { label: 'Technogym Selection Leg Extension', href: TG + 'selection-700-leg-extension_MNJC.html' } },
      { id: 'b-hipthrust', name: 'Hip thrust en máquina', muscle: 'Glúteo',
        desc: 'Espalda apoyada en el respaldo y un cojín sobre la cadera; empujas la cadera hacia arriba.',
        sets: '3×10-12', base: 'stack', badge: ['arrow-up', 12, 11, 10, 10],
        note: 'Sin página de producto confirmada: comprueba el nombre en la propia máquina del gimnasio.' },
      { id: 'b-inclinado', name: 'Press inclinado en máquina', muscle: 'Pecho superior',
        desc: 'Sentado con el respaldo inclinado hacia atrás; empujas las asas hacia arriba y delante.',
        sets: '3×10-12', base: 'stack', badge: ['arrow-diag', 12, 10, 10, 10],
        note: 'Probablemente una variante de la Chest Press de Technogym: confirma el nombre en la placa de la máquina.' },
      { id: 'b-jalon', name: 'Jalón al pecho en polea', muscle: 'Espalda / Bíceps',
        desc: 'Sentado con los muslos sujetos bajo una almohadilla; tiras de la barra alta hacia el pecho.',
        sets: '3×10-12', base: 'stack', badge: ['arrow-down', 12, 11, 10, 10],
        link: { label: 'Technogym Selection Vertical Traction', href: TG + 'selection-700-vertical-traction_MNGC.html' } },
      { id: 'b-aductor', name: 'Máquina de aductor/abductor', superset: true, muscle: 'Cadera',
        desc: 'Sentado con las piernas apoyadas en dos cojines laterales; las juntas o las separas contra resistencia.',
        sets: '2×12-15', base: 'stack', badge: ['arrow-diverge', 10, 12, 12, 10],
        link: { label: 'Technogym Selection Abductor/Adductor', href: TG + 'selection-700-dual-abductor-adductor_MNOC.html' } },
      { id: 'b-laterales', name: 'Elevaciones laterales', superset: true, muscle: 'Hombro lateral',
        desc: 'Sentado o de pie con los codos apoyados en cojines; elevas los brazos hacia los lados.',
        sets: '2×12-15', base: 'stack', badge: ['arrow-diverge', 10, 12, 12, 10],
        link: { label: 'Technogym Selection Delts Machine', href: TG + 'selection-700-delts-machine_MNKC.html' } },
      { id: 'b-martillo', name: 'Curl martillo en polea', muscle: 'Bíceps / Antebrazo',
        desc: 'De pie frente a la polea baja, agarre neutro (palmas enfrentadas); flexionas el codo.',
        sets: '3×12-15', base: 'stack', badge: ['arrow-curl', 11, 11, 10, 10],
        note: 'Se hace en la estación de poleas, no en una máquina dedicada.' },
      { id: 'b-abdominales', name: 'Máquina de abdominales', muscle: 'Core',
        desc: 'Sentado con apoyo en el pecho o los hombros; flexionas el torso hacia delante contra resistencia.',
        sets: '3×12-15', base: 'stack', badge: ['arrow-curl', 11, 11, 10, 10],
        link: { label: 'Technogym Selection Abdominal Crunch', href: TG + 'selection-700-abdominal-crunch_MNBC.html' } }
    ]
  };

  var PREFIX = 'rutina:v1:';

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(PREFIX + key);
      if (value === null) localStorage.removeItem(PREFIX + key);
      else localStorage.setItem(PREFIX + key, value);
    } catch (e) { /* almacenamiento no disponible */ }
    return null;
  }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'class') node.className = attrs[k];
      else if (k === 'text') node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function icon(ex) {
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('aria-hidden', 'true');
    var main = document.createElementNS(ns, 'use');
    main.setAttribute('href', '#' + ex.base);
    main.setAttribute('class', 'ic-main');
    var b = ex.badge;
    var badge = document.createElementNS(ns, 'use');
    badge.setAttribute('href', '#' + b[0]);
    badge.setAttribute('class', 'ic-badge');
    badge.setAttribute('x', b[1]); badge.setAttribute('y', b[2]);
    badge.setAttribute('width', b[3]); badge.setAttribute('height', b[4]);
    svg.appendChild(main); svg.appendChild(badge);
    return el('div', { class: 'icon-box' }, [svg]);
  }

  function updateProgress(day) {
    var cards = document.querySelectorAll('#list-' + day + ' .ex-card');
    var done = document.querySelectorAll('#list-' + day + ' .ex-card.done').length;
    document.getElementById('progress-' + day).textContent = done + ' / ' + cards.length + ' ejercicios';
  }

  function renderCard(day, ex) {
    var name = el('div', { class: 'ex-name' });
    name.appendChild(document.createTextNode(ex.name));
    if (ex.superset) name.appendChild(el('span', { class: 'superset-tag', text: 'superserie' }));

    var machine = null;
    if (ex.link) {
      var a = el('a', { href: ex.link.href, target: '_blank', rel: 'noopener noreferrer', text: ex.link.label + ' ↗' });
      machine = el('span', { class: 'machine' }, [el('span', { class: 'lbl', text: 'Modelo del gimnasio:' }), a]);
    } else if (ex.note) {
      machine = el('span', { class: 'machine-note', text: ex.note });
    }

    var checkInput = el('input', { type: 'checkbox', id: 'chk-' + ex.id });
    var checkLabel = el('label', { class: 'check', for: 'chk-' + ex.id }, [checkInput, document.createTextNode('Hecho')]);
    var weight = el('input', {
      class: 'log-input', type: 'text', inputmode: 'decimal',
      id: 'w-' + ex.id, placeholder: 'Último peso', 'aria-label': 'Último peso usado en ' + ex.name, maxlength: '12'
    });
    var logRow = el('div', { class: 'log-row' }, [checkLabel, weight]);

    var card = el('article', { class: 'ex-card', 'data-id': ex.id }, [
      icon(ex),
      el('div', {}, [
        name,
        el('div', { class: 'ex-muscle', text: ex.muscle }),
        el('div', { class: 'ex-desc', text: ex.desc }),
        machine,
        logRow
      ]),
      el('div', { class: 'ex-sets', text: ex.sets })
    ]);

    // Estado guardado
    var savedW = store('peso:' + ex.id);
    if (savedW) weight.value = savedW;
    if (store('hecho:' + ex.id) === '1') { checkInput.checked = true; card.classList.add('done'); }

    checkInput.addEventListener('change', function () {
      card.classList.toggle('done', checkInput.checked);
      store('hecho:' + ex.id, checkInput.checked ? '1' : null);
      updateProgress(day);
    });
    weight.addEventListener('input', function () {
      var v = weight.value.trim();
      store('peso:' + ex.id, v ? v : null);
    });

    return card;
  }

  function renderDay(day) {
    var list = document.getElementById('list-' + day);
    list.textContent = '';
    DAYS[day].forEach(function (ex) { list.appendChild(renderCard(day, ex)); });
    updateProgress(day);
  }

  function showDay(day, focusTab) {
    ['A', 'B'].forEach(function (d) {
      var selected = d === day;
      var tab = document.getElementById('tab-' + d);
      tab.setAttribute('aria-selected', selected ? 'true' : 'false');
      tab.tabIndex = selected ? 0 : -1;
      document.getElementById('panel-' + d).hidden = !selected;
    });
    if (focusTab) document.getElementById('tab-' + day).focus();
    try { history.replaceState(null, '', '#dia-' + day.toLowerCase()); } catch (e) {}
  }

  function resetDay(day) {
    DAYS[day].forEach(function (ex) { store('hecho:' + ex.id, null); });
    renderDay(day);
  }

  function init() {
    renderDay('A');
    renderDay('B');

    document.querySelectorAll('.tab').forEach(function (tab) {
      tab.addEventListener('click', function () { showDay(tab.getAttribute('data-day')); });
      tab.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          showDay(tab.getAttribute('data-day') === 'A' ? 'B' : 'A', true);
        }
      });
    });

    document.querySelectorAll('[data-goto]').forEach(function (chip) {
      chip.addEventListener('click', function () {
        showDay(chip.getAttribute('data-goto'));
        document.querySelector('.tabs').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    document.querySelectorAll('[data-reset]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (window.confirm('¿Desmarcar todos los ejercicios de esta sesión? Los pesos anotados se conservan.')) {
          resetDay(btn.getAttribute('data-reset'));
        }
      });
    });

    showDay(location.hash === '#dia-b' ? 'B' : 'A');
  }

  init();
})();
