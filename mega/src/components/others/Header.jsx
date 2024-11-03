import React, { useState, useEffect } from 'react';

const Header = ({ data}) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(data?.firstName || "Admin"); // Set name only when data changes
  }, [data]);

  const onLogout = () => {
    localStorage.setItem("LoggedInUser","")
    window.location.reload()
  };


  return (
    <div className="flex items-center justify-between"> 
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold p-3">{name || "Guest"}</span>🖐
      </h1>
      <button 
        className="bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium" 
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
