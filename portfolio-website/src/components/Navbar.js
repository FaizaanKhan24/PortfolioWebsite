import React from 'react'
import {Link} from 'react-router-dom';
import resumePDF from '../pdf/Mohammed Faizaan Khan Zubair Khan Resume.pdf';

function Navbar(){

    const openResume = () =>{
        //const resumeURL = 'https://drive.google.com/file/d/1-jE7Ko8jXQF6GnavCouWgHhYSfuM7zHU/view?usp=sharing';
        window.open(resumePDF, '_blank','noopener,noreferrer');
    }

  return (
    <div className='navbar'>
        <Link to='/' className='brand-name'>Faizaan Khan</Link>
        <div className='navigation-menu'>
            <ul>
                <li>
                    <Link to='/'> About</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Me</Link>
                </li>
                <li>
                    <div>
                    <button onClick={openResume} className='btn resume-btn' >
                        <span>Resume</span>
                    </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar