// // import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import React from "react";
// // import { Link, useLocation, useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // import logo from "../images/Mann Ko Bhawana.png";

// // const Navbar = () => {
// //   const user = JSON.parse(localStorage.getItem("user"));
// //   const counselor = JSON.parse(localStorage.getItem("counselor"));
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     toast.success("User logged out successfully.");
// //     navigate("/login");
// //   };

// //   const isActive = (path) => {
// //     return location.pathname === path ? "active" : "";
// //   };

// //   const navLinkStyle = {
// //     fontSize: "1rem",
// //   };

// //   return (
// //     <nav
// //       className="navbar navbar-expand-lg"
// //       style={{
// //         backgroundColor: "#3B82F6",
// //         position: "absolute",
// //         top: 0,
// //         width: "100%",
// //         zIndex: 1000,
// //       }}
// //     >
// //       <div className="container-fluid d-flex justify-content-between align-items-center">
// //         <Link
// //           className="navbar-brand"
// //           to="/home"
// //           style={{ paddingLeft: "2rem", display: "flex", alignItems: "center" }}
// //         >
// //           <img
// //             src={logo}
// //             alt="Logo"
// //             style={{ width: "80px", height: "80px", marginRight: "10px" }}
// //           />
// //         </Link>

// //         <button
// //           className="navbar-toggler"
// //           type="button"
// //           data-bs-toggle="collapse"
// //           data-bs-target="#navbarNavAltMarkup"
// //           aria-controls="navbarNavAltMarkup"
// //           aria-expanded="false"
// //           aria-label="Toggle navigation"
// //         >
// //           <span className="navbar-toggler-icon"></span>
// //         </button>

// //         <div className=" navbar-collapse" id="navbarNavAltMarkup">
// //           <div className="navbar-nav ms-auto">
// //             <Link
// //               className={`nav-link text-white me-3 ${isActive("/home")}`}
// //               to="/home"
// //               style={navLinkStyle}
// //             >
// //               Home
// //             </Link>
// //             {(user || counselor) && (
// //               <>
// //                 {user && !user.isAdmin && (
// //                   <>
// //                     <Link
// //                       className={`nav-link text-white me-3 ${isActive(
// //                         "/user/issue"
// //                       )}`}
// //                       to="/user/issue"
// //                       style={navLinkStyle}
// //                     >
// //                       Diagnose
// //                     </Link>
// //                     <Link
// //                       className={`nav-link text-white me-3 ${isActive(
// //                         "/user/counselor"
// //                       )}`}
// //                       to="/user/counselor"
// //                       style={navLinkStyle}
// //                     >
// //                       Counselors
// //                     </Link>
// //                     <Link
// //                       className={`nav-link text-white me-3 ${isActive(
// //                         "/user/form"
// //                       )}`}
// //                       to="/user/form"
// //                       style={navLinkStyle}
// //                     >
// //                       Booking
// //                     </Link>
// //                     <Link
// //                       className={`nav-link text-white me-3 ${isActive(
// //                         "/aboutus"
// //                       )}`}
// //                       to="/aboutus"
// //                       style={navLinkStyle}
// //                     >
// //                       About
// //                     </Link>
// //                   </>
// //                 )}
// //                 {user && user.isAdmin && (
// //                   <>
// //                     <Link
// //                       className={`nav-link text-white me-3 ${isActive(
// //                         "/admin/counselorDashboard"
// //                       )}`}
// //                       to="/admin/counselorDashboard"
// //                       style={navLinkStyle}
// //                     >
// //                       Add Counselor
// //                     </Link>
// //                     <Link
// //                       className={`nav-link text-white me-3 ${isActive(
// //                         "/admin/issueDashboard"
// //                       )}`}
// //                       to="/admin/issueDashboard"
// //                       style={navLinkStyle}
// //                     >
// //                       Add Issue
// //                     </Link>
// //                     <Link
// //                       className={`nav-link text-white me-3 ${isActive(
// //                         "/admin/calendar"
// //                       )}`}
// //                       to="/admin/calendar"
// //                       style={navLinkStyle}
// //                     >
// //                       Calendar
// //                     </Link>
// //                   </>
// //                 )}
// //                 {counselor && (
// //                   <>
// //                     <Link
// //                       className={`nav-link text-white me-3 ${isActive(
// //                         "/hippa"
// //                       )}`}
// //                       to="/hippa"
// //                       style={navLinkStyle}
// //                     >
// //                       HIPPA
// //                     </Link>
// //                     <Link
// //                       className={`nav-link text-white me-3 ${isActive(
// //                         "/counselor/calendar"
// //                       )}`}
// //                       to="/counselor/calendar"
// //                       style={navLinkStyle}
// //                     >
// //                       Appointments
// //                     </Link>
// //                   </>
// //                 )}
// //               </>
// //             )}
// //           </div>

// //           {user || counselor ? (
// //             <div className="d-flex align-items-center">
// //               <Link
// //                 className="buttonNav me-3"
// //                 to="/profile"
// //                 style={navLinkStyle}
// //               >
// //                 {(user && user.userName) ||
// //                   (counselor && counselor.counselorName)}
// //               </Link>

// //               <FontAwesomeIcon
// //                 icon={faSignOutAlt}
// //                 onClick={handleLogout}
// //                 style={{
// //                   cursor: "pointer",
// //                   color: "white",
// //                   marginRight: "10px",
// //                   fontSize: "1rem",
// //                 }}
// //                 title="Logout"
// //               />
// //             </div>
// //           ) : (
// //             <div className="dropdown ms-auto">
// //               <button
// //                 className="buttonNav dropdown-toggle"
// //                 type="button"
// //                 id="loginDropdown"
// //                 data-bs-toggle="dropdown"
// //                 aria-expanded="false"
// //                 style={navLinkStyle}
// //               >
// //                 Login
// //               </button>
// //               <ul className="dropdown-menu" aria-labelledby="loginDropdown">
// //                 <li>
// //                   <Link className="dropdown-item" to="/login">
// //                     Client
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link className="dropdown-item" to="/login_counselor">
// //                     Provider
// //                   </Link>
// //                 </li>
// //               </ul>

// //               <Link className="button me-2" to="/register" style={navLinkStyle}>
// //                 Register
// //               </Link>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import logo from "../images/Mann Ko Bhawana.png";

// const Navbar = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const counselor = JSON.parse(localStorage.getItem("counselor"));
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     localStorage.clear();
//     toast.success("User logged out successfully.");
//     navigate("/login");
//   };

//   const isActive = (path) => {
//     return location.pathname === path ? "active" : "";
//   };

//   const navLinkStyle = {
//     fontSize: "1rem",
//   };

//   const buttonStyle = {
//     padding: "0.375rem 0.75rem",
//     border: "1px solid transparent",
//     borderRadius: "0.25rem",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     textDecoration: "none",
//     display: "inline-block",
//     cursor: "pointer",
//   };

//   return (
//     <nav
//       className="navbar navbar-expand-lg"
//       style={{
//         backgroundColor: "#3B82F6",
//         position: "absolute",
//         top: 0,
//         width: "100%",
//         zIndex: 1000,
//       }}
//     >
//       <div className="container-fluid d-flex justify-content-between align-items-center">
//         <Link
//           className="navbar-brand"
//           to="/home"
//           style={{ paddingLeft: "2rem", display: "flex", alignItems: "center" }}
//         >
//           <img
//             src={logo}
//             alt="Logo"
//             style={{ width: "80px", height: "80px", marginRight: "10px" }}
//           />
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav ms-auto">
//             <Link
//               className={`nav-link text-white me-3 ${isActive("/home")}`}
//               to="/home"
//               style={navLinkStyle}
//             >
//               Home
//             </Link>
//             {(user || counselor) && (
//               <>
//                 {user && !user.isAdmin && (
//                   <>
//                     <Link
//                       className={`nav-link text-white me-3 ${isActive(
//                         "/user/issue"
//                       )}`}
//                       to="/user/issue"
//                       style={navLinkStyle}
//                     >
//                       Diagnose
//                     </Link>
//                     <Link
//                       className={`nav-link text-white me-3 ${isActive(
//                         "/user/counselor"
//                       )}`}
//                       to="/user/counselor"
//                       style={navLinkStyle}
//                     >
//                       Counselors
//                     </Link>
//                     <Link
//                       className={`nav-link text-white me-3 ${isActive(
//                         "/user/form"
//                       )}`}
//                       to="/user/form"
//                       style={navLinkStyle}
//                     >
//                       Booking
//                     </Link>
//                     <Link
//                       className={`nav-link text-white me-3 ${isActive(
//                         "/aboutus"
//                       )}`}
//                       to="/aboutus"
//                       style={navLinkStyle}
//                     >
//                       About
//                     </Link>
//                   </>
//                 )}
//                 {user && user.isAdmin && (
//                   <>
//                     <Link
//                       className={`nav-link text-white me-3 ${isActive(
//                         "/admin/counselorDashboard"
//                       )}`}
//                       to="/admin/counselorDashboard"
//                       style={navLinkStyle}
//                     >
//                       Add Counselor
//                     </Link>
//                     <Link
//                       className={`nav-link text-white me-3 ${isActive(
//                         "/admin/issueDashboard"
//                       )}`}
//                       to="/admin/issueDashboard"
//                       style={navLinkStyle}
//                     >
//                       Add Issue
//                     </Link>
//                     <Link
//                       className={`nav-link text-white me-3 ${isActive(
//                         "/admin/calendar"
//                       )}`}
//                       to="/admin/calendar"
//                       style={navLinkStyle}
//                     >
//                       Calendar
//                     </Link>
//                   </>
//                 )}
//                 {counselor && (
//                   <>
//                     <Link
//                       className={`nav-link text-white me-3 ${isActive(
//                         "/hippa"
//                       )}`}
//                       to="/hippa"
//                       style={navLinkStyle}
//                     >
//                       HIPPA
//                     </Link>
//                     <Link
//                       className={`nav-link text-white me-3 ${isActive(
//                         "/counselor/calendar"
//                       )}`}
//                       to="/counselor/calendar"
//                       style={navLinkStyle}
//                     >
//                       Appointments
//                     </Link>
//                   </>
//                 )}
//               </>
//             )}
//           </div>

//           {user || counselor ? (
//             <div className="d-flex align-items-center">
//               {user && user.isAdmin ? (
//                 <div
//                   className="buttonNav me-3"
//                   style={{ ...buttonStyle, cursor: "default" }}
//                 >
//                   {user.userName}
//                 </div>
//               ) : (
//                 <Link
//                   className="buttonNav me-3"
//                   to="/profile"
//                   style={navLinkStyle}
//                 >
//                   {(user && user.userName) ||
//                     (counselor && counselor.counselorName)}
//                 </Link>
//               )}
//               <FontAwesomeIcon
//                 icon={faSignOutAlt}
//                 onClick={handleLogout}
//                 style={{
//                   cursor: "pointer",
//                   color: "white",
//                   marginRight: "10px",
//                   fontSize: "1rem",
//                 }}
//                 title="Logout"
//               />
//             </div>
//           ) : (
//             <div className="dropdown ms-auto">
//               <button
//                 className="buttonNav dropdown-toggle"
//                 type="button"
//                 id="loginDropdown"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={navLinkStyle}
//               >
//                 Login
//               </button>
//               <ul className="dropdown-menu" aria-labelledby="loginDropdown">
//                 <li>
//                   <Link className="dropdown-item" to="/login">
//                     Client
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/login_counselor">
//                     Provider
//                   </Link>
//                 </li>
//               </ul>

//               <Link className="button me-2" to="/register" style={navLinkStyle}>
//                 Register
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "../images/Mann Ko Bhawana.png";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const counselor = JSON.parse(localStorage.getItem("counselor"));
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    toast.success("User logged out successfully.");
    navigate("/login");
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const navLinkStyle = {
    fontSize: "1rem",
  };

  const buttonStyle = {
    padding: "0.375rem 0.75rem",
    border: "1px solid transparent",
    borderRadius: "0.25rem",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    display: "inline-block",
    cursor: "pointer",
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#3B82F6",
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link
          className="navbar-brand"
          to="/home"
          style={{ paddingLeft: "2rem", display: "flex", alignItems: "center" }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: "80px", height: "80px", marginRight: "10px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link
              className={`nav-link text-white me-3 ${isActive("/home")}`}
              to="/home"
              style={navLinkStyle}
            >
              Home
            </Link>
            <Link
              className={`nav-link text-white me-3 ${isActive("/aboutus")}`}
              to="/aboutus"
              style={navLinkStyle}
            >
              About Us
            </Link>
            {(user || counselor) && (
              <>
                {user && !user.isAdmin && (
                  <>
                    <Link
                      className={`nav-link text-white me-3 ${isActive(
                        "/user/issue"
                      )}`}
                      to="/user/issue"
                      style={navLinkStyle}
                    >
                      Diagnose
                    </Link>
                    <Link
                      className={`nav-link text-white me-3 ${isActive(
                        "/user/counselor"
                      )}`}
                      to="/user/counselor"
                      style={navLinkStyle}
                    >
                      Counselors
                    </Link>
                    <Link
                      className={`nav-link text-white me-3 ${isActive(
                        "/user/form"
                      )}`}
                      to="/user/form"
                      style={navLinkStyle}
                    >
                      Booking
                    </Link>
                  </>
                )}
                {user && user.isAdmin && (
                  <>
                    <Link
                      className={`nav-link text-white me-3 ${isActive(
                        "/admin/counselorDashboard"
                      )}`}
                      to="/admin/counselorDashboard"
                      style={navLinkStyle}
                    >
                      Add Counselor
                    </Link>
                    <Link
                      className={`nav-link text-white me-3 ${isActive(
                        "/admin/issueDashboard"
                      )}`}
                      to="/admin/issueDashboard"
                      style={navLinkStyle}
                    >
                      Add Issue
                    </Link>
                    <Link
                      className={`nav-link text-white me-3 ${isActive(
                        "/admin/calendar"
                      )}`}
                      to="/admin/calendar"
                      style={navLinkStyle}
                    >
                      Calendar
                    </Link>
                  </>
                )}
                {counselor && (
                  <>
                    <Link
                      className={`nav-link text-white me-3 ${isActive(
                        "/hippa"
                      )}`}
                      to="/hippa"
                      style={navLinkStyle}
                    >
                      HIPPA
                    </Link>
                    <Link
                      className={`nav-link text-white me-3 ${isActive(
                        "/counselor/calendar"
                      )}`}
                      to="/counselor/calendar"
                      style={navLinkStyle}
                    >
                      Appointments
                    </Link>
                  </>
                )}
              </>
            )}
          </div>

          {user || counselor ? (
            <div className="d-flex align-items-center">
              {user && user.isAdmin ? (
                <div
                  className="buttonNav me-3"
                  style={{ ...buttonStyle, cursor: "default" }}
                >
                  {user.userName}
                </div>
              ) : (
                <Link
                  className="buttonNav me-3"
                  to="/profile"
                  style={navLinkStyle}
                >
                  {(user && user.userName) ||
                    (counselor && counselor.counselorName)}
                </Link>
              )}
              <FontAwesomeIcon
                icon={faSignOutAlt}
                onClick={handleLogout}
                style={{
                  cursor: "pointer",
                  color: "white",
                  marginRight: "10px",
                  fontSize: "1rem",
                }}
                title="Logout"
              />
            </div>
          ) : (
            <div className="dropdown ms-auto">
              <button
                className="buttonNav dropdown-toggle"
                type="button"
                id="loginDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={navLinkStyle}
              >
                Login
              </button>
              <ul className="dropdown-menu" aria-labelledby="loginDropdown">
                <li>
                  <Link className="dropdown-item" to="/login">
                    Client
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/login_counselor">
                    Provider
                  </Link>
                </li>
              </ul>

              <Link className="button me-2" to="/register" style={navLinkStyle}>
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
