// // // import React, { useRef, useState } from "react";
// // // import { FaEye, FaEyeSlash } from "react-icons/fa";
// // // import { useNavigate } from "react-router-dom";
// // // import { toast } from "react-toastify";
// // // import { registerApi } from "../apis/Api";
// // // import AnimatedWave from "../components/AnimatedWave";

// // // const Register = () => {
// // //   const [userName, setUserName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [confirmPassword, setConfirmPassword] = useState("");
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// // //   const [errors, setErrors] = useState({});
// // //   const navigate = useNavigate();

// // //   const usernameRef = useRef();
// // //   const emailRef = useRef();
// // //   const passwordRef = useRef();
// // //   const confirmPasswordRef = useRef();

// // //   const changeUserName = (e) => {
// // //     setUserName(e.target.value);
// // //     setErrors((prevErrors) => ({ ...prevErrors, userName: "" }));
// // //   };

// // //   const changeEmail = (e) => {
// // //     setEmail(e.target.value);
// // //     setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
// // //   };

// // //   const changePassword = (e) => {
// // //     setPassword(e.target.value);
// // //     setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
// // //   };

// // //   const changeConfirmPassword = (e) => {
// // //     setConfirmPassword(e.target.value);
// // //     setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
// // //   };

// // //   const togglePasswordVisibility = () => {
// // //     setShowPassword(!showPassword);
// // //   };

// // //   const toggleConfirmPasswordVisibility = () => {
// // //     setShowConfirmPassword(!showConfirmPassword);
// // //   };

// // //   const validate = () => {
// // //     const errors = {};
// // //     if (!userName) {
// // //       errors.userName = "User Name is required";
// // //     } else if (userName.length < 3) {
// // //       errors.userName = "User Name must be at least 3 characters long";
// // //     }

// // //     if (!email) {
// // //       errors.email = "Email is required";
// // //     } else {
// // //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // //       if (!emailRegex.test(email)) {
// // //         errors.email = "Please enter a valid email address!";
// // //       }
// // //     }

// // //     if (!password) {
// // //       errors.password = "Password is required";
// // //     } else {
// // //       const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// // //       if (!passwordRegex.test(password)) {
// // //         errors.password =
// // //           "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.";
// // //       }
// // //     }

// // //     if (!confirmPassword) {
// // //       errors.confirmPassword = "Confirm Password is required";
// // //     } else if (password !== confirmPassword) {
// // //       errors.confirmPassword = "Passwords do not match!";
// // //     }

// // //     return errors;
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     const validationErrors = validate();
// // //     setErrors(validationErrors);

// // //     if (Object.keys(validationErrors).length > 0) {
// // //       if (validationErrors.userName) {
// // //         usernameRef.current.focus();
// // //       } else if (validationErrors.email) {
// // //         emailRef.current.focus();
// // //       } else if (validationErrors.password) {
// // //         passwordRef.current.focus();
// // //       } else if (validationErrors.confirmPassword) {
// // //         confirmPasswordRef.current.focus();
// // //       }
// // //       return;
// // //     }

// // //     const data = {
// // //       userName: userName,
// // //       email: email,
// // //       password: password,
// // //     };

// // //     registerApi(data)
// // //       .then((res) => {
// // //         if (res.data.success === true) {
// // //           toast.success(res.data.message);
// // //           navigate("/login");
// // //         } else {
// // //           toast.error(res.data.message);
// // //         }
// // //       })
// // //       .catch((err) => {
// // //         console.log(err);
// // //         toast.error("Internal Server Error!");
// // //       });
// // //   };

// // //   return (
// // //     <div className="wave-section">
// // //       <AnimatedWave />
// // //       <div
// // //         className="form-container1 d-flex justify-content-center align-items-center border rounded"
// // //         style={{ minHeight: "85vh", backgroundColor: "#ffffff" }}
// // //       >
// // //         <div
// // //           className="border rounded p-4"
// // //           style={{
// // //             width: "100%",
// // //             maxWidth: "400px",
// // //             backgroundColor: "#ffccc",
// // //             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
// // //           }}
// // //         >
// // //           <h2
// // //             className="text-center mb-3"
// // //             style={{ color: "#3586ff", fontSize: "1.5rem" }}
// // //           >
// // //             Create your account!
// // //           </h2>
// // //           <form>
// // //             <div className="mb-3">
// // //               <label style={{ fontSize: "0.9rem" }}>User Name</label>
// // //               <input
// // //                 ref={usernameRef}
// // //                 onChange={changeUserName}
// // //                 className="form-control"
// // //                 type="text"
// // //                 placeholder="Enter your username"
// // //                 style={{ fontSize: "0.9rem" }}
// // //                 value={userName}
// // //               />
// // //               {errors.userName && (
// // //                 <div className="text-danger" style={{ fontSize: "0.7rem" }}>
// // //                   {errors.userName}
// // //                 </div>
// // //               )}
// // //             </div>

// // //             <div className="mb-3">
// // //               <label style={{ fontSize: "0.9rem" }}>Email</label>
// // //               <input
// // //                 ref={emailRef}
// // //                 onChange={changeEmail}
// // //                 className="form-control"
// // //                 type="email"
// // //                 placeholder="Enter your email"
// // //                 style={{ fontSize: "0.9rem" }}
// // //                 value={email}
// // //               />
// // //               {errors.email && (
// // //                 <div className="text-danger" style={{ fontSize: "0.7rem" }}>
// // //                   {errors.email}
// // //                 </div>
// // //               )}
// // //             </div>
// // //             <div className="mb-3 position-relative">
// // //               <label style={{ fontSize: "0.9rem" }}>Password</label>
// // //               <input
// // //                 ref={passwordRef}
// // //                 onChange={changePassword}
// // //                 className="form-control custom-password"
// // //                 type={showPassword ? "text" : "password"}
// // //                 placeholder="Enter your password"
// // //                 style={{ fontSize: "0.9rem" }}
// // //                 value={password}
// // //               />
// // //               <span
// // //                 onClick={togglePasswordVisibility}
// // //                 className="password-toggle-icon"
// // //               >
// // //                 {showPassword ? <FaEyeSlash /> : <FaEye />}
// // //               </span>
// // //               {errors.password && (
// // //                 <div className="text-danger" style={{ fontSize: "0.7rem" }}>
// // //                   {errors.password}
// // //                 </div>
// // //               )}
// // //             </div>
// // //             <div className="mb-3 position-relative">
// // //               <label style={{ fontSize: "0.9rem" }}>Confirm Password</label>
// // //               <input
// // //                 ref={confirmPasswordRef}
// // //                 onChange={changeConfirmPassword}
// // //                 className="form-control custom-password"
// // //                 type={showConfirmPassword ? "text" : "password"}
// // //                 placeholder="Confirm your password"
// // //                 style={{ fontSize: "0.9rem" }}
// // //                 value={confirmPassword}
// // //               />
// // //               <span
// // //                 onClick={toggleConfirmPasswordVisibility}
// // //                 className="password-toggle-icon"
// // //               >
// // //                 {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
// // //               </span>
// // //               {errors.confirmPassword && (
// // //                 <div className="text-danger" style={{ fontSize: "0.7rem" }}>
// // //                   {errors.confirmPassword}
// // //                 </div>
// // //               )}
// // //             </div>
// // //             <button
// // //               onClick={handleSubmit}
// // //               className="custom-button border rounded btn w-100"
// // //               style={{
// // //                 color: "black",
// // //                 border: "6px solid black",
// // //                 width: "50%",
// // //                 fontSize: "0.9rem",
// // //               }}
// // //             >
// // //               Register
// // //             </button>
// // //             <div className="text-center mt-2" style={{ fontSize: "0.9rem" }}>
// // //               Already have an account?{" "}
// // //               <a href="/login" className="text-decoration-none">
// // //                 Login
// // //               </a>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //       <style>
// // //         {`.custom-password {
// // //   font-family: sans-serif;
// // //   -webkit-text-security: disc;
// // //   text-security: disc;
// // // }

// // // .password-toggle-icon {
// // //   position: absolute;
// // //   right: 10px;
// // //   top: 50%;
// // //   transform: translateY(-50%);
// // //   cursor: pointer;
// // //   font-size: 1.2em; /* Adjust as needed for better visibility */
// // // }`}
// // //       </style>
// // //     </div>
// // //   );
// // // };

// // // export default Register;

// // import React, { useRef, useState } from "react";
// // import { FaEye, FaEyeSlash } from "react-icons/fa";
// // import { Link, useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import { registerApi } from "../apis/Api";
// // import AnimatedWave from "../components/AnimatedWave";

// // const Register = () => {
// //   const [userName, setUserName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// //   const [errors, setErrors] = useState({});
// //   const navigate = useNavigate();

// //   const usernameRef = useRef();
// //   const emailRef = useRef();
// //   const passwordRef = useRef();
// //   const confirmPasswordRef = useRef();

// //   const changeUserName = (e) => {
// //     setUserName(e.target.value);
// //     setErrors((prevErrors) => ({ ...prevErrors, userName: "" }));
// //   };

// //   const changeEmail = (e) => {
// //     setEmail(e.target.value);
// //     setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
// //   };

// //   const changePassword = (e) => {
// //     setPassword(e.target.value);
// //     setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
// //   };

// //   const changeConfirmPassword = (e) => {
// //     setConfirmPassword(e.target.value);
// //     setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
// //   };

// //   const togglePasswordVisibility = () => {
// //     setShowPassword(!showPassword);
// //   };

// //   const toggleConfirmPasswordVisibility = () => {
// //     setShowConfirmPassword(!showConfirmPassword);
// //   };

// //   const validate = () => {
// //     const errors = {};
// //     if (!userName) {
// //       errors.userName = "User Name is required";
// //     } else if (userName.length < 3) {
// //       errors.userName = "User Name must be at least 3 characters long";
// //     }

// //     if (!email) {
// //       errors.email = "Email is required";
// //     } else {
// //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //       if (!emailRegex.test(email)) {
// //         errors.email = "Please enter a valid email address!";
// //       }
// //     }

// //     if (!password) {
// //       errors.password = "Password is required";
// //     } else {
// //       const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// //       if (!passwordRegex.test(password)) {
// //         errors.password =
// //           "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.";
// //       }
// //     }

// //     if (!confirmPassword) {
// //       errors.confirmPassword = "Confirm Password is required";
// //     } else if (password !== confirmPassword) {
// //       errors.confirmPassword = "Passwords do not match!";
// //     }

// //     return errors;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const validationErrors = validate();
// //     setErrors(validationErrors);

// //     if (Object.keys(validationErrors).length > 0) {
// //       if (validationErrors.userName) {
// //         usernameRef.current.focus();
// //       } else if (validationErrors.email) {
// //         emailRef.current.focus();
// //       } else if (validationErrors.password) {
// //         passwordRef.current.focus();
// //       } else if (validationErrors.confirmPassword) {
// //         confirmPasswordRef.current.focus();
// //       }
// //       return;
// //     }

// //     const data = {
// //       userName: userName,
// //       email: email,
// //       password: password,
// //     };

// //     try {
// //       const res = await registerApi(data);
// //       if (res.data.success) {
// //         toast.success(res.data.message);
// //         navigate("/login");
// //       } else {
// //         toast.error(res.data.message);
// //       }
// //     } catch (err) {
// //       toast.error("Internal Server Error!");
// //     }
// //   };

// //   return (
// //     <div className="wave-section">
// //       <AnimatedWave />
// //       <div
// //         className="form-container d-flex justify-content-center align-items-center border rounded"
// //         style={{ minHeight: "85vh", backgroundColor: "#ffffff" }}
// //       >
// //         <div
// //           className="border rounded p-4"
// //           style={{
// //             width: "100%",
// //             maxWidth: "450px",
// //             backgroundColor: "#fff",
// //             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
// //           }}
// //         >
// //           <h2
// //             className="text-center mb-3"
// //             style={{ color: "#3586ff", fontSize: "1.5rem" }}
// //           >
// //             Create your account!
// //           </h2>
// //           <form onSubmit={handleSubmit} noValidate>
// //             <div className="mb-3">
// //               <label htmlFor="userName" style={{ fontSize: "0.9rem" }}>User Name</label>
// //               <input
// //                 id="userName"
// //                 ref={usernameRef}
// //                 onChange={changeUserName}
// //                 className="form-control"
// //                 type="text"
// //                 placeholder="Enter your username"
// //                 style={{ fontSize: "0.9rem", padding: "0.5rem", borderRadius: "0.25rem" }}
// //                 value={userName}
// //               />
// //               {errors.userName && (
// //                 <div className="text-danger" style={{ fontSize: "0.8rem" }}>
// //                   {errors.userName}
// //                 </div>
// //               )}
// //             </div>

// //             <div className="mb-3">
// //               <label htmlFor="email" style={{ fontSize: "0.9rem" }}>Email</label>
// //               <input
// //                 id="email"
// //                 ref={emailRef}
// //                 onChange={changeEmail}
// //                 className="form-control"
// //                 type="text"
// //                 placeholder="Enter your email"
// //                 style={{ fontSize: "0.9rem", padding: "0.5rem", borderRadius: "0.25rem" }}
// //                 value={email}
// //               />
// //               {errors.email && (
// //                 <div className="text-danger" style={{ fontSize: "0.8rem" }}>
// //                   {errors.email}
// //                 </div>
// //               )}
// //             </div>
// //             <div className="mb-3 position-relative">
// //               <label htmlFor="password" style={{ fontSize: "0.9rem" }}>Password</label>
// //               <input
// //                 id="password"
// //                 ref={passwordRef}
// //                 onChange={changePassword}
// //                 className="form-control custom-password"
// //                 type={showPassword ? "text" : "password"}
// //                 placeholder="Enter your password"
// //                 style={{ fontSize: "0.9rem", padding: "0.5rem", borderRadius: "0.25rem" }}
// //                 value={password}
// //                 aria-describedby="passwordHelpBlock"
// //               />
// //               <span
// //                 onClick={togglePasswordVisibility}
// //                 className="password-toggle-icon"
// //                 aria-label={showPassword ? "Hide password" : "Show password"}
// //               >
// //                 {showPassword ? <FaEyeSlash /> : <FaEye />}
// //               </span>
// //               {errors.password && (
// //                 <div className="text-danger" style={{ fontSize: "0.8rem" }}>
// //                   {errors.password}
// //                 </div>
// //               )}
// //             </div>
// //             <div className="mb-3 position-relative">
// //               <label htmlFor="confirmPassword" style={{ fontSize: "0.9rem" }}>Confirm Password</label>
// //               <input
// //                 id="confirmPassword"
// //                 ref={confirmPasswordRef}
// //                 onChange={changeConfirmPassword}
// //                 className="form-control custom-password"
// //                 type={showConfirmPassword ? "text" : "password"}
// //                 placeholder="Confirm your password"
// //                 style={{ fontSize: "0.9rem", padding: "0.5rem", borderRadius: "0.25rem" }}
// //                 value={confirmPassword}
// //                 aria-describedby="confirmPasswordHelpBlock"
// //               />
// //               <span
// //                 onClick={toggleConfirmPasswordVisibility}
// //                 className="password-toggle-icon"
// //                 aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
// //               >
// //                 {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
// //               </span>
// //               {errors.confirmPassword && (
// //                 <div className="text-danger" style={{ fontSize: "0.8rem" }}>
// //                   {errors.confirmPassword}
// //                 </div>
// //               )}
// //             </div>
// //             <button
// //               type="submit"
// //               className="custom-button border rounded btn w-100"
// //               style={{
// //                 backgroundColor: "#3586ff",
// //                 color: "#ffffff",
// //                 padding: "0.5rem",
// //                 fontSize: "1rem",
// //                 transition: "transform 0.2s",
// //               }}
// //               onMouseEnter={(e) => {
// //                 e.target.style.transform = "scale(1.05)";
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.target.style.transform = "scale(1)";
// //               }}
// //             >
// //               Register
// //             </button>
// //             <div className="text-center mt-2" style={{ fontSize: "0.9rem" }}>
// //               Already have an account?{" "}
// //               <Link to="/login" className="text-decoration-none" style={{ color: "#3586ff" }}>
// //                 Login
// //               </Link>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //       <style>
// //         {`.custom-password {
// //   font-family: sans-serif;
// //   -webkit-text-security: disc;
// //   text-security: disc;
// // }

// // .password-toggle-icon {
// //   position: absolute;
// //   right: 10px;
// //   top: 50%;
// //   transform: translateY(-50%);
// //   cursor: pointer;
// //   font-size: 1.2em; /* Adjust as needed for better visibility */
// // }

// // @media (max-width: 576px) {
// //   .form-container {
// //     padding: 1rem;
// //   }

// //   .custom-button {
// //     font-size: 0.8rem;
// //   }

// //   .form-control {
// //     font-size: 0.8rem;
// //     padding: 0.4rem;
// //   }

// //   h2 {
// //     font-size: 1.2rem;
// //   }
// // }`}
// //       </style>
// //     </div>
// //   );
// // };

// // export default Register;

// import React, { useRef, useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { registerApi } from "../apis/Api";
// import AnimatedWave from "../components/AnimatedWave";

// const Register = () => {
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const usernameRef = useRef();
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const confirmPasswordRef = useRef();

//   const changeUserName = (e) => {
//     setUserName(e.target.value);
//     setErrors((prevErrors) => ({ ...prevErrors, userName: "" }));
//   };

//   const changeEmail = (e) => {
//     setEmail(e.target.value);
//     setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
//   };

//   const changePassword = (e) => {
//     setPassword(e.target.value);
//     setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
//   };

//   const changeConfirmPassword = (e) => {
//     setConfirmPassword(e.target.value);
//     setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   const validate = () => {
//     const errors = {};
//     if (!userName) {
//       errors.userName = "User Name is required";
//     } else if (userName.length < 3) {
//       errors.userName = "User Name must be at least 3 characters long";
//     }

//     if (!email) {
//       errors.email = "Email is required";
//     } else {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(email)) {
//         errors.email = "Please enter a valid email address!";
//       }
//     }

//     if (!password) {
//       errors.password = "Password is required";
//     } else {
//       const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//       if (!passwordRegex.test(password)) {
//         errors.password =
//           "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.";
//       }
//     }

//     if (!confirmPassword) {
//       errors.confirmPassword = "Confirm Password is required";
//     } else if (password !== confirmPassword) {
//       errors.confirmPassword = "Passwords do not match!";
//     }

//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length > 0) {
//       if (validationErrors.userName) {
//         usernameRef.current.focus();
//       } else if (validationErrors.email) {
//         emailRef.current.focus();
//       } else if (validationErrors.password) {
//         passwordRef.current.focus();
//       } else if (validationErrors.confirmPassword) {
//         confirmPasswordRef.current.focus();
//       }
//       return;
//     }

//     const data = {
//       userName: userName,
//       email: email,
//       password: password,
//     };

//     try {
//       const res = await registerApi(data);
//       if (res.data.success) {
//         toast.success(res.data.message);
//         navigate("/login");
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (err) {
//       toast.error("Internal Server Error!");
//     }
//   };

//   return (
//     <div className="wave-section">
//       <AnimatedWave />
//       <div
//         className="form-container d-flex justify-content-center align-items-center border rounded"
//         style={{ minHeight: "85vh", backgroundColor: "#ffffff" }}
//       >
//         <div
//           className="border rounded p-4"
//           style={{
//             width: "100%",
//             maxWidth: "500px",
//             backgroundColor: "#fff",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//           }}
//         >
//           <h2
//             className="text-center mb-3"
//             style={{ color: "#3586ff", fontSize: "1.5rem" }}
//           >
//             Create your account!
//           </h2>
//           <form onSubmit={handleSubmit} noValidate>
//             <div className="mb-3">
//               <label htmlFor="userName" style={{ fontSize: "0.9rem" }}>User Name</label>
//               <input
//                 id="userName"
//                 ref={usernameRef}
//                 onChange={changeUserName}
//                 className="form-control"
//                 type="text"
//                 placeholder="Enter your username"
//                 style={{ fontSize: "0.9rem", padding: "0.5rem", borderRadius: "0.25rem" }}
//                 value={userName}
//               />
//               {errors.userName && (
//                 <div className="text-danger" style={{ fontSize: "0.8rem" }}>
//                   {errors.userName}
//                 </div>
//               )}
//             </div>

//             <div className="mb-3">
//               <label htmlFor="email" style={{ fontSize: "0.9rem" }}>Email</label>
//               <input
//                 id="email"
//                 ref={emailRef}
//                 onChange={changeEmail}
//                 className="form-control"
//                 type="text"
//                 placeholder="Enter your email"
//                 style={{ fontSize: "0.9rem", padding: "0.5rem", borderRadius: "0.25rem" }}
//                 value={email}
//               />
//               {errors.email && (
//                 <div className="text-danger" style={{ fontSize: "0.8rem" }}>
//                   {errors.email}
//                 </div>
//               )}
//             </div>
//             <div className="mb-3 position-relative">
//               <label htmlFor="password" style={{ fontSize: "0.9rem" }}>Password</label>
//               <input
//                 id="password"
//                 ref={passwordRef}
//                 onChange={changePassword}
//                 className="form-control"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 style={{ fontSize: "0.9rem", padding: "0.5rem", borderRadius: "0.25rem" }}
//                 value={password}
//                 aria-describedby="passwordHelpBlock"
//               />
//               <span
//                 onClick={togglePasswordVisibility}
//                 className="password-toggle-icon"
//                 aria-label={showPassword ? "Hide password" : "Show password"}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//               {errors.password && (
//                 <div className="text-danger" style={{ fontSize: "0.8rem" }}>
//                   {errors.password}
//                 </div>
//               )}
//             </div>
//             <div className="mb-3 position-relative">
//               <label htmlFor="confirmPassword" style={{ fontSize: "0.9rem" }}>Confirm Password</label>
//               <input
//                 id="confirmPassword"
//                 ref={confirmPasswordRef}
//                 onChange={changeConfirmPassword}
//                 className="form-control"
//                 type={showConfirmPassword ? "text" : "password"}
//                 placeholder="Confirm your password"
//                 style={{ fontSize: "0.9rem", padding: "0.5rem", borderRadius: "0.25rem" }}
//                 value={confirmPassword}
//                 aria-describedby="confirmPasswordHelpBlock"
//               />
//               <span
//                 onClick={toggleConfirmPasswordVisibility}
//                 className="password-toggle-icon"
//                 aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
//               >
//                 {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//               {errors.confirmPassword && (
//                 <div className="text-danger" style={{ fontSize: "0.8rem" }}>
//                   {errors.confirmPassword}
//                 </div>
//               )}
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
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = "scale(1.05)";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = "scale(1)";
//               }}
//             >
//               Register
//             </button>
//             <div className="text-center mt-2" style={{ fontSize: "0.9rem" }}>
//               Already have an account?{" "}
//               <Link to="/login" className="text-decoration-none" style={{ color: "#3586ff" }}>
//                 Login
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//       <style>
//         {`.custom-password {
//   font-family: sans-serif;
//   -webkit-text-security: disc;
//   text-security: disc;
// }

// .password-toggle-icon {
//   position: absolute;
//   right: 10px;
//   top: 50%;
//   transform: translateY(-50%);
//   cursor: pointer;
//   font-size: 1.2em; /* Adjust as needed for better visibility */
// }

// @media (max-width: 576px) {
//   .form-container {
//     padding: 1rem;
//   }

//   .custom-button {
//     font-size: 0.8rem;
//   }

//   .form-control {
//     font-size: 0.8rem;
//     padding: 0.4rem;
//   }

//   h2 {
//     font-size: 1.2rem;
//   }
// }`}
//       </style>
//     </div>
//   );
// };

// export default Register;

import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerApi } from "../apis/Api";
import AnimatedWave from "../components/AnimatedWave";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const changeUserName = (e) => {
    setUserName(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, userName: "" }));
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
  };

  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validate = () => {
    const errors = {};
    if (!userName) {
      errors.userName = "User Name is required";
    } else if (userName.length < 3) {
      errors.userName = "User Name must be at least 3 characters long";
    }

    if (!email) {
      errors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address!";
      }
    }

    if (!password) {
      errors.password = "Password is required";
    } else {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if (!passwordRegex.test(password)) {
        errors.password =
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.";
      }
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match!";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      if (validationErrors.userName) {
        usernameRef.current.focus();
      } else if (validationErrors.email) {
        emailRef.current.focus();
      } else if (validationErrors.password) {
        passwordRef.current.focus();
      } else if (validationErrors.confirmPassword) {
        confirmPasswordRef.current.focus();
      }
      return;
    }

    const data = {
      userName: userName,
      email: email,
      password: password,
    };

    try {
      const res = await registerApi(data);
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Internal Server Error!");
    }
  };

  return (
    <div className="wave-section">
      <AnimatedWave />
      <div
        className="form-container d-flex justify-content-center align-items-center border rounded"
        style={{ minHeight: "70vh", backgroundColor: "#ffffff" }}
      >
        <div
          className="border rounded p-4"
          style={{
            width: "100%",
            minWidth: "380px",
            maxWidth: "380px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2
            className="text-center mb-3"
            style={{ color: "#3586ff", fontSize: "1.5rem" }}
          >
            Create your account!
          </h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="userName" style={{ fontSize: "0.9rem" }}>
                User Name
              </label>
              <input
                id="userName"
                ref={usernameRef}
                onChange={changeUserName}
                className="form-control"
                type="text"
                placeholder="Enter your username"
                style={{
                  fontSize: "0.9rem",
                  padding: "0.5rem",
                  borderRadius: "0.25rem",
                }}
                value={userName}
              />
              {errors.userName && (
                <div className="text-danger" style={{ fontSize: "0.8rem" }}>
                  {errors.userName}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" style={{ fontSize: "0.9rem" }}>
                Email
              </label>
              <input
                id="email"
                ref={emailRef}
                onChange={changeEmail}
                className="form-control"
                type="text"
                placeholder="Enter your email"
                style={{
                  fontSize: "0.9rem",
                  padding: "0.5rem",
                  borderRadius: "0.25rem",
                }}
                value={email}
              />
              {errors.email && (
                <div className="text-danger" style={{ fontSize: "0.8rem" }}>
                  {errors.email}
                </div>
              )}
            </div>
            <div className="mb-3 position-relative">
              <label htmlFor="password" style={{ fontSize: "0.9rem" }}>
                Password
              </label>
              <input
                id="password"
                ref={passwordRef}
                onChange={changePassword}
                className="form-control"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                style={{
                  fontSize: "0.9rem",
                  padding: "0.5rem",
                  borderRadius: "0.25rem",
                }}
                value={password}
                aria-describedby="passwordHelpBlock"
              />
              <span
                onClick={togglePasswordVisibility}
                className="password-toggle-icon"
                aria-label={showPassword ? "Hide password" : "Show password"}
              ></span>
              {errors.password && (
                <div className="text-danger" style={{ fontSize: "0.8rem" }}>
                  {errors.password}
                </div>
              )}
            </div>
            <div className="mb-3 position-relative">
              <label htmlFor="confirmPassword" style={{ fontSize: "0.9rem" }}>
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                ref={confirmPasswordRef}
                onChange={changeConfirmPassword}
                className="form-control"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                style={{
                  fontSize: "0.9rem",
                  padding: "0.5rem",
                  borderRadius: "0.25rem",
                }}
                value={confirmPassword}
                aria-describedby="confirmPasswordHelpBlock"
              />
              <span
                onClick={toggleConfirmPasswordVisibility}
                className="password-toggle-icon"
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
              ></span>
              {errors.confirmPassword && (
                <div className="text-danger" style={{ fontSize: "0.8rem" }}>
                  {errors.confirmPassword}
                </div>
              )}
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
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            >
              Register
            </button>
            <div className="text-center mt-2" style={{ fontSize: "0.9rem" }}>
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-decoration-none"
                style={{ color: "#3586ff" }}
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
      <style>
        {`
        
        
        .custom-password {
  font-family: sans-serif;
  -webkit-text-security: disc;
  text-security: disc;
}



@media (max-width: 576px) {
  .form-container {
    padding: 1rem;
  }

  .custom-button {
    font-size: 0.8rem;
  }

  .form-control {
    font-size: 0.8rem;
    padding: 0.4rem;
  }

  h2 {
    font-size: 1.2rem;
  }
}`}
      </style>
    </div>
  );
};

export default Register;
