import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8001');

const Display = () => {
  useEffect(()=>{
    socket.emit("connection")
  },[])
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center items-center h-3/4 bg-gray-200">
        {/* Video stream placeholders */}
        <div className="flex justify-center items-center w-3/4 h-full bg-gray-300">User 1 Video</div>
        <div className="flex justify-center items-center w-3/4 h-full bg-gray-300">User 2 Video</div>
      </div>
      <div className="flex justify-center items-center h-1/4 bg-gray-100">
        <button className="m-4 px-4 py-2 bg-red-500 text-white rounded-md">End Call</button>
      </div>
      <div className="flex justify-center items-center h-1/4 bg-gray-100">
        {/* Call status information */}
        <p className="text-lg">Call Status: In Progress</p>
      </div>
    </div>
  );
};

export default Display;
