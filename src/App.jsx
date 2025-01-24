import { ContextProvider } from "./context/randomUserContext";
import Header from "./Components/Header/header";
import RandomPosts from "./Components/RandomPosts/RandomPosts";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <RandomPosts />
      </ContextProvider>{" "}
      <Footer />
    </>
  );
}

export default App;
