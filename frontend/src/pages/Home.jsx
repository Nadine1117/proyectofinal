import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BooksSection from "../components/BooksSection";
import CoursesSection from "../components/CoursesSection";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BooksSection />
      <CoursesSection />
    </>
  );
}

export default Home;
