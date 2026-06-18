import background from "../assets/background.png";

function Loader() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(22, 61, 107, 0.6)",
        }}
      />

      <div
        style={{ fontSize: "64px", animation: "bounce 1s infinite", zIndex: 1 }}
      >
        📚
      </div>
      <h1
        style={{
          color: "#6ec1a5",
          fontSize: "32px",
          marginTop: "16px",
          fontWeight: "bold",
          zIndex: 1,
        }}
      >
        Educamarket
      </h1>
      <p
        style={{
          color: "white",
          marginTop: "8px",
          fontSize: "14px",
          zIndex: 1,
        }}
      >
        El conocimiento a un clic de distancia...
      </p>

      <div
        style={{
          width: "220px",
          height: "8px",
          backgroundColor: "rgba(255,255,255,0.3)",
          borderRadius: "8px",
          marginTop: "20px",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <div
          style={{
            height: "100%",
            backgroundColor: "#58C786",
            borderRadius: "8px",
            animation: "loadBar 2.5s linear forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes loadBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}

export default Loader;
