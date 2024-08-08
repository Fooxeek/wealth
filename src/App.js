import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/main.css";

//pages by React BrowserRouter
import NewEmployees from "./pages/NewEmployees";
import CurrentEmployees from "./pages/CurrentEmployees";

//components Header && Footer
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<NewEmployees />} />
            <Route path="/list" element={<CurrentEmployees />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
