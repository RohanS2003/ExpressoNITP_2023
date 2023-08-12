
import { FaMapMarked, FaFacebook , FaInstagram , FaLinkedin } from 'react-icons/fa'
import VisitCounter from './visitCount.js';
import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer-parent-parent'>
          
      <footer>

        <div className="footer-content">
            
             <h1 > Contact Us</h1>
            <ul className="socials">
                <li className='footer-li'><a  href="https://www.facebook.com/expresso.nitp/"><FaFacebook className="footer-i"/></a></li>
                <li className='footer-li'><a  href="https://instagram.com/expresso_nitp?igshid=17svyt8qfdx46"><FaInstagram className="footer-i"/></a></li>
                <li className='footer-li'><a  href="https://www.linkedin.com/company/expresso-nitp"><FaLinkedin className="footer-i"/></a></li>
                <li className='footer-li'><a href="https://www.google.com/maps/place/National+Institute+of+Technology+Patna,+Patna+University+Campus,+Patna,+Bihar+800005/@25.6204054,85.1694904,17z/data=!3m1!4b1!4m5!3m4!1s0x39ed58dce1098af7:0xd3ab2e3afc171805!8m2!3d25.6207284!4d85.1728858"><FaMapMarked className='footer-i'/></a></li>
                
            </ul>
            <a className='footer-a' href='mailto:expresso.nit@gmail.com'>
                        expresso.nit@gmail.com
                        </a>
                    <p className='footer-p'>NIT Patna</p>

                        
                </div>
         
       
        <div>
      <VisitCounter />
      {/* Your other website content goes here */}
    </div>
  
        <div className="footer-bottom">
            <p className='footer-p foot-p'> &copy;Expresso NITP 2023</p>
        </div>
        
        </footer>
       
    </div>
  )
}

export default Footer