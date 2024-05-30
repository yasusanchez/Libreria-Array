class Libro {
    constructor(titulo, autor, genero, idioma, precio, formato, isbn, descripcion, estado, ubicacion, fecha_publicacion, editorial, paginas, dimensiones, peso) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.idioma = idioma;
        this.precio = precio;
        this.formato = formato;
        this.isbn = isbn;
        this.descripcion = descripcion;
        this.estado = estado;
        this.ubicacion = ubicacion;
        this.fecha_publicacion = fecha_publicacion;
        this.editorial = editorial;
        this.paginas = paginas;
        this.dimensiones = dimensiones;
        this.peso = peso;
    }
}

class PilaDeLibros {
    constructor() {
        this.pila = [];
    }

    push(libro) {
        this.pila.push(libro);
    }

    pop() {
        if (this.pila.length === 0) {
            console.log("La pila está vacía.");
            return null;
        }
        return this.pila.pop();
    }

    mostrarPila() {
        if (this.pila.length === 0) {
            console.log("La pila está vacía.");
            return;
        }
        console.log("Pila de Libros:");
        for (let i = this.pila.length - 1; i >= 0; i--) {
            console.log(`- ${this.pila[i].titulo} por ${this.pila[i].autor}`);
        }
    }
}

// Crear 20 libros diferentes, incluyendo 5 de una editorial específica
const libros = [
    new Libro("Libro 1", "Autor 1", "Género 1", "Español", 25.99, "Tapa dura", "ISBN1", "Descripción del libro 1", "Nuevo", "Ubicación 1", "2023-01-01", "Editorial Específica", 200, "15x20x2 cm", "0.5 kg"),
    new Libro("Libro 2", "Autor 2", "Género 2", "Español", 30.99, "Tapa blanda", "ISBN2", "Descripción del libro 2", "Nuevo", "Ubicación 2", "2023-01-02", "Editorial Específica", 150, "14x21x2 cm", "0.4 kg"),
    new Libro("Libro 3", "Autor 3", "Género 3", "Español", 15.99, "Ebook", "ISBN3", "Descripción del libro 3", "Nuevo", "Ubicación 3", "2023-01-03", "Editorial Específica", 300, "16x23x3 cm", "0.6 kg"),
    new Libro("Libro 4", "Autor 4", "Género 4", "Español", 20.99, "Tapa dura", "ISBN4", "Descripción del libro 4", "Nuevo", "Ubicación 4", "2023-01-04", "Editorial Específica", 250, "17x24x3 cm", "0.7 kg"),
    new Libro("Libro 5", "Autor 5", "Género 5", "Español", 22.99, "Tapa blanda", "ISBN5", "Descripción del libro 5", "Nuevo", "Ubicación 5", "2023-01-05", "Editorial Específica", 100, "18x25x2 cm", "0.3 kg"),
    new Libro("Libro 6", "Autor 6", "Género 6", "Español", 18.99, "Ebook", "ISBN6", "Descripción del libro 6", "Nuevo", "Ubicación 6", "2023-01-06", "Otra Editorial", 220, "15x20x2 cm", "0.5 kg"),
    new Libro("Libro 7", "Autor 7", "Género 7", "Español", 19.99, "Tapa dura", "ISBN7", "Descripción del libro 7", "Nuevo", "Ubicación 7", "2023-01-07", "Otra Editorial", 210, "15x20x2 cm", "0.5 kg"),
    new Libro("Libro 8", "Autor 8", "Género 8", "Español", 21.99, "Tapa blanda", "ISBN8", "Descripción del libro 8", "Nuevo", "Ubicación 8", "2023-01-08", "Otra Editorial", 240, "15x20x2 cm", "0.5 kg"),
    new Libro("Libro 9", "Autor 9", "Género 9", "Español", 23.99, "Ebook", "ISBN9", "Descripción del libro 9", "Nuevo", "Ubicación 9", "2023-01-09", "Otra Editorial", 260, "15x20x2 cm", "0.5 kg"),
    new Libro("Libro 10", "Autor 10", "Género 10", "Español", 24.99, "Tapa dura", "ISBN10", "Descripción del libro 10", "Nuevo", "Ubicación 10", "2023-01-10", "Otra Editorial", 280, "15x20x2 cm", "0.5 kg"),
    new Libro("Libro 11", "Autor 11", "Género 11", "Español", 25.99, "Tapa dura", "ISBN11", "Descripción del libro 11", "Nuevo", "Ubicación 11", "2023-01-11", "Otra Editorial", 200, "15x20x2 cm", "0.5 kg"),
    new Libro("Libro 12", "Autor 12", "Género 12", "Español", 30.99, "Tapa blanda", "ISBN12", "Descripción del libro 12", "Nuevo", "Ubicación 12", "2023-01-12", "Otra Editorial", 150, "14x21x2 cm", "0.4 kg"),
    new Libro("Libro 13", "Autor 13", "Género 13", "Español", 15.99, "Ebook", "ISBN13", "Descripción del libro 13", "Nuevo", "Ubicación 13", "2023-01-13", "Otra Editorial", 300, "16x23x3 cm", "0.6 kg"),
    new Libro("Libro 14", "Autor 14", "Género 14", "Español", 20.99, "Tapa dura", "ISBN14", "Descripción del libro 14", "Nuevo", "Ubicación 14", "2023-01-14", "Otra Editorial", 250, "17x24x3 cm", "0.7 kg"),
    new Libro("Libro 15", "Autor 15", "Género 15", "Español", 22.99, "Tapa blanda", "ISBN15", "Descripción del libro 15", "Nuevo", "Ubicación 15", "2023-01-15", "Otra Editorial", 100, "18x25x2 cm", "0.3 kg"),
    new Libro("Libro 16", "Autor 16", "Género 16", "Español", 18.99, "Ebook", "ISBN16", "Descripción del libro 16", "Nuevo", "Ubicación 16", "2023-01-16", "Otra Editorial", 220, "15x20x2 cm", "0.5 kg"),
    new Libro("Libro 17", "Autor 17", "Género 17", "Español", 19.99, "Tapa dura", "ISBN17", "Descripción del libro 17", "Nuevo", "Ubicación 17", "2023-01-17", "Otra Editorial", 210, "15x20x2 cm", "0.5 kg"),
    new Libro("Libro 18", "Autor 18", "Género 18", "Español", 21.99, "Tapa blanda", "ISBN18", "Descripción del libro 18", "Nuevo", "Ubicación 18", "2023-01-18", "Otra Editorial", 240, "15x20x2 cm", "0.5 kg"),
    new Libro("Libro 19", "Autor 19", "Género 19", "Español", 23.99, "Ebook", "ISBN19", "Descripción del libro 19", "Nuevo", "Ubicación 19", "2023-01-19", "Otra Editorial", 260, "15x20x2 cm", "0.5 kg"),
    new Libro("Libro 20", "Autor 20", "Género 20", "Español", 24.99, "Tapa dura", "ISBN20", "Descripción del libro 20", "Nuevo", "Ubicación 20", "2023-01-20", "Otra Editorial", 280, "15x20x2 cm", "0.5 kg")
];

const pilaDeLibros = new PilaDeLibros();
libros.forEach(libro => pilaDeLibros.push(libro));

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const mostrarMenu = () => {
    console.log("\nMenu:");
    console.log("1. Agregar un libro a la pila");
    console.log("2. Quitar un libro de la pila");
    console.log("3. Mostrar la pila de libros");
    console.log("4. Salir");
};

const obtenerDetallesDelLibro = (callback) => {
    const detalles = {};
    const preguntas = [
        "Ingrese el título del libro: ",
        "Ingrese el autor del libro: ",
        "Ingrese el género del libro: ",
        "Ingrese el idioma del libro: ",
        "Ingrese el precio del libro: ",
        "Ingrese el formato del libro: ",
        "Ingrese el ISBN del libro: ",
        "Ingrese la descripción del libro: ",
        "Ingrese el estado del libro: ",
        "Ingrese la ubicación del libro: ",
        "Ingrese la fecha de publicación del libro (YYYY-MM-DD): ",
        "Ingrese la editorial del libro: ",
        "Ingrese el número de páginas del libro: ",
        "Ingrese las dimensiones del libro (ancho x profundidad x altura): ",
        "Ingrese el peso del libro: "
    ];
    let index = 0;

    const hacerPregunta = () => {
        if (index < preguntas.length) {
            readline.question(preguntas[index], (respuesta) => {
                switch (index) {
                    case 0: detalles.titulo = respuesta; break;
                    case 1: detalles.autor = respuesta; break;
                    case 2: detalles.genero = respuesta; break;
                    case 3: detalles.idioma = respuesta; break;
                    case 4: detalles.precio = parseFloat(respuesta); break;
                    case 5: detalles.formato = respuesta; break;
                    case 6: detalles.isbn = respuesta; break;
                    case 7: detalles.descripcion = respuesta; break;
                    case 8: detalles.estado = respuesta; break;
                    case 9: detalles.ubicacion = respuesta; break;
                    case 10: detalles.fecha_publicacion = respuesta; break;
                    case 11: detalles.editorial = respuesta; break;
                    case 12: detalles.paginas = parseInt(respuesta); break;
                    case 13: detalles.dimensiones = respuesta; break;
                    case 14: detalles.peso = respuesta; break;
                }
                index++;
                hacerPregunta();
            });
        } else {
            const libro = new Libro(
                detalles.titulo,
                detalles.autor,
                detalles.genero,
                detalles.idioma,
                detalles.precio,
                detalles.formato,
                detalles.isbn,
                detalles.descripcion,
                detalles.estado,
                detalles.ubicacion,
                detalles.fecha_publicacion,
                detalles.editorial,
                detalles.paginas,
                detalles.dimensiones,
                detalles.peso
            );
            callback(libro);
        }
    };

    hacerPregunta();
};

const ejecutarAccion = (opcion) => {
    switch (opcion) {
        case '1':
            obtenerDetallesDelLibro((libro) => {
                pilaDeLibros.push(libro);
                console.log(`Se agregó el libro: ${libro.titulo}`);
                mostrarMenu();
                readline.question('Seleccione una opción: ', ejecutarAccion);
            });
            break;
        case '2':
            const libroRemovido = pilaDeLibros.pop();
            if (libroRemovido) {
                console.log(`Se quitó el libro: ${libroRemovido.titulo}`);
            }
            mostrarMenu();
            readline.question('Seleccione una opción: ', ejecutarAccion);
            break;
        case '3':
            pilaDeLibros.mostrarPila();
            mostrarMenu();
            readline.question('Seleccione una opción: ', ejecutarAccion);
            break;
        case '4':
            readline.close();
            return;
        default:
            console.log("Opción no válida.");
            mostrarMenu();
            readline.question('Seleccione una opción: ', ejecutarAccion);
    }
};

// Para Eliminar los primeros cinco libros que no son de la editorial específica
libros.splice(0, 5);

// Para Añadir cinco nuevos libros de la editorial específica al principio del array libros
libros.unshift(
    new Libro("Libro 21", "Autor 21", "Género 21", "Español", 26.99, "Tapa dura", "ISBN21", "Descripción del libro 21", "Nuevo", "Ubicación 21", "2023-01-21", "Editorial Específica", 220, "15x20x2 cm", "0.5 kg"),
    new Libro("Libro 22", "Autor 22", "Género 22", "Español", 31.99, "Tapa blanda", "ISBN22", "Descripción del libro 22", "Nuevo", "Ubicación 22", "2023-01-22", "Editorial Específica", 160, "14x21x2 cm", "0.4 kg"),
    new Libro("Libro 23", "Autor 23", "Género 23", "Español", 16.99, "Ebook", "ISBN23", "Descripción del libro 23", "Nuevo", "Ubicación 23", "2023-01-23", "Editorial Específica", 310, "16x23x3 cm", "0.6 kg"),
    new Libro("Libro 24", "Autor 24", "Género 24", "Español", 21.99, "Tapa dura", "ISBN24", "Descripción del libro 24", "Nuevo", "Ubicación 24", "2023-01-24", "Editorial Específica", 260, "17x24x3 cm", "0.7 kg"),
    new Libro("Libro 25", "Autor 25", "Género 25", "Español", 23.99, "Tapa blanda", "ISBN25", "Descripción del libro 25", "Nuevo", "Ubicación 25", "2023-01-25", "Editorial Específica", 120, "18x25x2 cm", "0.3 kg")
);

// Esta Función es para formatear la información de un libro
const formatoLibro = (libro) => {
    return `Título: ${libro.titulo}, Autor: ${libro.autor}, Editorial: ${libro.editorial}, Precio: ${libro.precio}`;
};

// Utilizando el método .map para aplicar la función a cada libro
const librosFormateados = libros.map(libro => formatoLibro(libro));

// Mostrar los libros formateados
console.log("Libros:");
librosFormateados.forEach(libro => console.log(libro));

// Crear 10 iteraciones diferentes manteniendo el atributo Titulo
const iteraciones = [];
for (let i = 0; i < 10; i++) {
    const librosModificados = libros.map((libro, index) => {
        return new Libro(
            `Libro ${index + 1 + (i * 10)}`,
            libro.autor,
            libro.genero,
            libro.idioma,
            libro.precio + (i * 5), // Modificar el precio para cada iteración
            libro.formato,
            libro.isbn,
            libro.descripcion,
            libro.estado,
            libro.ubicacion,
            libro.fecha_publicacion,
            libro.editorial,
            libro.paginas,
            libro.dimensiones,
            libro.peso
        );
    });
    iteraciones.push(librosModificados);
}

// Mostrar los títulos de los libros de cada iteración
iteraciones.forEach((iteracion, index) => {
    console.log(`Iteración ${index + 1}:`);
    iteracion.forEach(libro => console.log(libro.titulo));
});
