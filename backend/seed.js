const sequelize = require("./config/database");
const Product = require("./models/Product");

function cover(titulo, color) {
  const texto = encodeURIComponent(titulo.replace(/ /g, "\n"));
  return `https://placehold.co/300x400/${color}/ffffff?text=${texto}&font=montserrat`;
}

const libros = [
  {
    titulo: "El Mundo de Sofía",
    descripcion: "Una novela sobre la historia de la filosofía.",
    precio: 0,
    stock: 50,
    categoria: "Filosofía",
    imagen: cover("El Mundo de Sofía", "1f3c5a"),
  },
  {
    titulo: "Ética para Amador",
    descripcion: "Reflexiones sobre la ética para jóvenes.",
    precio: 0,
    stock: 50,
    categoria: "Filosofía",
    imagen: cover("Ética para Amador", "1f3c5a"),
  },
  {
    titulo: "Cien Años de Soledad",
    descripcion: "Obra cumbre del realismo mágico latinoamericano.",
    precio: 0,
    stock: 50,
    categoria: "Literatura",
    imagen: cover("Cien Años de Soledad", "6ec1a5"),
  },
  {
    titulo: "1984",
    descripcion: "Distopía sobre el totalitarismo y la vigilancia.",
    precio: 0,
    stock: 50,
    categoria: "Literatura",
    imagen: cover("1984", "6ec1a5"),
  },
  {
    titulo: "Breve Historia del Tiempo",
    descripcion: "Introducción a la cosmología moderna.",
    precio: 0,
    stock: 50,
    categoria: "Ciencia",
    imagen: cover("Breve Historia del Tiempo", "f5a623"),
  },
  {
    titulo: "Sapiens",
    descripcion: "De animales a dioses, una breve historia de la humanidad.",
    precio: 0,
    stock: 50,
    categoria: "Historia",
    imagen: cover("Sapiens", "e74c3c"),
  },
  {
    titulo: "El Principito",
    descripcion: "Clásico universal sobre la amistad y la vida.",
    precio: 0,
    stock: 50,
    categoria: "Literatura",
    imagen: cover("El Principito", "6ec1a5"),
  },
  {
    titulo: "Introducción a la Programación",
    descripcion: "Curso básico de programación para principiantes.",
    precio: 0,
    stock: 100,
    categoria: "Tecnología",
    imagen: cover("Introducción a la Programación", "23395d"),
  },
];

async function seed() {
  try {
    await sequelize.sync();
    for (const libro of libros) {
      await Product.create(libro);
    }
    console.log("Libros agregados correctamente");
    process.exit();
  } catch (error) {
    console.error("Error al agregar libros:", error);
    process.exit(1);
  }
}

seed();
