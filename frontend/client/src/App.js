import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Login,
  Register,
  Role,
  Hospitals,
  CustomerManagement,
  HomeService,
  MarketPlace,
  Settings,
  ShowcaseManagement,
  UserManagement,
  Logout,
  Rooms,
  AllRooms,
  EditHospital,
  AddHospitals,
  AllBins,
  Bins
} from "./Pages/index";


const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer position='top-center' />
      <main>
        <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id/bins" element={<Bins />} />
          <Route path="/hospitals/:hospitalId/rooms" element={<Rooms />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="edithospital/:id" element={<EditHospital />} />
          <Route path="/addhospital" element={<AddHospitals />} />
          <Route path="/home-service" element={<HomeService />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/showcase-management" element={<ShowcaseManagement />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/bins" element={<AllBins />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
