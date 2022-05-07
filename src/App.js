import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllInventory from './Pages/AllInventory/AllInventory';

import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        {/* <Route path='allInventory' element={<AllInventory></AllInventory>}></Route> */}
        <Route path='allInventory' element={<AllInventory></AllInventory>}></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
