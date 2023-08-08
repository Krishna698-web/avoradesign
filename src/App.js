import "./App.css";
import Home from "./Components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Pages/Products";
import Aboutus from "./Components/Pages/Aboutus";
import Navbar from "./Components/Layout/Navbar";
import ProductDetails from "./Components/Pages/ProductDetails";
import Footer from "./Components/Layout/Footer";
import Services from "./Components/Pages/Services";
import Widget from "./Components/Layout/Widget";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="services" element={<Services />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
      <Widget />
      <Footer />
    </div>
  );
}

export default App;
