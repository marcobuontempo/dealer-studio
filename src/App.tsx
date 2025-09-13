import { useState } from "react";
import Gallery from "./components/features/Gallery";
import Hero from "./components/features/Hero";
import ThemeToggle from "./components/features/ThemeToggle";
import Layout from "./components/layout/Layout";

const App = () => {
  const [theme, setCurrentTheme] = useState<"light" | "dark">("light");

  return (
    <Layout theme={theme}>
      <ThemeToggle
        toggleTheme={() =>
          setCurrentTheme(theme === "light" ? "dark" : "light")
        }
      />
      <Hero />
      <Gallery />
    </Layout>
  );
};

export default App;
