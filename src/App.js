import Footer from "./components/footer";
import Menu from "./components/navbar";
import Contact from "./pages/contact";
import Differentials from "./pages/differentials";
import Family from "./pages/family";
import Banner from "./pages/home";
import Plans from "./pages/plans";

function App() {
  return (
    <>
     <header>
      <Menu/>
     </header>
     <main>
      <Banner />
      <Differentials/>
      <Plans />
      <Family />
      <Contact />
     </main>
     <footer>
      <Footer/>
     </footer>
    </>
  );
}

export default App;
