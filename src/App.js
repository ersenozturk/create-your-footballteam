import "./App.css";
import Context from "./components/Context";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Person from "./components/Person";

function App() {
  return (
    <div>
      <Header />
      <Context />
      <Person/>
      <Footer />
    </div>
  );
}

export default App;
