// import React, { useRef, useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons
// import { Puff } from "react-loader-spinner"; // Import Puff spinner
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { loginCounselorApi } from "../apis/Api";
// import AnimatedWave from "../components/AnimatedWave";

// const LoginCounselor = () => {
//   const [counselorCode, setCounselorCode] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(true);
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false); // State for password visibility
//   const [loading, setLoading] = useState(false); // Add loading state

//   const navigate = useNavigate();

//   const counselorCodeRef = useRef();
//   const passwordRef = useRef();

//   const changeCounselorCode = (e) => {
//     if (e.target.value.length <= 4) {
//       setCounselorCode(e.target.value);
//       setErrors((prevErrors) => ({ ...prevErrors, counselorCode: "" }));
//     }
//   };

//   const changePassword = (e) => {
//     setPassword(e.target.value);
//     setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
//   };

//   const changeRememberMe = (e) => {
//     setRememberMe(e.target.checked);
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const validate = () => {
//     const errors = {};

//     if (!counselorCode) {
//       errors.counselorCode = "Counselor Code is required";
//     } else if (counselorCode.length !== 4) {
//       errors.counselorCode = "Counselor Code must be exactly 4 characters long";
//     }

//     if (!password) {
//       errors.password = "Password is required";
//     } else if (password.length < 8) {
//       errors.password = "Password must be at least 8 characters long";
//     }

//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length > 0) {
//       if (validationErrors.counselorCode) {
//         counselorCodeRef.current.focus();
//       } else if (validationErrors.password) {
//         passwordRef.current.focus();
//       }
//       return;
//     }

//     const data = { counselorCode, password };

//     setLoading(true); // Set loading to true

//     try {
//       const res = await loginCounselorApi(data);
//       if (res.data.success === false) {
//         setErrors({
//           general: "Incorrect login credentials. Please try again.",
//         });
//       } else {
//         toast.success(res.data.message);
//         if (rememberMe) {
//           localStorage.setItem("token", res.data.token);
//         } else {
//           sessionStorage.setItem("token", res.data.token);
//         }
//         localStorage.setItem("counselor", JSON.stringify(res.data.userData));
//         navigate("/home");
//       }
//     } catch (err) {
//       console.error("Server error:", err); // Log error details to the console
//       if (err.response && err.response.data && err.response.data.message) {
//         setErrors({ form: err.response.data.message });
//       } else {
//         setErrors({ form: "Server error. Please try again later." });
//       }
//     } finally {
//       setLoading(false); // Set loading to false after processing
//     }
//   };

//   return (
//     <div className="wave-section">
//       <AnimatedWave />
//       <div
//         className="form-container d-flex justify-content-center align-items-center border rounded"
//         style={{ minHeight: "60vh", backgroundColor: "#ffffff" }}
//       >
//         <div
//           className="border rounded p-4"
//           style={{
//             width: "100%",
//             maxWidth: "450px",
//             backgroundColor: "#ffffff",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//           }}
//         >
//           <h2
//             className="text-center mb-3"
//             style={{ color: "#3586ff", fontSize: "1.5rem" }}
//           >
//             Hey! Log In to your account
//           </h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="counselorCode" style={{ fontSize: "0.9rem" }}>
//                 Counselor Code
//               </label>
//               <input
//                 ref={counselorCodeRef}
//                 onChange={changeCounselorCode}
//                 className="form-control"
//                 type="text"
//                 id="counselorCode"
//                 placeholder="Enter your counselor code"
//                 value={counselorCode}
//                 aria-label="Enter your counselor code"
//                 style={{
//                   fontSize: "0.9rem",
//                   padding: "0.5rem",
//                   borderRadius: "0.25rem",
//                 }}
//               />
//               {errors.counselorCode && (
//                 <div className="text-danger" style={{ fontSize: "0.8rem" }}>
//                   {errors.counselorCode}
//                 </div>
//               )}
//             </div>
//             <div className="mb-3 position-relative">
//               <label htmlFor="password" style={{ fontSize: "0.9rem" }}>
//                 Password
//               </label>
//               <input
//                 ref={passwordRef}
//                 onChange={changePassword}
//                 className="form-control"
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 aria-label="Enter your password"
//                 style={{
//                   fontSize: "0.9rem",
//                   padding: "0.5rem",
//                   borderRadius: "0.25rem",
//                 }}
//               />
//               <div
//                 onClick={toggleShowPassword}
//                 style={{
//                   position: "absolute",
//                   top: "50%",
//                   right: "10px",
//                   transform: "translateY(-50%)",
//                   cursor: "pointer",
//                 }}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </div>
//               {errors.password && (
//                 <div className="text-danger" style={{ fontSize: "0.8rem" }}>
//                   {errors.password}
//                 </div>
//               )}
//               {errors.form && (
//               <div
//                 className="text-danger mt-2"
//                 style={{ fontSize: "0.8rem" }}
//               >
//                 {errors.form}
//               </div>
//             )}
//             {errors.general && (
//               <div
//                 className="text-danger mt-2"
//                 style={{ fontSize: "0.8rem" }}
//               >
//                 {errors.general}
//               </div>
//             )}
//               <div className="d-flex justify-content-between align-items-center mt-2">
//                 <div className="form-check">
//                   <input
//                     type="checkbox"
//                     className="form-check-input"
//                     id="rememberMe"
//                     checked={rememberMe}
//                     onChange={changeRememberMe}
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor="rememberMe"
//                     style={{ fontSize: "0.9rem" }}
//                   >
//                     Remember Me
//                   </label>
//                 </div>
//                 <Link
//                   to="/forgot-password"
//                   className="text-decoration-none"
//                   style={{ fontSize: "0.9rem", color: "#3586ff" }}
//                 >
//                   Forgot Password?
//                 </Link>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="custom-button border rounded btn w-100"
//               style={{
//                 backgroundColor: "#3586ff",
//                 color: "#ffffff",
//                 padding: "0.5rem",
//                 fontSize: "1rem",
//                 transition: "transform 0.2s",
//                 cursor: loading ? "not-allowed" : "pointer",
//               }}
//               disabled={loading}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = "scale(1.05)";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = "scale(1)";
//               }}
//             >
//               {loading ? (
//                 <div className="d-flex align-items-center justify-content-center">
//                   <Puff
//                     height="20"
//                     width="20"
//                     radius="9"
//                     color="#ffffff"
//                     ariaLabel="loading"
//                   />
//                   <span style={{ marginLeft: "10px", fontSize: "0.9rem" }}>
//                     Logging in...
//                   </span>
//                 </div>
//               ) : (
//                 "Login"
//               )}
//             </button>

//             <div className="text-center mt-2" style={{ fontSize: "0.9rem" }}>
//               New to the application?{" "}
//               <Link
//                 to="/register"
//                 className="text-decoration-none"
//                 style={{ color: "#3586ff" }}
//               >
//                 Register
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginCounselor;

import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons
import { Puff } from "react-loader-spinner"; // Import Puff spinner
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginCounselorApi } from "../apis/Api";
import AnimatedWave from "../components/AnimatedWave";

const LoginCounselor = () => {
  const [counselorCode, setCounselorCode] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate();

  const counselorCodeRef = useRef();
  const passwordRef = useRef();

  const changeCounselorCode = (e) => {
    const value = e.target.value;
    if (value.length <= 4 && /^\d*$/.test(value)) {
      setCounselorCode(value);
      setErrors((prevErrors) => ({ ...prevErrors, counselorCode: "" }));
    }
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
  };

  const changeRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validate = () => {
    const errors = {};

    if (!counselorCode) {
      errors.counselorCode = "Counselor Code is required";
    } else if (counselorCode.length !== 4) {
      errors.counselorCode = "Counselor Code must be exactly 4 characters long";
    } else if (!/^\d+$/.test(counselorCode)) {
      errors.counselorCode = "Counselor Code must contain only numbers";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      if (validationErrors.counselorCode) {
        counselorCodeRef.current.focus();
      } else if (validationErrors.password) {
        passwordRef.current.focus();
      }
      return;
    }

    const data = { counselorCode, password };

    setLoading(true); // Set loading to true

    try {
      const res = await loginCounselorApi(data);
      if (res.data.success === false) {
        setErrors({
          general: "Incorrect login credentials. Please try again.",
        });
      } else {
        toast.success(res.data.message);
        if (rememberMe) {
          localStorage.setItem("token", res.data.token);
        } else {
          sessionStorage.setItem("token", res.data.token);
        }
        localStorage.setItem("counselor", JSON.stringify(res.data.userData));
        navigate("/home");
      }
    } catch (err) {
      console.error("Server error:", err); // Log error details to the console
      if (err.response && err.response.data && err.response.data.message) {
        setErrors({ form: err.response.data.message });
      } else {
        setErrors({ form: "Server error. Please try again later." });
      }
    } finally {
      setLoading(false); // Set loading to false after processing
    }
  };

  const styles = {
    diagnoseBtn: {
      padding: "7px 17px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontFamily: "merriweather",
      cursor: "pointer",
      fontSize: "0.95rem",
      transition: "transform 0.2s ease",
      textDecoration: "none",
      textTransform: "none", // Ensure the text is not transformed to uppercase
      position: "relative", // Ensure the position is set to relative for the zoom effect
    },
    diagnoseBtnHover: {
      backgroundColor: "#0056b3",
      animation: "zoom 0.6s infinite", // Add this line to apply the zoom animation on hover
    },
    loaderContainer: {
      display: "flex",
      justifyContent: "center", // Center horizontally
      alignItems: "flex-start", // Align to the top
      height: "100vh", // Full viewport height
      paddingTop: "20vh", // Add some padding from the top to position it nicely
    },
  };
  // Add the keyframes for the zoom animation
  const zoomKeyframes = `
  @keyframes zoom {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
  `;

  // Append the keyframes to the document's stylesheet
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(zoomKeyframes, styleSheet.cssRules.length);

  return (
    <div className="wave-section">
      <AnimatedWave />
      <div
        className="form-container d-flex justify-content-center align-items-center border rounded"
        style={{ minHeight: "60vh", backgroundColor: "#ffffff" }}
      >
        <div
          className="border rounded p-4"
          style={{
            width: "100%",
            maxWidth: "450px",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2
            className="text-center mb-3"
            style={{ color: "#3586ff", fontSize: "1.5rem" }}
          >
            Hey! Log In to your account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="counselorCode" style={{ fontSize: "0.9rem" }}>
                Counselor Code
              </label>
              <input
                ref={counselorCodeRef}
                onChange={changeCounselorCode}
                className="form-control"
                type="text"
                id="counselorCode"
                placeholder="Enter your counselor code"
                value={counselorCode}
                aria-label="Enter your counselor code"
                style={{
                  fontSize: "0.9rem",
                  padding: "0.5rem",
                  borderRadius: "0.25rem",
                }}
              />
              {errors.counselorCode && (
                <div className="text-danger" style={{ fontSize: "0.8rem" }}>
                  {errors.counselorCode}
                </div>
              )}
            </div>
            <div className="mb-3 position-relative">
              <label htmlFor="password" style={{ fontSize: "0.9rem" }}>
                Password
              </label>
              <input
                ref={passwordRef}
                onChange={changePassword}
                className="form-control"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                aria-label="Enter your password"
                style={{
                  fontSize: "0.9rem",
                  padding: "0.5rem",
                  borderRadius: "0.25rem",
                }}
              />
              <div
                onClick={toggleShowPassword}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
              {errors.password && (
                <div className="text-danger" style={{ fontSize: "0.8rem" }}>
                  {errors.password}
                </div>
              )}
              {errors.form && (
                <div
                  className="text-danger mt-2"
                  style={{ fontSize: "0.8rem" }}
                >
                  {errors.form}
                </div>
              )}
              {errors.general && (
                <div
                  className="text-danger mt-2"
                  style={{ fontSize: "0.8rem" }}
                >
                  {errors.general}
                </div>
              )}
              <div className="d-flex justify-content-between align-items-center mt-2">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={changeRememberMe}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="rememberMe"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Remember Me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-decoration-none"
                  style={{ fontSize: "0.9rem", color: "#3586ff" }}
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="custom-button border rounded btn w-100"
              style={{
                backgroundColor: "#3586ff",
                color: "#ffffff",
                padding: "0.5rem",
                fontSize: "1rem",
                transition: "transform 0.2s",
                cursor: loading ? "not-allowed" : "pointer",
              }}
              disabled={loading}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor =
                  styles.diagnoseBtnHover.backgroundColor;
                e.currentTarget.style.animation =
                  styles.diagnoseBtnHover.animation;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor =
                  styles.diagnoseBtn.backgroundColor;
                e.currentTarget.style.animation = "none"; // Remove the animation
              }}
            >
              {loading ? (
                <div className="d-flex align-items-center justify-content-center">
                  <Puff
                    height="20"
                    width="20"
                    radius="9"
                    color="#ffffff"
                    ariaLabel="loading"
                  />
                  <span style={{ marginLeft: "10px", fontSize: "0.9rem" }}>
                    Logging in...
                  </span>
                </div>
              ) : (
                "Login"
              )}
            </button>

            <div className="text-center mt-2" style={{ fontSize: "0.9rem" }}>
              New to the application?{" "}
              <Link
                to="/register"
                className="text-decoration-none"
                style={{ color: "#3586ff" }}
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginCounselor;
