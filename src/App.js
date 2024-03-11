import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import HirePA from "./Components/CommonPages/HireIndianTalent/HireDigitalMarketing/HirePA/HirePA";
import HireIOS from "./Components/CommonPages/HireIndianTalent/HireDeveloper/HireIOS/HireIOS";
import HireReactNative from "./Components/CommonPages/HireIndianTalent/HireDeveloper/HireReactNative/HireReactNative";
import WhyIndia from "./Components/CommonPages/WhyPhanom/WhyIndia/WhyIndia";
import HowItWorks from "./Components/CommonPages/WhyPhanom/HowItWorks/HowItWorks";
import HireWebDesigner from "./Components/CommonPages/HireIndianTalent/HireDesigner/HireWebDesigner/HireWebDesigner";
import HireUiuxDesigner from "./Components/CommonPages/HireIndianTalent/HireDesigner/HireUiuxDesigner/HireUiuxDesigner";
import HireGraphic from "./Components/CommonPages/HireIndianTalent/HireDesigner/HireGraphic/HireGraphic";
import HireReactJs from "./Components/CommonPages/HireIndianTalent/HireDeveloper/HireReactJs/HireReactJs";
import HireNodejs from "./Components/CommonPages/HireIndianTalent/HireDeveloper/HireNodeJs/HireNodejs";
import HireLaravel from "./Components/CommonPages/HireIndianTalent/HireDeveloper/HireLaravel/HireLaravel";
import HireShopify from "./Components/CommonPages/HireIndianTalent/HireDeveloper/HireShopify/HireShopify";
import HirePHP from "./Components/CommonPages/HireIndianTalent/HireDeveloper/HirePHP/HirePHP";
import HireWordPress from "./Components/CommonPages/HireIndianTalent/HireDeveloper/HireWordPress/HireWordPress";
import HireAndroid from "./Components/CommonPages/HireIndianTalent/HireDeveloper/HireAndroid/HireAndroid";
import HireSoftware from "./Components/CommonPages/HireIndianTalent/HireDeveloper/HireSoftware/HireSoftware";
import HireMobileApp from "./Components/CommonPages/HireIndianTalent/HireDeveloper/HireMobileApp/HireMobileApp";
import Home from "./Components/CommonPages/Home/Home";
import VettingProcess from "./Components/CommonPages/WhyPhanom/VettingProcess/VettingProcess";
import HirePpcExpert from "./Components/CommonPages/HireIndianTalent/HireDigitalMarketing/HirePpcExpert/HirePpcExpert";
import HireSeoExpert from "./Components/CommonPages/HireIndianTalent/HireDigitalMarketing/HireSeoExpert/HireSeoExpert";
import InnerPages from "./Components/Buyer/InnerPages/InnerPages";
import InternalPages from "./Components/Buyer/InternalPages/InternalPages";
import Layout from "./Components/MainLayouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./Components/Seller/TopNavPages/Dashboard/Dashboard";
import Orders from "./Components/Seller/TopNavPages/MyBusiness/orders/Orders";
import Gigs from "./Components/Seller/TopNavPages/MyBusiness/gigs/Gigs";
import Profile from "./Components/Seller/TopNavPages/MyBusiness/profile/Profile";
import Earnings from "./Components/Seller/TopNavPages/MyBusiness/earning/Earnings";
import Overview from "./Components/Seller/TopNavPages/Analytics/Overview";
import RepeatBusiness from "./Components/Seller/TopNavPages/Analytics/RepeatBusiness";
import EditPage from "./Components/Seller/edit/EditPage";
import Message from "./Components/MainLayouts/Message";
import PageNF from "./Components/Important/PageNF";
import { loaderAction } from "./redux/users/action";
import { useEffect } from "react";
import Loader from "./Components/Important/Loader";
import Analytics from "./Components/Seller/TopNavPages/Analytics/Analytics";

function App() {
  const userCheck = useSelector((state) => state?.users?.userCheck);
  const userDetails = useSelector((state) => state?.users.user);
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loaderAction(false));
  });
 
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/message" element={<Message />} />

          {/* buyer pagess--------------------------------------------------------------- */}
          <Route path="/innerpages" element={<InnerPages />} />
          <Route path="/internalpage" element={<InternalPages />} />
          {/* seller pages ---------------------------------------------------------------*/}

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/repeatbusiness" element={<RepeatBusiness />} />

          {/* common pages -------------------------------------------------------------- */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNF />} />
          <Route path="/vettingprocess" element={<VettingProcess />} />
          <Route path="/hiremobile" element={<HireMobileApp />} />
          <Route path="/hiresoftware" element={<HireSoftware />} />
          <Route path="/hireandroid" element={<HireAndroid />} />
          <Route path="/hirewordpress" element={<HireWordPress />} />
          <Route path="/hirephp" element={<HirePHP />} />
          <Route path="/hireshopify" element={<HireShopify />} />
          <Route path="/hirelaravel" element={<HireLaravel />} />
          <Route path="/hirenode" element={<HireNodejs />} />
          <Route path="/hirereact" element={<HireReactJs />} />
          <Route path="/hiregraphic" element={<HireGraphic />} />
          <Route path="/hireuiux" element={<HireUiuxDesigner />} />
          <Route path="/hireweb" element={<HireWebDesigner />} />
          <Route path="/hirepa" element={<HirePA />} />
          <Route path="/hireseo" element={<HireSeoExpert />} />
          <Route path="/hireppc" element={<HirePpcExpert />} />
          <Route path="/hireios" element={<HireIOS />} />
          <Route path="/hirereactnative" element={<HireReactNative />} />
          <Route path="/whyindia" element={<WhyIndia />} />
          <Route path="/howitworks" element={<HowItWorks />} />
        </Routes>
        <Loader />  
      </Layout>
    </div>
  );
}

export default App;
