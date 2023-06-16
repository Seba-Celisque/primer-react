import Layout from "./components/layaout/Layout";
import CartContainer from "./components/pages/cart/CartContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsListContainer from "./components/pages/productList/ProductsListContainer";
import ProductDetailContainer from "./components/pages/productDetail/ProductDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ProductsListContainer />} />
          <Route path="/itemDetail" element={<ProductDetailContainer />} />
          <Route path="/cartWidgwt" element={<CartContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
