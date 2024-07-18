import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './screens/signup/Signup';
import React from 'react';
import RestaurantForm from './screens/signup/RestaurantForm';
import Dashboard from './components/sidebar/Dashboard';
import LoginForm from './screens/login/LoginForm';
import Orders from './components/orders/Orders';
import Menu from './components/menu/Menu';
import Logout from './components/logout/Logout';
import Help from './components/help/Help';
import Sidebar from './components/sidebar/Sidebar';
import TermCondition from './screens/term&condtion/Term&Condition';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<LoginForm/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='proceed' element={<RestaurantForm/>}/>
      {/* Sidebar route */}
      <Route path='/sidebar' element={<Sidebar/>}>
        <Route index element={<Dashboard/>}/>
        {/* Other sidebar routes */}
        <Route path='orders' element={<Orders/>}/>
        <Route path='menu' element={<Menu/>}/>
        <Route path="terms&conditions" element={<TermCondition />} />
        <Route path='helpcenter' element={<Help/>}/>
        <Route path='logout' element={<Logout/>}/>
      </Route>
      {/* Route for Terms and Conditions outside the Sidebar route */}
     </Routes>
    </>
  );
}

export default App;
