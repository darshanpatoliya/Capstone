import React from 'react'
import "./css/contact.css"
import Header from "./../components/Header";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>

const Contact = () => {
  return (
    <>
    <Header />
    <div className='contact'>
    <div className='content'>
      <h2>Contact Us</h2>
      <p>Contact us for giving any suggestions of possible improvements</p>
    </div>
    <div className='containers'>
        <div className='containerInfo'>
            <div className='box'>
                <div className='icon'><i class="fas fa-map-marker-alt"></i></div>
                <div className='text'>
                    <h3>Address</h3>
                    <p>108 University Ave, <br></br>Waterloo, <br></br>ON N2J 2W2</p><br></br>
                </div>
            </div>
            <div className='box'>
                <div className='icon'><i class="fas fa-phone-alt"></i></div>
                <div className='text'>
                    <h3>Phone</h3>
                    <p>437-983-5642</p><br></br>
                </div>
            </div>
            <div className='box'>
                <div className='icon'><i class="fas fa-envelope"></i></div>
                <div className='text'>
                    <h3>Email</h3>
                    <p>fillcart3135@gmail.com</p>
                </div>
            </div>
        </div>
        <div className='contactForm'>
            <form action='https://getform.io/f/ae5a7ec1-c73d-4e31-8494-0cae397e5448' method='POST'>
                <h2>Send message</h2>
                <div className='inputBox'>
                    <input type="text" name='name' required="required"/>
                    <span>Full Name</span>
                </div>
                <div className='inputBox'>
                    <input type="text" name='email' required="required"/>
                    <span>Email</span>
                </div>
                <div className='inputBox'>
                    <textarea required="required" name="message"/>
                    <span>Type your message...</span>
                </div>
                <div className='inputBox'>
                    <input type="submit" name="submit" value="Send"/>
                </div>
            </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default Contact
