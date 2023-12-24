import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
      <header>
        <Link to="/">Girişyap</Link>
        <Link to="/home">Anasayfa</Link>
      </header>
    );
};

export default Header;