import "./App.css";
import Header from "./pages/navbar";
import Prodinfo from "./pages/prod_info";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/intro";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/prod_info" element={<Prodinfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
