import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import HirePA from "./Components/HireIndianTalent/HireDigitalMarketing/HirePA/HirePA";
import HireIOS from "./Components/HireIndianTalent/HireDeveloper/HireIOS/HireIOS";
import HireReactNative from "./Components/HireIndianTalent/HireDeveloper/HireReactNative/HireReactNative";
import WhyIndia from "./Components/WhyPhanom/WhyIndia/WhyIndia";
import HowItWorks from "./Components/WhyPhanom/HowItWorks/HowItWorks";
import HireWebDesigner from "./Components/HireIndianTalent/HireDesigner/HireWebDesigner/HireWebDesigner";
import HireUiuxDesigner from "./Components/HireIndianTalent/HireDesigner/HireUiuxDesigner/HireUiuxDesigner";
import HireGraphic from "./Components/HireIndianTalent/HireDesigner/HireGraphic/HireGraphic";
import HireReactJs from "./Components/HireIndianTalent/HireDeveloper/HireReactJs/HireReactJs";
import HireNodejs from "./Components/HireIndianTalent/HireDeveloper/HireNodeJs/HireNodejs";
import HireLaravel from "./Components/HireIndianTalent/HireDeveloper/HireLaravel/HireLaravel";
import HireShopify from "./Components/HireIndianTalent/HireDeveloper/HireShopify/HireShopify";
import HirePHP from "./Components/HireIndianTalent/HireDeveloper/HirePHP/HirePHP";
import HireWordPress from "./Components/HireIndianTalent/HireDeveloper/HireWordPress/HireWordPress";
import HireAndroid from "./Components/HireIndianTalent/HireDeveloper/HireAndroid/HireAndroid";
import HireSoftware from "./Components/HireIndianTalent/HireDeveloper/HireSoftware/HireSoftware";
import HireMobileApp from "./Components/HireIndianTalent/HireDeveloper/HireMobileApp/HireMobileApp";
import Home from "./Components/Home/Home";
import Layout from "./Components/MainLayouts/Layout";
import VettingProcess from "./Components/WhyPhanom/VettingProcess/VettingProcess";
import HirePpcExpert from "./Components/HireIndianTalent/HireDigitalMarketing/HirePpcExpert/HirePpcExpert";
import HireSeoExpert from "./Components/HireIndianTalent/HireDigitalMarketing/HireSeoExpert/HireSeoExpert";
import InnerPages from "./Components/InnerPages/InnerPages";
import InternalPages from "./Components/InternalPages/InternalPages";


function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/innerpages" element={<InnerPages/>} />
          <Route path="/internalpage" element={<InternalPages/>}/>
          <Route path="/" element={<Home />} />
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
      </Layout>
    </div>
  );
}

export default App;
