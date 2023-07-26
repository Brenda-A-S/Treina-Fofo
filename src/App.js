import Footer from "./components/footer";
import Menu from "./components/navbar";
import Contact from "./pages/contact";
import Differentials from "./pages/differentials";
import Family from "./pages/family";
import Banner from "./pages/home";
import Plans from "./pages/plans";

function App() {
  return (
    <div className="app">
      <div className="container">
        <header>
          <Menu />
        </header>
        <main>
          <Banner />
          <Differentials />
          <Plans />
          <Family />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
