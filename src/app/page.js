import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main className="flex flex-col px-24 ">
        <Header/>
        <Experience/>
        <Skills/>
        <Projects/>
      </main>
        <Footer/>
    </div>
  );
}
