// Notarías de la Región de Tarapacá.
// Base: nómina oficial entregada por el Poder Judicial el 06/11/2026,
// con datos de contacto verificados en noviembre de 2026.
// "publico" es el nombre con que la notaría se identifica (por su notario titular).
// Si el cargo está vacante, se deja sin "publico" y se muestra el número oficial.
// "id" se usa para marcar las notarías de turno en data/turnos.js.
const NOTARIAS = [
  {
    id: "iqq1",
    publico: "Notaría Rodrigo González Barriga",
    nombre: "1ª Notaría de Iquique",
    notario: "Rodrigo Alejandro González Barriga",
    comuna: "Iquique",
    direccion: "Plaza Prat 650, Iquique",
    telefonos: ["+56572429576"],
    horario: "Lunes a viernes, 8:30 a 16:30",
    web: "https://notariagonzalez.cl/www/"
  },
  {
    id: "iqq2",
    publico: "Notaría Heidi Cavieres Araya",
    nombre: "2ª Notaría de Iquique",
    notario: "Heidi Patricia Cavieres Araya",
    comuna: "Iquique",
    direccion: "Simón Bolívar 202, local 2, Edificio Finanzas, Iquique",
    telefonos: ["+56985009233"],
    horario: "Lunes a viernes, 8:30 a 17:00",
    web: "https://notariacavieres.cl/"
  },
  {
    id: "iqq3",
    nombre: "3ª Notaría de Iquique",
    notario: "Cargo vacante (interino: Edwin Eduardo Riffo González)",
    comuna: "Iquique",
    direccion: "Serrano 386, Iquique",
    telefonos: [],
    horario: "Lunes a viernes, 9:00 a 17:15",
    web: "http://notariaaraya.cl/"
  },
  {
    id: "iqq4",
    publico: "Notaría Álvaro Meniconi Asfura",
    nombre: "4ª Notaría de Iquique",
    notario: "Álvaro Tomás Meniconi Asfura",
    comuna: "Iquique",
    direccion: "Aníbal Pinto 555, Iquique",
    telefonos: ["+56572842405", "+56572842407"],
    horario: "Lunes a viernes, 8:30 a 17:00",
    web: "https://notariaiquique.cl/"
  },
  {
    id: "iqq5",
    publico: "Notaría Darío Chacón Vicentelo",
    nombre: "5ª Notaría de Iquique",
    notario: "Darío Emigdio Chacón Vicentelo",
    comuna: "Iquique",
    direccion: "Baquedano 703 (esquina Thompson), Iquique",
    telefonos: ["+56572262522", "+56572262523"],
    horario: "Lunes a viernes, 9:00 a 17:00",
    web: "https://www.notariachacon.cl/"
  },
  {
    id: "iqq6",
    nombre: "6ª Notaría de Iquique",
    notario: "Cargo vacante (interino: David Antonio Toro Iglesias)",
    comuna: "Iquique",
    direccion: "Luis Uribe 330, Iquique",
    telefonos: [],
    horario: "Lunes a jueves, 9:00 a 18:00; viernes, 9:00 a 17:00",
    web: ""
  },
  {
    id: "ahosp",
    publico: "Notaría Paulo César Cortés Olguín",
    nombre: "Notaría de Alto Hospicio (7ª de Iquique)",
    notario: "Paulo César Cortés Olguín",
    comuna: "Alto Hospicio",
    direccion: "Av. La Pampa 3117, locales 4, 5 y 5-B, Alto Hospicio",
    telefonos: ["+56572721689"],
    horario: "Lunes a viernes, 9:00 a 17:00; sábado, 9:30 a 12:00",
    web: "https://notariaaltohospicio.cl/"
  },
  {
    id: "pozo",
    publico: "Notaría Angiello Cordano Carrizo",
    nombre: "Notaría de Pozo Almonte",
    notario: "Angiello Paolo Cordano Carrizo",
    comuna: "Pozo Almonte",
    direccion: "Buen Retiro 378, Pozo Almonte",
    telefonos: ["+56983380534"],
    horario: "Lunes, martes y viernes, 9:00 a 16:00; miércoles y jueves, 9:00 a 16:30",
    web: "https://notariapozoalmonte.cl/"
  }
];
