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

let pilaLibros = [];


for (let i = 1; i <= 20; i++) {
    let libro = new Libro(
        `Titulo ${i}`,
        `Autor ${i}`,
        `Genero ${i}`,
        `Idioma ${i}`,
        `${10 + i} USD`,
        `Formato ${i}`,
        `ISBN${i}`,
        `Descripcion ${i}`,
        `Estado ${i}`,
        `Ubicacion ${i}`,
        `Fecha ${i}`,
        `Editorial ${i}`,
        100 + i,
        `${i} x ${i} x ${i} cm`,
        `${i * 100} gramos`
    );
    pilaLibros.push(libro);
}

function mostrarMenu() {
    let opcion = prompt(`
    Menú:
    1. Agregar un libro a la pila (push)
    2. Quitar el libro de la cima de la pila (pop)
    3. Mostrar la pila actual de libros
    4. Salir
    Elige una opción:`);
    switch (opcion) {
        case '1':
            agregarLibro();
            break;
        case '2':
            quitarLibro();
            break;
        case '3':
            mostrarPila();
            break;
        case '4':
            alert('Saliendo del programa...');
            break;
        default:
            alert('Opción no válida. Inténtalo de nuevo.');
            mostrarMenu();
            break;
    }
}

function agregarLibro() {
    let titulo = prompt('Título del libro:');
    let autor = prompt('Autor del libro:');
    let genero = prompt('Género del libro:');
    let idioma = prompt('Idioma del libro:');
    let precio = prompt('Precio del libro:');
    let formato = prompt('Formato del libro:');
    let isbn = prompt('ISBN del libro:');
    let descripcion = prompt('Descripción del libro:');
    let estado = prompt('Estado del libro:');
    let ubicacion = prompt('Ubicación del libro:');
    let fecha_publicacion = prompt('Fecha de publicación del libro:');
    let editorial = prompt('Editorial del libro:');
    let paginas = prompt('Número de páginas del libro:');
    let dimensiones = prompt('Dimensiones del libro:');
    let peso = prompt('Peso del libro:');

    let libro = new Libro(
        titulo, autor, genero, idioma, precio, formato, isbn, descripcion,
        estado, ubicacion, fecha_publicacion, editorial, paginas, dimensiones, peso
    );

    pilaLibros.push(libro);
    alert('Libro agregado a la pila.');
    mostrarMenu();
}

function quitarLibro() {
    if (pilaLibros.length > 0) {
        let libro = pilaLibros.pop();
        alert(`Libro quitado de la pila:\nTítulo: ${libro.titulo}\nAutor: ${libro.autor}`);
    } else {
        alert('La pila está vacía.');
    }
    mostrarMenu();
}

function mostrarPila() {
    if (pilaLibros.length > 0) {
        let libros = 'Pila de libros:\n';
        pilaLibros.forEach((libro, index) => {
            libros += `${index + 1}. ${libro.titulo} - ${libro.autor}\n`;
        });
        alert(libros);
    } else {
        alert('La pila está vacía.');
    }
    mostrarMenu();
}