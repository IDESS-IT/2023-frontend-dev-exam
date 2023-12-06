import React from 'react';
import './Header_Style.css'; // You may need to adjust the import path based on your project structure

const Header = () => {
  // You can replace the user image URL with the actual URL of the user's picture
  const userImage = 'https://ylpapp.isb.edu/user/Passport_photo_samples/Sample-1---right.jpg';

  return (
    <header className="header">
      
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        {/* You can add a search button or additional search functionality as needed */}
      </div>

      <div className="user-info">
        <img className="user-image" src={userImage} alt="User" />
        <span className="user-name">Lester Samonte</span>
      </div>    
    </header>
  );
};

export default Header;