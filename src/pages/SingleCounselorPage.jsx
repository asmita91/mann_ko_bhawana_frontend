// import { Button } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { FaEdit, FaStar, FaTrash } from "react-icons/fa";
// import { Puff } from "react-loader-spinner";
// import Modal from "react-modal";
// import { Link, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import {
//   createReviewApi,
//   getReviewsApi,
//   getSingleCounselorApi,
// } from "../apis/Api";
// import AnimatedWave from "../components/AnimatedWave";
// import avatar from "../images/avatar.jpg";

// const SingleArticle = () => {
//   const [counselor, setCounselor] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState({ rating: 0, comment: "" });
//   const [editingReviewId, setEditingReviewId] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const { counselorId } = useParams();
//   const [validationError, setValidationError] = useState("");
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [reviewToDelete, setReviewToDelete] = useState(null);

//   useEffect(() => {
//     const fetchCounselor = async () => {
//       try {
//         const response = await getSingleCounselorApi(counselorId);
//         setCounselor(response.data.counselor);
//       } catch (error) {
//         console.error(error);
//         toast.error("Error fetching counselor details");
//       }
//     };

//     const fetchReviews = async () => {
//       try {
//         const response = await getReviewsApi(counselorId);
//         setReviews(response.data.reviews);
//       } catch (error) {
//         console.error(error);
//         toast.error("Error fetching reviews");
//       }
//     };

//     fetchCounselor();
//     fetchReviews();
//   }, [counselorId]);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setValidationError("");
//   };

//   const openDeleteModal = (review) => {
//     setReviewToDelete(review);
//     setIsDeleteModalOpen(true);
//   };

//   const closeDeleteModal = () => {
//     setIsDeleteModalOpen(false);
//     setReviewToDelete(null);
//   };

//   const handleEditReview = (review) => {
//     setNewReview({ rating: review.rating, comment: review.comment });
//     setEditingReviewId(review._id);
//     openModal();
//   };

//   const handleDeleteReview = async () => {
//     const token = localStorage.getItem("token");

//     try {
//       const response = await axios.delete(
//         `http://localhost:5000/api/counselor/review/${reviewToDelete._id}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       toast.success(response.data.message);
//       setReviews((prevReviews) =>
//         prevReviews.filter((review) => review._id !== reviewToDelete._id)
//       );
//       closeDeleteModal();
//     } catch (error) {
//       console.error(error);
//       toast.error("Error deleting review");
//     }
//   };

//   const handleReviewSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const user = JSON.parse(localStorage.getItem("user"));
//     const token = localStorage.getItem("token");

//     if (!user || !token) {
//       toast.error("You need to be logged in to submit a review");
//       setLoading(false);
//       return;
//     }

//     if (newReview.rating === 0 || newReview.comment === "") {
//       setValidationError("Both rating and review are required");
//       setLoading(false);
//       return;
//     }

//     try {
//       const reviewData = {
//         userId: user._id,
//         rating: newReview.rating,
//         comment: newReview.comment,
//         counselorId: counselorId,
//       };

//       let response;
//       if (editingReviewId) {
//         response = await axios.put(
//           `http://localhost:5000/api/counselor/review/${editingReviewId}`,
//           reviewData,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         window.location.reload(); // Reload the page after editing
//       } else {
//         response = await createReviewApi(reviewData, token);
//       }

//       toast.success(response.data.message);
//       setReviews((prevReviews) => {
//         if (editingReviewId) {
//           return prevReviews.map((review) =>
//             review._id === editingReviewId ? response.data.review : review
//           );
//         }
//         return [response.data.review, ...prevReviews];
//       });
//       setNewReview({ rating: 0, comment: "" });
//       setEditingReviewId(null);
//       closeModal();
//     } catch (error) {
//       console.error(error);
//       toast.error("Error submitting review");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!counselor) {
//     return (
//       <div style={styles.loaderContainer}>
//         <Puff
//           height="100"
//           width="100"
//           radius="9"
//           color="#007bff"
//           ariaLabel="loading"
//         />
//       </div>
//     );
//   }

//   const zoomKeyframes = `
//     @keyframes zoom {
//       0%, 100% {
//         transform: scale(1);
//       }
//       50% {
//         transform: scale(1.1);
//       }
//     }
//   `;

//   const styleSheet = document.styleSheets[0];
//   styleSheet.insertRule(zoomKeyframes, styleSheet.cssRules.length);

//   return (
//     <div>
//       <AnimatedWave />
//       <div
//         style={styles.contentContainer}
//         className="responsive-content-container"
//       >
//         <div
//           style={styles.counselorDetails}
//           className="responsive-counselor-details"
//         >
//           <div
//             style={styles.counselorText}
//             className="responsive-counselor-text"
//           >
//             <div style={styles.counselorNameContainer}>
//               <h2 style={styles.counselorName}>
//                 Hi, I’m{" "}
//                 <span style={styles.counselorNameBlue}>
//                   {counselor.counselorName}
//                 </span>
//                 .
//               </h2>
//             </div>
//             <h3 style={styles.counselorPosition}>
//               {counselor.counselorPosition}
//             </h3>
//             <p>{counselor.counselorDescription}</p>
//             <blockquote style={styles.counselorQuote}>
//               "True healing begins when we allow ourselves to be vulnerable and
//               embrace the journey towards self-discovery and growth."
//             </blockquote>
//             <Link to="/user/form" style={{ textDecoration: "none" }}>
//               <Button
//                 style={styles.diagnoseBtn}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.backgroundColor =
//                     styles.diagnoseBtnHover.backgroundColor;
//                   e.currentTarget.style.animation =
//                     styles.diagnoseBtnHover.animation;
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.backgroundColor =
//                     styles.diagnoseBtn.backgroundColor;
//                   e.currentTarget.style.animation = "none"; // Remove the animation
//                 }}
//               >
//                 Consult Now
//               </Button>
//             </Link>
//           </div>

//           <div
//             style={styles.counselorImage}
//             className="responsive-counselor-image"
//           >
//             <img
//               src={counselor.counselorImageUrl}
//               alt={counselor.counselorName}
//               style={styles.image}
//             />
//           </div>
//         </div>

//         <div style={styles.extraDetails}>
//           <div className="dotted-line" style={styles.dottedLine}></div>
//           <ExtraDetail title="Expertise" content={counselor.expertise} />
//           <ExtraDetail title="Approach" content={counselor.approach} />
//           <ExtraDetail
//             title="Holistic Philosophy"
//             content={counselor.philosophy}
//           />
//           <ExtraDetail
//             title="Educational Degree"
//             content={counselor.educationalDegree}
//           />
//         </div>

//         <div style={styles.reviewsContainer}>
//           <h4>What Customers Say</h4>
//           {reviews.map((review) => (
//             <div key={review._id} style={styles.reviewCard}>
//               <div style={styles.reviewHeader}>
//                 {review.user && (
//                   <img
//                     src={review.user.profileImageUrl || avatar}
//                     alt={`${review.user.userName}`}
//                     style={styles.reviewAvatar}
//                   />
//                 )}
//                 <div style={styles.reviewUserInfo}>
//                   <strong>
//                     {review.user ? `${review.user.userName}` : "Anonymous"}
//                   </strong>
//                 </div>
//                 <div style={styles.reviewRating}>
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar
//                       key={i}
//                       color={i < review.rating ? "#ffc107" : "#e4e5e9"}
//                     />
//                   ))}
//                 </div>
//                 <small style={styles.reviewTime}>
//                   {new Date(review.createdAt).toLocaleDateString()}
//                 </small>
//               </div>
//               <div style={styles.commentAndActions}>
//                 <p style={styles.reviewComment}>{review.comment}</p>
//                 {review.user &&
//                   review.user._id ===
//                     JSON.parse(localStorage.getItem("user"))._id && (
//                     <div style={styles.reviewActions}>
//                       <button
//                         onClick={() => handleEditReview(review)}
//                         style={{ ...styles.editButton, ...styles.zoomEffect }}
//                       >
//                         <FaEdit />
//                       </button>
//                       <button
//                         onClick={() => openDeleteModal(review)}
//                         style={{ ...styles.deleteButton, ...styles.zoomEffect }}
//                       >
//                         <FaTrash />
//                       </button>
//                     </div>
//                   )}
//               </div>
//             </div>
//           ))}

//           <Button
//             onClick={openModal}
//             style={styles.diagnoseBtn}
//             onMouseOver={(e) => {
//               e.currentTarget.style.backgroundColor =
//                 styles.diagnoseBtnHover.backgroundColor;
//               e.currentTarget.style.animation =
//                 styles.diagnoseBtnHover.animation;
//             }}
//             onMouseOut={(e) => {
//               e.currentTarget.style.backgroundColor =
//                 styles.diagnoseBtn.backgroundColor;
//               e.currentTarget.style.animation = "none"; // Remove the animation
//             }}
//           >
//             Add Review
//           </Button>

//           <Modal
//             isOpen={isModalOpen}
//             onRequestClose={closeModal}
//             contentLabel="Add Review"
//             style={modalStyles}
//           >
//             <h4>Add Review</h4>
//             <p style={{ fontSize: "0.9rem" }}>
//               Reviews are public and include your account info.
//             </p>
//             <form onSubmit={handleReviewSubmit}>
//               <div style={styles.starRating}>
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar
//                     key={i}
//                     size={25}
//                     onClick={() =>
//                       setNewReview({ ...newReview, rating: i + 1 })
//                     }
//                     color={i < newReview.rating ? "#ffc107" : "#e4e5e9"}
//                     style={{ cursor: "pointer" }}
//                   />
//                 ))}
//               </div>

//               <textarea
//                 value={newReview.comment}
//                 onChange={(e) =>
//                   setNewReview({ ...newReview, comment: e.target.value })
//                 }
//                 style={styles.commentInput}
//                 placeholder="Write your review here..."
//               />
//               {validationError && (
//                 <p style={styles.validationError}>{validationError}</p>
//               )}
//               <Button
//                 type="submit"
//                 style={styles.diagnoseBtn}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.backgroundColor =
//                     styles.diagnoseBtnHover.backgroundColor;
//                   e.currentTarget.style.animation =
//                     styles.diagnoseBtnHover.animation;
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.backgroundColor =
//                     styles.diagnoseBtn.backgroundColor;
//                   e.currentTarget.style.animation = "none"; // Remove the animation
//                 }}
//               >
//                 {loading ? (
//                   <div className="d-flex align-items-center justify-content-center">
//                     <Puff
//                       height="20"
//                       width="20"
//                       radius={1}
//                       color="#ffffff"
//                       ariaLabel="loading"
//                       wrapperStyle={{ marginRight: "8px" }}
//                     />
//                     <span>Saving your review...</span>
//                   </div>
//                 ) : (
//                   "Submit Review"
//                 )}
//               </Button>
//             </form>
//           </Modal>

//           <Modal
//             isOpen={isDeleteModalOpen}
//             onRequestClose={closeDeleteModal}
//             contentLabel="Confirm Deletion"
//             style={modalStyles}
//           >
//             <p>Are you sure you want to delete this review?</p>
//             <div style={styles.modalActions}>
//               <button
//                 onClick={handleDeleteReview}
//                 style={{ ...styles.deleteButton, ...styles.zoomEffect }}
//               >
//                 Confirm
//               </button>
//               <button
//                 onClick={closeDeleteModal}
//                 style={{ ...styles.cancelButton, ...styles.zoomEffect }}
//               >
//                 Cancel
//               </button>
//             </div>
//           </Modal>
//         </div>
//       </div>
//       <style jsx>{`
//         @media (max-width: 768px) {
//           .responsive-content-container {
//             padding: 10px;
//           }

//           .responsive-counselor-details {
//             flex-direction: column;
//             align-items: center;
//           }

//           .responsive-counselor-text {
//             margin-right: 0;
//             text-align: center;
//           }

//           .responsive-counselor-image {
//             margin-top: 20px;
//             text-align: center;
//           }
//           .responsive-counselor-image img {
//             margin: 0 auto; /* Center the image */
//             text-align: center;
//           }
//           .responsive-extra-details {
//             margin-top: 20px;
//           }

//           .responsive-review-card {
//             padding: 15px;
//           }

//           .responsive-review-header {
//             flex-direction: column;
//             align-items: center;
//           }

//           .responsive-review-avatar {
//             margin-bottom: 10px;
//           }

//           .responsive-comment-and-actions {
//             flex-direction: column;
//             align-items: center;
//           }

//           .responsive-review-comment {
//             text-align: center;
//             margin-bottom: 10px;
//           }

//           .responsive-review-actions {
//             margin-top: 10px;
//           }

//           .responsive-star-rating {
//             justify-content: center;
//           }

//           .responsive-review-time {
//             margin-top: 5px;
//           }

//           .dotted-line {
//             display: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// const ExtraDetail = ({ title, content }) => {
//   return (
//     <div className="detail-item" style={styles.detailItem}>
//       <div style={styles.iconContainer}>
//         <span style={styles.icon}>•</span>
//       </div>
//       <div style={styles.textContainer}>
//         <h4 style={styles.detailTitle}>{title}:</h4>
//         <p>{content}</p>
//       </div>
//     </div>
//   );
// };

// // CSS in JS
// const styles = {
//   contentContainer: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     padding: "0px 20px 20px 20px",
//   },
//   counselorDetails: {
//     display: "flex",
//     alignItems: "flex-start",
//     margin: "10px 0",
//     padding: "10px 0",
//     flexWrap: "wrap",
//   },
//   counselorText: {
//     flex: "2 1 60%",
//     lineHeight: "1.6",
//     fontSize: "0.95rem",
//     marginRight: "20px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//   },
//   counselorNameContainer: {
//     display: "flex",
//     justifyContent: "center",
//     width: "100%",
//   },
//   counselorName: {
//     color: "black",
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//     margin: "0",
//     textAlign: "center",
//   },
//   counselorNameBlue: {
//     color: "#3586FF",
//   },
//   counselorPosition: {
//     color: "#3586FF",
//     fontSize: "1.2rem",
//     marginTop: "10px",
//   },
//   counselorQuote: {
//     fontStyle: "italic",
//     color: "#555",
//     marginTop: "5px",
//   },
//   consultButton: {
//     marginTop: "20px",
//     padding: "10px 20px",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     width: "50%",
//     alignSelf: "center",
//     transition: "all 0.3s ease",
//   },
//   validationError: {
//     color: "red",
//     fontSize: "0.8rem",
//   },
//   consultButtonHover: {
//     backgroundColor: "#0056b3",
//   },
//   counselorImage: {
//     flex: "1 1 30%",
//     textAlign: "center",
//     alignItems: "center",

//     marginTop: "10px",
//   },
//   image: {
//     maxWidth: "100%",
//     maxHeight: "290px",
//     objectFit: "cover",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   },
//   extraDetails: {
//     marginTop: "30px",
//     position: "relative",
//   },
//   dottedLine: {
//     position: "absolute",
//     left: "14px",
//     top: "0",
//     width: "2px",
//     background:
//       "linear-gradient(to bottom, #007bff 0%, #007bff 50%, transparent 50%, transparent 100%)",
//     backgroundSize: "2px 10px",
//     zIndex: "-1",
//   },
//   detailItem: {
//     fontSize: "0.95rem",
//     display: "flex",
//     alignItems: "flex-start",
//     position: "relative",
//   },
//   iconContainer: {
//     marginRight: "10px",
//   },
//   icon: {
//     fontSize: "40px",
//     color: "#007bff",
//   },
//   textContainer: {
//     flex: 1,
//   },
//   detailTitle: {
//     fontWeight: "bold",
//     marginBottom: "5px",
//     fontSize: "1.2rem",
//   },
//   reviewsContainer: {
//     marginTop: "20px",
//     padding: "20px",
//     backgroundColor: "#b2d5f5",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   },
//   reviewCard: {
//     marginBottom: "20px",
//     padding: "20px",
//     borderRadius: "10px",
//     backgroundColor: "#ffffff",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     fontSize: "0.95rem",
//   },
//   reviewHeader: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: "5px",
//     marginTop: "-10px",
//   },
//   commentAndActions: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   reviewAvatar: {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     marginRight: "10px",
//   },
//   reviewUserInfo: {
//     display: "flex",
//     flexDirection: "column",
//     flexGrow: 1,
//   },
//   reviewRating: {
//     display: "flex",
//     alignItems: "center",
//   },
//   reviewFooter: {
//     display: "flex",
//     justifyContent: "space-between",
//     width: "100%",
//   },
//   reviewTime: {
//     color: "#888888",
//     fontSize: "12px",
//     marginLeft: "20px",
//   },
//   reviewActions: {
//     display: "flex",
//     gap: "10px",
//   },
//   editButton: {
//     padding: "5px 10px",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "3px",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//   },
//   deleteButton: {
//     padding: "5px 10px",
//     backgroundColor: "#dc3545",
//     color: "white",
//     border: "none",
//     fontSize: "0.9rem",
//     borderRadius: "3px",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//   },
//   cancelButton: {
//     padding: "5px 10px",
//     backgroundColor: "#6c757d",
//     color: "white",
//     border: "none",
//     borderRadius: "3px",
//     cursor: "pointer",
//     fontSize: "0.9rem",

//     transition: "all 0.3s ease",
//   },
//   addReviewButton: {
//     padding: "10px 20px",
//     backgroundColor: "#28a745",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//   },
//   reviewComment: {
//     color: "#555",
//     fontSize: "0.9rem",
//   },
//   reviewForm: {
//     padding: "20px",
//     borderRadius: "5px",
//     backgroundColor: "#ffffff",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//   },
//   ratingInput: {
//     width: "50px",
//     padding: "5px",
//     marginRight: "10px",
//   },
//   commentInput: {
//     width: "100%",
//     height: "100px",
//     padding: "10px",
//     marginTop: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ddd",
//     fontSize: "0.8rem",
//   },
//   submitButton: {
//     marginTop: "10px",
//     padding: "10px 20px",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//   },
//   diagnoseBtn: {
//     padding: "7px 17px",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     fontFamily: "merriweather",
//     cursor: "pointer",
//     fontSize: "0.95rem",
//     transition: "transform 0.3s ease",
//     textDecoration: "none",
//     textTransform: "none",
//     position: "relative",
//   },
//   diagnoseBtnHover: {
//     backgroundColor: "#0056b3",
//     animation: "zoom 0.6s infinite",
//   },
//   loaderContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "flex-start",
//     height: "100vh",
//     paddingTop: "20vh",
//   },
//   zoomEffect: {
//     transform: "scale(1)",
//     transition: "transform 0.2s ease-in-out",
//   },
//   zoomEffectHover: {
//     transform: "scale(1.05)",
//   },
//   modalActions: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginTop: "20px",
//   },
// };

// const modalStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     width: "90%", // Adjusted for smaller screens
//     maxWidth: "350px", // Ensures a maximum width for larger screens
//     borderRadius: "10px",
//     padding: "20px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   },
// };

// export default SingleArticle;

import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaStar, FaTrash } from "react-icons/fa";
import { Puff } from "react-loader-spinner";
import Modal from "react-modal";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createReviewApi,
  getReviewsApi,
  getSingleCounselorApi,
} from "../apis/Api";
import AnimatedWave from "../components/AnimatedWave";
import avatar from "../images/avatar.jpg";

const SingleArticle = () => {
  const [counselor, setCounselor] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" });
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { counselorId } = useParams();
  const [validationError, setValidationError] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState(null);

  useEffect(() => {
    const fetchCounselor = async () => {
      try {
        const response = await getSingleCounselorApi(counselorId);
        setCounselor(response.data.counselor);
      } catch (error) {
        console.error(error);
        toast.error("Error fetching counselor details");
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await getReviewsApi(counselorId);
        setReviews(response.data.reviews);
      } catch (error) {
        console.error(error);
        toast.error("Error fetching reviews");
      }
    };

    fetchCounselor();
    fetchReviews();
  }, [counselorId]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setValidationError("");
  };

  const openDeleteModal = (review) => {
    setReviewToDelete(review);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setReviewToDelete(null);
  };

  const handleEditReview = (review) => {
    setNewReview({ rating: review.rating, comment: review.comment });
    setEditingReviewId(review._id);
    openModal();
  };

  const handleDeleteReview = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/counselor/review/${reviewToDelete._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success(response.data.message);
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review._id !== reviewToDelete._id)
      );
      closeDeleteModal();
    } catch (error) {
      console.error(error);
      toast.error("Error deleting review");
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (!user || !token) {
      toast.error("You need to be logged in to submit a review");
      setLoading(false);
      return;
    }

    if (newReview.rating === 0 || newReview.comment === "") {
      setValidationError("Both rating and review are required");
      setLoading(false);
      return;
    }

    try {
      const reviewData = {
        userId: user._id,
        rating: newReview.rating,
        comment: newReview.comment,
        counselorId: counselorId,
      };

      let response;
      if (editingReviewId) {
        response = await axios.put(
          `http://localhost:5000/api/counselor/review/${editingReviewId}`,
          reviewData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        window.location.reload(); // Reload the page after editing
      } else {
        response = await createReviewApi(reviewData, token);
      }

      toast.success(response.data.message);
      setReviews((prevReviews) => {
        if (editingReviewId) {
          return prevReviews.map((review) =>
            review._id === editingReviewId ? response.data.review : review
          );
        }
        return [response.data.review, ...prevReviews];
      });
      setNewReview({ rating: 0, comment: "" });
      setEditingReviewId(null);
      closeModal();
    } catch (error) {
      console.error(error);
      toast.error("Error submitting review");
    } finally {
      setLoading(false);
    }
  };

  if (!counselor) {
    return (
      <div style={styles.loaderContainer}>
        <Puff
          height="100"
          width="100"
          radius="9"
          color="#007bff"
          ariaLabel="loading"
        />
      </div>
    );
  }

  const zoomKeyframes = `
    @keyframes zoom {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }
  `;

  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(zoomKeyframes, styleSheet.cssRules.length);

  return (
    <div>
      <AnimatedWave />
      <div
        style={styles.contentContainer}
        className="responsive-content-container"
      >
        <div
          style={styles.counselorDetails}
          className="responsive-counselor-details"
        >
          <div
            style={styles.counselorText}
            className="responsive-counselor-text"
          >
            <div style={styles.counselorNameContainer}>
              <h2 style={styles.counselorName}>
                Hi, I’m{" "}
                <span style={styles.counselorNameBlue}>
                  {counselor.counselorName}
                </span>
                .
              </h2>
            </div>
            <h3 style={styles.counselorPosition}>
              {counselor.counselorPosition}
            </h3>
            <p>{counselor.counselorDescription}</p>
            <blockquote style={styles.counselorQuote}>
              "True healing begins when we allow ourselves to be vulnerable and
              embrace the journey towards self-discovery and growth."
            </blockquote>
            <Link to="/user/form" style={{ textDecoration: "none" }}>
              <Button
                style={styles.diagnoseBtn}
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
                Consult Now
              </Button>
            </Link>
          </div>

          <div
            style={styles.counselorImage}
            className="responsive-counselor-image"
          >
            <img
              src={counselor.counselorImageUrl}
              alt={counselor.counselorName}
              style={styles.image}
            />
          </div>
        </div>

        <div style={styles.extraDetails}>
          <ExtraDetail title="Expertise" content={counselor.expertise} />
          <ExtraDetail title="Approach" content={counselor.approach} />
          <ExtraDetail
            title="Holistic Philosophy"
            content={counselor.philosophy}
          />
          <ExtraDetail
            title="Educational Degree"
            content={counselor.educationalDegree}
          />
        </div>
        <hr className="divider" />

        <div style={styles.reviewsContainer}>
          <h4>What Customers Say</h4>
          {reviews.map((review) => (
            <div key={review._id} style={styles.reviewCard}>
              <div style={styles.reviewHeader}>
                {review.user && (
                  <img
                    src={review.user.profileImageUrl || avatar}
                    alt={`${review.user.userName}`}
                    style={styles.reviewAvatar}
                  />
                )}
                <div style={styles.reviewUserInfo}>
                  <strong>
                    {review.user ? `${review.user.userName}` : "Anonymous"}
                  </strong>
                </div>
                <div style={styles.reviewRating}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < review.rating ? "#ffc107" : "#e4e5e9"}
                    />
                  ))}
                </div>
                <small style={styles.reviewTime}>
                  {new Date(review.createdAt).toLocaleDateString()}
                </small>
              </div>
              <div style={styles.commentAndActions}>
                <p style={styles.reviewComment}>{review.comment}</p>
                {review.user &&
                  review.user._id ===
                    JSON.parse(localStorage.getItem("user"))._id && (
                    <div style={styles.reviewActions}>
                      <button
                        onClick={() => handleEditReview(review)}
                        style={{ ...styles.editButton, ...styles.zoomEffect }}
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => openDeleteModal(review)}
                        style={{ ...styles.deleteButton, ...styles.zoomEffect }}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  )}
              </div>
            </div>
          ))}

          <Button
            onClick={openModal}
            style={styles.diagnoseBtn}
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
            Add Review
          </Button>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Add Review"
            style={modalStyles}
          >
            <h4>Add Review</h4>
            <p style={{ fontSize: "0.9rem" }}>
              Reviews are public and include your account info.
            </p>
            <form onSubmit={handleReviewSubmit}>
              <div style={styles.starRating}>
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={25}
                    onClick={() =>
                      setNewReview({ ...newReview, rating: i + 1 })
                    }
                    color={i < newReview.rating ? "#ffc107" : "#e4e5e9"}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>

              <textarea
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
                style={styles.commentInput}
                placeholder="Write your review here..."
              />
              {validationError && (
                <p style={styles.validationError}>{validationError}</p>
              )}
              <Button
                type="submit"
                style={styles.diagnoseBtn}
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
                      radius={1}
                      color="#ffffff"
                      ariaLabel="loading"
                      wrapperStyle={{ marginRight: "8px" }}
                    />
                    <span>Saving your review...</span>
                  </div>
                ) : (
                  "Submit Review"
                )}
              </Button>
            </form>
          </Modal>

          <Modal
            isOpen={isDeleteModalOpen}
            onRequestClose={closeDeleteModal}
            contentLabel="Confirm Deletion"
            style={modalStyles}
          >
            <p>Are you sure you want to delete this review?</p>
            <div style={styles.modalActions}>
              <button
                onClick={handleDeleteReview}
                style={{ ...styles.deleteButton, ...styles.zoomEffect }}
              >
                Confirm
              </button>
              <button
                onClick={closeDeleteModal}
                style={{ ...styles.cancelButton, ...styles.zoomEffect }}
              >
                Cancel
              </button>
            </div>
          </Modal>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 900px) {
          .responsive-content-container {
            padding: 10px;
          }

          .responsive-counselor-details {
            flex-direction: column;
            align-items: center;
          }

          .responsive-counselor-text {
            margin-right: 0;
            text-align: center;
          }

          .responsive-counselor-image {
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
          }
          .responsive-counselor-image img {
            margin: 0 auto; /* Center the image */
            text-align: center;
          }
          .responsive-extra-details {
            margin-top: 20px;
          }

          .responsive-review-card {
            padding: 15px;
          }

          .responsive-review-header {
            flex-direction: column;
            align-items: center;
          }

          .responsive-review-avatar {
            margin-bottom: 10px;
          }

          .responsive-comment-and-actions {
            flex-direction: column;
            align-items: center;
          }

          .responsive-review-comment {
            text-align: center;
            margin-bottom: 10px;
          }

          .responsive-review-actions {
            margin-top: 10px;
          }

          .responsive-star-rating {
            justify-content: center;
          }

          .responsive-review-time {
            margin-top: 5px;
          }

          .dotted-line {
            display: none;
          }
        }
        .divider {
          border: none;
          border-top: 2px solid #3973e1;
          margin-top: 1px; /* Margin on the top */
          margin-bottom: 10px; /* Margin on the bottom */
        }
      `}</style>
    </div>
  );
};

const ExtraDetail = ({ title, content }) => {
  return (
    <div className="detail-item" style={styles.detailItem}>
      <div style={styles.iconContainer}>
        <span style={styles.icon}>•</span>
      </div>
      <div style={styles.textContainer}>
        <h4 style={styles.detailTitle}>{title}:</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

// CSS in JS
const styles = {
  contentContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0px 20px 20px 20px",
  },
  counselorDetails: {
    display: "flex",
    alignItems: "flex-start",
    margin: "10px 0",
    padding: "10px 0",
    flexWrap: "wrap",
  },
  counselorText: {
    flex: "2 1 60%",
    lineHeight: "1.6",
    fontSize: "0.95rem",
    marginRight: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  counselorNameContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  counselorName: {
    color: "black",
    fontSize: "1.5rem",
    margin: "0",
    textAlign: "center",
  },
  counselorNameBlue: {
    color: "#3586FF",
  },
  counselorPosition: {
    color: "#3586FF",
    fontSize: "1.2rem",
    marginTop: "10px",
  },
  counselorQuote: {
    fontStyle: "italic",
    color: "#555",
    marginTop: "5px",
  },
  consultButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "50%",
    alignSelf: "center",
    transition: "all 0.3s ease",
  },
  validationError: {
    color: "red",
    fontSize: "0.8rem",
  },
  consultButtonHover: {
    backgroundColor: "#0056b3",
  },
  counselorImage: {
    flex: "1 1 30%",
    textAlign: "center",
    alignItems: "center",

    marginTop: "10px",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "290px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  extraDetails: {
    marginTop: "30px",
    position: "relative",
  },
  dottedLine: {
    position: "absolute",
    left: "14px",
    top: "0",
    width: "2px",
    background:
      "linear-gradient(to bottom, #007bff 0%, #007bff 50%, transparent 50%, transparent 100%)",
    backgroundSize: "2px 10px",
    zIndex: "-1",
  },
  detailItem: {
    fontSize: "0.95rem",
    display: "flex",
    alignItems: "flex-start",
    position: "relative",
  },
  iconContainer: {
    marginRight: "10px",
  },
  icon: {
    fontSize: "50px",
    color: "#007bff",
  },
  textContainer: {
    flex: 1,
  },
  detailTitle: {
    fontWeight: "bold",
    marginBottom: "5px",
    fontSize: "1.2rem",
  },
  reviewsContainer: {
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
  },
  reviewCard: {
    marginBottom: "20px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontSize: "0.95rem",
  },
  reviewHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "5px",
    marginTop: "-10px",
  },
  commentAndActions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reviewAvatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  reviewUserInfo: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  reviewRating: {
    display: "flex",
    alignItems: "center",
  },
  reviewFooter: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  reviewTime: {
    color: "#888888",
    fontSize: "12px",
    marginLeft: "20px",
  },
  reviewActions: {
    display: "flex",
    gap: "10px",
  },
  editButton: {
    padding: "5px 10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    fontSize: "0.9rem",
    borderRadius: "3px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  cancelButton: {
    padding: "5px 10px",
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "0.9rem",

    transition: "all 0.3s ease",
  },
  addReviewButton: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  reviewComment: {
    color: "#555",
    fontSize: "0.9rem",
  },
  reviewForm: {
    padding: "20px",
    borderRadius: "5px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  ratingInput: {
    width: "50px",
    padding: "5px",
    marginRight: "10px",
  },
  commentInput: {
    width: "100%",
    height: "100px",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "0.8rem",
  },
  submitButton: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  diagnoseBtn: {
    padding: "7px 17px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontFamily: "merriweather",
    cursor: "pointer",
    fontSize: "0.95rem",
    transition: "transform 0.3s ease",
    textDecoration: "none",
    textTransform: "none",
    position: "relative",
  },
  diagnoseBtnHover: {
    backgroundColor: "#0056b3",
    animation: "zoom 0.6s infinite",
  },
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100vh",
    paddingTop: "20vh",
  },
  zoomEffect: {
    transform: "scale(1)",
    transition: "transform 0.2s ease-in-out",
  },
  zoomEffectHover: {
    transform: "scale(1.05)",
  },
  modalActions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
};

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%", // Adjusted for smaller screens
    maxWidth: "350px", // Ensures a maximum width for larger screens
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default SingleArticle;
