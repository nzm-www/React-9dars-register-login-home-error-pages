import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./Pages/Register/register";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(function () {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  function ProtectedRoute({ isAuthenticated, children }) {
    if (!isAuthenticated) {
      navigate("/login");
    }

    return children;
  }

  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route
          index
          element={
            <ProtectedRoute isAuthenticated={true}>
              <Home></Home>
            </ProtectedRoute>
          }
        ></Route>

        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import register from "./Pages/Register/register";

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path='/login' element={<Login></Login>}></Route>
//         <Route path='/register' element={<Register></Register>}></Route>

//         <Route
//           path='/'
//           element={
//             <ProtectedRoute isAuthenticated={isAuth}>
//               <Home></Home>
//             </ProtectedRoute>
//           }
//         ></Route>

//         <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;

// useEffect(
//   function () {
//     if (!isAuth && location.pathname != "/register") {
//       navigate("/login");
//     }
//   },
//   [token, navigate]
// );

// useEffect(
//   function () {
//     setIsAuth(token ? true : false);
//   },
//   [token]
// );
