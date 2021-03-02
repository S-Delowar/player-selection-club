import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2 className='head-line'>Players Selection Club</h2>
            <nav>
                <a href="#home">Home</a>
                <a href="#user">More Players</a>
                <a href="#friend">Club</a>
            </nav>
        </div>
    );
};

export default Header;