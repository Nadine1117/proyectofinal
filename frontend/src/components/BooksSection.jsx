import { useEffect, useState } from "react";

function BooksSection() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=educacion")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.docs.slice(0, 6));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section
      id="libros"
      style={{ padding: "60px 40px", backgroundColor: "#f5efe6" }}
    >
      <h2
        style={{
          color: "#23395d",
          marginBottom: "30px",
          fontSize: "28px",
        }}
      >
        📚 Libros recomendados
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {books.map((book, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            {book.cover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              />
            ) : (
              <div
                style={{
                  height: "250px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "60px",
                }}
              >
                📖
              </div>
            )}

            <h3
              style={{
                color: "#1f3c5a",
                marginBottom: "6px",
              }}
            >
              {book.title}
            </h3>

            <p
              style={{
                color: "#6ec1a5",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              {book.author_name ? book.author_name[0] : "Autor desconocido"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BooksSection;
