import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Plant from "./pages/plant/Plant";
import Cart from "./pages/cart/Cart";
import Header from "./components/headertemp";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
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
