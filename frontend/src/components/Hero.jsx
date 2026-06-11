import banner from "../assets/banner.jpg";

function Hero() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      ></section>

      <section className="hero-info">
        <h1>La educación transforma vidas</h1>

        <p>
          En Educamarket conectamos personas con libros, cursos y recursos
          educativos que promueven el conocimiento, el crecimiento personal y
          una vida más digna para todos.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Explorar Libros</button>

          <button className="secondary-btn">Ver Cursos</button>
        </div>
      </section>
    </>
  );
}

export default Hero;
