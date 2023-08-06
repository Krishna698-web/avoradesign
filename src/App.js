import "./App.css";
import Home from "./Components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Pages/Products";
import Aboutus from "./Components/Pages/Aboutus";
import Navbar from "./Components/Header/Navbar";
import ProductDetails from "./Components/Pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
