import React from 'react';
import Follow from './components/Follow';
import MainPage from './components/MainPage';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
        <div className='NavBar'>
      <Follow />
    </div>
    <div>
        <MainPage/>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;