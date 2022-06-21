import React from 'react'
import './Contact.css';

function Contact() {

  const mailToEmail = () => {
    window.location.href = "mailto:mzubair1@binghamton.edu";
  }

  return (
    <div className='contact'>
      <h2 className='contact-heading'>
        Hi there, let's have a talk
      </h2>
      <div className='contact-body'>
        Currently, I'm in the market in search of a Full-time/Intern Software Engineer. We can talk about interesting opportunities or just have a chat.  
      </div>
      <div>
        <button onClick={mailToEmail} className='contact-btn'>
          Say Hello!
        </button>
      </div>
    </div>
  )
}

export default Contact