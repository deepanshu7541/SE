import { useState } from 'react';
import './Profile.css';

function Profile() {
  const [profile] = useState({
    name: 'John Doe',
    id: 'N12345',
    department: 'Surgery',
    hospital: 'Central Hospital'
  });

  return (
    <div className="profile">
      <h1>Profile</h1>
      
      <div className="profile-card">
        <div className="profile-avatar">
          <span>{profile.name[0]}</span>
        </div>
        
        <div className="profile-info">
          <div className="info-group">
            <label>Name:</label>
            <p>{profile.name}</p>
          </div>
          
          <div className="info-group">
            <label>Nurse ID:</label>
            <p>{profile.id}</p>
          </div>
          
          <div className="info-group">
            <label>Department:</label>
            <p>{profile.department}</p>
          </div>
          
          <div className="info-group">
            <label>Hospital:</label>
            <p>{profile.hospital}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;