import './App.css';
import LogIn from '../src/Components/LogIn'
import { Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Counter from './Components/Counter';
import Home from './Components/Home';
import GetProfile from './Components/GetProfile';
import CompanyInfo from './Components/CompanyInfo';
import Galary from './Components/Galary';
import { useNavigate } from 'react-router-dom';
import Navbar from './Components/NavBar';
function App() {
  const navigation = useNavigate()
  if (!localStorage.getItem("token")) {
    navigation('/')
  } 
  return (
   <div>
    <Navbar/>
      <Routes>
        <Route path="*" element={<LogIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Count" element={<Counter/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Getprofile" element={<GetProfile/>}/>
        <Route path="/CompanyInfo" element={<CompanyInfo/>}/>
        <Route path="/Galary" element={<Galary/>}/>
      </Routes>
   </div>
  );
}

export default App;
