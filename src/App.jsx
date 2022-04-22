import "./App.css";
import About from "./components/about/about";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
