import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navigation/Navbar/Navbar';

import WhoWeAre from './Components/Pages/AboutUs/WhoWeAre';
import OrganizationalStructure from './Components/Pages/AboutUs/OrganizationalStructure';
import BoardMembers from './Components/Pages/AboutUs/BoardMembers';
import ManagementTeam from './Components/Pages/AboutUs/ManagementTeam';


import Home from './Components/Pages/Home/Home';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import Resources from './Components/Pages/Resources/Resources';
import News from './Components/Pages/News/News';
import FoiPortal from './Components/Pages/FoiPortal/FoiPortal';
import Contact  from './Components/Pages/Contact/Contact';
import Services  from './Components/Pages/Services//Services';

function App() {
  return (
    <div className="p-0 box-border m-0 font-raleway transition">
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/about-us' element= {<AboutUs />}/>
        <Route path='/services' element= {<Services />}/>

        <Route path='/resources' element= {<Resources />}/>
        <Route path='/news' element= {<News />}/>
        <Route path='/foi-portal' element= {<FoiPortal />}/>
        <Route path='/contact-us' element= {<Contact />}/>

        <Route path='/who-we-are' element={<WhoWeAre />}/>
        <Route path='/board-members' element={<BoardMembers />}/>
        <Route path='/management-team' element={<ManagementTeam />}/>
        <Route path='/organizational-structure' element={<OrganizationalStructure />}/>

      </Routes>
      
    </div>
  );
}

export default App;
