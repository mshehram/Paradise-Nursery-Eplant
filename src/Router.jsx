import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Plant from "./pages/plant/Plant";
import Cart from "./pages/cart/Cart";
import Header from "./components/headertemp";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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

      <Route
        path="/:id"
        element={
          <>
            <Header />
            <ProductDetail />
          </>
        }
      />
    </Routes>
  );
}

export default AppRouter;
