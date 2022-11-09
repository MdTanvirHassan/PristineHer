import React, {useState} from 'react'
import './App.css';
import Carousel from './components/Carousel/Carousel';
import Categories from './components/Categories/Categories';
import Deals from './components/Deals/Deals';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import News from './components/News/News';
import Products from './components/Products/Products';
import Viewed from './components/Viewed/Viewed';

function App() {
  const[mode,setMode]= useState('light');
  const toggleMode =()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='#ffff';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#041628';

    }
  }
  return (
    <div className="App">
        <Header mode={mode} toggleMode={toggleMode}></Header>
        <Carousel mode={mode}></Carousel>
        <Categories mode={mode}></Categories>
        <Deals mode={mode}></Deals>
        <Products mode={mode}></Products>
        <News mode={mode}></News>
        <Viewed mode={mode}></Viewed>
        <Footer mode={mode}></Footer>
        
    </div>
  );
}

export default App;
