import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../Assets/logo.png';

export default function Header() {
  return (
    <div className="header">
      <div class="container mx-auto">
        <div className="header__wrapper flex items-center">
          <div className="header__hamburger">
            <RxHamburgerMenu />
          </div>
          <div className="header__logo">
              <div className="header__logo--wrapper">
                <a href="#" className='flex items-center'>
                  <img src={logo} alt="logo" />
                  <span>Keep</span>
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
