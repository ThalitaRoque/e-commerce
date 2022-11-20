import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Carousel  from './components/Carousel/Carousel';
import ButtonCart from './components/ButtonCart/ButtonCart';
import ContainerProducts from './components/ContainerProducts/ContainerProducts';


function App() {
  return (
  <>
   <Carousel/>
   <Navbar />
   <ButtonCart/>
   <ContainerProducts/>
   <Footer/>

  
   </> 
   
  );
}

export default App;
