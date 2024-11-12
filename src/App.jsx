import { Container } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProjectCard } from "./components/ProjectCard";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <ProjectCard />
      <Footer />
    </>
  );
}

export default App;
