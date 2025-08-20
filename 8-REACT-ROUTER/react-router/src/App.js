import "./App.css";

// components
import Navbar from "./components/Navbar";
import Page404 from "./components/Page404";
import SearchForm from "./components/SearchForm";
import Search from "./components/Search";

// 1 - Config react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";

function App() {
  return (
    <div className="App">
      <h1>react Router</h1>
      <BrowserRouter>
        {/* 2 - Links com react router */}
        <Navbar />
        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 7 - Página 404 */}
          {/* 9 - search */}
          <Route path="/search" element={<Search />} />
          {/* 10 - redirect */}

          <Route path="/company" element={<Navigate to="/about" />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
