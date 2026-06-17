import { useEffect, useState } from "react";
import "./Libros.css";
import Navbar from "../components/Navbar";

function Libros() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchBooks = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://openlibrary.org/search.json?q=education&page=${page}`,
      );

      const data = await response.json();

      const filteredBooks = data.docs.filter(
        (book) => book.cover_i && book.title,
      );

      setBooks((prevBooks) => [...prevBooks, ...filteredBooks.slice(0, 20)]);
    } catch (error) {
      console.error("Error al cargar libros:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 300
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Navbar />

      <div className="libros-container">
        <h1>Biblioteca Educamarket</h1>

        <input
          type="text"
          placeholder="Buscar libros..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        {selectedBook && (
          <div className="book-modal">
            <h2>{selectedBook.title}</h2>

            <p>
              <strong>Autor:</strong>{" "}
              {selectedBook.author_name?.[0] || "Desconocido"}
            </p>

            <p>
              <strong>Año:</strong>{" "}
              {selectedBook.first_publish_year || "No disponible"}
            </p>

            <button className="view-btn" onClick={() => setSelectedBook(null)}>
              Cerrar
            </button>
          </div>
        )}

        <div className="books-grid">
          {filteredBooks.map((book, index) => (
            <div key={index} className="book-card">
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
              />

              <h3>{book.title}</h3>

              <p>
                {book.author_name ? book.author_name[0] : "Autor desconocido"}
              </p>

              <p>Año: {book.first_publish_year || "No disponible"}</p>

              <button
                className="view-btn"
                onClick={() => setSelectedBook(book)}
              >
                Ver libro
              </button>
            </div>
          ))}
        </div>

        {loading && <p>Cargando más libros...</p>}
      </div>
    </>
  );
}

export default Libros;
