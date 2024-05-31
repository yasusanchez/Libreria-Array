class Libro {
    constructor(titulo, autor, genero, idioma, precio, formato, isbn, descripcion, estado, ubicacion, fechaPublicacion, editorial, paginas, dimensiones, peso) {
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
        this.fechaPublicacion = fechaPublicacion;
        this.editorial = editorial;
        this.paginas = paginas;
        this.dimensiones = dimensiones;
        this.peso = peso;
    }
}

// Pila
let pilaLibros = [
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Realismo mágico",
        idioma: "Español",
        precio: 15,
        formato: "Tapa blanda",
        isbn: "978-84-9759-648-2",
        descripcion: "Una novela que narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.",
        estado: "Nuevo",
        ubicacion: "Librería Central",
        fecha_publicacion: "30 de mayo de 1967",
        editorial: "Sudamericana",
        paginas: 432,
        dimensiones: "14 x 21 cm",
        peso: "500 gramos"
    },
    {
        titulo: "El amor en los tiempos del cólera",
        autor: "Gabriel García Márquez",
        genero: "Romance",
        idioma: "Español",
        precio: 12,
        formato: "Ebook",
        isbn: "978-84-322-0863-1",
        descripcion: "La historia de amor entre Florentino Ariza y Fermina Daza, que perdura a lo largo de décadas.",
        estado: "Como nuevo",
        ubicacion: "Librería Moderna",
        fecha_publicacion: "16 de octubre de 1985",
        editorial: "Mondadori",
        paginas: 368,
        dimensiones: "12 x 18 cm",
        peso: "300 gramos"
    },
    {
        titulo: "El Señor de los Anillos: La Comunidad del Anillo",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía",
        idioma: "Español",
        precio: 20,
        formato: "Tapa dura",
        isbn: "978-84-450-7429-6",
        descripcion: "El primer libro de la trilogía épica que sigue la búsqueda de un grupo para destruir un poderoso anillo.",
        estado: "Nuevo",
        ubicacion: "Librería Épica",
        fecha_publicacion: "29 de julio de 1954",
        editorial: "Minotauro",
        paginas: 576,
        dimensiones: "16 x 24 cm",
        peso: "700 gramos"
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        genero: "Distopía",
        idioma: "Inglés",
        precio: 18,
        formato: "Tapa blanda",
        isbn: "978-0-452-28423-4",
        descripcion: "Una novela distópica que sigue la vida de Winston Smith en un estado totalitario.",
        estado: "Usado",
        ubicacion: "Librería del Futuro",
        fecha_publicacion: "8 de junio de 1949",
        editorial: "Secker & Warburg",
        paginas: 328,
        dimensiones: "13 x 20 cm",
        peso: "450 gramos"
    },
    {
        titulo: "Orgullo y Prejuicio",
        autor: "Jane Austen",
        genero: "Clásico",
        idioma: "Inglés",
        precio: 14,
        formato: "Tapa blanda",
        isbn: "978-84-663-4687-0",
        descripcion: "La historia de Elizabeth Bennet y su relación con el altivo Sr. Darcy.",
        estado: "Como nuevo",
        ubicacion: "Librería Austen",
        fecha_publicacion: "28 de enero de 1813",
        editorial: "Penguin",
        paginas: 416,
        dimensiones: "12 x 18 cm",
        peso: "350 gramos"
    },
    {
        titulo: "Harry Potter y la Piedra Filosofal",
        autor: "J.K. Rowling",
        genero: "Fantasía",
        idioma: "Español",
        precio: 16,
        formato: "Tapa dura",
        isbn: "978-84-9838-521-8",
        descripcion: "La primera entrega de la serie de libros sobre el joven mago Harry Potter.",
        estado: "Nuevo",
        ubicacion: "Librería Mágica",
        fecha_publicacion: "26 de junio de 1997",
        editorial: "Salamandra",
        paginas: 256,
        dimensiones: "15 x 22 cm",
        peso: "600 gramos"
    },
    {
        titulo: "El Hobbit",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía",
        idioma: "Español",
        precio: 14,
        formato: "Tapa blanda",
        isbn: "978-84-450-7172-1",
        descripcion: "La historia del hobbit Bilbo Bolsón, que emprende una aventura para recuperar un tesoro robado.",
        estado: "Nuevo",
        ubicacion: "Librería de la Colina",
        fecha_publicacion: "21 de septiembre de 1937",
        editorial: "Minotauro",
        paginas: 320,
        dimensiones: "14 x 21 cm",
        peso: "400 gramos"
    },
    {
        titulo: "Matar a un Ruiseñor",
        autor: "Harper Lee",
        genero: "Ficción",
        idioma: "Inglés",
        precio: 13,
        formato: "Tapa blanda",
        isbn: "978-84-204-6344-7",
        descripcion: "La historia de Scout Finch y su padre Atticus mientras luchan contra el racismo en el sur de Estados Unidos.",
        estado: "Nuevo",
        ubicacion: "Librería Finch",
        fecha_publicacion: "11 de julio de 1960",
        editorial: "Alonso",
        paginas: 320,
        dimensiones: "13 x 20 cm",
        peso: "380 gramos"
    },
    {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        genero: "Novela",
        idioma: "Español",
        precio: 22,
        formato: "Tapa dura",
        isbn: "978-84-670-0222-0",
        descripcion: "La obra maestra de la literatura española que sigue las aventuras del caballero Don Quijote y su fiel escudero Sancho Panza.",
        estado: "Como nuevo",
        ubicacion: "Librería de la Mancha",
        fecha_publicacion: "16 de enero de 1605",
        editorial: "Espasa Calpe",
        paginas: 1024,
        dimensiones: "17 x 24 cm",
        peso: "900 gramos"
    },
    {
        titulo: "Crónicas Marcianas",
        autor: "Ray Bradbury",
        genero: "Ciencia ficción",
        idioma: "Inglés",
        precio: 17,
        formato: "Tapa blanda",
        isbn: "978-84-204-8581-4",
        descripcion: "Una colección de relatos que exploran la colonización de Marte y las complejidades de la condición humana.",
        estado: "Nuevo",
        ubicacion: "Librería Extraterrestre",
        fecha_publicacion: "22 de mayo de 1950",
        editorial: "Minotauro",
        paginas: 304,
        dimensiones: "14 x 21 cm",
        peso: "450 gramos"
    },
    {
        titulo: "Neuromante",
        autor: "William Gibson",
        gener: "Ciencia ficción",
        idioma: "Inglés",
        precio: 16,
        formato: "Tapa blanda",
        isbn: "978-0-441-56956-2",
        descripcion: "En un futuro distópico, Case, un hacker, es contratado para realizar un último trabajo que podría cambiar su destino para siempre en un mundo dominado por la tecnología y las corporaciones.",
        estado: "Nuevo",
        ubicacion: "Librería Cyberpunk",
        fecha_publicacion: "1 de julio de 1984",
        editorial: "Ace Books",
        paginas: 320,
        dimensiones: "13 x 20 cm",
        peso: "400 gramos"
    },
    {
        titulo: "Fundación",
        autor: "Isaac Asimov",
        genero: "Ciencia ficción",
        idioma: "Español",
        precio: 19,
        formato: "Tapa dura",
        isbn: "978-84-204-5974-6",
        descripcion: "La historia de la Fundación, una institución encargada de preservar el conocimiento humano en un futuro lejano, enfrentándose a la decadencia del Imperio Galáctico.",
        estado: "Nuevo",
        ubicacion: "Librería Galáctica",
        fecha_publicacion: "1 de junio de 1951",
        editorial: "Debolsillo",
        paginas: 240,
        dimensiones: "15 x 23 cm",
        peso: "600 gramos"
    },
    {
        titulo: "Un Mundo Feliz",
        autor: "Aldous Huxley",
        genero: "Distopía",
        idioma: "Inglés",
        precio: 18,
        formato: "Tapa blanda",
        isbn: "978-84-9793-097-5",
        descripcion: "En un futuro donde la sociedad está controlada mediante el condicionamiento y la manipulación genética, un hombre cuestiona los fundamentos de su mundo 'perfecto'.",
        estado: "Nuevo",
        ubicacion: "Librería Utopía",
        fecha_publicacion: "1 de enero de 1932",
        editorial: "Edhasa",
        paginas: 320,
        dimensiones: "13 x 20 cm",
        peso: "350 gramos"
    },
    {
        titulo: "El Silmarillion",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía",
        idioma: "Español",
        precio: 20,
        formato: "Tapa dura",
        isbn: "978-84-450-7378-7",
        descripcion: "Una obra que narra la historia de la Tierra Media desde su creación hasta los eventos que preceden a 'El Señor de los Anillos', explorando mitos, leyendas y el origen de razas y personajes.",
        estado: "Nuevo",
        ubicacion: "Librería Épica",
        fecha_publicacion: "15 de septiembre de 1977",
        editorial: "Minotauro",
        paginas: 416,
        dimensiones: "16 x 24 cm",
        peso: "800 gramos"
    },
    {
        titulo: "La Sombra del Viento",
        autor: "Carlos Ruiz Zafón",
        genero: "Misterio",
        idioma: "Español",
        precio: 16,
        formato: "Tapa blanda",
        isbn: "978-84-204-1136-4",
        descripcion: "Ambientada en la Barcelona de la posguerra, esta novela sigue a Daniel Sempere mientras descubre un misterioso libro que cambiará su vida para siempre.",
        estado: "Nuevo",
        ubicacion: "Librería de los Susurros",
        fecha_publicacion: "1 de enero de 2001",
        editorial: "Planeta",
        paginas: 544,
        dimensiones: "15 x 23 cm",
        peso: "600 gramos"
    },
    {
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        genero: "Fábula",
        idioma: "Español",
        precio: 10,
        formato: "Tapa dura",
        isbn: "978-84-479-2151-7",
        descripcion: "Un clásico de la literatura universal que narra las aventuras de un niño que viaja de planeta en planeta, descubriendo la verdadera esencia de la vida.",
        estado: "Como nuevo",
        ubicacion: "Librería Estelar",
        fecha_publicacion: "6 de abril de 1943",
        editorial: "Salamandra",
        paginas: 96,
        dimensiones: "13 x 20 cm",
        peso: "200 gramos"
    },
    {
        titulo: "Los Juegos del Hambre",
        autor: "Suzanne Collins",
        genero: "Ciencia ficción, Aventura",
        idioma: "Español",
        precio: 15,
        formato: "Tapa blanda",
        isbn: "978-84-246-5643-0",
        descripcion: "En un mundo distópico, Katniss Everdeen se convierte en el símbolo de una rebelión contra el Capitolio al participar en los mortales Juegos del Hambre.",
        estado: "Nuevo",
        ubicacion: "Librería Rebelde",
        fecha_publicacion: "28 de septiembre de 2008",
        editorial: "RBA Molino",
        paginas: 416,
        dimensiones: "14 x 22 cm",
        peso: "500 gramos"
    },
    {
        titulo: "El Perfume: Historia de un asesino",
        autor: "Patrick Süskind",
        genero: "Novela histórica, Misterio",
        idioma: "Español",
        precio: 13,
        formato: "Tapa blanda",
        isbn: "978-84-339-7484-6",
        descripcion: "Jean-Baptiste Grenouille nace con un don extraordinario: un olfato prodigioso que lo lleva a convertirse en un asesino obsesionado por capturar la esencia de la belleza.",
        estado: "Usado",
        ubicacion: "Librería Aromas",
        fecha_publicacion: "17 de octubre de 1985",
        editorial: "Anagrama",
        paginas: 304,
        dimensiones: "12 x 18 cm",
        peso: "350 gramos"
    },
    {
        titulo: "La Odisea",
        autor: "Homero",
        genero: "Epopeya",
        idioma: "Español",
        precio: 11,
        formato: "Tapa blanda",
        isbn: "978-84-376-0494-5",
        descripcion: "El épico viaje de Odiseo de regreso a casa después de la Guerra de Troya, enfrentándose a monstruos, dioses y pruebas durante veinte años.",
        estado: "Nuevo",
        ubicacion: "Librería Olimpo",
        fecha_publicacion: "Siglo VIII a.C.",
        editorial: "Cátedra",
        paginas: 384,
        dimensiones: "13 x 20 cm",
        peso: "450 gramos"
    },
    {
        titulo: "El Alquimista",
        autor: "Paulo Coelho",
        genero: "Ficción, Espiritualidad",
        idioma: "Español",
        precio: 12,
        formato: "Ebook",
        isbn: "978-84-08-01794-9",
        descripcion: "Santiago emprende un viaje en busca de un tesoro oculto, descubriendo en el camino lecciones sobre la vida, el amor y el destino.",
        estado: "Como nuevo",
        ubicacion: "Librería Alquimia",
        fecha_publicacion: "1 de enero de 1988",
        editorial: "Planeta",
        paginas: 192,
        dimensiones: "-",
        peso: "-"
    }
];

function agregarLibro(libro) {
    pilaLibros.push(libro);
    console.log("Libro agregado:");
    console.table([libro]);
}

function quitarLibro() {
    const libroRemovido = pilaLibros.pop();
    if (libroRemovido) {
        console.log("Libro removido:");
        console.table([libroRemovido]);
    } else {
        console.log("No hay libros en la pila.");
    }
}

function mostrarPila() {
    console.log("Pila actual de libros:");
    console.table(pilaLibros);
}

function listarLibros() {
    console.log("Lista de libros:");
    console.table(pilaLibros);
}

function listarLibrosConDescuento() {
    const librosConDescuento = pilaLibros.map(libro => ({
        ...libro,
        descuento: libro.precio * 0.2
    }));
    console.log("Libros con descuento:");
    console.table(librosConDescuento);
}

function librosCarosYResumen(){
    const librosCarosYResumen = pilaLibros.filter(libro => libro.precio > 20).sort((a, b) => b.precio - a.precio).map(libro => ({
        titulo: libro.titulo,
        autor: libro.autor,
        precio: libro.precio
    }));
    console.log("Libros caros ordenados de mayor a menor:");
    console.table(librosCarosYResumen);
}

function ordenarLibrosPorPaginas() {
    const librosOrdenados = [...pilaLibros].sort((a, b) => b.paginas - a.paginas);
    console.log("Libros ordenados por páginas de mayor a menor:");
    console.table(librosOrdenados);
}

function resumenesEncadenados() {
    const librosCarosPorTitulo = pilaLibros.filter(libro => libro.precio > 11).map(libro => ({
        titulo: libro.titulo,
        autor: libro.autor,
        precio: libro.precio
    }));
    console.log("Libros caros por título:");
    console.table(librosCarosPorTitulo);

    const librosMenosDe100Paginas = pilaLibros.filter(libro => libro.paginas < 100).map(libro => ({
        titulo: libro.titulo,
        autor: libro.autor,
        editorial: libro.editorial,
        paginas: libro.paginas
    }));
    console.log("Libros con menos de 100 páginas:");
    console.table(librosMenosDe100Paginas);

    const librosCarosOrdenados = pilaLibros.filter(libro => libro.precio > 20).sort((a, b) => b.precio - a.precio).map(libro => ({
        titulo: libro.titulo,
        autor: libro.autor,
        precio: libro.precio
    }));
    console.log("Libros caros ordenados de mayor a menor:");
    console.table(librosCarosOrdenados);

    const librosPorPaginas = pilaLibros.sort((a, b) => b.paginas - a.paginas).map(libro => ({
        titulo: libro.titulo,
        autor: libro.autor,
        editorial: libro.editorial,
        paginas: libro.paginas
    }));
    console.log("Libros por número más alto de páginas ordenados de mayor a menor:");
    console.table(librosPorPaginas);
}