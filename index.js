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

const pilaLibros = [];

function pushLibro(libro) {
    pilaLibros.push(libro);
    console.log(`"${libro.titulo}" ha sido agregado a la pila.`);
}

function popLibro() {
    if (pilaLibros.length === 0) {
        console.log("La pila de libros está vacía.");
    } else {
        const libro = pilaLibros.pop();
        console.log(`"${libro.titulo}" ha sido removido de la pila.`);
    }
}

function mostrarPila() {
    if (pilaLibros.length === 0) {
        console.log("La pila de libros está vacía.");
    } else {
        console.log("Pila de libros:");
        pilaLibros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor}`);
        });
    }
}

function crearLibros() {
    const libros = [
        new Libro("El nombre del viento", "Patrick Rothfuss", "Fantasía", "Español", 20.99, "Tapa blanda", "9788401352836", "El primer día de universidad de Kvothe ya parece ser una mala pasada, cuando llega al local donde trabaja, La Universidad Rota, para encontrarla en llamas.", "Nuevo", "Librería Cervantes, Madrid", "5 de marzo de 2007", "DeBolsillo", 840, "13 x 4 x 19 cm", "500 gramos"),
        new Libro("El amor en los tiempos del cólera", "Gabriel García Márquez", "Ficción", "Español", 15, "Tapa blanda", "978-3-16-148411-7", "La novela narra la historia de amor entre Florentino Ariza y Fermina Daza a lo largo de más de 50 años.", "Nuevo", "Librería Central, Ciudad de México", "8 de octubre de 1985", "Editorial Sudamericana", 368, "13 x 2 x 20 cm", "500 gramos"),
        new Libro("Cien años de soledad", "Gabriel García Márquez", "Ficción", "Español", 20, "Tapa dura", "978-3-16-148410-0", "La novela narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.", "Nuevo", "Librería Central, Ciudad de México", "5 de junio de 1967", "Editorial Sudamericana", 432, "15 x 3 x 23 cm", "600 gramos")
        
    ];

    libros.forEach(libro => pushLibro(libro));
}

function mostrarMenu() {
    console.log("\nMenú:");
    console.log("1. Agregar un libro a la pila");
    console.log("2. Quitar un libro de la pila");
    console.log("3. Mostrar la pila de libros");
    console.log("4. Salir");
}

function main() {
    console.log("Bienvenido a la librería virtual.");

    // Crear libros iniciales
    crearLibros();

    let continuar = true;

    while (continuar) {
        mostrarMenu();

        const opcion = parseInt(prompt("Ingrese el número de la opción deseada:"));

        switch (opcion) {
            case 1:
                // Agregar un libro
                // Implementar la lógica para crear un nuevo libro y agregarlo a la pila
                break;
            case 2:
                // Quitar un libro
                popLibro();
                break;
            case 3:
                // Mostrar la pila de libros
                mostrarPila();
                break;
            case 4:
                // Salir del programa
                continuar = false;
                console.log("Gracias por visitar nuestra librería virtual. ¡Hasta luego!");
                break;
            default:
                console.log("Opción inválida. Por favor, seleccione una opción válida.");
                break;
        }
    }
}

main();
