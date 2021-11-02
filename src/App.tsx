import React from 'react';
import './App.css';
import Body from './components/Body/body';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';


function App() {
  return (
    <div className="App">
        <Header/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default App;
