import { useEffect, useState } from "react";
import "./Libros.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function Libros() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const { cart, addToCart } = useCart();

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
        <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
          <input
            type="text"
            placeholder="Buscar libros..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <button
            onClick={() => (window.location.href = "/carrito")}
            style={{ backgroundColor: "#6ec1a5", color: "white", border: "none", padding: "12px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", whiteSpace: "nowrap" }}
          >
            Ver carrito ({cart.length})
          </button>
        </div>

        {selectedBook && (
          <div className="book-modal">
            <h2>{selectedBook.title}</h2>
            <p><strong>Autor:</strong> {selectedBook.author_name?.[0] || "Desconocido"}</p>
            <p><strong>Año:</strong> {selectedBook.first_publish_year || "No disponible"}</p>
            <button className="view-btn" onClick={() => setSelectedBook(null)}>Cerrar</button>
          </div>
        )}

        <div className="books-grid">
          {filteredBooks.map((book, index) => {
            const bookId = book.key || index;
            const inCart = cart.find((item) => item.id === bookId);
            return (
              <div key={index} className="book-card">
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                />
                <h3>{book.title}</h3>
                <p>{book.author_name ? book.author_name[0] : "Autor desconocido"}</p>
                <p>Año: {book.first_publish_year || "No disponible"}</p>
                <button className="view-btn" onClick={() => setSelectedBook(book)}>Ver libro</button>
                <button
                  className="view-btn"
                  onClick={() => addToCart({ id: bookId, titulo: book.title, categoria: "Libro" })}
                  disabled={inCart}
                  style={{ marginTop: "6px", backgroundColor: inCart ? "#ccc" : "#6ec1a5" }}
                >
                  {inCart ? "En el carrito" : "Agregar al carrito"}
                </button>
              </div>
            );
          })}
        </div>
        {loading && <p>Cargando más libros...</p>}
      </div>
      <Footer />
    </>
  );
}

export default Libros;
