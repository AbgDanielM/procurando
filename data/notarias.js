// Notarías de Chile, por región.
// Base: nómina oficial entregada por el Poder Judicial el 06/11/2026 (solicitud de transparencia NR001T0012098),
// con datos de contacto verificados en noviembre de 2026 (directorio publicado por FirmaVirtual).
// "publico" es el nombre con que la notaría se identifica (por su notario titular).
// Si el cargo está vacante, se deja sin "publico" y se muestra el número oficial.
// "id" se usa para enlazar con las notarías de turno (data/turnos.js).
const NOTARIAS = [
  {
    "region": "Tarapacá",
    "id": "iqq1",
    "publico": "Notaría Rodrigo González Barriga",
    "nombre": "1ª Notaría de Iquique",
    "notario": "Rodrigo Alejandro González Barriga",
    "comuna": "Iquique",
    "direccion": "Plaza Prat 650, Iquique",
    "telefonos": [
      "+56572429576"
    ],
    "horario": "Lunes a viernes, 8:30 a 16:30",
    "web": "https://notariagonzalez.cl/www/"
  },
  {
    "region": "Tarapacá",
    "id": "iqq2",
    "publico": "Notaría Heidi Cavieres Araya",
    "nombre": "2ª Notaría de Iquique",
    "notario": "Heidi Patricia Cavieres Araya",
    "comuna": "Iquique",
    "direccion": "Simón Bolívar 202, local 2, Edificio Finanzas, Iquique",
    "telefonos": [
      "+56985009233"
    ],
    "horario": "Lunes a viernes, 8:30 a 17:00",
    "web": "https://notariacavieres.cl/"
  },
  {
    "region": "Tarapacá",
    "id": "iqq3",
    "nombre": "3ª Notaría de Iquique",
    "notario": "Cargo vacante (interino: Edwin Eduardo Riffo González)",
    "comuna": "Iquique",
    "direccion": "Serrano 386, Iquique",
    "telefonos": [],
    "horario": "Lunes a viernes, 9:00 a 17:15",
    "web": "http://notariaaraya.cl/"
  },
  {
    "region": "Tarapacá",
    "id": "iqq4",
    "publico": "Notaría Álvaro Meniconi Asfura",
    "nombre": "4ª Notaría de Iquique",
    "notario": "Álvaro Tomás Meniconi Asfura",
    "comuna": "Iquique",
    "direccion": "Aníbal Pinto 555, Iquique",
    "telefonos": [
      "+56572842405",
      "+56572842407"
    ],
    "horario": "Lunes a viernes, 8:30 a 17:00",
    "web": "https://notariaiquique.cl/"
  },
  {
    "region": "Tarapacá",
    "id": "iqq5",
    "publico": "Notaría Darío Chacón Vicentelo",
    "nombre": "5ª Notaría de Iquique",
    "notario": "Darío Emigdio Chacón Vicentelo",
    "comuna": "Iquique",
    "direccion": "Baquedano 703 (esquina Thompson), Iquique",
    "telefonos": [
      "+56572262522",
      "+56572262523"
    ],
    "horario": "Lunes a viernes, 9:00 a 17:00",
    "web": "https://www.notariachacon.cl/"
  },
  {
    "region": "Tarapacá",
    "id": "iqq6",
    "nombre": "6ª Notaría de Iquique",
    "notario": "Cargo vacante (interino: David Antonio Toro Iglesias)",
    "comuna": "Iquique",
    "direccion": "Luis Uribe 330, Iquique",
    "telefonos": [],
    "horario": "Lunes a jueves, 9:00 a 18:00; viernes, 9:00 a 17:00",
    "web": ""
  },
  {
    "region": "Tarapacá",
    "id": "ahosp",
    "publico": "Notaría Paulo César Cortés Olguín",
    "nombre": "Notaría de Alto Hospicio (7ª de Iquique)",
    "notario": "Paulo César Cortés Olguín",
    "comuna": "Alto Hospicio",
    "direccion": "Av. La Pampa 3117, locales 4, 5 y 5-B, Alto Hospicio",
    "telefonos": [
      "+56572721689"
    ],
    "horario": "Lunes a viernes, 9:00 a 17:00; sábado, 9:30 a 12:00",
    "web": "https://notariaaltohospicio.cl/"
  },
  {
    "region": "Tarapacá",
    "id": "pozo",
    "publico": "Notaría Angiello Cordano Carrizo",
    "nombre": "Notaría de Pozo Almonte",
    "notario": "Angiello Paolo Cordano Carrizo",
    "comuna": "Pozo Almonte",
    "direccion": "Buen Retiro 378, Pozo Almonte",
    "telefonos": [
      "+56983380534"
    ],
    "horario": "Lunes, martes y viernes, 9:00 a 16:00; miércoles y jueves, 9:00 a 16:30",
    "web": "https://notariapozoalmonte.cl/"
  },
  {
    "id": "1-notaria-de-arica",
    "region": "Arica y Parinacota",
    "nombre": "1ª Notaría de Arica",
    "notario": "Rodrigo Fernando Lazcano Arriagada",
    "comuna": "Arica",
    "direccion": "Bolognesi 360, Arica",
    "telefonos": [
      "+56582395983"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 16:00 a 18:00; sábado de turno (febrero, junio, octubre) 09:00 a 13:00",
    "web": "",
    "publico": "Notaría Rodrigo Fernando Lazcano Arriagada"
  },
  {
    "id": "2-notaria-de-arica",
    "region": "Arica y Parinacota",
    "nombre": "2ª Notaría de Arica",
    "notario": "Cargo vacante (Interino: Mario Ivar Palma Sotomayor)",
    "comuna": "Arica",
    "direccion": "21 de Mayo 252, Arica",
    "telefonos": [],
    "horario": "Lunes, miércoles y viernes 09:00 a 17:00; martes y jueves 09:00 a 18:00; sábado de turno (enero, mayo, septiembre) 9:00 a 13:00",
    "web": ""
  },
  {
    "id": "3-notaria-de-arica",
    "region": "Arica y Parinacota",
    "nombre": "3ª Notaría de Arica",
    "notario": "Oscar Patricio Soto Hernández",
    "comuna": "Arica",
    "direccion": "Rafael Sotomayor 301, Arica",
    "telefonos": [
      "+56223172165"
    ],
    "horario": "Lunes a miércoles 09:00-17:00; jueves 09:00-16:30; viernes 09:00-15:30; sábado 09:00-12:30",
    "web": "",
    "publico": "Notaría Oscar Patricio Soto Hernández"
  },
  {
    "id": "4-notaria-de-arica",
    "region": "Arica y Parinacota",
    "nombre": "4ª Notaría de Arica",
    "notario": "Cargo vacante (Interino: Hugo Humberto Vilches Fuentes)",
    "comuna": "Arica",
    "direccion": "Chacabuco 375, Arica",
    "telefonos": [
      "+56582370709"
    ],
    "horario": "Lunes a viernes 09:00-17:30; sábados de turno (abril, agosto, diciembre) 09:30-13:30",
    "web": ""
  },
  {
    "id": "1-notaria-de-antofagasta",
    "region": "Antofagasta",
    "nombre": "1ª Notaría de Antofagasta",
    "notario": "Cargo vacante (Interina: Carolina Andrea Leiva Pérez)",
    "comuna": "Antofagasta",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "2-notaria-y-conservador-de-minas-de-antofagasta",
    "region": "Antofagasta",
    "nombre": "2ª Notaría y Conservador de Minas de Antofagasta",
    "notario": "Cargo vacante (Interino: Francisco José Contreras Olivares)",
    "comuna": "Antofagasta",
    "direccion": "Jorge Washington 2653, Antofagasta",
    "telefonos": [
      "+56961173442",
      "+56961123672"
    ],
    "horario": "Lunes a viernes 09:00 a 17:00",
    "web": ""
  },
  {
    "id": "3-notaria-de-antofagasta",
    "region": "Antofagasta",
    "nombre": "3ª Notaría de Antofagasta",
    "notario": "Gonzalo Martin Hurtado Peralta",
    "comuna": "Antofagasta",
    "direccion": "Almte. Juan José Latorre 2398, Antofagasta",
    "telefonos": [
      "+56552267672",
      "+56552228105",
      "+56954222551"
    ],
    "horario": "Lunes a viernes 08:30-14:00 y 15:00-18:00; turno marzo y septiembre: sábado 09:30-13:30",
    "web": "",
    "publico": "Notaría Gonzalo Martin Hurtado Peralta"
  },
  {
    "id": "4-notaria-de-antofagasta",
    "region": "Antofagasta",
    "nombre": "4ª Notaría de Antofagasta",
    "notario": "Juan Santiago Treuer Moya",
    "comuna": "Antofagasta",
    "direccion": "Almirante Juan José Latorre 2441, Antofagasta",
    "telefonos": [
      "+56553330262",
      "+56553330161"
    ],
    "horario": "Lunes a jueves 09:00 a 17:45; viernes 08:30 a 15:30",
    "web": "",
    "publico": "Notaría Juan Santiago Treuer Moya"
  },
  {
    "id": "5-notaria-de-antofagasta",
    "region": "Antofagasta",
    "nombre": "5ª Notaría de Antofagasta",
    "notario": "Carlos Felipe Urbina Reszczynski",
    "comuna": "Antofagasta",
    "direccion": "Condell 2330 (entre Maipú y Uribe), Antofagasta",
    "telefonos": [
      "+56552266927"
    ],
    "horario": "Lunes, martes, jueves y viernes 08:30-18:00; miércoles 08:30-15:00; turno febrero y agosto: sábados 09:00-13:00",
    "web": "",
    "publico": "Notaría Carlos Felipe Urbina Reszczynski"
  },
  {
    "id": "6-notaria-de-antofagasta",
    "region": "Antofagasta",
    "nombre": "6ª Notaría de Antofagasta",
    "notario": "Francisco Armando de Jesús Martínez Torres",
    "comuna": "Antofagasta",
    "direccion": "Prat 482, local 102, Antofagasta",
    "telefonos": [
      "+56552896550",
      "+56552897325"
    ],
    "horario": "Lunes a viernes 08:30 a 14:00 y 15:00 a 17:30; sábado de turno 09:00 a 13:40",
    "web": "",
    "publico": "Notaría Francisco Armando de Jesús Martínez Torres"
  },
  {
    "id": "7-notaria-de-antofagasta-con-asiento-en-sierra-gorda",
    "region": "Antofagasta",
    "nombre": "7ª Notaría de Antofagasta con asiento en Sierra Gorda",
    "notario": "Cargo vacante (Interino: Jose Victorino Gajardo Alcayaga)",
    "comuna": "Sierra Gorda",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "notaria-conservador-y-archivero-de-mejillones",
    "region": "Antofagasta",
    "nombre": "Notaría, Conservador y Archivero de Mejillones",
    "notario": "Diego Nicolás Mejías Larraín",
    "comuna": "Mejillones",
    "direccion": "Av. Almirante Juan José Latorre 520, Mejillones",
    "telefonos": [
      "+56956278561",
      "+56958654725"
    ],
    "horario": "Lunes a viernes 09:00-14:00 y 15:00-17:30",
    "web": "",
    "publico": "Notaría Diego Nicolás Mejías Larraín"
  },
  {
    "id": "notaria-conservador-y-archivero-de-taltal",
    "region": "Antofagasta",
    "nombre": "Notaría, Conservador y Archivero de Taltal",
    "notario": "Pablo Andrés Sánchez Paredes",
    "comuna": "Taltal",
    "direccion": "Serrano 744, Taltal",
    "telefonos": [
      "+56233657550",
      "+56979554072"
    ],
    "horario": "Lunes a jueves 08:30 a 13:30 y 15:00 a 17:00; viernes 08:00 a 15:00",
    "web": "",
    "publico": "Notaría Pablo Andrés Sánchez Paredes"
  },
  {
    "id": "notaria-conservador-y-archivero-de-tocopilla",
    "region": "Antofagasta",
    "nombre": "Notaría, Conservador y Archivero de Tocopilla",
    "notario": "Cargo vacante (Interina: Andrea Ivonne Godoy Muñoz)",
    "comuna": "Tocopilla",
    "direccion": "Colón 1277-1281, Tocopilla",
    "telefonos": [
      "+56552603461"
    ],
    "horario": "Lunes a jueves 09:00-17:00; viernes 09:00-16:00",
    "web": ""
  },
  {
    "id": "notaria-y-conservador-de-maria-elena",
    "region": "Antofagasta",
    "nombre": "Notaría y Conservador de María Elena",
    "notario": "Mauricio Andrés Abarca Lagos",
    "comuna": "María Elena",
    "direccion": "Av. O'Higgins 267, María Elena",
    "telefonos": [
      "+56982565741"
    ],
    "horario": "Lunes a viernes 08:45 a 15:45",
    "web": "",
    "publico": "Notaría Mauricio Andrés Abarca Lagos"
  },
  {
    "id": "1-notaria-de-calama",
    "region": "Antofagasta",
    "nombre": "1ª Notaría de Calama",
    "notario": "Miguelángel Enrique Jiménez Segura",
    "comuna": "Calama",
    "direccion": "Vicuña Mackenna 2139, Calama",
    "telefonos": [
      "+56951342863"
    ],
    "horario": "Lunes a jueves 9:00 a 17:45; viernes 09:00 a 16:30",
    "web": "",
    "publico": "Notaría Miguelángel Enrique Jiménez Segura"
  },
  {
    "id": "2-notaria-y-conservador-de-minas-de-calama",
    "region": "Antofagasta",
    "nombre": "2ª Notaría y Conservador de Minas de Calama",
    "notario": "Cargo vacante (Interino: Cristóbal Ignacio Ly Vallotton)",
    "comuna": "Calama",
    "direccion": "Sotomayor 1961, Calama",
    "telefonos": [
      "+56225045038"
    ],
    "horario": "Lunes a jueves 09:00 a 17:00; viernes 09:00 a 16:00",
    "web": ""
  },
  {
    "id": "3-notaria-de-calama",
    "region": "Antofagasta",
    "nombre": "3ª Notaría de Calama",
    "notario": "Cargo vacante (Interino: Hector Mauricio Pinto Ramos)",
    "comuna": "Calama",
    "direccion": "Vargas 2209, Calama",
    "telefonos": [
      "+56934224333"
    ],
    "horario": "Lunes a viernes 09:00-17:00",
    "web": ""
  },
  {
    "id": "4-notaria-de-calama",
    "region": "Antofagasta",
    "nombre": "4ª Notaría de Calama",
    "notario": "Gonzalo Heber Neira Novoa",
    "comuna": "Calama",
    "direccion": "Av. Balmaceda 1750, oficinas 1 y 2, Edificio Torre Cobre, Calama",
    "telefonos": [
      "+56552592508"
    ],
    "horario": "Lunes a viernes 09:00-17:00; sábados de turno 10:00-14:00",
    "web": "",
    "publico": "Notaría Gonzalo Heber Neira Novoa"
  },
  {
    "id": "5-notaria-de-calama-con-asiento-en-san-pedro-de-atacama",
    "region": "Antofagasta",
    "nombre": "5ª Notaría de Calama con asiento en San Pedro de Atacama",
    "notario": "Gisela Ariadne Schwerter Huaquin",
    "comuna": "San Pedro de Atacama",
    "direccion": "Gustavo Le Paige 530, población Conde Duque, San Pedro de Atacama",
    "telefonos": [
      "+56996423355"
    ],
    "horario": "",
    "web": "",
    "publico": "Notaría Gisela Ariadne Schwerter Huaquin"
  },
  {
    "id": "1-notaria-de-copiapo",
    "region": "Atacama",
    "nombre": "1ª Notaría de Copiapó",
    "notario": "Claudio Francisco Nehme Carpanetti",
    "comuna": "Copiapó",
    "direccion": "Bernardo O'Higgins 744, Copiapó",
    "telefonos": [
      "+56522231184"
    ],
    "horario": "Lunes a jueves 09:00-17:00; viernes 09:00-16:00; sábados de turno 09:30-12:30",
    "web": "",
    "publico": "Notaría Claudio Francisco Nehme Carpanetti"
  },
  {
    "id": "2-notaria-y-conservador-de-minas-de-copiapo",
    "region": "Atacama",
    "nombre": "2ª Notaría y Conservador de Minas de Copiapó",
    "notario": "Luis Alberto Contreras Fuentes",
    "comuna": "Copiapó",
    "direccion": "Colipí 320, Copiapó",
    "telefonos": [
      "+56512599557"
    ],
    "horario": "Lunes a viernes 08:00 a 16:00 continuado; sábados de turno 09:30 a 12:00",
    "web": "",
    "publico": "Notaría Luis Alberto Contreras Fuentes"
  },
  {
    "id": "3-notaria-de-copiapo",
    "region": "Atacama",
    "nombre": "3ª Notaría de Copiapó",
    "notario": "Gaby Soledad Hernández Soto",
    "comuna": "Copiapó",
    "direccion": "Bernardo O'Higgins 770, Copiapó",
    "telefonos": [
      "+56522243199",
      "+56522438253"
    ],
    "horario": "Lunes a viernes 8:45 a 16:15 continuado",
    "web": "",
    "publico": "Notaría Gaby Soledad Hernández Soto"
  },
  {
    "id": "4-notaria-de-copiapo",
    "region": "Atacama",
    "nombre": "4ª Notaría de Copiapó",
    "notario": "Cargo vacante (Interino: Carlos Enrique Morales González)",
    "comuna": "Copiapó",
    "direccion": "Bernardo O'Higgins 555, Copiapó",
    "telefonos": [
      "+56986177711"
    ],
    "horario": "Lunes a jueves 09:00-17:00; viernes 09:00-16:00; sábado de turno 09:30-12:30",
    "web": ""
  },
  {
    "id": "5-notaria-de-copiapo-con-asiento-en-tierra-amarilla",
    "region": "Atacama",
    "nombre": "5ª Notaría de Copiapó con asiento en Tierra Amarilla",
    "notario": "Andrés Carlos Zavala Courriol",
    "comuna": "Tierra Amarilla",
    "direccion": "Miguel Lemeur 438-C, Tierra Amarilla",
    "telefonos": [
      "+56522264831",
      "+56967392712"
    ],
    "horario": "Lunes a jueves 09:00-17:00; viernes 09:00-16:00",
    "web": "",
    "publico": "Notaría Andrés Carlos Zavala Courriol"
  },
  {
    "id": "notaria-conservador-y-archivero-de-caldera",
    "region": "Atacama",
    "nombre": "Notaría, Conservador y Archivero de Caldera",
    "notario": "Carolina Moreno Jashes",
    "comuna": "Caldera",
    "direccion": "Edwards 450, Caldera",
    "telefonos": [
      "+56522316481",
      "+56522319494"
    ],
    "horario": "Lunes a viernes 08:30 a 16:00",
    "web": "",
    "publico": "Notaría Carolina Moreno Jashes"
  },
  {
    "id": "1-notaria-y-conservador-de-bienes-raices-de-vallenar",
    "region": "Atacama",
    "nombre": "1ª Notaría y Conservador de Bienes Raíces de Vallenar",
    "notario": "Pedro Alfonso Aylwin Valenzuela",
    "comuna": "Vallenar",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": "",
    "publico": "Notaría Pedro Alfonso Aylwin Valenzuela"
  },
  {
    "id": "2-notaria-conservador-de-comercio-y-de-minas-y-archivero-de-",
    "region": "Atacama",
    "nombre": "2ª Notaría, Conservador de Comercio y de Minas y Archivero de Vallenar",
    "notario": "Cargo vacante (Interino: Patricio Guillermo Hugo Urquieta Garcia)",
    "comuna": "Vallenar",
    "direccion": "Arturo Prat 960, local 14, Vallenar",
    "telefonos": [
      "+56512610121"
    ],
    "horario": "Lunes a viernes 9:00 a 14:00 y 15:30 a 17:50; sábado 10:00 a 12:00",
    "web": ""
  },
  {
    "id": "3-notaria-de-vallenar-con-asiento-en-alto-del-carmen",
    "region": "Atacama",
    "nombre": "3ª Notaría de Vallenar con asiento en Alto del Carmen",
    "notario": "Felipe Andrés Velásquez Morales",
    "comuna": "Alto del Carmen",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": "",
    "publico": "Notaría Felipe Andrés Velásquez Morales"
  },
  {
    "id": "notaria-conservador-y-archivero-de-chanaral",
    "region": "Atacama",
    "nombre": "Notaría, Conservador y Archivero de Chañaral",
    "notario": "María Carolina Vilches Guggiana",
    "comuna": "Chañaral",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": "",
    "publico": "Notaría María Carolina Vilches Guggiana"
  },
  {
    "id": "notaria-conservador-y-archivero-de-diego-de-almagro",
    "region": "Atacama",
    "nombre": "Notaría, Conservador y Archivero de Diego de Almagro",
    "notario": "Juan José Alfredo Carvajal Palacios",
    "comuna": "Diego de Almagro",
    "direccion": "O'Higgins 408, Diego de Almagro",
    "telefonos": [
      "+56945978526"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00",
    "web": "",
    "publico": "Notaría Juan José Alfredo Carvajal Palacios"
  },
  {
    "id": "notaria-conservador-y-archivero-de-freirina",
    "region": "Atacama",
    "nombre": "Notaría, Conservador y Archivero de Freirina",
    "notario": "Darío Andres Silva Marchant",
    "comuna": "Freirina",
    "direccion": "Prat 502, Freirina",
    "telefonos": [
      "+56940255236"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 18:00",
    "web": "",
    "publico": "Notaría Darío Andres Silva Marchant"
  },
  {
    "id": "1-notaria-de-la-serena",
    "region": "Coquimbo",
    "nombre": "1ª Notaría de La Serena",
    "notario": "Pedro Felipe Villarino Krumm",
    "comuna": "La Serena",
    "direccion": "Los Carrera 529, La Serena",
    "telefonos": [
      "+56985951385"
    ],
    "horario": "Escrituras públicas 09:00 a 16:00; mesón 09:00 a 15:00",
    "web": "",
    "publico": "Notaría Pedro Felipe Villarino Krumm"
  },
  {
    "id": "2-notaria-de-la-serena",
    "region": "Coquimbo",
    "nombre": "2ª Notaría de La Serena",
    "notario": "Jesús Antonio Osses Reveco",
    "comuna": "La Serena",
    "direccion": "Gregorio Cordovez 317, La Serena",
    "telefonos": [
      "+56956758546",
      "+56937050453"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 16:30",
    "web": "",
    "publico": "Notaría Jesús Antonio Osses Reveco"
  },
  {
    "id": "3-notaria-de-la-serena",
    "region": "Coquimbo",
    "nombre": "3ª Notaría de La Serena",
    "notario": "Pablo Ignacio Bustos Molina",
    "comuna": "La Serena",
    "direccion": "Av. Cristóbal Colón 352, local 2, edificio Studioffice, La Serena",
    "telefonos": [
      "+56943548770"
    ],
    "horario": "Lunes a jueves 8:30 a 16:00 continuado; viernes 8:30 a 15:00",
    "web": "",
    "publico": "Notaría Pablo Ignacio Bustos Molina"
  },
  {
    "id": "4-notaria-de-la-serena",
    "region": "Coquimbo",
    "nombre": "4ª Notaría de La Serena",
    "notario": "Cargo vacante (Interino: Gonzalo Andrés Oñate Miranda)",
    "comuna": "La Serena",
    "direccion": "Av. El Santo 1240, local 1, La Serena",
    "telefonos": [
      "+56973714879"
    ],
    "horario": "Lunes a viernes 9:00 a 17:15 continuado",
    "web": ""
  },
  {
    "id": "5-notaria-de-la-serena",
    "region": "Coquimbo",
    "nombre": "5ª Notaría de La Serena",
    "notario": "Mariano Agustín Torrealba Ziliani",
    "comuna": "La Serena",
    "direccion": "Av. Juan Cisternas 2283, local 3, La Serena",
    "telefonos": [
      "+56512560865",
      "+56512561464"
    ],
    "horario": "Lunes a viernes 09:00-16:00 continuado; sábados de turno 09:30-13:00",
    "web": "",
    "publico": "Notaría Mariano Agustín Torrealba Ziliani"
  },
  {
    "id": "6-notaria-de-la-serena",
    "region": "Coquimbo",
    "nombre": "6ª Notaría de La Serena",
    "notario": "Alejandro Tomás Viada Ovalle",
    "comuna": "La Serena",
    "direccion": "Huanhualí 292, La Serena",
    "telefonos": [
      "+56512357105"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00 continuado; todos los sábados del año 10:00 a 13:00",
    "web": "",
    "publico": "Notaría Alejandro Tomás Viada Ovalle"
  },
  {
    "id": "1-notaria-de-coquimbo",
    "region": "Coquimbo",
    "nombre": "1ª Notaría de Coquimbo",
    "notario": "Roberto Simón Preller Araya",
    "comuna": "Coquimbo",
    "direccion": "Juan Melgarejo 1030, Coquimbo",
    "telefonos": [
      "+56222027224"
    ],
    "horario": "Lunes a viernes 9:00 a 14:00 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría Roberto Simón Preller Araya"
  },
  {
    "id": "2-notaria-y-conservador-de-minas-de-coquimbo",
    "region": "Coquimbo",
    "nombre": "2ª Notaría y Conservador de Minas de Coquimbo",
    "notario": "Gonzalo Javier Henríquez Encamilla",
    "comuna": "Coquimbo",
    "direccion": "Bilbao 451, Coquimbo",
    "telefonos": [
      "+56975888164"
    ],
    "horario": "Lunes a viernes 09:00 a 17:00 continuado",
    "web": "",
    "publico": "Notaría Gonzalo Javier Henríquez Encamilla"
  },
  {
    "id": "3-notaria-de-coquimbo",
    "region": "Coquimbo",
    "nombre": "3ª Notaría de Coquimbo",
    "notario": "Juan Carlos Maturana Lepeley",
    "comuna": "Coquimbo",
    "direccion": "José Santiago Aldunate 939, Coquimbo",
    "telefonos": [
      "+56512325576",
      "+56512325574"
    ],
    "horario": "Lunes a viernes 08:45 a 17:00; sábado (solo turnos) 10:00 a 13:00",
    "web": "",
    "publico": "Notaría Juan Carlos Maturana Lepeley"
  },
  {
    "id": "4-notaria-de-coquimbo",
    "region": "Coquimbo",
    "nombre": "4ª Notaría de Coquimbo",
    "notario": "Reinaldo Hernán Villalobos Pellegrini",
    "comuna": "Coquimbo",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": "",
    "publico": "Notaría Reinaldo Hernán Villalobos Pellegrini"
  },
  {
    "id": "5-notaria-de-coquimbo",
    "region": "Coquimbo",
    "nombre": "5ª Notaría de Coquimbo",
    "notario": "María José Montesino Bianchi",
    "comuna": "Coquimbo",
    "direccion": "Av. Regimiento Arica 1641, Strip Center Tambo de Peñuelas, Coquimbo",
    "telefonos": [
      "+56952161084"
    ],
    "horario": "Lunes a jueves 09:00 a 17:00; viernes 09:00 a 16:00",
    "web": "",
    "publico": "Notaría María José Montesino Bianchi"
  },
  {
    "id": "6-notaria-de-coquimbo",
    "region": "Coquimbo",
    "nombre": "6ª Notaría de Coquimbo",
    "notario": "Patricio Andres Gutiérrez Gajardo",
    "comuna": "Coquimbo",
    "direccion": "Pedro Aguirre Cerda 101, Coquimbo",
    "telefonos": [
      "+56512775787"
    ],
    "horario": "Lunes a viernes 8:30 a 17:00 continuado; sábados de turno (mayo y noviembre de 2026) 10:00 a 13:00",
    "web": "",
    "publico": "Notaría Patricio Andres Gutiérrez Gajardo"
  },
  {
    "id": "notaria-conservador-y-archivero-de-andacollo",
    "region": "Coquimbo",
    "nombre": "Notaría, Conservador y Archivero de Andacollo",
    "notario": "Andrea Viviana Bravo Barría",
    "comuna": "Andacollo",
    "direccion": "Urmeneta 727, Andacollo",
    "telefonos": [
      "+56443187641"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría Andrea Viviana Bravo Barría"
  },
  {
    "id": "notaria-conservador-y-archivero-de-vicuna",
    "region": "Coquimbo",
    "nombre": "Notaría, Conservador y Archivero de Vicuña",
    "notario": "Daniel Ramiro Hurtado Navia",
    "comuna": "Vicuña",
    "direccion": "Gabriela Mistral 582, Vicuña",
    "telefonos": [
      "+56512411276"
    ],
    "horario": "Lunes a jueves 9:00 a 13:30 y 15:00 a 17:30; viernes 09:00 a 16:00",
    "web": "",
    "publico": "Notaría Daniel Ramiro Hurtado Navia"
  },
  {
    "id": "1-notaria-de-ovalle",
    "region": "Coquimbo",
    "nombre": "1ª Notaría de Ovalle",
    "notario": "Felipe Eduardo Leiva Ilabaca",
    "comuna": "Ovalle",
    "direccion": "Vicuña Mackenna 370, oficina 3-E (Galería Corral, frente a la Plaza), Ovalle",
    "telefonos": [
      "+56532641054"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00 continuado",
    "web": "",
    "publico": "Notaría Felipe Eduardo Leiva Ilabaca"
  },
  {
    "id": "2-notaria-y-conservador-de-minas-de-ovalle",
    "region": "Coquimbo",
    "nombre": "2ª Notaría y Conservador de Minas de Ovalle",
    "notario": "Rodrigo Cabrera Albarrán",
    "comuna": "Ovalle",
    "direccion": "Miguel Aguirre Perry 328 (centro), Ovalle",
    "telefonos": [
      "+56532650679"
    ],
    "horario": "Lunes a viernes 9:00-14:00 y 15:00-17:00; sábados solo cuando está de turno",
    "web": "",
    "publico": "Notaría Rodrigo Cabrera Albarrán"
  },
  {
    "id": "3-notaria-de-ovalle",
    "region": "Coquimbo",
    "nombre": "3ª Notaría de Ovalle",
    "notario": "José Luis Contreras Mundaca",
    "comuna": "Ovalle",
    "direccion": "Prolongación Benavente 1075, local 1480, Open Mall Ovalle, Ovalle",
    "telefonos": [
      "+56532595600",
      "+56532595125"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00 continuado; sábado 09:00 a 15:00",
    "web": "",
    "publico": "Notaría José Luis Contreras Mundaca"
  },
  {
    "id": "4-notaria-de-ovalle-con-asiento-en-monte-patria",
    "region": "Coquimbo",
    "nombre": "4ª Notaría de Ovalle con asiento en Monte Patria",
    "notario": "Lilian Natalia Cárdenas Elgueta",
    "comuna": "Monte Patria",
    "direccion": "Diego de Almagro 75, Monte Patria",
    "telefonos": [
      "+56226383379"
    ],
    "horario": "Lunes a viernes 8:30 a 15:30",
    "web": "",
    "publico": "Notaría Lilian Natalia Cárdenas Elgueta"
  },
  {
    "id": "5-notaria-de-ovalle",
    "region": "Coquimbo",
    "nombre": "5ª Notaría de Ovalle",
    "notario": "Carlos Andrés Galleguillos Carvajal",
    "comuna": "Ovalle",
    "direccion": "Victoria 157, Ovalle",
    "telefonos": [
      "+56532654453",
      "+56952297943"
    ],
    "horario": "Lunes a viernes 9:00 a 16:30; sábado 10:00 a 14:00",
    "web": "",
    "publico": "Notaría Carlos Andrés Galleguillos Carvajal"
  },
  {
    "id": "notaria-conservador-y-archivero-de-combarbala",
    "region": "Coquimbo",
    "nombre": "Notaría, Conservador y Archivero de Combarbalá",
    "notario": "Juan Ignacio Ipinza Mayor",
    "comuna": "Combarbalá",
    "direccion": "Plaza de Armas 110, Combarbalá",
    "telefonos": [
      "+56443558667"
    ],
    "horario": "Lunes a jueves 9:00 a 14:00 y 15:00 a 16:00; viernes 9:00 a 14:00",
    "web": "",
    "publico": "Notaría Juan Ignacio Ipinza Mayor"
  },
  {
    "id": "1-notaria-y-conservador-de-minas-de-illapel",
    "region": "Coquimbo",
    "nombre": "1ª Notaría y Conservador de Minas de Illapel",
    "notario": "Cargo vacante (Interina: Paulina Alejandra Toro Marangunic)",
    "comuna": "Illapel",
    "direccion": "O'Higgins 128, Illapel",
    "telefonos": [
      "+56998714735",
      "+56998714694"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00",
    "web": ""
  },
  {
    "id": "2-notaria-de-illapel-con-asiento-en-salamanca",
    "region": "Coquimbo",
    "nombre": "2ª Notaría de Illapel con asiento en Salamanca",
    "notario": "Sergio Enrique Peralta Morales",
    "comuna": "Salamanca",
    "direccion": "Manuel Bulnes 214, locales J-K, Strip Center Paseo Salamanca, Salamanca",
    "telefonos": [
      "+56926264499"
    ],
    "horario": "Lunes a jueves 09:00 a 14:00 y 15:30 a 17:30; viernes 09:00 a 16:00",
    "web": "",
    "publico": "Notaría Sergio Enrique Peralta Morales"
  },
  {
    "id": "notaria-de-los-vilos",
    "region": "Coquimbo",
    "nombre": "Notaría de Los Vilos",
    "notario": "Pablo Rodrigo Barrantes Díaz",
    "comuna": "Los Vilos",
    "direccion": "Colo Colo 345, Los Vilos",
    "telefonos": [
      "+56223586790"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00 continuado",
    "web": "",
    "publico": "Notaría Pablo Rodrigo Barrantes Díaz"
  },
  {
    "id": "1-notaria-y-conservador-de-minas-de-valparaiso",
    "region": "Valparaíso",
    "nombre": "1ª Notaría y Conservador de Minas de Valparaíso",
    "notario": "Lucas Maximiliano De la Cruz Serrat",
    "comuna": "Valparaíso",
    "direccion": "Cochrane 851, Valparaíso",
    "telefonos": [
      "+56552966156"
    ],
    "horario": "Lunes a jueves 08:30-15:30; viernes 08:00-15:00",
    "web": "",
    "publico": "Notaría Lucas Maximiliano De la Cruz Serrat"
  },
  {
    "id": "2-notaria-y-archivero-de-valparaiso",
    "region": "Valparaíso",
    "nombre": "2ª Notaría y Archivero de Valparaíso",
    "notario": "Marcela María Pía Tavolari Oliveros",
    "comuna": "Valparaíso",
    "direccion": "Av. Blanco 648, Valparaíso",
    "telefonos": [],
    "horario": "Lunes a viernes 8:30 a 14:00 y 15:30 a 17:30",
    "web": "",
    "publico": "Notaría Marcela María Pía Tavolari Oliveros"
  },
  {
    "id": "3-notaria-de-valparaiso",
    "region": "Valparaíso",
    "nombre": "3ª Notaría de Valparaíso",
    "notario": "Cargo vacante (Interina: Paola Jacqueline Baeza Navarro)",
    "comuna": "Valparaíso",
    "direccion": "Cochrane 830, Valparaíso",
    "telefonos": [
      "+56964616913",
      "+56941279466"
    ],
    "horario": "Lunes a jueves 09:00 a 14:00 y 14:30 a 17:00; viernes 09:00 a 16:00",
    "web": ""
  },
  {
    "id": "4-notaria-de-valparaiso",
    "region": "Valparaíso",
    "nombre": "4ª Notaría de Valparaíso",
    "notario": "Pablo Javier Contreras Guerrero",
    "comuna": "Valparaíso",
    "direccion": "Esmeralda 953, Valparaíso",
    "telefonos": [
      "+56322232598"
    ],
    "horario": "Lunes a viernes 08:30 a 15:30",
    "web": "",
    "publico": "Notaría Pablo Javier Contreras Guerrero"
  },
  {
    "id": "5-notaria-de-valparaiso",
    "region": "Valparaíso",
    "nombre": "5ª Notaría de Valparaíso",
    "notario": "Cargo vacante (Interino: Carlos Andrés Wendt Gaggero)",
    "comuna": "Valparaíso",
    "direccion": "Prat 856, Valparaíso",
    "telefonos": [
      "+56322548719"
    ],
    "horario": "Lunes a viernes 8:30 a 14:00 y 15:00 a 16:30",
    "web": ""
  },
  {
    "id": "6-notaria-de-valparaiso",
    "region": "Valparaíso",
    "nombre": "6ª Notaría de Valparaíso",
    "notario": "Claudia Paola Olguín Vargas",
    "comuna": "Valparaíso",
    "direccion": "Prat 612, Valparaíso",
    "telefonos": [
      "+56323526039",
      "+56944857259"
    ],
    "horario": "Lunes a jueves 9:00 a 14:00 y 15:00 a 17:30; viernes 9:00 a 16:00",
    "web": "",
    "publico": "Notaría Claudia Paola Olguín Vargas"
  },
  {
    "id": "7-notaria-de-valparaiso",
    "region": "Valparaíso",
    "nombre": "7ª Notaría de Valparaíso",
    "notario": "Cargo vacante (Interina: Alejandra Paola Meza Gallardo)",
    "comuna": "Valparaíso",
    "direccion": "Prat 829, Valparaíso",
    "telefonos": [
      "+56966472271"
    ],
    "horario": "Lunes a viernes 08:30 a 15:30",
    "web": ""
  },
  {
    "id": "8-notaria-de-valparaiso",
    "region": "Valparaíso",
    "nombre": "8ª Notaría de Valparaíso",
    "notario": "Luis Felipe Sepúlveda Ponce",
    "comuna": "Valparaíso",
    "direccion": "Arturo Prat 863, Valparaíso",
    "telefonos": [
      "+56934812009"
    ],
    "horario": "Lunes a viernes 08:30 a 15:30",
    "web": "",
    "publico": "Notaría Luis Felipe Sepúlveda Ponce"
  },
  {
    "id": "9-notaria-de-valparaiso",
    "region": "Valparaíso",
    "nombre": "9ª Notaría de Valparaíso",
    "notario": "Emilio Matías Ignacio Sarmiento Moreno",
    "comuna": "Valparaíso",
    "direccion": "Chacabuco 2845, Valparaíso",
    "telefonos": [
      "+56322548174"
    ],
    "horario": "Lunes a viernes 09:00-16:30 continuado",
    "web": "",
    "publico": "Notaría Emilio Matías Ignacio Sarmiento Moreno"
  },
  {
    "id": "10-notaria-de-valparaiso-con-asiento-en-juan-fernandez",
    "region": "Valparaíso",
    "nombre": "10ª Notaría de Valparaíso con asiento en Juan Fernández",
    "notario": "Cargo vacante sin proveer",
    "comuna": "Juan Fernández",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-vina-del-mar",
    "region": "Valparaíso",
    "nombre": "1ª Notaría de Viña del Mar",
    "notario": "Cargo vacante (Interino: Angel Eduardo Hernández Muñoz)",
    "comuna": "Viña del Mar",
    "direccion": "Villanelo 66, Viña del Mar",
    "telefonos": [
      "+56322711060",
      "+56322711124"
    ],
    "horario": "Lunes a viernes 9:00 a 17:00",
    "web": ""
  },
  {
    "id": "2-notaria-de-vina-del-mar",
    "region": "Valparaíso",
    "nombre": "2ª Notaría de Viña del Mar",
    "notario": "Francisco Javier Fuenzalida Rodríguez",
    "comuna": "Viña del Mar",
    "direccion": "Arlegui 333, local 111, Viña del Mar",
    "telefonos": [
      "+56944632496"
    ],
    "horario": "Lunes a viernes 9:00 a 17:00 continuado",
    "web": "",
    "publico": "Notaría Francisco Javier Fuenzalida Rodríguez"
  },
  {
    "id": "3-notaria-de-vina-del-mar",
    "region": "Valparaíso",
    "nombre": "3ª Notaría de Viña del Mar",
    "notario": "Eliana Gabriela Gervasio Zamudio",
    "comuna": "Viña del Mar",
    "direccion": "Arlegui 537, Viña del Mar",
    "telefonos": [
      "+56322186916",
      "+56322186918"
    ],
    "horario": "Lunes a viernes 08:45-17:40",
    "web": "",
    "publico": "Notaría Eliana Gabriela Gervasio Zamudio"
  },
  {
    "id": "4-notaria-de-vina-del-mar",
    "region": "Valparaíso",
    "nombre": "4ª Notaría de Viña del Mar",
    "notario": "Paola Deborah Stack Lara",
    "comuna": "Viña del Mar",
    "direccion": "Av. Libertad 901, Viña del Mar",
    "telefonos": [
      "+56322154124",
      "+56322154125"
    ],
    "horario": "Lunes a jueves 9:00 a 14:00 y 15:30 a 17:30; viernes 9:00 a 14:00 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría Paola Deborah Stack Lara"
  },
  {
    "id": "5-notaria-de-vina-del-mar",
    "region": "Valparaíso",
    "nombre": "5ª Notaría de Viña del Mar",
    "notario": "Cargo vacante (Interino: José Francisco Olate González)",
    "comuna": "Viña del Mar",
    "direccion": "Av. Libertad 1155 A, Viña del Mar",
    "telefonos": [
      "+56322460710"
    ],
    "horario": "Lunes a jueves 08:30 a 16:30; viernes 08:30-16:00",
    "web": ""
  },
  {
    "id": "6-notaria-de-vina-del-mar-con-asiento-en-concon",
    "region": "Valparaíso",
    "nombre": "6ª Notaría de Viña del Mar con asiento en Concón",
    "notario": "Rodrigo Antonio Vila Cervera",
    "comuna": "Concón",
    "direccion": "Av. Magallanes 1050, local 27, Concón",
    "telefonos": [
      "+56432645315"
    ],
    "horario": "Lunes a viernes 8:30 a 14:00 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría Rodrigo Antonio Vila Cervera"
  },
  {
    "id": "7-notaria-de-vina-del-mar",
    "region": "Valparaíso",
    "nombre": "7ª Notaría de Viña del Mar",
    "notario": "Orlando Esteban Cerda Silva",
    "comuna": "Viña del Mar",
    "direccion": "12 Norte 785, local 1, Viña del Mar",
    "telefonos": [
      "+56224115100"
    ],
    "horario": "Lunes a jueves 08:30-14:00 y 15:00-18:00; viernes 08:30-14:00 y 15:00-17:00",
    "web": "",
    "publico": "Notaría Orlando Esteban Cerda Silva"
  },
  {
    "id": "8-notaria-de-vina-del-mar-con-asiento-en-renaca",
    "region": "Valparaíso",
    "nombre": "8ª Notaría de Viña del Mar con asiento en Reñaca",
    "notario": "Marcos Andrés Díaz León",
    "comuna": "Viña del Mar",
    "direccion": "Av. Borgoño 14439, local 105, Reñaca, Viña del Mar",
    "telefonos": [
      "+56322210163"
    ],
    "horario": "Lunes a viernes 9:00-14:00 y 15:00-18:00",
    "web": "",
    "publico": "Notaría Marcos Andrés Díaz León"
  },
  {
    "id": "1-notaria-de-quilpue",
    "region": "Valparaíso",
    "nombre": "1ª Notaría de Quilpué",
    "notario": "Cargo vacante (Interina: Esperanza Monserrat Silva Vargas)",
    "comuna": "Quilpué",
    "direccion": "Andrés Bello 453, Quilpué",
    "telefonos": [
      "+56442870569"
    ],
    "horario": "Lunes a jueves 09:00 a 17:00; viernes 09:00 a 16:00",
    "web": ""
  },
  {
    "id": "2-notaria-y-conservador-de-minas-de-quilpue",
    "region": "Valparaíso",
    "nombre": "2ª Notaría y Conservador de Minas de Quilpué",
    "notario": "Ignacio Javier González López",
    "comuna": "Quilpué",
    "direccion": "Diego Portales 790, 2° piso, Quilpué",
    "telefonos": [
      "+56939621168"
    ],
    "horario": "Lunes a viernes 09:00 a 13:30 y 15:00 a 17:30; sábados 10:00 a 12:30",
    "web": "",
    "publico": "Notaría Ignacio Javier González López"
  },
  {
    "id": "3-notaria-de-quilpue",
    "region": "Valparaíso",
    "nombre": "3ª Notaría de Quilpué",
    "notario": "Cristián Fernando Villalobos Pellegrini",
    "comuna": "Quilpué",
    "direccion": "Balmaceda 280, local 2, Edificio Balmaceda, Quilpué",
    "telefonos": [
      "+56926206751"
    ],
    "horario": "Lunes a jueves 09:00 a 13:30 y 15:00 a 17:30; viernes 09:00 a 13:30 y 15:00 a 16:30",
    "web": "",
    "publico": "Notaría Cristián Fernando Villalobos Pellegrini"
  },
  {
    "id": "1-notaria-de-villa-alemana",
    "region": "Valparaíso",
    "nombre": "1ª Notaría de Villa Alemana",
    "notario": "Gloria Isabel Ordóñez Cortés",
    "comuna": "Villa Alemana",
    "direccion": "Buenos Aires 663, local 1, Villa Alemana",
    "telefonos": [
      "+56552924489"
    ],
    "horario": "Lunes a viernes 9:00 a 16:00",
    "web": "",
    "publico": "Notaría Gloria Isabel Ordóñez Cortés"
  },
  {
    "id": "2-notaria-de-villa-alemana",
    "region": "Valparaíso",
    "nombre": "2ª Notaría de Villa Alemana",
    "notario": "Paulina Alejandra Sotomayor Graepp",
    "comuna": "Villa Alemana",
    "direccion": "Patricio Lynch 39, Villa Alemana",
    "telefonos": [
      "+56950619043"
    ],
    "horario": "Lunes a jueves 08:30 a 15:45; viernes 08:30 a 15:00",
    "web": "",
    "publico": "Notaría Paulina Alejandra Sotomayor Graepp"
  },
  {
    "id": "1-notaria-de-casablanca",
    "region": "Valparaíso",
    "nombre": "1ª Notaría de Casablanca",
    "notario": "Álvaro Francisco Estrada Alvarado",
    "comuna": "Casablanca",
    "direccion": "Constitución 376/378, Casablanca",
    "telefonos": [
      "+56953012915"
    ],
    "horario": "Lunes a viernes 08:30 a 15:30",
    "web": "",
    "publico": "Notaría Álvaro Francisco Estrada Alvarado"
  },
  {
    "id": "2-notaria-de-casablanca-con-asiento-en-curacavi",
    "region": "Valparaíso",
    "nombre": "2ª Notaría de Casablanca con asiento en Curacaví",
    "notario": "Daniela Nancy Munizaga Péndola",
    "comuna": "Curacaví",
    "direccion": "Av. Ambrosio O'Higgins 1375, 1 piso, Curacaví",
    "telefonos": [
      "+56921235093"
    ],
    "horario": "Lunes a jueves 8:30 a 16:00 continuado; viernes 8:00 a 15:00",
    "web": "",
    "publico": "Notaría Daniela Nancy Munizaga Péndola"
  },
  {
    "id": "3-notaria-de-casablanca-con-asiento-en-el-quisco",
    "region": "Valparaíso",
    "nombre": "3ª Notaría de Casablanca con asiento en El Quisco",
    "notario": "Mario Alfonso Barría Gallegos",
    "comuna": "El Quisco",
    "direccion": "Isidoro Dubournais 294, local A, El Quisco",
    "telefonos": [
      "+56443208012"
    ],
    "horario": "Lunes a viernes 8:30 a 15:30",
    "web": "",
    "publico": "Notaría Mario Alfonso Barría Gallegos"
  },
  {
    "id": "1-notaria-de-quillota",
    "region": "Valparaíso",
    "nombre": "1ª Notaría de Quillota",
    "notario": "Julio Jorge Abuyeres Jadue",
    "comuna": "Quillota",
    "direccion": "Pudeto 398, Quillota",
    "telefonos": [
      "+56332260910",
      "+56332260579"
    ],
    "horario": "Lunes a viernes 09:00 a 13:30 y 15:00 a 17:00; turno sábado 9:00 a 12:00",
    "web": "",
    "publico": "Notaría Julio Jorge Abuyeres Jadue"
  },
  {
    "id": "2-notaria-de-quillota",
    "region": "Valparaíso",
    "nombre": "2ª Notaría de Quillota",
    "notario": "Hugo Patricio Monroy Foix",
    "comuna": "Quillota",
    "direccion": "O'Higgins 414, Quillota",
    "telefonos": [
      "+56332312575",
      "+56332310073"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:30 a 17:30",
    "web": "",
    "publico": "Notaría Hugo Patricio Monroy Foix"
  },
  {
    "id": "1-notaria-de-quintero",
    "region": "Valparaíso",
    "nombre": "1ª Notaría de Quintero",
    "notario": "Gustavo Eduardo Jeanneret Martínez",
    "comuna": "Quintero",
    "direccion": "Av. Normandie 2041, Quintero",
    "telefonos": [
      "+56322932050",
      "+56958699750"
    ],
    "horario": "Lunes a jueves 09:15 a 14:00 y 15:15 a 16:45; viernes 09:00 a 16:00; sábados 09:30 a 12:00",
    "web": "",
    "publico": "Notaría Gustavo Eduardo Jeanneret Martínez"
  },
  {
    "id": "2-notaria-de-quintero-con-asiento-en-puchuncavi",
    "region": "Valparaíso",
    "nombre": "2ª Notaría de Quintero con asiento en Puchuncaví",
    "notario": "Cristian Andres Garcia Mechsner",
    "comuna": "Puchuncaví",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": "",
    "publico": "Notaría Cristian Andres Garcia Mechsner"
  },
  {
    "id": "notaria-de-calera",
    "region": "Valparaíso",
    "nombre": "Notaría de Calera",
    "notario": "Cargo vacante (Interino: Bryan Omar Argandoña Montiel)",
    "comuna": "Calera",
    "direccion": "Diego Lillo 331, Calera",
    "telefonos": [
      "+56332221418",
      "+56332222086"
    ],
    "horario": "Lunes a viernes 09:00-14:00 y 15:00-17:00; sábado por medio 10:00-12:30",
    "web": ""
  },
  {
    "id": "1-notaria-de-limache",
    "region": "Valparaíso",
    "nombre": "1ª Notaría de Limache",
    "notario": "David Fernando Del Fierro Cifuentes",
    "comuna": "Limache",
    "direccion": "Av. Palmira Romano Sur 405, local 28, Shopping Araucarias, Limache",
    "telefonos": [
      "+56332418583"
    ],
    "horario": "Lunes a viernes 9:00 a 14:00 y 15:00 a 17:00; sábados 9:30 a 12:00",
    "web": "",
    "publico": "Notaría David Fernando Del Fierro Cifuentes"
  },
  {
    "id": "2-notaria-de-limache-con-asiento-en-olmue",
    "region": "Valparaíso",
    "nombre": "2ª Notaría de Limache con asiento en Olmué",
    "notario": "Juan Pablo Espinosa Schiappacasse",
    "comuna": "Olmué",
    "direccion": "Av. Prat 4900, oficina B, Olmué",
    "telefonos": [
      "+56332211020"
    ],
    "horario": "Lunes a viernes 8:30 a 14:00 y 15:00 a 17:00; sábado 10:00 a 12:30",
    "web": "",
    "publico": "Notaría Juan Pablo Espinosa Schiappacasse"
  },
  {
    "id": "1-notaria-de-la-ligua",
    "region": "Valparaíso",
    "nombre": "1ª Notaría de La Ligua",
    "notario": "Alejandro Patricio Gómez Cortés",
    "comuna": "La Ligua",
    "direccion": "Ortiz de Rozas 836, La Ligua",
    "telefonos": [
      "+56325643484",
      "+56995198820"
    ],
    "horario": "Lunes a jueves 09:00 a 14:00 y 15:00 a 17:00; viernes 09:00 a 16:00",
    "web": "",
    "publico": "Notaría Alejandro Patricio Gómez Cortés"
  },
  {
    "id": "2-notaria-de-la-ligua-con-asiento-en-cabildo",
    "region": "Valparaíso",
    "nombre": "2ª Notaría de La Ligua con asiento en Cabildo",
    "notario": "Cargo vacante (Interina: Ingrid Johanna Zúñiga Reinoso)",
    "comuna": "Cabildo",
    "direccion": "Humeres 580, Cabildo",
    "telefonos": [
      "+56332540537"
    ],
    "horario": "Lunes a jueves 9:00 a 17:00; viernes 9:00 a 16:00",
    "web": ""
  },
  {
    "id": "notaria-y-conservador-de-petorca",
    "region": "Valparaíso",
    "nombre": "Notaría y Conservador de Petorca",
    "notario": "Alejandro Haupt Ossa",
    "comuna": "Petorca",
    "direccion": "Silva 835, Petorca",
    "telefonos": [
      "+56941709805"
    ],
    "horario": "Lunes a jueves 8:30-13:30 y 14:30-16:30; viernes 8:30-15:30",
    "web": "",
    "publico": "Notaría Alejandro Haupt Ossa"
  },
  {
    "id": "1-notaria-de-los-andes",
    "region": "Valparaíso",
    "nombre": "1ª Notaría de Los Andes",
    "notario": "Cargo vacante (Interino: Marcos Andres Lorie Dabovic)",
    "comuna": "Los Andes",
    "direccion": "Esmeralda 417, Los Andes",
    "telefonos": [
      "+56342421198",
      "+56228540260"
    ],
    "horario": "Lunes a viernes 08:30 a 15:30 continuado",
    "web": ""
  },
  {
    "id": "2-notaria-y-conservador-de-minas-de-los-andes",
    "region": "Valparaíso",
    "nombre": "2ª Notaría y Conservador de Minas de Los Andes",
    "notario": "Max Eduardo Ordóñez Urbina",
    "comuna": "Los Andes",
    "direccion": "Manuel Rodríguez 350, Los Andes",
    "telefonos": [],
    "horario": "Lunes a viernes 8:00 a 15:00",
    "web": "",
    "publico": "Notaría Max Eduardo Ordóñez Urbina"
  },
  {
    "id": "3-notaria-de-los-andes-con-asiento-en-san-esteban",
    "region": "Valparaíso",
    "nombre": "3ª Notaría de Los Andes con asiento en San Esteban",
    "notario": "Carlos Cristóbal Aylwin Domingo",
    "comuna": "San Esteban",
    "direccion": "Av. Alessandri 1609, local 4 A, Portal San Esteban, San Esteban",
    "telefonos": [
      "+56342254470"
    ],
    "horario": "Lunes a viernes 09:00 a 17:00 continuado; sábado de turno 09:00 a 13:00",
    "web": "",
    "publico": "Notaría Carlos Cristóbal Aylwin Domingo"
  },
  {
    "id": "1-notaria-de-san-felipe",
    "region": "Valparaíso",
    "nombre": "1ª Notaría de San Felipe",
    "notario": "Cargo vacante (Interino: Juan Miguel Cortes Michea)",
    "comuna": "San Felipe",
    "direccion": "Portus 270-B, San Felipe",
    "telefonos": [
      "+56233771109",
      "+56233771108"
    ],
    "horario": "Lunes a viernes 9:00 a 16:15 continuado; sábado de turno 9:30 a 12:00",
    "web": ""
  },
  {
    "id": "2-notaria-y-conservador-de-minas-de-san-felipe",
    "region": "Valparaíso",
    "nombre": "2ª Notaría y Conservador de Minas de San Felipe",
    "notario": "Alex Edmundo Pérez de Tudela Vega",
    "comuna": "San Felipe",
    "direccion": "Prat 106, San Felipe",
    "telefonos": [
      "+56342532397",
      "+56342532475"
    ],
    "horario": "Lunes a jueves 8:30 a 16:30; viernes 8:30 a 16:00; sábados de turno 10:00 a 12:00",
    "web": "",
    "publico": "Notaría Alex Edmundo Pérez de Tudela Vega"
  },
  {
    "id": "3-notaria-de-san-felipe-con-asiento-en-llaillay",
    "region": "Valparaíso",
    "nombre": "3ª Notaría de San Felipe con asiento en Llaillay",
    "notario": "Fernando Cristian Laso Cordero",
    "comuna": "Llaillay",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": "",
    "publico": "Notaría Fernando Cristian Laso Cordero"
  },
  {
    "id": "notaria-y-conservador-de-putaendo",
    "region": "Valparaíso",
    "nombre": "Notaría y Conservador de Putaendo",
    "notario": "Cristina Evelyn Lolas Chaban",
    "comuna": "Putaendo",
    "direccion": "Comercio 496, Putaendo",
    "telefonos": [
      "+56342502352"
    ],
    "horario": "Lunes a viernes 09:00-16:00",
    "web": "",
    "publico": "Notaría Cristina Evelyn Lolas Chaban"
  },
  {
    "id": "1-notaria-y-conservador-de-minas-de-san-antonio",
    "region": "Valparaíso",
    "nombre": "1ª Notaría y Conservador de Minas de San Antonio",
    "notario": "Cargo vacante (Interina: Ximena Beatriz Schmalfeldt Ricci)",
    "comuna": "San Antonio",
    "direccion": "Barros Luco 1749, San Antonio",
    "telefonos": [
      "+56442919147"
    ],
    "horario": "Lunes a viernes 08:30 a 15:30",
    "web": ""
  },
  {
    "id": "2-notaria-de-san-antonio",
    "region": "Valparaíso",
    "nombre": "2ª Notaría de San Antonio",
    "notario": "Cargo vacante (Interino: Matías Hernán Le-Roux Peralta)",
    "comuna": "San Antonio",
    "direccion": "Av. Lauro Barros 96, San Antonio",
    "telefonos": [
      "+56352212688",
      "+56352214802"
    ],
    "horario": "Lunes a viernes 08:30 a 15:00; sábados 09:30 a 13:00",
    "web": ""
  },
  {
    "id": "3-notaria-de-san-antonio-con-asiento-en-cartagena",
    "region": "Valparaíso",
    "nombre": "3ª Notaría de San Antonio con asiento en Cartagena",
    "notario": "Cargo vacante (Interino: Fernando Gabriel Piña Rodríguez)",
    "comuna": "Cartagena",
    "direccion": "Av. Cartagena 330, Cartagena",
    "telefonos": [
      "+56352389029"
    ],
    "horario": "Lunes a jueves 8:30 a 14:00 y 15:00 a 16:30; viernes 8:30 a 15:30",
    "web": ""
  },
  {
    "id": "1-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago",
    "notario": "Cristian Felipe Camilla Sandoval",
    "comuna": "Santiago",
    "direccion": "Paseo Ahumada 179, piso 7, Santiago",
    "telefonos": [
      "+56232102706"
    ],
    "horario": "Lunes a viernes 09:00 a 17:00",
    "web": "",
    "publico": "Notaría Cristian Felipe Camilla Sandoval"
  },
  {
    "id": "2-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Santiago",
    "notario": "Francisco Javier Leiva Carvajal",
    "comuna": "Las Condes",
    "direccion": "Alcántara 107, Las Condes",
    "telefonos": [
      "+56222644800"
    ],
    "horario": "09:00-17:00",
    "web": "",
    "publico": "Notaría Francisco Javier Leiva Carvajal"
  },
  {
    "id": "3-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "3ª Notaría de Santiago",
    "notario": "Gabriel Gustavo Ogalde Rodríguez",
    "comuna": "Santiago",
    "direccion": "Av. Libertador Bernardo O'Higgins 2102, Santiago",
    "telefonos": [
      "+56227244871",
      "+56229059650"
    ],
    "horario": "Lunes a viernes 09:00 a 18:00",
    "web": "",
    "publico": "Notaría Gabriel Gustavo Ogalde Rodríguez"
  },
  {
    "id": "4-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "4ª Notaría de Santiago",
    "notario": "Cosme Fernando Gomila Gatica",
    "comuna": "Las Condes",
    "direccion": "Carmencita 20, Las Condes",
    "telefonos": [
      "+56226954040"
    ],
    "horario": "Lunes a viernes 09:00-17:00 continuado",
    "web": "",
    "publico": "Notaría Cosme Fernando Gomila Gatica"
  },
  {
    "id": "5-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "5ª Notaría de Santiago",
    "notario": "Cargo vacante (Interina: Magdalena Sofía Latorre Larraín)",
    "comuna": "Las Condes",
    "direccion": "Av. El Golf 99, oficina 101 B, Las Condes",
    "telefonos": [
      "+56225992453",
      "+56225992466"
    ],
    "horario": "Lunes a jueves 09:00-17:00; viernes 09:00-16:00",
    "web": ""
  },
  {
    "id": "6-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "6ª Notaría de Santiago",
    "notario": "Cargo vacante (Interina: Francisca Andrea Rojas Damm)",
    "comuna": "Santiago",
    "direccion": "Bandera 465, segundo piso, oficina 201, Santiago",
    "telefonos": [
      "+56226966427",
      "+56926964989"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00",
    "web": ""
  },
  {
    "id": "7-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "7ª Notaría de Santiago",
    "notario": "Mauro Fabián Aroca Guerrero",
    "comuna": "Santiago",
    "direccion": "Agustinas 1161, entrepiso, oficina 18, Santiago",
    "telefonos": [
      "+56224294250"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría Mauro Fabián Aroca Guerrero"
  },
  {
    "id": "8-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "8ª Notaría de Santiago",
    "notario": "Luis Ignacio Manquehual Mery",
    "comuna": "Santiago",
    "direccion": "Huérfanos 941, local 302, Pasaje Matte, Santiago",
    "telefonos": [
      "+56224907900"
    ],
    "horario": "Lunes a viernes 09:30 a 14:00 y 15:00 a 17:30",
    "web": "",
    "publico": "Notaría Luis Ignacio Manquehual Mery"
  },
  {
    "id": "9-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "9ª Notaría de Santiago",
    "notario": "Pablo Alberto González Caamaño",
    "comuna": "Santiago",
    "direccion": "Teatinos 333, entrepiso, Santiago",
    "telefonos": [
      "+56226726061",
      "+56228963740"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría Pablo Alberto González Caamaño"
  },
  {
    "id": "10-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "10ª Notaría de Santiago",
    "notario": "Valeria del Carmen Ronchera Flores",
    "comuna": "Santiago",
    "direccion": "Agustinas 1287, Santiago",
    "telefonos": [
      "+56228650420"
    ],
    "horario": "Lunes a viernes 09:00 a 17:00",
    "web": "",
    "publico": "Notaría Valeria del Carmen Ronchera Flores"
  },
  {
    "id": "11-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "11ª Notaría de Santiago",
    "notario": "Susana Paola Belmonte Aguirre",
    "comuna": "Las Condes",
    "direccion": "Rosario Norte 555, oficina 201, Las Condes",
    "telefonos": [
      "+56226991539"
    ],
    "horario": "Lunes a viernes 9:30-14:00 y 15:00-17:00",
    "web": "",
    "publico": "Notaría Susana Paola Belmonte Aguirre"
  },
  {
    "id": "12-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "12ª Notaría de Santiago",
    "notario": "Hernán José Retamal Grimberg",
    "comuna": "Santiago",
    "direccion": "Teatinos 331, Santiago",
    "telefonos": [
      "+56233395980"
    ],
    "horario": "Lunes a jueves 08:30 a 17:00; viernes 08:30 a 16:00",
    "web": "",
    "publico": "Notaría Hernán José Retamal Grimberg"
  },
  {
    "id": "13-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "13ª Notaría de Santiago",
    "notario": "Pablo José Hales Beseler",
    "comuna": "Las Condes",
    "direccion": "Av. Padre Hurtado Sur 875, local 1054, Mallplaza Los Dominicos, Las Condes",
    "telefonos": [
      "+56226710085"
    ],
    "horario": "Lunes a viernes 09:30-14:00 y 14:30-17:00",
    "web": "",
    "publico": "Notaría Pablo José Hales Beseler"
  },
  {
    "id": "14-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "14ª Notaría de Santiago",
    "notario": "Sergio Fernando Rodríguez Uribe",
    "comuna": "Santiago",
    "direccion": "Amunátegui 391, Santiago",
    "telefonos": [
      "+56996915144"
    ],
    "horario": "Lunes a viernes 09:00-14:00 y 15:00-17:30",
    "web": "",
    "publico": "Notaría Sergio Fernando Rodríguez Uribe"
  },
  {
    "id": "16-notaria-y-conservador-de-minas-de-santiago",
    "region": "Metropolitana",
    "nombre": "16ª Notaría y Conservador de Minas de Santiago",
    "notario": "Cargo vacante (Interina: Alejandra Valeska Hidalgo Fuentes)",
    "comuna": "Las Condes",
    "direccion": "San Sebastián 2750, Las Condes",
    "telefonos": [
      "+56229150100"
    ],
    "horario": "Lunes a viernes 09:30-17:00 continuado",
    "web": ""
  },
  {
    "id": "17-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "17ª Notaría de Santiago",
    "notario": "María Angélica de Lourdes Galán Bauerle",
    "comuna": "Santiago",
    "direccion": "Paseo Ahumada 236, piso 3, Santiago",
    "telefonos": [
      "+56232782450"
    ],
    "horario": "Lunes a viernes 09:00 a 13:30 y 14:45 a 17:15",
    "web": "",
    "publico": "Notaría María Angélica de Lourdes Galán Bauerle"
  },
  {
    "id": "18-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "18ª Notaría de Santiago",
    "notario": "María Pilar Gutiérrez Rivera",
    "comuna": "Las Condes",
    "direccion": "Av. Apoquindo 3039, piso 5, Las Condes",
    "telefonos": [
      "+56228927200"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría María Pilar Gutiérrez Rivera"
  },
  {
    "id": "19-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "19ª Notaría de Santiago",
    "notario": "Cargo vacante (Interino: Javier Ignacio Hormazábal Collao)",
    "comuna": "Santiago",
    "direccion": "Bandera 341, piso 3, oficina 352, Galería Edwards, Santiago",
    "telefonos": [
      "+56227217000"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00",
    "web": ""
  },
  {
    "id": "20-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "20ª Notaría de Santiago",
    "notario": "Cargo vacante (Interina: Alejandra Gabriela Perez Andueza)",
    "comuna": "Las Condes",
    "direccion": "Av. Apoquindo 4990, Las Condes",
    "telefonos": [
      "+56232522770"
    ],
    "horario": "Lunes a viernes 09:00-14:00 y 15:00-18:00",
    "web": ""
  },
  {
    "id": "21-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "21ª Notaría de Santiago",
    "notario": "Myriam Elizabeth Mariela Amigo Arancibia",
    "comuna": "Santiago",
    "direccion": "Huérfanos 578, Santiago",
    "telefonos": [
      "+56227064900"
    ],
    "horario": "Lunes a jueves 09:00 a 17:45; viernes 09:00 a 17:00",
    "web": "",
    "publico": "Notaría Myriam Elizabeth Mariela Amigo Arancibia"
  },
  {
    "id": "22-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "22ª Notaría de Santiago",
    "notario": "Cargo vacante (Interino: Carlos Alberto Alarcon Lara)",
    "comuna": "Las Condes",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "23-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "23ª Notaría de Santiago",
    "notario": "Renata Marcela González Carvallo",
    "comuna": "Santiago",
    "direccion": "Catedral 1265, Santiago",
    "telefonos": [
      "+56226621831",
      "+56226621832"
    ],
    "horario": "Lunes a viernes 09:30 a 13:30 y 14:30 a 17:30",
    "web": "",
    "publico": "Notaría Renata Marcela González Carvallo"
  },
  {
    "id": "24-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "24ª Notaría de Santiago",
    "notario": "Cargo vacante (Interino: Christian Luis Abarca Encina)",
    "comuna": "Maipú",
    "direccion": "Av. Esquina Blanca 0211, Maipú",
    "telefonos": [
      "+56229829783",
      "+56229829789"
    ],
    "horario": "Lunes a viernes 09:00 a 16:30",
    "web": ""
  },
  {
    "id": "25-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "25ª Notaría de Santiago",
    "notario": "Cargo vacante (Interina: Zaida Angelica Sepulveda Rivera)",
    "comuna": "Santiago",
    "direccion": "Amunátegui 361, local 6, Santiago",
    "telefonos": [
      "+56981886277"
    ],
    "horario": "Lunes a jueves 08:30-17:00; viernes 08:30-16:45; sábado 09:00-12:30",
    "web": ""
  },
  {
    "id": "26-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "26ª Notaría de Santiago",
    "notario": "Carlos Humberto Quezada Moreno",
    "comuna": "Las Condes",
    "direccion": "Av. Apoquindo 3196, local 2, Las Condes",
    "telefonos": [
      "+56227842400"
    ],
    "horario": "Lunes a viernes 09:30-17:00",
    "web": "",
    "publico": "Notaría Carlos Humberto Quezada Moreno"
  },
  {
    "id": "27-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "27ª Notaría de Santiago",
    "notario": "María Patricia Donoso Gomien",
    "comuna": "Providencia",
    "direccion": "Orrego Luco 0153, Providencia",
    "telefonos": [
      "+56226200400",
      "+56990307635"
    ],
    "horario": "Lunes a viernes 09:00-13:45 y 15:00-17:30",
    "web": "",
    "publico": "Notaría María Patricia Donoso Gomien"
  },
  {
    "id": "28-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "28ª Notaría de Santiago",
    "notario": "Cargo vacante (Interino: Sergio Daniel Ulloa Ojeda)",
    "comuna": "Recoleta",
    "direccion": "Av. Recoleta 377, Recoleta",
    "telefonos": [
      "+56232989527"
    ],
    "horario": "Lunes a viernes 8:30 a 17:15",
    "web": ""
  },
  {
    "id": "29-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "29ª Notaría de Santiago",
    "notario": "Evaldo Daniel Rehbein Utreras",
    "comuna": "Las Condes",
    "direccion": "Av. Vitacura 2969, oficina 203, Edificio Alto El Golf, Las Condes",
    "telefonos": [
      "+56966888788"
    ],
    "horario": "Lunes a viernes 09:00 a 13:30 y 14:30 a 17:00",
    "web": "",
    "publico": "Notaría Evaldo Daniel Rehbein Utreras"
  },
  {
    "id": "30-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "30ª Notaría de Santiago",
    "notario": "Octavio Francisco Gutiérrez López",
    "comuna": "Santiago",
    "direccion": "Av. Libertador Bernardo O'Higgins 980, oficinas 134 y 135, Santiago",
    "telefonos": [
      "+56226330512"
    ],
    "horario": "Lunes a viernes 08:00 a 13:30 y 14:30 a 16:00",
    "web": "",
    "publico": "Notaría Octavio Francisco Gutiérrez López"
  },
  {
    "id": "31-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "31ª Notaría de Santiago",
    "notario": "Cargo vacante (Interino: Rafael Patricio Pinochet Cavieres)",
    "comuna": "Santiago",
    "direccion": "Paseo Huérfanos 1055, local 328 interior, Santiago",
    "telefonos": [
      "+56226723008"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 14:30 a 16:30",
    "web": ""
  },
  {
    "id": "32-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "32ª Notaría de Santiago",
    "notario": "Francisco Javier Varas Fernández",
    "comuna": "Santiago",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": "",
    "publico": "Notaría Francisco Javier Varas Fernández"
  },
  {
    "id": "33-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "33ª Notaría de Santiago",
    "notario": "Cargo vacante (Interina: Carolina Elizabeth Piña Cuevas)",
    "comuna": "Santiago",
    "direccion": "Huérfanos 979, oficina 712, piso 7, Santiago",
    "telefonos": [
      "+56949812692"
    ],
    "horario": "Lunes a viernes 09:00-14:00 y 15:00-17:00",
    "web": ""
  },
  {
    "id": "34-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "34ª Notaría de Santiago",
    "notario": "Cargo vacante (Interina: Maria Jose Bravo Cruz)",
    "comuna": "Providencia",
    "direccion": "Luis Thayer Ojeda 359, Providencia",
    "telefonos": [
      "+56228963390"
    ],
    "horario": "Lunes a viernes 09:30-16:30 continuado",
    "web": ""
  },
  {
    "id": "35-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "35ª Notaría de Santiago",
    "notario": "Felipe Andrés Jopia Navarro",
    "comuna": "Santiago",
    "direccion": "Paseo Bulnes 139 y 141, Santiago",
    "telefonos": [
      "+56929892635",
      "+56929861817"
    ],
    "horario": "Lunes a jueves 09:00 a 16:30; viernes 09:00 a 16:00",
    "web": "",
    "publico": "Notaría Felipe Andrés Jopia Navarro"
  },
  {
    "id": "36-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "36ª Notaría de Santiago",
    "notario": "Andrés Felipe Rieutord Alvarado",
    "comuna": "Providencia",
    "direccion": "La Concepción 65, piso 2, Providencia",
    "telefonos": [
      "+56232468500"
    ],
    "horario": "Lunes a viernes 08:30-13:30 y 15:00-17:00",
    "web": "",
    "publico": "Notaría Andrés Felipe Rieutord Alvarado"
  },
  {
    "id": "37-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "37ª Notaría de Santiago",
    "notario": "Cargo vacante (Interina: Pamela Fernanda Vásquez Avendaño)",
    "comuna": "Santiago",
    "direccion": "Huérfanos 1117, oficina 1014, Santiago",
    "telefonos": [
      "+56227685000"
    ],
    "horario": "Lunes a jueves 09:00-14:30 y 15:00-16:30; viernes 09:00-14:30 y 15:00-16:00",
    "web": ""
  },
  {
    "id": "38-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "38ª Notaría de Santiago",
    "notario": "María Soledad Lascar Merino",
    "comuna": "Las Condes",
    "direccion": "Isidora Goyenechea 3477, Zócalo, Las Condes",
    "telefonos": [
      "+56992283092",
      "+56232513000"
    ],
    "horario": "",
    "web": "",
    "publico": "Notaría María Soledad Lascar Merino"
  },
  {
    "id": "39-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "39ª Notaría de Santiago",
    "notario": "Lorena Elisa Quintanilla León",
    "comuna": "Ñuñoa",
    "direccion": "Av. Irarrázaval 5420, local 1, Ñuñoa",
    "telefonos": [
      "+56227520393",
      "+56991618849"
    ],
    "horario": "Lunes a viernes 09:30-14:00 y 15:00-17:30",
    "web": "",
    "publico": "Notaría Lorena Elisa Quintanilla León"
  },
  {
    "id": "40-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "40ª Notaría de Santiago",
    "notario": "Cargo vacante (Interino: Rodrigo Alexander Sotomayor Graepp)",
    "comuna": "Santiago",
    "direccion": "Teatinos 332, Santiago",
    "telefonos": [],
    "horario": "Lunes a jueves 09:00-16:30; viernes 08:30-15:30",
    "web": ""
  },
  {
    "id": "41-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "41ª Notaría de Santiago",
    "notario": "Cargo vacante (Interino: Jose Tomas Silvestre Fabres Bordeu)",
    "comuna": "Santiago",
    "direccion": "Paseo Ahumada 179, piso 4, Santiago",
    "telefonos": [
      "+56966116099"
    ],
    "horario": "Lunes a viernes 08:30 a 16:00",
    "web": ""
  },
  {
    "id": "42-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "42ª Notaría de Santiago",
    "notario": "Álvaro David González Salinas",
    "comuna": "Las Condes",
    "direccion": "Av. Apoquindo 3001, piso 2, Las Condes",
    "telefonos": [
      "+56224903800"
    ],
    "horario": "Lunes a jueves 09:00-17:00; viernes 09:00-16:00",
    "web": "",
    "publico": "Notaría Álvaro David González Salinas"
  },
  {
    "id": "43-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "43ª Notaría de Santiago",
    "notario": "Cargo vacante (Interino: Mauricio Humberto Reinoso Cifuentes)",
    "comuna": "Santiago",
    "direccion": "Huérfanos 835, piso 18, Santiago",
    "telefonos": [
      "+56228985900"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00",
    "web": ""
  },
  {
    "id": "44-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "44ª Notaría de Santiago",
    "notario": "Evelyn Carolina Sánchez Tapia",
    "comuna": "Vitacura",
    "direccion": "Av. Vitacura 3724, Vitacura",
    "telefonos": [
      "+56233656048"
    ],
    "horario": "Lunes a viernes 09:00-18:00; sábado 09:00-13:00",
    "web": "",
    "publico": "Notaría Evelyn Carolina Sánchez Tapia"
  },
  {
    "id": "45-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "45ª Notaría de Santiago",
    "notario": "Juan Ignacio San Martín Schröder",
    "comuna": "Santiago",
    "direccion": "Miraflores 222, piso 11, Santiago",
    "telefonos": [
      "+56233888600"
    ],
    "horario": "Lunes a viernes 08:45 a 14:00 y 15:15 a 17:00",
    "web": "",
    "publico": "Notaría Juan Ignacio San Martín Schröder"
  },
  {
    "id": "46-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "46ª Notaría de Santiago",
    "notario": "Cargo vacante (Interino: Bernardo Mauricio Iturra Muñoz)",
    "comuna": "Ñuñoa",
    "direccion": "Av. Vicuña Mackenna 814, Ñuñoa",
    "telefonos": [
      "+56323795702"
    ],
    "horario": "Lunes a viernes 09:00-14:00 y 15:00-17:00",
    "web": ""
  },
  {
    "id": "47-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "47ª Notaría de Santiago",
    "notario": "Elias Karim Jarufe Rojas",
    "comuna": "Ñuñoa",
    "direccion": "Av. Pedro de Valdivia 3317, Ñuñoa",
    "telefonos": [],
    "horario": "Lunes a viernes 09:30-16:00",
    "web": "",
    "publico": "Notaría Elias Karim Jarufe Rojas"
  },
  {
    "id": "48-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "48ª Notaría de Santiago",
    "notario": "Patricia Valentina Manríquez Huerta",
    "comuna": "Las Condes",
    "direccion": "Av. Apoquindo 3076, oficina 601, Las Condes",
    "telefonos": [
      "+56224272800"
    ],
    "horario": "Lunes a viernes 9:00-13:30 y 14:45-17:00",
    "web": "",
    "publico": "Notaría Patricia Valentina Manríquez Huerta"
  },
  {
    "id": "49-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "49ª Notaría de Santiago",
    "notario": "Wladimir Alejandro Schramm López",
    "comuna": "Santiago",
    "direccion": "Amunátegui 73, Santiago",
    "telefonos": [
      "+56228893900"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:30",
    "web": "",
    "publico": "Notaría Wladimir Alejandro Schramm López"
  },
  {
    "id": "50-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "50ª Notaría de Santiago",
    "notario": "Claudia Marcela Gómez Lucares",
    "comuna": "Santiago",
    "direccion": "Teatinos 371, oficina 113, Santiago",
    "telefonos": [
      "+56228419910"
    ],
    "horario": "Lunes a jueves 09:00-17:30; viernes 09:00-17:00",
    "web": "",
    "publico": "Notaría Claudia Marcela Gómez Lucares"
  },
  {
    "id": "51-notaria-de-santiago",
    "region": "Metropolitana",
    "nombre": "51ª Notaría de Santiago",
    "notario": "Francisco José Hollmann Ovalle",
    "comuna": "Providencia",
    "direccion": "Av. Providencia 2600, Providencia",
    "telefonos": [
      "+56981762788",
      "+56989580196"
    ],
    "horario": "Lunes a jueves 09:10-14:00 y 14:50-17:00; viernes 09:00-16:00",
    "web": "",
    "publico": "Notaría Francisco José Hollmann Ovalle"
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-providencia",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Providencia",
    "notario": "Luis Eduardo Rodríguez Burr",
    "comuna": "Providencia",
    "direccion": "Av. Providencia 1777, Providencia",
    "telefonos": [
      "+56222355616",
      "+56952309086"
    ],
    "horario": "Lunes a viernes 8:30-13:45 y 15:00-16:45; sábado 9:30-13:30",
    "web": "",
    "publico": "Notaría Luis Eduardo Rodríguez Burr"
  },
  {
    "id": "2-notaria-de-santiago-con-asiento-en-providencia",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Santiago con asiento en Providencia",
    "notario": "Cargo vacante (Interina: Paulina Constanza Celis Maggi)",
    "comuna": "Providencia",
    "direccion": "Av. Luis Thayer Ojeda 045, Providencia",
    "telefonos": [
      "+56226923000"
    ],
    "horario": "Lunes a jueves 09:00-17:45; viernes 09:00-16:00",
    "web": ""
  },
  {
    "id": "3-notaria-de-santiago-con-asiento-en-providencia",
    "region": "Metropolitana",
    "nombre": "3ª Notaría de Santiago con asiento en Providencia",
    "notario": "Alejandra del Carmen Loyola Ojeda",
    "comuna": "Providencia",
    "direccion": "Tobalaba 1469, Providencia",
    "telefonos": [
      "+56942135660",
      "+56228488088"
    ],
    "horario": "Lunes a jueves 09:00-17:30; viernes 9:00-17:00; sábado 9:30-13:30",
    "web": "",
    "publico": "Notaría Alejandra del Carmen Loyola Ojeda"
  },
  {
    "id": "4-notaria-de-santiago-con-asiento-en-providencia",
    "region": "Metropolitana",
    "nombre": "4ª Notaría de Santiago con asiento en Providencia",
    "notario": "Cargo vacante sin proveer",
    "comuna": "Providencia",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-las-condes",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Las Condes",
    "notario": "Cargo vacante (Interina: Lilia Eugenia Sierra Mejía)",
    "comuna": "Las Condes",
    "direccion": "Av. Apoquindo 4943, Las Condes",
    "telefonos": [
      "+56233755100"
    ],
    "horario": "Lunes a jueves 08:30-17:00; viernes 08:30-16:00",
    "web": ""
  },
  {
    "id": "2-notaria-de-santiago-con-asiento-en-las-condes",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Santiago con asiento en Las Condes",
    "notario": "Juan Luis Saiz del Campo",
    "comuna": "Las Condes",
    "direccion": "Av. Apoquindo 6448, Las Condes",
    "telefonos": [
      "+56224156495"
    ],
    "horario": "Lunes a viernes 09:00-17:30 continuado",
    "web": "",
    "publico": "Notaría Juan Luis Saiz del Campo"
  },
  {
    "id": "3-notaria-de-santiago-con-asiento-en-las-condes",
    "region": "Metropolitana",
    "nombre": "3ª Notaría de Santiago con asiento en Las Condes",
    "notario": "Cargo vacante sin proveer",
    "comuna": "Las Condes",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-vitacura",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Vitacura",
    "notario": "Mónica Lorena Figueroa Carvajal",
    "comuna": "Vitacura",
    "direccion": "Vitacura 6844, local -1, Vitacura",
    "telefonos": [
      "+56222192779",
      "+56945912849"
    ],
    "horario": "Lunes a viernes 09:00-16:00",
    "web": "",
    "publico": "Notaría Mónica Lorena Figueroa Carvajal"
  },
  {
    "id": "2-notaria-de-santiago-con-asiento-en-vitacura",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Santiago con asiento en Vitacura",
    "notario": "Luis Alberto Maldonado Concha",
    "comuna": "Vitacura",
    "direccion": "Av. Vitacura 3568, local 1, Vitacura",
    "telefonos": [
      "+56225831300",
      "+56930331079"
    ],
    "horario": "Lunes a jueves 9:00-17:00; viernes 8:00-15:00",
    "web": "",
    "publico": "Notaría Luis Alberto Maldonado Concha"
  },
  {
    "id": "3-notaria-de-santiago-con-asiento-en-vitacura",
    "region": "Metropolitana",
    "nombre": "3ª Notaría de Santiago con asiento en Vitacura",
    "notario": "Gloria Valeska del Carmen Ortiz Carmona",
    "comuna": "Vitacura",
    "direccion": "Av. Vitacura 4607, Vitacura",
    "telefonos": [
      "+56940005543",
      "+56222340175"
    ],
    "horario": "Lunes a jueves 9:00-17:30; viernes 9:00-16:30; sábado 9:30-12:30",
    "web": "",
    "publico": "Notaría Gloria Valeska del Carmen Ortiz Carmona"
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-lo-barnechea",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Lo Barnechea",
    "notario": "Claudio Andrés Salvador Cabezas",
    "comuna": "Lo Barnechea",
    "direccion": "Av. La Dehesa 1450, local 1, Lo Barnechea",
    "telefonos": [
      "+56232637240",
      "+56951900420"
    ],
    "horario": "Lunes a viernes 09:00-13:45 y 15:00-17:15; sábado 9:45-13:15",
    "web": "",
    "publico": "Notaría Claudio Andrés Salvador Cabezas"
  },
  {
    "id": "2-notaria-de-santiago-con-asiento-en-lo-barnechea",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Santiago con asiento en Lo Barnechea",
    "notario": "Patricio Guillermo Corominas Mellado",
    "comuna": "Lo Barnechea",
    "direccion": "Av. La Dehesa 1201, local 101, Strip Center Centro La Dehesa, Lo Barnechea",
    "telefonos": [
      "+56222407140"
    ],
    "horario": "Lunes a viernes 09:00-17:00 continuado",
    "web": "",
    "publico": "Notaría Patricio Guillermo Corominas Mellado"
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-nunoa",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Ñuñoa",
    "notario": "Eduardo Esteban Roco Campos",
    "comuna": "Ñuñoa",
    "direccion": "Av. Irarrázaval 1745, local B, Ñuñoa",
    "telefonos": [
      "+56944389326"
    ],
    "horario": "Lunes a viernes 09:00-14:00 y 15:00-17:00",
    "web": "",
    "publico": "Notaría Eduardo Esteban Roco Campos"
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-la-reina",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en La Reina",
    "notario": "Pablo Javier Martínez Loaiza",
    "comuna": "La Reina",
    "direccion": "Av. Príncipe de Gales 5841, La Reina",
    "telefonos": [
      "+56224761752",
      "+56224761751"
    ],
    "horario": "Lunes a jueves 08:30-17:00; viernes 8:30-16:00; sábado 10:00-13:00",
    "web": "",
    "publico": "Notaría Pablo Javier Martínez Loaiza"
  },
  {
    "id": "2-notaria-de-santiago-con-asiento-en-la-reina",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Santiago con asiento en La Reina",
    "notario": "Cargo vacante sin proveer",
    "comuna": "La Reina",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-macul",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Macul",
    "notario": "Cargo vacante (Interino: Juan Paulo Vera Montero)",
    "comuna": "Macul",
    "direccion": "Av. Gregorio de la Fuente 3143, Macul",
    "telefonos": [
      "+56223478900"
    ],
    "horario": "Lunes a viernes 09:00-13:45 y 15:00-16:30",
    "web": ""
  },
  {
    "id": "2-notaria-de-santiago-con-asiento-en-macul",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Santiago con asiento en Macul",
    "notario": "Cargo vacante sin proveer",
    "comuna": "Macul",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-penalolen",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Peñalolén",
    "notario": "Pedro Luis Parra Ahumada",
    "comuna": "Peñalolén",
    "direccion": "Av. Grecia 5616, piso 2, Peñalolén",
    "telefonos": [
      "+56222724550",
      "+56222721664"
    ],
    "horario": "Lunes a jueves 9:00-14:00 y 15:30-18:00; viernes 9:00-14:00 y 15:30-17:00; sábado 9:30-13:30",
    "web": "",
    "publico": "Notaría Pedro Luis Parra Ahumada"
  },
  {
    "id": "2-notaria-de-santiago-con-asiento-en-penalolen",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Santiago con asiento en Peñalolén",
    "notario": "Guillermo Carlos Solar Pérez",
    "comuna": "Peñalolén",
    "direccion": "Av. Quilín 5283, Peñalolén",
    "telefonos": [
      "+56233415894",
      "+56950211012"
    ],
    "horario": "Lunes a viernes 9:00-17:00",
    "web": "",
    "publico": "Notaría Guillermo Carlos Solar Pérez"
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-la-florida",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en La Florida",
    "notario": "Cargo vacante (Interino: Julio Andres Monje Silva)",
    "comuna": "La Florida",
    "direccion": "Av. Vicuña Mackenna Poniente 7131, La Florida",
    "telefonos": [
      "+56222937003",
      "+56958972551"
    ],
    "horario": "Lunes a viernes 09:00-16:45 continuado",
    "web": ""
  },
  {
    "id": "2-notaria-de-santiago-con-asiento-en-la-florida",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Santiago con asiento en La Florida",
    "notario": "Jaime Andrés Bernales Larraín",
    "comuna": "La Florida",
    "direccion": "Av. Vicuña Mackenna Oriente 7163, La Florida",
    "telefonos": [],
    "horario": "Lunes a viernes 08:30-17:30",
    "web": "",
    "publico": "Notaría Jaime Andrés Bernales Larraín"
  },
  {
    "id": "3-notaria-de-santiago-con-asiento-en-la-florida",
    "region": "Metropolitana",
    "nombre": "3ª Notaría de Santiago con asiento en La Florida",
    "notario": "Cargo vacante sin proveer",
    "comuna": "La Florida",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-recoleta",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Recoleta",
    "notario": "Cargo vacante sin proveer",
    "comuna": "Recoleta",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-cerrillos",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Cerrillos",
    "notario": "Felipe Alfonso Finalteri Barra",
    "comuna": "Cerrillos",
    "direccion": "Av. Pedro Aguirre Cerda 6087, 2° piso, Cerrillos",
    "telefonos": [
      "+56229276948",
      "+56229276949"
    ],
    "horario": "Lunes a viernes 09:15 a 17:00; sábados 10:00 a 13:00",
    "web": "",
    "publico": "Notaría Felipe Alfonso Finalteri Barra"
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-cerro-navia",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Cerro Navia",
    "notario": "Cargo vacante (Interino: Fabián Andrés del Solar Soto)",
    "comuna": "Cerro Navia",
    "direccion": "Av. José Joaquín Pérez 6658, Cerro Navia",
    "telefonos": [
      "+56986102010"
    ],
    "horario": "Lunes a viernes 9:00 a 13:30 y 15:00 a 17:00; sábado 10:00 a 13:00",
    "web": ""
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-conchali",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Conchalí",
    "notario": "Cargo vacante (Interino: Carlos Armando Contreras Fuentes)",
    "comuna": "Conchalí",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-estacion-central",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Estación Central",
    "notario": "Gabriel Rolando Nahuel López",
    "comuna": "Estación Central",
    "direccion": "Av. Libertador Bernardo O'Higgins 3250, local SD 032-038, Estación Central",
    "telefonos": [
      "+56922268049"
    ],
    "horario": "Lunes a viernes 09:00 a 17:00; sábados 09:00 a 13:00",
    "web": "",
    "publico": "Notaría Gabriel Rolando Nahuel López"
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-huechuraba",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Huechuraba",
    "notario": "Mauricio Javier Bertolino Rendic",
    "comuna": "Huechuraba",
    "direccion": "Av. Américo Vespucio 1737, local BP 169, Huechuraba",
    "telefonos": [
      "+56225860475"
    ],
    "horario": "Lunes y martes 08:30 a 18:00; miércoles a viernes 08:30 a 17:00",
    "web": "",
    "publico": "Notaría Mauricio Javier Bertolino Rendic"
  },
  {
    "id": "2-notaria-de-santiago-con-asiento-en-huechuraba",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Santiago con asiento en Huechuraba",
    "notario": "Cargo vacante sin proveer",
    "comuna": "Huechuraba",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-independencia",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Independencia",
    "notario": "Alejandro Javier Guerra Pinto",
    "comuna": "Independencia",
    "direccion": "Av. Independencia 873 A, Independencia",
    "telefonos": [
      "+56233613710"
    ],
    "horario": "Lunes a viernes 8:30-18:00 continuado; sábado 9:30-13:00",
    "web": "",
    "publico": "Notaría Alejandro Javier Guerra Pinto"
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-lo-prado",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Lo Prado",
    "notario": "Rodrigo Esteban Aravena Gajardo",
    "comuna": "Lo Prado",
    "direccion": "Av. Neptuno 810 D, segundo piso, Lo Prado",
    "telefonos": [
      "+56229491652"
    ],
    "horario": "Lunes a viernes 08:30-13:30 y 14:00-16:00; sábados 09:00-12:30",
    "web": "",
    "publico": "Notaría Rodrigo Esteban Aravena Gajardo"
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-maipu",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Maipú",
    "notario": "Abner Bernabé Poza Matus",
    "comuna": "Maipú",
    "direccion": "General Ordóñez 155, oficina 203, Maipú",
    "telefonos": [
      "+56229451465"
    ],
    "horario": "Lunes a viernes 08:30 a 17:00; sábados 09:00 a 13:00",
    "web": "",
    "publico": "Notaría Abner Bernabé Poza Matus"
  },
  {
    "id": "2-notaria-de-santiago-con-asiento-en-maipu",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Santiago con asiento en Maipú",
    "notario": "Marco Francisco Urenda Bilicic",
    "comuna": "Maipú",
    "direccion": "Av. Pajaritos 4500, local 10, Maipú",
    "telefonos": [
      "+56232753200"
    ],
    "horario": "Lunes a jueves 8:30 a 16:30; viernes 8:30 a 15:30",
    "web": "",
    "publico": "Notaría Marco Francisco Urenda Bilicic"
  },
  {
    "id": "3-notaria-de-santiago-con-asiento-en-maipu",
    "region": "Metropolitana",
    "nombre": "3ª Notaría de Santiago con asiento en Maipú",
    "notario": "Cargo vacante sin proveer",
    "comuna": "Maipú",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-pudahuel",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Pudahuel",
    "notario": "Cargo vacante (Interina: Soledad Andrea Farr Tapia)",
    "comuna": "Pudahuel",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "2-notaria-de-santiago-con-asiento-en-pudahuel",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Santiago con asiento en Pudahuel",
    "notario": "Paulo Andrés Escobar Caro",
    "comuna": "Pudahuel",
    "direccion": "Av. Teniente Cruz 570, local 5, Pudahuel",
    "telefonos": [
      "+56932415000"
    ],
    "horario": "Lunes a viernes 08:30 a 15:30",
    "web": "",
    "publico": "Notaría Paulo Andrés Escobar Caro"
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-quilicura",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Quilicura",
    "notario": "Cargo vacante (Interino: Claudio Marcelo Delgado Gutiérrez)",
    "comuna": "Quilicura",
    "direccion": "José Francisco Vergara 328, Quilicura",
    "telefonos": [
      "+56233406140",
      "+56224616216"
    ],
    "horario": "Lunes a viernes 8:30-17:00 continuado; sábado 9:30-13:00",
    "web": ""
  },
  {
    "id": "2-notaria-de-santiago-con-asiento-en-quilicura",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Santiago con asiento en Quilicura",
    "notario": "Cargo vacante sin proveer",
    "comuna": "Quilicura",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-quinta-normal",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Quinta Normal",
    "notario": "Cargo vacante (Interino: Luis Orlando Cartagena Sanchez)",
    "comuna": "Quinta Normal",
    "direccion": "Mapocho 4167, Quinta Normal",
    "telefonos": [
      "+56228692890",
      "+56942074962"
    ],
    "horario": "Lunes a jueves 09:00-14:00 y 15:00-18:00; viernes 09:00-14:00 y 15:00-17:30",
    "web": ""
  },
  {
    "id": "1-notaria-de-santiago-con-asiento-en-renca",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Santiago con asiento en Renca",
    "notario": "Cargo vacante (Interino: Francisco Javier Ahumada Castillo)",
    "comuna": "Renca",
    "direccion": "Av. Domingo Santa María 3629, Renca",
    "telefonos": [
      "+56225335121",
      "+56994866874"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00",
    "web": ""
  },
  {
    "id": "2-notaria-de-santiago-con-asiento-en-renca",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Santiago con asiento en Renca",
    "notario": "Cargo vacante sin proveer",
    "comuna": "Renca",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-san-miguel",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de San Miguel",
    "notario": "Rodrigo Enrique Ortúzar Rodríguez",
    "comuna": "San Miguel",
    "direccion": "Gran Av. José Miguel Carrera 4541, San Miguel",
    "telefonos": [
      "+56222988801"
    ],
    "horario": "Lunes a jueves 09:00-17:30; viernes 09:00-16:45; sábado 9:30-13:30",
    "web": "",
    "publico": "Notaría Rodrigo Enrique Ortúzar Rodríguez"
  },
  {
    "id": "2-notaria-de-san-miguel",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de San Miguel",
    "notario": "Cargo vacante (Interino: Fabián Esteban Díaz Contreras)",
    "comuna": "San Miguel",
    "direccion": "María Auxiliadora 1077, San Miguel",
    "telefonos": [
      "+56936195647"
    ],
    "horario": "Lunes a viernes 09:00-17:00; sábado 09:00-13:30",
    "web": ""
  },
  {
    "id": "3-notaria-de-san-miguel",
    "region": "Metropolitana",
    "nombre": "3ª Notaría de San Miguel",
    "notario": "Verónica de las Mercedes Villaseñor Pavez",
    "comuna": "San Miguel",
    "direccion": "Gran Av. José Miguel Carrera 2836-A, San Miguel",
    "telefonos": [],
    "horario": "Lunes a viernes 9:00 a 13:45 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría Verónica de las Mercedes Villaseñor Pavez"
  },
  {
    "id": "4-notaria-de-san-miguel",
    "region": "Metropolitana",
    "nombre": "4ª Notaría de San Miguel",
    "notario": "Gonzalo Fernando Harambillet Melero",
    "comuna": "San Miguel",
    "direccion": "Gran Av. José Miguel Carrera 4251, local 2, San Miguel",
    "telefonos": [
      "+56229847523"
    ],
    "horario": "Lunes a viernes 08:00 a 15:30",
    "web": "",
    "publico": "Notaría Gonzalo Fernando Harambillet Melero"
  },
  {
    "id": "5-notaria-de-san-miguel",
    "region": "Metropolitana",
    "nombre": "5ª Notaría de San Miguel",
    "notario": "Eduardo Antonio Fuenzalida Robledo",
    "comuna": "San Miguel",
    "direccion": "Gran Av. José Miguel Carrera 4410, San Miguel",
    "telefonos": [
      "+56225559806"
    ],
    "horario": "Lunes a viernes 9:00 a 17:00 continuado",
    "web": "",
    "publico": "Notaría Eduardo Antonio Fuenzalida Robledo"
  },
  {
    "id": "6-notaria-de-san-miguel",
    "region": "Metropolitana",
    "nombre": "6ª Notaría de San Miguel",
    "notario": "Cargo vacante (Interino: César Alexander Maturana Pérez)",
    "comuna": "San Miguel",
    "direccion": "Ramón Subercaseaux 1244, San Miguel",
    "telefonos": [
      "+56232465320"
    ],
    "horario": "Lunes a jueves 8:30 a 16:30; viernes 8:30 a 15:30",
    "web": ""
  },
  {
    "id": "7-notaria-de-san-miguel",
    "region": "Metropolitana",
    "nombre": "7ª Notaría de San Miguel",
    "notario": "Alejandra Isabel Ugalde Castro",
    "comuna": "San Joaquín",
    "direccion": "Santa Elena 2236, San Joaquín",
    "telefonos": [
      "+56233627291",
      "+56928041291"
    ],
    "horario": "Lunes a viernes 9:00-17:30; sábado 9:00-13:00",
    "web": "",
    "publico": "Notaría Alejandra Isabel Ugalde Castro"
  },
  {
    "id": "8-notaria-de-san-miguel",
    "region": "Metropolitana",
    "nombre": "8ª Notaría de San Miguel",
    "notario": "Cargo vacante (Interino: Rafael Augusto Comte Naranjo)",
    "comuna": "San Miguel",
    "direccion": "Gran Av. José Miguel Carrera 2536, San Miguel",
    "telefonos": [
      "+56978455761",
      "+56233471440"
    ],
    "horario": "Lunes a viernes 9:00 a 17:00",
    "web": ""
  },
  {
    "id": "9-notaria-de-san-miguel",
    "region": "Metropolitana",
    "nombre": "9ª Notaría de San Miguel",
    "notario": "Jorge Reyes Bessone",
    "comuna": "San Miguel",
    "direccion": "Gran Av. José Miguel Carrera 4886, San Miguel",
    "telefonos": [
      "+56232642174",
      "+56989600248"
    ],
    "horario": "Lunes a viernes 09:00 a 16:30",
    "web": "",
    "publico": "Notaría Jorge Reyes Bessone"
  },
  {
    "id": "10-notaria-y-archivero-de-san-miguel",
    "region": "Metropolitana",
    "nombre": "10ª Notaría y Archivero de San Miguel",
    "notario": "Claudio Rafael Barrena Eyzaguirre",
    "comuna": "San Miguel",
    "direccion": "Av. José Miguel Carrera 2572, San Miguel",
    "telefonos": [
      "+56225562702",
      "+56225517790"
    ],
    "horario": "Lunes a jueves 08:30-14:00 y 15:00-17:30; viernes 09:00-14:00 y 15:00-17:00",
    "web": "",
    "publico": "Notaría Claudio Rafael Barrena Eyzaguirre"
  },
  {
    "id": "1-notaria-de-san-miguel-con-asiento-en-la-pintana",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de San Miguel con asiento en La Pintana",
    "notario": "Cargo vacante sin proveer",
    "comuna": "La Pintana",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-san-miguel-con-asiento-en-pedro-aguirre-cerda",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de San Miguel con asiento en Pedro Aguirre Cerda",
    "notario": "Rodrigo Arturo Jara Lara",
    "comuna": "Pedro Aguirre Cerda",
    "direccion": "Núcleo Ochagavía, local 11B, Pedro Aguirre Cerda",
    "telefonos": [
      "+56988882416"
    ],
    "horario": "Lunes a viernes 08:30 a 15:30",
    "web": "",
    "publico": "Notaría Rodrigo Arturo Jara Lara"
  },
  {
    "id": "1-notaria-de-san-miguel-con-asiento-en-la-cisterna",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de San Miguel con asiento en La Cisterna",
    "notario": "Jorge Andrés Ossa Cuevas",
    "comuna": "La Cisterna",
    "direccion": "Gran Av. José Miguel Carrera 7710, La Cisterna",
    "telefonos": [
      "+56224036399",
      "+56974008772"
    ],
    "horario": "Lunes a viernes 8:30 a 15:30 continuado",
    "web": "",
    "publico": "Notaría Jorge Andrés Ossa Cuevas"
  },
  {
    "id": "2-notaria-de-san-miguel-con-asiento-en-la-cisterna",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de San Miguel con asiento en La Cisterna",
    "notario": "Sergio Waldo Arenas Benoni",
    "comuna": "La Cisterna",
    "direccion": "Av. José Miguel Carrera 7930, La Cisterna",
    "telefonos": [
      "+56979552167",
      "+56945528711"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00; sábados 09:00 a 13:00",
    "web": "",
    "publico": "Notaría Sergio Waldo Arenas Benoni"
  },
  {
    "id": "3-notaria-de-san-miguel-con-asiento-en-la-cisterna",
    "region": "Metropolitana",
    "nombre": "3ª Notaría de San Miguel con asiento en La Cisterna",
    "notario": "Zaida del Carmen Silva Arriagada",
    "comuna": "La Cisterna",
    "direccion": "Gran Av. José Miguel Carrera 7972, La Cisterna",
    "telefonos": [
      "+56936935595"
    ],
    "horario": "Lunes a jueves 09:00 a 17:00; viernes 09:00 a 16:00",
    "web": "",
    "publico": "Notaría Zaida del Carmen Silva Arriagada"
  },
  {
    "id": "4-notaria-de-san-miguel-con-asiento-en-la-cisterna",
    "region": "Metropolitana",
    "nombre": "4ª Notaría de San Miguel con asiento en La Cisterna",
    "notario": "Cargo vacante (Interino: Francisco Javier Hermida Brevis)",
    "comuna": "La Cisterna",
    "direccion": "Gran Av. José Miguel Carrera 8685, paradero 24, La Cisterna",
    "telefonos": [
      "+56227852246"
    ],
    "horario": "Lunes a viernes 09:00 a 17:00 continuado",
    "web": ""
  },
  {
    "id": "5-notaria-de-san-miguel-con-asiento-en-la-cisterna",
    "region": "Metropolitana",
    "nombre": "5ª Notaría de San Miguel con asiento en La Cisterna",
    "notario": "Álvaro Rodrigo Sanhueza Tasso",
    "comuna": "La Cisterna",
    "direccion": "General Freire 55, La Cisterna",
    "telefonos": [
      "+56229219783"
    ],
    "horario": "Lunes a viernes 9:00-17:00; sábado 9:30-13:30",
    "web": "",
    "publico": "Notaría Álvaro Rodrigo Sanhueza Tasso"
  },
  {
    "id": "6-notaria-de-san-miguel-con-asiento-en-la-cisterna",
    "region": "Metropolitana",
    "nombre": "6ª Notaría de San Miguel con asiento en La Cisterna",
    "notario": "Cargo vacante sin proveer",
    "comuna": "La Cisterna",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-san-miguel-con-asiento-en-la-granja",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de San Miguel con asiento en La Granja",
    "notario": "Cargo vacante (Interina: Paula Fabiola Guerrero Cortes)",
    "comuna": "La Granja",
    "direccion": "Av. Santa Rosa 7976, local A, La Granja",
    "telefonos": [
      "+56993101554"
    ],
    "horario": "Lunes a jueves 09:00-18:00; viernes 09:00-16:30; sábado 10:00-13:00",
    "web": ""
  },
  {
    "id": "2-notaria-de-san-miguel-con-asiento-en-la-granja",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de San Miguel con asiento en La Granja",
    "notario": "Cargo vacante (Interino: Iván Andrés Salamanca Ortega)",
    "comuna": "La Granja",
    "direccion": "Av. Santa Rosa 8850-C, 2° piso, La Granja",
    "telefonos": [
      "+56936568833"
    ],
    "horario": "Lunes a viernes 09:00 a 17:00 continuado",
    "web": ""
  },
  {
    "id": "1-notaria-de-san-miguel-con-asiento-en-el-bosque",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de San Miguel con asiento en El Bosque",
    "notario": "Esmeralda Luz Muñoz Iglesias",
    "comuna": "El Bosque",
    "direccion": "Gran Av. José Miguel Carrera 12536, paradero 36, El Bosque",
    "telefonos": [
      "+56227802620",
      "+56944576171"
    ],
    "horario": "Lunes a viernes 09:00 a 17:00",
    "web": "",
    "publico": "Notaría Esmeralda Luz Muñoz Iglesias"
  },
  {
    "id": "1-notaria-de-san-miguel-con-asiento-en-lo-espejo",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de San Miguel con asiento en Lo Espejo",
    "notario": "María Elena Leiva Carvajal",
    "comuna": "Lo Espejo",
    "direccion": "Osa Menor 03506, Lo Espejo",
    "telefonos": [
      "+56233453213",
      "+56233454269"
    ],
    "horario": "Lunes a viernes 08:30 a 16:30 continuado",
    "web": "",
    "publico": "Notaría María Elena Leiva Carvajal"
  },
  {
    "id": "1-notaria-de-san-miguel-con-asiento-en-san-joaquin",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de San Miguel con asiento en San Joaquín",
    "notario": "Boris Alejandro Aravena Estobar",
    "comuna": "San Joaquín",
    "direccion": "Av. Vicuña Mackenna 3125, San Joaquín",
    "telefonos": [
      "+56222138624",
      "+56926060053"
    ],
    "horario": "Lunes a viernes 9:00 a 17:30; sábado 10:00 a 13:00",
    "web": "",
    "publico": "Notaría Boris Alejandro Aravena Estobar"
  },
  {
    "id": "1-notaria-de-san-miguel-con-asiento-en-san-ramon",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de San Miguel con asiento en San Ramón",
    "notario": "Marcela Andrea Medina Ricci",
    "comuna": "San Ramón",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": "",
    "publico": "Notaría Marcela Andrea Medina Ricci"
  },
  {
    "id": "1-notaria-de-puente-alto",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Puente Alto",
    "notario": "Cargo vacante (Interino: Tomas Pablo Tiznado Muller)",
    "comuna": "Puente Alto",
    "direccion": "Manuel Rodríguez 053, Galería Oasis, locales 115-205, Puente Alto",
    "telefonos": [
      "+56222660966"
    ],
    "horario": "Lunes a viernes 9:00 a 17:00 continuado",
    "web": ""
  },
  {
    "id": "2-notaria-de-puente-alto",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Puente Alto",
    "notario": "Mabel Alejandra Llano Díaz",
    "comuna": "Puente Alto",
    "direccion": "José Luis Coo 0187, Puente Alto",
    "telefonos": [
      "+56228500795",
      "+56930771403"
    ],
    "horario": "Lunes a viernes 8:30 a 17:00",
    "web": "",
    "publico": "Notaría Mabel Alejandra Llano Díaz"
  },
  {
    "id": "3-notaria-de-puente-alto",
    "region": "Metropolitana",
    "nombre": "3ª Notaría de Puente Alto",
    "notario": "Cargo vacante (Interino: Gonzalo Alejandro Cortés Yakcich)",
    "comuna": "Puente Alto",
    "direccion": "Balmaceda 403, Puente Alto",
    "telefonos": [
      "+56228500549"
    ],
    "horario": "Lunes a viernes 9:00 a 17:00; sábado de turno 9:00 a 13:00",
    "web": ""
  },
  {
    "id": "4-notaria-de-puente-alto",
    "region": "Metropolitana",
    "nombre": "4ª Notaría de Puente Alto",
    "notario": "Andrés Vega Alvarado",
    "comuna": "Puente Alto",
    "direccion": "Balmaceda 371, local 113, Puente Alto",
    "telefonos": [
      "+56228507837",
      "+56987621358"
    ],
    "horario": "Lunes a viernes 8:45 a 17:30; turno sábado 9:00 a 13:30",
    "web": "",
    "publico": "Notaría Andrés Vega Alvarado"
  },
  {
    "id": "5-notaria-de-puente-alto-con-asiento-en-pirque",
    "region": "Metropolitana",
    "nombre": "5ª Notaría de Puente Alto con asiento en Pirque",
    "notario": "Gloria del Pilar Jacome Sepúlveda",
    "comuna": "Pirque",
    "direccion": "Carlos Vial Infante 10, locales 5, 12-14, Edificio Centro Plaza Pirque, Pirque",
    "telefonos": [
      "+56920368087",
      "+56955103818"
    ],
    "horario": "Lunes a viernes 09:00-17:00",
    "web": "",
    "publico": "Notaría Gloria del Pilar Jacome Sepúlveda"
  },
  {
    "id": "6-notaria-de-puente-alto",
    "region": "Metropolitana",
    "nombre": "6ª Notaría de Puente Alto",
    "notario": "Raimundo Javier Wood Espinoza",
    "comuna": "Puente Alto",
    "direccion": "Sergio Roubillard 66, Puente Alto",
    "telefonos": [
      "+56233475812"
    ],
    "horario": "Lunes a viernes 9:00 a 17:00; sábados de turno 9:00 a 13:00",
    "web": "",
    "publico": "Notaría Raimundo Javier Wood Espinoza"
  },
  {
    "id": "7-notaria-de-puente-alto-con-asiento-en-san-jose-de-maipo",
    "region": "Metropolitana",
    "nombre": "7ª Notaría de Puente Alto con asiento en San José de Maipo",
    "notario": "Cargo vacante sin proveer",
    "comuna": "San José de Maipo",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-san-bernardo",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de San Bernardo",
    "notario": "Carlos Virgilio Ruiz Bahamondes",
    "comuna": "San Bernardo",
    "direccion": "Covadonga 516 esquina Freire 566, segundo piso, locales 13-14, Centro Comercial Portal Freire, San Bernardo",
    "telefonos": [
      "+56225273192"
    ],
    "horario": "Lunes a viernes 8:00 a 15:00; sábados de turno 9:00 a 12:30",
    "web": "",
    "publico": "Notaría Carlos Virgilio Ruiz Bahamondes"
  },
  {
    "id": "2-notaria-de-san-bernardo",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de San Bernardo",
    "notario": "Cargo vacante (Interina: Cheryll Elizabeth Suazo Vivanco)",
    "comuna": "San Bernardo",
    "direccion": "O'Higgins 359, San Bernardo",
    "telefonos": [
      "+56228583928"
    ],
    "horario": "Lunes a jueves 9:00-17:00; viernes 9:00-16:00; sábado de turno 9:30-12:00",
    "web": ""
  },
  {
    "id": "3-notaria-de-san-bernardo",
    "region": "Metropolitana",
    "nombre": "3ª Notaría de San Bernardo",
    "notario": "Cargo vacante (Interina: Rocio de Lourdes Lizana Arenas)",
    "comuna": "San Bernardo",
    "direccion": "O'Higgins 460, San Bernardo",
    "telefonos": [
      "+56222390412"
    ],
    "horario": "Lunes a jueves 8:30 a 16:30; viernes 9:00 a 16:00",
    "web": ""
  },
  {
    "id": "4-notaria-de-san-bernardo",
    "region": "Metropolitana",
    "nombre": "4ª Notaría de San Bernardo",
    "notario": "Cargo vacante sin proveer",
    "comuna": "San Bernardo",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "5-notaria-de-san-bernardo-con-asiento-en-calera-de-tango",
    "region": "Metropolitana",
    "nombre": "5ª Notaría de San Bernardo con asiento en Calera de Tango",
    "notario": "Cargo vacante sin proveer",
    "comuna": "Calera de Tango",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-buin",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Buin",
    "notario": "Pedro Hernán Álvarez Lorca",
    "comuna": "Buin",
    "direccion": "Aníbal Pinto 269, local 5, Buin",
    "telefonos": [
      "+56228216492",
      "+56937357088"
    ],
    "horario": "Lunes, martes, jueves y viernes 08:30 a 17:00; miércoles 08:30 a 15:30",
    "web": "",
    "publico": "Notaría Pedro Hernán Álvarez Lorca"
  },
  {
    "id": "2-notaria-conservador-de-minas-y-archivero-de-buin",
    "region": "Metropolitana",
    "nombre": "2ª Notaría, Conservador de Minas y Archivero de Buin",
    "notario": "Myriam Rosa Inés Escobar Díaz",
    "comuna": "Buin",
    "direccion": "Av. José Manuel Balmaceda 316, Buin",
    "telefonos": [
      "+56228211605",
      "+56228213543"
    ],
    "horario": "Lunes a viernes 08:30-17:00; sábado de turno 09:30-12:30",
    "web": "",
    "publico": "Notaría Myriam Rosa Inés Escobar Díaz"
  },
  {
    "id": "3-notaria-de-buin-con-asiento-en-paine",
    "region": "Metropolitana",
    "nombre": "3ª Notaría de Buin con asiento en Paine",
    "notario": "Christian Rodrigo Yurin Araya",
    "comuna": "Paine",
    "direccion": "Concepción 246, Paine",
    "telefonos": [
      "+56993717222"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00 continuado",
    "web": "",
    "publico": "Notaría Christian Rodrigo Yurin Araya"
  },
  {
    "id": "1-notaria-de-talagante",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Talagante",
    "notario": "Roberto Fernando Puga Pino",
    "comuna": "Talagante",
    "direccion": "Arturo Prat 764, Talagante",
    "telefonos": [
      "+56225833924",
      "+56225833920"
    ],
    "horario": "Lunes a viernes 8:30 a 16:00 continuado; sábados 10:00-13:00",
    "web": "",
    "publico": "Notaría Roberto Fernando Puga Pino"
  },
  {
    "id": "2-notaria-de-talagante-con-asiento-en-el-monte",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Talagante con asiento en El Monte",
    "notario": "Isabel Margarita Bascuñán Lillo",
    "comuna": "El Monte",
    "direccion": "Camilo Henríquez 10, El Monte",
    "telefonos": [
      "+56233661684"
    ],
    "horario": "Lunes a viernes 08:30 a 15:30 continuado",
    "web": "",
    "publico": "Notaría Isabel Margarita Bascuñán Lillo"
  },
  {
    "id": "3-notaria-de-talagante-con-asiento-en-isla-de-maipo",
    "region": "Metropolitana",
    "nombre": "3ª Notaría de Talagante con asiento en Isla de Maipo",
    "notario": "Cargo vacante sin proveer",
    "comuna": "Isla de Maipo",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-penaflor",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Peñaflor",
    "notario": "Cargo vacante (Interina: Paulina Cecilia Miranda Hiriart)",
    "comuna": "Peñaflor",
    "direccion": "Arturo Prat 75, Peñaflor",
    "telefonos": [
      "+56228120034",
      "+56937461750"
    ],
    "horario": "Lunes a jueves 08:45 a 17:00; viernes 08:45 a 16:00",
    "web": ""
  },
  {
    "id": "2-notaria-de-penaflor-con-asiento-en-padre-hurtado",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Peñaflor con asiento en Padre Hurtado",
    "notario": "Francisca Soledad Álvarez Hurtado",
    "comuna": "Padre Hurtado",
    "direccion": "Rodolfo Jaramillo 2520, Padre Hurtado",
    "telefonos": [
      "+56226230886"
    ],
    "horario": "Lunes a viernes 09:00-16:00",
    "web": "",
    "publico": "Notaría Francisca Soledad Álvarez Hurtado"
  },
  {
    "id": "1-notaria-y-conservador-de-bienes-raices-de-melipilla",
    "region": "Metropolitana",
    "nombre": "1ª Notaría y Conservador de Bienes Raíces de Melipilla",
    "notario": "Cargo vacante (Interina: Andrea Aurora del Solar Rojas)",
    "comuna": "Melipilla",
    "direccion": "Serrano 264, Melipilla",
    "telefonos": [
      "+56228311271",
      "+56228316275"
    ],
    "horario": "Lunes a viernes 08:30 a 14:00 y 15:00 a 17:30",
    "web": ""
  },
  {
    "id": "2-notaria-y-conservador-de-comercio-de-melipilla",
    "region": "Metropolitana",
    "nombre": "2ª Notaría y Conservador de Comercio de Melipilla",
    "notario": "René Alejandro Martínez Loaiza",
    "comuna": "Melipilla",
    "direccion": "Av. Serrano 369, oficina 11, Melipilla",
    "telefonos": [
      "+56233148818"
    ],
    "horario": "Lunes a viernes 09:00 a 17:00; sábados 09:30 a 12:45",
    "web": "",
    "publico": "Notaría René Alejandro Martínez Loaiza"
  },
  {
    "id": "3-notaria-conservador-de-minas-y-archivero-de-melipilla",
    "region": "Metropolitana",
    "nombre": "3ª Notaría, Conservador de Minas y Archivero de Melipilla",
    "notario": "Jaime Arturo Contreras Miranda",
    "comuna": "Melipilla",
    "direccion": "Serrano 510, Melipilla",
    "telefonos": [
      "+56228320535",
      "+56935659765"
    ],
    "horario": "Lunes a viernes 09:00-14:00 y 15:30-18:00; sábado 10:00-12:00",
    "web": "",
    "publico": "Notaría Jaime Arturo Contreras Miranda"
  },
  {
    "id": "1-notaria-de-colina",
    "region": "Metropolitana",
    "nombre": "1ª Notaría de Colina",
    "notario": "Patricia Loreto Ahumada Rodríguez",
    "comuna": "Colina",
    "direccion": "Chacabuco 166, Colina",
    "telefonos": [
      "+56228445683"
    ],
    "horario": "Lunes a viernes 09:00-17:00",
    "web": "",
    "publico": "Notaría Patricia Loreto Ahumada Rodríguez"
  },
  {
    "id": "2-notaria-de-colina-con-asiento-en-lampa",
    "region": "Metropolitana",
    "nombre": "2ª Notaría de Colina con asiento en Lampa",
    "notario": "Gilda Elizabeth Miranda Córdova",
    "comuna": "Lampa",
    "direccion": "Panamericana Norte 16950, Lampa",
    "telefonos": [
      "+56228421817",
      "+56965840609"
    ],
    "horario": "Lunes a jueves 09:00 a 16:00; viernes 08:30 a 15:30",
    "web": "",
    "publico": "Notaría Gilda Elizabeth Miranda Córdova"
  },
  {
    "id": "3-notaria-de-colina",
    "region": "Metropolitana",
    "nombre": "3ª Notaría de Colina",
    "notario": "Gino Paolo Beneventi Alfaro",
    "comuna": "Colina",
    "direccion": "Caletera Oriente General San Martín 68, local 8b1, Colina",
    "telefonos": [
      "+56233477827"
    ],
    "horario": "Lunes a viernes 09:00 a 17:00",
    "web": "",
    "publico": "Notaría Gino Paolo Beneventi Alfaro"
  },
  {
    "id": "1-notaria-de-rancagua",
    "region": "O'Higgins",
    "nombre": "1ª Notaría de Rancagua",
    "notario": "Gerardo Andres Carvallo Castillo",
    "comuna": "Rancagua",
    "direccion": "Campos 466, Rancagua",
    "telefonos": [
      "+56722227597",
      "+56722228798"
    ],
    "horario": "Lunes a jueves 09:00-14:00 y 15:30-18:00; viernes 09:00-14:00 y 15:00-17:00",
    "web": "",
    "publico": "Notaría Gerardo Andres Carvallo Castillo"
  },
  {
    "id": "2-notaria-de-rancagua",
    "region": "O'Higgins",
    "nombre": "2ª Notaría de Rancagua",
    "notario": "Jorge Rodrigo Schwenke Zúñiga",
    "comuna": "Rancagua",
    "direccion": "Coronel Santiago Bueras 359, oficina 102, Rancagua",
    "telefonos": [
      "+56722845050",
      "+56934206092"
    ],
    "horario": "Lunes a viernes 09:00-17:00; sábados 09:00-12:00 (solo en mes de turno)",
    "web": "",
    "publico": "Notaría Jorge Rodrigo Schwenke Zúñiga"
  },
  {
    "id": "3-notaria-de-rancagua",
    "region": "O'Higgins",
    "nombre": "3ª Notaría de Rancagua",
    "notario": "Cargo vacante (Interino: Miguel Hugo Chacón Zeballos)",
    "comuna": "Rancagua",
    "direccion": "Campos 377, Rancagua",
    "telefonos": [
      "+56991427784",
      "+56993595180"
    ],
    "horario": "Lunes a viernes 9:00 a 14:00 y 15:00 a 17:00",
    "web": ""
  },
  {
    "id": "4-notaria-de-rancagua-con-asiento-en-graneros",
    "region": "O'Higgins",
    "nombre": "4ª Notaría de Rancagua con asiento en Graneros",
    "notario": "Guillermo Cristian Pérez Díaz",
    "comuna": "Graneros",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": "",
    "publico": "Notaría Guillermo Cristian Pérez Díaz"
  },
  {
    "id": "5-notaria-de-rancagua",
    "region": "O'Higgins",
    "nombre": "5ª Notaría de Rancagua",
    "notario": "Cecilia de las Mercedes Gálvez Pino",
    "comuna": "Rancagua",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": "",
    "publico": "Notaría Cecilia de las Mercedes Gálvez Pino"
  },
  {
    "id": "6-notaria-de-rancagua-con-asiento-en-machali",
    "region": "O'Higgins",
    "nombre": "6ª Notaría de Rancagua con asiento en Machalí",
    "notario": "Carla Silva Acharán",
    "comuna": "Machalí",
    "direccion": "Las Rosas 5, local 6 y local 12, Machalí",
    "telefonos": [
      "+56722427721",
      "+56990038855"
    ],
    "horario": "Lunes a jueves 09:00 a 14:00 y 15:00 a 17:00; viernes 09:00 a 16:00",
    "web": "",
    "publico": "Notaría Carla Silva Acharán"
  },
  {
    "id": "7-notaria-de-rancagua",
    "region": "O'Higgins",
    "nombre": "7ª Notaría de Rancagua",
    "notario": "Rodrigo Javier Díaz Suárez",
    "comuna": "Rancagua",
    "direccion": "Carretera del Cobre 340, local 3, Rancagua",
    "telefonos": [
      "+56722846294",
      "+56722846295"
    ],
    "horario": "Lunes a jueves 09:00 a 14:00 y 15:00 a 17:00; viernes 09:00 a 16:00",
    "web": "",
    "publico": "Notaría Rodrigo Javier Díaz Suárez"
  },
  {
    "id": "8-notaria-de-rancagua-con-asiento-en-donihue",
    "region": "O'Higgins",
    "nombre": "8ª Notaría de Rancagua con asiento en Doñihue",
    "notario": "Luisa Pamela Medina Schulz",
    "comuna": "Doñihue",
    "direccion": "Emilio Cuevas 328, Doñihue",
    "telefonos": [
      "+56443708888",
      "+56923885088"
    ],
    "horario": "Lunes a jueves 09:00 a 14:00 y 15:00 a 17:00; viernes 08:00 a 14:00 y 15:00 a 16:00",
    "web": "",
    "publico": "Notaría Luisa Pamela Medina Schulz"
  },
  {
    "id": "1-notaria-de-rengo",
    "region": "O'Higgins",
    "nombre": "1ª Notaría de Rengo",
    "notario": "Andrés Mauricio Falcón Valencia",
    "comuna": "Rengo",
    "direccion": "Portales 102-B, Rengo",
    "telefonos": [
      "+56222741121"
    ],
    "horario": "Lunes a viernes 08:30 a 13:45 y 15:00 a 17:00; sábado de turno 10:00 a 12:30",
    "web": "",
    "publico": "Notaría Andrés Mauricio Falcón Valencia"
  },
  {
    "id": "2-notaria-de-rengo",
    "region": "O'Higgins",
    "nombre": "2ª Notaría de Rengo",
    "notario": "Paulina Alejandra Valenzuela Valdés",
    "comuna": "Rengo",
    "direccion": "José Bisquert 75 D, Rengo",
    "telefonos": [
      "+56722608347",
      "+56942101464"
    ],
    "horario": "Lunes a viernes 09:00-16:00; sábado de turno 10:00-12:00",
    "web": "",
    "publico": "Notaría Paulina Alejandra Valenzuela Valdés"
  },
  {
    "id": "1-notaria-y-conservador-de-minas-de-san-vicente",
    "region": "O'Higgins",
    "nombre": "1ª Notaría y Conservador de Minas de San Vicente",
    "notario": "Gonzalo Andrés Camiruaga Pizarro",
    "comuna": "San Vicente",
    "direccion": "Carmen Gallegos 205, local 3, San Vicente",
    "telefonos": [
      "+56722571469",
      "+56974734115"
    ],
    "horario": "Lunes a jueves 08:30 a 14:00 y 15:00 a 17:00; viernes 08:30 a 16:15",
    "web": "",
    "publico": "Notaría Gonzalo Andrés Camiruaga Pizarro"
  },
  {
    "id": "2-notaria-de-san-vicente",
    "region": "O'Higgins",
    "nombre": "2ª Notaría de San Vicente",
    "notario": "Cargo vacante (Interino: Iván García Astaburuaga)",
    "comuna": "San Vicente",
    "direccion": "Carmen Gallegos 320, San Vicente",
    "telefonos": [
      "+56984238549"
    ],
    "horario": "Lunes a viernes 08:30 a 14:00 y 15:00 a 17:00; sábados de turno 09:00 a 12:00",
    "web": ""
  },
  {
    "id": "1-notaria-de-san-fernando",
    "region": "O'Higgins",
    "nombre": "1ª Notaría de San Fernando",
    "notario": "Alberto Ángel Ortega Jirón",
    "comuna": "San Fernando",
    "direccion": "Chillán 620, San Fernando",
    "telefonos": [
      "+56951916879",
      "+56938966832"
    ],
    "horario": "Lunes a viernes 08:30 a 15:30 continuado",
    "web": "",
    "publico": "Notaría Alberto Ángel Ortega Jirón"
  },
  {
    "id": "2-notaria-y-conservador-de-minas-de-san-fernando",
    "region": "O'Higgins",
    "nombre": "2ª Notaría y Conservador de Minas de San Fernando",
    "notario": "Cargo vacante (Interina: Carla Lorely Moreno Sanchez)",
    "comuna": "San Fernando",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "3-notaria-de-san-fernando-con-asiento-en-chimbarongo",
    "region": "O'Higgins",
    "nombre": "3ª Notaría de San Fernando con asiento en Chimbarongo",
    "notario": "Sebastián Jose Camiruaga Marshall",
    "comuna": "Chimbarongo",
    "direccion": "Javiera Carrera 328, primer piso, Chimbarongo",
    "telefonos": [
      "+56722781357",
      "+56991322566"
    ],
    "horario": "Lunes a viernes 09:00-13:50 y 15:00-16:50; sábados de turno 10:00-12:00",
    "web": "",
    "publico": "Notaría Sebastián Jose Camiruaga Marshall"
  },
  {
    "id": "1-notaria-conservador-de-bienes-raices-y-archivero-de-santa-",
    "region": "O'Higgins",
    "nombre": "1ª Notaría, Conservador de Bienes Raíces y Archivero de Santa Cruz",
    "notario": "Cargo vacante (Interino: Ricardo Antonio Larenas Peña)",
    "comuna": "Santa Cruz",
    "direccion": "Rafael Casanova 40, piso 2, Santa Cruz",
    "telefonos": [
      "+56722821268",
      "+56722829540"
    ],
    "horario": "Lunes a viernes 8:00 a 15:00",
    "web": ""
  },
  {
    "id": "2-notaria-y-conservador-de-comercio-y-de-minas-de-santa-cruz",
    "region": "O'Higgins",
    "nombre": "2ª Notaría y Conservador de Comercio y de Minas de Santa Cruz",
    "notario": "Cargo vacante (Interina: Angélica Andrea Castro Gutiérrez)",
    "comuna": "Santa Cruz",
    "direccion": "Claudio Cancino 60, Santa Cruz",
    "telefonos": [
      "+56722822829"
    ],
    "horario": "Lunes a viernes 09:00-16:00 continuado",
    "web": ""
  },
  {
    "id": "notaria-conservador-y-archivero-de-peumo",
    "region": "O'Higgins",
    "nombre": "Notaría, Conservador y Archivero de Peumo",
    "notario": "Alejandro Andrés Pardo Kuschel",
    "comuna": "Peumo",
    "direccion": "Vicuña Mackenna 80, Peumo",
    "telefonos": [],
    "horario": "Lunes a viernes 8:30-15:30",
    "web": "",
    "publico": "Notaría Alejandro Andrés Pardo Kuschel"
  },
  {
    "id": "notaria-conservador-y-archivero-de-pichilemu",
    "region": "O'Higgins",
    "nombre": "Notaría, Conservador y Archivero de Pichilemu",
    "notario": "Isabel Margarita Chadwick Vergara",
    "comuna": "Pichilemu",
    "direccion": "Av. Daniel Ortúzar 621, Pichilemu",
    "telefonos": [
      "+56443702079",
      "+56722608800"
    ],
    "horario": "Lunes a jueves 9:00 a 14:00 y 15:00 a 17:00; viernes 8:30 a 15:30",
    "web": "",
    "publico": "Notaría Isabel Margarita Chadwick Vergara"
  },
  {
    "id": "notaria-conservador-y-archivero-de-peralillo",
    "region": "O'Higgins",
    "nombre": "Notaría, Conservador y Archivero de Peralillo",
    "notario": "Soledad Beatriz Pérez Vega",
    "comuna": "Peralillo",
    "direccion": "Av. Hermanos Carrera 258, Peralillo",
    "telefonos": [
      "+56722861237"
    ],
    "horario": "Lunes a viernes 9:00 a 16:00",
    "web": "",
    "publico": "Notaría Soledad Beatriz Pérez Vega"
  },
  {
    "id": "notaria-conservador-y-archivero-de-litueche",
    "region": "O'Higgins",
    "nombre": "Notaría, Conservador y Archivero de Litueche",
    "notario": "Marcela Marlene Sammur del Río",
    "comuna": "Litueche",
    "direccion": "Hermanos Carrera 561, segundo piso, Litueche",
    "telefonos": [
      "+56966153064"
    ],
    "horario": "Lunes a viernes 08:30 a 15:30 continuado",
    "web": "",
    "publico": "Notaría Marcela Marlene Sammur del Río"
  },
  {
    "id": "1-notaria-de-curico",
    "region": "Maule",
    "nombre": "1ª Notaría de Curicó",
    "notario": "Cargo vacante (Interina: Carolina Isabel Araya López)",
    "comuna": "Curicó",
    "direccion": "Estado 236, Curicó",
    "telefonos": [
      "+56233809255",
      "+56931950593"
    ],
    "horario": "Lunes a viernes 9:00-16:00; sábado de turno 9:00-12:00",
    "web": ""
  },
  {
    "id": "2-notaria-de-curico",
    "region": "Maule",
    "nombre": "2ª Notaría de Curicó",
    "notario": "Jorge Eduardo Messen Concha",
    "comuna": "Curicó",
    "direccion": "Estado 280, Curicó",
    "telefonos": [
      "+56712980938"
    ],
    "horario": "Lunes a viernes 8:30 a 15:30; sábados de turno 9:30 a 12:30",
    "web": "",
    "publico": "Notaría Jorge Eduardo Messen Concha"
  },
  {
    "id": "3-notaria-de-curico",
    "region": "Maule",
    "nombre": "3ª Notaría de Curicó",
    "notario": "Hernán Urbano Fuentes Acevedo",
    "comuna": "Curicó",
    "direccion": "Carmen 498, Curicó",
    "telefonos": [
      "+56752311256"
    ],
    "horario": "Lunes a viernes 08:30 a 16:00",
    "web": "",
    "publico": "Notaría Hernán Urbano Fuentes Acevedo"
  },
  {
    "id": "4-notaria-de-curico",
    "region": "Maule",
    "nombre": "4ª Notaría de Curicó",
    "notario": "Carlos Andrés Ortega Alul",
    "comuna": "Curicó",
    "direccion": "Argomedo 280, Curicó",
    "telefonos": [
      "+56233072812"
    ],
    "horario": "Lunes a viernes 8:30-16:00",
    "web": "",
    "publico": "Notaría Carlos Andrés Ortega Alul"
  },
  {
    "id": "5-notaria-de-curico-con-asiento-en-teno",
    "region": "Maule",
    "nombre": "5ª Notaría de Curicó con asiento en Teno",
    "notario": "Mónica Purísima Quiroz Trujillo",
    "comuna": "Teno",
    "direccion": "Av. Comalle 263, Teno",
    "telefonos": [
      "+56442890588",
      "+56977066939"
    ],
    "horario": "Lunes a viernes 08:30-15:30 continuado",
    "web": "",
    "publico": "Notaría Mónica Purísima Quiroz Trujillo"
  },
  {
    "id": "notaria-y-conservador-de-licanten",
    "region": "Maule",
    "nombre": "Notaría y Conservador de Licantén",
    "notario": "Vilma Beatriz Navarro Reyes",
    "comuna": "Licantén",
    "direccion": "Orsodeli 108 E, Licantén",
    "telefonos": [
      "+56752460593"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00 continuado",
    "web": "",
    "publico": "Notaría Vilma Beatriz Navarro Reyes"
  },
  {
    "id": "notaria-de-molina",
    "region": "Maule",
    "nombre": "Notaría de Molina",
    "notario": "Bernard Manuel Marcel Marie Joseph Debeuf Ponce de León",
    "comuna": "Molina",
    "direccion": "Independencia 2001, Molina",
    "telefonos": [
      "+56976608668",
      "+56752427879"
    ],
    "horario": "Lunes a viernes 8:30 a 15:30 continuado",
    "web": "",
    "publico": "Notaría Bernard Manuel Marcel Marie Joseph Debeuf Ponce de León"
  },
  {
    "id": "1-notaria-de-talca",
    "region": "Maule",
    "nombre": "1ª Notaría de Talca",
    "notario": "Cargo vacante (Interina: María Angélica Ramírez Fuentes)",
    "comuna": "Talca",
    "direccion": "Uno Norte 963, oficina 103, Talca",
    "telefonos": [
      "+56712404076"
    ],
    "horario": "Lunes a viernes 09:00-16:00 continuado",
    "web": ""
  },
  {
    "id": "2-notaria-de-talca",
    "region": "Maule",
    "nombre": "2ª Notaría de Talca",
    "notario": "Enrique Pedro Ortiz Schindler",
    "comuna": "Talca",
    "direccion": "1 Sur 898, Talca",
    "telefonos": [
      "+56712533797",
      "+56712533798"
    ],
    "horario": "Lunes a viernes 8:30 a 15:30; sábados de turno 9:30 a 12:00",
    "web": "",
    "publico": "Notaría Enrique Pedro Ortiz Schindler"
  },
  {
    "id": "3-notaria-de-talca",
    "region": "Maule",
    "nombre": "3ª Notaría de Talca",
    "notario": "Angelita de la Paz Hormazábal Alegría",
    "comuna": "Talca",
    "direccion": "1 Sur 925, Talca",
    "telefonos": [
      "+56712981415",
      "+56712685305"
    ],
    "horario": "Lunes a viernes 8:30 a 15:30 continuado",
    "web": "",
    "publico": "Notaría Angelita de la Paz Hormazábal Alegría"
  },
  {
    "id": "4-notaria-de-talca",
    "region": "Maule",
    "nombre": "4ª Notaría de Talca",
    "notario": "Jaime Andrés Silva Sciberras",
    "comuna": "Talca",
    "direccion": "1 Norte 902, Talca",
    "telefonos": [
      "+56233773198"
    ],
    "horario": "Lunes a viernes 09:00 a 16:30 continuado",
    "web": "",
    "publico": "Notaría Jaime Andrés Silva Sciberras"
  },
  {
    "id": "5-notaria-de-talca",
    "region": "Maule",
    "nombre": "5ª Notaría de Talca",
    "notario": "Teodoro Patricio Durán Palma",
    "comuna": "Talca",
    "direccion": "1 Norte 888, esquina 2 Oriente, Talca",
    "telefonos": [
      "+56712616777",
      "+56712616779"
    ],
    "horario": "Lunes a viernes 9:00 a 14:00 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría Teodoro Patricio Durán Palma"
  },
  {
    "id": "6-notaria-de-talca-con-asiento-en-san-clemente",
    "region": "Maule",
    "nombre": "6ª Notaría de Talca con asiento en San Clemente",
    "notario": "Cargo vacante (Interino: Juan Enrique Jara Opazo)",
    "comuna": "San Clemente",
    "direccion": "Alejandro Cruz 124, San Clemente",
    "telefonos": [
      "+56977167570"
    ],
    "horario": "Lunes a viernes 09:00-13:00 y 13:30-17:30",
    "web": ""
  },
  {
    "id": "7-notaria-de-talca",
    "region": "Maule",
    "nombre": "7ª Notaría de Talca",
    "notario": "Cargo vacante (Interino: Pablo Andrés Almendras Burgos)",
    "comuna": "Talca",
    "direccion": "30 Oriente 1522, local A, Talca",
    "telefonos": [
      "+56712423199",
      "+56712423200"
    ],
    "horario": "Lunes a viernes 09:00-16:00",
    "web": ""
  },
  {
    "id": "8-notaria-de-talca-con-asiento-en-maule",
    "region": "Maule",
    "nombre": "8ª Notaría de Talca con asiento en Maule",
    "notario": "Paulina Alejandra Valderrama Valdés",
    "comuna": "Maule",
    "direccion": "Av. Balmaceda 065, Maule",
    "telefonos": [
      "+56923600640",
      "+56443060180"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00 continuado",
    "web": "",
    "publico": "Notaría Paulina Alejandra Valderrama Valdés"
  },
  {
    "id": "notaria-de-constitucion",
    "region": "Maule",
    "nombre": "Notaría de Constitución",
    "notario": "Álvaro Gonzalo Mera Correa",
    "comuna": "Constitución",
    "direccion": "O'Higgins 499-A, Constitución",
    "telefonos": [
      "+56233654652"
    ],
    "horario": "Lunes a viernes 08:00 a 15:00",
    "web": "",
    "publico": "Notaría Álvaro Gonzalo Mera Correa"
  },
  {
    "id": "notaria-y-conservador-de-curepto",
    "region": "Maule",
    "nombre": "Notaría y Conservador de Curepto",
    "notario": "Jorge Andrés Allende González",
    "comuna": "Curepto",
    "direccion": "Pedro Antonio González 20, Curepto",
    "telefonos": [
      "+56982519963"
    ],
    "horario": "Lunes a viernes 08:30 a 15:30",
    "web": "",
    "publico": "Notaría Jorge Andrés Allende González"
  },
  {
    "id": "1-notaria-de-linares",
    "region": "Maule",
    "nombre": "1ª Notaría de Linares",
    "notario": "Jorge Fernando Ulloa Concha",
    "comuna": "Linares",
    "direccion": "Curapalihue 451, Linares",
    "telefonos": [
      "+56732210957"
    ],
    "horario": "Lunes a viernes 08:30 a 16:00; turnos (febrero, mayo, agosto, noviembre) 09:00 a 12:00",
    "web": "",
    "publico": "Notaría Jorge Fernando Ulloa Concha"
  },
  {
    "id": "2-notaria-y-conservador-de-minas-de-linares",
    "region": "Maule",
    "nombre": "2ª Notaría y Conservador de Minas de Linares",
    "notario": "Andrés Cuadra González del Riego",
    "comuna": "Linares",
    "direccion": "Chacabuco 551-A, Linares",
    "telefonos": [
      "+56966799853"
    ],
    "horario": "Lunes a viernes 09:00-16:00",
    "web": "",
    "publico": "Notaría Andrés Cuadra González del Riego"
  },
  {
    "id": "3-notaria-de-linares",
    "region": "Maule",
    "nombre": "3ª Notaría de Linares",
    "notario": "Luis Guillermo Álvarez Donoso",
    "comuna": "Linares",
    "direccion": "Independencia 566, Linares",
    "telefonos": [
      "+56732214714"
    ],
    "horario": "Lunes a jueves 09:00 a 17:00; viernes 09:00 a 16:30",
    "web": "",
    "publico": "Notaría Luis Guillermo Álvarez Donoso"
  },
  {
    "id": "4-notaria-de-linares-con-asiento-en-longavi",
    "region": "Maule",
    "nombre": "4ª Notaría de Linares con asiento en Longaví",
    "notario": "Ricardo Andrés Sánchez Valdés",
    "comuna": "Longaví",
    "direccion": "Cuatro Norte 153, Longaví",
    "telefonos": [
      "+56732500298"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00",
    "web": "",
    "publico": "Notaría Ricardo Andrés Sánchez Valdés"
  },
  {
    "id": "1-notaria-de-parral",
    "region": "Maule",
    "nombre": "1ª Notaría de Parral",
    "notario": "Omar Andrés Pérez Aguilera",
    "comuna": "Parral",
    "direccion": "Pablo Neruda 755, Parral",
    "telefonos": [
      "+56233661768"
    ],
    "horario": "Lunes a viernes 09:00-13:30 y 15:00-17:00",
    "web": "",
    "publico": "Notaría Omar Andrés Pérez Aguilera"
  },
  {
    "id": "2-notaria-de-parral-con-asiento-en-retiro",
    "region": "Maule",
    "nombre": "2ª Notaría de Parral con asiento en Retiro",
    "notario": "Cargo vacante (Interino: Tomás Ignacio Romero Parada)",
    "comuna": "Retiro",
    "direccion": "Av. Errázuriz 51-A, Retiro",
    "telefonos": [
      "+56994794387"
    ],
    "horario": "Lunes a jueves 09:00-17:00; viernes 09:00-16:00",
    "web": ""
  },
  {
    "id": "notaria-de-san-javier",
    "region": "Maule",
    "nombre": "Notaría de San Javier",
    "notario": "Pamela Cecilia Astorga Páez",
    "comuna": "San Javier",
    "direccion": "Sargento Aldea 2625, San Javier",
    "telefonos": [
      "+56712981266",
      "+56712980030"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00",
    "web": "",
    "publico": "Notaría Pamela Cecilia Astorga Páez"
  },
  {
    "id": "1-notaria-de-cauquenes",
    "region": "Maule",
    "nombre": "1ª Notaría de Cauquenes",
    "notario": "Cargo vacante (Interino: Victor Mauricio Osores Riquelme)",
    "comuna": "Cauquenes",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "2-notaria-de-cauquenes",
    "region": "Maule",
    "nombre": "2ª Notaría de Cauquenes",
    "notario": "Cargo vacante (Interina: Ivonne Pilar Elgueta Cancino)",
    "comuna": "Cauquenes",
    "direccion": "Victoria 459, Cauquenes",
    "telefonos": [
      "+56732512017",
      "+56942817274"
    ],
    "horario": "Lunes a viernes 9:00 a 17:00",
    "web": ""
  },
  {
    "id": "notaria-conservador-y-archivero-de-chanco",
    "region": "Maule",
    "nombre": "Notaría, Conservador y Archivero de Chanco",
    "notario": "Cargo vacante (Interino: Bernardo Javier Mellibosky Diez)",
    "comuna": "Chanco",
    "direccion": "Ramón Freire 131, Chanco",
    "telefonos": [
      "+56732551000"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00",
    "web": ""
  },
  {
    "id": "1-notaria-de-chillan",
    "region": "Ñuble",
    "nombre": "1ª Notaría de Chillán",
    "notario": "Cargo vacante (Interino: Alexis Patricio Paredes Aguilera)",
    "comuna": "Chillán",
    "direccion": "El Roble 551, Chillán",
    "telefonos": [
      "+56422282151",
      "+56422285684"
    ],
    "horario": "Lunes a jueves 09:00-13:30 y 15:00-18:00; viernes 09:00-13:30 y 15:00-17:00",
    "web": ""
  },
  {
    "id": "2-notaria-de-chillan",
    "region": "Ñuble",
    "nombre": "2ª Notaría de Chillán",
    "notario": "José Joaquín Tejos Henriquez",
    "comuna": "Chillán",
    "direccion": "El Roble 620, Chillán",
    "telefonos": [
      "+56422246740",
      "+56422212311"
    ],
    "horario": "Lunes a viernes 9:00 a 13:30 y 15:00 a 18:00",
    "web": "",
    "publico": "Notaría José Joaquín Tejos Henriquez"
  },
  {
    "id": "3-notaria-de-chillan",
    "region": "Ñuble",
    "nombre": "3ª Notaría de Chillán",
    "notario": "Juan Armando Bustos Bonniard",
    "comuna": "Chillán",
    "direccion": "Arauco 390, Chillán",
    "telefonos": [
      "+56422835276",
      "+56422835278"
    ],
    "horario": "Lunes a viernes 09:00 a 13:30 y 15:00 a 18:30",
    "web": "",
    "publico": "Notaría Juan Armando Bustos Bonniard"
  },
  {
    "id": "4-notaria-de-chillan",
    "region": "Ñuble",
    "nombre": "4ª Notaría de Chillán",
    "notario": "Luis Eduardo Álvarez Diaz",
    "comuna": "Chillán",
    "direccion": "El Roble 515, Chillán",
    "telefonos": [
      "+56422873270",
      "+56422426333"
    ],
    "horario": "Lunes a viernes 09:00-16:30",
    "web": "",
    "publico": "Notaría Luis Eduardo Álvarez Diaz"
  },
  {
    "id": "5-notaria-de-chillan",
    "region": "Ñuble",
    "nombre": "5ª Notaría de Chillán",
    "notario": "César Andrés Suárez Sánchez",
    "comuna": "Chillán",
    "direccion": "Av. Libertad 744, Chillán",
    "telefonos": [
      "+56422457710"
    ],
    "horario": "Lunes a jueves 09:00-18:00; viernes 09:00-16:00",
    "web": "",
    "publico": "Notaría César Andrés Suárez Sánchez"
  },
  {
    "id": "6-notaria-de-chillan",
    "region": "Ñuble",
    "nombre": "6ª Notaría de Chillán",
    "notario": "Janina Lorena Rodríguez Cortés",
    "comuna": "Chillán",
    "direccion": "Constitución 644, Chillán",
    "telefonos": [
      "+56955149931"
    ],
    "horario": "Lunes a viernes 9:00 a 13:00 y 14:00 a 17:00",
    "web": "",
    "publico": "Notaría Janina Lorena Rodríguez Cortés"
  },
  {
    "id": "7-notaria-de-chillan-con-asiento-en-pinto",
    "region": "Ñuble",
    "nombre": "7ª Notaría de Chillán con asiento en Pinto",
    "notario": "Ximena Andrea Ulsen Rivas",
    "comuna": "Pinto",
    "direccion": "Ernesto Riquelme 231, Pinto",
    "telefonos": [
      "+56921786713"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 16:30",
    "web": "",
    "publico": "Notaría Ximena Andrea Ulsen Rivas"
  },
  {
    "id": "8-notaria-de-chillan-con-asiento-en-coihueco",
    "region": "Ñuble",
    "nombre": "8ª Notaría de Chillán con asiento en Coihueco",
    "notario": "Héctor Andrés Carrasco Sanhueza",
    "comuna": "Coihueco",
    "direccion": "Luis Hermosilla 1263, Coihueco",
    "telefonos": [],
    "horario": "Lunes a viernes 9:00 a 14:00 y 14:40 a 16:00",
    "web": "",
    "publico": "Notaría Héctor Andrés Carrasco Sanhueza"
  },
  {
    "id": "9-notaria-de-chillan-con-asiento-en-chillan-viejo",
    "region": "Ñuble",
    "nombre": "9ª Notaría de Chillán con asiento en Chillán Viejo",
    "notario": "Gerardo Alfredo Cortés Gasaui",
    "comuna": "Chillán Viejo",
    "direccion": "Erasmo Escala 550, Chillán Viejo",
    "telefonos": [
      "+56422222880",
      "+56422222541"
    ],
    "horario": "Lunes a viernes 09:00 a 13:30 y 15:00 a 18:00",
    "web": "",
    "publico": "Notaría Gerardo Alfredo Cortés Gasaui"
  },
  {
    "id": "1-notaria-de-san-carlos",
    "region": "Ñuble",
    "nombre": "1ª Notaría de San Carlos",
    "notario": "Cargo vacante (Interino: Rodrigo Ignacio Irribarra Salazar)",
    "comuna": "San Carlos",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "2-notaria-de-san-carlos-con-asiento-en-niquen",
    "region": "Ñuble",
    "nombre": "2ª Notaría de San Carlos con asiento en Ñiquén",
    "notario": "Jonathan Andrés Fuentes Parada",
    "comuna": "Ñiquén",
    "direccion": "Estado S/N esquina Ernesto Zúñiga, San Gregorio, Ñiquén",
    "telefonos": [
      "+56422520488"
    ],
    "horario": "Lunes a viernes 9:00 a 16:00 continuado",
    "web": "",
    "publico": "Notaría Jonathan Andrés Fuentes Parada"
  },
  {
    "id": "1-notaria-de-yungay",
    "region": "Ñuble",
    "nombre": "1ª Notaría de Yungay",
    "notario": "Guillermo Andrés Rossemblatt Pradenas",
    "comuna": "Yungay",
    "direccion": "Arturo Prat 289, Yungay",
    "telefonos": [
      "+56422250824"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00 continuado",
    "web": "",
    "publico": "Notaría Guillermo Andrés Rossemblatt Pradenas"
  },
  {
    "id": "2-notaria-de-yungay-con-asiento-en-tucapel",
    "region": "Ñuble",
    "nombre": "2ª Notaría de Yungay con asiento en Tucapel",
    "notario": "Francisco Javier Larenas Vega",
    "comuna": "Tucapel",
    "direccion": "Independencia 362, Huépil, Tucapel",
    "telefonos": [
      "+56432970102"
    ],
    "horario": "Lunes a jueves 9:00 a 14:00 y 15:00 a 17:30; viernes 9:00 a 14:00 y 15:00 a 16:30",
    "web": "",
    "publico": "Notaría Francisco Javier Larenas Vega"
  },
  {
    "id": "notaria-conservador-y-archivero-de-quirihue",
    "region": "Ñuble",
    "nombre": "Notaría, Conservador y Archivero de Quirihue",
    "notario": "Cargo vacante (Interino: Rodrigo Alonso Navarrete Crisóstomo)",
    "comuna": "Quirihue",
    "direccion": "Independencia 499, Quirihue",
    "telefonos": [
      "+56422531285"
    ],
    "horario": "Lunes a viernes 9:00 a 16:00",
    "web": ""
  },
  {
    "id": "notaria-conservador-y-archivero-de-coelemu",
    "region": "Ñuble",
    "nombre": "Notaría, Conservador y Archivero de Coelemu",
    "notario": "Cargo vacante (Interino: Alejandro Emilio Vera Ovalle)",
    "comuna": "Coelemu",
    "direccion": "Julio Lamas 365, oficinas 6 y 8, Plaza de Armas, Coelemu",
    "telefonos": [
      "+56422511406"
    ],
    "horario": "Lunes a jueves 09:00-14:00 y 15:00-17:00; viernes 09:00-16:00",
    "web": ""
  },
  {
    "id": "1-notaria-de-bulnes",
    "region": "Ñuble",
    "nombre": "1ª Notaría de Bulnes",
    "notario": "Cargo vacante (Interina: Gabriela Maria Gutierrez Valverde)",
    "comuna": "Bulnes",
    "direccion": "Manuel Bulnes 214, Bulnes",
    "telefonos": [
      "+56422873025"
    ],
    "horario": "Lunes a viernes 8:30-13:15 y 14:00-17:00",
    "web": ""
  },
  {
    "id": "2-notaria-de-bulnes-con-asiento-en-quillon",
    "region": "Ñuble",
    "nombre": "2ª Notaría de Bulnes con asiento en Quillón",
    "notario": "Paula Esperanza Novoa Valdés",
    "comuna": "Quillón",
    "direccion": "Av. Bernardo O'Higgins 573, Quillón",
    "telefonos": [
      "+56983360795"
    ],
    "horario": "Lunes a viernes 09:00-14:00 y 15:00-17:00",
    "web": "",
    "publico": "Notaría Paula Esperanza Novoa Valdés"
  },
  {
    "id": "1-notaria-y-conservador-de-minas-de-concepcion",
    "region": "Biobío",
    "nombre": "1ª Notaría y Conservador de Minas de Concepción",
    "notario": "Ricardo Mauricio Salgado Sepúlveda",
    "comuna": "Concepción",
    "direccion": "Barros Arana 989, Concepción",
    "telefonos": [
      "+56412107130"
    ],
    "horario": "Lunes a viernes 9:00 a 14:00 y 15:00 a 17:30; sábados de turno 10:00 a 13:00",
    "web": "",
    "publico": "Notaría Ricardo Mauricio Salgado Sepúlveda"
  },
  {
    "id": "2-notaria-de-concepcion",
    "region": "Biobío",
    "nombre": "2ª Notaría de Concepción",
    "notario": "Cargo vacante (Interino: Pedro Enrique Hidalgo Sarzosa)",
    "comuna": "Concepción",
    "direccion": "Castellón 116, Concepción",
    "telefonos": [
      "+56412858745"
    ],
    "horario": "Lunes a jueves 09:00 a 14:00 y 15:00 a 18:00; viernes 09:00 a 14:00 y 15:00 a 17:00",
    "web": ""
  },
  {
    "id": "3-notaria-de-concepcion",
    "region": "Biobío",
    "nombre": "3ª Notaría de Concepción",
    "notario": "Cargo vacante (Interina: Luisa Elvira Donat Gutiérrez)",
    "comuna": "Concepción",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "4-notaria-de-concepcion",
    "region": "Biobío",
    "nombre": "4ª Notaría de Concepción",
    "notario": "Heraclio del Carmen Rojas Vergara",
    "comuna": "Concepción",
    "direccion": "Av. O'Higgins 820, Concepción",
    "telefonos": [
      "+56412670653",
      "+56412670526"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 16:30; turno sábado 09:30 a 12:00",
    "web": "",
    "publico": "Notaría Heraclio del Carmen Rojas Vergara"
  },
  {
    "id": "5-notaria-de-concepcion",
    "region": "Biobío",
    "nombre": "5ª Notaría de Concepción",
    "notario": "Cargo vacante (Interino: Rodrigo Wunkhaus Rigart)",
    "comuna": "Concepción",
    "direccion": "Av. O'Higgins 599, Concepción",
    "telefonos": [
      "+56953684998"
    ],
    "horario": "Lunes a viernes 09:00 a 17:00",
    "web": ""
  },
  {
    "id": "6-notaria-de-concepcion",
    "region": "Biobío",
    "nombre": "6ª Notaría de Concepción",
    "notario": "Mario Patricio Aburto Contardo",
    "comuna": "Concepción",
    "direccion": "Colo Colo 304, Concepción",
    "telefonos": [
      "+56413390457"
    ],
    "horario": "Lunes a viernes 09:45 a 14:00 y 15:00 a 17:45; sábados de turno 10:00 a 13:00",
    "web": "",
    "publico": "Notaría Mario Patricio Aburto Contardo"
  },
  {
    "id": "7-notaria-de-concepcion",
    "region": "Biobío",
    "nombre": "7ª Notaría de Concepción",
    "notario": "Cargo vacante (Interina: Olaya Odette Ferrada Garrido)",
    "comuna": "Concepción",
    "direccion": "Rengo 444, Concepción",
    "telefonos": [
      "+56412443600"
    ],
    "horario": "Lunes a jueves 09:00-14:00 y 15:00-18:00; viernes 09:00-14:00 y 15:00-17:00",
    "web": ""
  },
  {
    "id": "8-notaria-de-concepcion-con-asiento-en-chiguayante",
    "region": "Biobío",
    "nombre": "8ª Notaría de Concepción con asiento en Chiguayante",
    "notario": "Constanza Andrea Quintana Jaramillo",
    "comuna": "Chiguayante",
    "direccion": "Fresia 38 (esquina O'Higgins), local 2, Chiguayante",
    "telefonos": [
      "+56949707490",
      "+56222617292"
    ],
    "horario": "Lunes a viernes 09:00-14:00 y 15:00-17:00",
    "web": "",
    "publico": "Notaría Constanza Andrea Quintana Jaramillo"
  },
  {
    "id": "9-notaria-de-concepcion-con-asiento-en-san-pedro-de-la-paz",
    "region": "Biobío",
    "nombre": "9ª Notaría de Concepción con asiento en San Pedro de la Paz",
    "notario": "Rodrigo Esteban Rojas Castillo",
    "comuna": "San Pedro de la Paz",
    "direccion": "Michimalonco 1045, San Pedro de la Paz",
    "telefonos": [
      "+56412791537",
      "+56957412302"
    ],
    "horario": "Lunes a jueves 08:30 a 14:00 y 15:00 a 18:00; viernes 08:30 a 14:00 y 15:00 a 17:30; sábados 09:00 a 13:00",
    "web": "",
    "publico": "Notaría Rodrigo Esteban Rojas Castillo"
  },
  {
    "id": "10-notaria-de-concepcion-con-asiento-en-penco",
    "region": "Biobío",
    "nombre": "10ª Notaría de Concepción con asiento en Penco",
    "notario": "Cargo vacante (Interino: Fernando Raúl Saenger Castaños)",
    "comuna": "Penco",
    "direccion": "Penco 150, Penco",
    "telefonos": [
      "+56412458108"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00",
    "web": ""
  },
  {
    "id": "11-notaria-de-concepcion",
    "region": "Biobío",
    "nombre": "11ª Notaría de Concepción",
    "notario": "René Marcelo Arriagada Basaur",
    "comuna": "Concepción",
    "direccion": "Cochrane 740, Concepción",
    "telefonos": [
      "+56412183948"
    ],
    "horario": "Lunes a viernes 9:00 a 17:00 continuado; sábados 10:00 a 13:00 (según turno)",
    "web": "",
    "publico": "Notaría René Marcelo Arriagada Basaur"
  },
  {
    "id": "12-notaria-de-concepcion",
    "region": "Biobío",
    "nombre": "12ª Notaría de Concepción",
    "notario": "Juan Eduardo Avello San Martín",
    "comuna": "Concepción",
    "direccion": "Av. Chacabuco 980, Concepción",
    "telefonos": [
      "+56413184569",
      "+56947350155"
    ],
    "horario": "Lunes a jueves 09:00 a 17:30; viernes 09:00 a 16:30",
    "web": "",
    "publico": "Notaría Juan Eduardo Avello San Martín"
  },
  {
    "id": "13-notaria-de-concepcion-con-asiento-en-san-pedro-de-la-paz",
    "region": "Biobío",
    "nombre": "13ª Notaría de Concepción con asiento en San Pedro de la Paz",
    "notario": "Cargo vacante sin proveer",
    "comuna": "San Pedro de la Paz",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-talcahuano",
    "region": "Biobío",
    "nombre": "1ª Notaría de Talcahuano",
    "notario": "Cargo vacante (Interina: Ximena Andrea Bravo Venegas)",
    "comuna": "Talcahuano",
    "direccion": "Av. Colón 599, Talcahuano",
    "telefonos": [
      "+56412541160",
      "+56412541328"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 16:30",
    "web": ""
  },
  {
    "id": "2-notaria-y-conservador-de-minas-de-talcahuano",
    "region": "Biobío",
    "nombre": "2ª Notaría y Conservador de Minas de Talcahuano",
    "notario": "Gastón Ariel Santibañez Torres",
    "comuna": "Talcahuano",
    "direccion": "Av. Jorge Alessandri 3177, local G 103, Mall Plaza del Trébol, Talcahuano",
    "telefonos": [
      "+56412563797",
      "+56412563798"
    ],
    "horario": "Lunes a viernes 8:00 a 14:00 y 15:00 a 16:30; sábados (marzo, julio, noviembre) 9:00 a 12:00",
    "web": "",
    "publico": "Notaría Gastón Ariel Santibañez Torres"
  },
  {
    "id": "3-notaria-y-archivero-de-talcahuano",
    "region": "Biobío",
    "nombre": "3ª Notaría y Archivero de Talcahuano",
    "notario": "Néstor Alejandro Ávila Urrutia",
    "comuna": "Talcahuano",
    "direccion": "Covadonga 55, Talcahuano",
    "telefonos": [
      "+56999029000",
      "+56412547010"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 18:00",
    "web": "",
    "publico": "Notaría Néstor Alejandro Ávila Urrutia"
  },
  {
    "id": "4-notaria-de-talcahuano-con-asiento-en-hualpen",
    "region": "Biobío",
    "nombre": "4ª Notaría de Talcahuano con asiento en Hualpén",
    "notario": "Gladys del Carmen Hernández Manzano",
    "comuna": "Hualpén",
    "direccion": "Autopista Concepción-Talcahuano 9000, local 22, Hualpén",
    "telefonos": [
      "+56935418539",
      "+56972148415"
    ],
    "horario": "Lunes a viernes 08:30-17:00 continuado",
    "web": "",
    "publico": "Notaría Gladys del Carmen Hernández Manzano"
  },
  {
    "id": "notaria-de-tome",
    "region": "Biobío",
    "nombre": "Notaría de Tomé",
    "notario": "Gonzalo Esteban Míguez Núñez",
    "comuna": "Tomé",
    "direccion": "Sotomayor 1265, Tomé",
    "telefonos": [
      "+56412651330"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00 continuado",
    "web": "",
    "publico": "Notaría Gonzalo Esteban Míguez Núñez"
  },
  {
    "id": "notaria-conservador-y-archivero-de-florida",
    "region": "Biobío",
    "nombre": "Notaría, Conservador y Archivero de Florida",
    "notario": "Cargo vacante (Interino: Ricardo Javier Moscoso Cerda)",
    "comuna": "Florida",
    "direccion": "Ignacio Serrano 740, P.1, Florida",
    "telefonos": [
      "+56443571122",
      "+56998647324"
    ],
    "horario": "Lunes a viernes 9:00 a 14:00 y 15:00 a 17:00",
    "web": ""
  },
  {
    "id": "notaria-y-conservador-de-santa-juana",
    "region": "Biobío",
    "nombre": "Notaría y Conservador de Santa Juana",
    "notario": "María Isabel González Barrientos",
    "comuna": "Santa Juana",
    "direccion": "Yungay 278, Santa Juana",
    "telefonos": [
      "+56443681360"
    ],
    "horario": "Lunes a viernes 9:00 a 16:00",
    "web": "",
    "publico": "Notaría María Isabel González Barrientos"
  },
  {
    "id": "notaria-conservador-y-archivero-de-lota",
    "region": "Biobío",
    "nombre": "Notaría, Conservador y Archivero de Lota",
    "notario": "Cargo vacante (Interina: Jocelyn Gisela Sanhueza Cortés)",
    "comuna": "Lota",
    "direccion": "Pedro Aguirre Cerda 669, Lota Bajo, Lota",
    "telefonos": [
      "+56412876252"
    ],
    "horario": "Lunes a viernes 09:00 a 15:00",
    "web": ""
  },
  {
    "id": "1-notaria-de-coronel",
    "region": "Biobío",
    "nombre": "1ª Notaría de Coronel",
    "notario": "María Isabel Rojas Jamett",
    "comuna": "Coronel",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": "",
    "publico": "Notaría María Isabel Rojas Jamett"
  },
  {
    "id": "2-notaria-de-coronel",
    "region": "Biobío",
    "nombre": "2ª Notaría de Coronel",
    "notario": "Víctor Marcelo Toledo Machuca",
    "comuna": "Coronel",
    "direccion": "Sotomayor 520, Coronel",
    "telefonos": [
      "+56442862403",
      "+56978490599"
    ],
    "horario": "Lunes a viernes 9:00 a 14:00 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría Víctor Marcelo Toledo Machuca"
  },
  {
    "id": "1-notaria-de-los-angeles",
    "region": "Biobío",
    "nombre": "1ª Notaría de Los Ángeles",
    "notario": "Cargo vacante (Interino: Luis Gonzalo Alí Arcas)",
    "comuna": "Los Ángeles",
    "direccion": "Lautaro 325, locales 4 y 5, Los Ángeles",
    "telefonos": [
      "+56979994261"
    ],
    "horario": "Lunes a viernes 08:30 a 14:00 y 15:00 a 17:00",
    "web": ""
  },
  {
    "id": "2-notaria-de-los-angeles",
    "region": "Biobío",
    "nombre": "2ª Notaría de Los Ángeles",
    "notario": "Rodrigo Orlando Cantuarias Costa",
    "comuna": "Los Ángeles",
    "direccion": "Lautaro 279, Los Ángeles",
    "telefonos": [
      "+56975799121",
      "+56432311318"
    ],
    "horario": "Lunes a viernes 8:00 a 17:00 continuado",
    "web": "",
    "publico": "Notaría Rodrigo Orlando Cantuarias Costa"
  },
  {
    "id": "3-notaria-de-los-angeles",
    "region": "Biobío",
    "nombre": "3ª Notaría de Los Ángeles",
    "notario": "María Antonieta Carrillo Flores",
    "comuna": "Los Ángeles",
    "direccion": "Lautaro 361, Los Ángeles",
    "telefonos": [
      "+56432578767",
      "+56432578768"
    ],
    "horario": "Lunes a jueves 08:30 a 17:00 continuado; viernes 08:30 a 16:30",
    "web": "",
    "publico": "Notaría María Antonieta Carrillo Flores"
  },
  {
    "id": "4-notaria-de-los-angeles",
    "region": "Biobío",
    "nombre": "4ª Notaría de Los Ángeles",
    "notario": "Cargo vacante (Interino: Cesar Humberto Espinoza Gutierrez)",
    "comuna": "Los Ángeles",
    "direccion": "Caupolicán 355, Los Ángeles",
    "telefonos": [
      "+56990068606"
    ],
    "horario": "Lunes a jueves 08:30-14:00 y 15:00-16:30; viernes 08:00-15:00",
    "web": ""
  },
  {
    "id": "notaria-y-conservador-de-santa-barbara",
    "region": "Biobío",
    "nombre": "Notaría y Conservador de Santa Bárbara",
    "notario": "Pamela Cristina Orellana Patiño",
    "comuna": "Santa Bárbara",
    "direccion": "Arturo Prat 630, Santa Bárbara",
    "telefonos": [
      "+56432581808"
    ],
    "horario": "Lunes a viernes 9:00 a 14:00",
    "web": "",
    "publico": "Notaría Pamela Cristina Orellana Patiño"
  },
  {
    "id": "notaria-y-conservador-de-mulchen",
    "region": "Biobío",
    "nombre": "Notaría y Conservador de Mulchén",
    "notario": "Jaime Simón Cifuentes Villagrán",
    "comuna": "Mulchén",
    "direccion": "Aníbal Pinto 121, Mulchén",
    "telefonos": [
      "+56910180366",
      "+56910180367"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00 continuado",
    "web": "",
    "publico": "Notaría Jaime Simón Cifuentes Villagrán"
  },
  {
    "id": "notaria-conservador-y-archivero-de-nacimiento",
    "region": "Biobío",
    "nombre": "Notaría, Conservador y Archivero de Nacimiento",
    "notario": "Ruth Alejandra Villalobos Gutiérrez",
    "comuna": "Nacimiento",
    "direccion": "San Martín 444, Nacimiento",
    "telefonos": [
      "+56442875642",
      "+56957285094"
    ],
    "horario": "Lunes a viernes 08:30 a 16:00 continuado",
    "web": "",
    "publico": "Notaría Ruth Alejandra Villalobos Gutiérrez"
  },
  {
    "id": "notaria-conservador-y-archivero-de-laja",
    "region": "Biobío",
    "nombre": "Notaría, Conservador y Archivero de Laja",
    "notario": "Cargo vacante (Interino: Denis Martin Carrasco)",
    "comuna": "Laja",
    "direccion": "Balmaceda 415, Laja",
    "telefonos": [
      "+56432461267"
    ],
    "horario": "Lunes a jueves 09:00-14:00 y 15:00-18:00; viernes 09:00-14:00 y 15:00-17:00",
    "web": ""
  },
  {
    "id": "notaria-y-conservador-de-yumbel",
    "region": "Biobío",
    "nombre": "Notaría y Conservador de Yumbel",
    "notario": "Estefanía Karolina Estrada Rivas",
    "comuna": "Yumbel",
    "direccion": "O'Higgins 670, Yumbel",
    "telefonos": [
      "+56432431731",
      "+56977759337"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 14:30 a 16:30",
    "web": "",
    "publico": "Notaría Estefanía Karolina Estrada Rivas"
  },
  {
    "id": "notaria-de-cabrero",
    "region": "Biobío",
    "nombre": "Notaría de Cabrero",
    "notario": "Miguel Humberto Ramírez Álvarez",
    "comuna": "Cabrero",
    "direccion": "General Cruz 465, locales 5 y 6, Cabrero",
    "telefonos": [
      "+56222348459"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 14:30 a 16:30",
    "web": "",
    "publico": "Notaría Miguel Humberto Ramírez Álvarez"
  },
  {
    "id": "1-notaria-conservador-y-archivero-de-lebu",
    "region": "Biobío",
    "nombre": "1ª Notaría, Conservador y Archivero de Lebu",
    "notario": "Daniel Rigoberto Álvarez Soza",
    "comuna": "Lebu",
    "direccion": "Alcázar 189 B, Lebu",
    "telefonos": [
      "+56443560592"
    ],
    "horario": "Lunes a viernes 9:00-14:00 y 15:00-17:00",
    "web": "",
    "publico": "Notaría Daniel Rigoberto Álvarez Soza"
  },
  {
    "id": "2-notaria-de-lebu-con-asiento-en-los-alamos",
    "region": "Biobío",
    "nombre": "2ª Notaría de Lebu con asiento en Los Álamos",
    "notario": "Cargo vacante (Interina: Maria Pilar Besnier Rios)",
    "comuna": "Los Álamos",
    "direccion": "Av. Ignacio Carrera Pinto 555, Los Álamos",
    "telefonos": [
      "+56920874563"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:30 a 18:30; sábado 08:30 a 12:00",
    "web": ""
  },
  {
    "id": "notaria-conservador-y-archivero-de-arauco",
    "region": "Biobío",
    "nombre": "Notaría, Conservador y Archivero de Arauco",
    "notario": "Anfión Luis Enrique Podlech Romero",
    "comuna": "Arauco",
    "direccion": "Cochrane 337, Arauco",
    "telefonos": [
      "+56412551239"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría Anfión Luis Enrique Podlech Romero"
  },
  {
    "id": "notaria-conservador-y-archivero-de-curanilahue",
    "region": "Biobío",
    "nombre": "Notaría, Conservador y Archivero de Curanilahue",
    "notario": "Mariacruz Alejandra Garretón Romero",
    "comuna": "Curanilahue",
    "direccion": "Colo Colo 755, Curanilahue",
    "telefonos": [
      "+56442160665"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00",
    "web": "",
    "publico": "Notaría Mariacruz Alejandra Garretón Romero"
  },
  {
    "id": "notaria-conservador-y-archivero-de-canete",
    "region": "Biobío",
    "nombre": "Notaría, Conservador y Archivero de Cañete",
    "notario": "Gonzalo Jesús Montané Wenzel",
    "comuna": "Cañete",
    "direccion": "Segundo de Línea 912, Cañete",
    "telefonos": [
      "+56927870386",
      "+56927870388"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00 continuado",
    "web": "",
    "publico": "Notaría Gonzalo Jesús Montané Wenzel"
  },
  {
    "id": "1-notaria-de-angol",
    "region": "La Araucanía",
    "nombre": "1ª Notaría de Angol",
    "notario": "Carlos Alejandro Fuentes Cáceres",
    "comuna": "Angol",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": "",
    "publico": "Notaría Carlos Alejandro Fuentes Cáceres"
  },
  {
    "id": "2-notaria-de-angol",
    "region": "La Araucanía",
    "nombre": "2ª Notaría de Angol",
    "notario": "Charles Andrés De la Harpe Palma",
    "comuna": "Angol",
    "direccion": "Manuel Bunster 341, Angol",
    "telefonos": [
      "+56452717760",
      "+56452755220"
    ],
    "horario": "Lunes a viernes 8:30 a 15:30; sábados de turno 10:30 a 12:30",
    "web": "",
    "publico": "Notaría Charles Andrés De la Harpe Palma"
  },
  {
    "id": "notaria-conservador-y-archivero-de-collipulli",
    "region": "La Araucanía",
    "nombre": "Notaría, Conservador y Archivero de Collipulli",
    "notario": "Cargo vacante (Interina: Katherine Liliana Jeldres Paubla)",
    "comuna": "Collipulli",
    "direccion": "Alcázar 1175, Collipulli",
    "telefonos": [
      "+56452811064"
    ],
    "horario": "Lunes a jueves 9:00 a 14:00 y 14:30 a 16:30; viernes 9:00 a 16:00",
    "web": ""
  },
  {
    "id": "1-notaria-de-curacautin",
    "region": "La Araucanía",
    "nombre": "1ª Notaría de Curacautín",
    "notario": "Cargo vacante (Interino: Álvaro Antonio Santos Díaz)",
    "comuna": "Curacautín",
    "direccion": "Arica 299, Curacautín",
    "telefonos": [
      "+56997424091"
    ],
    "horario": "Lunes a viernes 08:30 a 13:30 y 15:00 a 17:00",
    "web": ""
  },
  {
    "id": "2-notaria-de-curacautin-con-asiento-en-lonquimay",
    "region": "La Araucanía",
    "nombre": "2ª Notaría de Curacautín con asiento en Lonquimay",
    "notario": "Marianela del Carmen Escobar Melo",
    "comuna": "Lonquimay",
    "direccion": "Bernardo O'Higgins 1210, 2° piso, Lonquimay",
    "telefonos": [
      "+56926137811"
    ],
    "horario": "Lunes a viernes 08:45-13:15 y 15:00-17:30",
    "web": "",
    "publico": "Notaría Marianela del Carmen Escobar Melo"
  },
  {
    "id": "notaria-de-victoria",
    "region": "La Araucanía",
    "nombre": "Notaría de Victoria",
    "notario": "César Enrique Peiñan Aillapán",
    "comuna": "Victoria",
    "direccion": "Eleuterio Ramírez 569, Victoria",
    "telefonos": [
      "+56452213636",
      "+56452887478"
    ],
    "horario": "Lunes a viernes 09:00-14:00 y 15:00-17:00",
    "web": "",
    "publico": "Notaría César Enrique Peiñan Aillapán"
  },
  {
    "id": "notaria-conservador-y-archivero-de-traiguen",
    "region": "La Araucanía",
    "nombre": "Notaría, Conservador y Archivero de Traiguén",
    "notario": "Yusef Gerardo Hales Hott",
    "comuna": "Traiguén",
    "direccion": "Errázuriz 418, Traiguén",
    "telefonos": [
      "+56443051909"
    ],
    "horario": "Lunes a jueves 09:00-14:00 y 15:00-16:00; viernes 09:00-16:00",
    "web": "",
    "publico": "Notaría Yusef Gerardo Hales Hott"
  },
  {
    "id": "notaria-conservador-y-archivero-de-puren",
    "region": "La Araucanía",
    "nombre": "Notaría, Conservador y Archivero de Purén",
    "notario": "Roberto Arnoldo Cooper Aguilera",
    "comuna": "Purén",
    "direccion": "Urrutia 470, Purén",
    "telefonos": [
      "+56998172785"
    ],
    "horario": "Lunes a viernes 09:00-14:30 y 15:00-16:30",
    "web": "",
    "publico": "Notaría Roberto Arnoldo Cooper Aguilera"
  },
  {
    "id": "1-notaria-de-temuco",
    "region": "La Araucanía",
    "nombre": "1ª Notaría de Temuco",
    "notario": "Álvaro Javier Valdebenito Salgado",
    "comuna": "Temuco",
    "direccion": "Hochstetter 560, Edificio Cero K, Temuco",
    "telefonos": [
      "+56452527594",
      "+56452527597"
    ],
    "horario": "Lunes a viernes 9:00 a 17:30; sábado de turno 9:00 a 12:00",
    "web": "",
    "publico": "Notaría Álvaro Javier Valdebenito Salgado"
  },
  {
    "id": "2-notaria-de-temuco",
    "region": "La Araucanía",
    "nombre": "2ª Notaría de Temuco",
    "notario": "Esmirna de la Cruz Vidal Moraga",
    "comuna": "Temuco",
    "direccion": "Antonio Varas 979, Temuco",
    "telefonos": [
      "+56452743434",
      "+56966351687"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría Esmirna de la Cruz Vidal Moraga"
  },
  {
    "id": "3-notaria-de-temuco",
    "region": "La Araucanía",
    "nombre": "3ª Notaría de Temuco",
    "notario": "Cargo vacante (Interina: Daniela Soledad Abarzúa Fernández)",
    "comuna": "Temuco",
    "direccion": "Arturo Prat 815, Temuco",
    "telefonos": [
      "+56973656294",
      "+56951600471"
    ],
    "horario": "Lunes a jueves 9:00-17:00; viernes 9:00-16:00",
    "web": ""
  },
  {
    "id": "4-notaria-de-temuco",
    "region": "La Araucanía",
    "nombre": "4ª Notaría de Temuco",
    "notario": "Elena Rosa Leyton Carvajal",
    "comuna": "Temuco",
    "direccion": "Claro Solar 831, Temuco",
    "telefonos": [
      "+56452362050",
      "+56452362046"
    ],
    "horario": "Lunes a viernes 09:00-17:00 continuado",
    "web": "",
    "publico": "Notaría Elena Rosa Leyton Carvajal"
  },
  {
    "id": "5-notaria-de-temuco",
    "region": "La Araucanía",
    "nombre": "5ª Notaría de Temuco",
    "notario": "Jorge Elias Tadres Hales",
    "comuna": "Temuco",
    "direccion": "Antonio Varas 976, Temuco",
    "telefonos": [
      "+56452213162"
    ],
    "horario": "Lunes a viernes 08:45 a 16:30 continuado",
    "web": "",
    "publico": "Notaría Jorge Elias Tadres Hales"
  },
  {
    "id": "6-notaria-de-temuco-con-asiento-en-padre-las-casas",
    "region": "La Araucanía",
    "nombre": "6ª Notaría de Temuco con asiento en Padre Las Casas",
    "notario": "Rodrigo Marcelo Abarzúa Vergara",
    "comuna": "Padre Las Casas",
    "direccion": "Villa Alegre 811, Padre Las Casas",
    "telefonos": [
      "+56452336074"
    ],
    "horario": "Lunes a viernes 8:30 a 16:00 continuado",
    "web": "",
    "publico": "Notaría Rodrigo Marcelo Abarzúa Vergara"
  },
  {
    "id": "7-notaria-de-temuco-con-asiento-en-vilcun",
    "region": "La Araucanía",
    "nombre": "7ª Notaría de Temuco con asiento en Vilcún",
    "notario": "Carlos Gustavo Martínez Elgueta",
    "comuna": "Vilcún",
    "direccion": "Yungay 374, Vilcún",
    "telefonos": [
      "+56452643736",
      "+56452643353"
    ],
    "horario": "Lunes a jueves 09:00 a 14:00 y 15:00 a 17:00; viernes 09:00 a 16:00",
    "web": "",
    "publico": "Notaría Carlos Gustavo Martínez Elgueta"
  },
  {
    "id": "8-notaria-de-temuco-con-asiento-en-cunco",
    "region": "La Araucanía",
    "nombre": "8ª Notaría de Temuco con asiento en Cunco",
    "notario": "Carlos Rodrigo Ulloa González",
    "comuna": "Cunco",
    "direccion": "Av. Llaima 1935, local 16, Alto Allipén, Cunco",
    "telefonos": [
      "+56452327565",
      "+56452757165"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00 continuado",
    "web": "",
    "publico": "Notaría Carlos Rodrigo Ulloa González"
  },
  {
    "id": "9-notaria-de-temuco",
    "region": "La Araucanía",
    "nombre": "9ª Notaría de Temuco",
    "notario": "Paula Nicole Falcón Cartes",
    "comuna": "Temuco",
    "direccion": "Av. Alemania 0320, Temuco",
    "telefonos": [
      "+56453224436"
    ],
    "horario": "Lunes a viernes 09:00 a 17:00 continuado",
    "web": "",
    "publico": "Notaría Paula Nicole Falcón Cartes"
  },
  {
    "id": "1-notaria-de-lautaro",
    "region": "La Araucanía",
    "nombre": "1ª Notaría de Lautaro",
    "notario": "Gonzalo Patricio Cruz Gutiérrez",
    "comuna": "Lautaro",
    "direccion": "José Miguel Carrera 340, oficina 31, piso 2, Lautaro",
    "telefonos": [
      "+56452599122"
    ],
    "horario": "Lunes a viernes 9:00 a 13:30 y 15:00 a 17:30",
    "web": "",
    "publico": "Notaría Gonzalo Patricio Cruz Gutiérrez"
  },
  {
    "id": "2-notaria-de-lautaro-con-asiento-en-galvarino",
    "region": "La Araucanía",
    "nombre": "2ª Notaría de Lautaro con asiento en Galvarino",
    "notario": "Cargo vacante (Interina: Paulina Noemi Huinca Carilao)",
    "comuna": "Galvarino",
    "direccion": "Maipú 305, local 10, Galvarino",
    "telefonos": [
      "+56452595560"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00",
    "web": ""
  },
  {
    "id": "notaria-y-conservador-de-minas-de-villarrica",
    "region": "La Araucanía",
    "nombre": "Notaría y Conservador de Minas de Villarrica",
    "notario": "Francisco Javier Muñoz Flores",
    "comuna": "Villarrica",
    "direccion": "Pedro Montt 305, Villarrica",
    "telefonos": [
      "+56452414540",
      "+56452411513"
    ],
    "horario": "Lunes a viernes 08:30 a 14:00 y 15:00 a 16:30; sábado 10:00 a 12:00",
    "web": "",
    "publico": "Notaría Francisco Javier Muñoz Flores"
  },
  {
    "id": "notaria-de-pitrufquen",
    "region": "La Araucanía",
    "nombre": "Notaría de Pitrufquén",
    "notario": "Gabriel Alfonso Ferrand Miranda",
    "comuna": "Pitrufquén",
    "direccion": "Bilbao 473, Pitrufquén",
    "telefonos": [
      "+56452887490",
      "+56452887491"
    ],
    "horario": "Lunes a jueves 9:00-14:30 y 15:30-17:00; viernes 9:00-16:00",
    "web": "",
    "publico": "Notaría Gabriel Alfonso Ferrand Miranda"
  },
  {
    "id": "notaria-conservador-y-archivero-de-tolten",
    "region": "La Araucanía",
    "nombre": "Notaría, Conservador y Archivero de Toltén",
    "notario": "Sergio Rodrigo Sanhueza Ríos",
    "comuna": "Toltén",
    "direccion": "Reina Guillermina 330, Toltén",
    "telefonos": [
      "+56227359002"
    ],
    "horario": "Lunes a viernes 9:00 a 16:00 continuado",
    "web": "",
    "publico": "Notaría Sergio Rodrigo Sanhueza Ríos"
  },
  {
    "id": "notaria-conservador-y-archivero-de-loncoche",
    "region": "La Araucanía",
    "nombre": "Notaría, Conservador y Archivero de Loncoche",
    "notario": "Luz Maria Francisca Vergara Williams",
    "comuna": "Loncoche",
    "direccion": "Barros Arana 584, Loncoche",
    "telefonos": [
      "+56452472677",
      "+56452400369"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00 continuado",
    "web": "",
    "publico": "Notaría Luz Maria Francisca Vergara Williams"
  },
  {
    "id": "notaria-conservador-y-archivero-de-carahue",
    "region": "La Araucanía",
    "nombre": "Notaría, Conservador y Archivero de Carahue",
    "notario": "José Andrés Padilla Flores",
    "comuna": "Carahue",
    "direccion": "Lautaro 163, Carahue",
    "telefonos": [
      "+56228692898"
    ],
    "horario": "Lunes a viernes 8:30 a 13:00 y 13:30 a 16:00",
    "web": "",
    "publico": "Notaría José Andrés Padilla Flores"
  },
  {
    "id": "notaria-conservador-y-archivero-de-nueva-imperial",
    "region": "La Araucanía",
    "nombre": "Notaría, Conservador y Archivero de Nueva Imperial",
    "notario": "Gonzalo Nicolas Garay Burnás",
    "comuna": "Nueva Imperial",
    "direccion": "Ernesto Riquelme 349, Nueva Imperial",
    "telefonos": [
      "+56452362020",
      "+56452362021"
    ],
    "horario": "Lunes a viernes 9:00 a 16:00",
    "web": "",
    "publico": "Notaría Gonzalo Nicolas Garay Burnás"
  },
  {
    "id": "notaria-de-pucon",
    "region": "La Araucanía",
    "nombre": "Notaría de Pucón",
    "notario": "Luis Enrique Espinoza Garrido",
    "comuna": "Pucón",
    "direccion": "General Urrutia 283, oficina 26, Edificio Alta Terra, Pucón",
    "telefonos": [
      "+56452441293"
    ],
    "horario": "Lunes a viernes 08:30-13:30 y 14:30-17:00",
    "web": "",
    "publico": "Notaría Luis Enrique Espinoza Garrido"
  },
  {
    "id": "1-notaria-de-valdivia",
    "region": "Los Ríos",
    "nombre": "1ª Notaría de Valdivia",
    "notario": "Pablo Valenzuela Pérez",
    "comuna": "Valdivia",
    "direccion": "Independencia 625, Valdivia",
    "telefonos": [
      "+56632249900",
      "+56632249099"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00; sábados (solo turnos) 10:00 a 12:30",
    "web": "",
    "publico": "Notaría Pablo Valenzuela Pérez"
  },
  {
    "id": "2-notaria-de-valdivia",
    "region": "Los Ríos",
    "nombre": "2ª Notaría de Valdivia",
    "notario": "Elizabeth Catherine Pacheco Cifuentes",
    "comuna": "Valdivia",
    "direccion": "San Carlos 159, local 3, Valdivia",
    "telefonos": [],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00; sábados de turno 10:00 a 12:30",
    "web": "",
    "publico": "Notaría Elizabeth Catherine Pacheco Cifuentes"
  },
  {
    "id": "3-notaria-de-valdivia",
    "region": "Los Ríos",
    "nombre": "3ª Notaría de Valdivia",
    "notario": "Cargo vacante (Interino: Osvaldo César Salgado Chamorro)",
    "comuna": "Valdivia",
    "direccion": "Independencia 548, Valdivia",
    "telefonos": [
      "+56632249717",
      "+56632279140"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00; sábados de turno 09:00 a 12:30",
    "web": ""
  },
  {
    "id": "4-notaria-de-valdivia",
    "region": "Los Ríos",
    "nombre": "4ª Notaría de Valdivia",
    "notario": "Juan Bautista Rodríguez Ruiz",
    "comuna": "Valdivia",
    "direccion": "Camilo Henríquez 540, local 3, Valdivia",
    "telefonos": [
      "+56632203007",
      "+56996901732"
    ],
    "horario": "Lunes a viernes 9:00 a 14:00 y 15:00 a 17:00; sábados de turno 10:00 a 12:30",
    "web": "",
    "publico": "Notaría Juan Bautista Rodríguez Ruiz"
  },
  {
    "id": "notaria-de-mariquina",
    "region": "Los Ríos",
    "nombre": "Notaría de Mariquina",
    "notario": "Gino Ignacio Mencarini Solervicens",
    "comuna": "Mariquina",
    "direccion": "Padre Plácido 1040, Mariquina",
    "telefonos": [
      "+56632451358",
      "+56632248358"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría Gino Ignacio Mencarini Solervicens"
  },
  {
    "id": "1-notaria-de-los-lagos",
    "region": "Los Ríos",
    "nombre": "1ª Notaría de Los Lagos",
    "notario": "Antonieta Marina Rojas Pontigo",
    "comuna": "Los Lagos",
    "direccion": "Balmaceda 205, local 3, Los Lagos",
    "telefonos": [
      "+56632461332"
    ],
    "horario": "Lunes a viernes 09:00-14:00 y 15:00-17:00",
    "web": "",
    "publico": "Notaría Antonieta Marina Rojas Pontigo"
  },
  {
    "id": "2-notaria-de-los-lagos-con-asiento-en-futrono",
    "region": "Los Ríos",
    "nombre": "2ª Notaría de Los Lagos con asiento en Futrono",
    "notario": "Cargo vacante (Interina: Gisele Magdalena Henríquez Vallejos)",
    "comuna": "Futrono",
    "direccion": "Los Carrera 25, Futrono",
    "telefonos": [
      "+56974525700"
    ],
    "horario": "Lunes a viernes 09:00-14:00 y 15:00-17:00",
    "web": ""
  },
  {
    "id": "notaria-de-panguipulli",
    "region": "Los Ríos",
    "nombre": "Notaría de Panguipulli",
    "notario": "Cristian Andrés Del Fierro Ruedlinger",
    "comuna": "Panguipulli",
    "direccion": "Bernardo O'Higgins 808, Panguipulli",
    "telefonos": [
      "+56957994616",
      "+56236310096"
    ],
    "horario": "Lunes a viernes 8:30 a 13:30 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría Cristian Andrés Del Fierro Ruedlinger"
  },
  {
    "id": "notaria-conservador-y-archivero-de-paillaco",
    "region": "Los Ríos",
    "nombre": "Notaría, Conservador y Archivero de Paillaco",
    "notario": "Conrad Pablo Zülch Parra",
    "comuna": "Paillaco",
    "direccion": "Camilo Henríquez 220, oficinas 7 y 8, Paillaco",
    "telefonos": [
      "+56632421555"
    ],
    "horario": "Lunes a jueves 9:00-14:00 y 15:00-17:00; viernes 9:00-14:00 y 14:30-16:30",
    "web": "",
    "publico": "Notaría Conrad Pablo Zülch Parra"
  },
  {
    "id": "notaria-de-la-union",
    "region": "Los Ríos",
    "nombre": "Notaría de La Unión",
    "notario": "Alejandra Carolina Angulo Sandoval",
    "comuna": "La Unión",
    "direccion": "Eleuterio Ramírez 631, La Unión",
    "telefonos": [
      "+56642322235"
    ],
    "horario": "Lunes a viernes 09:00-17:00",
    "web": "",
    "publico": "Notaría Alejandra Carolina Angulo Sandoval"
  },
  {
    "id": "notaria-conservador-y-archivero-de-rio-bueno",
    "region": "Los Ríos",
    "nombre": "Notaría, Conservador y Archivero de Río Bueno",
    "notario": "Hernán Osvaldo Nesbet Jaramillo",
    "comuna": "Río Bueno",
    "direccion": "Ejército Libertador 1059, Río Bueno",
    "telefonos": [
      "+56642341311",
      "+56642214820"
    ],
    "horario": "Lunes a viernes 09:00 a 17:00",
    "web": "",
    "publico": "Notaría Hernán Osvaldo Nesbet Jaramillo"
  },
  {
    "id": "1-notaria-y-conservador-de-minas-de-osorno",
    "region": "Los Lagos",
    "nombre": "1ª Notaría y Conservador de Minas de Osorno",
    "notario": "Sebastián Sadá Aznar",
    "comuna": "Osorno",
    "direccion": "Manuel Antonio Matta 680, Osorno",
    "telefonos": [
      "+56937407825",
      "+56937829894"
    ],
    "horario": "Lunes a viernes 09:00-14:00 y 15:00-17:00",
    "web": "",
    "publico": "Notaría Sebastián Sadá Aznar"
  },
  {
    "id": "2-notaria-de-osorno",
    "region": "Los Lagos",
    "nombre": "2ª Notaría de Osorno",
    "notario": "Pablo Andrés Eisendecher Bertin",
    "comuna": "Osorno",
    "direccion": "Bernardo O'Higgins 691, Osorno",
    "telefonos": [
      "+56642641222"
    ],
    "horario": "Lunes a viernes 9:00-14:00 y 15:00-17:00",
    "web": "",
    "publico": "Notaría Pablo Andrés Eisendecher Bertin"
  },
  {
    "id": "3-notaria-de-osorno",
    "region": "Los Lagos",
    "nombre": "3ª Notaría de Osorno",
    "notario": "Abdallah Fernández Atuez",
    "comuna": "Osorno",
    "direccion": "Av. Juan Mackenna 871, oficina 102, Osorno",
    "telefonos": [
      "+56642214848"
    ],
    "horario": "Lunes a viernes 09:00-14:00 y 15:00-17:00",
    "web": "",
    "publico": "Notaría Abdallah Fernández Atuez"
  },
  {
    "id": "4-notaria-de-osorno",
    "region": "Los Lagos",
    "nombre": "4ª Notaría de Osorno",
    "notario": "Cargo vacante (Interino: Nicolás Alejandro Valenzuela González)",
    "comuna": "Osorno",
    "direccion": "Av. Juan Mackenna 879, Osorno",
    "telefonos": [
      "+56951537469"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00; sábados (abril, agosto, diciembre) 10:00 a 12:30",
    "web": ""
  },
  {
    "id": "notaria-y-conservador-de-rio-negro",
    "region": "Los Lagos",
    "nombre": "Notaría y Conservador de Río Negro",
    "notario": "Rodrigo Patricio Ferrer Figueroa",
    "comuna": "Río Negro",
    "direccion": "Av. Vicuña Mackenna 243, Río Negro",
    "telefonos": [
      "+56642361201",
      "+56642362120"
    ],
    "horario": "Lunes a viernes 09:00-13:30 y 15:00-17:00",
    "web": "",
    "publico": "Notaría Rodrigo Patricio Ferrer Figueroa"
  },
  {
    "id": "1-notaria-de-puerto-montt",
    "region": "Los Lagos",
    "nombre": "1ª Notaría de Puerto Montt",
    "notario": "Cargo vacante (Interino: Hernán Andrés Gómez Brown)",
    "comuna": "Puerto Montt",
    "direccion": "Benavente 385, Puerto Montt",
    "telefonos": [
      "+56652253154",
      "+56652259903"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00 continuado",
    "web": ""
  },
  {
    "id": "2-notaria-de-puerto-montt",
    "region": "Los Lagos",
    "nombre": "2ª Notaría de Puerto Montt",
    "notario": "Felipe Ricardo San Martín Schröder",
    "comuna": "Puerto Montt",
    "direccion": "Urmeneta 478, Puerto Montt",
    "telefonos": [],
    "horario": "Lunes a viernes 09:00 a 15:30",
    "web": "",
    "publico": "Notaría Felipe Ricardo San Martín Schröder"
  },
  {
    "id": "3-notaria-de-puerto-montt",
    "region": "Los Lagos",
    "nombre": "3ª Notaría de Puerto Montt",
    "notario": "Cargo vacante (Interina: Carol Andrea Rail Pacheco)",
    "comuna": "Puerto Montt",
    "direccion": "Urmeneta 350, Puerto Montt",
    "telefonos": [
      "+56652254230"
    ],
    "horario": "Lunes a viernes 9:00 a 15:00",
    "web": ""
  },
  {
    "id": "4-notaria-de-puerto-montt",
    "region": "Los Lagos",
    "nombre": "4ª Notaría de Puerto Montt",
    "notario": "Cargo vacante (Interina: Paula Lucia Mendez Gallardo)",
    "comuna": "Puerto Montt",
    "direccion": "Benavente 511, Puerto Montt",
    "telefonos": [
      "+56934451130"
    ],
    "horario": "",
    "web": ""
  },
  {
    "id": "5-notaria-de-puerto-montt",
    "region": "Los Lagos",
    "nombre": "5ª Notaría de Puerto Montt",
    "notario": "Lebby Carolin Barría Gutiérrez",
    "comuna": "Puerto Montt",
    "direccion": "Pedro Montt 180, Puerto Montt",
    "telefonos": [
      "+56652470231",
      "+56652273200"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00 continuado",
    "web": "",
    "publico": "Notaría Lebby Carolin Barría Gutiérrez"
  },
  {
    "id": "6-notaria-de-puerto-montt",
    "region": "Los Lagos",
    "nombre": "6ª Notaría de Puerto Montt",
    "notario": "Juan Carlos Cabezas Cepeda",
    "comuna": "Puerto Montt",
    "direccion": "Av. Presidente Ibáñez 280, Puerto Montt",
    "telefonos": [
      "+56722695700"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00",
    "web": "",
    "publico": "Notaría Juan Carlos Cabezas Cepeda"
  },
  {
    "id": "7-notaria-de-puerto-montt-con-asiento-en-alerce",
    "region": "Los Lagos",
    "nombre": "7ª Notaría de Puerto Montt con asiento en Alerce",
    "notario": "Cargo vacante sin proveer",
    "comuna": "Alerce",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "1-notaria-de-puerto-varas",
    "region": "Los Lagos",
    "nombre": "1ª Notaría de Puerto Varas",
    "notario": "Bernardo Patricio Espinosa Bancalari",
    "comuna": "Puerto Varas",
    "direccion": "Av. Gramado 535, Puerto Varas",
    "telefonos": [
      "+56652230890",
      "+56652235718"
    ],
    "horario": "Lunes a viernes 9:00 a 14:00 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría Bernardo Patricio Espinosa Bancalari"
  },
  {
    "id": "2-notaria-de-puerto-varas-con-asiento-en-llanquihue",
    "region": "Los Lagos",
    "nombre": "2ª Notaría de Puerto Varas con asiento en Llanquihue",
    "notario": "Cargo vacante (Interina: Viviana Nicole Segura Donoso)",
    "comuna": "Llanquihue",
    "direccion": "Vicente Pérez Rosales 213, Llanquihue",
    "telefonos": [
      "+56652243131"
    ],
    "horario": "Lunes a viernes 09:00 a 13:30 y 15:00 a 17:30",
    "web": ""
  },
  {
    "id": "3-notaria-de-puerto-varas",
    "region": "Los Lagos",
    "nombre": "3ª Notaría de Puerto Varas",
    "notario": "Sandra Eliana Cárcamo Velásquez",
    "comuna": "Puerto Varas",
    "direccion": "San Bernardo 224, esquina Walker Martínez, Puerto Varas",
    "telefonos": [
      "+56652485488",
      "+56652237513"
    ],
    "horario": "Lunes a viernes 09:00 a 13:30 y 14:30 a 17:00",
    "web": "",
    "publico": "Notaría Sandra Eliana Cárcamo Velásquez"
  },
  {
    "id": "4-notaria-de-puerto-varas-con-asiento-en-fresia",
    "region": "Los Lagos",
    "nombre": "4ª Notaría de Puerto Varas con asiento en Fresia",
    "notario": "Soraya Fátima Paulina Jacob Núñez",
    "comuna": "Fresia",
    "direccion": "Irarrázaval 590, Fresia",
    "telefonos": [
      "+56940092909"
    ],
    "horario": "Lunes a viernes 8:30-14:00 y 15:00-16:30",
    "web": "",
    "publico": "Notaría Soraya Fátima Paulina Jacob Núñez"
  },
  {
    "id": "5-notaria-de-puerto-varas-con-asiento-en-frutillar",
    "region": "Los Lagos",
    "nombre": "5ª Notaría de Puerto Varas con asiento en Frutillar",
    "notario": "Rodrigo Andrés Palomo Tornvall",
    "comuna": "Frutillar",
    "direccion": "Av. Arturo Alessandri Palma 187 F, Frutillar Alto, Frutillar",
    "telefonos": [
      "+56944029950"
    ],
    "horario": "Lunes a viernes 8:30 a 13:30 y 14:30 a 16:30; sábados 10:00 a 13:00",
    "web": "",
    "publico": "Notaría Rodrigo Andrés Palomo Tornvall"
  },
  {
    "id": "notaria-conservador-y-archivero-de-hualaihue",
    "region": "Los Lagos",
    "nombre": "Notaría, Conservador y Archivero de Hualaihué",
    "notario": "Elena Pía Ramírez Catalán",
    "comuna": "Hualaihué",
    "direccion": "Ignacio Carrera Pinto S/N, Hualaihué",
    "telefonos": [
      "+56652217212"
    ],
    "horario": "Lunes a jueves 8:30 a 14:15 y 15:00 a 16:30; viernes 8:15 a 14:15",
    "web": "",
    "publico": "Notaría Elena Pía Ramírez Catalán"
  },
  {
    "id": "notaria-conservador-y-archivero-de-calbuco",
    "region": "Los Lagos",
    "nombre": "Notaría, Conservador y Archivero de Calbuco",
    "notario": "Boris Eudaldo Navarro Alarcón",
    "comuna": "Calbuco",
    "direccion": "Almirante Latorre 107, Calbuco",
    "telefonos": [
      "+56652462563"
    ],
    "horario": "Lunes a viernes 8:30-15:30",
    "web": "",
    "publico": "Notaría Boris Eudaldo Navarro Alarcón"
  },
  {
    "id": "notaria-conservador-y-archivero-de-maullin",
    "region": "Los Lagos",
    "nombre": "Notaría, Conservador y Archivero de Maullín",
    "notario": "Pamela Alejandra Quinteros López",
    "comuna": "Maullín",
    "direccion": "Baquedano 480, Maullín",
    "telefonos": [
      "+56652451604"
    ],
    "horario": "Lunes a viernes 09:00 a 16:00 continuado",
    "web": "",
    "publico": "Notaría Pamela Alejandra Quinteros López"
  },
  {
    "id": "notaria-y-conservador-de-los-muermos",
    "region": "Los Lagos",
    "nombre": "Notaría y Conservador de Los Muermos",
    "notario": "Claudia Lorena Brahm Bahamonde",
    "comuna": "Los Muermos",
    "direccion": "Antonio Varas 103, Los Muermos",
    "telefonos": [
      "+56652211663",
      "+56652211486"
    ],
    "horario": "Lunes a jueves 09:00 a 14:00 y 15:00 a 17:00; viernes 09:00 a 16:00",
    "web": "",
    "publico": "Notaría Claudia Lorena Brahm Bahamonde"
  },
  {
    "id": "1-notaria-de-castro",
    "region": "Los Lagos",
    "nombre": "1ª Notaría de Castro",
    "notario": "Cargo vacante (Interino: Juan Carlos Torres Ampuero)",
    "comuna": "Castro",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": ""
  },
  {
    "id": "2-notaria-de-castro",
    "region": "Los Lagos",
    "nombre": "2ª Notaría de Castro",
    "notario": "Cristopher Andrés Rolack Fuentes",
    "comuna": "Castro",
    "direccion": "Gamboa 481, Castro",
    "telefonos": [
      "+56652238858",
      "+56652238856"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría Cristopher Andrés Rolack Fuentes"
  },
  {
    "id": "notaria-y-conservador-de-ancud",
    "region": "Los Lagos",
    "nombre": "Notaría y Conservador de Ancud",
    "notario": "Nicolás Ignacio Constenla Novoa",
    "comuna": "Ancud",
    "direccion": "Chacabuco 750, Ancud",
    "telefonos": [
      "+56652870250"
    ],
    "horario": "Lunes a viernes 08:30 a 15:30",
    "web": "",
    "publico": "Notaría Nicolás Ignacio Constenla Novoa"
  },
  {
    "id": "notaria-y-conservador-de-quellon",
    "region": "Los Lagos",
    "nombre": "Notaría y Conservador de Quellón",
    "notario": "Claudio Alejandro Cabello Olavarría",
    "comuna": "Quellón",
    "direccion": "Av. La Paz 302, Quellón",
    "telefonos": [
      "+56652680601"
    ],
    "horario": "Lunes a jueves 9:00 a 14:00 y 15:30 a 17:30; viernes 9:00 a 16:00",
    "web": "",
    "publico": "Notaría Claudio Alejandro Cabello Olavarría"
  },
  {
    "id": "1-notaria-conservador-y-archivero-de-chaiten",
    "region": "Los Lagos",
    "nombre": "1ª Notaría, Conservador y Archivero de Chaitén",
    "notario": "Tatiana Karina Barrientos Albrecht",
    "comuna": "Chaitén",
    "direccion": "Libertad 615, Chaitén",
    "telefonos": [
      "+56652721345"
    ],
    "horario": "",
    "web": "",
    "publico": "Notaría Tatiana Karina Barrientos Albrecht"
  },
  {
    "id": "2-notaria-de-chaiten-con-asiento-en-futaleufu",
    "region": "Los Lagos",
    "nombre": "2ª Notaría de Chaitén con asiento en Futaleufú",
    "notario": "Patricia Isabel Barrientos Cárdenas",
    "comuna": "Futaleufú",
    "direccion": "Manuel Rodríguez 237, Futaleufú",
    "telefonos": [
      "+56652721496"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría Patricia Isabel Barrientos Cárdenas"
  },
  {
    "id": "1-notaria-de-coyhaique",
    "region": "Aysén",
    "nombre": "1ª Notaría de Coyhaique",
    "notario": "Matías Roberto Rand González",
    "comuna": "Coyhaique",
    "direccion": "21 de Mayo 551, Coyhaique",
    "telefonos": [
      "+56672255622",
      "+56672255777"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00; sábados de turno (marzo, mayo, julio, septiembre, noviembre 2026) 10:00 a 13:00",
    "web": "",
    "publico": "Notaría Matías Roberto Rand González"
  },
  {
    "id": "2-notaria-de-coyhaique",
    "region": "Aysén",
    "nombre": "2ª Notaría de Coyhaique",
    "notario": "Darwin Gustavo Contreras Piderit",
    "comuna": "Coyhaique",
    "direccion": "Eusebio Lillo 134, Coyhaique",
    "telefonos": [
      "+56672240085",
      "+56672240086"
    ],
    "horario": "Lunes a viernes 09:00 a 14:00 y 15:00 a 17:00; sábados de turno (junio, agosto, octubre, diciembre 2026) 10:00 a 13:00",
    "web": "",
    "publico": "Notaría Darwin Gustavo Contreras Piderit"
  },
  {
    "id": "notaria-de-aysen",
    "region": "Aysén",
    "nombre": "Notaría de Aysén",
    "notario": "Cristian David Alfonso Calderón Améstica",
    "comuna": "Aysén",
    "direccion": "Bernardo O'Higgins 605, oficina 101, Aysén",
    "telefonos": [
      "+56672272281",
      "+56672272282"
    ],
    "horario": "Lunes a viernes 9:00 a 14:00 y 15:00 a 17:00",
    "web": "",
    "publico": "Notaría Cristian David Alfonso Calderón Améstica"
  },
  {
    "id": "notaria-conservador-y-archivero-de-cisnes",
    "region": "Aysén",
    "nombre": "Notaría, Conservador y Archivero de Cisnes",
    "notario": "Fernando Cristián Arancibia Meza",
    "comuna": "Cisnes",
    "direccion": "Santiago Amengual 135, Puerto Cisnes, Cisnes",
    "telefonos": [
      "+56672346315"
    ],
    "horario": "Lunes a viernes 9:00 a 13:00 y 15:00 a 18:00",
    "web": "",
    "publico": "Notaría Fernando Cristián Arancibia Meza"
  },
  {
    "id": "notaria-conservador-y-archivero-de-chile-chico",
    "region": "Aysén",
    "nombre": "Notaría, Conservador y Archivero de Chile Chico",
    "notario": "Alejandro Javier Dobbs Roa",
    "comuna": "Chile Chico",
    "direccion": "O'Higgins 43, Chile Chico",
    "telefonos": [
      "+56672272265"
    ],
    "horario": "Lunes a viernes 8:30 a 13:00 y 15:00 a 18:00",
    "web": "",
    "publico": "Notaría Alejandro Javier Dobbs Roa"
  },
  {
    "id": "notaria-conservador-y-archivero-de-cochrane",
    "region": "Aysén",
    "nombre": "Notaría, Conservador y Archivero de Cochrane",
    "notario": "Héctor Fernando Cáceres Hube",
    "comuna": "Cochrane",
    "direccion": "Bernardo O'Higgins 437-B, Cochrane",
    "telefonos": [
      "+56672522301"
    ],
    "horario": "Lunes a viernes 9:00 a 13:00 y 15:00 a 18:00",
    "web": "",
    "publico": "Notaría Héctor Fernando Cáceres Hube"
  },
  {
    "id": "1-notaria-de-punta-arenas",
    "region": "Magallanes",
    "nombre": "1ª Notaría de Punta Arenas",
    "notario": "Cargo vacante (Interino: Mario Luis Elgueta Saldivia)",
    "comuna": "Punta Arenas",
    "direccion": "Lautaro Navarro 1164, Punta Arenas",
    "telefonos": [
      "+56612247471",
      "+56612223781"
    ],
    "horario": "Lunes a viernes 10:00 a 15:00",
    "web": ""
  },
  {
    "id": "2-notaria-de-punta-arenas",
    "region": "Magallanes",
    "nombre": "2ª Notaría de Punta Arenas",
    "notario": "José Antonio Martínez Demandes",
    "comuna": "Punta Arenas",
    "direccion": "Presidente Federico Errázuriz 877, Punta Arenas",
    "telefonos": [
      "+56612223101",
      "+56612372032"
    ],
    "horario": "Lunes a viernes 9:00 a 14:00 y 15:30 a 18:00; sábados de turno (enero, abril, julio, octubre) 10:00 a 13:00",
    "web": "",
    "publico": "Notaría José Antonio Martínez Demandes"
  },
  {
    "id": "3-notaria-de-punta-arenas",
    "region": "Magallanes",
    "nombre": "3ª Notaría de Punta Arenas",
    "notario": "Cristian Mauricio Matus Cuevas",
    "comuna": "Punta Arenas",
    "direccion": "",
    "telefonos": [],
    "horario": "",
    "web": "",
    "publico": "Notaría Cristian Mauricio Matus Cuevas"
  },
  {
    "id": "notaria-y-conservador-de-natales",
    "region": "Magallanes",
    "nombre": "Notaría y Conservador de Natales",
    "notario": "Herbert James Mundy Casanova",
    "comuna": "Natales",
    "direccion": "Carlos Bories 454, oficina C, Natales",
    "telefonos": [
      "+56612415722",
      "+56612415256"
    ],
    "horario": "Lunes a viernes 08:30 a 16:00",
    "web": "",
    "publico": "Notaría Herbert James Mundy Casanova"
  }
];
