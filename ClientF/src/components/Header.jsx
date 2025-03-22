// "use client"
// import "./Header.css"

// const Header = () => {
//   const handleLogout = () => {
//     // Implement logout functionality
//     console.log("Logging out...")
//   }

//   return (
//     <div className="header">
//       {/* <div className="search-bar">
//         <input type="text" placeholder="Search inventory..." />
//         <button className="search-button">Search</button>
//       </div> */}
//       <div className="user-section">
//         <div className="user-info">
//           <span className="user-name">Dr. John Smith</span>
//           <span className="user-role">Admin</span>
//         </div>
//         <div className="user-avatar">JS</div>
//         <button className="logout-button" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Header





import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';
import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const handleLogout = () => {
    // Implement logout functionality
    navigate("/logout");
    console.log('Logging out...');
  };

  return (
    <div className="header">
      <div className="user-section">
        <div className="user-info">
          <span className="user-name">Dr. John Smith</span>
          <span className="user-role">Admin</span>
        </div>
        <div className="user-avatar">
          <Link to="/profile" className="avatar-link">JS</Link>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;