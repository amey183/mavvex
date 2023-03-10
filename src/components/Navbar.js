import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink, Link, Route } from 'react-router-dom'
import logo from '../images/logoipsum-280.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-primary bg-light">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <b><NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink></b>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Use Cases
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <b><NavLink className="nav-link" to="/ProductDevelopment">Deep Tech Product Development</NavLink></b>
                <b><NavLink className="nav-link" to="/DataPrivacy">Enabling Data Privacy in Machine Learning Model</NavLink></b>
                <b><NavLink className="nav-link" to="/LanguageTranscriptionandTranslationServices">Better Language Transcription and Translation Services</NavLink></b>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Industries
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <b><NavLink className="nav-link" to="/industries/healthcare">Healthcare</NavLink></b>
                <b><NavLink className="nav-link" to="/industries/agriculture">Agriculture</NavLink></b>
                <b><NavLink className="nav-link" to="/industries/retail">Retail</NavLink></b>
                <b><NavLink className="nav-link" to="/industries/conversational">Conversational AI</NavLink></b>
                <b><NavLink className="nav-link" to="/industries/privacy">Privacy</NavLink></b>
              </div>
            </li>

            <li className="nav-item">
              <b><NavLink className="nav-link" to="/customers">Customers</NavLink></b>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Research
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <b><NavLink className="nav-link" to="/publications">Publications</NavLink></b>
                <b><NavLink className="nav-link" to="/ResearchTeam">Research Team</NavLink></b>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Company
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <b><NavLink className="nav-link" to="/about">About Us</NavLink></b>
                <b><NavLink className="nav-link" to="/contact">Contact Us</NavLink></b>
                <b><NavLink className="nav-link" to="/careers">Careers</NavLink></b>
              </div>
            </li>

            <li className="nav-item">
              <b><NavLink className="nav-link" to="/blog">Blog</NavLink></b>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

{/* <li className="nav-item">
  <b><NavLink className="nav-link" to="/FoodprintCalculator">Foodprint Calculator</NavLink></b>
</li>
<li className="nav-item">
  <b><NavLink href="https://cosylab.iiitd.edu.in/recipedb/" className="nav-link" to={{ pathname: "https://cosylab.iiitd.edu.in/recipedb/" }} target="_blank">RecipeDB</NavLink></b>
</li> 
<li className="nav-item">
  <b><NavLink className="nav-link" to="/contact">Contact Us</NavLink></b>
</li>
<li className="nav-item">
  <b><NavLink className="nav-link" to="/login">Sign In</NavLink></b>
</li>
<li className="nav-item">
  <b><NavLink className="nav-link" to="/signup">Register</NavLink></b>
</li> */}