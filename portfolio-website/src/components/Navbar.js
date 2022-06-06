import React from 'react'
import {Link} from 'react-router-dom';

function Navbar(){
  return (
    <div>
        Navbar Test
        <div>
            <li>
                <Link to='/'> About</Link>
            </li>
            <li>
                <Link to='/projects'>Projects</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </div>
    </div>
  )
}

export default Navbar