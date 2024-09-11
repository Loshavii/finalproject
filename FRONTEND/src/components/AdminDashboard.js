// import React from 'react';
// import './CSS/AdminDashboard.css';

// function AdminDashboard() {
//   return (
//     <div className="admin-dashboard">
//     <div className="dashboard">
//       <header className="header">
//         <div className="logo">
//           {/* Placeholder for Logo */}
//           <img src="path/to/logo.png" alt="Refine Logo" />
//         </div>
//       </header>
      
//       <main className="content">
//         <h1>Welcome onboard!</h1>
//         <p>Your configuration is completed.</p>
        
//         <div className="grid">
//           <div className="grid-item">
//             <h3>Documentation</h3>
//             <p>Learn about the technical details of using refine in your projects.</p>
//             <a href="#">Learn more →</a>
//           </div>
          
//           <div className="grid-item">
//             <h3>Tutorial</h3>
//             <p>Learn how to use refine by building a CRUD app, from scratch to full launch.</p>
//             <a href="#">Learn more →</a>
//           </div>
          
//           <div className="grid-item">
//             <h3>Examples</h3>
//             <p>A collection of reference applications you can use as a starting point.</p>
//             <a href="#">Explore →</a>
//           </div>
          
//           <div className="grid-item">
//             <h3>Community</h3>
//             <p>Join our Discord and keep up with the latest news.</p>
//             <a href="#">Join now →</a>
//           </div>
//         </div>
//       </main>
//     </div>
//     </div>
//   );
// }

// export default AdminDashboard;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/AdminDashboard.css';
import logo from './logo.png'
function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = sessionStorage.getItem('role');
    if (role !== 'admin') {
      navigate('/'); // Redirect to login if not admin
    }
  }, [navigate]);

  return (
    <div className="admin-dashboard">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </header>
      <main className="content">
        <h1>Welcome onboard!</h1>
        <p>Your configuration is completed.</p>
        <div className="grid">
          <div className="grid-item">
            <h3>Documentation</h3>
            <p>Learn about the technical details of using the platform in your projects.</p>
            <a href="#">Learn more →</a>
          </div>
          <div className="grid-item">
            <h3>Tutorial</h3>
            <p>Learn how to build a CRUD app, from scratch to launch.</p>
            <a href="#">Learn more →</a>
          </div>
          <div className="grid-item">
            <h3>Examples</h3>
            <p>Explore a collection of reference applications.</p>
            <a href="#">Explore →</a>
          </div>
          <div className="grid-item">
            <h3>Community</h3>
            <p>Join our Discord and stay updated.</p>
            <a href="#">Join now →</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
