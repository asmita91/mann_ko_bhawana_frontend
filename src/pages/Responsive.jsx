// import React from "react";

// import rec from "../images/Rectangle 258.png";
// import long from "../images/long.png";

// const ResponsivePage = () => {
//   const styles = {
//     additionalInfoContainer: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       padding: "10px",
//       maxWidth: "1200px",
//       marginTop: "-55px",
//       margin: "20px auto", // Center the container with equal margins
//     },
//     infoTextSection: {
//       flex: 2.3,
//       paddingRight: "20px",
//     },
//     infoImageSection: {
//       flex: 0.8,
//       textAlign: "center",
//     },
//     textSectionH2: {
//       fontSize: "1.rem",
//       marginBottom: "20px",
//       marginRight: "10px",
//     },
//     textSectionP: {
//       fontSize: "0.95rem",
//       marginBottom: "20px",
//     },
//     longImage: {
//       width: "100%",
//       borderRadius: "8px",
//       marginBottom: "20px",
//     },
//     infoImage: {
//       width: "100%",
//       borderRadius: "8px",
//     },
//     diagnoseBtn: {
//       padding: "7px 17px",
//       backgroundColor: "#007bff",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//       fontFamily: "merriweather",
//       cursor: "pointer",
//       fontSize: "0.95rem",
//       transition: "background-color 0.3s ease, transform 0.3s ease",
//       textDecoration: "none",
//       textTransform: "none", // Ensure the text is not transformed to uppercase
//       position: "relative", // Ensure the position is set to relative for the zoom effect
//     },
//     diagnoseBtnHover: {
//       backgroundColor: "#0056b3",
//       animation: "zoom 0.6s infinite", // Add this line to apply the zoom animation on hover
//     },
//   };

//   return (
//     <div>
//       <div
//         className="additional-info-container"
//         style={styles.additionalInfoContainer}
//       >
//         <div className="info-text-section" style={styles.infoTextSection}>
//           <h2 style={styles.textSectionH2}>Counseling Can Help You</h2>
//           <p style={styles.textSectionP}>
//             Taking small, consistent, and positive steps every day can make a
//             big difference in effectively managing your mental health, & there's
//             always hope for recovery. Remember, every journey starts with a
//             single step.
//           </p>
//           <img src={long} alt="Group of people" style={styles.longImage} />
//         </div>
//         <div className="info-image-section" style={styles.infoImageSection}>
//           <img src={rec} alt="Counseling" style={styles.infoImage} />
//         </div>
//       </div>

//       <style jsx>{`
//         .additional-info-container {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 10px;
//           max-width: 1200px;
//           margin: 20px auto; /* Center the container with equal margins */
//           flex-direction: row;
//         }

//         .info-text-section {
//           flex: 2.5;
//           padding-right: 20px;
//         }

//         .info-image-section {
//           flex: 1;
//           text-align: center;
//         }

//         .text-section-h2 {
//           font-size: 2rem;
//           margin-bottom: 20px;
//           margin-right: 10px;
//         }

//         .text-section-p {
//           font-size: 0.95rem;
//           margin-bottom: 20px;
//         }

//         .long-image {
//           width: 100%;
//           border-radius: 8px;
//           margin-bottom: 20px;
//         }

//         .info-image {
//           width: 100%;
//           border-radius: 8px;
//         }

//         /* Media query for responsiveness */
//         @media (max-width: 768px) {
//           .additional-info-container {
//             flex-direction: column;
//             text-align: center;

//           }
//             .info-image-section{
//             display:none;
//             }

//           .info-text-section {
//             padding-right: 0;
//             padding-left: 0;
//             margin-bottom: 20px;
//           }

//           .text-section-h2 {
//             font-size: 1.5rem;
//             text-align: center;
//           }

//           .text-section-p {
//             font-size: 0.9rem;
//             text-align: center;
//           }

//           .long-image {
//             margin-bottom: 20px;
//           }

//           .info-image {
//             margin-bottom: 20px;
//           }
//         }

//         @media (max-width: 480px) {
//           .additional-info-container {
//             padding: 5px;
//           }

//           .text-section-h2 {
//             font-size: 1.2rem;
//           }

//           .text-section-p {
//             font-size: 0.8rem;
//           }
//         }

//         .diagnose-btn {
//           padding: 7px 17px;
//           background-color: #007bff;
//           color: #fff;
//           border: none;
//           border-radius: 5px;
//           font-family: merriweather;
//           cursor: pointer;
//           font-size: 0.95rem;
//           transition: background-color 0.3s ease, transform 0.3s ease;
//           text-decoration: none;
//           text-transform: none; /* Ensure the text is not transformed to uppercase */
//           position: relative; /* Ensure the position is set to relative for the zoom effect */
//         }

//         .diagnose-btn:hover {
//           background-color: #0056b3;
//           animation: zoom 0.6s infinite; /* Add this line to apply the zoom animation on hover */
//         }

//         @keyframes zoom {
//           0%,
//           100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.1);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ResponsivePage;


import React from "react";

import rec from "../images/Rectangle 258.png";
import long from "../images/long.png";

const ResponsivePage = () => {
  const styles = {
    additionalInfoContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px",
      maxWidth: "1200px",
      margin: "-40px 0px 0px 0px auto", // Center the container with equal margins
    },
    infoTextSection: {
      flex: 2,
      paddingRight: "20px",
    },
    infoImageSection: {
      flex: 0.7,
      textAlign: "center",
    },
    textSectionH2: {
      fontSize: "1.7rem",
      marginBottom: "20px",
      marginRight: "10px",
    },
    textSectionP: {
      fontSize: "0.95rem",
      marginBottom: "20px",
    },
    longImage: {
      width: "100%",
      borderRadius: "8px",
      marginBottom: "20px",
    },
    infoImage: {
      width: "100%",
      borderRadius: "8px",
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
      transition: "background-color 0.3s ease, transform 0.3s ease",
      textDecoration: "none",
      textTransform: "none", // Ensure the text is not transformed to uppercase
      position: "relative", // Ensure the position is set to relative for the zoom effect
    },
    diagnoseBtnHover: {
      backgroundColor: "#0056b3",
      animation: "zoom 0.6s infinite", // Add this line to apply the zoom animation on hover
    },
  };

  return (
    <div>
      <div
        className="additional-info-container"
        style={styles.additionalInfoContainer}
      >
        <div className="info-text-section" style={styles.infoTextSection}>
          <h2 className="text-section-h2" style={styles.textSectionH2}>
            Counseling Can Help You
          </h2>
          <p className="text-section-p" style={styles.textSectionP}>
            Taking small, consistent, and positive steps every day can make a
            big difference in effectively managing your mental health, & there's
            always hope for recovery. Remember, every journey starts with a
            single step.
          </p>
          <img src={long} alt="Group of people" style={styles.longImage} />
        </div>
        <div className="info-image-section" style={styles.infoImageSection}>
          <img src={rec} alt="Counseling" style={styles.infoImage} />
        </div>
      </div>

      <style jsx>{`
        .additional-info-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px;
          max-width: 1200px;
          margin: 20px auto; /* Center the container with equal margins */
          flex-direction: row;
        }

        .info-text-section {
          flex: 2.5;
          padding-right: 20px;
        }

        .info-image-section {
          flex: 1;
          text-align: center;
        }

        .text-section-h2 {
          font-size: 2rem;
          margin-bottom: 20px;
          margin-right: 10px;
        }

        .text-section-p {
          font-size: 0.95rem;
          margin-bottom: 20px;
        }

        .long-image {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .info-image {
          width: 100%;
          border-radius: 8px;
        }

        /* Media query for responsiveness */
        @media (max-width: 768px) {
          .additional-info-container {
            flex-direction: column;
            text-align: center;
            margin: -40px 0px -30px 20px   !important; /* Increase the margin for smaller screens */
          }

          .info-image-section {
            display: none; /* Hide the image section on small screens */
          }

          .info-text-section {
            padding-right: 0;
            padding-left: 0;
            margin-bottom: 20px;
          }

          .text-section-h2 {
            font-size: 1.5rem;
            text-align: center;
          }

          .text-section-p {
            font-size: 0.9rem;
            text-align: center;
          }

          .long-image {
            margin-bottom: 20px;
          }

          .info-image {
            margin-bottom: 20px;
          }
        }

        @media (max-width: 480px) {
          .additional-info-container {
            padding: 30px; /* Increase the padding for very small screens */
          }

          .text-section-h2 {
            font-size: 1.2rem;
          }

          .text-section-p {
            font-size: 0.8rem;
          }
        }

        .diagnose-btn {
          padding: 7px 17px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          font-family: merriweather;
          cursor: pointer;
          font-size: 0.95rem;
          transition: background-color 0.3s ease, transform 0.3s ease;
          text-decoration: none;
          text-transform: none; /* Ensure the text is not transformed to uppercase */
          position: relative; /* Ensure the position is set to relative for the zoom effect */
        }

        .diagnose-btn:hover {
          background-color: #0056b3;
          animation: zoom 0.6s infinite; /* Add this line to apply the zoom animation on hover */
        }

        @keyframes zoom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default ResponsivePage;
