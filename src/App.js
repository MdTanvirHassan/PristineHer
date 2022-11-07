import React from 'react'
import './App.css';
import Carousel from './components/Carousel/Carousel';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Carousel></Carousel>
        <Categories></Categories>
        
    </div>
  );
}

export default App;
