import React from "react";
import Navbar from "./components/NetflixNav";
import Gallery from "./components/Gallery";
import Footer from "./components/NetflixFooter";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css"; // Importa il file CSS personalizzato

function App() {
  return (
    <div className="container-fluid px-4">
      <Navbar />
      <Gallery title="Harry Potter" />
      <Gallery title="Lord of the Rings" />
      <Gallery title="Star Wars" />
      <Footer />
    </div>
  );
}

export default App;
