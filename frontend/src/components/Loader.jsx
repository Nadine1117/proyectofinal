import { useEffect, useState } from "react";

function Loader() {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const numColumns = Math.floor(window.innerWidth / 18);
    const cols = Array.from({ length: numColumns }, () => ({
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 3,
      chars: Array.from({ length: 30 }, () => (Math.random() > 0.5 ? "1" : "0")),
    }));
    setColumns(cols);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#1f3c5a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "space-around", opacity: 0.2 }}>
        {columns.map((col, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#6ec1a5",
              fontSize: "16px",
              fontFamily: "monospace",
              lineHeight: "1.4",
              animation: `fall ${col.duration}s linear ${col.delay}s infinite`,
            }}
          >
            {col.chars.map((c, j) => (
              <span key={j}>{c}</span>
            ))}
          </div>
        ))}
      </div>

      <div style={{ fontSize: "64px", animation: "bounce 1s infinite", zIndex: 1 }}>📚</div>
      <h1 style={{ color: "#6ec1a5", fontSize: "32px", marginTop: "16px", fontWeight: "bold", zIndex: 1 }}>
        Educamarket
      </h1>
      <p style={{ color: "white", marginTop: "8px", fontSize: "14px", zIndex: 1 }}>
        El conocimiento a un clic de distancia...
      </p>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fall {
          0% { transform: translateY(-150%); }
          100% { transform: translateY(150%); }
        }
      `}</style>
    </div>
  );
}

export default Loader;
