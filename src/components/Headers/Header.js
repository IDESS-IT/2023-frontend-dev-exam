import React from 'react';
import './Header_Style.css';
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {
  const userImage = 'https://ylpapp.isb.edu/user/Passport_photo_samples/Sample-1---right.jpg';

  return (
    <header className="header">
      
      <div className="search-box">
      <SearchIcon className="search-icon" />
        <input type="text" placeholder="Search here..." />
      </div>

      <div className="user-info">
        <img className="user-image" src={userImage} alt="User" />
        <div className="user-desc">
        <span className="user-name">Lester Samonte</span>
        <span className="user-title">Campus Boss</span>
        </div>
        
      </div>    
    </header>
  );
};

export default Header;