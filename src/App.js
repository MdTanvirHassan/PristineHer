import React from 'react'
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
  return (
    <div className="App">
        <Header></Header>
        <Carousel></Carousel>
        <Categories></Categories>
        <Deals></Deals>
        <Products></Products>
        <News></News>
        <Viewed></Viewed>
        <Footer></Footer>
        
    </div>
  );
}

export default App;
