import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BooksSection from "../components/BooksSection";
import CoursesSection from "../components/CoursesSection";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BooksSection />
      <CoursesSection />
      <StatsSection />
      <Footer />
    </>
  );
}

export default Home;
