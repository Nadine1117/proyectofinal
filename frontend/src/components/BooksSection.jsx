import { useState, useEffect } from "react";

function BooksSection() {
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const temas = [
      "education",
      "mathematics",
      "programming",
      "history",
      "science",
      "languages",
      "technology",
      "marketing",
      "business",
      "psychology",
      "art",
      "literature",
    ];

    Promise.all(
      temas.map((tema) =>
        fetch(`https://openlibrary.org/search.json?q=${tema}`)
          .then((res) => res.json())
          .catch(() => ({ docs: [] })),
      ),
    )
      .then((results) => {
        const allBooks = results.flatMap((r) => r.docs);

        const booksWithCover = allBooks.filter((book) => book.cover_i);

        const uniqueBooks = booksWithCover.filter(
          (book, index, self) =>
            index === self.findIndex((b) => b.key === book.key),
        );

        const shuffled = [...uniqueBooks].sort(() => Math.random() - 0.5);

        setBooks(shuffled.slice(0, 60));
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (books.length === 0) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 6) % books.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [books]);

  const visibleBooks =
    books.length > 0
      ? Array.from(
          { length: 6 },
          (_, i) => books[(startIndex + i) % books.length],
        )
      : [];

  return (
    <section
      id="libros"
      style={{
        padding: "60px 30px",
        backgroundColor: "#F5F8FC",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#0B4F8A",
          fontSize: "34px",
          fontWeight: "700",
          marginBottom: "10px",
        }}
      >
        📚 Libros recomendados
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#5B6B7A",
          marginBottom: "35px",
        }}
      >
        Descubrí nuevos recursos para aprender y crecer.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "15px",
        }}
      >
        {visibleBooks.map((book, i) => (
          <div
            key={i}
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              overflow: "hidden",
              border: "12px solid #0B4F8A",
              boxShadow: "0 12px 30px rgba(11,79,138,0.25)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 15px 35px rgba(11,79,138,0.30)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(11,79,138,0.18)";
            }}
          >
            <img
              src={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                  : "https://via.placeholder.com/200x300?text=Libro"
              }
              alt={book.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "12px" }}>
              <h3
                style={{
                  color: "#0B4F8A",
                  fontSize: "15px",
                  fontWeight: "700",
                  marginBottom: "8px",
                  lineHeight: "1.3",
                }}
              >
                {book.title}
              </h3>

              <p
                style={{
                  color: "#8BC34A",
                  fontSize: "13px",
                  fontWeight: "600",
                  margin: 0,
                }}
              >
                {book.author_name ? book.author_name[0] : "Autor desconocido"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BooksSection;
