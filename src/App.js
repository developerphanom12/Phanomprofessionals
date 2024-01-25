import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VettingProcess from './Components/VettingProcess/VettingProcess';
import { Route, Routes } from 'react-router-dom';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import WhyIndia from './Components/WhyIndia/WhyIndia';
import HireReactNative from './Components/HireReactNative/HireReactNative';
import Home from './Components/Home/Home';

function App() {
  return (
    <div  >
      {/* <HireReactNative /> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/home' element={<VettingProcess />}/> */}
     </Routes>
    </div>
  );
}

export default App;
