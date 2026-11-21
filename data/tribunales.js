// Directorio de tribunales de la jurisdicción de la Corte de Apelaciones de Iquique.
// Para agregar o corregir un tribunal, edita solo este archivo.
// "verificado": true = dato confirmado en un documento oficial del Poder Judicial.
const TRIBUNALES = [
  {
    nombre: "Corte de Apelaciones de Iquique",
    tipo: "Corte",
    comuna: "Iquique",
    direccion: "Patricio Lynch N° 60, Iquique",
    telefonos: ["+56572738300"],
    correo: "",
    verificado: true
  },
  {
    nombre: "1° Juzgado de Letras de Iquique",
    tipo: "Civil",
    comuna: "Iquique",
    direccion: "Sotomayor S/N, Iquique",
    telefonos: ["+56572738923"],
    correo: "jl1_iquique@pjud.cl",
    verificado: false
  },
  {
    nombre: "2° Juzgado de Letras de Iquique",
    tipo: "Civil",
    comuna: "Iquique",
    direccion: "Sotomayor S/N, Iquique",
    telefonos: ["+56572738971"],
    correo: "jl2_iquique@pjud.cl",
    verificado: false
  },
  {
    nombre: "3° Juzgado de Letras de Iquique",
    tipo: "Civil",
    comuna: "Iquique",
    direccion: "Sotomayor S/N, Iquique",
    telefonos: ["+56572738973"],
    correo: "jl3_iquique@pjud.cl",
    verificado: true // teléfono confirmado por el usuario (21/11/2026)
  },
  {
    nombre: "Juzgado de Letras del Trabajo de Iquique",
    tipo: "Trabajo",
    comuna: "Iquique",
    direccion: "Freddy Taberna S/N, esquina Aspirante Izaza, Iquique",
    telefonos: ["+56572738400"],
    turno: "+56961628128",
    correo: "jlabiquique@pjud.cl",
    verificado: true
  },
  {
    nombre: "Juzgado de Familia de Iquique",
    tipo: "Familia",
    comuna: "Iquique",
    direccion: "Patricio Lynch N° 60, Iquique",
    telefonos: ["+56572738100"],
    correo: "jfiquique@pjud.cl",
    verificado: true
  },
  {
    nombre: "Juzgado de Garantía de Iquique",
    tipo: "Penal",
    comuna: "Iquique",
    direccion: "Patricio Lynch N° 60, Iquique",
    telefonos: ["+56572738000"],
    turno: "+56996792607",
    correo: "jgiquique@pjud.cl",
    verificado: true
  },
  {
    nombre: "Tribunal de Juicio Oral en lo Penal de Iquique",
    tipo: "Penal",
    comuna: "Iquique",
    direccion: "Patricio Lynch N° 60, Iquique",
    telefonos: ["+56996792620", "+56572739099", "+56572737200"], // el primero figura en pjud.cl (21/11/2026)
    correo: "topiquique@pjud.cl",
    verificado: false
  },
  {
    nombre: "Juzgado de Letras de Familia, Garantía y Trabajo de Alto Hospicio",
    tipo: "Mixto",
    comuna: "Alto Hospicio",
    direccion: "Salitrera Iris N° 1045, Alto Hospicio",
    telefonos: ["+56572587400"],
    correo: "jl_altohospicio@pjud.cl",
    verificado: true
  },
  {
    nombre: "Juzgado de Letras y Garantía de Pozo Almonte",
    tipo: "Mixto",
    comuna: "Pozo Almonte",
    direccion: "Libertad N° 678, Pozo Almonte",
    telefonos: ["+56572751221"],
    correo: "jlyg_pozoalmonte@pjud.cl",
    verificado: false
  }
];
