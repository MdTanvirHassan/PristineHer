import React, {useState} from 'react'
import './App.css';
import Alert from './components/Alert/Alert';
import Carousel from './components/Carousel/Carousel';
import Categories from './components/Categories/Categories';
import Deals from './components/Deals/Deals';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import News from './components/News/News';
import Products from './components/Products/Products';
import StikyNav from './components/StikyNav/StikyNav';
import Viewed from './components/Viewed/Viewed';

function App() {
  const[mode,setMode]= useState('light');
  const toggleMode =()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='#ffff';
      showAlert("Light mode is Enable.","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#041628';
      showAlert("Dark mode is Enable.","success");
    }
  }

  const [alert,setAlert]= useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  

  return (
    <div className="App">
        <Header mode={mode} toggleMode={toggleMode}></Header>
        <StikyNav></StikyNav>
        <Alert alert={alert}></Alert>
        <Carousel mode={mode}></Carousel>
        <Categories mode={mode}></Categories>
        <Deals mode={mode} showAlert={showAlert}></Deals>
        <Products mode={mode}></Products>
        <News mode={mode}></News>
        <Viewed mode={mode}></Viewed>
        <Footer mode={mode}></Footer>
        
    </div>
  );
}

export default App;
