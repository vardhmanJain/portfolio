import Image from "next/image";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main className="flex flex-col px-16 sm:px-24 ">
        <Header/>
        <Experience/>
        <Skills/>
        <Projects/>
      </main>
        <Footer/>
    </div>
  );
}
