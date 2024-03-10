import React, { useContext } from 'react';
import camera from '../assets/camera.jpg';
import doctor from '../assets/doctor.jpg';
import chatBot from '../assets/chatbot.avif';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const Home = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className='flex justify-center '>
      <div className=' flex flex-col justify-around m-10'>
        <div className='mr-5 rounded-lg shadow-2xl w-56 h-52 flex flex-col pt-4 items-center mb-16'>
          <img className='rounded-full' width={80} src={camera} alt='' />
          <button   onClick={() => {
                  navigate('/display');
                }} className='m-5 px-2 py-1 bg-red-500 text-white rounded-md'>Emergency</button>
        </div>
        <div className='rounded-lg shadow-2xl w-56 h-52 flex flex-col pt-4 items-center'>
          <img className='b-10 rounded-full' width={80} src={doctor} alt='' />
          <div className='m-5 flex flex-col'>
            {user ? (
              <button
                onClick={() => {
                  navigate('/doctor');
                }}
                className='px-2 py-1 bg-green-500 text-white rounded-md'
              >
                Home
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    navigate('/login');
                  }}
                  className='px-2 py-1 bg-blue-500 text-white rounded-md'
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    navigate('/register');
                  }}
                  className='m-2 px-4 py-1 bg-blue-500 text-white rounded-md'
                >
                  Register
                </button>
              </>
            ) }
          </div>
        </div>
        {/* robot */}
        <div className='mr-5 rounded-lg shadow-2xl w-56 h-52 flex flex-col pt-4 items-center mt-16'>
          <img className='rounded-full' width={80} src={chatBot} alt='' />
          <button className='m-5 px-2 py-1 bg-blue-500  text-white rounded-md'>Emergency</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
