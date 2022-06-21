import './App.css';

import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import {Routes , Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
    {/*  */}
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/sign-up" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
