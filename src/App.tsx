import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Drawer } from './Components/Drawer';
import LandingPage from './Pages/LandingPage';
import Rooms from './Pages/Rooms';
import LivingRoom from './Pages/LivingRoom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <Drawer>
            <LandingPage></LandingPage>
          </Drawer>
        } />
        <Route path="/home" element={
          <Drawer>
            <LandingPage></LandingPage>
          </Drawer>
        } />
        <Route path="/rooms" element={
          <Drawer>
            <Rooms></Rooms>
          </Drawer>
        } />
        <Route path="/rooms/livingroom" element={
          <Drawer>
            <LivingRoom></LivingRoom>
          </Drawer>
        } />
      </Routes>



    </div>
  );
}

export default App;
