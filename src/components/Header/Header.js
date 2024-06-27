import React from 'react';
import './Header.css';

import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';

import icons from '../../config/icons';



const Header = () => {
  return (
    <div className="header section">
      <Logo />
      <div className='header__right'>
        <SearchBar placeholder='Search' />
        <Button icon={icons.upload} text="UPLOAD" />
        <div className='avatar-container'>
          <Avatar isImageProvided={true} />
        </div>
      </div>
    </div>
  );
};

export default Header;
