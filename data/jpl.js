// Juzgados de Policía Local de Chile, por región (dependen de cada municipalidad; no forman parte del Poder Judicial).
// Base: listado de Juzgados de Policía Local por región publicado por el SERNAC (revisado el 21/11/2026).
// Teléfonos: se agregan a medida que se confirman (Alto Hospicio: aportados por el usuario el 21/11/2026).
const JPL = [
 {
  "region": "Arica y Parinacota",
  "comuna": "Arica",
  "nombre": "1° Juzgado de Policía Local de Arica",
  "direccion": "Chacabuco 314, Parque Colón, Arica",
  "telefonos": []
 },
 {
  "region": "Arica y Parinacota",
  "comuna": "Arica",
  "nombre": "2° Juzgado de Policía Local de Arica",
  "direccion": "Chacabuco 314, Parque Colón, Arica",
  "telefonos": []
 },
 {
  "region": "Arica y Parinacota",
  "comuna": "Arica",
  "nombre": "3° Juzgado de Policía Local de Arica",
  "direccion": "Chacabuco 314, Parque Colón, Arica",
  "telefonos": []
 },
 {
  "region": "Tarapacá",
  "comuna": "Iquique",
  "nombre": "1° Juzgado de Policía Local de Iquique",
  "direccion": "Sotomayor 657, Iquique",
  "telefonos": []
 },
 {
  "region": "Tarapacá",
  "comuna": "Iquique",
  "nombre": "2° Juzgado de Policía Local de Iquique",
  "direccion": "José Joaquín Pérez 360, Iquique",
  "telefonos": []
 },
 {
  "region": "Tarapacá",
  "comuna": "Iquique",
  "nombre": "3° Juzgado de Policía Local de Iquique",
  "direccion": "José Joaquín Pérez 360, Iquique",
  "telefonos": []
 },
 {
  "region": "Tarapacá",
  "comuna": "Alto Hospicio",
  "nombre": "Juzgado de Policía Local de Alto Hospicio",
  "direccion": "Chaca 3034, Alto Hospicio",
  "telefonos": [
   "+56572583271",
   "+56572583278"
  ]
 },
 {
  "region": "Tarapacá",
  "comuna": "Pozo Almonte",
  "nombre": "Juzgado de Policía Local de Pozo Almonte",
  "direccion": "Balmaceda 258, Pozo Almonte",
  "telefonos": []
 },
 {
  "region": "Tarapacá",
  "comuna": "Huara",
  "nombre": "Juzgado de Policía Local de Huara",
  "direccion": "Avenida Prat S/N, Huara",
  "telefonos": []
 },
 {
  "region": "Tarapacá",
  "comuna": "Pica",
  "nombre": "Juzgado de Policía Local de Pica",
  "direccion": "Av. Juan Márquez, sitio 10, Pica",
  "telefonos": []
 },
 {
  "region": "Tarapacá",
  "comuna": "Colchane",
  "nombre": "Juzgado de Policía Local de Colchane",
  "direccion": "Av. Teniente González S/N, Colchane",
  "telefonos": []
 },
 {
  "region": "Tarapacá",
  "comuna": "Camiña",
  "nombre": "Juzgado de Policía Local de Camiña",
  "direccion": "Arturo Prat S/N, Camiña",
  "telefonos": []
 },
 {
  "region": "Antofagasta",
  "comuna": "Antofagasta",
  "nombre": "1° Juzgado de Policía Local de Antofagasta",
  "direccion": "Av. Séptimo de Línea 3505, Antofagasta",
  "telefonos": []
 },
 {
  "region": "Antofagasta",
  "comuna": "Antofagasta",
  "nombre": "2° Juzgado de Policía Local de Antofagasta",
  "direccion": "Av. Séptimo de Línea 3505, Antofagasta",
  "telefonos": []
 },
 {
  "region": "Antofagasta",
  "comuna": "Antofagasta",
  "nombre": "3° Juzgado de Policía Local de Antofagasta",
  "direccion": "Av. Séptimo de Línea 3505, Antofagasta",
  "telefonos": []
 },
 {
  "region": "Antofagasta",
  "comuna": "Tocopilla",
  "nombre": "Juzgado de Policía Local de Tocopilla",
  "direccion": "21 de Mayo 1645, Tocopilla",
  "telefonos": []
 },
 {
  "region": "Antofagasta",
  "comuna": "Taltal",
  "nombre": "Juzgado de Policía Local de Taltal",
  "direccion": "Prat 515, Taltal",
  "telefonos": []
 },
 {
  "region": "Antofagasta",
  "comuna": "María Elena",
  "nombre": "Juzgado de Policía Local de María Elena",
  "direccion": "Aconcagua 02027, María Elena",
  "telefonos": []
 },
 {
  "region": "Antofagasta",
  "comuna": "Mejillones",
  "nombre": "Juzgado de Policía Local de Mejillones",
  "direccion": "Francisco Pinto 200, Mejillones",
  "telefonos": []
 },
 {
  "region": "Antofagasta",
  "comuna": "Baquedano",
  "nombre": "Juzgado de Policía Local de Baquedano",
  "direccion": "Av. Salvador Allende S/N, Baquedano",
  "telefonos": []
 },
 {
  "region": "Atacama",
  "comuna": "Chañaral",
  "nombre": "Juzgado de Policía Local de Chañaral",
  "direccion": "Calle Buín n°522 (Sede Parroquial) Domicilio provisorio por aluvión, Chañaral",
  "telefonos": []
 },
 {
  "region": "Atacama",
  "comuna": "Diego de Almagro",
  "nombre": "Juzgado de Policía Local de Diego de Almagro",
  "direccion": "Juan Martínez 1403, Diego de Almagro",
  "telefonos": []
 },
 {
  "region": "Atacama",
  "comuna": "Copiapó",
  "nombre": "1° Juzgado de Policía Local de Copiapó",
  "direccion": "Calle Colipi 862, Copiapó",
  "telefonos": []
 },
 {
  "region": "Atacama",
  "comuna": "Copiapó",
  "nombre": "2° Juzgado de Policía Local de Copiapó",
  "direccion": "Calle Colipi 817, Copiapó",
  "telefonos": []
 },
 {
  "region": "Atacama",
  "comuna": "Huasco",
  "nombre": "Juzgado de Policía Local de Huasco",
  "direccion": "Calle Craig 345, Huasco",
  "telefonos": []
 },
 {
  "region": "Atacama",
  "comuna": "Freirina",
  "nombre": "Juzgado de Policía Local de Freirina",
  "direccion": "Templo S/N, Freirina",
  "telefonos": []
 },
 {
  "region": "Atacama",
  "comuna": "Tierra Amarilla",
  "nombre": "Juzgado de Policía Local de Tierra Amarilla",
  "direccion": "Miguel Lemeur 544, Tierra Amarilla",
  "telefonos": []
 },
 {
  "region": "Atacama",
  "comuna": "Alto del Carmen",
  "nombre": "Juzgado de Policía Local de Alto del Carmen",
  "direccion": "Padre Alonso García S/N, Alto del Carmen",
  "telefonos": []
 },
 {
  "region": "Atacama",
  "comuna": "Caldera",
  "nombre": "Juzgado de Policía Local de Caldera",
  "direccion": "Cousiño 395, Caldera",
  "telefonos": []
 },
 {
  "region": "Atacama",
  "comuna": "Vallenar",
  "nombre": "Juzgado de Policía Local de Vallenar",
  "direccion": "Calle Plaza 15, Vallenar",
  "telefonos": []
 },
 {
  "region": "Coquimbo",
  "comuna": "La Serena",
  "nombre": "1° Juzgado de Policía Local de La Serena",
  "direccion": "Brasil 321, La Serena",
  "telefonos": []
 },
 {
  "region": "Coquimbo",
  "comuna": "La Serena",
  "nombre": "2° Juzgado de Policía Local de La Serena",
  "direccion": "Los Carrera 569, La Serena",
  "telefonos": []
 },
 {
  "region": "Coquimbo",
  "comuna": "Coquimbo",
  "nombre": "1° Juzgado de Policía Local de Coquimbo",
  "direccion": "Aldunate 598, Sector Barrio Inglés, Coquimbo",
  "telefonos": []
 },
 {
  "region": "Coquimbo",
  "comuna": "Coquimbo",
  "nombre": "2° Juzgado de Policía Local de Coquimbo",
  "direccion": "Aldunate 568, Sector Barrio Inglés, Coquimbo",
  "telefonos": []
 },
 {
  "region": "Coquimbo",
  "comuna": "Andacollo",
  "nombre": "Juzgado de Policía Local de Andacollo",
  "direccion": "JT Urmeneta 599, Andacollo",
  "telefonos": []
 },
 {
  "region": "Coquimbo",
  "comuna": "Ovalle",
  "nombre": "Juzgado de Policía Local de Ovalle",
  "direccion": "Gabriela Mistral 50, Ovalle",
  "telefonos": []
 },
 {
  "region": "Coquimbo",
  "comuna": "Punitaqui",
  "nombre": "Juzgado de Policía Local de Punitaqui",
  "direccion": "Caupolicán 1147, Punitaqui",
  "telefonos": []
 },
 {
  "region": "Coquimbo",
  "comuna": "Río Hurtado",
  "nombre": "Juzgado de Policía Local de Río Hurtado",
  "direccion": "JPL, Samo Alto S/N, Río Hurtado",
  "telefonos": []
 },
 {
  "region": "Coquimbo",
  "comuna": "La Higuera",
  "nombre": "Juzgado de Policía Local de La Higuera",
  "direccion": "Avda La Paz 2, esquina Violeta Seura, La Higuera",
  "telefonos": []
 },
 {
  "region": "Coquimbo",
  "comuna": "Monte Patria",
  "nombre": "Juzgado de Policía Local de Monte Patria",
  "direccion": "José Miguel Carrera 168, Monte Patria",
  "telefonos": []
 },
 {
  "region": "Coquimbo",
  "comuna": "Combarbalá",
  "nombre": "Juzgado de Policía Local de Combarbalá",
  "direccion": "Valdivia 340, Combarbalá",
  "telefonos": []
 },
 {
  "region": "Coquimbo",
  "comuna": "Canela",
  "nombre": "Juzgado de Policía Local de Canela",
  "direccion": "Rosario Cortés 715, Canela Baja",
  "telefonos": []
 },
 {
  "region": "Coquimbo",
  "comuna": "Illapel",
  "nombre": "Juzgado de Policía Local de Illapel",
  "direccion": "Constitución 24, Illapel",
  "telefonos": []
 },
 {
  "region": "Coquimbo",
  "comuna": "Salamanca",
  "nombre": "Juzgado de Policía Local de Salamanca",
  "direccion": "Bulnes 599, Salamanca",
  "telefonos": []
 },
 {
  "region": "Coquimbo",
  "comuna": "Los Vilos",
  "nombre": "Juzgado de Policía Local de Los Vilos",
  "direccion": "Lincoyán esquina Galvarino, 2° piso S/N, Los Vilos",
  "telefonos": []
 },
 {
  "region": "Coquimbo",
  "comuna": "Vicuña",
  "nombre": "Juzgado de Policía Local de Vicuña",
  "direccion": "San Martín 275, Vicuña",
  "telefonos": []
 },
 {
  "region": "Coquimbo",
  "comuna": "Paihuano",
  "nombre": "Juzgado de Policía Local de Paihuano",
  "direccion": "Balmaceda S/N, Paihuano",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Viña del Mar",
  "nombre": "1° Juzgado de Policía Local de Viña del Mar",
  "direccion": "Calle Quillota 152, Viña del Mar",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Viña del Mar",
  "nombre": "2° Juzgado de Policía Local de Viña del Mar",
  "direccion": "Cinco Oriente 850, Viña del Mar",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Viña del Mar",
  "nombre": "3° Juzgado de Policía Local de Viña del Mar",
  "direccion": "Segundo piso Terminal Rodoviario, Viña del Mar",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Valparaíso",
  "nombre": "1° Juzgado de Policía Local de Valparaíso",
  "direccion": "Serrano 580, Edificio La Nave, 3° piso, Valparaíso",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Valparaíso",
  "nombre": "2° Juzgado de Policía Local de Valparaíso",
  "direccion": "Serrano 580, Edificio La Nave, 2° piso, Valparaíso",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Valparaíso",
  "nombre": "3° Juzgado de Policía Local de Valparaíso",
  "direccion": "Serrano 580, Edificio La Nave, 2° piso, Valparaíso",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "San Antonio",
  "nombre": "1° Juzgado de Policía Local de San Antonio",
  "direccion": "Av. Ramón Barros Luco 1881, San Antonio",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "San Antonio",
  "nombre": "2° Juzgado de Policía Local de San Antonio",
  "direccion": "Av. Ramón Barros Luco 1881, San Antonio",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Quilpué",
  "nombre": "Juzgado de Policía Local de Quilpué",
  "direccion": "Vicuña Mackenna 818, Quilpué",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Limache",
  "nombre": "Juzgado de Policía Local de Limache",
  "direccion": "Avenida República 371, Limache",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Olmué",
  "nombre": "Juzgado de Policía Local de Olmué",
  "direccion": "Calle Prat 12, Olmué",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Quillota",
  "nombre": "Juzgado de Policía Local de Quillota",
  "direccion": "Bernardo O'Higgins 322, Quillota",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "La Cruz",
  "nombre": "Juzgado de Policía Local de La Cruz",
  "direccion": "Gabriela Mistral 3, La Cruz",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Quintero",
  "nombre": "Juzgado de Policía Local de Quintero",
  "direccion": "Piloto Alcayaga 1830, Quintero",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Puchuncaví",
  "nombre": "Juzgado de Policía Local de Puchuncaví",
  "direccion": "Bernardo O'Higgins 70, Puchuncaví",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Villa Alemana",
  "nombre": "Juzgado de Policía Local de Villa Alemana",
  "direccion": "Santiago 386, Villa Alemana",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "La Calera",
  "nombre": "Juzgado de Policía Local de La Calera",
  "direccion": "Calle Prat 555, La Calera",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Nogales",
  "nombre": "Juzgado de Policía Local de Nogales",
  "direccion": "Pedro F Vicuña 199, Nogales",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Hijuelas",
  "nombre": "Juzgado de Policía Local de Hijuelas",
  "direccion": "Manuel Rodríguez S/N, Hijuelas",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "La Ligua",
  "nombre": "Juzgado de Policía Local de La Ligua",
  "direccion": "Portales 555, La Ligua",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Cabildo",
  "nombre": "Juzgado de Policía Local de Cabildo",
  "direccion": "Humeres 400, Cabildo",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Papudo",
  "nombre": "Juzgado de Policía Local de Papudo",
  "direccion": "Irarrázabal S/N, Papudo",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Zapallar",
  "nombre": "Juzgado de Policía Local de Zapallar",
  "direccion": "Calle B Villar S/N, Zapallar",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "San Felipe",
  "nombre": "Juzgado de Policía Local de San Felipe",
  "direccion": "Salinas 203, San Felipe",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Santa María",
  "nombre": "Juzgado de Policía Local de Santa María",
  "direccion": "Irarrázabal 140, Santa María",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Catemu",
  "nombre": "Juzgado de Policía Local de Catemu",
  "direccion": "García Huidobro S/N, Catemu",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Panquehue",
  "nombre": "Juzgado de Policía Local de Panquehue",
  "direccion": "Ruta 60 CH Troncal n 1166, Panquehue",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Putaendo",
  "nombre": "Juzgado de Policía Local de Putaendo",
  "direccion": "Prat Oriente 1, Putaendo",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Los Andes",
  "nombre": "Juzgado de Policía Local de Los Andes",
  "direccion": "Esmeralda 536, Los Andes",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Calle Larga",
  "nombre": "Juzgado de Policía Local de Calle Larga",
  "direccion": "La Pampilla Ruta 57 S/N, Calle Larga",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Rinconada",
  "nombre": "Juzgado de Policía Local de Rinconada",
  "direccion": "Carretera San Martín S/N, Rinconada",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "San Esteban",
  "nombre": "Juzgado de Policía Local de San Esteban",
  "direccion": "Avenida 26 de Diciembre 654, San Esteban",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Llay Llay",
  "nombre": "Juzgado de Policía Local de Llay Llay",
  "direccion": "Balmaceda 174, Llay Llay",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Isla de Pascua",
  "nombre": "Juzgado de Policía Local de Isla de Pascua",
  "direccion": "Te Pito o te Henua S/N, Hanga Roa, Isla de Pascua",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Isla de Juan Fernández",
  "nombre": "Juzgado de Policía Local de Isla de Juan Fernández",
  "direccion": "Larraín Alcalde 320, Isla de Juan Fernández",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Cartagena",
  "nombre": "Juzgado de Policía Local de Cartagena",
  "direccion": "Avenida Casanova 266, Cartagena",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Algarrobo",
  "nombre": "Juzgado de Policía Local de Algarrobo",
  "direccion": "Avenida Peñablanca 250, Algarrobo",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "El Tabo",
  "nombre": "Juzgado de Policía Local de El Tabo",
  "direccion": "Avenida Las Cruces Norte 401, El Tabo",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "El Quisco",
  "nombre": "Juzgado de Policía Local de El Quisco",
  "direccion": "Avenida Francia 011, El Quisco",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Concón",
  "nombre": "Juzgado de Policía Local de Concón",
  "direccion": "Avenida Maroto S/N, Concón",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Casablanca",
  "nombre": "Juzgado de Policía Local de Casablanca",
  "direccion": "Constitución 255, Casablanca",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Santo Domingo",
  "nombre": "Juzgado de Policía Local de Santo Domingo",
  "direccion": "Plaza Cabildo S/N, Santo Domingo",
  "telefonos": []
 },
 {
  "region": "Valparaíso",
  "comuna": "Petorca",
  "nombre": "Juzgado de Policía Local de Petorca",
  "direccion": "Cuartel 225, Petorca",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Buin",
  "nombre": "Juzgado de Policía Local de Buin",
  "direccion": "Sargento Aldea 619, Buin",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Colina",
  "nombre": "Juzgado de Policía Local de Colina",
  "direccion": "Avenida Colina 700",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Conchalí",
  "nombre": "Juzgado de Policía Local de Conchalí",
  "direccion": "Avenida Dorsal 1904, Conchalí",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Curacaví",
  "nombre": "Juzgado de Policía Local de Curacaví",
  "direccion": "Presbítero Moraga 185, Curacaví",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Maipú",
  "nombre": "1° Juzgado de Policía Local de Maipú",
  "direccion": "1ª Transversal 1970, Maipú",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Maipú",
  "nombre": "2° Juzgado de Policía Local de Maipú",
  "direccion": "1ª Transversal 1970, Maipú",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Maipú",
  "nombre": "3° Juzgado de Policía Local de Maipú",
  "direccion": "General Ordoñez 176, Maipú",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "El Bosque",
  "nombre": "Juzgado de Policía Local de El Bosque",
  "direccion": "Domingo Gómez 0342, El Bosque",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Estación Central",
  "nombre": "1° Juzgado de Policía Local de Estación Central",
  "direccion": "Avenida Ecuador 3412, Estación Central",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Estación Central",
  "nombre": "2° Juzgado de Policía Local de Estación Central",
  "direccion": "Avenida Ecuador 3412, Estación Central",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Huechuraba",
  "nombre": "Juzgado de Policía Local de Huechuraba",
  "direccion": "Avenida Recoleta 5640, Huechuraba",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Independencia",
  "nombre": "Juzgado de Policía Local de Independencia",
  "direccion": "Sevilla 1434, Independencia",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "La Cisterna",
  "nombre": "Juzgado de Policía Local de La Cisterna",
  "direccion": "Angamos 6338, La Cisterna",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "La Granja",
  "nombre": "Juzgado de Policía Local de La Granja",
  "direccion": "Combarbalá 0560, La Granja",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "La Pintana",
  "nombre": "Juzgado de Policía Local de La Pintana",
  "direccion": "Baldomero Lillo 1723, La Pintana",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "La Reina",
  "nombre": "Juzgado de Policía Local de La Reina",
  "direccion": "Avenida Larraín 8580, La Reina",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Lo Barnechea",
  "nombre": "Juzgado de Policía Local de Lo Barnechea",
  "direccion": "El Rodeo 12777, Lo Barnechea",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Lo Espejo",
  "nombre": "1° Juzgado de Policía Local de Lo Espejo",
  "direccion": "Centenario 02745, Lo Espejo",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Lo Espejo",
  "nombre": "2° Juzgado de Policía Local de Lo Espejo",
  "direccion": "Centenario 02745, Lo Espejo",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Lo Prado",
  "nombre": "Juzgado de Policía Local de Lo Prado",
  "direccion": "San Pablo 5959, Lo Prado",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Macul",
  "nombre": "Juzgado de Policía Local de Macul",
  "direccion": "Gregorio de la Fuente Rojas 3214, Macul",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Paine",
  "nombre": "Juzgado de Policía Local de Paine",
  "direccion": "Maipo 552, Paine",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Pedro Aguirre Cerda",
  "nombre": "Juzgado de Policía Local de Pedro Aguirre Cerda",
  "direccion": "Ángel Guarello 1720, Pedro Aguirre Cerda",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Peñalolén",
  "nombre": "Juzgado de Policía Local de Peñalolén",
  "direccion": "Avenida Oriental 6958, Peñalolén",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Pirque",
  "nombre": "Juzgado de Policía Local de Pirque",
  "direccion": "Pasaje Ramón Subercaseaux 90, Pirque",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Pudahuel",
  "nombre": "1° Juzgado de Policía Local de Pudahuel",
  "direccion": "Teniente Cruz 762, Pudahuel",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Pudahuel",
  "nombre": "2° Juzgado de Policía Local de Pudahuel",
  "direccion": "Teniente Cruz 762, Pudahuel",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Puente Alto",
  "nombre": "1° Juzgado de Policía Local de Puente Alto",
  "direccion": "Avenida Concha y Toro 1820, Puente Alto",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Puente Alto",
  "nombre": "2° Juzgado de Policía Local de Puente Alto",
  "direccion": "Avenida Concha y Toro 1820, Puente Alto",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Quilicura",
  "nombre": "Juzgado de Policía Local de Quilicura",
  "direccion": "Francisco Vergara 300, Quilicura",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Quinta Normal",
  "nombre": "Juzgado de Policía Local de Quinta Normal",
  "direccion": "Carrascal 4447, Quinta Normal",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Recoleta",
  "nombre": "1° Juzgado de Policía Local de Recoleta",
  "direccion": "Avenida Recoleta 2774 piso 2",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Recoleta",
  "nombre": "2° Juzgado de Policía Local de Recoleta",
  "direccion": "Avenida Recoleta 2774 piso 3",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Renca",
  "nombre": "Juzgado de Policía Local de Renca",
  "direccion": "Domingo Santa María 4029, Renca",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "San Bernardo",
  "nombre": "1° Juzgado de Policía Local de San Bernardo",
  "direccion": "O'Higgins 810, piso 1, San Bernardo",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "San Bernardo",
  "nombre": "2° Juzgado de Policía Local de San Bernardo",
  "direccion": "O'Higgins 810, piso 2, San Bernardo",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "San Joaquín",
  "nombre": "Juzgado de Policía Local de San Joaquín",
  "direccion": "Avenida Santa Rosa 2660, San Joaquín",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "San José de Maipo",
  "nombre": "Juzgado de Policía Local de San José de Maipo",
  "direccion": "Camino El Volcán 19775, San José de Maipo",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "San Miguel",
  "nombre": "1° Juzgado de Policía Local de San Miguel",
  "direccion": "Gran Avenida General José Miguel Carrera 3418, San Miguel",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "San Miguel",
  "nombre": "2° Juzgado de Policía Local de San Miguel",
  "direccion": "Llano Subercaseaux 3791, San Miguel",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "San Ramón",
  "nombre": "Juzgado de Policía Local de San Ramón",
  "direccion": "Avenida Santa Rosa 8171, Oficina 201, San Ramón",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "El Monte",
  "nombre": "Juzgado de Policía Local de El Monte",
  "direccion": "Plaza Independencia 80 Local G Galeria El Angel, El Monte",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Melipilla",
  "nombre": "Juzgado de Policía Local de Melipilla",
  "direccion": "Arturo Prat 9226, Melipilla",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Talagante",
  "nombre": "Juzgado de Policía Local de Talagante",
  "direccion": "Avenida Veintiuno de Mayo 875, Talagante",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Vitacura",
  "nombre": "1° Juzgado de Policía Local de Vitacura",
  "direccion": "Avenida Bicentenario 3800, Vitacura",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Vitacura",
  "nombre": "2° Juzgado de Policía Local de Vitacura",
  "direccion": "Avenida Bicentenario 3800, Vitacura",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "La Florida",
  "nombre": "1° Juzgado de Policía Local de La Florida",
  "direccion": "Vicuña Mackenna 6480, La Florida",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "La Florida",
  "nombre": "2° Juzgado de Policía Local de La Florida",
  "direccion": "Vicuña Mackenna 8310, La Florida",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "La Florida",
  "nombre": "3° Juzgado de Policía Local de La Florida",
  "direccion": "Oscar Boehme 7446, La Florida",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Las Condes",
  "nombre": "1° Juzgado de Policía Local de Las Condes",
  "direccion": "Apoquindo 3800 piso 1, Las Condes",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Las Condes",
  "nombre": "2° Juzgado de Policía Local de Las Condes",
  "direccion": "Apoquindo 3800 piso 2, Las Condes",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Las Condes",
  "nombre": "3° Juzgado de Policía Local de Las Condes",
  "direccion": "Apoquindo 3800 piso 3, Las Condes",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Ñuñoa",
  "nombre": "1° Juzgado de Policía Local de Ñuñoa",
  "direccion": "Avenida Irarrázaval 2434, piso 4, Ñuñoa",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Ñuñoa",
  "nombre": "2° Juzgado de Policía Local de Ñuñoa",
  "direccion": "Avenida Irarrázaval 2434, piso 4, Ñuñoa",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Providencia",
  "nombre": "1° Juzgado de Policía Local de Providencia",
  "direccion": "Avenida Pedro de Valdivia 706, piso 1, Providencia",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Providencia",
  "nombre": "2° Juzgado de Policía Local de Providencia",
  "direccion": "Avenida Pedro de Valdivia 706, piso 2, Providencia",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Providencia",
  "nombre": "3° Juzgado de Policía Local de Providencia",
  "direccion": "Eliodoro Yañez 1687, Providencia",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Santiago",
  "nombre": "1° Juzgado de Policía Local de Santiago",
  "direccion": "Amunátegui 980, piso 1, Santiago",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Santiago",
  "nombre": "2° Juzgado de Policía Local de Santiago",
  "direccion": "Amunátegui 980, piso 2, Santiago",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Santiago",
  "nombre": "3° Juzgado de Policía Local de Santiago",
  "direccion": "Amunátegui 980, piso 2, Santiago",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Santiago",
  "nombre": "4° Juzgado de Policía Local de Santiago",
  "direccion": "Amunátegui 980, piso 3, Santiago",
  "telefonos": []
 },
 {
  "region": "Metropolitana",
  "comuna": "Santiago",
  "nombre": "5° Juzgado de Policía Local de Santiago",
  "direccion": "Amunátegui 980, piso 3, Santiago",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Rancagua",
  "nombre": "1° Juzgado de Policía Local de Rancagua",
  "direccion": "Chorrillos 800, Rancagua",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Rancagua",
  "nombre": "2° Juzgado de Policía Local de Rancagua",
  "direccion": "Chorrillos 800, Rancagua",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Doñihue",
  "nombre": "Juzgado de Policía Local de Doñihue",
  "direccion": "Avenida Estación 344, Doñihue",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Graneros",
  "nombre": "Juzgado de Policía Local de Graneros",
  "direccion": "Plaza de Armas S/N, Graneros",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "San Francisco de Mostazal",
  "nombre": "Juzgado de Policía Local de San Francisco de Mostazal",
  "direccion": "Calle Santa Julia 279, San Francisco de Mostazal",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Codegua",
  "nombre": "Juzgado de Policía Local de Codegua",
  "direccion": "Avda. Bernardo O'Higgins 376, Codegua",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Machalí",
  "nombre": "Juzgado de Policía Local de Machalí",
  "direccion": "Plaza de Armas 11, Machalí",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Rengo",
  "nombre": "Juzgado de Policía Local de Rengo",
  "direccion": "Urriola 50, Rengo",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Requínoa",
  "nombre": "Juzgado de Policía Local de Requínoa",
  "direccion": "Avenida Comercio 121, Requínoa",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Coinco",
  "nombre": "Juzgado de Policía Local de Coinco",
  "direccion": "Plaza Los Héroes 3, Coinco",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Tilcoco",
  "nombre": "Juzgado de Policía Local de Tilcoco",
  "direccion": "Manuel Flores 50, Tilcoco",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Malloa",
  "nombre": "Juzgado de Policía Local de Malloa",
  "direccion": "Bernardo O'Higgins 525, Malloa",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Olivar",
  "nombre": "Juzgado de Policía Local de Olivar",
  "direccion": "Plaza Esmeralda S/N, Olivar",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Peumo",
  "nombre": "Juzgado de Policía Local de Peumo",
  "direccion": "Carmen 33, Peumo",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Las Cabras",
  "nombre": "Juzgado de Policía Local de Las Cabras",
  "direccion": "Carrera 355, Las Cabras",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Coltauco",
  "nombre": "Juzgado de Policía Local de Coltauco",
  "direccion": "Arturo Prat 66, Coltauco",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "San Vicente",
  "nombre": "Juzgado de Policía Local de San Vicente",
  "direccion": "Arturo Prat S/N, San Vicente",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Pichidegua",
  "nombre": "Juzgado de Policía Local de Pichidegua",
  "direccion": "Independencia 525, Pichidegua",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "San Fernando",
  "nombre": "Juzgado de Policía Local de San Fernando",
  "direccion": "Calle Carampangue 865, San Fernando",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Chimbarongo",
  "nombre": "Juzgado de Policía Local de Chimbarongo",
  "direccion": "Javiera Carrera 51, Chimbarongo",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Nancagua",
  "nombre": "Juzgado de Policía Local de Nancagua",
  "direccion": "Avenida Armando Jaramillo 99, Nancagua",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Placilla",
  "nombre": "Juzgado de Policía Local de Placilla",
  "direccion": "Calle Oscar Gajardo 94, Placilla",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Santa Cruz",
  "nombre": "Juzgado de Policía Local de Santa Cruz",
  "direccion": "Plaza de Armas 242, Santa Cruz",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Chepica",
  "nombre": "Juzgado de Policía Local de Chepica",
  "direccion": "Manuel Montt 101, Chepica",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Peralillo",
  "nombre": "Juzgado de Policía Local de Peralillo",
  "direccion": "Bernardo O'Higgins 237, Peralillo",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Pumanque",
  "nombre": "Juzgado de Policía Local de Pumanque",
  "direccion": "Antonio Barahona 120, Pumanque",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Palmilla",
  "nombre": "Juzgado de Policía Local de Palmilla",
  "direccion": "Juan Guillermo Day 47, Palmilla",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Lolol",
  "nombre": "Juzgado de Policía Local de Lolol",
  "direccion": "Los Aromos 155, Lolol",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Pichilemu",
  "nombre": "Juzgado de Policía Local de Pichilemu",
  "direccion": "Ángel Gaete 365, Pichilemu",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Marchigue",
  "nombre": "Juzgado de Policía Local de Marchigue",
  "direccion": "Libertad 490, Marchigue",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "La Estrella",
  "nombre": "Juzgado de Policía Local de La Estrella",
  "direccion": "Diego Portales S/N, La Estrella",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Litueche",
  "nombre": "Juzgado de Policía Local de Litueche",
  "direccion": "Calle Larraín 1008, Litueche",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Navidad",
  "nombre": "Juzgado de Policía Local de Navidad",
  "direccion": "Juan Montes S/N, Navidad",
  "telefonos": []
 },
 {
  "region": "O'Higgins",
  "comuna": "Paredones",
  "nombre": "Juzgado de Policía Local de Paredones",
  "direccion": "Doctor Moore S/N, Paredones",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Curicó",
  "nombre": "1° Juzgado de Policía Local de Curicó",
  "direccion": "Membrillar 443, Curicó",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Curicó",
  "nombre": "2° Juzgado de Policía Local de Curicó",
  "direccion": "Membrillar 431, Curicó",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Hualañé",
  "nombre": "Juzgado de Policía Local de Hualañé",
  "direccion": "Ignacio Carrera Pinto S/N, Hualañé",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Licantén",
  "nombre": "Juzgado de Policía Local de Licantén",
  "direccion": "Alejandro Rojas S/N, Licantén",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Teno",
  "nombre": "Juzgado de Policía Local de Teno",
  "direccion": "Arturo Prat 298, Teno",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Río Claro",
  "nombre": "Juzgado de Policía Local de Río Claro",
  "direccion": "Casimiro Sepulveda 1 primer piso Cumpeo, Río Claro",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Retiro",
  "nombre": "Juzgado de Policía Local de Retiro",
  "direccion": "Avenida Errázuriz 462, Retiro",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Pencahue",
  "nombre": "Juzgado de Policía Local de Pencahue",
  "direccion": "Alejandro Cruz Vergara 891, Pencahue",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Romeral",
  "nombre": "Juzgado de Policía Local de Romeral",
  "direccion": "Ignacio Carrera Pinto 1239, Romeral",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Molina",
  "nombre": "Juzgado de Policía Local de Molina",
  "direccion": "Avenida Quechereguas 1647 (Galería Quechereguas), Molina",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Sagrada Familia",
  "nombre": "Juzgado de Policía Local de Sagrada Familia",
  "direccion": "Avenida Esperanza S/N, Sagrada Familia",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Linares",
  "nombre": "Juzgado de Policía Local de Linares",
  "direccion": "Maipú 461, oficina 201. Edificio Salman, Linares",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Yerbas Buenas",
  "nombre": "Juzgado de Policía Local de Yerbas Buenas",
  "direccion": "Avenida Centenario 101, Yerbas Buenas",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Colbún",
  "nombre": "Juzgado de Policía Local de Colbún",
  "direccion": "Avenida Adolfo Novoa 419, Colbún",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Longaví",
  "nombre": "Juzgado de Policía Local de Longaví",
  "direccion": "Calle 2 Oriente 106, Longaví",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Curepto",
  "nombre": "Juzgado de Policía Local de Curepto",
  "direccion": "Calle Plaza de Armas S/N, Curepto",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Chanco",
  "nombre": "Juzgado de Policía Local de Chanco",
  "direccion": "Ignacio Carrera Pinto 291, Chanco",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Rauco",
  "nombre": "Juzgado de Policía Local de Rauco",
  "direccion": "Balmaceda 35, Rauco",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Parral",
  "nombre": "Juzgado de Policía Local de Parral",
  "direccion": "Calle Matucana 725, Parral",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Cauquenes",
  "nombre": "Juzgado de Policía Local de Cauquenes",
  "direccion": "Avenida Claudina Urrutia 600, Cauquenes",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "San Javier",
  "nombre": "Juzgado de Policía Local de San Javier",
  "direccion": "Arturo Prat 2412, segundo piso, San Javier",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Villa Alegre",
  "nombre": "Juzgado de Policía Local de Villa Alegre",
  "direccion": "Calle 12 de Octubre 658, Villa Alegre",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "San Clemente",
  "nombre": "Juzgado de Policía Local de San Clemente",
  "direccion": "Calle Carlos Silva Renard S/N, San Clemente",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Constitución",
  "nombre": "Juzgado de Policía Local de Constitución",
  "direccion": "Freire S/N esquina Montt. Edificio de Correos, Constitución",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "San Rafael",
  "nombre": "Juzgado de Policía Local de San Rafael",
  "direccion": "Calle Arturo Prat 2705, San Rafael",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Vichuquén",
  "nombre": "Juzgado de Policía Local de Vichuquén",
  "direccion": "Arturo Prat S/N, Vichuquén",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Empedrado",
  "nombre": "Juzgado de Policía Local de Empedrado",
  "direccion": "General Bueras esquina Manuel Montt 395 B, Empedrado",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Talca",
  "nombre": "1° Juzgado de Policía Local de Talca",
  "direccion": "Calle Cuatro Norte 1154, 3° piso (Edificio Alameda Office), Talca",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Talca",
  "nombre": "2° Juzgado de Policía Local de Talca",
  "direccion": "Calle 1 Poniente 1133, Talca",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Talca",
  "nombre": "3° Juzgado de Policía Local de Talca",
  "direccion": "Calle 6 Norte 874, Talca",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Maule",
  "nombre": "Juzgado de Policía Local de Maule",
  "direccion": "Freire S/N, Maule",
  "telefonos": []
 },
 {
  "region": "Maule",
  "comuna": "Pelarco",
  "nombre": "Juzgado de Policía Local de Pelarco",
  "direccion": "Catedral 50, Pelarco",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "San Gregorio",
  "nombre": "Juzgado de Policía Local de San Gregorio",
  "direccion": "Estado S/N, San Gregorio",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Talcahuano",
  "nombre": "1° Juzgado de Policía Local de Talcahuano",
  "direccion": "Aníbal Pinto 222, piso 2, Talcahuano",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Talcahuano",
  "nombre": "2° Juzgado de Policía Local de Talcahuano",
  "direccion": "Aníbal Pinto 222, piso 2, Talcahuano",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Tomé",
  "nombre": "Juzgado de Policía Local de Tomé",
  "direccion": "Ignacio Serrano 1061, segundo piso, Tomé",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Penco",
  "nombre": "Juzgado de Policía Local de Penco",
  "direccion": "Freire 510, Penco",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Florida",
  "nombre": "Juzgado de Policía Local de Florida",
  "direccion": "Ignacio Serrano 500, Florida",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Los Ángeles",
  "nombre": "1° Juzgado de Policía Local de Los Ángeles",
  "direccion": "Valdivia 123, tercer piso, Los Ángeles",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Los Ángeles",
  "nombre": "2° Juzgado de Policía Local de Los Ángeles",
  "direccion": "Valdivia 123, tercer piso, Los Ángeles",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Mulchén",
  "nombre": "Juzgado de Policía Local de Mulchén",
  "direccion": "Villagra 025, Mulchén",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Quilaco",
  "nombre": "Juzgado de Policía Local de Quilaco",
  "direccion": "Córdova 46, Quilaco",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Nacimiento",
  "nombre": "Juzgado de Policía Local de Nacimiento",
  "direccion": "Freire 641, Nacimiento",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Negrete",
  "nombre": "Juzgado de Policía Local de Negrete",
  "direccion": "Alberto Moller S/N, Negrete",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Santa Bárbara",
  "nombre": "Juzgado de Policía Local de Santa Bárbara",
  "direccion": "Las Rozas 160, Santa Bárbara",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Antuco",
  "nombre": "Juzgado de Policía Local de Antuco",
  "direccion": "Calixto Padilla S/N, Antuco",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Huepil",
  "nombre": "Juzgado de Policía Local de Huepil",
  "direccion": "Diego Portales 258, Huepil",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Quilleco",
  "nombre": "Juzgado de Policía Local de Quilleco",
  "direccion": "José Miguel Carrera 460, Quilleco",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Yumbel",
  "nombre": "Juzgado de Policía Local de Yumbel",
  "direccion": "B. O'Higgins 851, Yumbel",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Laja",
  "nombre": "Juzgado de Policía Local de Laja",
  "direccion": "Balmaceda 270, Laja",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Cabrero",
  "nombre": "Juzgado de Policía Local de Cabrero",
  "direccion": "Avenida Vial 150, Cabrero",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "San Rosendo",
  "nombre": "Juzgado de Policía Local de San Rosendo",
  "direccion": "Ibieta 225, San Rosendo",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Arauco",
  "nombre": "Juzgado de Policía Local de Arauco",
  "direccion": "Calle Esmeralda 411, esquina Serrano, Arauco",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Lebu",
  "nombre": "Juzgado de Policía Local de Lebu",
  "direccion": "Calle Saavedra 699, Lebu",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Los Álamos",
  "nombre": "Juzgado de Policía Local de Los Álamos",
  "direccion": "Avda. Ignacio Carrera Pinto 555, Los Álamos",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Cañete",
  "nombre": "Juzgado de Policía Local de Cañete",
  "direccion": "Calle 2 de Línea esquina Uribe, Cañete",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Contulmo",
  "nombre": "Juzgado de Policía Local de Contulmo",
  "direccion": "Calle Los Notros esquina Nahuelbuta, Contulmo",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Tirúa",
  "nombre": "Juzgado de Policía Local de Tirúa",
  "direccion": "Avda. Costanera S/N, Tirúa",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Chiguayante",
  "nombre": "Juzgado de Policía Local de Chiguayante",
  "direccion": "Orozimbo Barboza 130, Parque Los Castaños, Chiguayante",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Concepción",
  "nombre": "1° Juzgado de Policía Local de Concepción",
  "direccion": "Trinitarias 180, primer piso, Concepción",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Concepción",
  "nombre": "2° Juzgado de Policía Local de Concepción",
  "direccion": "Trinitarias 180, segundo piso, Concepción",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Concepción",
  "nombre": "3° Juzgado de Policía Local de Concepción",
  "direccion": "Trinitarias 189, Concepción",
  "telefonos": []
 },
 {
  "region": "Biobío",
  "comuna": "Curanilahue",
  "nombre": "Juzgado de Policía Local de Curanilahue",
  "direccion": "Calle Cardenio Avello S/N, Curanilahue",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "San Carlos",
  "nombre": "Juzgado de Policía Local de San Carlos",
  "direccion": "Maipú 694, segundo piso, San Carlos",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "San Fabián de Alico",
  "nombre": "Juzgado de Policía Local de San Fabián de Alico",
  "direccion": "21 de Mayo esquina 18 de Septiembre, San Fabián de Alico",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "Chillán",
  "nombre": "1° Juzgado de Policía Local de Chillán",
  "direccion": "Avenida Ecuador 395, Chillán",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "Chillán",
  "nombre": "2° Juzgado de Policía Local de Chillán",
  "direccion": "Avenida Ecuador 395, Chillán",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "Bulnes",
  "nombre": "Juzgado de Policía Local de Bulnes",
  "direccion": "Víctor Bianchi esquina Manuel Bulnes",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "San Ignacio",
  "nombre": "Juzgado de Policía Local de San Ignacio",
  "direccion": "Avenida Manuel Rodríguez 696, San Ignacio",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "Yungay",
  "nombre": "Juzgado de Policía Local de Yungay",
  "direccion": "Arturo Prat 357, Yungay",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "Pemuco",
  "nombre": "Juzgado de Policía Local de Pemuco",
  "direccion": "San Martín 498, Pemuco",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "Coelemu",
  "nombre": "Juzgado de Policía Local de Coelemu",
  "direccion": "Pedro León Gallo 609, Coelemu",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "Portezuelo",
  "nombre": "Juzgado de Policía Local de Portezuelo",
  "direccion": "Bernardo O'Higgins 403, Portezuelo",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "Chillán Viejo",
  "nombre": "Juzgado de Policía Local de Chillán Viejo",
  "direccion": "Ignacio Serrano 390, Chillán Viejo",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "Pinto",
  "nombre": "Juzgado de Policía Local de Pinto",
  "direccion": "Eleuterio Riquelme S/N, Pinto",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "Quillón",
  "nombre": "Juzgado de Policía Local de Quillón",
  "direccion": "El Roble 299, segundo piso, Quillón",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "El Carmen",
  "nombre": "Juzgado de Policía Local de El Carmen",
  "direccion": "Baquedano 585, El Carmen",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "Quirihue",
  "nombre": "Juzgado de Policía Local de Quirihue",
  "direccion": "Esmeralda S/N, Quirihue",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "Ránquil",
  "nombre": "Juzgado de Policía Local de Ránquil",
  "direccion": "Nicasio Alarcón esquina María Castelló, Ránquil",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "Cobquecura",
  "nombre": "Juzgado de Policía Local de Cobquecura",
  "direccion": "Independencia S/N, Cobquecura",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "Treguaco",
  "nombre": "Juzgado de Policía Local de Treguaco",
  "direccion": "Gonzalo Urrejola 460, Treguaco",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "Ninhue",
  "nombre": "Juzgado de Policía Local de Ninhue",
  "direccion": "Arturo Prat 410, Ninhue",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "Coihueco",
  "nombre": "Juzgado de Policía Local de Coihueco",
  "direccion": "Edificios Públicos, lado poniente, I. Municipalidad de Coihueco",
  "telefonos": []
 },
 {
  "region": "Ñuble",
  "comuna": "San Nicolás",
  "nombre": "Juzgado de Policía Local de San Nicolás",
  "direccion": "Arturo Prat S/N, San Nicolás",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Galvarino",
  "nombre": "Juzgado de Policía Local de Galvarino",
  "direccion": "Ramón Freire 424, Galvarino",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Lautaro",
  "nombre": "Juzgado de Policía Local de Lautaro",
  "direccion": "O'Higgins 1032, Lautaro",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Temuco",
  "nombre": "Juzgado de Policía Local de Temuco",
  "direccion": "Antonio Varas 631, Temuco",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Cunco",
  "nombre": "Juzgado de Policía Local de Cunco",
  "direccion": "Pedro Aguirre Cerda 580, Cunco",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Vilcún",
  "nombre": "Juzgado de Policía Local de Vilcún",
  "direccion": "Lord Cochrane 285, Vilcún",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Milipeuco",
  "nombre": "Juzgado de Policía Local de Milipeuco",
  "direccion": "Pedro Aguirre Cerda 014, Milipeuco",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Nueva Imperial",
  "nombre": "Juzgado de Policía Local de Nueva Imperial",
  "direccion": "Arturo Prat 36, Nueva Imperial",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Carahue",
  "nombre": "Juzgado de Policía Local de Carahue",
  "direccion": "Portales esquina Villagrá, Carahue",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Teodoro Schmidt",
  "nombre": "Juzgado de Policía Local de Teodoro Schmidt",
  "direccion": "José Manuel Balmaceda 410, Teodoro Schmidt",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Pitrufquén",
  "nombre": "Juzgado de Policía Local de Pitrufquén",
  "direccion": "Francisco Bilbao 523, segundo piso, Pitrufquén",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Freire",
  "nombre": "Juzgado de Policía Local de Freire",
  "direccion": "Pedro Camalez 85, Freire",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Toltén",
  "nombre": "Juzgado de Policía Local de Toltén",
  "direccion": "Caupolicán 445, Toltén",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Gorbea",
  "nombre": "Juzgado de Policía Local de Gorbea",
  "direccion": "Ramón Freire 590, Gorbea",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Loncoche",
  "nombre": "Juzgado de Policía Local de Loncoche",
  "direccion": "Arturo Prat 590 segundo piso, Loncoche",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Villarrica",
  "nombre": "Juzgado de Policía Local de Villarrica",
  "direccion": "Camilo Henríquez 483 segundo piso, Villarrica",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Pucón",
  "nombre": "Juzgado de Policía Local de Pucón",
  "direccion": "Arauco 370, Pucón",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Angol",
  "nombre": "Juzgado de Policía Local de Angol",
  "direccion": "Chorrillos 470, Angol",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Los Sauces",
  "nombre": "Juzgado de Policía Local de Los Sauces",
  "direccion": "Balmaceda 350, Los Sauces",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Purén",
  "nombre": "Juzgado de Policía Local de Purén",
  "direccion": "Contulmo 902, Purén",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Collipulli",
  "nombre": "Juzgado de Policía Local de Collipulli",
  "direccion": "Avenida Saavedra Sur 1355, Collipulli",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Renaico",
  "nombre": "Juzgado de Policía Local de Renaico",
  "direccion": "Libertad 149, Renaico",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Traiguén",
  "nombre": "Juzgado de Policía Local de Traiguén",
  "direccion": "Santa Cruz 841 interior, Traiguén",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Lumaco",
  "nombre": "Juzgado de Policía Local de Lumaco",
  "direccion": "Arturo Prat 535, Lumaco",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Victoria",
  "nombre": "Juzgado de Policía Local de Victoria",
  "direccion": "Lagos 660, Victoria",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Curacautín",
  "nombre": "Juzgado de Policía Local de Curacautín",
  "direccion": "O'Higgins 796, Curacautín",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Cholchol",
  "nombre": "Juzgado de Policía Local de Cholchol",
  "direccion": "Aldunate 465, Cholchol",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Curarrehue",
  "nombre": "Juzgado de Policía Local de Curarrehue",
  "direccion": "Avenida Estadio 550, Curarrehue",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Padre las Casas",
  "nombre": "Juzgado de Policía Local de Padre las Casas",
  "direccion": "Manquehue 216, Padre las Casas",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Perquenco",
  "nombre": "Juzgado de Policía Local de Perquenco",
  "direccion": "Esmeralda 248-B, Perquenco",
  "telefonos": []
 },
 {
  "region": "La Araucanía",
  "comuna": "Lonquimay",
  "nombre": "Juzgado de Policía Local de Lonquimay",
  "direccion": "Ignacio Carrera Pinto 559, Lonquimay",
  "telefonos": []
 },
 {
  "region": "Los Ríos",
  "comuna": "Valdivia",
  "nombre": "1° Juzgado de Policía Local de Valdivia",
  "direccion": "Yungay 756, Valdivia",
  "telefonos": []
 },
 {
  "region": "Los Ríos",
  "comuna": "Valdivia",
  "nombre": "2° Juzgado de Policía Local de Valdivia",
  "direccion": "Yungay 756 interior, Valdivia",
  "telefonos": []
 },
 {
  "region": "Los Ríos",
  "comuna": "Futrono",
  "nombre": "Juzgado de Policía Local de Futrono",
  "direccion": "Los Carrera S/N, Futrono",
  "telefonos": []
 },
 {
  "region": "Los Ríos",
  "comuna": "La Unión",
  "nombre": "Juzgado de Policía Local de La Unión",
  "direccion": "Arturo Prat 680, La Unión",
  "telefonos": []
 },
 {
  "region": "Los Ríos",
  "comuna": "Lanco",
  "nombre": "Juzgado de Policía Local de Lanco",
  "direccion": "18 esquina condor S/N, Lanco",
  "telefonos": []
 },
 {
  "region": "Los Ríos",
  "comuna": "Los Lagos",
  "nombre": "Juzgado de Policía Local de Los Lagos",
  "direccion": "San Martín 1, Los Lagos",
  "telefonos": []
 },
 {
  "region": "Los Ríos",
  "comuna": "Paillaco",
  "nombre": "Juzgado de Policía Local de Paillaco",
  "direccion": "Arturo Prat 916, Paillaco",
  "telefonos": []
 },
 {
  "region": "Los Ríos",
  "comuna": "Panguipulli",
  "nombre": "Juzgado de Policía Local de Panguipulli",
  "direccion": "Edificios Publicos S/N, Panguipulli",
  "telefonos": []
 },
 {
  "region": "Los Ríos",
  "comuna": "Lago Ranco",
  "nombre": "Juzgado de Policía Local de Lago Ranco",
  "direccion": "Calle Santiago 407, piso 2, Lago Ranco",
  "telefonos": []
 },
 {
  "region": "Los Ríos",
  "comuna": "Río Bueno",
  "nombre": "Juzgado de Policía Local de Río Bueno",
  "direccion": "Comercio 603, Río Bueno",
  "telefonos": []
 },
 {
  "region": "Los Ríos",
  "comuna": "San José de la Mariquina",
  "nombre": "Juzgado de Policía Local de San José de la Mariquina",
  "direccion": "Mariquina 54, San José de la Mariquina",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Osorno",
  "nombre": "1° Juzgado de Policía Local de Osorno",
  "direccion": "Freire 727, Piso 1, Osorno",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Osorno",
  "nombre": "2° Juzgado de Policía Local de Osorno",
  "direccion": "Freire 727, Piso 2, Osorno",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Río Negro",
  "nombre": "Juzgado de Policía Local de Río Negro",
  "direccion": "Mackenna esquina Paul Harris, Río Negro",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Purranque",
  "nombre": "Juzgado de Policía Local de Purranque",
  "direccion": "Pedro Montt 249, Purranque",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Puerto Octay",
  "nombre": "Juzgado de Policía Local de Puerto Octay",
  "direccion": "Esperanza 555, Puerto Octay",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "San Pablo",
  "nombre": "Juzgado de Policía Local de San Pablo",
  "direccion": "Bolivia esquina Cruz, San Pablo",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Puyehue",
  "nombre": "Juzgado de Policía Local de Puyehue",
  "direccion": "Manuel Rodríguez S/N, Entre Lagos, Puyehue",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "San Juan de la Costa",
  "nombre": "Juzgado de Policía Local de San Juan de la Costa",
  "direccion": "Sector Puacho, Ruta U-40 Km 32, San Juan de la Costa",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Puerto Varas",
  "nombre": "Juzgado de Policía Local de Puerto Varas",
  "direccion": "San José 242, Puerto Varas",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Llanquihue",
  "nombre": "Juzgado de Policía Local de Llanquihue",
  "direccion": "Vicente Pérez Rosales esquina Bernardo O'Higgins, Llanquihue",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Frutillar",
  "nombre": "Juzgado de Policía Local de Frutillar",
  "direccion": "Bernardo Phillippi 753, Frutillar",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Fresia",
  "nombre": "Juzgado de Policía Local de Fresia",
  "direccion": "San Francisco 124, Fresia",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Puerto Montt",
  "nombre": "1° Juzgado de Policía Local de Puerto Montt",
  "direccion": "Juan Soler Manfredini con Calle Copiapó, 5to Piso, Puerto Montt",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Puerto Montt",
  "nombre": "2° Juzgado de Policía Local de Puerto Montt",
  "direccion": "Juan Soler Manfredini con Calle Copiapó, 5to Piso, Puerto Montt",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Puerto Montt",
  "nombre": "3° Juzgado de Policía Local de Puerto Montt",
  "direccion": "Juan Soler Manfredini con Calle Copiapó, 5to Piso, Puerto Montt",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Maullín",
  "nombre": "Juzgado de Policía Local de Maullín",
  "direccion": "Gaspar Ríos S/N, Maullín",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Los Muermos",
  "nombre": "Juzgado de Policía Local de Los Muermos",
  "direccion": "Antonio Varas S/N, Los Muermos",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Calbuco",
  "nombre": "Juzgado de Policía Local de Calbuco",
  "direccion": "Federico Errázuriz 210, Calbuco",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Castro",
  "nombre": "Juzgado de Policía Local de Castro",
  "direccion": "Presidente Ibañez 1216, Castro",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Ancud",
  "nombre": "Juzgado de Policía Local de Ancud",
  "direccion": "Baquedano esquina Hualquen 300, Ancud",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Quemchi",
  "nombre": "Juzgado de Policía Local de Quemchi",
  "direccion": "Pedro Montt 400, Quemchi",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Dalcahue",
  "nombre": "Juzgado de Policía Local de Dalcahue",
  "direccion": "O'Higgins 08, Dalcahue",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Quinchao y Curaco de Vélez",
  "nombre": "Juzgado de Policía Local de Quinchao y Curaco de Vélez",
  "direccion": "Amunategui 018, Quinchao",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Chonchi y Puqueldon",
  "nombre": "Juzgado de Policía Local de Chonchi y Puqueldon",
  "direccion": "Sargento Silva Candelaria S/N Edificio Publico Chonchi",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Queilén",
  "nombre": "Juzgado de Policía Local de Queilén",
  "direccion": "Ruben Vargas Pinto 238 dpto B, Queilén",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Quellón",
  "nombre": "Juzgado de Policía Local de Quellón",
  "direccion": "Avenida Juan Ladrigueros Servicentro Shell, Quellón",
  "telefonos": []
 },
 {
  "region": "Los Lagos",
  "comuna": "Chaitén, Futaleufú y Palena",
  "nombre": "Juzgado de Policía Local de Chaitén, Futaleufú y Palena",
  "direccion": "Ignacio Carrera Pinto 349, primer piso, Chaitén",
  "telefonos": []
 },
 {
  "region": "Aysén",
  "comuna": "Coyhaique",
  "nombre": "Juzgado de Policía Local de Coyhaique",
  "direccion": "Cochrane 251, Coyhaique",
  "telefonos": []
 },
 {
  "region": "Aysén",
  "comuna": "Puerto Aysén",
  "nombre": "Juzgado de Policía Local de Puerto Aysén",
  "direccion": "Calle Sargento Aldea 493, Puerto Aysén",
  "telefonos": []
 },
 {
  "region": "Aysén",
  "comuna": "Puerto Cisnes",
  "nombre": "Juzgado de Policía Local de Puerto Cisnes",
  "direccion": "Calle Sotomayor 191, Puerto Cisnes",
  "telefonos": []
 },
 {
  "region": "Aysén",
  "comuna": "Melinka",
  "nombre": "Juzgado de Policía Local de Melinka",
  "direccion": "Calle Aeropuerto S/N, Melinka",
  "telefonos": []
 },
 {
  "region": "Aysén",
  "comuna": "Lago Verde",
  "nombre": "Juzgado de Policía Local de Lago Verde",
  "direccion": "Calle Cacique Blanco S/N, Lago Verde",
  "telefonos": []
 },
 {
  "region": "Aysén",
  "comuna": "Chile Chico",
  "nombre": "Juzgado de Policía Local de Chile Chico",
  "direccion": "Avenida Libertador Bernardo O'Higgins 333, Chile Chico",
  "telefonos": []
 },
 {
  "region": "Aysén",
  "comuna": "Cochrane",
  "nombre": "Juzgado de Policía Local de Cochrane",
  "direccion": "Esmeralda 398, Cochrane",
  "telefonos": []
 },
 {
  "region": "Aysén",
  "comuna": "Puerto Ingeniero Ibáñez",
  "nombre": "Juzgado de Policía Local de Puerto Ingeniero Ibáñez",
  "direccion": "Calle Carlos Soza 161, Puerto Ingeniero Ibáñez",
  "telefonos": []
 },
 {
  "region": "Magallanes",
  "comuna": "Punta Arenas",
  "nombre": "1° Juzgado de Policía Local de Punta Arenas",
  "direccion": "Balmaceda 661, Punta Arenas",
  "telefonos": []
 },
 {
  "region": "Magallanes",
  "comuna": "Punta Arenas",
  "nombre": "2° Juzgado de Policía Local de Punta Arenas",
  "direccion": "Balmaceda 667, Punta Arenas",
  "telefonos": []
 },
 {
  "region": "Magallanes",
  "comuna": "Navarino",
  "nombre": "Juzgado de Policía Local de Navarino",
  "direccion": "Presidente Ibáñez 02, Navarino",
  "telefonos": []
 },
 {
  "region": "Magallanes",
  "comuna": "Puerto Natales",
  "nombre": "Juzgado de Policía Local de Puerto Natales",
  "direccion": "Ignacio Carrera Pinto 365, Puerto Natales",
  "telefonos": []
 },
 {
  "region": "Magallanes",
  "comuna": "Porvenir",
  "nombre": "Juzgado de Policía Local de Porvenir",
  "direccion": "Padre Mariano Zavattaro 402, Porvenir",
  "telefonos": []
 }
];
