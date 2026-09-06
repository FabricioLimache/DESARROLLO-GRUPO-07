
//EJERCICIO 5
// Definición de las transformaciones base indicadas
const duplicar = n => n * 2;
const sumarDiez = n => n + 10;
const cuadrado = n => n ** 2;

/**
 * Función PIPELINE: Crea una tubería de ejecución secuencial.
 * 
 * funcionamiento
 * 1. El operador rest (...transformaciones) recibe múltiples funciones y las agrupa 
 *    automáticamente dentro de un array llamado 'transformaciones'.
 * 2. La función principal retorna una nueva función que espera recibir un 'valorInicial'.
 * 
 * EJECUCIÓN DE TRANSFORMACIONES (.reduce):
 * El método .reduce() recorre el array de funciones una por una, de izquierda a derecha:
 * - El 'acumulador' almacena el valor que va resultando de cada paso. En el primer paso, 
 *   su valor inicial es el número que le pasamos al invocar la operación (ej. el 5).
 * - En cada iteración, 'funcionActual' toma la función que toca en el array y se ejecuta 
 *   pasándole el 'acumulador' actual (ej: funcionActual(acumulador)).
 * - El resultado (return) de esa ejecución se convierte en el nuevo 'acumulador' que viaja 
 *   automáticamente hacia la siguiente función del array hasta terminar toda la cadena.
 */
const pipeline = (...transformaciones) => {
  return function(valorInicial) {
    return transformaciones.reduce((acumulador, funcionActual) => {
      return funcionActual(acumulador);
    }, valorInicial);
  };
};

// Prueba del pipeline solicitado en el enunciado
const operacion = pipeline(
  duplicar,
  sumarDiez,
  cuadrado
);

console.log(operacion(5)); // Resultado esperado: 400

// Segundo pipeline de prueba adicional
const restarCinco = n => n - 5;
const triple = n => n * 3;

const operacionAlternativa = pipeline(
  sumarDiez,
  restarCinco,
  triple
);

console.log(operacionAlternativa(10)); // (10 + 10 - 5) * 3 = 45
