/**
 * Todo el copy de la landing en un solo lugar. Los campos marcados TODO son
 * huecos a llenar; el resto viene literal de Grettel_Manual_de_Marca.md.
 */

export const site = {
  nav: [
    { label: "Menú", href: "#menu" },
    { label: "Salsas", href: "#salsas" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Delivery", href: "#delivery" },
    { label: "Instagram", href: "#instagram" },
    { label: "Contacto", href: "#contacto" },
  ],

  header: {
    // "Orden en línea" es el único botón que queda visible cuando el header
    // se queda sin espacio (igual que "Explore" en el sitio de referencia).
    ctaOrder: { label: "Orden en línea", href: "#pedir" }, // TODO: link real de pedido (WhatsApp/Rappi/PedidosYa)
    ctaExplore: { label: "Explorar", href: "#menu" },
    ctaContact: { label: "Contacto", href: "#contacto" },
  },

  hero: {
    // TODO: video/foto de producto para el hero
  },

  intro: {
    statement: "Este cuento sí es verdad.",
    infoTitle: "Pedí por:",
    channels: [
      "Rappi", // TODO: confirmar horario/disponibilidad por canal
      "PedidosYa",
      "Instagram / TikTok",
    ],
  },

  carousel: {
    items: [
      {
        name: "Clásico",
        description: "Pretzel artesanal, horneado sin rodeos.",
      },
      {
        name: "Cheese",
        description: "Pretzel artesanal, horneado y cubierto con queso gratinado real.",
      },
      {
        name: "Cinnamon",
        description:
          "Pretzel artesanal, horneado, bañado en mantequilla y recubierto con canela y azúcar.",
      },
    ],
  },

  story: {
    eyebrow: "Todos aman",
    title: "un buen cuento",
    body: "TODO: adaptar el origen de la marca — Grettel nace inspirada en el origen alemán del pretzel y en el nombre propio de Grettel, referencia directa a la tradición germana del cuento de Hansel y Gretel.",
    cta: { label: "Conocé más", href: "#nosotros" },
  },

  delivery: {
    eyebrow: "Llevamos un poco de alegría",
    title: "a donde estés",
    body: "TODO: mensaje sobre cobertura de delivery en Arequipa — el negocio opera 100% por Rappi, PedidosYa y redes, sin local físico.",
    cta: { label: "Pedí ahora", href: "#pedir" },
  },

  sauces: {
    eyebrow: "Salsas",
    title: "Armá tu pretzel",
    body: "Elegí pretzel y salsa por separado, sin combos fijos. La primera salsa va sin costo adicional.",
    items: [
      { name: "Salsa de Oso", description: "Mostaza y miel." },
      { name: "Salsa de Jabalí", description: "Mostaza, miel y jalapeño." },
      { name: "Salsa de Búho", description: "Glaseado dulce." },
    ],
    cta: { label: "Ver menú completo", href: "#menu" },
  },

  instagram: {
    eyebrow: "Seguinos para más",
    handle: "@grettel", // TODO: confirmar handle real de Instagram
  },

  footer: {
    nav: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Menú", href: "#menu" },
      { label: "Salsas", href: "#salsas" },
      { label: "Delivery", href: "#delivery" },
      { label: "Instagram", href: "#instagram" },
      { label: "Contacto", href: "#contacto" },
    ],
    ctaRappi: { label: "Rappi", href: "#" }, // TODO
    ctaPedidosYa: { label: "PedidosYa", href: "#" }, // TODO
    legal: "© Grettel.",
    credit: "", // TODO
    privacy: { label: "Privacidad", href: "#" }, // TODO
  },
} as const;
