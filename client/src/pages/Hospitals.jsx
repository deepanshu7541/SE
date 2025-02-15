import React from 'react'
import { Link } from 'react-router-dom'

const Hospitals = () => {
  return (
    <div>
        <div>
          <h3>Manage Hospitals</h3>
        </div>
        <div>
          <input type="text" placeholder="Search By Hospital name" />
          <Link to="/addhospital">Add Hospital</Link>
        </div>
    </div>
  )
}

export default Hospitals


// import React, { useEffect, useState } from "react";

// const Hospitals = () => {
//   const [hospitals, setHospitals] = useState([]);
//   const [newHospital, setNewHospital] = useState({ name: "", location: "", contact: "" });

//   // Fetch hospitals
//   useEffect(() => {
//     fetch("http://localhost:3000/api/v1/hospitals")
//       .then((res) => res.json())
//       .then((data) => setHospitals(data))
//       .catch((err) => console.error(err));
//   }, []);

//   // Handle input change
//   const handleChange = (e) => {
//     setNewHospital({ ...newHospital, [e.target.name]: e.target.value });
//   };

//   // Add a new hospital
//   const handleAddHospital = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/v1/hospitals", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newHospital),
//       });

//       const data = await res.json();
//       setHospitals([...hospitals, data]); // Update UI
//       setNewHospital({ name: "", location: "", contact: "" }); // Clear input fields
//     } catch (error) {
//       console.error("Error adding hospital", error);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <h1>Manage hospitals</h1>
//       </div>
//       <div>
//         <input type="text" placeholder="Search By Hospital name" />
//         <Link to="/addhospital">Add Hospital</Link>
//       </div>
//     </div>
//   );
// };

// export default Hospitals;