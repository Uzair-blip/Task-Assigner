import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeDashboard from './components/Dashboard/EmployeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/ContextProvider';

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loggedInUserData, setLoggedInUserData] = useState(null);
//   const AuthData = useContext(AuthContext);
//   // Check localStorage to persist user session
//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//     if (loggedInUser) { 
//       setUser(loggedInUser.role);
//       setLoggedInUserData(loggedInUser.data);
//     } 
//   }, []); // Load from localStorage only once on component mount

//   const handleLogin = (email, password) => {
//     if (email === "admin@me.com" && password === "123") {
//       setUser("admin");
//       setLoggedInUserData(null); // Admin does not need user-specific data
//       localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
//     } else if (AuthData && AuthData.emp) {
//       const employee = AuthData.emp.find((e) => email === e.email && password === e.password);
//       if (employee) {
//         setUser("employee");
//         setLoggedInUserData(employee);
//         localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
//       } else {
//         alert("Invalid credentials");
//       }
//     }
//   };


//   return (
//     <>
//       {!user ? (
//         <Login handleLogin={handleLogin} />
//       ) : user === "admin" ? (
//         <AdminDashboard changeUser={setUser} data={loggedInUserData} />
//       ) : (
//         <EmployeDashboard changeUser={setUser} data={loggedInUserData}  />
//       )}
//     </>
//   );
// };

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const AuthData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) { 
      setUser(loggedInUser.role);
      setLoggedInUserData(loggedInUser.data);
    } 
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      setLoggedInUserData(null);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (AuthData && AuthData.emp) {
      const employee = AuthData.emp.find((e) => email === e.email && password === e.password);
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
      } else {
        alert("Invalid credentials");
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} onLogout={handleLogout} />
      ) : (
        <EmployeDashboard changeUser={setUser} data={loggedInUserData} onLogout={handleLogout} />
      )}
    </>
  );
};

export default App;
