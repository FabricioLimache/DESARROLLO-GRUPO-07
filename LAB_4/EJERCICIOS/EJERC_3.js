// Función para crear los códigos con un prefijo
function crearGeneradorCodigo(prefijo) {
    let contador = 0;

    //Retornamos una función para generar los códigos
    return function() {
        
        //Aumentamos el contador cada vez que se llama
        contador++;

        //Formamos el código con el prefijo y el número
        return `${prefijo}-${contador}`;
    };
}

//Generador para los alumnos
const generarAlumno = crearGeneradorCodigo("ALU");

//Generador para los docentes
const generarDocente = crearGeneradorCodigo("DOC");

console.log(generarAlumno()); // ALU-1
console.log(generarAlumno()); // ALU-2
console.log(generarDocente()); // DOC-1
console.log(generarAlumno()); // ALU-3
console.log(generarDocente()); // DOC-2