import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.component.css'

export const Header:React.FC = () => {
  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
