import React from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Router from './Router';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Router/>
      <Footer/>
    </div>
  );
};

export default App;