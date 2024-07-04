// // // // // import axios from "axios";
// // // // // import "bootstrap/dist/css/bootstrap.min.css";
// // // // // import { Chart } from "chart.js";
// // // // // import Compressor from "compressorjs";
// // // // // import React, { useEffect, useState } from "react";
// // // // // import { Doughnut } from "react-chartjs-2";
// // // // // import { ToastContainer, toast } from "react-toastify";
// // // // // import "react-toastify/dist/ReactToastify.css";
// // // // // import { getUserResultsApi } from "../apis/Api";
// // // // // import AnimatedWave from "../components/AnimatedWave";
// // // // // import avatar from "../images/avatar.jpg";

// // // // // const centerTextPlugin = {
// // // // //   id: "centerText",
// // // // //   beforeDraw: function (chart) {
// // // // //     if (chart.config.options.elements.center) {
// // // // //       const ctx = chart.ctx;
// // // // //       const centerConfig = chart.config.options.elements.center;
// // // // //       const fontStyle = centerConfig.fontStyle || "Arial";
// // // // //       const txt = centerConfig.text;
// // // // //       const color = centerConfig.color || "#000";
// // // // //       const sidePadding = centerConfig.sidePadding || 20;
// // // // //       const sidePaddingCalculated =
// // // // //         (sidePadding / 100) * (chart.innerRadius * 2);
// // // // //       ctx.font = "30px " + fontStyle;

// // // // //       const stringWidth = ctx.measureText(txt).width;
// // // // //       const elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

// // // // //       const widthRatio = elementWidth / stringWidth;
// // // // //       const newFontSize = Math.min(
// // // // //         Math.floor(30 * widthRatio),
// // // // //         chart.innerRadius * 2
// // // // //       );
// // // // //       const fontSizeToUse = Math.max(newFontSize, centerConfig.minFontSize);
// // // // //       const lineHeight = centerConfig.lineHeight || 25;
// // // // //       const wrapText = newFontSize < centerConfig.minFontSize;

// // // // //       ctx.textAlign = "center";
// // // // //       ctx.textBaseline = "middle";
// // // // //       ctx.font = fontSizeToUse + "px " + fontStyle;
// // // // //       ctx.fillStyle = color;

// // // // //       const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
// // // // //       const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

// // // // //       if (!wrapText) {
// // // // //         ctx.fillText(txt, centerX, centerY);
// // // // //         return;
// // // // //       }

// // // // //       const words = txt.split(" ");
// // // // //       let line = "";
// // // // //       const lines = [];

// // // // //       for (let n = 0; n < words.length; n++) {
// // // // //         const testLine = line + words[n] + " ";
// // // // //         const metrics = ctx.measureText(testLine);
// // // // //         const testWidth = metrics.width;
// // // // //         if (testWidth > elementWidth && n > 0) {
// // // // //           lines.push(line);
// // // // //           line = words[n] + " ";
// // // // //         } else {
// // // // //           line = testLine;
// // // // //         }
// // // // //       }
// // // // //       lines.push(line);

// // // // //       let lineY = centerY - (lines.length / 2) * lineHeight;
// // // // //       for (let k = 0; k < lines.length; k++) {
// // // // //         ctx.fillText(lines[k], centerX, lineY);
// // // // //         lineY += lineHeight;
// // // // //       }
// // // // //     }
// // // // //   },
// // // // // };

// // // // // Chart.register(centerTextPlugin);

// // // // // const ProfilePage = () => {
// // // // //   const [profile, setProfile] = useState({
// // // // //     userName: "",
// // // // //     email: "",
// // // // //     userImageUrl: "",
// // // // //   });
// // // // //   const [results, setResults] = useState([]);
// // // // //   const [totalScore, setTotalScore] = useState(0);
// // // // //   const [isEditing, setIsEditing] = useState(false);
// // // // //   const [selectedImage, setSelectedImage] = useState(null);
// // // // //   const [previewImage, setPreviewImage] = useState(null);
// // // // //   const [dailyQuote, setDailyQuote] = useState("");

// // // // //   useEffect(() => {
// // // // //     const fetchProfile = async () => {
// // // // //       try {
// // // // //         const user = JSON.parse(localStorage.getItem("user"));
// // // // //         const userId = user._id;

// // // // //         const response = await axios.get(
// // // // //           `http://localhost:5000/api/user/${userId}`
// // // // //         );
// // // // //         setProfile(response.data.product);
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching profile data:", error);
// // // // //       }
// // // // //     };

// // // // //     const fetchProfileAndResults = async () => {
// // // // //       try {
// // // // //         const user = JSON.parse(localStorage.getItem("user"));
// // // // //         const userId = user._id;

// // // // //         // Log the user ID to ensure it's correct
// // // // //         console.log("Fetching results for user ID:", userId);

// // // // //         // Fetch user results
// // // // //         const resultsResponse = await getUserResultsApi(userId);

// // // // //         // Log the API response
// // // // //         console.log("Results API response:", resultsResponse);

// // // // //         setResults(resultsResponse.data);

// // // // //         // Calculate total score
// // // // //         const total = resultsResponse.data.reduce(
// // // // //           (acc, result) => acc + result.totalScore,
// // // // //           0
// // // // //         );
// // // // //         setTotalScore(total);
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching profile and results data:", error);
// // // // //       }
// // // // //     };

// // // // //     const fetchDailyQuote = async () => {
// // // // //       try {
// // // // //         const response = await axios.get("https://api.quotable.io/random");
// // // // //         setDailyQuote(response.data.content);
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching daily quote:", error);
// // // // //       }
// // // // //     };

// // // // //     fetchProfile();
// // // // //     fetchProfileAndResults();
// // // // //     fetchDailyQuote();
// // // // //   }, []);

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setProfile({ ...profile, [name]: value });
// // // // //   };

// // // // //   const handleImageChange = (e) => {
// // // // //     const file = e.target.files[0];

// // // // //     new Compressor(file, {
// // // // //       quality: 0.6,
// // // // //       success(result) {
// // // // //         setSelectedImage(result);
// // // // //         setPreviewImage(URL.createObjectURL(result));
// // // // //       },
// // // // //       error(err) {
// // // // //         console.error(err.message);
// // // // //       },
// // // // //     });
// // // // //   };

// // // // //   const handleSave = async () => {
// // // // //     try {
// // // // //       const user = JSON.parse(localStorage.getItem("user"));
// // // // //       const userId = user._id;

// // // // //       let updatedProfile = { ...profile };

// // // // //       if (selectedImage) {
// // // // //         const reader = new FileReader();
// // // // //         reader.readAsDataURL(selectedImage);
// // // // //         reader.onloadend = () => {
// // // // //           updatedProfile.userImageUrl = reader.result;
// // // // //           saveProfile(updatedProfile, userId);
// // // // //         };
// // // // //       } else {
// // // // //         saveProfile(updatedProfile, userId);
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error updating profile data:", error);
// // // // //       toast.error("Error updating profile.");
// // // // //     }
// // // // //   };

// // // // //   const saveProfile = async (updatedProfile, userId) => {
// // // // //     try {
// // // // //       const response = await axios.put(
// // // // //         `http://localhost:5000/api/user/${userId}`,
// // // // //         updatedProfile
// // // // //       );

// // // // //       if (response.data.success) {
// // // // //         setProfile(response.data.product);
// // // // //         setIsEditing(false);
// // // // //         toast.success("Profile updated successfully!");
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error updating profile data:", error);
// // // // //       toast.error("Error updating profile.");
// // // // //     }
// // // // //   };

// // // // //   const getBackgroundColor = (score) => {
// // // // //     if (score >= 0 && score <= 19) return ["#D2E58D", "#ffffff"]; // Green
// // // // //     if (score >= 20 && score <= 29) return ["#F8E98C", "#ffffff"]; // Yellow
// // // // //     if (score >= 30 && score <= 50) return ["#E57373", "#ffffff"]; // Red
// // // // //     return ["#ffffff", "#ffffff"];
// // // // //   };

// // // // //   const data = {
// // // // //     datasets: [
// // // // //       {
// // // // //         data: [totalScore, 50 - totalScore], // Adjust according to your data
// // // // //         backgroundColor: getBackgroundColor(totalScore),
// // // // //         hoverBackgroundColor: getBackgroundColor(totalScore),
// // // // //         borderRadius: 20, // Curve the ends
// // // // //       },
// // // // //     ],
// // // // //   };

// // // // //   const options = {
// // // // //     cutout: "50%",
// // // // //     plugins: {
// // // // //       tooltip: {
// // // // //         callbacks: {
// // // // //           label: function (tooltipItem) {
// // // // //             return tooltipItem.label + ": " + tooltipItem.raw;
// // // // //           },
// // // // //         },
// // // // //       },
// // // // //     },
// // // // //     elements: {
// // // // //       center: {
// // // // //         text: totalScore.toString(),
// // // // //         color: "#000000",
// // // // //         fontStyle: "Arial",
// // // // //         sidePadding: 20,
// // // // //         minFontSize: 20,
// // // // //         lineHeight: 25,
// // // // //       },
// // // // //     },
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <AnimatedWave />
// // // // //       <ToastContainer />
// // // // //       <div className="container mt-5">
// // // // //         <div className="row mb-4">
// // // // //           <div className="col-md-8">
// // // // //             <div className="card shadow-sm">
// // // // //               <div className="card-body d-flex flex-column align-items-center">
// // // // //                 <div className="avatar-container mb-3">
// // // // //                   <img
// // // // //                     src={previewImage || profile.userImageUrl || avatar}
// // // // //                     alt="Avatar"
// // // // //                     className="rounded-circle img-thumbnail"
// // // // //                     style={{ width: "150px", height: "150px" }}
// // // // //                   />
// // // // //                 </div>
// // // // //                 <div className="text-center">
// // // // //                   {isEditing ? (
// // // // //                     <div>
// // // // //                       <input
// // // // //                         type="text"
// // // // //                         name="userName"
// // // // //                         value={profile.userName}
// // // // //                         onChange={handleChange}
// // // // //                         className="form-control mb-2"
// // // // //                         placeholder="Enter your name"
// // // // //                       />
// // // // //                       <input
// // // // //                         type="email"
// // // // //                         name="email"
// // // // //                         value={profile.email}
// // // // //                         onChange={handleChange}
// // // // //                         className="form-control mb-2"
// // // // //                         placeholder="Enter your email"
// // // // //                       />
// // // // //                       <input
// // // // //                         type="file"
// // // // //                         name="userImage"
// // // // //                         onChange={handleImageChange}
// // // // //                         className="form-control mb-2"
// // // // //                         accept="image/*"
// // // // //                       />
// // // // //                       <button className="btn btn-primary" onClick={handleSave}>
// // // // //                         Save
// // // // //                       </button>
// // // // //                       <button
// // // // //                         className="btn btn-secondary ml-2"
// // // // //                         onClick={() => setIsEditing(false)}
// // // // //                       >
// // // // //                         Cancel
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   ) : (
// // // // //                     <div>
// // // // //                       <h2 className="card-title">{profile.userName}</h2>
// // // // //                       <p className="card-text">
// // // // //                         <strong>Email:</strong> {profile.email}
// // // // //                       </p>
// // // // //                       <button
// // // // //                         className="btn btn-primary"
// // // // //                         onClick={() => setIsEditing(true)}
// // // // //                       >
// // // // //                         Update
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className="col-md-4">
// // // // //             <div className="card shadow-sm">
// // // // //               <div className="card-body text-center">
// // // // //                 <h3>Your Diagnostic Score</h3>
// // // // //                 <div className="chart-container my-3">
// // // // //                   <Doughnut
// // // // //                     data={data}
// // // // //                     options={options}
// // // // //                     width={150}
// // // // //                     height={150}
// // // // //                   />
// // // // //                 </div>
// // // // //                 <div>
// // // // //                   <button className="btn btn-primary mr-2">Diagnose</button>
// // // // //                   <button className="btn btn-primary">My Bookings</button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="row">
// // // // //           <div className="col-12 text-center">
// // // // //             <div className="card shadow-sm">
// // // // //               <div className="card-body">
// // // // //                 <h5 className="quote-title">Daily Quote</h5>
// // // // //                 <p className="quote-text">{dailyQuote}</p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //       <style jsx>{`
// // // // //         .avatar-container {
// // // // //           background: black;
// // // // //           border-radius: 50%;
// // // // //           padding: 5px;
// // // // //           margin-bottom: 20px;
// // // // //           text-align: center;
// // // // //         }

// // // // //         .chart-container {
// // // // //           width: 150px;
// // // // //           height: 150px;
// // // // //           margin: 0 auto;
// // // // //         }

// // // // //         .quote-container {
// // // // //           margin-top: 20px;
// // // // //         }

// // // // //         .quote-title {
// // // // //           font-weight: bold;
// // // // //           font-size: 1.5rem;
// // // // //         }

// // // // //         .quote-text {
// // // // //           font-style: italic;
// // // // //           font-size: 1.2rem;
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProfilePage;

// // // // import axios from "axios";
// // // // import "bootstrap/dist/css/bootstrap.min.css";
// // // // import { Chart } from "chart.js";
// // // // import Compressor from "compressorjs";
// // // // import React, { useEffect, useState } from "react";
// // // // import { Doughnut } from "react-chartjs-2";
// // // // import { ToastContainer, toast } from "react-toastify";
// // // // import "react-toastify/dist/ReactToastify.css";
// // // // import { getUserResultsApi } from "../apis/Api";
// // // // import AnimatedWave from "../components/AnimatedWave";
// // // // import avatar from "../images/avatar.jpg";

// // // // const centerTextPlugin = {
// // // //   id: "centerText",
// // // //   beforeDraw: function (chart) {
// // // //     if (chart.config.options.elements.center) {
// // // //       const ctx = chart.ctx;
// // // //       const centerConfig = chart.config.options.elements.center;
// // // //       const fontStyle = centerConfig.fontStyle || "Arial";
// // // //       const txt = centerConfig.text;
// // // //       const color = centerConfig.color || "#000";
// // // //       const sidePadding = centerConfig.sidePadding || 20;
// // // //       const sidePaddingCalculated =
// // // //         (sidePadding / 100) * (chart.innerRadius * 2);
// // // //       ctx.font = "30px " + fontStyle;

// // // //       const stringWidth = ctx.measureText(txt).width;
// // // //       const elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

// // // //       const widthRatio = elementWidth / stringWidth;
// // // //       const newFontSize = Math.min(
// // // //         Math.floor(30 * widthRatio),
// // // //         chart.innerRadius * 2
// // // //       );
// // // //       const fontSizeToUse = Math.max(newFontSize, centerConfig.minFontSize);
// // // //       const lineHeight = centerConfig.lineHeight || 25;
// // // //       const wrapText = newFontSize < centerConfig.minFontSize;

// // // //       ctx.textAlign = "center";
// // // //       ctx.textBaseline = "middle";
// // // //       ctx.font = fontSizeToUse + "px " + fontStyle;
// // // //       ctx.fillStyle = color;

// // // //       const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
// // // //       const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

// // // //       if (!wrapText) {
// // // //         ctx.fillText(txt, centerX, centerY);
// // // //         return;
// // // //       }

// // // //       const words = txt.split(" ");
// // // //       let line = "";
// // // //       const lines = [];

// // // //       for (let n = 0; n < words.length; n++) {
// // // //         const testLine = line + words[n] + " ";
// // // //         const metrics = ctx.measureText(testLine);
// // // //         const testWidth = metrics.width;
// // // //         if (testWidth > elementWidth && n > 0) {
// // // //           lines.push(line);
// // // //           line = words[n] + " ";
// // // //         } else {
// // // //           line = testLine;
// // // //         }
// // // //       }
// // // //       lines.push(line);

// // // //       let lineY = centerY - (lines.length / 2) * lineHeight;
// // // //       for (let k = 0; k < lines.length; k++) {
// // // //         ctx.fillText(lines[k], centerX, lineY);
// // // //         lineY += lineHeight;
// // // //       }
// // // //     }
// // // //   },
// // // // };

// // // // Chart.register(centerTextPlugin);

// // // // const ProfilePage = () => {
// // // //   const [profile, setProfile] = useState({
// // // //     userName: "",
// // // //     email: "",
// // // //     userImageUrl: "",
// // // //   });
// // // //   const [results, setResults] = useState([]);
// // // //   const [totalScore, setTotalScore] = useState(0);
// // // //   const [isEditing, setIsEditing] = useState(false);
// // // //   const [selectedImage, setSelectedImage] = useState(null);
// // // //   const [previewImage, setPreviewImage] = useState(null);
// // // //   const [dailyQuote, setDailyQuote] = useState("");
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     const fetchProfile = async () => {
// // // //       try {
// // // //         const user = JSON.parse(localStorage.getItem("user"));
// // // //         const userId = user._id;

// // // //         const response = await axios.get(
// // // //           `http://localhost:5000/api/user/${userId}`
// // // //         );
// // // //         setProfile(response.data.product);
// // // //       } catch (error) {
// // // //         console.error("Error fetching profile data:", error);
// // // //       }
// // // //     };

// // // //     const fetchProfileAndResults = async () => {
// // // //       try {
// // // //         const user = JSON.parse(localStorage.getItem("user"));
// // // //         const userId = user._id;

// // // //         console.log("Fetching results for user ID:", userId);

// // // //         const resultsResponse = await getUserResultsApi(userId);

// // // //         console.log("Results API response:", resultsResponse);

// // // //         setResults(resultsResponse.data);

// // // //         const total = resultsResponse.data.reduce(
// // // //           (acc, result) => acc + result.totalScore,
// // // //           0
// // // //         );
// // // //         setTotalScore(total);
// // // //       } catch (error) {
// // // //         console.error("Error fetching profile and results data:", error);
// // // //       }
// // // //     };

// // // //     const fetchDailyQuote = async () => {
// // // //       try {
// // // //         const response = await axios.get("https://api.quotable.io/random");
// // // //         setDailyQuote(response.data.content);
// // // //       } catch (error) {
// // // //         console.error("Error fetching daily quote:", error);
// // // //       }
// // // //     };

// // // //     fetchProfile();
// // // //     fetchProfileAndResults();
// // // //     fetchDailyQuote();
// // // //     setLoading(false);
// // // //   }, []);

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setProfile({ ...profile, [name]: value });
// // // //   };

// // // //   const handleImageChange = (e) => {
// // // //     const file = e.target.files[0];

// // // //     new Compressor(file, {
// // // //       quality: 0.6,
// // // //       success(result) {
// // // //         setSelectedImage(result);
// // // //         setPreviewImage(URL.createObjectURL(result));
// // // //       },
// // // //       error(err) {
// // // //         console.error(err.message);
// // // //       },
// // // //     });
// // // //   };

// // // //   const handleSave = async () => {
// // // //     try {
// // // //       const user = JSON.parse(localStorage.getItem("user"));
// // // //       const userId = user._id;

// // // //       let updatedProfile = { ...profile };

// // // //       if (selectedImage) {
// // // //         const reader = new FileReader();
// // // //         reader.readAsDataURL(selectedImage);
// // // //         reader.onloadend = () => {
// // // //           updatedProfile.userImageUrl = reader.result;
// // // //           saveProfile(updatedProfile, userId);
// // // //         };
// // // //       } else {
// // // //         saveProfile(updatedProfile, userId);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error updating profile data:", error);
// // // //       toast.error("Error updating profile.");
// // // //     }
// // // //   };

// // // //   const saveProfile = async (updatedProfile, userId) => {
// // // //     try {
// // // //       const response = await axios.put(
// // // //         `http://localhost:5000/api/user/${userId}`,
// // // //         updatedProfile
// // // //       );

// // // //       if (response.data.success) {
// // // //         setProfile(response.data.product);
// // // //         setIsEditing(false);
// // // //         toast.success("Profile updated successfully!");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error updating profile data:", error);
// // // //       toast.error("Error updating profile.");
// // // //     }
// // // //   };

// // // //   const getBackgroundColor = (score) => {
// // // //     if (score >= 0 && score <= 19) return ["#D2E58D", "#ffffff"]; // Green
// // // //     if (score >= 20 && score <= 29) return ["#F8E98C", "#ffffff"]; // Yellow
// // // //     if (score >= 30 && score <= 50) return ["#E57373", "#ffffff"]; // Red
// // // //     return ["#ffffff", "#ffffff"];
// // // //   };

// // // //   const data = {
// // // //     datasets: [
// // // //       {
// // // //         data: [totalScore, 50 - totalScore],
// // // //         backgroundColor: getBackgroundColor(totalScore),
// // // //         hoverBackgroundColor: getBackgroundColor(totalScore),
// // // //         borderRadius: 20,
// // // //       },
// // // //     ],
// // // //   };

// // // //   const options = {
// // // //     cutout: "50%",
// // // //     plugins: {
// // // //       tooltip: {
// // // //         callbacks: {
// // // //           label: function (tooltipItem) {
// // // //             return tooltipItem.label + ": " + tooltipItem.raw;
// // // //           },
// // // //         },
// // // //       },
// // // //     },
// // // //     elements: {
// // // //       center: {
// // // //         text: totalScore.toString(),
// // // //         color: "#000000",
// // // //         fontStyle: "Arial",
// // // //         sidePadding: 20,
// // // //         minFontSize: 20,
// // // //         lineHeight: 25,
// // // //       },
// // // //     },
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <AnimatedWave />
// // // //       <ToastContainer />
// // // //       {loading ? (
// // // //         <div className="loading-container">Loading...</div>
// // // //       ) : (
// // // //         <div>
// // // //           <div className="quote-container text-center my-2">
// // // //             <h5 className="quote-title">Quote for You</h5>
// // // //             <p className="quote-text">{dailyQuote}</p>
// // // //           </div>
// // // //           <div className="container d-flex flex-column justify-content-center align-items-center">
// // // //             <div className="row w-100">
// // // //               <div className="col-md-7 d-flex flex-column align-items-center">
// // // //                 <div className="card shadow-sm w-100">
// // // //                   <div className="card-body d-flex flex-row align-items-center">
// // // //                     <div className="avatar-container mr-3">
// // // //                       <img
// // // //                         src={previewImage || profile.userImageUrl || avatar}
// // // //                         alt="Avatar"
// // // //                         className="rounded-circle img-thumbnail"
// // // //                         style={{ width: "100px", height: "100px" }}
// // // //                       />
// // // //                     </div>
// // // //                     <div className="text-left">
// // // //                       {isEditing ? (
// // // //                         <div>
// // // //                           <input
// // // //                             type="text"
// // // //                             name="userName"
// // // //                             value={profile.userName}
// // // //                             onChange={handleChange}
// // // //                             className="form-control mb-2"
// // // //                             style={{fontSize:"0.9rem"}}

// // // //                             placeholder="Enter your name"
// // // //                           />
// // // //                           <input
// // // //                             type="email"
// // // //                             name="email"
// // // //                             value={profile.email}
// // // //                             onChange={handleChange}
// // // //                             className="form-control mb-2"
// // // //                             style={{fontSize:"0.9rem"}}

// // // //                             placeholder="Enter your email"
// // // //                           />
// // // //                           <input
// // // //                             type="file"
// // // //                             name="userImage"
// // // //                             onChange={handleImageChange}
// // // //                             className="form-control mb-2"
// // // //                             style={{fontSize:"0.9rem"}}

// // // //                             accept="image/*"
// // // //                           />
// // // //                           <button
// // // //                             className="btn btn-primary mr-2"
// // // //                             style={{fontSize:"0.9rem"}}
// // // //                             onClick={handleSave}
// // // //                           >
// // // //                             Save
// // // //                           </button>
// // // //                           <button
// // // //                             className="btn btn-secondary"
// // // //                             onClick={() => setIsEditing(false)}
// // // //                           >
// // // //                             Cancel
// // // //                           </button>
// // // //                         </div>
// // // //                       ) : (
// // // //                         <div>
// // // //                           <p className="card-text">
// // // //                             <strong>User Name:</strong> {profile.userName}
// // // //                           </p>
// // // //                           <p className="card-text">
// // // //                             <strong>Email:</strong> {profile.email}
// // // //                           </p>
// // // //                           <button
// // // //                             className="btn btn-primary mr-2"
// // // //                             onClick={() => setIsEditing(true)}
// // // //                           >
// // // //                             Update
// // // //                           </button>
// // // //                           <button className="btn btn-secondary">
// // // //                             Change Password
// // // //                           </button>
// // // //                         </div>
// // // //                       )}
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="col-md-5 d-flex flex-column align-items-center">
// // // //                 <div className="card shadow-sm w-100">
// // // //                   <div className="card-body text-center">
// // // //                     <h3>Your Diagnostic Score</h3>
// // // //                     <div className="chart-container my-3">
// // // //                       <Doughnut
// // // //                         data={data}
// // // //                         options={options}
// // // //                         width={150}
// // // //                         height={150}
// // // //                       />
// // // //                     </div>
// // // //                     <div>
// // // //                       <button className="btn btn-primary mr-2">
// // // //                         View Booking
// // // //                       </button>
// // // //                       <button className="btn btn-primary">Update Result</button>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //       <style jsx>{`
// // // //         .quote-container {
// // // //           font-size: 0.9rem;
// // // //           margin-top: -40px;
// // // //           color: #3586ff;
// // // //         }

// // // //         .avatar-container {
// // // //           background: black;
// // // //           border-radius: 50%;
// // // //           padding: 5px;
// // // //           margin-right: 20px;
// // // //           text-align: center;
// // // //         }

// // // //         .chart-container {
// // // //           width: 150px;
// // // //           height: 150px;
// // // //           margin: 0 auto;
// // // //         }

// // // //         .quote-title {
// // // //           font-weight: bold;
// // // //           font-size: 1.2rem;
// // // //           color: black;
// // // //         }

// // // //         .quote-text {
// // // //           font-style: italic;
// // // //           font-size: 1rem;
// // // //           margin-left: 20%;
// // // //           margin-right: 20%;
// // // //         }

// // // //         .btn,
// // // //         .card-title,
// // // //         .card-text,
// // // //         h3 {
// // // //           font-size: 0.9rem;
// // // //         }

// // // //         .btn {
// // // //           margin-right: 10px;
// // // //         }

// // // //         .loading-container {
// // // //           display: flex;
// // // //           justify-content: center;
// // // //           align-items: center;
// // // //           height: 100vh;
// // // //           font-size: 2rem;
// // // //           color: #3586ff;
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProfilePage;

// // // import axios from "axios";
// // // import "bootstrap/dist/css/bootstrap.min.css";
// // // import { Chart } from "chart.js";
// // // import Compressor from "compressorjs";
// // // import React, { useEffect, useState } from "react";
// // // import { Doughnut } from "react-chartjs-2";
// // // import { ToastContainer, toast } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";
// // // import { getUserResultsApi } from "../apis/Api";
// // // import AnimatedWave from "../components/AnimatedWave";
// // // import avatar from "../images/avatar.jpg";

// // // const centerTextPlugin = {
// // //   id: "centerText",
// // //   beforeDraw: function (chart) {
// // //     if (chart.config.options.elements.center) {
// // //       const ctx = chart.ctx;
// // //       const centerConfig = chart.config.options.elements.center;
// // //       const fontStyle = centerConfig.fontStyle || "Arial";
// // //       const txt = centerConfig.text;
// // //       const color = centerConfig.color || "#000";
// // //       const sidePadding = centerConfig.sidePadding || 20;
// // //       const sidePaddingCalculated =
// // //         (sidePadding / 100) * (chart.innerRadius * 2);
// // //       ctx.font = "30px " + fontStyle;

// // //       const stringWidth = ctx.measureText(txt).width;
// // //       const elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

// // //       const widthRatio = elementWidth / stringWidth;
// // //       const newFontSize = Math.min(
// // //         Math.floor(30 * widthRatio),
// // //         chart.innerRadius * 2
// // //       );
// // //       const fontSizeToUse = Math.max(newFontSize, centerConfig.minFontSize);
// // //       const lineHeight = centerConfig.lineHeight || 25;
// // //       const wrapText = newFontSize < centerConfig.minFontSize;

// // //       ctx.textAlign = "center";
// // //       ctx.textBaseline = "middle";
// // //       ctx.font = fontSizeToUse + "px " + fontStyle;
// // //       ctx.fillStyle = color;

// // //       const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
// // //       const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

// // //       if (!wrapText) {
// // //         ctx.fillText(txt, centerX, centerY);
// // //         return;
// // //       }

// // //       const words = txt.split(" ");
// // //       let line = "";
// // //       const lines = [];

// // //       for (let n = 0; n < words.length; n++) {
// // //         const testLine = line + words[n] + " ";
// // //         const metrics = ctx.measureText(testLine);
// // //         const testWidth = metrics.width;
// // //         if (testWidth > elementWidth && n > 0) {
// // //           lines.push(line);
// // //           line = words[n] + " ";
// // //         } else {
// // //           line = testLine;
// // //         }
// // //       }
// // //       lines.push(line);

// // //       let lineY = centerY - (lines.length / 2) * lineHeight;
// // //       for (let k = 0; k < lines.length; k++) {
// // //         ctx.fillText(lines[k], centerX, lineY);
// // //         lineY += lineHeight;
// // //       }
// // //     }
// // //   },
// // // };

// // // Chart.register(centerTextPlugin);

// // // const ProfilePage = () => {
// // //   const [profile, setProfile] = useState({
// // //     userName: "",
// // //     email: "",
// // //     userImageUrl: "",
// // //   });
// // //   const [results, setResults] = useState([]);
// // //   const [totalScore, setTotalScore] = useState(0);
// // //   const [isEditing, setIsEditing] = useState(false);
// // //   const [selectedImage, setSelectedImage] = useState(null);
// // //   const [previewImage, setPreviewImage] = useState(null);
// // //   const [dailyQuote, setDailyQuote] = useState("");
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const fetchProfile = async () => {
// // //       try {
// // //         const user = JSON.parse(localStorage.getItem("user"));
// // //         const userId = user._id;

// // //         const response = await axios.get(
// // //           `http://localhost:5000/api/user/${userId}`
// // //         );
// // //         setProfile(response.data.product);
// // //       } catch (error) {
// // //         console.error("Error fetching profile data:", error);
// // //       }
// // //     };

// // //     const fetchProfileAndResults = async () => {
// // //       try {
// // //         const user = JSON.parse(localStorage.getItem("user"));
// // //         const userId = user._id;

// // //         console.log("Fetching results for user ID:", userId);

// // //         const resultsResponse = await getUserResultsApi(userId);

// // //         console.log("Results API response:", resultsResponse);

// // //         setResults(resultsResponse.data);

// // //         const total = resultsResponse.data.reduce(
// // //           (acc, result) => acc + result.totalScore,
// // //           0
// // //         );
// // //         setTotalScore(total);
// // //       } catch (error) {
// // //         console.error("Error fetching profile and results data:", error);
// // //       }
// // //     };

// // //     const fetchDailyQuote = async () => {
// // //       try {
// // //         const response = await axios.get("https://api.quotable.io/random");
// // //         setDailyQuote(response.data.content);
// // //       } catch (error) {
// // //         console.error("Error fetching daily quote:", error);
// // //       }
// // //     };

// // //     fetchProfile();
// // //     fetchProfileAndResults();
// // //     fetchDailyQuote();
// // //     setLoading(false);
// // //   }, []);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setProfile({ ...profile, [name]: value });
// // //   };

// // //   const handleImageChange = (e) => {
// // //     const file = e.target.files[0];

// // //     new Compressor(file, {
// // //       quality: 0.6,
// // //       success(result) {
// // //         setSelectedImage(result);
// // //         setPreviewImage(URL.createObjectURL(result));
// // //       },
// // //       error(err) {
// // //         console.error(err.message);
// // //       },
// // //     });
// // //   };

// // //   const handleSave = async () => {
// // //     try {
// // //       const user = JSON.parse(localStorage.getItem("user"));
// // //       const userId = user._id;

// // //       let updatedProfile = { ...profile };

// // //       if (selectedImage) {
// // //         const reader = new FileReader();
// // //         reader.readAsDataURL(selectedImage);
// // //         reader.onloadend = () => {
// // //           updatedProfile.userImageUrl = reader.result;
// // //           saveProfile(updatedProfile, userId);
// // //         };
// // //       } else {
// // //         saveProfile(updatedProfile, userId);
// // //       }
// // //     } catch (error) {
// // //       console.error("Error updating profile data:", error);
// // //       toast.error("Error updating profile.");
// // //     }
// // //   };

// // //   const saveProfile = async (updatedProfile, userId) => {
// // //     try {
// // //       const response = await axios.put(
// // //         `http://localhost:5000/api/user/${userId}`,
// // //         updatedProfile
// // //       );

// // //       if (response.data.success) {
// // //         setProfile(response.data.product);
// // //         setIsEditing(false);
// // //         toast.success("Profile updated successfully!");
// // //       }
// // //     } catch (error) {
// // //       console.error("Error updating profile data:", error);
// // //       toast.error("Error updating profile.");
// // //     }
// // //   };

// // //   const getBackgroundColor = (score) => {
// // //     if (score >= 0 && score <= 19) return ["#D2E58D", "#ffffff"]; // Green
// // //     if (score >= 20 && score <= 29) return ["#F8E98C", "#ffffff"]; // Yellow
// // //     if (score >= 30 && score <= 50) return ["#E57373", "#ffffff"]; // Red
// // //     return ["#ffffff", "#ffffff"];
// // //   };

// // //   const data = {
// // //     datasets: [
// // //       {
// // //         data: [totalScore, 50 - totalScore],
// // //         backgroundColor: getBackgroundColor(totalScore),
// // //         hoverBackgroundColor: getBackgroundColor(totalScore),
// // //         borderRadius: 20,
// // //       },
// // //     ],
// // //   };

// // //   const options = {
// // //     cutout: "50%",
// // //     plugins: {
// // //       tooltip: {
// // //         callbacks: {
// // //           label: function (tooltipItem) {
// // //             return tooltipItem.label + ": " + tooltipItem.raw;
// // //           },
// // //         },
// // //       },
// // //     },
// // //     elements: {
// // //       center: {
// // //         text: totalScore.toString(),
// // //         color: "#000000",
// // //         fontStyle: "Arial",
// // //         sidePadding: 20,
// // //         minFontSize: 20,
// // //         lineHeight: 25,
// // //       },
// // //     },
// // //   };

// // //   return (
// // //     <div>
// // //       <AnimatedWave />
// // //       <ToastContainer />
// // //       {loading ? (
// // //         <div className="loading-container">Loading...</div>
// // //       ) : (
// // //         <div>
// // //           <div className="quote-container text-center my-4">
// // //             <p className="quote-text">{dailyQuote}</p>
// // //           </div>
// // //           <div className="container d-flex flex-column justify-content-between align-items-center">
// // //             <div className="row w-100">
// // //               <div className="col-md-8 d-flex flex-column align-items-center mb-3">
// // //                 <div
// // //                   className="card shadow-sm w-100"
// // //                   style={{ height: "200px" }}
// // //                 >
// // //                   <div className="card-body d-flex flex-row align-items-center">
// // //                     <div className="avatar-container mr-3">
// // //                       <img
// // //                         src={previewImage || profile.userImageUrl || avatar}
// // //                         alt="Avatar"
// // //                         className="rounded-circle img-thumbnail"
// // //                         style={{ width: "100px", height: "100px" }}
// // //                       />
// // //                     </div>
// // //                     <div className="text-left">
// // //                       {isEditing ? (
// // //                         <div>
// // //                           <input
// // //                             type="text"
// // //                             name="userName"
// // //                             value={profile.userName}
// // //                             onChange={handleChange}
// // //                             className="form-control mb-2"
// // //                             style={{ fontSize: "0.9rem" }}
// // //                             placeholder="Enter your name"
// // //                           />
// // //                           <input
// // //                             type="email"
// // //                             name="email"
// // //                             value={profile.email}
// // //                             onChange={handleChange}
// // //                             className="form-control mb-2"
// // //                             style={{ fontSize: "0.9rem" }}
// // //                             placeholder="Enter your email"
// // //                           />
// // //                           <input
// // //                             type="file"
// // //                             name="userImage"
// // //                             onChange={handleImageChange}
// // //                             className="form-control mb-2"
// // //                             style={{ fontSize: "0.9rem" }}
// // //                             accept="image/*"
// // //                           />
// // //                           <button
// // //                             className="btn btn-primary mr-2"
// // //                             style={{ fontSize: "0.9rem" }}
// // //                             onClick={handleSave}
// // //                           >
// // //                             Save
// // //                           </button>
// // //                           <button
// // //                             className="btn btn-secondary"
// // //                             onClick={() => setIsEditing(false)}
// // //                           >
// // //                             Cancel
// // //                           </button>
// // //                         </div>
// // //                       ) : (
// // //                         <div>
// // //                           <p className="card-text">
// // //                             <strong>User Name:</strong> {profile.userName}
// // //                           </p>
// // //                           <p className="card-text">
// // //                             <strong>Email:</strong> {profile.email}
// // //                           </p>
// // //                           <button
// // //                             className="btn btn-primary mr-2"
// // //                             onClick={() => setIsEditing(true)}
// // //                           >
// // //                             Update
// // //                           </button>
// // //                           <button className="btn btn-secondary">
// // //                             Change Password
// // //                           </button>
// // //                         </div>
// // //                       )}
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //               <div className="col-md-4 d-flex flex-column align-items-center">
// // //                 <div
// // //                   className="card shadow-sm w-100"
// // //                   style={{ height: "200px" }}
// // //                 >
// // //                   <div className="card-body text-center">
// // //                     <div className="chart-container my-1">
// // //                       <Doughnut
// // //                         data={data}
// // //                         options={options}
// // //                         width={150}
// // //                         height={150}
// // //                       />
// // //                     </div>
// // //                     <div>
// // //                       <button className="btn btn-primary mr-2">
// // //                         View Booking
// // //                       </button>
// // //                       <button className="btn btn-primary">Update Result</button>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //       <style jsx>{`
// // //         .quote-container {
// // //           font-size: 0.9rem;
// // //           margin-top: -40px;
// // //           color: #3586ff;
// // //         }

// // //         .avatar-container {
// // //           background: black;
// // //           border-radius: 50%;
// // //           padding: 5px;
// // //           margin-right: 20px;
// // //           text-align: center;
// // //         }

// // //         .chart-container {
// // //           width: 150px;
// // //           height: 150px;
// // //           margin: 0 auto;
// // //         }

// // //         .quote-title {
// // //           font-weight: bold;
// // //           font-size: 1.2rem;
// // //           color: black;
// // //         }

// // //         .quote-text {
// // //           font-style: italic;
// // //           font-size: 1rem;
// // //           margin-left: 20%;
// // //           margin-right: 20%;
// // //         }

// // //         .btn,
// // //         .card-title,
// // //         .card-text,
// // //         h3 {
// // //           font-size: 0.9rem;
// // //         }

// // //         .btn {
// // //           margin-right: 10px;
// // //         }

// // //         .loading-container {
// // //           display: flex;
// // //           justify-content: center;
// // //           align-items: center;
// // //           height: 100vh;
// // //           font-size: 2rem;
// // //           color: #3586ff;
// // //         }

// // //         @media (max-width: 767.98px) {
// // //           .col-md-6 {
// // //             margin-bottom: 15px;
// // //           }
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default ProfilePage;

// // import axios from "axios";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { Chart } from "chart.js";
// // import Compressor from "compressorjs";
// // import React, { useEffect, useState } from "react";
// // import { Doughnut } from "react-chartjs-2";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import { getUserResultsApi } from "../apis/Api";
// // import AnimatedWave from "../components/AnimatedWave";
// // import avatar from "../images/avatar.jpg";

// // const centerTextPlugin = {
// //   id: "centerText",
// //   beforeDraw: function (chart) {
// //     if (chart.config.options.elements.center) {
// //       const ctx = chart.ctx;
// //       const centerConfig = chart.config.options.elements.center;
// //       const fontStyle = centerConfig.fontStyle || "Arial";
// //       const txt = centerConfig.text;
// //       const color = centerConfig.color || "#000";
// //       const sidePadding = centerConfig.sidePadding || 20;
// //       const sidePaddingCalculated =
// //         (sidePadding / 100) * (chart.innerRadius * 2);
// //       ctx.font = "30px " + fontStyle;

// //       const stringWidth = ctx.measureText(txt).width;
// //       const elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

// //       const widthRatio = elementWidth / stringWidth;
// //       const newFontSize = Math.min(
// //         Math.floor(30 * widthRatio),
// //         chart.innerRadius * 2
// //       );
// //       const fontSizeToUse = Math.max(newFontSize, centerConfig.minFontSize);
// //       const lineHeight = centerConfig.lineHeight || 25;
// //       const wrapText = newFontSize < centerConfig.minFontSize;

// //       ctx.textAlign = "center";
// //       ctx.textBaseline = "middle";
// //       ctx.font = fontSizeToUse + "px " + fontStyle;
// //       ctx.fillStyle = color;

// //       const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
// //       const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

// //       if (!wrapText) {
// //         ctx.fillText(txt, centerX, centerY);
// //         return;
// //       }

// //       const words = txt.split(" ");
// //       let line = "";
// //       const lines = [];

// //       for (let n = 0; n < words.length; n++) {
// //         const testLine = line + words[n] + " ";
// //         const metrics = ctx.measureText(testLine);
// //         const testWidth = metrics.width;
// //         if (testWidth > elementWidth && n > 0) {
// //           lines.push(line);
// //           line = words[n] + " ";
// //         } else {
// //           line = testLine;
// //         }
// //       }
// //       lines.push(line);

// //       let lineY = centerY - (lines.length / 2) * lineHeight;
// //       for (let k = 0; k < lines.length; k++) {
// //         ctx.fillText(lines[k], centerX, lineY);
// //         lineY += lineHeight;
// //       }
// //     }
// //   },
// // };

// // Chart.register(centerTextPlugin);

// // const ProfilePage = () => {
// //   const [profile, setProfile] = useState({
// //     userName: "",
// //     email: "",
// //     userImageUrl: "",
// //   });
// //   const [results, setResults] = useState([]);
// //   const [totalScore, setTotalScore] = useState(0);
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [previewImage, setPreviewImage] = useState(null);
// //   const [dailyQuote, setDailyQuote] = useState("");
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         const user = JSON.parse(localStorage.getItem("user"));
// //         const userId = user._id;

// //         const response = await axios.get(
// //           `http://localhost:5000/api/user/${userId}`
// //         );
// //         setProfile(response.data.product);
// //       } catch (error) {
// //         console.error("Error fetching profile data:", error);
// //       }
// //     };

// //     const fetchProfileAndResults = async () => {
// //       try {
// //         const user = JSON.parse(localStorage.getItem("user"));
// //         const userId = user._id;

// //         console.log("Fetching results for user ID:", userId);

// //         const resultsResponse = await getUserResultsApi(userId);

// //         console.log("Results API response:", resultsResponse);

// //         setResults(resultsResponse.data);

// //         const total = resultsResponse.data.reduce(
// //           (acc, result) => acc + result.totalScore,
// //           0
// //         );
// //         setTotalScore(total);
// //       } catch (error) {
// //         console.error("Error fetching profile and results data:", error);
// //       }
// //     };

// //     const fetchDailyQuote = async () => {
// //       try {
// //         const response = await axios.get("https://api.quotable.io/random");
// //         setDailyQuote(response.data.content);
// //       } catch (error) {
// //         console.error("Error fetching daily quote:", error);
// //       }
// //     };

// //     fetchProfile();
// //     fetchProfileAndResults();
// //     fetchDailyQuote();
// //     setLoading(false);
// //   }, []);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setProfile({ ...profile, [name]: value });
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];

// //     new Compressor(file, {
// //       quality: 0.6,
// //       success(result) {
// //         setSelectedImage(result);
// //         setPreviewImage(URL.createObjectURL(result));
// //       },
// //       error(err) {
// //         console.error(err.message);
// //       },
// //     });
// //   };

// //   const handleSave = async () => {
// //     try {
// //       const user = JSON.parse(localStorage.getItem("user"));
// //       const userId = user._id;

// //       let updatedProfile = { ...profile };

// //       if (selectedImage) {
// //         const reader = new FileReader();
// //         reader.readAsDataURL(selectedImage);
// //         reader.onloadend = () => {
// //           updatedProfile.userImageUrl = reader.result;
// //           saveProfile(updatedProfile, userId);
// //         };
// //       } else {
// //         saveProfile(updatedProfile, userId);
// //       }
// //     } catch (error) {
// //       console.error("Error updating profile data:", error);
// //       toast.error("Error updating profile.");
// //     }
// //   };

// //   const saveProfile = async (updatedProfile, userId) => {
// //     try {
// //       const response = await axios.put(
// //         `http://localhost:5000/api/user/${userId}`,
// //         updatedProfile
// //       );

// //       if (response.data.success) {
// //         setProfile(response.data.product);
// //         setIsEditing(false);
// //         toast.success("Profile updated successfully!");
// //       }
// //     } catch (error) {
// //       console.error("Error updating profile data:", error);
// //       toast.error("Error updating profile.");
// //     }
// //   };

// //   const getBackgroundColor = (score) => {
// //     if (score >= 0 && score <= 19) return ["#D2E58D", "#ffffff"]; // Green
// //     if (score >= 20 && score <= 29) return ["#F8E98C", "#ffffff"]; // Yellow
// //     if (score >= 30 && score <= 50) return ["#E57373", "#ffffff"]; // Red
// //     return ["#ffffff", "#ffffff"];
// //   };

// //   const data = {
// //     datasets: [
// //       {
// //         data: [totalScore, 50 - totalScore],
// //         backgroundColor: getBackgroundColor(totalScore),
// //         hoverBackgroundColor: getBackgroundColor(totalScore),
// //         borderRadius: 20,
// //       },
// //     ],
// //   };

// //   const options = {
// //     cutout: "50%",
// //     plugins: {
// //       tooltip: {
// //         callbacks: {
// //           label: function (tooltipItem) {
// //             return tooltipItem.label + ": " + tooltipItem.raw;
// //           },
// //         },
// //       },
// //     },
// //     elements: {
// //       center: {
// //         text: totalScore.toString(),
// //         color: "#000000",
// //         fontStyle: "Arial",
// //         sidePadding: 20,
// //         minFontSize: 20,
// //         lineHeight: 25,
// //       },
// //     },
// //   };

// //   return (
// //     <div>
// //       <AnimatedWave />
// //       <ToastContainer />
// //       {loading ? (
// //         <div className="loading-container">Loading...</div>
// //       ) : (
// //         <div>
// //           <div className="quote-container text-center my-4">
// //             <p className="quote-text">{dailyQuote}</p>
// //           </div>
// //           <div className="container d-flex flex-column justify-content-between align-items-center">
// //             <div className="row w-100">
// //               <div className="col-md-8 d-flex flex-column align-items-center mb-3">
// //                 <div className="card shadow-sm w-100">
// //                   <div className="card-body d-flex flex-row align-items-center">
// //                     <div className="avatar-container mr-3">
// //                       <img
// //                         src={previewImage || profile.userImageUrl || avatar}
// //                         alt="Avatar"
// //                         className="rounded-circle img-thumbnail"
// //                         style={{ width: "100px", height: "100px" }}
// //                       />
// //                     </div>
// //                     <div className="text-left">
// //                       {isEditing ? (
// //                         <div>
// //                           <input
// //                             type="text"
// //                             name="userName"
// //                             value={profile.userName}
// //                             onChange={handleChange}
// //                             className="form-control mb-2"
// //                             style={{ fontSize: "0.9rem" }}
// //                             placeholder="Enter your name"
// //                           />
// //                           <input
// //                             type="email"
// //                             name="email"
// //                             value={profile.email}
// //                             onChange={handleChange}
// //                             className="form-control mb-2"
// //                             style={{ fontSize: "0.9rem" }}
// //                             placeholder="Enter your email"
// //                           />
// //                           <input
// //                             type="file"
// //                             name="userImage"
// //                             onChange={handleImageChange}
// //                             className="form-control mb-2"
// //                             style={{ fontSize: "0.9rem" }}
// //                             accept="image/*"
// //                           />
// //                           <button
// //                             className="btn btn-primary mr-2"
// //                             style={{ fontSize: "0.9rem" }}
// //                             onClick={handleSave}
// //                           >
// //                             Save
// //                           </button>
// //                           <button
// //                             className="btn btn-secondary"
// //                             onClick={() => setIsEditing(false)}
// //                           >
// //                             Cancel
// //                           </button>
// //                         </div>
// //                       ) : (
// //                         <div>
// //                           <p className="card-text">
// //                             <strong>User Name:</strong> {profile.userName}
// //                           </p>
// //                           <p className="card-text">
// //                             <strong>Email:</strong> {profile.email}
// //                           </p>
// //                           <button
// //                             className="btn btn-primary mr-2"
// //                             onClick={() => setIsEditing(true)}
// //                           >
// //                             Update
// //                           </button>
// //                           <button className="btn btn-secondary">
// //                             Change Password
// //                           </button>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="col-md-4 d-flex flex-column align-items-center">
// //                 <div className="card shadow-sm w-100">
// //                   <div className="card-body text-center">
// //                     <div className="chart-container my-1">
// //                       <Doughnut
// //                         data={data}
// //                         options={options}
// //                         width={150}
// //                         height={150}
// //                       />
// //                     </div>
// //                     <div>
// //                       <button className="btn btn-primary mr-2">
// //                         View Booking
// //                       </button>
// //                       <button className="btn btn-primary">Update Result</button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //       <style jsx>{`
// //         .quote-container {
// //           font-size: 0.9rem;
// //           margin-top: -40px;
// //           color: #3586ff;
// //         }

// //         .avatar-container {
// //           background: black;
// //           border-radius: 50%;
// //           padding: 5px;
// //           margin-right: 20px;
// //           text-align: center;
// //           height: auto;
// //         }

// //         .chart-container {
// //           width: 150px;
// //           height: 150px;
// //           margin: 0 auto;
// //         }

// //         .quote-title {
// //           font-weight: bold;
// //           font-size: 1.2rem;
// //           color: black;
// //         }

// //         .quote-text {
// //           font-style: italic;
// //           font-size: 1rem;
// //           margin-left: 20%;
// //           margin-right: 20%;
// //         }

// //         .btn,
// //         .card-title,
// //         .card-text,
// //         h3 {
// //           font-size: 0.9rem;
// //         }

// //         .btn {
// //           margin-right: 10px;
// //         }

// //         .loading-container {
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //           height: 100vh;
// //           font-size: 2rem;
// //           color: #3586ff;
// //         }

// //         @media (max-width: 767.98px) {
// //           .col-md-6 {
// //             margin-bottom: 15px;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default ProfilePage;

// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Chart } from "chart.js";
// import Compressor from "compressorjs";
// import React, { useEffect, useState } from "react";
// import { Doughnut } from "react-chartjs-2";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { getUserResultsApi } from "../apis/Api";
// import AnimatedWave from "../components/AnimatedWave";
// import avatar from "../images/avatar.jpg";

// const centerTextPlugin = {
//   id: "centerText",
//   beforeDraw: function (chart) {
//     if (chart.config.options.elements.center) {
//       const ctx = chart.ctx;
//       const centerConfig = chart.config.options.elements.center;
//       const fontStyle = centerConfig.fontStyle || "Arial";
//       const txt = centerConfig.text;
//       const color = centerConfig.color || "#000";
//       const sidePadding = centerConfig.sidePadding || 20;
//       const sidePaddingCalculated =
//         (sidePadding / 100) * (chart.innerRadius * 2);
//       ctx.font = "30px " + fontStyle;

//       const stringWidth = ctx.measureText(txt).width;
//       const elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

//       const widthRatio = elementWidth / stringWidth;
//       const newFontSize = Math.min(
//         Math.floor(30 * widthRatio),
//         chart.innerRadius * 2
//       );
//       const fontSizeToUse = Math.max(newFontSize, centerConfig.minFontSize);
//       const lineHeight = centerConfig.lineHeight || 25;
//       const wrapText = newFontSize < centerConfig.minFontSize;

//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";
//       ctx.font = fontSizeToUse + "px " + fontStyle;
//       ctx.fillStyle = color;

//       const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
//       const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

//       if (!wrapText) {
//         ctx.fillText(txt, centerX, centerY);
//         return;
//       }

//       const words = txt.split(" ");
//       let line = "";
//       const lines = [];

//       for (let n = 0; n < words.length; n++) {
//         const testLine = line + words[n] + " ";
//         const metrics = ctx.measureText(testLine);
//         const testWidth = metrics.width;
//         if (testWidth > elementWidth && n > 0) {
//           lines.push(line);
//           line = words[n] + " ";
//         } else {
//           line = testLine;
//         }
//       }
//       lines.push(line);

//       let lineY = centerY - (lines.length / 2) * lineHeight;
//       for (let k = 0; k < lines.length; k++) {
//         ctx.fillText(lines[k], centerX, lineY);
//         lineY += lineHeight;
//       }
//     }
//   },
// };

// Chart.register(centerTextPlugin);

// const ProfilePage = () => {
//   const [profile, setProfile] = useState({
//     userName: "",
//     email: "",
//     userImageUrl: "",
//   });
//   const [results, setResults] = useState([]);
//   const [totalScore, setTotalScore] = useState(0);
//   const [isEditing, setIsEditing] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(null);
//   const [dailyQuote, setDailyQuote] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem("user"));
//         const userId = user._id;

//         const response = await axios.get(
//           `http://localhost:5000/api/user/${userId}`
//         );
//         setProfile(response.data.product);
//       } catch (error) {
//         console.error("Error fetching profile data:", error);
//       }
//     };

//     const fetchProfileAndResults = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem("user"));
//         const userId = user._id;

//         console.log("Fetching results for user ID:", userId);

//         const resultsResponse = await getUserResultsApi(userId);

//         console.log("Results API response:", resultsResponse);

//         setResults(resultsResponse.data);

//         const total = resultsResponse.data.reduce(
//           (acc, result) => acc + result.totalScore,
//           0
//         );
//         setTotalScore(total);
//       } catch (error) {
//         console.error("Error fetching profile and results data:", error);
//       }
//     };

//     const fetchDailyQuote = async () => {
//       try {
//         const response = await axios.get("https://api.quotable.io/random");
//         setDailyQuote(response.data.content);
//       } catch (error) {
//         console.error("Error fetching daily quote:", error);
//       }
//     };

//     fetchProfile();
//     fetchProfileAndResults();
//     fetchDailyQuote();
//     setLoading(false);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];

//     new Compressor(file, {
//       quality: 0.6,
//       success(result) {
//         setSelectedImage(result);
//         setPreviewImage(URL.createObjectURL(result));
//       },
//       error(err) {
//         console.error(err.message);
//       },
//     });
//   };

//   const handleSave = async () => {
//     try {
//       const user = JSON.parse(localStorage.getItem("user"));
//       const userId = user._id;

//       let updatedProfile = { ...profile };

//       if (selectedImage) {
//         const reader = new FileReader();
//         reader.readAsDataURL(selectedImage);
//         reader.onloadend = () => {
//           updatedProfile.userImageUrl = reader.result;
//           saveProfile(updatedProfile, userId);
//         };
//       } else {
//         saveProfile(updatedProfile, userId);
//       }
//     } catch (error) {
//       console.error("Error updating profile data:", error);
//       toast.error("Error updating profile.");
//     }
//   };

//   const saveProfile = async (updatedProfile, userId) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/user/${userId}`,
//         updatedProfile
//       );

//       if (response.data.success) {
//         setProfile(response.data.product);
//         setIsEditing(false);
//         toast.success("Profile updated successfully!");
//       }
//     } catch (error) {
//       console.error("Error updating profile data:", error);
//       toast.error("Error updating profile.");
//     }
//   };

//   const getBackgroundColor = (score) => {
//     if (score >= 0 && score <= 19) return ["#D2E58D", "#ffffff"]; // Green
//     if (score >= 20 && score <= 29) return ["#F8E98C", "#ffffff"]; // Yellow
//     if (score >= 30 && score <= 50) return ["#E57373", "#ffffff"]; // Red
//     return ["#ffffff", "#ffffff"];
//   };

//   const data = {
//     datasets: [
//       {
//         data: [totalScore, 50 - totalScore],
//         backgroundColor: getBackgroundColor(totalScore),
//         hoverBackgroundColor: getBackgroundColor(totalScore),
//         borderRadius: 20,
//       },
//     ],
//   };

//   const options = {
//     cutout: "50%",
//     plugins: {
//       tooltip: {
//         callbacks: {
//           label: function (tooltipItem) {
//             return tooltipItem.label + ": " + tooltipItem.raw;
//           },
//         },
//       },
//     },
//     elements: {
//       center: {
//         text: totalScore.toString(),
//         color: "#000000",
//         fontStyle: "Arial",
//         sidePadding: 20,
//         minFontSize: 20,
//         lineHeight: 25,
//       },
//     },
//   };

//   return (
//     <div>
//       <AnimatedWave />
//       <ToastContainer />
//       {loading ? (
//         <div className="loading-container">Loading...</div>
//       ) : (
//         <div>
//           <div className="quote-container text-center my-4">
//             <p className="quote-text">{dailyQuote}</p>
//           </div>
//           <div className="container flex-column justify-content-between align-items-center">
//             <div className="row w-100">
//               <div className="col-md-8 d-flex flex-column align-items-center mb-3">
//                 <div className="card shadow-sm w-100">
//                   <div className="card-body d-flex flex-row align-items-center">
//                     <div className="avatar-container mr-3">
//                       <img
//                         src={previewImage || profile.userImageUrl || avatar}
//                         alt="Avatar"
//                         className="rounded-circle img-thumbnail"
//                         style={{ width: "100px", height: "100px" }}
//                       />
//                     </div>
//                     <div className="text-left">
//                       {isEditing ? (
//                         <div>
//                           <input
//                             type="text"
//                             name="userName"
//                             value={profile.userName}
//                             onChange={handleChange}
//                             className="form-control mb-2"
//                             style={{
//                               fontSize: "0.9rem",
//                               fontFamily: "Merriweather, serif",
//                             }}
//                             placeholder="Enter your name"
//                           />
//                           <input
//                             type="email"
//                             name="email"
//                             value={profile.email}
//                             onChange={handleChange}
//                             className="form-control mb-2"
//                             style={{
//                               fontSize: "0.9rem",
//                               fontFamily: "Merriweather, serif",
//                             }}
//                             placeholder="Enter your email"
//                           />
//                           <input
//                             type="file"
//                             name="userImage"
//                             onChange={handleImageChange}
//                             className="form-control mb-2"
//                             style={{
//                               fontSize: "0.9rem",
//                               fontFamily: "Merriweather, serif",
//                             }}
//                             accept="image/*"
//                           />
//                           <button
//                             className="btn btn-primary mr-2 heartbeat"
//                             style={{
//                               fontSize: "0.9rem",
//                               fontFamily: "Merriweather, serif",
//                             }}
//                             onClick={handleSave}
//                           >
//                             Save
//                           </button>
//                           <button
//                             className="btn btn-secondary"
//                             style={{ fontFamily: "Merriweather, serif" }}
//                             onClick={() => setIsEditing(false)}
//                           >
//                             Cancel
//                           </button>
//                         </div>
//                       ) : (
//                         <div>
//                           <p
//                             className="card-text"
//                             style={{ fontFamily: "Merriweather, serif" }}
//                           >
//                             <strong>User Name:</strong> {profile.userName}
//                           </p>
//                           <p
//                             className="card-text"
//                             style={{ fontFamily: "Merriweather, serif" }}
//                           >
//                             <strong>Email:</strong> {profile.email}
//                           </p>
//                           <button
//                             className="btn btn-primary mr-2 heartbeat"
//                             style={{ fontFamily: "Merriweather, serif" }}
//                             onClick={() => setIsEditing(true)}
//                           >
//                             Update
//                           </button>
//                           <button
//                             className="btn btn-secondary"
//                             style={{ fontFamily: "Merriweather, serif" }}
//                           >
//                             Change Password
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-4 d-flex flex-column align-items-center">
//                 <div className="card shadow-sm w-100">
//                   <div className="card-body text-center">
//                     <div className="chart-container my-1">
//                       <Doughnut
//                         data={data}
//                         options={options}
//                         width={150}
//                         height={150}
//                       />
//                     </div>
//                     <div>
//                       <button
//                         className="btn btn-primary mr-2 heartbeat"
//                         style={{ fontFamily: "Merriweather, serif" }}
//                       >
//                         View Booking
//                       </button>
//                       <button
//                         className="btn btn-primary heartbeat"
//                         style={{ fontFamily: "Merriweather, serif" }}
//                       >
//                         Update Result
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       <style jsx>{`
//         .quote-container {
//           font-size: 0.9rem;
//           margin-top: -40px;
//           color: #3586ff;
//         }

//         .avatar-container {
//           background: black;
//           border-radius: 50%;
//           padding: 5px;
//           margin-right: 20px;
//           text-align: center;
//           height: auto;
//         }

//         .chart-container {
//           width: 150px;
//           height: 150px;
//           margin: 0 auto;
//         }

//         .quote-title {
//           font-weight: bold;
//           font-size: 1.2rem;
//           color: black;
//         }

//         .quote-text {
//           font-style: italic;
//           font-size: 1rem;
//           margin-left: 20%;
//           margin-right: 20%;
//         }

//         .btn,
//         .card-title,
//         .card-text,
//         h3 {
//           font-size: 0.9rem;
//         }

//         .btn {
//           margin-right: 10px;
//         }

//         .loading-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//           font-size: 2rem;
//           color: #3586ff;
//         }

//         .heartbeat {
//           transition: transform 0.2s;
//         }

//         .heartbeat:hover {
//           animation: heartbeat 1.5s infinite;
//         }

//         @keyframes heartbeat {
//           0%,
//           100% {
//             transform: scale(1);
//           }
//           20%,
//           60% {
//             transform: scale(1.05);
//           }
//           40%,
//           80% {
//             transform: scale(0.95);
//           }
//         }

//         @media (max-width: 767.98px) {
//           .col-md-6 {
//             margin-bottom: 15px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ProfilePage;

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Chart } from "chart.js";
import Compressor from "compressorjs";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUserResultsApi } from "../apis/Api";
import AnimatedWave from "../components/AnimatedWave";
import avatar from "../images/avatar.jpg";

const centerTextPlugin = {
  id: "centerText",
  beforeDraw: function (chart) {
    if (chart.config.options.elements.center) {
      const ctx = chart.ctx;
      const centerConfig = chart.config.options.elements.center;
      const fontStyle = centerConfig.fontStyle || "Arial";
      const txt = centerConfig.text;
      const color = centerConfig.color || "#000";
      const sidePadding = centerConfig.sidePadding || 20;
      const sidePaddingCalculated =
        (sidePadding / 100) * (chart.innerRadius * 2);
      ctx.font = "30px " + fontStyle;

      const stringWidth = ctx.measureText(txt).width;
      const elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

      const widthRatio = elementWidth / stringWidth;
      const newFontSize = Math.min(
        Math.floor(30 * widthRatio),
        chart.innerRadius * 2
      );
      const fontSizeToUse = Math.max(newFontSize, centerConfig.minFontSize);
      const lineHeight = centerConfig.lineHeight || 25;
      const wrapText = newFontSize < centerConfig.minFontSize;

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = fontSizeToUse + "px " + fontStyle;
      ctx.fillStyle = color;

      const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

      if (!wrapText) {
        ctx.fillText(txt, centerX, centerY);
        return;
      }

      const words = txt.split(" ");
      let line = "";
      const lines = [];

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > elementWidth && n > 0) {
          lines.push(line);
          line = words[n] + " ";
        } else {
          line = testLine;
        }
      }
      lines.push(line);

      let lineY = centerY - (lines.length / 2) * lineHeight;
      for (let k = 0; k < lines.length; k++) {
        ctx.fillText(lines[k], centerX, lineY);
        lineY += lineHeight;
      }
    }
  },
};

Chart.register(centerTextPlugin);

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    userName: "",
    email: "",
    userImageUrl: "",
  });
  const [results, setResults] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [dailyQuote, setDailyQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user._id;

        const response = await axios.get(
          `http://localhost:5000/api/user/${userId}`
        );
        setProfile(response.data.product);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    const fetchProfileAndResults = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user._id;

        console.log("Fetching results for user ID:", userId);

        const resultsResponse = await getUserResultsApi(userId);

        console.log("Results API response:", resultsResponse);

        setResults(resultsResponse.data);

        const total = resultsResponse.data.reduce(
          (acc, result) => acc + result.totalScore,
          0
        );
        setTotalScore(total);
      } catch (error) {
        console.error("Error fetching profile and results data:", error);
      }
    };

    const fetchDailyQuote = async () => {
      try {
        const response = await axios.get("https://api.quotable.io/random");
        setDailyQuote(response.data.content);
      } catch (error) {
        console.error("Error fetching daily quote:", error);
      }
    };

    fetchProfile();
    fetchProfileAndResults();
    fetchDailyQuote();
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    new Compressor(file, {
      quality: 0.6,
      success(result) {
        setSelectedImage(result);
        setPreviewImage(URL.createObjectURL(result));
      },
      error(err) {
        console.error(err.message);
      },
    });
  };

  const handleSave = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user._id;

      let updatedProfile = { ...profile };

      if (selectedImage) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedImage);
        reader.onloadend = () => {
          updatedProfile.userImageUrl = reader.result;
          saveProfile(updatedProfile, userId);
        };
      } else {
        saveProfile(updatedProfile, userId);
      }
    } catch (error) {
      console.error("Error updating profile data:", error);
      toast.error("Error updating profile.");
    }
  };

  const saveProfile = async (updatedProfile, userId) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/user/${userId}`,
        updatedProfile
      );

      if (response.data.success) {
        setProfile(response.data.product);
        setIsEditing(false);
        toast.success("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Error updating profile data:", error);
      toast.error("Error updating profile.");
    }
  };

  const getBackgroundColor = (score) => {
    if (score >= 0 && score <= 19) return ["#D2E58D", "#ffffff"]; // Green
    if (score >= 20 && score <= 29) return ["#F8E98C", "#ffffff"]; // Yellow
    if (score >= 30 && score <= 50) return ["#E57373", "#ffffff"]; // Red
    return ["#ffffff", "#ffffff"];
  };

  const data = {
    datasets: [
      {
        data: [totalScore, 50 - totalScore],
        backgroundColor: getBackgroundColor(totalScore),
        hoverBackgroundColor: getBackgroundColor(totalScore),
        borderRadius: 20,
      },
    ],
  };

  const options = {
    cutout: "50%",
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ": " + tooltipItem.raw;
          },
        },
      },
    },
    elements: {
      center: {
        text: totalScore.toString(),
        color: "#000000",
        fontStyle: "Arial",
        sidePadding: 20,
        minFontSize: 20,
        lineHeight: 25,
      },
    },
  };

  return (
    <div>
      <AnimatedWave />
      <ToastContainer />
      {loading ? (
        <div className="loading-container">Loading...</div>
      ) : (
        <div>
          <div className="quote-container text-center my-4">
            <p className="quote-text">Quote for you: {dailyQuote}</p>
          </div>
          <div className="container d-flex flex-column justify-content-between align-items-center ">
            <div className="row w-100">
              <div className="col-md-8 d-flex flex-column align-items-center mb-3">
                <div className="card shadow-sm w-100">
                  <div className="card-body d-flex flex-row align-items-center">
                    <div className="avatar-container mr-3">
                      <img
                        src={previewImage || profile.userImageUrl || avatar}
                        alt="Avatar"
                        className="rounded-circle img-thumbnail"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </div>
                    <div className="text-left">
                      {isEditing ? (
                        <div>
                          <input
                            type="text"
                            name="userName"
                            value={profile.userName}
                            onChange={handleChange}
                            className="form-control mb-2"
                            placeholder="Enter your name"
                          />
                          <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            className="form-control mb-2"
                            placeholder="Enter your email"
                          />
                          <input
                            type="file"
                            name="userImage"
                            onChange={handleImageChange}
                            className="form-control mb-2"
                            accept="image/*"
                          />
                          <button
                            className="btn btn-primary mr-2 heartbeat"
                            onClick={handleSave}
                          >
                            Save
                          </button>
                          <button
                            className="btn btn-secondary"
                            onClick={() => setIsEditing(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div>
                          <p className="card-text">
                            <strong>User Name:</strong> {profile.userName}
                          </p>
                          <p className="card-text">
                            <strong>Email:</strong> {profile.email}
                          </p>
                          <button
                            className="btn btn-primary mt-1 mr-2 heartbeat"
                            onClick={() => setIsEditing(true)}
                          >
                            Update
                          </button>
                          <button className="btn btn-secondary mt-1">
                            Change Password
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex flex-column align-items-center">
                <div className="card shadow-sm w-100 ">
                  <div className="card-body text-center ">
                    <div className="chart-container mb-2">
                      <Doughnut
                        data={data}
                        options={options}
                        width={150}
                        height={150}
                      />
                    </div>
                    <div>
                      <button className="btn btn-primary mr-2 ml-7 heartbeat">
                        View Booking
                      </button>
                      <button className="btn btn-primary heartbeat">
                        Update Result
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap');

        body {
          font-family: 'Merriweather', serif;
        }
          .container:{
          margin-left:20%;
          margin-right:20%}

        .quote-container {
          font-size: 0.9rem;
          margin-top: -40px;
          color: #3586ff;
        }

        .avatar-container {
          background: black;
          border-radius: 50%;
          padding: 5px;
          margin-right: 20px;
          text-align: center;
          height: auto;
        }

        .chart-container {
          width: 120px;
          height: 120px;
          margin-top:-35px;
          margin-left:30%;
          margin-right:20%
        }
.card-body{
height:120px;

}
.card{
height :60px}
        .quote-title {
          font-weight: bold;
          font-size: 1.2rem;
          color: black;
        }

        .quote-text {
          font-style: italic;
          font-size: 1rem;
          margin-left: 20%;
          margin-right: 20%;
        }

        .btn,
        .card-title,
        .card-text,
        h3 {
          font-size: 0.9rem;
          margin-bottom:0.8rem;
        }

        .btn {
          margin-right: 10px;
          font-family: 'Merriweather', serif;
        }

        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          color: #3586ff;
        }

        .heartbeat {
          transition: transform 0.2s;
        }

        .heartbeat:hover {
          animation: heartbeat 1.5s infinite;
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          20%, 60% {
            transform: scale(1.05);
          }
          40%, 80% {
            transform: scale(0.95);
          }
        }

        @media (max-width: 767.98px) {
          .col-md-6 {
            margin-bottom: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;
