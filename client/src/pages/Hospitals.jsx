import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHospitals(); // ✅ Fetch hospitals on component mount
  }, []);

  // ✅ Fetch Hospital List
  const fetchHospitals = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found, please log in.");
        return;
      }

      const response = await axios.get("http://localhost:3000/api/v1/hospitals", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (response.data.hospitals) {
        setHospitals(response.data.hospitals);
      }
    } catch (error) {
      console.error("Error fetching hospitals:", error);
    }
  };

  // ✅ Delete Hospital
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:3000/api/v1/hospitals/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      alert("Hospital deleted successfully");
      fetchHospitals(); // ✅ Refresh list after deletion
    } catch (error) {
      console.error("Error deleting hospital:", error);
      alert("Failed to delete hospital");
    }
  };

  // ✅ Navigate to Edit Page
  const handleEdit = (id) => {
    navigate(`/edithospital/${id}`); // ✅ Redirect to Edit Form
  };

  return (
    <div>
      <div>
        <h3>Manage Hospitals</h3>
      </div>
      <div>
        <input type="text" placeholder="Search By Hospital name" />
        <Link to="/addhospital">Add Hospital</Link>
      </div>

      <div>
        {hospitals.length > 0 ? (
          <ul>
            {hospitals.map((hospital) => (
              <li key={hospital._id}>
                {hospital.hosp_name} - {hospital.address}
                <button onClick={() => handleEdit(hospital._id)} style={{ marginLeft: "10px" }}>
                  ✏️ Edit
                </button>
                <button onClick={() => handleDelete(hospital._id)} style={{ marginLeft: "5px", color: "red" }}>
                  🗑️ Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hospitals found.</p>
        )}
      </div>
    </div>
  );
};

export default Hospitals;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Hospitals = () => {
//   const [hospitals, setHospitals] = useState([]);

//   useEffect(() => {
//     const fetchHospitals = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         if (!token) {
//           console.error("No token found, please log in.");
//           return;
//         }

//         const response = await axios.get("http://localhost:3000/api/v1/hospitals", {
//           headers: {
//             "Authorization": `Bearer ${token}`
//           }
//         });

//         if (response.data.hospitals) {
//           setHospitals(response.data.hospitals);
//         }
//       } catch (error) {
//         console.error("Error fetching hospitals:", error);
//       }
//     };

//     fetchHospitals();
//   }, []);

//   return (
//     <div>
//       <div>
//         <h3>Manage Hospitals</h3>
//       </div>
//       <div>
//         <input type="text" placeholder="Search By Hospital name" />
//         <Link to="/addhospital">Add Hospital</Link>
//       </div>

//       <div>
//         {hospitals.length > 0 ? (
//           <ul>
//             {hospitals.map((hospital) => (
//               <li key={hospital._id}>{hospital.hosp_name} - {hospital.address}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No hospitals found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Hospitals;

// // import React, { useEffect } from 'react'
// // import { Link } from 'react-router-dom'

// // const Hospitals = () => {
// //   const [hospitals, setHospitals] = useState(null);
// //   useEffect(() => { 
// //     const fetchHospitals = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:3000/api/v1/hospitals", {
// //           headers: {
// //             "Authorization": `Bearer ${localStorage.getItem("token")}`
// //           }
// //         })
// //         if(response.data.success) {
// //           const data = await response.data.hospitals.map(hospital => )
// //         }
// //         const data = await res.json()
// //         console.log(data)
// //       } catch (error) {
// //         console.error("Error fetching hospitals", error)
// //       }
// //     }
// //   }, [])


// //   return (
// //     <div>
// //         <div>
// //           <h3>Manage Hospitals</h3>
// //         </div>
// //         <div>
// //           <input type="text" placeholder="Search By Hospital name" />
// //           <Link to="/addhospital">Add Hospital</Link>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Hospitals
