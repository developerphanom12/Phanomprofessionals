import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import VettingProcess from './Components/VettingProcess/VettingProcess';
import { Route, Routes } from 'react-router-dom';
// import HowItWorks from './Components/HowItWorks/HowItWorks';
// import WhyIndia from './Components/WhyIndia/WhyIndia';
// import HireReactNative from './HireIndianTalent/HireDeveloper/HireReactNative/HireReactNative';
// import Home from './Components/Home/Home';
// import HirePpcExpert from './HireIndianTalent/HireDigitalMarketing/HirePpcExpert/HirePpcExpert';
// import HireSeoExpert from './HireIndianTalent/HireDigitalMarketing/HireSeoExpert/HireSeoExpert';
// import HirePA from './HireIndianTalent/HireDigitalMarketing/HirePA/HirePA';
// import HireWebDesigner from './HireIndianTalent/HireDesigner/HireWebDesigner/HireWebDesigner';
// import HireUiuxDesigner from './HireIndianTalent/HireDesigner/HireUiuxDesigner/HireUiuxDesigner';
// import HireGraphic from './HireIndianTalent/HireDesigner/HireGraphic/HireGraphic';
// import HireReactJs from './HireIndianTalent/HireDeveloper/HireReactJs/HireReactJs';
// import HireNodejs from './HireIndianTalent/HireDeveloper/HireNodeJs/HireNodejs';
// import HireLaravel from './HireIndianTalent/HireDeveloper/HireLaravel/HireLaravel';
// import HireShopify from './HireIndianTalent/HireDeveloper/HireShopify/HireShopify';
// import HirePHP from './HireIndianTalent/HireDeveloper/HirePHP/HirePHP';
// import HireWordPress from './HireIndianTalent/HireDeveloper/HireWordPress/HireWordPress';
// import HireAndroid from './HireIndianTalent/HireDeveloper/HireAndroid/HireAndroid';
// import HireSoftware from './HireIndianTalent/HireDeveloper/HireSoftware/HireSoftware';
import HireMobileApp from './HireIndianTalent/HireDeveloper/HireMobileApp/HireMobileApp';

function App() {
  return (
    <div  >
      <HireMobileApp />
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        {/* <Route path='/home' element={<VettingProcess />}/> */}
     </Routes>
    </div>
  );
}

export default App;
