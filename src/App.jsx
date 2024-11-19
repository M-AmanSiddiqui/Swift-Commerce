
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from "./Pages/HomePage";
import Signup from "./Pages/Signup";
import ProductList from "./components/Product";
import ProductsDetail from "./Pages/ProductsDetail";
export default function App() {
  return (
   
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductsDetail />} />
      </Routes>
   
  );
};
