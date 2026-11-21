// Avisos que aparecen en la pantalla de inicio.
// Formato de fecha: "AAAA-MM-DD". "hasta" es opcional: el aviso deja de mostrarse después de esa fecha.
const AVISOS = [
  {
    fecha: "2026-11-21",
    titulo: "Bienvenido a Procurando",
    texto: "Ya están disponibles la Guía de tribunales y la Guía de notarías de la Región de Tarapacá. Abre el menú para verlas.",
    hasta: "2026-12-31"
  }
];

// Feriados legales próximos (se muestra el siguiente a la fecha de hoy).
const FERIADOS = [
  { fecha: "2026-12-08", nombre: "Inmaculada Concepción" },
  { fecha: "2026-12-25", nombre: "Navidad" },
  { fecha: "2027-01-01", nombre: "Año Nuevo" }
];
