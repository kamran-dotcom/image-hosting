import './App.css';
import AccountInfo from './components/AccountInfo';
import Header from './components/Header';
import MainContent from './components/MainContent';
import {Routes , Route, Link} from 'react-router-dom';
import Signup from './components/Signup';
function App() {
  return (
    <>
    {/* <Routes> */}
      {/* <Route path="/" element={<App/>}></Route> */}
      {/* <Route path='/sign-up' element={<Signup/>}></Route> */}
    {/* </Routes> */}
    <Header/>
    <MainContent/>
    <AccountInfo/>
    </>
  );
}

export default App;
