
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from "./Pages/HomePage";
import Signup from "./Pages/Signup";
import ProductList from "./components/Product";
export default function App() {
  return (
   
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product" element={<ProductList />} />
      
      </Routes>
   
  );
};
