

// creamos la funcion para registrar y validar al participante. tipo se define por defecto como general, asi evitamos errores
function registrarParticipante(nombre, edad, correo, tipo = "general") {
  const edadNum = Number(edad);

  if (!nombre || nombre.trim() === "") {
    throw new Error("El nombre no puede estar vacío.");
  }
  //validamos con isNan que la edad que se ingrese si sea un numero y no texto (isNaN valida que un valor no sea un numero, si es un numero devuelve false, si no es un numero devuelve true)
  if (Number.isNaN(edadNum) || edadNum < 18) {
    throw new Error("La edad debe ser un valor numérico mayor o igual a 18.");
  }
  //!correo valida que el correo tenga un valor asignado, true si esta vacio y false si tiene un valor
  //.trim() elimina los espacos en blanco al inicio y al final de la cadena, si el correo es solo espacios en blanco, trim() lo convierte en una cadena vacia, y al comparar con "" nos aseguramos de que no sea solo espacios en blanco
  if (!correo || correo.trim() === "") {
    throw new Error("El correo no puede estar vacío.");
  }
  if (tipo !== "general" && tipo !== "estudiante") {
    throw new Error("El tipo de participante debe ser 'general' o 'estudiante'.");
  }



  //si tipo es igual a eestudiante(true ?), le asignamos 30 si no(:) le asignamos 50(?: if-else)
  const costo = tipo === "estudiante" ? 30 : 50;

  return {
    nombre,
    edad: edadNum,
    correo,
    tipo,
    costo
  };
}

// creamos el array para almacenar los participantes registrados
const participantes = [];

// Registramos 5 participantes de prueba usando la funcion registrarParticipante y manejando los errores con try-catch 
const entradasPrueba = [
  ["Andrea Pérez", 21, "andrea@email.com", "estudiante"],
  ["Carlos Gómez", 25, "carlos@email.com", "general"],
  ["Lucía Méndez", 19, "lucia@email.com", "estudiante"],
  ["Mateo Silva", 32, "mateo@email.com", "general"],
  ["Valeria Rojas", 20, "valeria@email.com", "estudiante"]
];
//el item del forEach es un array con los datos de cada participante, por eso usamos item[0], item[1], item[2], item[3] para acceder a cada dato y pasarlo a la funcion registrarParticipante
//el catch lanza un error si alguno de los datos no cumple con las validaciones, y el mensaje de error se muestra en la consola
entradasPrueba.forEach(item => {
  try {
    const nuevoParticipante = registrarParticipante(item[0], item[1], item[2], item[3]);
    participantes.push(nuevoParticipante);
  } catch (error) {
    console.error("Error en registro:", error.message);
  }
});
//mostramos los aprticipantes generales
const soloGeneral = participantes.filter(p => p.tipo === "general");
console.log("Participantes generales:", soloGeneral);

// mostramos los particiapnte estudiante generales
const soloEstudiantes = participantes.filter(p => p.tipo === "estudiante");
console.log("Participantes estudiantes:", soloEstudiantes);

// obtenemos los nombres de los estudiantes mediante map()
const nombresEstudiantes = soloEstudiantes.map(p => p.nombre);
console.log("Nombres de estudiantes:", nombresEstudiantes);

// calculamos mediante reduce() el monto total recaudado
const montoTotal = participantes.reduce((acumulador, p) => acumulador + p.costo, 0);
console.log("Monto total recaudado: S/", montoTotal);

// buscamos un participante por correo utilizando find()
const encontrado = participantes.find(p => p.correo === "lucia@email.com");
console.log("Participante encontrado por correo:", encontrado);
