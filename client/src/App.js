import React from 'react';
import Follow from './components/Follow';
import { ToastContainer } from 'react-toastify';
import { DateSharmo } from './components/DateSharmo';
import { MapChart } from './components/MapChart'

const App = () => {
  return (
    <>
        <div className='NavBar'>
      <Follow />
    </div>
    <MapChart/>
        <DateSharmo />
      <ToastContainer />

    </>
  );
};

export default App;