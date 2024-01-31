import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VettingProcess from './Components/VettingProcess/VettingProcess';
import { Route, Routes } from 'react-router-dom';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import WhyIndia from './Components/WhyIndia/WhyIndia';
import HireReactNative from './Components/HireReactNative/HireReactNative';
import Home from './Components/Home/Home';
import HirePpcExpert from './Components/HirePpcExpert/HirePpcExpert';
import HireSeoExpert from './Components/HireSeoExpert/HireSeoExpert';
import HirePA from './Components/HirePA/HirePA';
import HireWebDesigner from './Components/HireWebDesigner/HireWebDesigner';
import HireUiuxDesigner from './Components/HireUiuxDesigner/HireUiuxDesigner';
import HireGraphic from './Components/HireGraphic/HireGraphic';
import HireReactJs from './Components/HireReactJs/HireReactJs';
import HireNodejs from './Components/HireNodeJs/HireNodejs';
import HireLaravel from './Components/HireLaravel/HireLaravel';
import HireShopify from './Components/HireShopify/HireShopify';
import HirePHP from './Components/HirePHP/HirePHP';
import HireWordPress from './Components/HireWordPress/HireWordPress';
import HireAndroid from './Components/HireAndroid/HireAndroid';
import HireSoftware from './Components/HireSoftware/HireSoftware';
import HireMobileApp from './Components/HireMobileApp/HireMobileApp';

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
