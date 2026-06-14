import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BooksSection from "../components/BooksSection";
import CoursesSection from "../components/CoursesSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BooksSection />
      <CoursesSection />
      <Footer />
    </>
  );
}

export default Home;
