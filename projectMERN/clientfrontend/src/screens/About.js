import React from 'react'
import Varshil from "../images/Varshil.jpeg"
import Darshan from "../images/Darshan.jpeg"
import Jenil from "../images/Jenil.jpeg"
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import "./css/about.css"
import Header from '../components/Header';


const About = () => {
  return (
    <>
    <Header/>
    <div className='main'>
      <div className='containerss'>
        <div className='card'>
          <div className='content'>
            <div className='imgBx'>
              <img src={Varshil} />
            </div>
            <div className='contentBx'>
              <h4>Varshil Patel</h4>
              <h5>Front-end</h5>
            </div>
            <div className='sci'>
              <a href='#'><BsFacebook /></a>
              <a href='#'><BsInstagram /></a>
              <a href='#'><BsLinkedin /></a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='content'>
            <div className='imgBx'>
              <img src={Darshan} />
            </div>
            <div className='contentBx'>
              <h4>Darshan Patoliya</h4>
              <h5>Back-end</h5>
            </div>
            <div className='sci'>
              <a href='#'><BsFacebook /></a>
              <a href='#'><BsInstagram /></a>
              <a href='#'><BsLinkedin /></a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='content'>
            <div className='imgBx'>
              <img src={Jenil} />
            </div>
            <div className='contentBx'>
              <h4>Jenil Patel</h4>
              <h5>UML-Designer</h5>
            </div>
            <div className='sci'>
              <a href='#'><BsFacebook /></a>
              <a href='#'><BsInstagram /></a>
              <a href='#'><BsLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
