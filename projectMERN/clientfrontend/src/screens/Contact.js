import React from 'react'
import "./css/contact.css"
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>

const Contact = () => {
  return (
    <>
    <div className='contact'>
    <div className='content'>
      <h2>Contact Us</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis cupiditate sapiente veniam dolorem, deserunt corporis enim cumque aut reiciendis assumenda totam quod, laboriosam quis perferendis quisquam adipisci repudiandae. Vel, assumenda.</p>
    </div>
    <div className='container'>
        <div className='containerInfo'>
            <div className='box'>
                <div className='icon'></div>
                <div className='text'>
                    <h3>Address</h3>
                    <p>108 University Ave, <br></br>Waterloo, <br></br>ON N2J 2W2</p><br></br>
                </div>
            </div>
            <div className='box'>
                <div className='icon'></div>
                <div className='text'>
                    <h3>Phone</h3>
                    <p>437-983-5642</p><br></br>
                </div>
            </div>
            <div className='box'>
                <div className='icon'></div>
                <div className='text'>
                    <h3>Email</h3>
                    <p>fillcart3135@gmail.com</p>
                </div>
            </div>
        </div>
        <div className='contactForm'>
            <form>
                <h2>Send message</h2>
                <div className='inputBox'>
                    <input type="text" name='' required="required"/>
                    <span>Full Name</span>
                </div>
                <div className='inputBox'>
                    <input type="text" name='' required="required"/>
                    <span>Email</span>
                </div>
                <div className='inputBox'>
                    <textarea required="required"/>
                    <span>Type your message...</span>
                </div>
                <div className='inputBox'>
                    <input type="submit" name="" value="Send"/>
                </div>
            </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default Contact
