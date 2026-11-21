// Notarías de turno a nivel nacional, por mes. La clave es "AAAA-MM".
// Fuente: listado mensual de la Asociación de Notarios, Conservadores y Archiveros Judiciales de Chile.
// Los turnos corresponden a los sábados del mes.
// - "fecha" (opcional, "AAAA-MM-DD"): sábado específico del turno, cuando la ciudad rota por semana.
// - "id" (opcional): enlaza con una notaría de data/notarias.js para mostrar su teléfono.
// - "extra" (opcional): notarías autorizadas para abrir los sábados además de las de turno.
const TURNOS = {
  "2026-11": {
    fuente: "Turnos de notarías mes de noviembre 2026",
    regiones: [
      { region: "Arica y Parinacota", ciudades: [
        { ciudad: "Arica", horario: "10:00 a 12:30", notarias: [
          { nombre: "1ª Notaría de Arica", notario: "Óscar Patricio Soto Hernández", direccion: "Rafael Sotomayor N° 301, Arica" }
        ]}
      ]},
      { region: "Tarapacá", ciudades: [
        { ciudad: "Iquique y Alto Hospicio", horario: "9:00 a 13:00", notarias: [
          { id: "iqq5", nombre: "5ª Notaría de Iquique", notario: "Darío Chacón Vicentelo", direccion: "Baquedano N° 702, Iquique" },
          { id: "ahosp", nombre: "7ª Notaría de Iquique, con asiento en Alto Hospicio", notario: "Paulo César Cortés O.", direccion: "Pampa 3117, local 4, Alto Hospicio" }
        ]}
      ]},
      { region: "Antofagasta", ciudades: [
        { ciudad: "Antofagasta", horario: "9:00 a 13:00", notarias: [
          { nombre: "2ª Notaría de Antofagasta", notario: "Francisco Contreras Olivares (interino)", direccion: "Arturo Prat N° 470, local 3 interior, Antofagasta" }
        ]}
      ]},
      { region: "Atacama", ciudades: [
        { ciudad: "Copiapó", horario: "9:30 a 12:00", notarias: [
          { fecha: "2026-11-07", nombre: "4ª Notaría de Copiapó", notario: "Carlos Morales González (interino)", direccion: "Bernardo O'Higgins N° 555, Copiapó" },
          { fecha: "2026-11-14", nombre: "1ª Notaría de Copiapó", notario: "Francisco Nehme Carpanetti", direccion: "O'Higgins N° 744, Copiapó" },
          { fecha: "2026-11-21", nombre: "2ª Notaría de Copiapó", notario: "Luis Contreras Fuentes", direccion: "Colipí N° 320, Copiapó" },
          { fecha: "2026-11-28", nombre: "3ª Notaría de Copiapó", notario: "Gaby Hernández Soto", direccion: "Bernardo O'Higgins N° 770, Copiapó" }
        ]}
      ]},
      { region: "Coquimbo", ciudades: [
        { ciudad: "La Serena, Coquimbo y Ovalle", horario: "9:00 a 12:00", notarias: [
          { nombre: "6ª Notaría de La Serena", notario: "Alejandro Viada Ovalle", direccion: "Huanhualí N° 292, La Serena" },
          { nombre: "6ª Notaría (Coquimbo)", notario: "Patricio Gutiérrez Gajardo", direccion: "Pedro Aguirre Cerda N° 601, Coquimbo" },
          { nombre: "2ª Notaría de Ovalle", notario: "Rodrigo Cabrera Alberrán", direccion: "Miguel Aguirre Perry N° 328, Ovalle" }
        ]}
      ]},
      { region: "Valparaíso", ciudades: [
        { ciudad: "Valparaíso", horario: "10:00 a 13:00", notarias: [
          { nombre: "5ª Notaría de Valparaíso", notario: "Carlos Wendt (interino)", direccion: "Prat N° 856, Valparaíso" }
        ]},
        { ciudad: "Viña del Mar", horario: "9:00 a 12:00", notarias: [
          { nombre: "4ª Notaría de Viña del Mar", notario: "Paola Deborah Stack Lara", direccion: "Av. Libertad N° 901, Viña del Mar" }
        ]},
        { ciudad: "Villa Alemana", horario: "9:00 a 12:00", notarias: [
          { nombre: "1ª Notaría de Villa Alemana", notario: "Gloria Ordóñez Cortés", direccion: "Buenos Aires N° 663, local 1, Villa Alemana" }
        ]},
        { ciudad: "Quintero", horario: "9:30 a 12:00", notarias: [
          { nombre: "Notaría de Quintero", notario: "Gustavo Jeanneret M.", direccion: "Av. Normandie N° 2041, Quintero" }
        ]},
        { ciudad: "Limache", horario: "9:30 a 12:00", notarias: [
          { nombre: "1ª Notaría de Limache", notario: "David del Fierro C.", direccion: "Av. Palmira Romana Sur N° 2041, 405-A, locales 28 A y 29, Paseo Araucaria, Limache" }
        ]},
        { ciudad: "Olmué", horario: "10:00 a 13:00", notarias: [
          { nombre: "2ª Notaría de Limache, con asiento en Olmué", notario: "Juan Pablo Espinoza S.", direccion: "Av. Prat N° 4900, oficina B, Olmué" }
        ]}
      ]},
      { region: "Metropolitana", ciudades: [
        { ciudad: "Santiago (jurisdicción Corte de Apelaciones de Santiago)", horario: "9:00 a 12:00", notarias: [
          { nombre: "29ª Notaría de Santiago", notario: "Evaldo Rehbein U.", direccion: "Mac Iver N° 225, oficina 302, Santiago Centro" },
          { nombre: "25ª Notaría de Santiago", notario: "Zaida Sepúlveda R. (interina)", direccion: "Amunátegui N° 361, local 6, Edificio YMCA, Santiago Centro" },
          { nombre: "1ª Notaría de Las Condes", notario: "Lilia Sierra Mejía", direccion: "Av. Apoquindo N° 4943, Las Condes" },
          { nombre: "1ª Notaría de Ñuñoa", notario: "Eduardo Rocco C.", direccion: "Irarrázaval N° 1745, Ñuñoa" },
          { nombre: "1ª Notaría de Quinta Normal", notario: "Luis Cartagena (interino)", direccion: "Av. Tobalaba N° 1469, Providencia" },
          { nombre: "2ª Notaría de Peñalolén", notario: "Guillermo Solar P.", direccion: "Av. Quilín N° 5283, Peñalolén" }
        ], extraTitulo: "Autorizadas por la Corte de Apelaciones de Santiago para abrir los sábados, además de las de turno", extra: [
          { nombre: "1ª Notaría de Providencia", notario: "Eduardo Rodríguez B.", direccion: "Av. Providencia 1777, Providencia" },
          { nombre: "3ª Notaría de Vitacura", notario: "Gloria Ortiz C.", direccion: "Av. Vitacura N° 6471, Vitacura" },
          { nombre: "1ª Notaría de Peñalolén", notario: "Pedro Parra A.", direccion: "Av. Grecia N° 5616, piso 2, Peñalolén" },
          { nombre: "1ª Notaría de Cerrillos", notario: "Felipe Finalteri B.", direccion: "Av. Pedro Aguirre Cerda N° 6087-A, piso 2, Cerrillos" },
          { nombre: "1ª Notaría de Pudahuel", notario: "Soledad Farr Tapia", direccion: "San Pablo N° 6070, Pudahuel" },
          { nombre: "1ª Notaría de Lo Prado", notario: "Rodrigo Aravena G.", direccion: "Av. Neptuno N° 810-D, Lo Prado" },
          { nombre: "1ª Notaría de Cerro Navia", notario: "Fabián del Solar Soto", direccion: "José Joaquín Pérez N° 6658, local 9, Lo Prado" }
        ]},
        { ciudad: "San Miguel (jurisdicción Corte de Apelaciones de San Miguel)", horario: "10:00 a 13:00", notarias: [
          { nombre: "5ª Notaría de San Miguel", notario: "Eduardo Fuenzalida Robledo", direccion: "Gran Avenida N° 4410, San Miguel" },
          { nombre: "1ª Notaría de La Cisterna", notario: "Jorge Ossa Cuevas", direccion: "Gran Avenida N° 7710, paradero 20, La Cisterna" },
          { nombre: "1ª Notaría de La Granja", notario: "Paula Guerrero Cortés (interina)", direccion: "Av. Santa Rosa N° 7976-A, La Granja" }
        ], extraTitulo: "Abiertas los sábados de 9:00 a 13:00", extra: [
          { nombre: "1ª Notaría de San Joaquín", notario: "Boris Aravena E.", direccion: "Vicuña Mackenna N° 3125, San Joaquín" },
          { nombre: "7ª Notaría de San Miguel", notario: "Alejandra Ugalde C.", direccion: "Santa Elena N° 2236, San Joaquín (ex sucursal Banco Santander)" }
        ]},
        { ciudad: "Puente Alto", horario: "9:00 a 13:00", notarias: [
          { fecha: "2026-11-07", nombre: "6ª Notaría de Puente Alto", notario: "Raimundo Wood E.", direccion: "Sergio Roubillard N° 66, Puente Alto" },
          { fecha: "2026-11-14", nombre: "1ª Notaría de Puente Alto", notario: "Tomás Tiznado M. (interino)", direccion: "Manuel Rodríguez N° 53, locales 115 y 205, Puente Alto" },
          { fecha: "2026-11-21", nombre: "2ª Notaría de Puente Alto", notario: "Mabel Llano Díaz", direccion: "José Luis Coo N° 0187, Puente Alto" },
          { fecha: "2026-11-28", nombre: "3ª Notaría de Puente Alto", notario: "Gonzalo Cortés Yakcich (interino)", direccion: "Balmaceda N° 403, Puente Alto" }
        ]}
      ]},
      { region: "O'Higgins", ciudades: [
        { ciudad: "Rancagua", horario: "9:00 a 12:30", notarias: [
          { nombre: "1ª Notaría de Rancagua", notario: "Gerardo Carvallo Castillo", direccion: "Campos N° 466, Rancagua" }
        ]}
      ]},
      { region: "Maule", ciudades: [
        { ciudad: "Talca", horario: "10:00 a 12:00", notarias: [
          { fecha: "2026-11-07", nombre: "3ª Notaría de Talca", notario: "Angelita Hormazábal Alegría", direccion: "1 Sur N° 925, Talca" },
          { fecha: "2026-11-14", nombre: "4ª Notaría de Talca", notario: "Jaime Andrés Silva Sciberras", direccion: "1 Norte N° 902, Talca" },
          { fecha: "2026-11-21", nombre: "5ª Notaría de Talca", notario: "Teodoro Durán Palma", direccion: "1 Norte N° 888, Talca" },
          { fecha: "2026-11-28", nombre: "7ª Notaría de Talca", notario: "Pablo Almendras Burgos (interino)", direccion: "30 Oriente N° 1528, local A, Talca" }
        ]},
        { ciudad: "Longaví", horario: "9:00 a 12:00 (turno solo notaría)", notarias: [
          { nombre: "Notaría de Longaví", notario: "Ricardo Sánchez Valdés", direccion: "Calle Cuatro Norte N° 153, Longaví" }
        ]}
      ]},
      { region: "Ñuble", ciudades: [
        { ciudad: "Chillán", horario: "10:00 a 12:30", notarias: [
          { nombre: "3ª Notaría de Chillán", notario: "Juan Bustos Bonniard", direccion: "Arauco N° 620, Chillán" }
        ]},
        { ciudad: "San Carlos", horario: "9:00 a 12:00", notarias: [
          { nombre: "1ª Notaría de San Carlos", notario: "Rodrigo Irribarra Salazar (interino)", direccion: "Vicuña Mackenna N° 529, San Carlos" }
        ]},
        { ciudad: "Yungay y Tucapel", horario: "9:00 a 12:00", notarias: [
          { nombre: "1ª Notaría de Yungay", notario: "Guillermo Rossemblatt Pradenas", direccion: "Arturo Prat N° 289, Yungay" }
        ]}
      ]},
      { region: "Biobío", ciudades: [
        { ciudad: "Concepción", horario: "10:00 a 12:30", notarias: [
          { nombre: "4ª Notaría de Concepción", notario: "Heraclio Rojas Vergara", direccion: "O'Higgins N° 820, Concepción" }
        ]},
        { ciudad: "San Pedro de la Paz", horario: "9:30 a 12:30", notarias: [
          { nombre: "Notaría de San Pedro de la Paz", notario: "Rodrigo Rojas Castillo", direccion: "Av. Michimalongo N° 1015, San Pedro de la Paz" }
        ]},
        { ciudad: "Penco", horario: "10:00 a 12:00", notarias: [
          { nombre: "10ª Notaría (Penco)", notario: "Fernando Saenger (interino)", direccion: "Penco N° 150, Penco" }
        ]},
        { ciudad: "Talcahuano", horario: "10:00 a 12:00", notarias: [
          { nombre: "2ª Notaría de Talcahuano", notario: "Gastón Santibáñez Torres", direccion: "J. Alessandri N° 3177, local G-103, Mall El Trébol, Talcahuano" }
        ]},
        { ciudad: "Coronel", horario: "10:00 a 12:30", notarias: [
          { nombre: "2ª Notaría de Coronel", notario: "Víctor Toledo Machuca", direccion: "Cochrane N° 130, piso 2, Coronel" }
        ]},
        { ciudad: "Los Ángeles", horario: "9:00 a 13:00", notarias: [
          { nombre: "2ª Notaría de Los Ángeles", notario: "Orlando Cantuarias Costa", direccion: "Lautaro N° 279, Los Ángeles" },
          { nombre: "1ª Notaría de Los Ángeles", notario: "Gonzalo Ali Arcas (interino)", direccion: "Lautaro N° 352, locales 4 y 5, Los Ángeles" }
        ]}
      ]},
      { region: "La Araucanía", ciudades: [
        { ciudad: "Angol", horario: "10:30 a 12:30", notarias: [
          { fecha: "2026-11-07", nombre: "1ª Notaría de Angol", notario: "Carlos Fuentes Cáceres", direccion: "Arturo Prat N° 155, Angol" },
          { fecha: "2026-11-14", nombre: "2ª Notaría de Angol", notario: "Charles de la Harpe Palma", direccion: "Manuel Bunster N° 341, Angol" },
          { fecha: "2026-11-21", nombre: "1ª Notaría de Angol", notario: "Carlos Fuentes Cáceres", direccion: "Arturo Prat N° 155, Angol" },
          { fecha: "2026-11-28", nombre: "2ª Notaría de Angol", notario: "Charles de la Harpe Palma", direccion: "Manuel Bunster N° 341, Angol" }
        ]},
        { ciudad: "Temuco", horario: "9:00 a 12:00", notarias: [
          { nombre: "3ª Notaría de Temuco", notario: "Daniela Abarzúa Fernández (interina)", direccion: "Arturo Prat N° 815, Temuco" }
        ]}
      ]},
      { region: "Los Ríos", ciudades: [
        { ciudad: "Valdivia", horario: "10:00 a 12:30", notarias: [
          { fecha: "2026-11-07", nombre: "1ª Notaría de Valdivia", notario: "Pablo Valenzuela P.", direccion: "Independencia N° 625, Valdivia" },
          { fecha: "2026-11-14", nombre: "2ª Notaría de Valdivia", notario: "Elizabeth Pacheco C.", direccion: "San Carlos N° 159, local 3, Valdivia" },
          { fecha: "2026-11-21", nombre: "3ª Notaría de Valdivia", notario: "Osvaldo Salgado C. (interino)", direccion: "Independencia N° 548, Valdivia" },
          { fecha: "2026-11-28", nombre: "4ª Notaría de Valdivia", notario: "Juan Rodríguez Ruíz", direccion: "Camilo Henríquez N° 540, local 3, Valdivia" }
        ]}
      ]},
      { region: "Los Lagos", ciudades: [
        { ciudad: "Osorno", horario: "10:00 a 12:30", notarias: [
          { nombre: "3ª Notaría de Osorno", notario: "Abdallah Fernández Atuez", direccion: "Av. Juan Mackenna N° 871, oficina 102, Osorno" }
        ]},
        { ciudad: "Puerto Montt", horario: "10:00 a 12:00", notarias: [
          { fecha: "2026-11-07", nombre: "5ª Notaría de Puerto Montt", notario: "Lebby Barría G.", direccion: "Pedro Montt N° 180, Puerto Montt" },
          { fecha: "2026-11-14", nombre: "6ª Notaría de Puerto Montt", notario: "Juan Carlos Cabezas C.", direccion: "Av. Presidente Ibáñez N° 280, Puerto Montt" },
          { fecha: "2026-11-21", nombre: "1ª Notaría de Puerto Montt", notario: "Hernán Gómez B. (interino)", direccion: "Benavente N° 385, esquina San Martín, Puerto Montt" },
          { fecha: "2026-11-28", nombre: "2ª Notaría de Puerto Montt", notario: "Felipe San Martín S.", direccion: "Urmeneta N° 414, Puerto Montt" }
        ]}
      ]},
      { region: "Aysén", ciudades: [
        { ciudad: "Coyhaique", horario: "9:00 a 12:00", notarias: [
          { nombre: "1ª Notaría de Coyhaique", notario: "Matías Rand González", direccion: "21 de Mayo N° 551, Coyhaique" }
        ]}
      ]},
      { region: "Magallanes", ciudades: [
        { ciudad: "Punta Arenas", horario: "10:00 a 12:00", notarias: [
          { nombre: "3ª Notaría de Punta Arenas", notario: "Cristián Matus Cuevas", direccion: "Lautaro Navarro N° 1048, Punta Arenas" }
        ]}
      ]}
    ]
  }
};
