import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Listmedicine from '../../Crud/Listmedicine/Listmedicine';
import Addmedicine from '../Add medicine/Addmedicine';
import ViewMedicine from '../viewMedicine/ViewMedicine';
import Logout from '../Logout/Logout';
import { TokenProvider } from '../../contect/context';
import Viewlist from '../Viewlist/Viewlist';


function Layout() {
  return (
    <>
      <Router>
        < TokenProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<Listmedicine />} />
          <Route path="/add" element={<Addmedicine />} />
          <Route path="/edit/:medid" element={<ViewMedicine />} />
         
          <Route path="/logout" element={<Logout />} />
          <Route path="/view/:medid" element={<Viewlist/>} />
        </Routes>
        </TokenProvider>
      </Router>
    </>
  );
}

export default Layout;


