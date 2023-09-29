import './App.css';
import Home from './pages/Home';
import Landingpage from './pages/Landingpage';
import {Routes,Route} from 'react-router-dom';
import Watchhistory from './pages/Watchhistory';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
   <div>
    <Header />
    <Routes>
      <Route path='/' element={<Landingpage/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/watch-history' element={<Watchhistory/>}></Route>

    </Routes>
    <hr></hr>
    <Footer />
   </div>
  );
}

export default App;
