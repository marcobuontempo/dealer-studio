import Gallery from "./components/features/Gallery";
import Hero from "./components/features/Hero";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Hero />
      <Gallery />
    </Layout>
  );
};

export default App;
