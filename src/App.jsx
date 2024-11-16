import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ServicesPage from "./pages/Services/ServicesPage";
import HotDealsPage from "./pages/HotDeals/HotDealsPage";
import OffersPage from "./pages/Offers/OffersPage";
import BrandsPage from "./pages/Brands/BrandsPage";
import ShopPage from "./pages/Shop/ShopPage";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage/>}/>
          <Route path = '/hotdeals'element={<HotDealsPage/>}/>
          <Route path = '/offers' element={<OffersPage/>}/>
          <Route path = '/brands' element = {<BrandsPage/>}/>
          <Route path = '/shop' element={<ShopPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
