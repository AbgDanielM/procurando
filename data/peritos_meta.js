// Índice de la Guía de peritos: Cortes de Apelaciones disponibles y áreas.
// Los peritos de cada Corte están en data/peritos/<corte>.json (se cargan al elegir la Corte).
// Fuente: nóminas de peritos judiciales publicadas por cada Corte de Apelaciones en el sitio del Poder Judicial.
const PERITOS_META = {
 "cortes": [
  {
   "corte": "Arica",
   "archivo": "arica",
   "peritos": 1636,
   "fuente": "Nómina de peritos aceptados, bienio 2025-2026"
  },
  {
   "corte": "Iquique",
   "archivo": "iquique",
   "peritos": 1792,
   "fuente": "Nominados aprobados por el pleno, actualizada al 07/09/2026"
  },
  {
   "corte": "Antofagasta",
   "archivo": "antofagasta",
   "peritos": 1785,
   "fuente": "Nómina de peritos bienio 2026-2027"
  },
  {
   "corte": "Copiapó",
   "archivo": "copiapo",
   "peritos": 1515,
   "fuente": "Nominados bienio 2026-2027, actualizado"
  },
  {
   "corte": "La Serena",
   "archivo": "la-serena",
   "peritos": 2091,
   "fuente": "Peritos nominados 2026-2027 (versión del 16/11/2026)"
  },
  {
   "corte": "Valparaíso",
   "archivo": "valparaiso",
   "peritos": 3202,
   "fuente": "Nómina de peritos al 24/09/2026"
  },
  {
   "corte": "Santiago",
   "archivo": "santiago",
   "peritos": 4697,
   "fuente": "Listado de peritos al 19/11/2026"
  },
  {
   "corte": "San Miguel",
   "archivo": "san-miguel",
   "peritos": 2775,
   "fuente": "Nómina de peritos judiciales bienio 2026-2027"
  },
  {
   "corte": "Rancagua",
   "archivo": "rancagua",
   "peritos": 2865,
   "fuente": "Peritos bienio 2026-2027"
  },
  {
   "corte": "Talca",
   "archivo": "talca",
   "peritos": 2164,
   "fuente": "Lista de peritos 2026-2027"
  },
  {
   "corte": "Chillán",
   "archivo": "chillan",
   "peritos": 2228,
   "fuente": "Listado de peritos bienio 2026-2027"
  },
  {
   "corte": "Concepción",
   "archivo": "concepcion",
   "peritos": 2447,
   "fuente": "Nómina de peritos (865-2025)"
  },
  {
   "corte": "Temuco",
   "archivo": "temuco",
   "peritos": 2264,
   "fuente": "Listado de peritos bienio 2026, actualizado al 16/11/2026"
  },
  {
   "corte": "Valdivia",
   "archivo": "valdivia",
   "peritos": 2282,
   "fuente": "Postulaciones aprobadas por la Corte Suprema"
  },
  {
   "corte": "Puerto Montt",
   "archivo": "puerto-montt",
   "peritos": 2133,
   "fuente": "Nómina de peritos 2026-2027 al 09/09/2026"
  },
  {
   "corte": "Coyhaique",
   "archivo": "coyhaique",
   "peritos": 1692,
   "fuente": "Nómina al 08/09/2026"
  },
  {
   "corte": "Punta Arenas",
   "archivo": "punta-arenas",
   "peritos": 1400,
   "fuente": "Peritos nominados bienio 2026-2027, aprobada por la Corte Suprema (acta 14/07/2026)"
  }
 ],
 "areas": [
  {
   "id": "psico",
   "nombre": "Psicología y ciencias sociales"
  },
  {
   "id": "salud",
   "nombre": "Salud y medicina"
  },
  {
   "id": "conta",
   "nombre": "Contabilidad, finanzas y empresas"
  },
  {
   "id": "tasa",
   "nombre": "Tasaciones"
  },
  {
   "id": "const",
   "nombre": "Construcción, arquitectura e ingeniería civil"
  },
  {
   "id": "topo",
   "nombre": "Topografía y geomensura"
  },
  {
   "id": "agro",
   "nombre": "Agro, ciencias y medio ambiente"
  },
  {
   "id": "crimi",
   "nombre": "Criminalística y ciencias forenses"
  },
  {
   "id": "trans",
   "nombre": "Tránsito, transporte y mecánica"
  },
  {
   "id": "riesgo",
   "nombre": "Prevención de riesgos y seguridad"
  },
  {
   "id": "tec",
   "nombre": "Informática y tecnología"
  },
  {
   "id": "idioma",
   "nombre": "Traducción e interpretación"
  },
  {
   "id": "arte",
   "nombre": "Arte, diseño y comunicación"
  },
  {
   "id": "dere",
   "nombre": "Derecho"
  },
  {
   "id": "otros",
   "nombre": "Otras especialidades"
  }
 ]
};
