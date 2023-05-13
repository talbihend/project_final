import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/home/Home';
import SignIn from './Components/connect/SignIn';
import SignUp from './Components/connect/SignUp';
import NavBar from './Components/navbars/NavBar';
import Profile from './Components/profile/Profileee';
import ContactUs from './Components/contact/ContactUs';
import WomenList from './Components/clothes/women/WomenList';
import ManList from './Components/clothes/man/ManList';
import ChildList from './Components/clothes/child/ChildList';
import BabyList from './Components/clothes/baby/BabyList';
import AddNewPiece from './Components/admin/AddNewPiece';
import AdminPieceList from './Components/admin/AdminPieceList';

function App() {
  return (
    <div className="App">
     
     <Router>
      <NavBar/>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/signin" element={<SignIn/>}/>
          <Route  path="/signup" element={<SignUp/>}/>
          <Route  path="/profile" element={<Profile/>}/>
          <Route  path="/contactus" element={<ContactUs/>}/>
          <Route  path="/women" element={<WomenList/>}/>
          <Route  path="/man" element={<ManList/>}/>
          <Route  path="/child" element={<ChildList/>}/>
          <Route  path="/baby" element={<BabyList/>}/>
          <Route  path="/adminDashboard" element={
                                         <>
                                         <AddNewPiece/>
                                         <AdminPieceList/>
                                         </> } />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
