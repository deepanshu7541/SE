import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";

const Rooms = () => {
  const { hospitalId } = useParams();
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/hospitals/${hospitalId}/rooms`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setRooms(response.data.rooms);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  return (
    <div className="flex">
      <div
        className={`w-1/4 h-auto h-screen bg-gray-200 text-gray-500 ${
          showMenu ? "" : "hidden"
        } lg:block`}>
        <Menubar />
      </div>
      <div className="w-3/4 h-screen">
        <Navbar pagename={"Rooms in This Hospital"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        {/* <p>User Management</p> */}
        <div>
      {/* <h2>Rooms in This Hospital</h2> */}
      <ul>
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <li key={room._id}>
              <strong>Room {room.roomNumber} - {room.type}</strong>
              <br />
              ✅ <strong>Availability:</strong> {room.isAvailable ? "Available" : "Occupied"}
              <br />
              <button onClick={() => navigate(`/rooms/${room._id}/bins`)} style={{ marginTop: "5px" }}>
                📦 View Bins
              </button>
              <hr />
            </li>
          ))
        ) : (
          <p>No rooms available for this hospital.</p>
        )}
      </ul>
    </div>
      </div>
    </div>
  );
};

export default Rooms;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const Rooms = () => {
//   const { hospitalId } = useParams();
//   const [rooms, setRooms] = useState([]);
//   const [hospital, setHospital] = useState(null);

//   useEffect(() => {
//     fetchRooms();
//   }, []);

//   const fetchRooms = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         console.error("No token found, please log in.");
//         return;
//       }

//       // ✅ Fetch Hospital Details
//       const hospitalRes = await axios.get(`http://localhost:3000/api/v1/hospitals/${hospitalId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setHospital(hospitalRes.data.hospital);

//       // ✅ Fetch Rooms for this Hospital
//       const response = await axios.get(`http://localhost:3000/api/v1/hospitals/${hospitalId}/rooms`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setRooms(response.data.rooms);
//     } catch (error) {
//       console.error("Error fetching rooms:", error);
//     }
//   };

//   return (
//     <div>
//       {hospital && <h2>Rooms in {hospital.hosp_name}</h2>}
//       <ul>
//         {rooms.length > 0 ? (
//           rooms.map((room) => (
//             <li key={room._id}>
//               <strong>Room {room.roomNumber} - {room.type}</strong>
//               <br />
//               ✅ <strong>Availability:</strong> {room.isAvailable ? "Available" : "Occupied"}
//               <hr />
//             </li>
//           ))
//         ) : (
//           <p>No rooms available for this hospital.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Rooms;