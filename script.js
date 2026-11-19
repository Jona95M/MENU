/**
 * Carbunco — Cocina a la Brasa y Exploración Gastronómica
 * JavaScript nativo ES6+ (sin frameworks ni compilación).
 */

(() => {
  'use strict';

  /* ========================================================================
     1. IMÁGENES Y CATÁLOGO EDITABLE DE PLATOS
     ======================================================================== */

  const IMAGES = {
    welcomeHero: './src/assets/images/carbunco_welcome_white_1795069045889.jpg',
    dishes: {
      cordero: './src/assets/images/plato_cordero_brasa_1795059886600.jpg',
      ceviche: './src/assets/images/plato_ceviche_vieira_1795059888642.jpg',
      lubina: './src/assets/images/plato_lubina_hinojo_1795059886963.jpg',
      arroz: './src/assets/images/plato_arroz_boletus_1795059886286.jpg',
      burrata: './src/assets/images/plato_burrata_tomate_1795059886683.jpg',
      hamburguesa: './src/assets/images/plato_hamburguesa_carbunco_1795071672031.jpg',
      combo: './src/assets/images/plato_combo_carbunco_1795072243119.jpg',
    },
    ingredients: {
      trufa: './src/assets/images/ingrediente_trufa_1795059886494.jpg',
      hierbas: './src/assets/images/ingrediente_hierbas_1795059887243.jpg',
      setas: './src/assets/images/ingrediente_setas_1795059886143.jpg',
      citricos: './src/assets/images/ingrediente_citricos_1795059885683.jpg',
    },
  };

  const DISHES = [
    {
      id: 'cordero-brasa',
      name: 'Costilla de cordero a la brasa',
      category: 'Tierra',
      house: 'Carbunco · Brasas de Encina',
      city: 'Madrid',
      availability: 'available',
      availabilityLabel: 'Disponible hoy',
      rating: 9.4,
      reviews: 118,
      basePrice: 34.0,
      prepTime: '35 min',
      image: IMAGES.dishes.cordero,
      description:
        'Costillar sellado a la brasa de encina con costra de hierbas frescas, crema sedosa de chirivía asada, zanahorias de temporada glaseadas y jugo reducido de romero.',
      attributes: [
        { icon: 'leaf', label: 'Producto de temporada' },
        { icon: 'clock', label: 'Brasa lenta · 35 min' },
        { icon: 'spark', label: 'Servicio en sala' },
      ],
      preparation: [
        'Sellar el costillar a fuego vivo con aceite virgen extra y cubrir con costra aromática de tomillo.',
        'Hornear a baja temperatura durante 18 minutos hasta alcanzar un punto rosado jugoso.',
        'Servir sobre puré tibio de chirivía, zanahorias glaseadas y jugo corto de asado.',
      ],
      ingredients: [
        {
          id: 'hierbas-monte',
          name: 'Tomillo e hinojo',
          image: IMAGES.ingredients.hierbas,
          priceDelta: 0,
          defaultActive: true,
        },
        {
          id: 'setas-asadas',
          name: 'Setas salteadas',
          image: IMAGES.ingredients.setas,
          priceDelta: 3.5,
          defaultActive: false,
        },
        {
          id: 'trufa-negra',
          name: 'Trufa laminada',
          image: IMAGES.ingredients.trufa,
          priceDelta: 5.0,
          defaultActive: false,
        },
        {
          id: 'sal-citricos',
          name: 'Escamas y piñón',
          image: IMAGES.ingredients.citricos,
          priceDelta: 2.0,
          defaultActive: true,
        },
      ],
    },
    {
      id: 'ceviche-vieira',
      name: 'Ceviche de vieira y cítricos',
      category: 'Mar',
      house: 'Carbunco · Barra Fría',
      city: 'Origen Galicia',
      availability: 'available',
      availabilityLabel: 'Disponible hoy',
      rating: 9.6,
      reviews: 142,
      basePrice: 28.0,
      prepTime: '18 min',
      image: IMAGES.dishes.ceviche,
      description:
        'Vieira gallega y corvina marinadas al momento en leche de tigre de lima verde, crema suave de aguacate, láminas crujientes de rábano rosa y aceite verde de cilantro.',
      attributes: [
        { icon: 'spark', label: 'Saludable y ligero' },
        { icon: 'drop', label: 'Bajo en grasa' },
        { icon: 'leaf', label: 'Barra y terraza' },
      ],
      preparation: [
        'Cortar la vieira y la corvina en láminas limpias y atemperar en frío con sal fina.',
        'Emulsionar zumo de lima recién exprimido con caldo suave de pescado y cilantro fresco.',
        'Emplatar con puntos de crema de aguacate, rábano laminado y gotas de aceite verde.',
      ],
      ingredients: [
        {
          id: 'lima-sal',
          name: 'Lima y flor de sal',
          image: IMAGES.ingredients.citricos,
          priceDelta: 0,
          defaultActive: true,
        },
        {
          id: 'brotes-cilantro',
          name: 'Brotes de hinojo',
          image: IMAGES.ingredients.hierbas,
          priceDelta: 1.5,
          defaultActive: true,
        },
        {
          id: 'setas-mar',
          name: 'Setas encurtidas',
          image: IMAGES.ingredients.setas,
          priceDelta: 3.0,
          defaultActive: false,
        },
        {
          id: 'trufa-fresca',
          name: 'Trufa de verano',
          image: IMAGES.ingredients.trufa,
          priceDelta: 4.5,
          defaultActive: false,
        },
      ],
    },
    {
      id: 'lubina-hinojo',
      name: 'Lubina salvaje al hinojo',
      category: 'Mar',
      house: 'Carbunco · Parrilla de Mar',
      city: 'Lonja del Norte',
      availability: 'soldout',
      availabilityLabel: 'Agotado por hoy · Vuelve a las 20:00',
      rating: 9.2,
      reviews: 96,
      basePrice: 32.0,
      prepTime: '24 min',
      image: IMAGES.dishes.lubina,
      description:
        'Lomo de lubina de anzuelo con piel crujiente, ensalada fina de hinojo fresco laminado y emulsión tibia de azafrán con gotas de aceite de oliva arbequina.',
      attributes: [
        { icon: 'spark', label: 'Pesca de bajura' },
        { icon: 'drop', label: 'Alto en omega 3' },
        { icon: 'clock', label: 'Turno de cena · 20:00' },
      ],
      preparation: [
        'Marcar la lubina exclusivamente por el lado de la piel hasta lograr una textura dorada y crujiente.',
        'Infusionar fumet ligero con hebras de azafrán y ligar en emulsión tibia.',
        'Coronar con hinojo fresco aliñado en el último instante con cítricos y flor de sal.',
      ],
      ingredients: [
        {
          id: 'hinojo-fresco',
          name: 'Hinojo y hierbas',
          image: IMAGES.ingredients.hierbas,
          priceDelta: 0,
          defaultActive: true,
        },
        {
          id: 'ralladura-citricos',
          name: 'Cítricos y piñón',
          image: IMAGES.ingredients.citricos,
          priceDelta: 2.0,
          defaultActive: false,
        },
        {
          id: 'boletus-plancha',
          name: 'Setas doradas',
          image: IMAGES.ingredients.setas,
          priceDelta: 3.5,
          defaultActive: false,
        },
        {
          id: 'trufa-aroma',
          name: 'Láminas de trufa',
          image: IMAGES.ingredients.trufa,
          priceDelta: 5.0,
          defaultActive: false,
        },
      ],
    },
    {
      id: 'arroz-boletus',
      name: 'Arroz meloso de boletus',
      category: 'Vegetal',
      house: 'Carbunco · Fuego y Sarmiento',
      city: 'Temporada de Monte',
      availability: 'seasonal',
      availabilityLabel: 'Plato temporal · Próxima temporada',
      rating: 9.1,
      reviews: 84,
      basePrice: 26.0,
      prepTime: '30 min',
      image: IMAGES.dishes.arroz,
      description:
        'Arroz variedad carnaroli cocinado lentamente en caldo tostado de hongos silvestres, acabado con boletus salteados a la sartén, salvia crujiente y láminas de trufa negra.',
      attributes: [
        { icon: 'leaf', label: '100% vegetal' },
        { icon: 'clock', label: 'Cocción lenta · 30 min' },
        { icon: 'spark', label: 'Edición temporal' },
      ],
      preparation: [
        'Sofreír chalota muy picada y nacarar el arroz durante dos minutos a fuego suave.',
        'Añadir caldo caliente de hongos asados en tandas sucesivas removiendo con suavidad.',
        'Terminar fuera del fuego con boletus dorados, hojas de salvia y trufa recién laminada.',
      ],
      ingredients: [
        {
          id: 'extra-setas',
          name: 'Doble boletus',
          image: IMAGES.ingredients.setas,
          priceDelta: 3.5,
          defaultActive: true,
        },
        {
          id: 'trufa-negra-arroz',
          name: 'Trufa negra',
          image: IMAGES.ingredients.trufa,
          priceDelta: 5.0,
          defaultActive: true,
        },
        {
          id: 'salvia-brotes',
          name: 'Hierbas frescas',
          image: IMAGES.ingredients.hierbas,
          priceDelta: 1.5,
          defaultActive: false,
        },
        {
          id: 'pinon-tostado',
          name: 'Piñón y lima',
          image: IMAGES.ingredients.citricos,
          priceDelta: 2.0,
          defaultActive: false,
        },
      ],
    },
    {
      id: 'burrata-tomate',
      name: 'Burrata y tomate rosa asado',
      category: 'Vegetal',
      house: 'Carbunco · Huerta Asada',
      city: 'Cosecha Propia',
      availability: 'available',
      availabilityLabel: 'Disponible hoy',
      isPromo: true,
      promoLabel: 'Especial barra',
      rating: 8.9,
      reviews: 73,
      basePrice: 22.0,
      prepTime: '15 min',
      image: IMAGES.dishes.burrata,
      description:
        'Burrata artesanal de textura cremosa acompañada de tomates rosa y cherry confitados al horno, piñones dorados, hojas frescas de albahaca y aceite de cosecha temprana.',
      attributes: [
        { icon: 'leaf', label: 'Huerta de proximidad' },
        { icon: 'spark', label: 'Sin gluten' },
        { icon: 'clock', label: 'Ideal para compartir' },
      ],
      preparation: [
        'Asar suavemente los tomates con aceite de oliva y flor de sal durante 10 minutos.',
        'Atemperar la burrata fuera del frío y abrir ligeramente en el centro del plato.',
        'Añadir piñones tostados, hojas enteras de albahaca y pimienta recién molida.',
      ],
      ingredients: [
        {
          id: 'pinones-citricos',
          name: 'Piñones y sal',
          image: IMAGES.ingredients.citricos,
          priceDelta: 0,
          defaultActive: true,
        },
        {
          id: 'albahaca-brotes',
          name: 'Brotes verdes',
          image: IMAGES.ingredients.hierbas,
          priceDelta: 1.5,
          defaultActive: true,
        },
        {
          id: 'setas-tibias',
          name: 'Setas salteadas',
          image: IMAGES.ingredients.setas,
          priceDelta: 3.0,
          defaultActive: false,
        },
        {
          id: 'trufa-burrata',
          name: 'Trufa laminada',
          image: IMAGES.ingredients.trufa,
          priceDelta: 4.5,
          defaultActive: false,
        },
      ],
    },
    {
      id: 'hamburguesa-carbunco',
      name: 'Hamburguesa Carbunco',
      category: 'Tierra',
      house: 'Carbunco · Cocina Urbana',
      city: 'Brasa & Brioche',
      availability: 'available',
      availabilityLabel: 'Disponible hoy',
      isCombo: true,
      isPromo: true,
      promoLabel: 'Incluye papas',
      rating: 9.2,
      reviews: 96,
      basePrice: 18.9,
      prepTime: '18 min',
      image: IMAGES.dishes.hamburguesa,
      description:
        'Carne madurada a la parrilla de encina en pan brioche artesanal tostado con mantequilla, queso cheddar curado fundido, bacon crujiente ahumado y papas finas.',
      attributes: [
        { icon: 'spark', label: 'Carne madurada 180 g' },
        { icon: 'clock', label: 'Parrilla · 18 min' },
        { icon: 'leaf', label: 'Incluye papas fritas' },
      ],
      preparation: [
        'Asar la pieza de vaca madurada sobre brasa viva sellando ambos lados para conservar jugosidad.',
        'Fundir doble lámina de cheddar curado y añadir tiras de bacon ahumado crujiente.',
        'Servir en brioche recién dorado acompañado de papas cortadas al momento.',
      ],
      ingredients: [
        {
          id: 'queso-cheddar',
          name: 'Cheddar curado',
          image: IMAGES.ingredients.citricos,
          priceDelta: 0,
          defaultActive: true,
        },
        {
          id: 'bacon-ahumado',
          name: 'Bacon ahumado',
          image: IMAGES.ingredients.hierbas,
          priceDelta: 0,
          defaultActive: true,
        },
        {
          id: 'setas-burger',
          name: 'Setas caramelizadas',
          image: IMAGES.ingredients.setas,
          priceDelta: 2.5,
          defaultActive: false,
        },
        {
          id: 'trufa-burger',
          name: 'Mayonesa de trufa',
          image: IMAGES.ingredients.trufa,
          priceDelta: 3.5,
          defaultActive: false,
        },
      ],
    },
    {
      id: 'combo-brasa-carbunco',
      name: 'Combo Brasa Carbunco',
      category: 'Combos',
      house: 'Carbunco · Parrilla & Barra',
      city: 'Burger + Papas + Salsa',
      availability: 'available',
      availabilityLabel: 'Disponible hoy',
      isCombo: true,
      isPromo: true,
      promoLabel: 'Promo -15%',
      rating: 9.5,
      reviews: 128,
      basePrice: 22.9,
      prepTime: '18 min',
      image: IMAGES.dishes.combo,
      description:
        'Doble medallón a la brasa en brioche de sésamo partido al medio, papas rústicas doradas con perejil fresco y salsa brava ahumada de la casa.',
      attributes: [
        { icon: 'spark', label: 'Combo especial del día' },
        { icon: 'clock', label: 'Cocina y barra · 18 min' },
        { icon: 'leaf', label: 'Incluye papas y salsa' },
      ],
      preparation: [
        'Asar la carne sobre brasa de encina y tostar el pan brioche con mantequilla clarificada.',
        'Freír en doble cocción papas cortadas a cuchillo y espolvorear escamas de sal y perejil.',
        'Emplatar en dos mitades con cuenco tibio de salsa brava ahumada.',
      ],
      ingredients: [
        {
          id: 'combo-cheddar',
          name: 'Cheddar fundido',
          image: IMAGES.ingredients.citricos,
          priceDelta: 0,
          defaultActive: true,
        },
        {
          id: 'combo-hierbas',
          name: 'Chimichurri verde',
          image: IMAGES.ingredients.hierbas,
          priceDelta: 0,
          defaultActive: true,
        },
        {
          id: 'combo-setas',
          name: 'Setas salteadas',
          image: IMAGES.ingredients.setas,
          priceDelta: 2.5,
          defaultActive: false,
        },
        {
          id: 'combo-trufa',
          name: 'Aceite de trufa',
          image: IMAGES.ingredients.trufa,
          priceDelta: 3.5,
          defaultActive: false,
        },
      ],
    },
  ];

  const CATEGORIES = ['Todos', 'Mar', 'Tierra', 'Vegetal', 'Combos', 'Promos', 'Favoritos'];
  const COMBO_PRICE = 5.9;
  const DELIVERY_FEE = 4.5;

  /* ========================================================================
     2. FUENTE ÚNICA DE ESTADO
     ======================================================================== */

  const state = {
    screen: 'welcome', // 'welcome' | 'carousel' | 'detail' | 'list' | 'customize' | 'orders' | 'cart'
    previousScreen: 'welcome',
    activeDishId: DISHES[0].id,
    searchQuery: '',
    activeCategory: 'Todos',
    sortBy: 'featured', // 'featured' | 'rating' | 'price-asc' | 'price-desc'
    sidebarOpen: false,
    favorites: new Set(['ceviche-vieira']),
    notifyAlerts: new Set(),
    cart: {
      items: [
        {
          dishId: 'cordero-brasa',
          qty: 1,
          ingredientIds: ['hierbas-monte', 'sal-citricos'],
        },
        {
          dishId: 'ceviche-vieira',
          qty: 1,
          ingredientIds: ['lima-sal', 'brotes-cilantro'],
        },
        {
          dishId: 'hamburguesa-carbunco',
          qty: 1,
          ingredientIds: ['queso-cheddar', 'bacon-ahumado'],
        },
      ],
      comboAdded: false,
      deliveryMode: 'delivery', // 'delivery' | 'pickup'
      justOrderedCode: null,
    },
    orderHistory: [
      {
        id: 'ord-2409',
        code: '#CB-2409',
        dateLabel: 'Ayer · 21:15',
        status: 'Servido en sala',
        isLive: false,
        dishId: 'cordero-brasa',
        ingredientIds: ['hierbas-monte', 'setas-asadas', 'sal-citricos'],
        total: 39.5,
      },
      {
        id: 'ord-2404',
        code: '#CB-2404',
        dateLabel: '14 nov · 14:30',
        status: 'Servido en barra',
        isLive: false,
        dishId: 'ceviche-vieira',
        ingredientIds: ['lima-sal', 'brotes-cilantro', 'trufa-fresca'],
        total: 34.0,
      },
      {
        id: 'ord-2398',
        code: '#CB-2398',
        dateLabel: '09 nov · 20:05',
        status: 'Servido en terraza',
        isLive: false,
        dishId: 'burrata-tomate',
        ingredientIds: ['pinones-citricos', 'albahaca-brotes'],
        total: 23.5,
      },
    ],
    selections: {}, // { [dishId]: Set<ingredientId> }
    showPrep: false,
  };

  // Inicializar selecciones por defecto para cada plato
  DISHES.forEach((dish) => {
    state.selections[dish.id] = new Set(
      dish.ingredients.filter((ing) => ing.defaultActive).map((ing) => ing.id)
    );
  });

  /* ========================================================================
     3. UTILIDADES DE FORMATO Y CÁLCULO
     ======================================================================== */

  const getDishIndex = (id) => Math.max(0, DISHES.findIndex((d) => d.id === id));
  const getActiveDish = () => DISHES[getDishIndex(state.activeDishId)] || DISHES[0];

  const getWrappedDish = (offset) => {
    const idx = getDishIndex(state.activeDishId);
    const wrapped = (idx + offset + DISHES.length) % DISHES.length;
    return DISHES[wrapped];
  };

  const calculateDishPrice = (dish) => {
    const activeSet = state.selections[dish.id] || new Set();
    let extras = 0;
    dish.ingredients.forEach((ing) => {
      if (activeSet.has(ing.id) && ing.priceDelta > 0) {
        extras += ing.priceDelta;
      }
    });
    return dish.basePrice + extras;
  };

  const getPriceDeltaFromBase = (dish) => calculateDishPrice(dish) - dish.basePrice;

  const formatPrice = (amount) => `$${Number(amount).toFixed(2)}`;

  const formatScore = (score) => score.toFixed(1).replace('.', ',');

  const buildStarsMarkup = (ratingOutOf10) => {
    const stars = Math.round(ratingOutOf10 / 2);
    let html = '';
    for (let i = 1; i <= 5; i += 1) {
      const filled = i <= stars;
      html += `<svg width="11" height="11" viewBox="0 0 20 20" fill="${
        filled ? 'currentColor' : 'none'
      }" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M10 2.2l2.35 4.76 5.25.76-3.8 3.7.9 5.23L10 14.18l-4.7 2.47.9-5.23-3.8-3.7 5.25-.76L10 2.2z"/></svg>`;
    }
    return html;
  };

  const ATTR_ICONS = {
    leaf: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 19C5 11.5 11 5.5 19 5C18.5 13 13 19 5 19ZM5 19L12 12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    clock: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.7"/><path d="M12 7.5V12L15 13.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    book: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5.5 5.5H11C11.8 5.5 12.5 6.2 12.5 7V18.5C12.5 17.8 11.8 17.2 11 17.2H5.5V5.5ZM18.5 5.5H13C12.2 5.5 11.5 6.2 11.5 7V18.5C11.5 17.8 12.2 17.2 13 17.2H18.5V5.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    spark: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 4L14.2 9.8L20 12L14.2 14.2L12 20L9.8 14.2L4 12L9.8 9.8L12 4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    drop: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 4.5C12 4.5 6.5 10.6 6.5 14.5C6.5 17.5 9 20 12 20C15 20 17.5 17.5 17.5 14.5C17.5 10.6 12 4.5 12 4.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
  };

  const CATEGORY_ICONS = {
    Todos:
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.5 14.5C4.8 14.2 3.8 12.8 3.8 11.2C3.8 9.3 5.3 7.8 7.2 7.8C7.6 5.9 9.6 4.5 12 4.5C14.4 4.5 16.4 5.9 16.8 7.8C18.7 7.8 20.2 9.3 20.2 11.2C20.2 12.8 19.2 14.2 17.5 14.5V18.5H6.5V14.5Z" stroke="currentColor" stroke-width="1.65" stroke-linejoin="round"/><path d="M6.5 16.2H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    Mar:
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3.5 13C6.5 8.5 12.5 8 16.5 11.5L20.5 8.5V16.5L16.5 13.5C12.5 17 6.5 16.5 3.5 13Z" stroke="currentColor" stroke-width="1.65" stroke-linejoin="round"/><circle cx="8.5" cy="12.2" r="0.85" fill="currentColor"/></svg>',
    Tierra:
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 18.5L9.5 7.5L14 14.5L16.5 11L21 18.5H3Z" stroke="currentColor" stroke-width="1.65" stroke-linejoin="round"/><path d="M7.5 11L9.5 12.2L11.5 10.6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    Vegetal:
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19C5 11.5 11 5.5 19 5C18.5 13 13 19 5 19ZM5 19L12 12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    Combos:
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 10.5C5 7.5 8 5.5 12 5.5C16 5.5 19 7.5 19 10.5H5Z" stroke="currentColor" stroke-width="1.65" stroke-linejoin="round"/><path d="M4.2 13.5H19.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5.5 16.5H18.5V17.5C18.5 18.3 17.8 19 17 19H7C6.2 19 5.5 18.3 5.5 17.5V16.5Z" stroke="currentColor" stroke-width="1.65" stroke-linejoin="round"/></svg>',
    Promos:
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12.2 4.5H18.2C18.9 4.5 19.5 5.1 19.5 5.8V11.8L11.6 19.7C11.1 20.2 10.2 20.2 9.7 19.7L4.3 14.3C3.8 13.8 3.8 12.9 4.3 12.4L12.2 4.5Z" stroke="currentColor" stroke-width="1.65" stroke-linejoin="round"/><circle cx="15.8" cy="8.2" r="1.15" fill="currentColor"/></svg>',
    Favoritos:
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19.5C12 19.5 5 14.8 5 9.6C5 7.2 6.9 5.3 9.2 5.3C10.7 5.3 11.6 6.1 12 6.8C12.4 6.1 13.3 5.3 14.8 5.3C17.1 5.3 19 7.2 19 9.6C19 14.8 12 19.5 12 19.5Z" stroke="currentColor" stroke-width="1.65" stroke-linejoin="round"/></svg>',
  };

  /* ========================================================================
     4. REFERENCIAS AL DOM
     ======================================================================== */

  const el = {
    shell: document.getElementById('app-shell'),
    viewWelcome: document.getElementById('view-welcome'),
    btnWelcomeEnter: document.getElementById('btn-welcome-enter'),
    btnWelcomeList: document.getElementById('btn-welcome-list'),
    btnWelcomeCustomize: document.getElementById('btn-welcome-customize'),
    btnMenu: document.getElementById('btn-menu'),
    btnBrand: document.getElementById('btn-brand'),
    btnSaved: document.getElementById('btn-saved'),
    savedCount: document.getElementById('saved-count'),
    btnCartTop: document.getElementById('btn-cart-top'),
    cartTopCount: document.getElementById('cart-top-count'),

    tabRecipes: document.getElementById('tab-recipes'),
    tabCustomize: document.getElementById('tab-customize'),

    plateTrack: document.getElementById('plate-track'),
    heroParticles: document.getElementById('hero-particles'),
    btnDetailBack: document.getElementById('btn-detail-back'),

    viewCarousel: document.getElementById('view-carousel'),
    viewDetail: document.getElementById('view-detail'),
    detailScroll: document.getElementById('detail-scroll'),
    viewList: document.getElementById('view-list'),
    viewCustomize: document.getElementById('view-customize'),
    viewOrders: document.getElementById('view-orders'),
    ordersList: document.getElementById('orders-list'),

    viewCart: document.getElementById('view-cart'),
    cartSubtitle: document.getElementById('cart-subtitle'),
    cartScroll: document.getElementById('cart-scroll'),
    cartItemsList: document.getElementById('cart-items-list'),
    cartEmpty: document.getElementById('cart-empty'),
    cartEmptyTitle: document.getElementById('cart-empty-title'),
    cartEmptyDesc: document.getElementById('cart-empty-desc'),
    btnCartBrowse: document.getElementById('btn-cart-browse'),
    btnCartHistory: document.getElementById('btn-cart-history'),
    cartCheckoutSection: document.getElementById('cart-checkout-section'),
    cartComboCard: document.getElementById('cart-combo-card'),
    btnToggleCombo: document.getElementById('btn-toggle-combo'),
    comboToggleIcon: document.getElementById('combo-toggle-icon'),
    btnDeliveryHome: document.getElementById('btn-delivery-home'),
    btnDeliveryPickup: document.getElementById('btn-delivery-pickup'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    cartDeliveryLabel: document.getElementById('cart-delivery-label'),
    btnDeliveryInfo: document.getElementById('btn-delivery-info'),
    cartDeliveryFee: document.getElementById('cart-delivery-fee'),
    cartTotal: document.getElementById('cart-total'),
    btnCheckout: document.getElementById('btn-checkout'),

    carouselMeta: document.getElementById('carousel-meta'),
    carouselAvailabilityPill: document.getElementById('carousel-availability-pill'),
    carouselKicker: document.getElementById('carousel-kicker'),
    carouselTitle: document.getElementById('carousel-title'),
    carouselTitleGhost: document.getElementById('carousel-title-ghost'),
    carouselSubtitle: document.getElementById('carousel-subtitle'),
    btnPrevDish: document.getElementById('btn-prev-dish'),
    btnNextDish: document.getElementById('btn-next-dish'),
    btnOpenDetail: document.getElementById('btn-open-detail'),
    btnNotifyDish: document.getElementById('btn-notify-dish'),
    btnNotifyLabel: document.getElementById('btn-notify-label'),
    featuredHouseCard: document.getElementById('featured-house-card'),
    houseThumbImg: document.getElementById('house-thumb-img'),
    houseName: document.getElementById('house-name'),
    houseCity: document.getElementById('house-city'),
    houseStars: document.getElementById('house-stars'),
    houseReviews: document.getElementById('house-reviews'),
    houseScore: document.getElementById('house-score'),

    detailAvailabilityBar: document.getElementById('detail-availability-bar'),
    detailAvailabilityText: document.getElementById('detail-availability-text'),
    btnDetailNotify: document.getElementById('btn-detail-notify'),
    detailCustomBadges: document.getElementById('detail-custom-badges'),
    detailAttributes: document.getElementById('detail-attributes'),
    detailOrigin: document.getElementById('detail-origin'),
    detailTitle: document.getElementById('detail-title'),
    detailDescription: document.getElementById('detail-description'),
    btnTogglePrep: document.getElementById('btn-toggle-prep'),
    prepSummaryLabel: document.getElementById('prep-summary-label'),
    detailPrepPanel: document.getElementById('detail-prep-panel'),
    detailPrepSteps: document.getElementById('detail-prep-steps'),
    detailPrice: document.getElementById('detail-price'),
    detailPriceNote: document.getElementById('detail-price-note'),
    detailStars: document.getElementById('detail-stars'),
    detailRatingText: document.getElementById('detail-rating-text'),
    btnDetailAddCart: document.getElementById('btn-detail-add-cart'),
    btnFavoriteDetail: document.getElementById('btn-favorite-detail'),

    searchInput: document.getElementById('search-input'),
    btnClearSearch: document.getElementById('btn-clear-search'),
    btnSortList: document.getElementById('btn-sort-list'),
    filterBar: document.getElementById('filter-bar'),
    dishList: document.getElementById('dish-list'),

    customizeTitle: document.getElementById('customize-title'),
    customizePriceSummary: document.getElementById('customize-price-summary'),
    ingredientsStrip: document.getElementById('ingredients-strip'),
    btnConfirmCustomize: document.getElementById('btn-confirm-customize'),
    customizeFeedback: document.getElementById('customize-feedback'),

    btnNavCarousel: document.getElementById('btn-nav-carousel'),
    btnNavList: document.getElementById('btn-nav-list'),
    btnNavCart: document.getElementById('btn-nav-cart'),
    cartNavBadge: document.getElementById('cart-nav-badge'),

    sidebarBackdrop: document.getElementById('sidebar-backdrop'),
    navSidebar: document.getElementById('nav-sidebar'),
    btnCloseSidebar: document.getElementById('btn-close-sidebar'),
    btnSidebarActiveDish: document.getElementById('btn-sidebar-active-dish'),
    sidebarDishThumb: document.getElementById('sidebar-dish-thumb'),
    sidebarDishName: document.getElementById('sidebar-dish-name'),
    sidebarDishPrice: document.getElementById('sidebar-dish-price'),
    sidebarAllCount: document.getElementById('sidebar-all-count'),
    sidebarCartCount: document.getElementById('sidebar-cart-count'),
    sidebarFavCount: document.getElementById('sidebar-fav-count'),
    sidebarOrdersCount: document.getElementById('sidebar-orders-count'),
    sidebarNavButtons: Array.from(document.querySelectorAll('.sidebar-link, .sidebar-cat-chip')),

    toast: document.getElementById('toast'),
  };

  /* ========================================================================
     5. RETROALIMENTACIÓN VISUAL (TOAST)
     ======================================================================== */

  let toastTimer = null;

  const showToast = (message) => {
    clearTimeout(toastTimer);
    el.toast.textContent = message;
    el.toast.classList.add('is-visible');
    toastTimer = setTimeout(() => {
      el.toast.classList.remove('is-visible');
    }, 2200);
  };

  /* ========================================================================
     6. RENDERIZADO SINCRONIZADO
     ======================================================================== */

  const renderHeaderAndTabs = () => {
    const favCount = state.favorites.size;
    el.savedCount.textContent = String(favCount);
    el.savedCount.classList.toggle('is-empty', favCount === 0);
    el.btnSaved.classList.toggle('has-saved', favCount > 0);

    const isCustomize = state.screen === 'customize';
    el.tabRecipes.classList.toggle('is-active', !isCustomize);
    el.tabRecipes.setAttribute('aria-selected', String(!isCustomize));
    el.tabCustomize.classList.toggle('is-active', isCustomize);
    el.tabCustomize.setAttribute('aria-selected', String(isCustomize));
  };

  const CAROUSEL_ROTATION_STEP = 26; // Giro muy suave al desplazarse en el carrusel
  const DETAIL_ROTATION_STEP = 30;   // Giro suave al rodar hacia la derecha en Detalle
  const SWIPE_MAX_PX = 185;
  const SWIPE_THRESHOLD_PX = 36;

  // Ángulo acumulado por plato para giro continuo sin reinicios bruscos
  const dishRotations = DISHES.map(() => 0);
  let detailSpinDishIndex = null;

  const getDishOffset = (index) => {
    const currentIndex = getDishIndex(state.activeDishId);
    const total = DISHES.length;
    let offset = (index - currentIndex) % total;
    if (offset < 0) offset += total;
    if (offset > total / 2) offset -= total;
    return offset;
  };

  const previousOffsets = DISHES.map((_, i) => getDishOffset(i));

  const getCarouselPoseForOffset = (offset) => {
    if (offset === 0) {
      return { xPercent: 0, yPx: 0, scale: 1, opacity: 1, zIndex: 10, pointerEvents: 'auto' };
    }
    if (offset === -1) {
      return { xPercent: -92, yPx: 8, scale: 0.8, opacity: 0.88, zIndex: 5, pointerEvents: 'auto' };
    }
    if (offset === 1) {
      return { xPercent: 92, yPx: 8, scale: 0.8, opacity: 0.88, zIndex: 5, pointerEvents: 'auto' };
    }
    if (offset < 0) {
      return { xPercent: -165, yPx: 16, scale: 0.54, opacity: 0, zIndex: 1, pointerEvents: 'none' };
    }
    return { xPercent: 165, yPx: 16, scale: 0.54, opacity: 0, zIndex: 1, pointerEvents: 'none' };
  };

  const plateSlots = DISHES.map((dish, i) => {
    const slot = document.createElement('button');
    slot.type = 'button';
    slot.className = 'plate-slot';
    slot.dataset.dishId = dish.id;
    slot.innerHTML = `
      <span class="plate-ring" aria-hidden="true"></span>
      <span class="plate-frame">
        <img src="${dish.image}" alt="${dish.name}" draggable="false" referrerpolicy="no-referrer" />
      </span>
    `;

    slot.addEventListener('click', () => {
      if (suppressNextPlateClick) return;
      const offset = getDishOffset(i);
      if (state.screen === 'carousel') {
        if (offset === 1) stepCarousel(1);
        else if (offset === -1) stepCarousel(-1);
        else if (offset === 0) setScreen('detail');
      } else if (state.screen === 'detail' && offset === 0) {
        setScreen('customize');
      }
    });

    el.plateTrack.appendChild(slot);
    return slot;
  });

  const renderPlates = (direction = 0) => {
    if (direction !== 0) {
      for (let i = 0; i < DISHES.length; i += 1) {
        dishRotations[i] -= direction * CAROUSEL_ROTATION_STEP;
      }
    }

    DISHES.forEach((dish, i) => {
      const slot = plateSlots[i];
      const offset = getDishOffset(i);
      const isCurrent = offset === 0;

      // Si un plato oculto envuelve de extremo a extremo (-2 <-> +2), recolocar sin transición en segundo plano
      if (
        state.screen === 'carousel' &&
        direction !== 0 &&
        ((previousOffsets[i] <= -2 && offset >= 2) || (previousOffsets[i] >= 2 && offset <= -2))
      ) {
        const edgePose = getCarouselPoseForOffset(offset > 0 ? 2 : -2);
        slot.classList.add('is-no-transition');
        slot.style.transform = `translate3d(${edgePose.xPercent}%, ${edgePose.yPx}px, 0) scale(${edgePose.scale}) rotate(${dishRotations[i]}deg)`;
        slot.style.opacity = '0';
        slot.style.zIndex = String(edgePose.zIndex);
        void slot.offsetWidth;
        slot.classList.remove('is-no-transition');
      }

      slot.classList.toggle('is-current', isCurrent);
      slot.classList.toggle('is-unavailable', dish.availability !== 'available');
      slot.dataset.offset = String(offset);

      if (offset === -1) {
        slot.setAttribute('aria-label', `Ver plato anterior: ${dish.name}`);
      } else if (offset === 1) {
        slot.setAttribute('aria-label', `Ver plato siguiente: ${dish.name}`);
      } else if (isCurrent) {
        slot.setAttribute(
          'aria-label',
          state.screen === 'carousel'
            ? `Abrir detalle de ${dish.name}`
            : `Plato activo: ${dish.name}`
        );
      } else {
        slot.setAttribute('aria-label', dish.name);
      }

      if (state.screen === 'detail') {
        if (isCurrent) {
          slot.style.transform = `translate3d(49%, -10px, 0) scale(1.02) rotate(${dishRotations[i]}deg)`;
          slot.style.opacity = '1';
          slot.style.zIndex = '20';
          slot.style.pointerEvents = 'auto';
        } else {
          const off = getCarouselPoseForOffset(offset < 0 ? -2 : 2);
          slot.style.transform = `translate3d(${off.xPercent}%, ${off.yPx}px, 0) scale(0.54) rotate(${dishRotations[i]}deg)`;
          slot.style.opacity = '0';
          slot.style.zIndex = '1';
          slot.style.pointerEvents = 'none';
        }
      } else if (state.screen === 'customize') {
        if (isCurrent) {
          slot.style.transform = `translate3d(0px, 6px, 0) scale(0.95) rotate(${dishRotations[i] - 12}deg)`;
          slot.style.opacity = '1';
          slot.style.zIndex = '10';
          slot.style.pointerEvents = 'auto';
        } else {
          const off = getCarouselPoseForOffset(offset < 0 ? -2 : 2);
          slot.style.transform = `translate3d(${off.xPercent}%, ${off.yPx}px, 0) scale(0.58) rotate(${dishRotations[i]}deg)`;
          slot.style.opacity = '0';
          slot.style.zIndex = '1';
          slot.style.pointerEvents = 'none';
        }
      } else {
        const pose = getCarouselPoseForOffset(offset);
        slot.style.transform = `translate3d(${pose.xPercent}%, ${pose.yPx}px, 0) scale(${pose.scale}) rotate(${dishRotations[i]}deg)`;
        slot.style.opacity = String(pose.opacity);
        slot.style.zIndex = String(pose.zIndex);
        slot.style.pointerEvents = state.screen === 'carousel' ? pose.pointerEvents : 'none';
      }

      previousOffsets[i] = offset;
    });
  };

  let metaSwapTimer = null;

  const renderCarouselInfo = (animateText = false, slideDirection = 1, outgoingDish = null) => {
    const dish = getActiveDish();
    const idx = getDishIndex(dish.id) + 1;
    const totalPrice = calculateDishPrice(dish);
    const activeCount = (state.selections[dish.id] || new Set()).size;
    const isAvailable = dish.availability === 'available';
    const isNotified = state.notifyAlerts.has(dish.id);

    const syncCarouselAvailability = () => {
      if (el.carouselAvailabilityPill) {
        el.carouselAvailabilityPill.hidden = isAvailable;
        el.carouselAvailabilityPill.classList.toggle('is-seasonal', dish.availability === 'seasonal');
        if (!isAvailable) {
          el.carouselAvailabilityPill.textContent = isNotified
            ? `${dish.availabilityLabel} · Aviso activo`
            : dish.availabilityLabel;
        }
      }

      if (el.btnOpenDetail) {
        el.btnOpenDetail.hidden = !isAvailable;
      }
      if (el.btnNotifyDish) {
        el.btnNotifyDish.hidden = isAvailable;
        el.btnNotifyDish.classList.toggle('is-subscribed', isNotified);
        el.btnNotifyDish.setAttribute('aria-pressed', String(isNotified));
        el.btnNotifyDish.setAttribute(
          'aria-label',
          isNotified
            ? `Cancelar aviso de disponibilidad para ${dish.name}`
            : `Notificarme cuando ${dish.name} vuelva a estar disponible`
        );
      }
      if (el.btnNotifyLabel) {
        el.btnNotifyLabel.textContent = isNotified ? 'Aviso activado ✓' : 'Notificarme';
      }
    };

    const applyText = () => {
      el.carouselKicker.innerHTML = `0${idx} / 0${DISHES.length} · <span class="kicker-category">${dish.category}</span>`;
      el.carouselTitle.innerHTML = `${dish.name}<span class="brand-ember-dot">.</span>`;
      el.carouselSubtitle.innerHTML = `
        <span class="meta-stat">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.65" />
            <path d="M12 7.5V12L15.2 13.8" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" />
          </svg>
          <span>${dish.prepTime}</span>
        </span>
        <span class="meta-stat-sep" aria-hidden="true"></span>
        <span class="meta-stat">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3.5L20 8L12 12.5L4 8L12 3.5Z" stroke="currentColor" stroke-width="1.65" stroke-linejoin="round" />
            <path d="M4 12.5L12 17L20 12.5" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 16.5L12 21L20 16.5" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>${activeCount} ${activeCount === 1 ? 'ingrediente activo' : 'ingredientes activos'}</span>
        </span>
        <span class="meta-stat-sep" aria-hidden="true"></span>
        <span class="meta-stat meta-stat--price">${formatPrice(totalPrice)}</span>
      `;

      el.houseThumbImg.src = dish.image;
      el.houseThumbImg.alt = `${dish.house} — ${dish.name}`;
      el.houseName.textContent = dish.house;
      el.houseCity.textContent = dish.city;
      el.houseStars.innerHTML = buildStarsMarkup(dish.rating);
      el.houseReviews.textContent = `(${dish.reviews} reseñas)`;
      el.houseScore.textContent = formatScore(dish.rating);

      syncCarouselAvailability();
    };

    if (animateText && outgoingDish && el.carouselTitleGhost) {
      clearTimeout(metaSwapTimer);
      // Fundido cruzado simultáneo: el título anterior se desvanece mientras el nuevo entra
      el.carouselTitleGhost.innerHTML = `${outgoingDish.name}<span class="brand-ember-dot">.</span>`;
      el.carouselTitleGhost.classList.remove('is-fading-out-left', 'is-fading-out-right');
      el.carouselTitle.classList.remove('is-fading-in-right', 'is-fading-in-left');

      applyText();

      void el.carouselTitleGhost.offsetWidth;
      void el.carouselTitle.offsetWidth;

      el.carouselTitleGhost.classList.add(
        slideDirection > 0 ? 'is-fading-out-left' : 'is-fading-out-right'
      );
      el.carouselTitle.classList.add(
        slideDirection > 0 ? 'is-fading-in-right' : 'is-fading-in-left'
      );

      el.featuredHouseCard.classList.add('is-updating');
      metaSwapTimer = setTimeout(() => {
        el.featuredHouseCard.classList.remove('is-updating');
      }, 360);
    } else {
      applyText();
    }
  };

  const renderDetailView = (highlightPrice = false) => {
    const dish = getActiveDish();
    const totalPrice = calculateDishPrice(dish);
    const delta = getPriceDeltaFromBase(dish);
    const isFav = state.favorites.has(dish.id);
    const isAvailable = dish.availability === 'available';
    const isNotified = state.notifyAlerts.has(dish.id);
    const activeIds = state.selections[dish.id] || new Set();

    if (el.detailAvailabilityBar) {
      el.detailAvailabilityBar.hidden = isAvailable;
      el.detailAvailabilityBar.classList.toggle('is-seasonal', dish.availability === 'seasonal');
    }
    if (el.detailAvailabilityText) {
      el.detailAvailabilityText.textContent = dish.availabilityLabel || 'Temporalmente no disponible';
    }
    if (el.btnDetailNotify) {
      el.btnDetailNotify.classList.toggle('is-subscribed', isNotified);
      el.btnDetailNotify.setAttribute('aria-pressed', String(isNotified));
      el.btnDetailNotify.textContent = isNotified ? 'Aviso activo ✓' : 'Notificarme';
    }

    // Miniaturas de ingredientes seleccionados (visible sobre todo al volver de Personalizar)
    const chosenIngredients = dish.ingredients.filter((ing) => activeIds.has(ing.id));
    el.detailCustomBadges.innerHTML = '';
    chosenIngredients.forEach((ing, chipIndex) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'detail-custom-chip';
      btn.style.setProperty('--chip-idx', String(chipIndex));
      btn.title = `${ing.name} — tocar para personalizar`;
      btn.setAttribute('aria-label', `${ing.name} incluido. Tocar para editar ingredientes`);
      btn.innerHTML = `
        <img src="${ing.image}" alt="${ing.name}" referrerpolicy="no-referrer" />
        <span class="detail-custom-chip-badge" aria-hidden="true">${
          ing.priceDelta > 0 ? '+' : '✓'
        }</span>
      `;
      btn.addEventListener('click', () => setScreen('customize'));
      el.detailCustomBadges.appendChild(btn);
    });

    // Atributos secuenciales
    el.detailAttributes.innerHTML = dish.attributes
      .map(
        (attr) => `
        <li class="detail-attr-item">
          <span class="detail-attr-icon" aria-hidden="true">${ATTR_ICONS[attr.icon] || ATTR_ICONS.leaf}</span>
          <span>${attr.label}</span>
        </li>`
      )
      .join('');

    el.detailOrigin.textContent = `${dish.house} · ${dish.city}`;
    el.detailTitle.textContent = dish.name;
    el.detailDescription.textContent = dish.description;

    // Elaboración en cocina
    el.prepSummaryLabel.textContent = `Elaboración en cocina · ${dish.prepTime}`;
    el.btnTogglePrep.setAttribute('aria-expanded', String(state.showPrep));
    el.detailPrepPanel.hidden = !state.showPrep;
    el.detailPrepSteps.innerHTML = dish.preparation
      .map((step) => `<li>${step}</li>`)
      .join('');

    // Precio dinámico y evaluación
    el.detailPrice.textContent = formatPrice(totalPrice);
    el.detailPriceNote.textContent =
      delta > 0 ? `(incluye +${formatPrice(delta)} extras)` : 'Precio base';

    if (highlightPrice) {
      el.detailPrice.classList.add('is-highlighted');
      setTimeout(() => el.detailPrice.classList.remove('is-highlighted'), 520);
    }

    el.detailStars.innerHTML = buildStarsMarkup(dish.rating);
    el.detailRatingText.textContent = `${formatScore(dish.rating)} · (${dish.reviews} reseñas)`;

    el.btnFavoriteDetail.setAttribute('aria-pressed', String(isFav));
    el.btnFavoriteDetail.textContent = isFav ? 'En mi lista ✓' : '+ Añadir a mi lista';
  };

  const renderFilterBar = () => {
    el.filterBar.innerHTML = '';
    CATEGORIES.forEach((category) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      const isActive = state.activeCategory === category;
      const isPromo = category === 'Promos';
      btn.className = `filter-btn${isPromo ? ' filter-btn--promo' : ''}${isActive ? ' is-active' : ''}`;
      btn.setAttribute('aria-pressed', String(isActive));
      const label = category === 'Favoritos' ? `Favoritos (${state.favorites.size})` : category;
      const promoTicks = isPromo
        ? '<span class="promo-spark-ticks" aria-hidden="true"><i></i><i></i><i></i></span>'
        : '';
      btn.innerHTML = `${CATEGORY_ICONS[category] || ''}<span>${label}</span>${promoTicks}`;
      btn.addEventListener('click', () => {
        state.activeCategory = category;
        renderFilterBar();
        renderListView();
        renderSidebar();
      });
      el.filterBar.appendChild(btn);
    });
  };

  const renderListView = () => {
    const query = state.searchQuery.trim().toLowerCase();
    el.btnClearSearch.hidden = query.length === 0;
    if (el.btnSortList) {
      el.btnSortList.classList.toggle('is-sorted', state.sortBy !== 'featured');
    }

    const filtered = DISHES.filter((dish) => {
      if (state.activeCategory === 'Favoritos' && !state.favorites.has(dish.id)) {
        return false;
      } else if (state.activeCategory === 'Combos') {
        if (dish.category !== 'Combos' && !dish.isCombo) return false;
      } else if (state.activeCategory === 'Promos') {
        if (!dish.isPromo) return false;
      } else if (
        state.activeCategory !== 'Todos' &&
        state.activeCategory !== 'Favoritos' &&
        dish.category !== state.activeCategory
      ) {
        return false;
      }
      if (!query) return true;

      const haystack = [
        dish.name,
        dish.house,
        dish.city,
        dish.category,
        dish.promoLabel || '',
        dish.description,
        ...dish.ingredients.map((i) => i.name),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(query);
    });

    const sorted = [...filtered];
    if (state.sortBy === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (state.sortBy === 'price-asc') {
      sorted.sort((a, b) => calculateDishPrice(a) - calculateDishPrice(b));
    } else if (state.sortBy === 'price-desc') {
      sorted.sort((a, b) => calculateDishPrice(b) - calculateDishPrice(a));
    }

    el.dishList.innerHTML = '';

    if (sorted.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'list-empty';
      empty.innerHTML = `
        <p>No encontramos platos que coincidan con tu búsqueda.</p>
        <button type="button" class="link-cta" id="btn-reset-filters">Mostrar todos los platos</button>
      `;
      el.dishList.appendChild(empty);
      const resetBtn = empty.querySelector('#btn-reset-filters');
      resetBtn.addEventListener('click', () => {
        state.searchQuery = '';
        state.activeCategory = 'Todos';
        state.sortBy = 'featured';
        el.searchInput.value = '';
        renderFilterBar();
        renderListView();
        renderSidebar();
      });
      return;
    }

    sorted.forEach((dish, index) => {
      const totalPrice = calculateDishPrice(dish);
      const isCurrent = dish.id === state.activeDishId;
      const isFav = state.favorites.has(dish.id);
      const isAvailable = dish.availability === 'available';
      const isNotified = state.notifyAlerts.has(dish.id);

      const statusMarkup = !isAvailable
        ? `<span class="dish-card-status${dish.availability === 'seasonal' ? ' is-seasonal' : ''}">${
            dish.availability === 'seasonal' ? 'Plato temporal' : 'Agotado hoy'
          }${isNotified ? ' · Aviso activo' : ''}</span>`
        : dish.promoLabel && (state.activeCategory === 'Promos' || state.activeCategory === 'Combos')
          ? `<span class="dish-card-status is-promo">${dish.promoLabel}</span>`
          : '';

      const card = document.createElement('button');
      card.type = 'button';
      card.role = 'listitem';
      card.className = `dish-card${isCurrent ? ' is-current' : ''}`;
      card.style.setProperty('--stagger', String(index));
      card.setAttribute(
        'aria-label',
        `Abrir detalle de ${dish.name}, en ${dish.house}, ${formatPrice(totalPrice)}`
      );

      card.innerHTML = `
        <span class="dish-card-thumb">
          <img src="${dish.image}" alt="${dish.name}" referrerpolicy="no-referrer" />
        </span>
        <span class="dish-card-info">
          <span class="dish-card-title">${dish.name}</span>
          <span class="dish-card-house">${dish.house}${dish.city ? ` · ${dish.city}` : ''}${
            isFav ? ' · Guardado' : ''
          }</span>
          ${statusMarkup}
          <span class="dish-card-meta">
            <span class="stars-row" aria-hidden="true">${buildStarsMarkup(dish.rating)}</span>
            <span class="reviews-count">(${dish.reviews})</span>
          </span>
        </span>
        <span class="dish-card-right">
          <span class="dish-card-score">
            <svg width="11" height="11" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10 2.2l2.35 4.76 5.25.76-3.8 3.7.9 5.23L10 14.18l-4.7 2.47.9-5.23-3.8-3.7 5.25-.76L10 2.2z"/>
            </svg>
            <span>${formatScore(dish.rating)}</span>
          </span>
          <span class="dish-card-price">${formatPrice(totalPrice)}</span>
        </span>
      `;

      card.addEventListener('click', () => {
        state.activeDishId = dish.id;
        state.showPrep = false;
        renderPlates(0);
        renderCarouselInfo(false);
        setScreen('detail');
      });

      el.dishList.appendChild(card);
    });
  };

  const renderCustomizeView = () => {
    const dish = getActiveDish();
    const activeIds = state.selections[dish.id] || new Set();
    const totalPrice = calculateDishPrice(dish);
    const delta = getPriceDeltaFromBase(dish);

    el.customizeTitle.textContent = dish.name;
    el.customizePriceSummary.textContent =
      delta > 0
        ? `Base ${formatPrice(dish.basePrice)} · Extras +${formatPrice(delta)} · Total ${formatPrice(
            totalPrice
          )}`
        : `Total estimado · ${formatPrice(totalPrice)}`;

    el.ingredientsStrip.innerHTML = '';

    dish.ingredients.forEach((ing, ingIndex) => {
      const isActive = activeIds.has(ing.id);
      const tile = document.createElement('button');
      tile.type = 'button';
      tile.className = `ingredient-tile${isActive ? ' is-active' : ''}`;
      tile.style.setProperty('--ing-idx', String(ingIndex));
      tile.setAttribute('aria-pressed', String(isActive));
      tile.setAttribute(
        'aria-label',
        `${ing.name}, ${isActive ? 'seleccionado' : 'no seleccionado'}, ${
          ing.priceDelta > 0 ? `+${formatPrice(ing.priceDelta)}` : 'incluido'
        }`
      );

      tile.innerHTML = `
        <span class="ingredient-state-dot" aria-hidden="true">${isActive ? '−' : '+'}</span>
        <span class="ingredient-img-wrap">
          <img src="${ing.image}" alt="" referrerpolicy="no-referrer" />
        </span>
        <span class="ingredient-name">${ing.name}</span>
        <span class="ingredient-delta">${
          ing.priceDelta > 0 ? `+${formatPrice(ing.priceDelta)}` : isActive ? 'Incluido' : 'Sin coste'
        }</span>
      `;

      tile.addEventListener('click', () => toggleIngredient(dish, ing));
      el.ingredientsStrip.appendChild(tile);
    });
  };

  const getCartDishCount = () =>
    state.cart.items.reduce((sum, item) => sum + Math.max(0, item.qty), 0);

  const renderCartBadges = () => {
    const count = getCartDishCount();
    if (el.cartTopCount) {
      el.cartTopCount.textContent = String(count);
      el.cartTopCount.classList.toggle('is-empty', count === 0);
    }
    if (el.cartNavBadge) {
      el.cartNavBadge.textContent = String(count);
      el.cartNavBadge.classList.toggle('is-empty', count === 0);
    }
    if (el.sidebarCartCount) {
      el.sidebarCartCount.textContent = String(count);
    }
  };

  const renderBottomBar = () => {
    const screen = state.screen;

    const navTargets = [
      { btn: el.btnNavCarousel, screenName: 'carousel' },
      { btn: el.btnNavList, screenName: 'list' },
      { btn: el.btnNavCart, screenName: 'cart' },
    ];

    navTargets.forEach(({ btn, screenName }) => {
      if (!btn) return;
      const isActive = screen === screenName;
      btn.classList.toggle('is-active', isActive);
      if (isActive) {
        btn.setAttribute('aria-current', 'page');
      } else {
        btn.removeAttribute('aria-current');
      }
    });

    renderCartBadges();
  };

  const renderSidebar = () => {
    const dish = getActiveDish();
    const totalPrice = calculateDishPrice(dish);

    if (el.sidebarDishThumb) {
      el.sidebarDishThumb.src = dish.image;
      el.sidebarDishThumb.alt = dish.name;
    }
    if (el.sidebarDishName) el.sidebarDishName.textContent = dish.name;
    if (el.sidebarDishPrice) el.sidebarDishPrice.textContent = formatPrice(totalPrice);
    if (el.sidebarAllCount) el.sidebarAllCount.textContent = String(DISHES.length);
    if (el.sidebarCartCount) el.sidebarCartCount.textContent = String(getCartDishCount());
    if (el.sidebarFavCount) el.sidebarFavCount.textContent = String(state.favorites.size);
    if (el.sidebarOrdersCount) {
      el.sidebarOrdersCount.textContent = String(state.orderHistory.length);
    }

    el.sidebarNavButtons.forEach((btn) => {
      const targetScreen = btn.dataset.navScreen;
      const targetCategory = btn.dataset.navCategory;
      let isActive = false;

      if (btn.classList.contains('sidebar-cat-chip')) {
        isActive = state.screen === 'list' && state.activeCategory === targetCategory;
      } else if (targetScreen === 'list') {
        if (targetCategory === 'Favoritos') {
          isActive = state.screen === 'list' && state.activeCategory === 'Favoritos';
        } else {
          isActive = state.screen === 'list' && state.activeCategory !== 'Favoritos';
        }
      } else {
        isActive = state.screen === targetScreen;
      }

      btn.classList.toggle('is-active', isActive);
    });
  };

  const openSidebar = () => {
    if (state.sidebarOpen) return;
    state.sidebarOpen = true;
    renderSidebar();
    if (el.navSidebar) {
      el.navSidebar.classList.add('is-open');
      el.navSidebar.setAttribute('aria-hidden', 'false');
    }
    if (el.sidebarBackdrop) {
      el.sidebarBackdrop.classList.add('is-open');
      el.sidebarBackdrop.setAttribute('aria-hidden', 'false');
    }
    if (el.btnMenu) {
      el.btnMenu.setAttribute('aria-expanded', 'true');
    }
  };

  const closeSidebar = () => {
    if (!state.sidebarOpen) return;
    state.sidebarOpen = false;
    if (el.navSidebar) {
      el.navSidebar.classList.remove('is-open');
      el.navSidebar.setAttribute('aria-hidden', 'true');
    }
    if (el.sidebarBackdrop) {
      el.sidebarBackdrop.classList.remove('is-open');
      el.sidebarBackdrop.setAttribute('aria-hidden', 'true');
    }
    if (el.btnMenu) {
      el.btnMenu.setAttribute('aria-expanded', 'false');
    }
  };

  const toggleSidebar = () => {
    if (state.sidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  /* ========================================================================
     7. COORDINADOR DE PANTALLAS Y ACCIONES
     ======================================================================== */

  const setScreen = (nextScreen, options = {}) => {
    closeSidebar();

    if (state.screen !== nextScreen) {
      state.previousScreen = state.screen;
      state.screen = nextScreen;
    }

    const currentIdx = getDishIndex(state.activeDishId);
    if (state.screen === 'detail') {
      if (detailSpinDishIndex !== currentIdx) {
        if (detailSpinDishIndex !== null) {
          dishRotations[detailSpinDishIndex] -= DETAIL_ROTATION_STEP;
        }
        dishRotations[currentIdx] += DETAIL_ROTATION_STEP;
        detailSpinDishIndex = currentIdx;
      }
    } else if (detailSpinDishIndex !== null) {
      dishRotations[detailSpinDishIndex] -= DETAIL_ROTATION_STEP;
      detailSpinDishIndex = null;
    }

    el.shell.setAttribute('data-screen', state.screen);

    // Sincronizar aria-hidden para lectores de pantalla
    if (el.viewWelcome) {
      el.viewWelcome.setAttribute('aria-hidden', String(state.screen !== 'welcome'));
    }
    el.viewCarousel.setAttribute('aria-hidden', String(state.screen !== 'carousel'));
    el.viewDetail.setAttribute('aria-hidden', String(state.screen !== 'detail'));
    el.viewList.setAttribute('aria-hidden', String(state.screen !== 'list'));
    el.viewCustomize.setAttribute('aria-hidden', String(state.screen !== 'customize'));
    if (el.viewOrders) {
      el.viewOrders.setAttribute('aria-hidden', String(state.screen !== 'orders'));
    }
    if (el.viewCart) {
      el.viewCart.setAttribute('aria-hidden', String(state.screen !== 'cart'));
    }

    renderHeaderAndTabs();
    renderBottomBar();
    renderPlates(0);

    if (state.screen === 'carousel') {
      renderCarouselInfo(false);
    } else if (state.screen === 'detail') {
      if (el.detailScroll) el.detailScroll.scrollTop = 0;
      renderDetailView(Boolean(options.highlightPrice));
    } else if (state.screen === 'list') {
      renderFilterBar();
      renderListView();
      if (options.focusSearch) {
        setTimeout(() => el.searchInput.focus(), 220);
      }
    } else if (state.screen === 'customize') {
      renderCustomizeView();
    } else if (state.screen === 'orders') {
      renderOrdersView();
    } else if (state.screen === 'cart') {
      renderCartView();
    }

    renderSidebar();
  };

  const stepCarousel = (direction) => {
    if (state.screen !== 'carousel') return;
    const outgoingDish = getActiveDish();
    const nextDish = getWrappedDish(direction);
    state.activeDishId = nextDish.id;
    state.showPrep = false;
    renderPlates(direction);
    renderCarouselInfo(true, direction, outgoingDish);
    renderBottomBar();
    renderSidebar();
  };

  /* ========================================================================
     7B. SISTEMA DE PARTÍCULAS SUTIL EN CANVAS SOBRE EL PLATO HERO
     ======================================================================== */

  const particles = [];
  let particleRafId = null;

  const resizeParticleCanvas = () => {
    if (!el.heroParticles) return;
    const rect = el.heroParticles.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (rect.width > 0 && rect.height > 0) {
      el.heroParticles.width = Math.round(rect.width * dpr);
      el.heroParticles.height = Math.round(rect.height * dpr);
      el.heroParticles.dataset.dpr = String(dpr);
    }
  };

  window.addEventListener('resize', resizeParticleCanvas);

  const emitIngredientParticles = (isAdding = true) => {
    if (!el.heroParticles) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    resizeParticleCanvas();
    const dpr = parseFloat(el.heroParticles.dataset.dpr || '1');
    const width = el.heroParticles.width / dpr;
    const height = el.heroParticles.height / dpr;
    const cx = width * 0.5;
    const cy = height * 0.52;

    // Paleta brasa y bronce Carbunco (#B83A28, #A87C4F, #D49B63, #855D36)
    const palette = isAdding
      ? ['#B83A28', '#A87C4F', '#D49B63', '#855D36', '#E5B488']
      : ['#7B6B60', '#A87C4F', '#4D3E35'];

    const count = isAdding ? 26 : 12;

    for (let i = 0; i < count; i += 1) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.35;
      const spawnRadius = 56 + Math.random() * 58;
      const speed = (isAdding ? 0.55 : 0.35) + Math.random() * 0.95;

      particles.push({
        x: cx + Math.cos(angle) * spawnRadius,
        y: cy + Math.sin(angle) * spawnRadius,
        vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 0.3,
        vy: Math.sin(angle) * speed - 0.25 - Math.random() * 0.35,
        size: 1.8 + Math.random() * 2.6,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.04,
        alpha: 0.88,
        decay: 0.0085 + Math.random() * 0.007,
        color: palette[i % palette.length],
        shape: i % 3 === 0 ? 'leaf' : 'dot',
      });
    }

    if (!particleRafId) {
      const renderFrame = () => {
        const ctx = el.heroParticles.getContext('2d');
        const currentDpr = parseFloat(el.heroParticles.dataset.dpr || '1');
        ctx.save();
        ctx.setTransform(currentDpr, 0, 0, currentDpr, 0, 0);
        ctx.clearRect(0, 0, el.heroParticles.width / currentDpr, el.heroParticles.height / currentDpr);

        for (let i = particles.length - 1; i >= 0; i -= 1) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.985;
          p.vy *= 0.985;
          p.rotation += p.vRot;
          p.alpha -= p.decay;

          if (p.alpha <= 0.01) {
            particles.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = p.color;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);

          if (p.shape === 'leaf') {
            // Micro-escamas / hojuelas orgánicas sutiles
            ctx.beginPath();
            ctx.ellipse(0, 0, p.size * 1.45, p.size * 0.72, 0, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.beginPath();
            ctx.arc(0, 0, p.size, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }

        ctx.restore();

        if (particles.length > 0) {
          particleRafId = requestAnimationFrame(renderFrame);
        } else {
          particleRafId = null;
        }
      };

      particleRafId = requestAnimationFrame(renderFrame);
    }
  };

  const toggleIngredient = (dish, ingredient) => {
    const activeSet = state.selections[dish.id];
    const wasActive = activeSet.has(ingredient.id);

    if (wasActive) {
      activeSet.delete(ingredient.id);
      el.customizeFeedback.textContent = `${ingredient.name} retirado del plato.`;
      emitIngredientParticles(false);
    } else {
      activeSet.add(ingredient.id);
      el.customizeFeedback.textContent =
        ingredient.priceDelta > 0
          ? `${ingredient.name} añadido (+${formatPrice(ingredient.priceDelta)}).`
          : `${ingredient.name} incluido en el plato.`;
      emitIngredientParticles(true);
    }

    // Pulso visual suave en el aro del plato hero activo
    const activeSlot = plateSlots[getDishIndex(dish.id)];
    if (activeSlot) {
      activeSlot.classList.remove('is-pulsing');
      void activeSlot.offsetWidth;
      activeSlot.classList.add('is-pulsing');
    }

    renderCustomizeView();
    renderCarouselInfo(false);
    renderSidebar();
  };

  const toggleFavoriteActiveDish = () => {
    const dish = getActiveDish();
    if (state.favorites.has(dish.id)) {
      state.favorites.delete(dish.id);
      showToast(`Retirado de tu lista: ${dish.name}`);
    } else {
      state.favorites.add(dish.id);
      showToast(`Añadido a tu lista: ${dish.name}`);
    }
    renderHeaderAndTabs();
    renderDetailView(false);
    renderBottomBar();
    renderSidebar();
  };

  const toggleNotifyAlert = (dish) => {
    if (!dish) return;
    if (state.notifyAlerts.has(dish.id)) {
      state.notifyAlerts.delete(dish.id);
      showToast(`Alerta desactivada: ${dish.name}`);
    } else {
      state.notifyAlerts.add(dish.id);
      showToast(`Te avisaremos cuando vuelva: ${dish.name}`);
    }
    renderCarouselInfo(false);
    renderDetailView(false);
    renderListView();
  };

  const renderOrdersView = () => {
    if (!el.ordersList) return;
    el.ordersList.innerHTML = '';

    state.orderHistory.forEach((order) => {
      const dish = DISHES.find((d) => d.id === order.dishId) || DISHES[0];
      const chosenNames = dish.ingredients
        .filter((ing) => order.ingredientIds.includes(ing.id))
        .map((ing) => ing.name);
      const extrasSummary =
        chosenNames.length > 0 ? chosenNames.join(' · ') : 'Preparación clásica del menú';

      const card = document.createElement('article');
      card.className = `order-card${order.isLive ? ' is-recent' : ''}`;
      card.setAttribute('role', 'listitem');

      card.innerHTML = `
        <div class="order-card-top">
          <span class="order-code-date">${order.code} · ${order.dateLabel}</span>
          <span class="order-status-pill${order.isLive ? ' is-live' : ''}">${order.status}</span>
        </div>
        <div class="order-card-main">
          <img class="order-thumb" src="${dish.image}" alt="${dish.name}" referrerpolicy="no-referrer" />
          <div class="order-info">
            <h3 class="order-dish-name">${dish.name}</h3>
            <p class="order-extras-list">${extrasSummary}</p>
          </div>
        </div>
        <div class="order-card-bottom">
          <div class="order-price-wrap">
            <span class="order-price-label">Total del pedido</span>
            <span class="order-price-total">${formatPrice(order.total)}</span>
          </div>
          <div class="order-actions">
            <button type="button" class="order-inspect-btn">Ver plato</button>
            <button type="button" class="order-repeat-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 12A8 8 0 0 1 17.6 6.3L20 8.5M20 4V8.5H15.5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20 12A8 8 0 0 1 6.4 17.7L4 15.5M4 20V15.5H8.5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>Repetir pedido</span>
            </button>
          </div>
        </div>
      `;

      const inspectBtn = card.querySelector('.order-inspect-btn');
      const repeatBtn = card.querySelector('.order-repeat-btn');

      inspectBtn.addEventListener('click', () => {
        state.activeDishId = dish.id;
        state.selections[dish.id] = new Set(order.ingredientIds);
        state.showPrep = false;
        renderPlates(0);
        renderCarouselInfo(false);
        setScreen('detail');
      });

      repeatBtn.addEventListener('click', () => repeatOrder(order.id));

      el.ordersList.appendChild(card);
    });
  };

  const repeatOrder = (orderId) => {
    const order = state.orderHistory.find((o) => o.id === orderId);
    if (!order) return;
    const dish = DISHES.find((d) => d.id === order.dishId);
    if (!dish) return;

    if (dish.availability !== 'available') {
      state.notifyAlerts.add(dish.id);
      renderCarouselInfo(false);
      renderDetailView(false);
      renderListView();
      showToast(`${dish.name} no está disponible ahora. Aviso activado.`);
      return;
    }

    state.activeDishId = dish.id;
    state.selections[dish.id] = new Set(order.ingredientIds);
    const total = calculateDishPrice(dish);
    const nextNum = 2410 + state.orderHistory.length;

    state.orderHistory.forEach((existing) => {
      existing.isLive = false;
    });

    state.orderHistory.unshift({
      id: `ord-${nextNum}`,
      code: `#CB-${nextNum}`,
      dateLabel: 'Ahora mismo',
      status: 'En preparación',
      isLive: true,
      dishId: dish.id,
      ingredientIds: [...order.ingredientIds],
      total,
    });

    renderPlates(0);
    renderCarouselInfo(false);
    renderDetailView(false);
    renderOrdersView();
    renderSidebar();

    if (el.ordersList) {
      el.ordersList.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showToast(`Pedido repetido: ${dish.name} · ${formatPrice(total)}`);
  };

  /* ---- Carrito / Mi pedido ---- */

  const calculateCartLineUnitPrice = (item) => {
    const dish = DISHES.find((d) => d.id === item.dishId);
    if (!dish) return 0;
    const ingSet = new Set(item.ingredientIds || []);
    let extras = 0;
    dish.ingredients.forEach((ing) => {
      if (ingSet.has(ing.id) && ing.priceDelta > 0) {
        extras += ing.priceDelta;
      }
    });
    return dish.basePrice + extras;
  };

  const addDishToCart = (dish, customIngredientIds = null) => {
    if (!dish) return;
    if (dish.availability !== 'available') {
      state.notifyAlerts.add(dish.id);
      renderCarouselInfo(false);
      renderDetailView(false);
      renderListView();
      showToast(`${dish.name} no está disponible hoy. Aviso activado.`);
      return;
    }

    const chosenIds = customIngredientIds
      ? [...customIngredientIds]
      : [...(state.selections[dish.id] || new Set())];
    const key = [...chosenIds].sort().join('|');

    const existing = state.cart.items.find(
      (it) => it.dishId === dish.id && [...(it.ingredientIds || [])].sort().join('|') === key
    );

    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.items.push({
        dishId: dish.id,
        qty: 1,
        ingredientIds: chosenIds,
      });
    }

    state.cart.justOrderedCode = null;
    renderCartBadges();
    renderCartView();
    renderSidebar();
    showToast(`Añadido a tu pedido: ${dish.name}`);
  };

  const updateCartQty = (index, delta) => {
    const item = state.cart.items[index];
    if (!item) return;
    const dish = DISHES.find((d) => d.id === item.dishId);
    item.qty += delta;
    if (item.qty <= 0) {
      state.cart.items.splice(index, 1);
      if (dish) showToast(`Retirado del pedido: ${dish.name}`);
    }
    renderCartBadges();
    renderCartView();
    renderSidebar();
  };

  const toggleCartCombo = () => {
    state.cart.comboAdded = !state.cart.comboAdded;
    renderCartView();
    showToast(
      state.cart.comboAdded
        ? `Combo rápido añadido (+${formatPrice(COMBO_PRICE)})`
        : 'Combo rápido retirado'
    );
  };

  const setDeliveryMode = (mode) => {
    if (mode !== 'delivery' && mode !== 'pickup') return;
    state.cart.deliveryMode = mode;
    renderCartView();
  };

  const renderCartView = () => {
    if (!el.cartItemsList) return;

    const totalCount = getCartDishCount();
    const isEmpty = state.cart.items.length === 0;

    if (el.cartSubtitle) {
      if (isEmpty) {
        el.cartSubtitle.textContent = state.cart.justOrderedCode
          ? `Pedido ${state.cart.justOrderedCode} confirmado`
          : '0 platos · Añade platos desde el menú';
      } else {
        el.cartSubtitle.textContent = `${totalCount} ${
          totalCount === 1 ? 'plato · Listo para ordenar' : 'platos · Listos para ordenar'
        }`;
      }
    }

    el.cartItemsList.innerHTML = '';

    state.cart.items.forEach((item, index) => {
      const dish = DISHES.find((d) => d.id === item.dishId) || DISHES[0];
      const unitPrice = calculateCartLineUnitPrice(item);
      const lineTotal = unitPrice * item.qty;

      const defaultIds = dish.ingredients
        .filter((ing) => ing.defaultActive)
        .map((ing) => ing.id)
        .sort()
        .join('|');
      const itemKey = [...(item.ingredientIds || [])].sort().join('|');
      const chosenNames = dish.ingredients
        .filter((ing) => (item.ingredientIds || []).includes(ing.id))
        .map((ing) => ing.name);
      const extrasLine =
        itemKey !== defaultIds && chosenNames.length > 0
          ? `<span class="cart-item-extras">${chosenNames.join(' · ')}</span>`
          : '';

      const card = document.createElement('article');
      card.className = 'cart-item-card';
      card.setAttribute('role', 'listitem');

      card.innerHTML = `
        <button type="button" class="cart-item-thumb-btn" aria-label="Ver detalle de ${dish.name}">
          <img src="${dish.image}" alt="${dish.name}" referrerpolicy="no-referrer" />
        </button>
        <div class="cart-item-info">
          <button type="button" class="cart-item-title-btn">${dish.name}</button>
          <span class="cart-item-house">${dish.house}</span>
          ${extrasLine}
          <span class="cart-item-meta">
            <span class="stars-row" aria-hidden="true">${buildStarsMarkup(dish.rating)}</span>
            <span class="reviews-count">(${dish.reviews})</span>
          </span>
        </div>
        <div class="cart-item-right">
          <span class="cart-item-price">${formatPrice(lineTotal)}</span>
          <div class="cart-qty-stepper" aria-label="Cantidad de ${dish.name}">
            <button type="button" class="cart-qty-btn cart-qty-btn--minus" aria-label="Quitar uno">−</button>
            <span class="cart-qty-val">${item.qty}</span>
            <button type="button" class="cart-qty-btn cart-qty-btn--plus" aria-label="Añadir uno">+</button>
          </div>
        </div>
      `;

      const openDishDetail = () => {
        state.activeDishId = dish.id;
        if (item.ingredientIds) {
          state.selections[dish.id] = new Set(item.ingredientIds);
        }
        state.showPrep = false;
        renderPlates(0);
        renderCarouselInfo(false);
        setScreen('detail');
      };

      card.querySelector('.cart-item-thumb-btn').addEventListener('click', openDishDetail);
      card.querySelector('.cart-item-title-btn').addEventListener('click', openDishDetail);
      card.querySelector('.cart-qty-btn--minus').addEventListener('click', () => updateCartQty(index, -1));
      card.querySelector('.cart-qty-btn--plus').addEventListener('click', () => updateCartQty(index, 1));

      el.cartItemsList.appendChild(card);
    });

    if (el.cartEmpty) {
      el.cartEmpty.hidden = !isEmpty;
      if (isEmpty && el.cartEmptyTitle && el.cartEmptyDesc) {
        if (state.cart.justOrderedCode) {
          el.cartEmptyTitle.textContent = `¡Pedido ${state.cart.justOrderedCode} recibido!`;
          el.cartEmptyDesc.textContent =
            'Tu orden ya está en marcha en nuestra cocina. Puedes seguirla o repetirla desde el historial.';
        } else {
          el.cartEmptyTitle.textContent = 'Tu carrito está vacío';
          el.cartEmptyDesc.textContent =
            'Explora nuestra carta y añade tus platos favoritos de Carbunco.';
        }
      }
    }

    if (el.cartCheckoutSection) {
      el.cartCheckoutSection.hidden = isEmpty;
    }

    if (isEmpty) return;

    // Combo rápido
    if (el.cartComboCard && el.btnToggleCombo && el.comboToggleIcon) {
      el.cartComboCard.classList.toggle('is-added', state.cart.comboAdded);
      el.btnToggleCombo.setAttribute('aria-pressed', String(state.cart.comboAdded));
      el.btnToggleCombo.setAttribute(
        'aria-label',
        state.cart.comboAdded
          ? 'Quitar Combo rápido del pedido'
          : `Añadir Combo rápido por ${formatPrice(COMBO_PRICE)}`
      );
      el.comboToggleIcon.innerHTML = state.cart.comboAdded
        ? '<path d="M5.5 12.5L10 17L18.5 7.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />'
        : '<path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" />';
    }

    // Modo de entrega
    const isDelivery = state.cart.deliveryMode === 'delivery';
    if (el.btnDeliveryHome) {
      el.btnDeliveryHome.classList.toggle('is-active', isDelivery);
      el.btnDeliveryHome.setAttribute('aria-pressed', String(isDelivery));
    }
    if (el.btnDeliveryPickup) {
      el.btnDeliveryPickup.classList.toggle('is-active', !isDelivery);
      el.btnDeliveryPickup.setAttribute('aria-pressed', String(!isDelivery));
    }

    // Totales en USD ($)
    const itemsSubtotal = state.cart.items.reduce(
      (sum, it) => sum + calculateCartLineUnitPrice(it) * it.qty,
      0
    );
    const subtotal = itemsSubtotal + (state.cart.comboAdded ? COMBO_PRICE : 0);
    const deliveryFee = isDelivery ? DELIVERY_FEE : 0;
    const total = subtotal + deliveryFee;

    if (el.cartSubtotal) el.cartSubtotal.textContent = formatPrice(subtotal);
    if (el.cartDeliveryLabel) {
      el.cartDeliveryLabel.textContent = isDelivery ? 'Envío a domicilio' : 'Recoger en local';
    }
    if (el.cartDeliveryFee) {
      el.cartDeliveryFee.textContent = isDelivery ? formatPrice(deliveryFee) : 'Gratis ($0.00)';
    }
    if (el.cartTotal) el.cartTotal.textContent = formatPrice(total);
  };

  const checkoutCart = () => {
    if (state.cart.items.length === 0) return;

    const firstItem = state.cart.items[0];
    const itemsSubtotal = state.cart.items.reduce(
      (sum, it) => sum + calculateCartLineUnitPrice(it) * it.qty,
      0
    );
    const subtotal = itemsSubtotal + (state.cart.comboAdded ? COMBO_PRICE : 0);
    const isDelivery = state.cart.deliveryMode === 'delivery';
    const total = subtotal + (isDelivery ? DELIVERY_FEE : 0);
    const totalCount = getCartDishCount();

    const nextNum = 2410 + state.orderHistory.length;
    const code = `#CB-${nextNum}`;

    state.orderHistory.forEach((existing) => {
      existing.isLive = false;
    });

    state.orderHistory.unshift({
      id: `ord-${nextNum}`,
      code,
      dateLabel: `Ahora mismo · ${totalCount} ${totalCount === 1 ? 'plato' : 'platos'}${
        state.cart.comboAdded ? ' + Combo' : ''
      }`,
      status: isDelivery ? 'En preparación · Domicilio' : 'En preparación · Local',
      isLive: true,
      dishId: firstItem.dishId,
      ingredientIds: [...(firstItem.ingredientIds || [])],
      total,
    });

    state.cart.items = [];
    state.cart.comboAdded = false;
    state.cart.justOrderedCode = code;

    renderCartBadges();
    renderCartView();
    renderOrdersView();
    renderSidebar();
    showToast(`Pedido ${code} enviado · ${formatPrice(total)}`);
  };

  const confirmCustomization = () => {
    const dish = getActiveDish();
    const total = calculateDishPrice(dish);
    showToast(`Personalización guardada · ${formatPrice(total)}`);
    setScreen('detail', { highlightPrice: true });
  };

  /* ========================================================================
     8. GESTOS TÁCTILES (TOUCH EVENTS + POINTER) CON SEGUIMIENTO FLUIDO EN VIVO
     ======================================================================== */

  let dragActive = false;
  let startX = 0;
  let startY = 0;
  let deltaX = 0;
  let dragStartTime = 0;
  let isHorizontalSwipe = false;
  let suppressNextPlateClick = false;

  const SWIPE_VELOCITY_MAX_MS = 260;
  const SWIPE_FLICK_MIN_PX = 18;

  const lerp = (a, b, t) => a + (b - a) * t;

  const clearTitleInlineDragStyles = () => {
    if (el.carouselTitle && el.carouselTitleGhost) {
      el.carouselTitle.style.transition = '';
      el.carouselTitle.style.opacity = '';
      el.carouselTitle.style.transform = '';
      el.carouselTitle.style.filter = '';
      el.carouselTitleGhost.style.transition = '';
      el.carouselTitleGhost.style.opacity = '';
      el.carouselTitleGhost.style.transform = '';
      el.carouselTitleGhost.style.filter = '';
    }
  };

  const applyLiveDragFrame = (dx) => {
    deltaX = Math.max(-210, Math.min(210, dx));
    // progress en [-1, 1]: negativo al arrastrar a la izquierda (avanza hacia el plato siguiente)
    const progress = Math.max(-1, Math.min(1, deltaX / SWIPE_MAX_PX));
    const absP = Math.abs(progress);
    const dragDir = progress < 0 ? 1 : -1;

    // 1 y 2. Cada plato persistente sigue el dedo y gira proporcionalmente a CAROUSEL_ROTATION_STEP
    DISHES.forEach((_, i) => {
      const slot = plateSlots[i];
      const offset = getDishOffset(i);
      const fromPose = getCarouselPoseForOffset(offset);
      const shouldHoldOffscreen = (offset <= -2 && dragDir > 0) || (offset >= 2 && dragDir < 0);
      const toPose = shouldHoldOffscreen ? fromPose : getCarouselPoseForOffset(offset - dragDir);

      const x = lerp(fromPose.xPercent, toPose.xPercent, absP);
      const y = lerp(fromPose.yPx, toPose.yPx, absP);
      const scale = lerp(fromPose.scale, toPose.scale, absP);
      const opacity = lerp(fromPose.opacity, toPose.opacity, absP);
      const rotate = dishRotations[i] + progress * CAROUSEL_ROTATION_STEP;

      slot.style.transform = `translate3d(${x.toFixed(2)}%, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(4)}) rotate(${rotate.toFixed(2)}deg)`;
      slot.style.opacity = opacity.toFixed(3);
      slot.style.zIndex = String(
        offset === 0 || offset === dragDir ? (absP > 0.5 && offset === dragDir ? 10 : 8) : toPose.zIndex
      );
    });

    // 3. Fundido cruzado tipográfico en vivo mientras se arrastra el dedo
    if (el.carouselTitle && el.carouselTitleGhost) {
      const targetDish = progress < 0 ? getWrappedDish(1) : getWrappedDish(-1);
      el.carouselTitleGhost.innerHTML = `${targetDish.name}<span class="brand-ember-dot">.</span>`;
      el.carouselTitle.style.transition = 'none';
      el.carouselTitleGhost.style.transition = 'none';

      el.carouselTitle.style.opacity = String(Math.max(0, 1 - absP * 1.05));
      el.carouselTitle.style.transform = `translate3d(${progress * 24}px, 0, 0) scale(${1 - absP * 0.04})`;
      el.carouselTitle.style.filter = `blur(${(absP * 2.6).toFixed(2)}px)`;

      el.carouselTitleGhost.style.opacity = String(Math.min(1, absP * 1.05));
      el.carouselTitleGhost.style.transform = `translate3d(${(progress < 0 ? 1 - absP : -(1 - absP)) * 24}px, 0, 0) scale(${0.96 + absP * 0.04})`;
      el.carouselTitleGhost.style.filter = `blur(${((1 - absP) * 2.6).toFixed(2)}px)`;
    }
  };

  const beginGesture = (clientX, clientY) => {
    if (state.screen !== 'carousel' || state.sidebarOpen) return;
    dragActive = true;
    isHorizontalSwipe = false;
    startX = clientX;
    startY = clientY;
    deltaX = 0;
    dragStartTime = Date.now();
  };

  const moveGesture = (clientX, clientY, rawEvent) => {
    if (!dragActive || state.screen !== 'carousel') return;
    const dx = clientX - startX;
    const dy = clientY - startY;

    if (!isHorizontalSwipe) {
      if (Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(dy) * 1.05) {
        isHorizontalSwipe = true;
        if (el.plateTrack) el.plateTrack.classList.add('is-swiping');
        plateSlots.forEach((slot) => slot.classList.add('is-dragging'));
        if (el.carouselTitle && el.carouselTitleGhost) {
          el.carouselTitle.classList.remove('is-fading-in-right', 'is-fading-in-left');
          el.carouselTitleGhost.classList.remove('is-fading-out-left', 'is-fading-out-right');
        }
      } else if (Math.abs(dy) > 10 && Math.abs(dy) > Math.abs(dx) * 1.15) {
        // Desplazamiento vertical dominante: ceder control sin bloquear gestos verticales
        dragActive = false;
        return;
      }
    }

    if (isHorizontalSwipe) {
      if (rawEvent && rawEvent.cancelable) {
        rawEvent.preventDefault();
      }
      applyLiveDragFrame(dx);
    }
  };

  const endGesture = () => {
    if (!dragActive) return;
    dragActive = false;

    if (el.plateTrack) {
      el.plateTrack.classList.remove('is-swiping');
    }

    if (isHorizontalSwipe) {
      const finalDelta = deltaX;
      const elapsed = Math.max(1, Date.now() - dragStartTime);
      const isQuickFlickLeft = finalDelta <= -SWIPE_FLICK_MIN_PX && elapsed < SWIPE_VELOCITY_MAX_MS;
      const isQuickFlickRight = finalDelta >= SWIPE_FLICK_MIN_PX && elapsed < SWIPE_VELOCITY_MAX_MS;

      clearTitleInlineDragStyles();
      suppressNextPlateClick = true;
      setTimeout(() => {
        suppressNextPlateClick = false;
      }, 180);

      // Reactivar transiciones CSS desde el ángulo y posición exacta donde se soltó el dedo
      plateSlots.forEach((slot) => slot.classList.remove('is-dragging'));
      void el.plateTrack.offsetWidth;

      if (finalDelta <= -SWIPE_THRESHOLD_PX || isQuickFlickLeft) {
        stepCarousel(1);
      } else if (finalDelta >= SWIPE_THRESHOLD_PX || isQuickFlickRight) {
        stepCarousel(-1);
      } else {
        renderPlates(0);
      }
    }

    isHorizontalSwipe = false;
    deltaX = 0;
  };

  // Eventos táctiles nativos (Touch Events) para seguimiento directo del dedo en móvil
  el.plateTrack.addEventListener(
    'touchstart',
    (e) => {
      if (e.touches.length !== 1) return;
      beginGesture(e.touches[0].clientX, e.touches[0].clientY);
    },
    { passive: true }
  );

  window.addEventListener(
    'touchmove',
    (e) => {
      if (!dragActive || e.touches.length !== 1) return;
      moveGesture(e.touches[0].clientX, e.touches[0].clientY, e);
    },
    { passive: false }
  );

  window.addEventListener('touchend', endGesture);
  window.addEventListener('touchcancel', endGesture);

  // Soporte complementario con ratón en escritorio sin interferir con arrastre nativo de imágenes
  el.plateTrack.addEventListener('dragstart', (e) => e.preventDefault());

  el.plateTrack.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    beginGesture(e.clientX, e.clientY);
  });

  window.addEventListener('mousemove', (e) => {
    if (!dragActive) return;
    moveGesture(e.clientX, e.clientY, e);
  });

  window.addEventListener('mouseup', endGesture);
  window.addEventListener('blur', endGesture);

  /* ---- Gesto de deslizamiento vertical hacia abajo en vista Detalle para volver al carrusel ---- */

  const DETAIL_SWIPE_CLOSE_PX = 72;
  let detailDragActive = false;
  let detailStartX = 0;
  let detailStartY = 0;
  let detailDeltaY = 0;
  let detailStartTime = 0;
  let isDetailVerticalSwipe = false;

  const resetDetailDragVisuals = () => {
    if (el.viewDetail) {
      el.viewDetail.classList.remove('is-dragging');
      el.viewDetail.style.transform = '';
      el.viewDetail.style.opacity = '';
    }
    const activeSlot = plateSlots[getDishIndex(state.activeDishId)];
    if (activeSlot) {
      activeSlot.classList.remove('is-dragging');
    }
  };

  const applyDetailLiveDrag = (dy) => {
    detailDeltaY = Math.max(0, Math.min(240, dy));
    const progress = Math.min(1, detailDeltaY / 180);

    if (el.viewDetail) {
      el.viewDetail.style.transform = `translate3d(0, ${(detailDeltaY * 0.72).toFixed(1)}px, 0)`;
      el.viewDetail.style.opacity = String((1 - progress * 0.48).toFixed(3));
    }

    const idx = getDishIndex(state.activeDishId);
    const activeSlot = plateSlots[idx];
    if (activeSlot) {
      const x = lerp(49, 0, progress * 0.65);
      const y = lerp(-10, 0, progress * 0.65);
      const scale = lerp(1.02, 1, progress * 0.65);
      const rot = lerp(dishRotations[idx], dishRotations[idx] - DETAIL_ROTATION_STEP, progress * 0.65);
      activeSlot.style.transform = `translate3d(${x.toFixed(2)}%, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(4)}) rotate(${rot.toFixed(2)}deg)`;
    }
  };

  const beginDetailGesture = (clientX, clientY) => {
    if (state.screen !== 'detail') return;
    detailDragActive = true;
    isDetailVerticalSwipe = false;
    detailStartX = clientX;
    detailStartY = clientY;
    detailDeltaY = 0;
    detailStartTime = Date.now();
  };

  const moveDetailGesture = (clientX, clientY, rawEvent) => {
    if (!detailDragActive || state.screen !== 'detail') return;
    const dx = clientX - detailStartX;
    const dy = clientY - detailStartY;
    const scrollTop = el.detailScroll ? el.detailScroll.scrollTop : 0;

    if (!isDetailVerticalSwipe) {
      if (dy > 10 && Math.abs(dy) > Math.abs(dx) * 1.15 && scrollTop <= 2) {
        isDetailVerticalSwipe = true;
        if (el.viewDetail) el.viewDetail.classList.add('is-dragging');
        const activeSlot = plateSlots[getDishIndex(state.activeDishId)];
        if (activeSlot) activeSlot.classList.add('is-dragging');
      } else if (Math.abs(dy) > 10 && (dy < 0 || scrollTop > 2)) {
        // Desplazamiento normal del contenido: liberar el gesto de cierre
        detailDragActive = false;
        return;
      }
    }

    if (isDetailVerticalSwipe) {
      if (rawEvent && rawEvent.cancelable) {
        rawEvent.preventDefault();
      }
      applyDetailLiveDrag(dy);
    }
  };

  const endDetailGesture = () => {
    if (!detailDragActive) return;
    detailDragActive = false;

    if (isDetailVerticalSwipe) {
      const elapsed = Math.max(1, Date.now() - detailStartTime);
      const shouldClose =
        detailDeltaY >= DETAIL_SWIPE_CLOSE_PX || (detailDeltaY >= 34 && elapsed < 260);

      resetDetailDragVisuals();
      if (el.viewDetail) void el.viewDetail.offsetWidth;

      if (shouldClose) {
        setScreen('carousel');
      } else {
        renderPlates(0);
      }
    }

    isDetailVerticalSwipe = false;
    detailDeltaY = 0;
  };

  if (el.viewDetail) {
    el.viewDetail.addEventListener(
      'touchstart',
      (e) => {
        if (e.touches.length !== 1) return;
        beginDetailGesture(e.touches[0].clientX, e.touches[0].clientY);
      },
      { passive: true }
    );

    el.viewDetail.addEventListener('mousedown', (e) => {
      if (e.button !== 0 || e.target.closest('button')) return;
      beginDetailGesture(e.clientX, e.clientY);
    });
  }

  window.addEventListener(
    'touchmove',
    (e) => {
      if (!detailDragActive || e.touches.length !== 1) return;
      moveDetailGesture(e.touches[0].clientX, e.touches[0].clientY, e);
    },
    { passive: false }
  );

  window.addEventListener('touchend', endDetailGesture);
  window.addEventListener('touchcancel', endDetailGesture);

  window.addEventListener('mousemove', (e) => {
    if (!detailDragActive) return;
    moveDetailGesture(e.clientX, e.clientY, e);
  });

  window.addEventListener('mouseup', endDetailGesture);

  /* ========================================================================
     9. EVENTOS DE NAVEGACIÓN, BÚSQUEDA Y TECLADO
     ======================================================================== */

  // Bienvenida Carbunco
  if (el.btnWelcomeEnter) {
    el.btnWelcomeEnter.addEventListener('click', () => setScreen('carousel'));
  }
  if (el.btnWelcomeList) {
    el.btnWelcomeList.addEventListener('click', () => {
      state.activeCategory = 'Todos';
      setScreen('list');
    });
  }
  if (el.btnWelcomeCustomize) {
    el.btnWelcomeCustomize.addEventListener('click', () => setScreen('customize'));
  }

  // Cabecera, sidebar y pestañas
  el.btnMenu.addEventListener('click', toggleSidebar);

  if (el.btnCloseSidebar) {
    el.btnCloseSidebar.addEventListener('click', closeSidebar);
  }
  if (el.sidebarBackdrop) {
    el.sidebarBackdrop.addEventListener('click', closeSidebar);
  }

  el.sidebarNavButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetScreen = btn.dataset.navScreen;
      const targetCategory = btn.dataset.navCategory;
      if (targetScreen === 'list' && targetCategory) {
        state.activeCategory = targetCategory;
      }
      if (targetScreen) {
        setScreen(targetScreen);
      } else {
        closeSidebar();
      }
    });
  });

  // Gesto swipe hacia la izquierda para cerrar el sidebar en móvil
  if (el.navSidebar) {
    let sidebarStartX = 0;
    let sidebarStartY = 0;
    let sidebarTracking = false;

    el.navSidebar.addEventListener(
      'touchstart',
      (e) => {
        if (!state.sidebarOpen || e.touches.length !== 1) return;
        sidebarStartX = e.touches[0].clientX;
        sidebarStartY = e.touches[0].clientY;
        sidebarTracking = true;
      },
      { passive: true }
    );

    el.navSidebar.addEventListener(
      'touchend',
      (e) => {
        if (!sidebarTracking || e.changedTouches.length !== 1) return;
        sidebarTracking = false;
        const dx = e.changedTouches[0].clientX - sidebarStartX;
        const dy = e.changedTouches[0].clientY - sidebarStartY;
        if (dx < -48 && Math.abs(dx) > Math.abs(dy)) {
          closeSidebar();
        }
      },
      { passive: true }
    );
  }

  el.btnBrand.addEventListener('click', () => {
    if (state.screen === 'carousel') {
      setScreen('welcome');
    } else {
      setScreen('carousel');
    }
  });

  el.btnSaved.addEventListener('click', () => {
    state.activeCategory = 'Favoritos';
    setScreen('list');
  });

  if (el.btnCartTop) {
    el.btnCartTop.addEventListener('click', () => {
      state.cart.justOrderedCode = null;
      setScreen('cart');
    });
  }

  el.tabRecipes.addEventListener('click', () => {
    if (state.screen === 'customize') {
      setScreen(state.previousScreen === 'detail' ? 'detail' : 'carousel');
    } else if (state.screen === 'list') {
      setScreen('carousel');
    }
  });

  el.tabCustomize.addEventListener('click', () => {
    setScreen('customize');
  });

  // Controles carrusel
  el.btnPrevDish.addEventListener('click', () => stepCarousel(-1));
  el.btnNextDish.addEventListener('click', () => stepCarousel(1));
  el.btnOpenDetail.addEventListener('click', () => setScreen('detail'));
  if (el.btnNotifyDish) {
    el.btnNotifyDish.addEventListener('click', () => toggleNotifyAlert(getActiveDish()));
  }
  el.featuredHouseCard.addEventListener('click', () => {
    state.activeCategory = 'Todos';
    setScreen('list');
  });

  // Detalle
  el.btnDetailBack.addEventListener('click', () => setScreen('carousel'));
  if (el.btnDetailNotify) {
    el.btnDetailNotify.addEventListener('click', () => toggleNotifyAlert(getActiveDish()));
  }

  el.btnTogglePrep.addEventListener('click', () => {
    state.showPrep = !state.showPrep;
    el.btnTogglePrep.setAttribute('aria-expanded', String(state.showPrep));
    el.detailPrepPanel.hidden = !state.showPrep;
  });

  if (el.btnDetailAddCart) {
    el.btnDetailAddCart.addEventListener('click', () => addDishToCart(getActiveDish()));
  }
  el.btnFavoriteDetail.addEventListener('click', toggleFavoriteActiveDish);

  // Personalización
  el.btnConfirmCustomize.addEventListener('click', confirmCustomization);

  // Carrito / Mi pedido
  if (el.btnToggleCombo) {
    el.btnToggleCombo.addEventListener('click', toggleCartCombo);
  }
  if (el.btnDeliveryHome) {
    el.btnDeliveryHome.addEventListener('click', () => setDeliveryMode('delivery'));
  }
  if (el.btnDeliveryPickup) {
    el.btnDeliveryPickup.addEventListener('click', () => setDeliveryMode('pickup'));
  }
  if (el.btnDeliveryInfo) {
    el.btnDeliveryInfo.addEventListener('click', () =>
      showToast('Entrega térmica a domicilio en 25–35 min ($4.50) · Sin coste al recoger.')
    );
  }
  if (el.btnCheckout) {
    el.btnCheckout.addEventListener('click', checkoutCart);
  }
  if (el.btnCartBrowse) {
    el.btnCartBrowse.addEventListener('click', () => {
      state.activeCategory = 'Todos';
      setScreen('list');
    });
  }
  if (el.btnCartHistory) {
    el.btnCartHistory.addEventListener('click', () => setScreen('orders'));
  }

  // Búsqueda y ordenación en listado
  el.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderListView();
  });

  el.btnClearSearch.addEventListener('click', () => {
    state.searchQuery = '';
    el.searchInput.value = '';
    renderListView();
    el.searchInput.focus();
  });

  if (el.btnSortList) {
    const SORT_CYCLE = ['featured', 'rating', 'price-asc', 'price-desc'];
    const SORT_LABELS = {
      featured: 'Orden: Destacados de Carbunco',
      rating: 'Orden: Mejor puntuados',
      'price-asc': 'Orden: Precio de menor a mayor',
      'price-desc': 'Orden: Precio de mayor a menor',
    };

    el.btnSortList.addEventListener('click', () => {
      const nextIdx = (SORT_CYCLE.indexOf(state.sortBy) + 1) % SORT_CYCLE.length;
      state.sortBy = SORT_CYCLE[nextIdx];
      renderListView();
      showToast(SORT_LABELS[state.sortBy]);
    });
  }

  // Barra inferior de navegación directa
  if (el.btnNavCarousel) {
    el.btnNavCarousel.addEventListener('click', () => setScreen('carousel'));
  }

  if (el.btnSidebarActiveDish) {
    el.btnSidebarActiveDish.addEventListener('click', () => setScreen('detail'));
  }

  if (el.btnNavList) {
    el.btnNavList.addEventListener('click', () => {
      if (state.screen !== 'list') {
        state.activeCategory = 'Todos';
      }
      setScreen('list');
    });
  }

  if (el.btnNavCart) {
    el.btnNavCart.addEventListener('click', () => {
      state.cart.justOrderedCode = null;
      setScreen('cart');
    });
  }

  // Navegación por teclado (accesible sin interferir con campos de texto)
  window.addEventListener('keydown', (e) => {
    const isTyping =
      document.activeElement &&
      (document.activeElement.tagName === 'INPUT' ||
        document.activeElement.tagName === 'TEXTAREA');

    if (e.key === 'Escape') {
      if (state.sidebarOpen) {
        closeSidebar();
        return;
      }
      if (isTyping && state.searchQuery) {
        state.searchQuery = '';
        el.searchInput.value = '';
        renderListView();
        return;
      }
      if (state.screen === 'customize') {
        setScreen(state.previousScreen === 'detail' ? 'detail' : 'carousel');
      } else if (state.screen !== 'carousel' && state.screen !== 'welcome') {
        setScreen('carousel');
      }
      return;
    }

    if (isTyping || state.sidebarOpen) return;

    if (state.screen === 'welcome') {
      if (e.key === 'Enter' && document.activeElement === document.body) {
        e.preventDefault();
        setScreen('carousel');
      }
      return;
    }

    if (state.screen === 'carousel') {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        stepCarousel(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        stepCarousel(-1);
      } else if (e.key === 'Enter' && document.activeElement === document.body) {
        e.preventDefault();
        setScreen('detail');
      }
    }
  });

  /* ========================================================================
     10. RESILIENCIA DE IMÁGENES E INICIALIZACIÓN
     ======================================================================== */

  const FALLBACK_SVG =
    'data:image/svg+xml;charset=UTF-8,' +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#EAE3D8"/><circle cx="100" cy="100" r="64" fill="#F6F2EC" stroke="#CFC4B6" stroke-width="2"/><circle cx="100" cy="100" r="36" fill="none" stroke="#A87C4F" stroke-width="1.5" stroke-dasharray="4 4"/></svg>'
    );

  document.addEventListener(
    'error',
    (event) => {
      const target = event.target;
      if (target && target.tagName === 'IMG' && !target.dataset.fallbackApplied) {
        target.dataset.fallbackApplied = 'true';
        target.src = FALLBACK_SVG;
      }
    },
    true
  );

  renderPlates(0);
  renderCarouselInfo(false);
  renderDetailView(false);
  renderFilterBar();
  renderListView();
  renderOrdersView();
  renderCartView();
  renderHeaderAndTabs();
  renderBottomBar();
  renderSidebar();
  el.shell.setAttribute('data-screen', state.screen);
  if (el.viewWelcome) {
    el.viewWelcome.setAttribute('aria-hidden', String(state.screen !== 'welcome'));
  }
})();
