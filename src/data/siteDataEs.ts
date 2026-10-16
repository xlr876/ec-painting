import { siteData } from './siteData';

export const siteDataEs = {
  ...siteData,
  tagline: 'Servicios de preparación y renovación de apartamentos en Columbus',
  description:
    'Servicios de preparación, pintura, reparación de paneles de yeso y limpieza para apartamentos en Columbus, Ohio y comunidades cercanas. Más de 10 años atendiendo a administradores y propiedades de alquiler.',
  locale: 'es_US',
  serviceArea: 'Columbus, Ohio y comunidades cercanas',
  nav: [
    { label: 'Inicio', href: '/es/' },
    { label: 'Quiénes somos', href: '/es/about' },
    { label: 'Servicios', href: '/es/services' },
    { label: 'Contacto', href: '/es/contact' },
  ],
  services: [
    {
      title: 'Preparación y renovación de apartamentos',
      description:
        'Ayudamos a administradores, propietarios, comunidades de apartamentos y alquileres a dejar cada unidad limpia, renovada y lista para el próximo inquilino.',
    },
    {
      title: 'Reparaciones y mantenimiento',
      description:
        'Pintura interior y retoques, reparación y resane de paneles de yeso, reparación y reemplazo de pisos, mantenimiento general y listas de reparaciones pendientes.',
    },
    {
      title: 'Reemplazo de accesorios y herrajes',
      description:
        'Reemplazo de gabinetes de cocina, tocadores de baño, grifos y plomería de cocina y baño, persianas, accesorios y herrajes.',
    },
    {
      title: 'Limpieza y preparación de unidades',
      description:
        'Limpieza de entrada y salida, limpieza profunda, limpieza de cocinas y baños, pisos, zócalos y superficies interiores, vaciado de unidades, retiro de basura y escombros, limpieza final e inspecciones para dejar la unidad lista para mudarse.',
    },
  ],
  reviews: [],
  about: {
    story: [
      "Lenny's Painting & Drywall LLC se especializa en la preparación y renovación de apartamentos para administradores, propietarios, comunidades de apartamentos y propiedades de alquiler.",
      'Atendemos Columbus, Ohio y comunidades cercanas desde hace más de 10 años. Ofrecemos experiencia, calidad, confiabilidad y servicio profesional para preparar unidades para el próximo inquilino.',
    ],
    team: [],
  },
  trustItems: [
    { label: 'Columbus, Ohio y comunidades cercanas' },
    { label: 'Especialistas en preparación de apartamentos' },
    { label: 'Años atendiendo la zona', value: '10+' },
    { label: 'Experiencia • Calidad • Confiabilidad' },
  ],
  footerNav: [
    {
      title: 'Empresa',
      links: [
        { label: 'Quiénes somos', href: '/es/about' },
        { label: 'Servicios', href: '/es/services' },
      ],
    },
    {
      title: 'Ayuda',
      links: [
        { label: 'Contacto', href: '/es/contact' },
        { label: 'Privacidad', href: '/es/privacy' },
        { label: 'Términos', href: '/es/terms' },
      ],
    },
  ],
} as const;
