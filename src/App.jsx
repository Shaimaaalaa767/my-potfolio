import Brands from "./components/Brands";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="p-4 text-gray-400">
      <Nav/>
      <Hero/>
      <Skills/>
      <Brands/>
      <Contact/>
      <Footer/>
    </main>
  )
}