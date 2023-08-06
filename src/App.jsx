// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";

// Contexts
import { usePostContext } from "./contexts/post_context";

function App() {
  const { isFakeDark, setIsFakeDark } = usePostContext();

  return (
    <section>
      <button
        onClick={() => setIsFakeDark(isFakeDark => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "🔆" : "🌙"}
      </button>

      <Header />
      <Main />
      <Archive />
      <Footer />
    </section>
  );
}

export default App;
