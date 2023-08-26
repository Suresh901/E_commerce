import {
 BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <BrowserRouter>
       
            <Navbar />
              <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/product/:id' element={<Product />}/>
                  <Route path='/products' element={<Products />}/>
              </Routes>
              <Footer/>
     
    
    </BrowserRouter>
  );
}

export default App;
