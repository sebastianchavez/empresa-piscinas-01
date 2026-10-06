/* ================================================================
   AQUAPOOL SPA — DATA MOCK
   Archivo central de datos. Edite aquí para personalizar el sitio.
   ================================================================ */

const COMPANY_INFO = {
  name: 'AquaPool SpA',
  tagline: 'Construcción y mantención de piscinas de alto estándar',
  description: 'Empresa chilena líder en diseño, construcción y mantención de piscinas residenciales y comerciales. Más de 15 años entregando soluciones acuáticas de excelencia.',
  phone: '+56 2 2345 6789',
  whatsapp: '+56 9 8765 4321',
  whatsappLink: 'https://wa.me/56987654321?text=Hola%20AquaPool%2C%20me%20gustaría%20una%20cotización',
  email: 'contacto@aquapool.cl',
  address: 'Av. Las Condes 1234, Of. 502',
  city: 'Las Condes, Santiago, Chile',
  hours: [
    { days: 'Lunes a Viernes', time: '09:00 - 19:00' },
    { days: 'Sábado', time: '10:00 - 14:00' },
    { days: 'Domingo', time: 'Cerrado' }
  ],
  founded: 2010,
  social: {
    instagram: 'https://instagram.com/aquapool.cl',
    facebook: 'https://facebook.com/aquapool.cl',
    youtube: 'https://youtube.com/@aquapool',
    linkedin: 'https://linkedin.com/company/aquapool'
  },
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.3265895234776!2d-70.5728!3d-33.4087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5fb0d6f0f9d%3A0x5b6e5e8b5b6e5e8b!2sAv.%20Las%20Condes%2C%20Las%20Condes%2C%20Chile!5e0!3m2!1ses!2scl!4v1700000000000'
};

const NAV_LINKS = [
  { label: 'Inicio', href: 'index.html', page: 'home' },
  { label: 'Sobre Nosotros', href: 'sobre-nosotros.html', page: 'about' },
  { label: 'Servicios', href: 'servicios.html', page: 'services' },
  { label: 'Galería', href: 'galeria.html', page: 'gallery' },
  { label: 'Precios', href: 'precios.html', page: 'pricing' },
  { label: 'Clases', href: 'horario-clases.html', page: 'classes' },
  { label: 'Contacto', href: 'contacto.html', page: 'contact' }
];

const HERO = {
  eyebrow: 'Piscinas de ensueño, realidad',
  title: 'Diseñamos y construimos la piscina de tus sueños',
  subtitle: 'Expertos en piscinas residenciales y comerciales con más de 15 años de experiencia. Calidad, diseño y servicio personalizado.',
  ctaPrimary: { label: 'Cotiza tu piscina', href: 'contacto.html' },
  ctaSecondary: { label: 'Ver servicios', href: 'servicios.html' },
  image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1920&q=80'
};

const SERVICES = [
  {
    id: 'construction',
    title: 'Construcción',
    description: 'Diseño y ejecución completa de piscinas residenciales y comerciales con tecnología de vanguardia.',
    icon: 'hammer',
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'maintenance',
    title: 'Mantención',
    description: 'Servicio periódico de limpieza, revisión química del agua y cuidado integral de tu piscina.',
    icon: 'tools',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cleaning',
    title: 'Limpieza profunda',
    description: 'Limpieza exhaustiva de paredes, fondo, filtros y sistemas para mantener tu piscina impecable.',
    icon: 'sparkles',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'repair',
    title: 'Reparación',
    description: 'Diagnóstico y reparación de filtraciones, bombas, motores y revestimientos.',
    icon: 'wrench',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'heating',
    title: 'Climatización',
    description: 'Sistemas de calefacción y bombas de calor para disfrutar tu piscina todo el año.',
    icon: 'thermometer',
    image: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'coating',
    title: 'Revestimiento',
    description: 'Renovación de pinturas, azulejos, vinilos y terminaciones premium.',
    icon: 'palette',
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lighting',
    title: 'Iluminación LED',
    description: 'Sistemas de iluminación subacuática RGB para crear ambientes únicos.',
    icon: 'bulb',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'equipment',
    title: 'Equipamiento',
    description: 'Venta e instalación de bombas, filtros, climatizadores y accesorios.',
    icon: 'cog',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'advisory',
    title: 'Asesoría',
    description: 'Consultoría técnica y diseño personalizado para tu espacio.',
    icon: 'chat',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80'
  }
];

const STATS = [
  { label: 'Años de experiencia', value: 15, suffix: '+' },
  { label: 'Piscinas construidas', value: 480, suffix: '+' },
  { label: 'Clientes activos', value: 320, suffix: '' },
  { label: 'Profesionales', value: 28, suffix: '' }
];

const PROJECTS = [
  {
    id: 1,
    title: 'Piscina residencial Las Condes',
    description: 'Diseño infinity con vista panorámica, climatizada.',
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=800&q=80',
    category: 'residential'
  },
  {
    id: 2,
    title: 'Piscina hotel boutique',
    description: 'Construcción integral para hotel 5 estrellas.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
    category: 'commercial'
  },
  {
    id: 3,
    title: 'Spa & piscina termal',
    description: 'Proyecto integral con sistema de autos hidrotermal.',
    image: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=800&q=80',
    category: 'spa'
  },
  {
    id: 4,
    title: 'Piscina familiar',
    description: 'Diseño mediterráneo con zona de descanso.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    category: 'residential'
  },
  {
    id: 5,
    title: 'Piscina deportiva',
    description: 'Semi-olímpica para centro deportivo.',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
    category: 'commercial'
  },
  {
    id: 6,
    title: 'Mantención integral',
    description: 'Servicio mensual residencial premium.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    category: 'maintenance'
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Carolina Méndez',
    role: 'Cliente residencial',
    avatar: 'https://i.pravatar.cc/150?img=47',
    text: 'Excelente trabajo. La piscina quedó tal como la soñamos. El equipo de AquaPool nos acompañó desde el diseño hasta la entrega, siempre profesionales.',
    rating: 5
  },
  {
    id: 2,
    name: 'Rodrigo Pérez',
    role: 'Gerente Hotel Boutique',
    avatar: 'https://i.pravatar.cc/150?img=12',
    text: 'Contratamos a AquaPool para nuestro hotel y el resultado fue espectacular. Cumplieron plazos y el servicio post-venta es de primer nivel.',
    rating: 5
  },
  {
    id: 3,
    name: 'María José Soto',
    role: 'Cliente residencial',
    avatar: 'https://i.pravatar.cc/150?img=45',
    text: 'La mantención mensual es impecable. Mi piscina siempre está perfecta y el agua cristalina. Muy recomendados.',
    rating: 5
  },
  {
    id: 4,
    name: 'Felipe Arancibia',
    role: 'Administrador condominio',
    avatar: 'https://i.pravatar.cc/150?img=33',
    text: 'Atienden nuestras 3 piscinas del condominio hace 4 años. Profesionalismo y respuesta rápida ante cualquier emergencia.',
    rating: 5
  }
];

const TEAM = [
  {
    id: 1,
    name: 'Andrés Figueroa',
    role: 'Director & Ingeniero',
    image: 'https://i.pravatar.cc/300?img=68',
    bio: '15 años de experiencia en construcción de piscinas.'
  },
  {
    id: 2,
    name: 'Valentina Rojas',
    role: 'Arquitecta Acuática',
    image: 'https://i.pravatar.cc/300?img=47',
    bio: 'Especialista en diseño y paisajismo.'
  },
  {
    id: 3,
    name: 'Cristián Muñoz',
    role: 'Jefe de Mantención',
    image: 'https://i.pravatar.cc/300?img=12',
    bio: 'Lidera el equipo técnico de servicio post-venta.'
  },
  {
    id: 4,
    name: 'Camila Vega',
    role: 'Atención al Cliente',
    image: 'https://i.pravatar.cc/300?img=45',
    bio: 'Coordinación y atención personalizada.'
  },
  {
    id: 5,
    name: 'Sebastián Torres',
    role: 'Ingeniero Hidráulico',
    image: 'https://i.pravatar.cc/300?img=33',
    bio: 'Sistemas de filtración y climatización.'
  }
];

const VALUES = [
  {
    title: 'Compromiso',
    description: 'Cumplimos los plazos y la calidad prometida en cada proyecto.',
    icon: 'shield'
  },
  {
    title: 'Excelencia',
    description: 'Materiales premium y mano de obra especializada.',
    icon: 'star'
  },
  {
    title: 'Innovación',
    description: 'Tecnología de punta en cada proyecto que emprendemos.',
    icon: 'sparkles'
  },
  {
    title: 'Servicio',
    description: 'Acompañamos a nuestros clientes más allá de la obra entregada.',
    icon: 'heart'
  }
];

const CERTIFICATIONS = [
  'ASOCIACIÓN CHILENA DE PISCINAS',
  'ISO 9001:2015',
  'NCH 4.200',
  'SERNAC CERTIFICADO',
  'MEJOR EMPRESA 2024'
];

const GALLERY_FILTERS = [
  { id: 'all', label: 'Todas' },
  { id: 'residential', label: 'Residencial' },
  { id: 'commercial', label: 'Comercial' },
  { id: 'maintenance', label: 'Mantención' }
];

const GALLERY_ITEMS = [
  { id: 1, src: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=80', category: 'residential', title: 'Piscina infinity', desc: 'Diseño moderno con vista panorámica.' },
  { id: 2, src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', category: 'commercial', title: 'Hotel 5 estrellas', desc: 'Piscina principal de hotel boutique.' },
  { id: 3, src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', category: 'residential', title: 'Piscina familiar', desc: 'Diseño mediterráneo.' },
  { id: 4, src: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80', category: 'maintenance', title: 'Mantención integral', desc: 'Servicio premium residencial.' },
  { id: 5, src: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1200&q=80', category: 'commercial', title: 'Spa termal', desc: 'Piscina climatizada con vista.' },
  { id: 6, src: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80', category: 'commercial', title: 'Piscina deportiva', desc: 'Semi-olímpica para gimnasio.' },
  { id: 7, src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80', category: 'residential', title: 'Iluminación LED', desc: 'Sistema RGB subacuático.' },
  { id: 8, src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80', category: 'maintenance', title: 'Limpieza profunda', desc: 'Servicio técnico completo.' },
  { id: 9, src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80', category: 'residential', title: 'Jacuzzi integrado', desc: 'Spa familiar con jacuzzi.' },
  { id: 10, src: 'https://images.unsplash.com/photo-1576675784201-0e142b423952?auto=format&fit=crop&w=1200&q=80', category: 'commercial', title: 'Condominio premium', desc: 'Piscina comunitaria.' },
  { id: 11, src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80', category: 'residential', title: 'Casa de verano', desc: 'Piscina rústica.' },
  { id: 12, src: 'https://images.unsplash.com/photo-1597598872933-aec1fe80ed3d?auto=format&fit=crop&w=1200&q=80', category: 'maintenance', title: 'Revestimiento vinílico', desc: 'Renovación completa.' }
];

const PRICING_PLANS = [
  {
    id: 'basic',
    name: 'Básico',
    description: 'Ideal para comenzar',
    monthly: 59990,
    annual: 599900,
    popular: false,
    features: [
      { text: 'Limpieza básica semanal', included: true },
      { text: 'Revisión química del agua', included: true },
      { text: '1 visita técnica mensual', included: true },
      { text: 'Reporte digital', included: true },
      { text: 'Atención de emergencia 24/7', included: false },
      { text: 'Suministro de productos', included: false },
      { text: 'Mantenimiento de equipos', included: false }
    ]
  },
  {
    id: 'pro',
    name: 'Profesional',
    description: 'El más solicitado',
    monthly: 99990,
    annual: 999900,
    popular: true,
    features: [
      { text: 'Limpieza profunda semanal', included: true },
      { text: 'Revisión química del agua', included: true },
      { text: '2 visitas técnicas mensuales', included: true },
      { text: 'Reporte digital', included: true },
      { text: 'Atención de emergencia 24/7', included: true },
      { text: 'Suministro de productos', included: true },
      { text: 'Mantenimiento de equipos', included: false }
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Servicio VIP total',
    monthly: 149990,
    annual: 1499900,
    popular: false,
    features: [
      { text: 'Limpieza profunda 2 veces/semana', included: true },
      { text: 'Revisión química diaria', included: true },
      { text: 'Visitas técnicas ilimitadas', included: true },
      { text: 'Reporte digital premium', included: true },
      { text: 'Atención de emergencia 24/7', included: true },
      { text: 'Suministro de productos premium', included: true },
      { text: 'Mantenimiento de equipos completo', included: true }
    ]
  }
];

const PRICING_EXTRAS = [
  { service: 'Construcción piscina residencial', from: 4500000, unit: 'proyecto' },
  { service: 'Construcción piscina comercial', from: 12000000, unit: 'proyecto' },
  { service: 'Cambio de revestimiento vinílico', from: 850000, unit: 'm²' },
  { service: 'Instalación climatizador', from: 1200000, unit: 'unidad' },
  { service: 'Sistema iluminación LED RGB', from: 450000, unit: 'proyecto' },
  { service: 'Limpieza profunda única', from: 75000, unit: 'visita' },
  { service: 'Diagnóstico y presupuesto', from: 25000, unit: 'visita' }
];

const FAQ = [
  {
    q: '¿Cuánto tiempo toma construir una piscina?',
    a: 'El plazo típico es 30 a 60 días hábiles dependiendo del tamaño, diseño y condiciones del terreno. Te entregamos un cronograma detallado al aprobar el proyecto.'
  },
  {
    q: '¿Qué garantía tienen sus trabajos?',
    a: 'Ofrecemos 5 años de garantía en estructura, 2 años en equipos y 1 año en revestimientos. Además contamos con servicio post-venta para resolver cualquier incidencia.'
  },
  {
    q: '¿Trabajan con financiamiento?',
    a: 'Sí, trabajamos con distintas entidades financieras y ofrecemos planes de pago flexibles. Consulta opciones directamente con nuestro equipo comercial.'
  },
  {
    q: '¿Atienden fuera de Santiago?',
    a: 'Sí, atendemos en todo Chile. Para proyectos fuera de la Región Metropolitana, considera gastos de traslado y estadía del equipo.'
  },
  {
    q: '¿Puedo contratar solo mantención sin haber construido con ustedes?',
    a: 'Por supuesto. Realizamos una evaluación técnica inicial sin costo para diagnosticar el estado de tu piscina y proponerte el mejor plan.'
  },
  {
    q: '¿Qué incluyen los productos químicos?',
    a: 'Cloro, algicida, regulador de pH y clarificador. Todos productos certificados y de primera línea. En el plan premium incluimos productos premium importados.'
  }
];

const CLASS_TYPES = [
  {
    id: 'kids',
    name: 'Natación infantil',
    description: 'Para niños de 4 a 12 años. Niveles básico, medio y avanzado.',
    color: 'cyan'
  },
  {
    id: 'adults',
    name: 'Natación adultos',
    description: 'Clases para adultos, todos los niveles. Desde cero hasta perfeccionamiento.',
    color: 'sky'
  },
  {
    id: 'hydrotherapy',
    name: 'Hidroterapia',
    description: 'Sesiones terapéuticas para adultos mayores o rehabilitación.',
    color: 'teal'
  },
  {
    id: 'aquagym',
    name: 'Aquagym',
    description: 'Entrenamiento aeróbico en el agua. Quema calorías sin impacto.',
    color: 'blue'
  },
  {
    id: 'freestyle',
    name: 'Nado libre',
    description: 'Acceso a piscina para entrenamiento personal o libre.',
    color: 'indigo'
  }
];

const INSTRUCTORS = [
  { name: 'Marcela Pérez', specialty: 'Natación infantil', image: 'https://i.pravatar.cc/300?img=49' },
  { name: 'José Antonio Silva', specialty: 'Entrenador deportivo', image: 'https://i.pravatar.cc/300?img=15' },
  { name: 'Carla Espinoza', specialty: 'Hidroterapia y aquagym', image: 'https://i.pravatar.cc/300?img=44' }
];

const WEEKLY_SCHEDULE = [
  {
    day: 'Lunes',
    slots: [
      { time: '08:00 - 09:00', class: 'Nado libre', instructor: 'Libre' },
      { time: '09:30 - 10:30', class: 'Natación infantil', instructor: 'Marcela Pérez' },
      { time: '17:00 - 18:00', class: 'Aquagym', instructor: 'Carla Espinoza' },
      { time: '19:00 - 20:00', class: 'Natación adultos', instructor: 'José A. Silva' }
    ]
  },
  {
    day: 'Martes',
    slots: [
      { time: '08:00 - 09:00', class: 'Nado libre', instructor: 'Libre' },
      { time: '10:00 - 11:00', class: 'Hidroterapia', instructor: 'Carla Espinoza' },
      { time: '17:00 - 18:00', class: 'Natación infantil', instructor: 'Marcela Pérez' },
      { time: '18:30 - 19:30', class: 'Natación adultos', instructor: 'José A. Silva' }
    ]
  },
  {
    day: 'Miércoles',
    slots: [
      { time: '08:00 - 09:00', class: 'Nado libre', instructor: 'Libre' },
      { time: '09:30 - 10:30', class: 'Natación infantil', instructor: 'Marcela Pérez' },
      { time: '17:00 - 18:00', class: 'Aquagym', instructor: 'Carla Espinoza' },
      { time: '19:00 - 20:00', class: 'Natación adultos', instructor: 'José A. Silva' }
    ]
  },
  {
    day: 'Jueves',
    slots: [
      { time: '08:00 - 09:00', class: 'Nado libre', instructor: 'Libre' },
      { time: '10:00 - 11:00', class: 'Hidroterapia', instructor: 'Carla Espinoza' },
      { time: '17:00 - 18:00', class: 'Natación infantil', instructor: 'Marcela Pérez' },
      { time: '18:30 - 19:30', class: 'Natación adultos', instructor: 'José A. Silva' }
    ]
  },
  {
    day: 'Viernes',
    slots: [
      { time: '08:00 - 09:00', class: 'Nado libre', instructor: 'Libre' },
      { time: '09:30 - 10:30', class: 'Natación infantil', instructor: 'Marcela Pérez' },
      { time: '17:00 - 18:00', class: 'Aquagym', instructor: 'Carla Espinoza' },
      { time: '18:00 - 19:00', class: 'Natación adultos', instructor: 'José A. Silva' }
    ]
  },
  {
    day: 'Sábado',
    slots: [
      { time: '09:00 - 10:00', class: 'Natación infantil', instructor: 'Marcela Pérez' },
      { time: '10:30 - 11:30', class: 'Nado libre', instructor: 'Libre' },
      { time: '12:00 - 13:00', class: 'Natación adultos', instructor: 'José A. Silva' }
    ]
  },
  {
    day: 'Domingo',
    slots: [
      { time: '10:00 - 12:00', class: 'Nado libre', instructor: 'Libre' }
    ]
  }
];

const PROCESS_STEPS = [
  { num: '01', title: 'Consulta inicial', desc: 'Conversamos sobre tu visión, necesidades y presupuesto.' },
  { num: '02', title: 'Diseño y cotización', desc: 'Elaboramos propuesta 3D y presupuesto detallado.' },
  { num: '03', title: 'Construcción', desc: 'Ejecutamos la construcción con materiales premium.' },
  { num: '04', title: 'Entrega y garantía', desc: 'Entregamos tu piscina con capacitación y garantía.' }
];

const FOOTER_LINKS = {
  services: [
    { label: 'Construcción', href: 'servicios.html' },
    { label: 'Mantención', href: 'servicios.html' },
    { label: 'Limpieza profunda', href: 'servicios.html' },
    { label: 'Reparación', href: 'servicios.html' },
    { label: 'Climatización', href: 'servicios.html' }
  ],
  company: [
    { label: 'Sobre nosotros', href: 'sobre-nosotros.html' },
    { label: 'Galería', href: 'galeria.html' },
    { label: 'Precios', href: 'precios.html' },
    { label: 'Clases', href: 'horario-clases.html' },
    { label: 'Contacto', href: 'contacto.html' }
  ],
  legal: [
    { label: 'Privacidad', href: 'privacidad.html' },
    { label: 'Términos', href: 'terminos.html' }
  ]
};

// Exposición global
window.AQUAPOOL_DATA = {
  COMPANY_INFO,
  NAV_LINKS,
  HERO,
  SERVICES,
  STATS,
  PROJECTS,
  TESTIMONIALS,
  TEAM,
  VALUES,
  CERTIFICATIONS,
  GALLERY_FILTERS,
  GALLERY_ITEMS,
  PRICING_PLANS,
  PRICING_EXTRAS,
  FAQ,
  CLASS_TYPES,
  INSTRUCTORS,
  WEEKLY_SCHEDULE,
  PROCESS_STEPS,
  FOOTER_LINKS
};