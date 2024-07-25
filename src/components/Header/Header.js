import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';

import icons from '../../config/icons';



const Header = () => {
  return (
    <div className="header section">
      <Link to="/video">
        <Logo />
      </Link>
      <div className='header__right'>
        <SearchBar placeholder='Search' />
        <Link to={"/upload"}>
          <Button icon={icons.upload} text="UPLOAD" />
        </Link>
        <div className='avatar-container'>
          <Avatar isImageProvided={true} />
        </div>
      </div>
    </div>
  );
};

export default Header;
