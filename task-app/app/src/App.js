import logo from './logo.svg';
import './App.css';
import LogIn from '../src/Components/LogIn'
import { Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';

function App() {
  return (
   <div>
      <Routes>
        <Route path="*" element={<LogIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
   </div>
  );
}

export default App;
