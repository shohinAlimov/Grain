import Companies from "./components/Companies/Companies";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Integrations from "./components/Integrations/Integrations";
import Interface from "./components/Interface/Interface";
import Privacy from "./components/Privacy/Privacy";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Interface />
      <Companies />
      <Features />
      <Integrations />
      <Testimonials />
      <Privacy />
      <Footer />
    </>
  );
}

export default App;
