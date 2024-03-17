import React, { useState } from 'react';
import './HamburgerMenu.css';

export default function HamburgerMenu({ onChangeProject }) {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="hamburger-menu__line"></div>
        <div className="hamburger-menu__line"></div>
        <div className="hamburger-menu__line"></div>
      </div>

      { isOpen && (
        <div className="menu">
          <button onClick={() => onChangeProject('clock')}>Orologio</button>
          <button onClick={() => onChangeProject('todo')}>To-Do List</button>
        </div>
      )}
    </div>
  );
}