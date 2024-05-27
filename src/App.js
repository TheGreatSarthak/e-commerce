import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Order/Order";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Home from "./customer/pages/Home/Home";
import OrderDetails from "./customer/components/Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./routes/CustomerRoutes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CustomerRoutes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
