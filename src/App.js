import React from 'react'
import {Route,Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import DeepTech from './components/DeepTech';
import DataPrivacy from './components/DataPrivacy';
import Healthcare from './components/Healthcare';
import Agriculture from './components/Agriculture';
import Privacy from './components/Privacy';
import Conversation from './components/Conversation';
import Retail from './components/Retail';
import About from './components/FoodprintCalculator';
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import 'bootstrap/dist/css/bootstrap.css'
import Container from "@mui/material/Container";
import background from "./images/background.png";

const App = () => {
  
  return (   
    <>
      <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element = {<Home/>}>
        </Route>

        <Route exact path='/ProductDevelopment' element = {<DeepTech/>}>
        </Route>

        <Route exact path='/DataPrivacy' element = {<DataPrivacy/>}>
        </Route>

        <Route exact path='/industries/healthcare' element = {<Healthcare/>}>
        </Route>

        <Route exact path='/industries/agriculture' element = {<Agriculture/>}>
        </Route>

        <Route exact path='/industries/retail' element = {<Retail/>}>
        </Route>

        <Route exact path='/industries/conversational' element = {<Conversation/>}>
        </Route>

        <Route exact path='/industries/privacy' element = {<Privacy/>}>
        </Route>

      </Routes>
      </div>
      <Footer/>
    </>
  )
};

export default App
