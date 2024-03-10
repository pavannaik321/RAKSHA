
import React, { useContext , useState } from 'react'
import { UserContext } from '../context/userContext'
import camera from '../assets/camera.jpg';
import { useNavigate, Link } from "react-router-dom";




const Doctor = () => {
    const navigate = useNavigate();
  const [showRequest, setShowRequest] = useState(true); // State to control the visibility of the request

  const handleReject = () => {
    // Logic to handle rejection
    setShowRequest(false); // Hide the request after rejection
  };

  const handleAccept = () => {
    // Logic to handle acceptance
    setShowRequest(false); // Hide the request after acceptance
  };

  return (
    <div className="flex flex-col h-screen justify-between">
        
      {showRequest && (
        <div className="bg-gray-200 p-4">
          <p>You have a new broadcast signal request</p>
          <div className="flex justify-between mt-2">
            <button onClick={handleReject} className="bg-red-500 text-white px-2 py-1 rounded">
              Reject
            </button>
            <button onClick={handleAccept} className="bg-green-500 text-white px-2 py-1 rounded">
              Accept
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col justify-center items-center p-4">
      <img className='rounded-full' width={80} src={camera} alt='' />
          <button onClick={()=>{
            navigate("/display");
          }} className='m-5 px-2 py-1 bg-red-500 text-white rounded-md'>on Camera</button>
      </div>
    </div>
  );
};

export default Doctor;



// const Doctor = () => {
//     const {user} = useContext(UserContext)
//       return (
//     <div>Hello DR  {!!user && (<span>{user.name}</span>)}  </div>
//   )
// }

// export default Doctor

