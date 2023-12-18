import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddMedication from './components/AddMedication';
import MedicationReminder from './components/MedicationReminder';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-medication" element={<AddMedication />} />
          <Route path="/medication-reminder" element={<MedicationReminder />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
