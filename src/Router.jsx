import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import Plant from "./pages/plant/Plant";
import Cart from "./pages/cart/Cart";
import Header from "./components/headertemp";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login"; 

function AppRouter() {
  return (
    <Routes>
    
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />

      <Route
        path="/plant"
        element={
          <>
            <Header />
            <Plant />
          </>
        }
      />
      <Route
        path="/product/:id"
        element={
          <>
            <Header />
            <ProductDetail />
          </>
        }
      />
      <Route
        path="/cart"
        element={
          <>
            <Header />
            <Cart />
          </>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;
