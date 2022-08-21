import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddItem from './Pages/AddItem/AddItem';
import AllInventory from './Pages/AllInventory/AllInventory/AllInventory';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItems from './Pages/MyItems/MyItems';

import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Shared/Login/Login/Login';
import SignUp from './Pages/Shared/Login/SignUp/SignUp';
import UpdateItems from './Pages/UpdateItems/UpdateItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/allInventory' element={<PrivateRoute>
        <AllInventory></AllInventory>
        </PrivateRoute>}></Route>
        <Route path='/update' element={<PrivateRoute>
          <UpdateItems></UpdateItems>
        </PrivateRoute>}></Route>
        <Route path='/myItems' element={<PrivateRoute>
          <MyItems></MyItems>
        </PrivateRoute>}></Route>
        <Route path='/addItem' element={<PrivateRoute>
          <AddItem></AddItem>
        </PrivateRoute>}></Route>
        
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
