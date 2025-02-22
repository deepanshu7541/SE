import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Rooms = () => {
  const { hospitalId } = useParams();
  const [rooms, setRooms] = useState([]);
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found, please log in.");
        return;
      }

      // ✅ Fetch Hospital Details
      const hospitalRes = await axios.get(`http://localhost:3000/api/v1/hospitals/${hospitalId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setHospital(hospitalRes.data.hospital);

      // ✅ Fetch Rooms for this Hospital
      const response = await axios.get(`http://localhost:3000/api/v1/hospitals/${hospitalId}/rooms`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setRooms(response.data.rooms);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  return (
    <div>
      {hospital && <h2>Rooms in {hospital.hosp_name}</h2>}
      <ul>
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <li key={room._id}>
              <strong>Room {room.roomNumber} - {room.type}</strong>
              <br />
              ✅ <strong>Availability:</strong> {room.isAvailable ? "Available" : "Occupied"}
              <hr />
            </li>
          ))
        ) : (
          <p>No rooms available for this hospital.</p>
        )}
      </ul>
    </div>
  );
};

export default Rooms;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Rooms = () => {
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     fetchRooms();
//   }, []);

//   const fetchRooms = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/api/v1/rooms", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       setRooms(response.data.rooms);
//     } catch (error) {
//       console.error("Error fetching rooms:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Available Rooms</h2>
//       <ul>
//         {rooms.length > 0 ? (
//           rooms.map((room) => (
//             <li key={room._id}>
//               <strong>Room {room.roomNumber} - {room.type}</strong> 
//               <br />
//               🏥 <strong>Hospital:</strong> {room.hospital?.hosp_name || "Unknown"}
//               <br />
//               📍 <strong>Address:</strong> {room.hospital?.address || "Not Available"}
//               <br />
//               ✅ <strong>Availability:</strong> {room.isAvailable ? "Available" : "Occupied"}
//               <hr />
//             </li>
//           ))
//         ) : (
//           <p>No rooms available.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Rooms;