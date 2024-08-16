import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Mainpage from "./pages/mainpages/Mainpage";
import Menpage from "./pages/Men/Menpage";
import Womenpage from "./pages/Women/Womenpage";
import Admin from "./pages/Admin/Dashboard/Admin/Admin";
import Member from "./pages/Admin/Dashboard/Member/Member";
import Product from "./pages/Admin/Dashboard/Product/Product";
import { AuthProvider, useAuth } from "./auth/AuthContext";
import Locationpage from "./pages/Location/Locationpage";
import Contactpage from "./pages/Contact/Contactpage";
import NavbarAdmin from "./pages/Admin/ComponentAdmin/NavbarAdmin";
import Topbar from "./pages/Admin/ComponentAdmin/Topbar";
import EditMember from "./pages/Admin/Dashboard/Member/EditMember";
import MainpageLogin from "./pages/mainpages/MainpageLogin";
import EditProduct from "./pages/Admin/Dashboard/Product/EditProduct";
import Cart from "./components/Cart/Cart";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/features/products/productsSlice";
import Loading from "./components/Loading/Loading";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";


function App() {
  const dispatch = useDispatch();

  // Sayfa yüklendiğinde ürünler axios ile çekilecek.
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])
  const loading = useSelector(state => state.productsReducer.loading);

  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/mainpagelogin" element={<MainpageLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menpage" element={<Menpage />} />
          <Route path="/womenpage" element={<Womenpage />} />
          <Route path="/locationpage" element={<Locationpage />} />
          <Route path="/contactpage" element={<Contactpage />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />


            <Route path="/admin" element={<AuthProvider><Admin /></AuthProvider>} />
            <Route path="/member" element={<AuthProvider><Member /></AuthProvider>} />
            <Route path="/editmember/:id" element={<AuthProvider><EditMember /></AuthProvider>} />
            <Route path="/product" element={<AuthProvider><Product /></AuthProvider>} />
            <Route path="/editproduct/:id" element={<AuthProvider><EditProduct /></AuthProvider>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
