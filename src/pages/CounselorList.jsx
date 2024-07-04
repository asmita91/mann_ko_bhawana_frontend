// import SearchIcon from "@mui/icons-material/Search";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { Puff } from "react-loader-spinner";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import { getAllCounselorsApi } from "../apis/Api";
// import AnimatedWave from "../components/AnimatedWave";
// import WellnessSection from "../components/Ready";
// import empathy from "../images/empathy.jpg";

// const CounselorListPage = () => {
//   const [counselors, setCounselors] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getAllCounselorsApi()
//       .then((res) => {
//         if (res.data.counselors) {
//           setCounselors(res.data.counselors);
//         } else {
//           toast.error("Failed to fetch counselors.");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching counselors:", error);
//         toast.error("Error fetching counselors.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });

//     const handleScroll = () => {
//       const heading = document.getElementById("fixed-heading");
//       const waveSection = document.querySelector(".wave-section");

//       if (window.scrollY > waveSection.offsetHeight) {
//         heading.style.position = "relative";
//         heading.style.top = "0";
//         heading.style.transform = "translate(-50%, 0)";
//       } else {
//         heading.style.position = "fixed";
//         heading.style.top = "25%";
//         heading.style.transform = "translate(-50%, -50%)";
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const truncateText = (text, length) => {
//     return text.length > length ? text.substring(0, length) + "..." : text;
//   };

//   const styles = {
//     container: {
//       fontFamily:"Merriweather",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       padding: "10px",
//       maxWidth: "1200px",
//       margin: "20px auto",
//     },
//     textSection: {
//       flex: 2.5,
//       paddingRight: "20px",
//     },
//     textSectionH1: {
//       fontSize: "2rem",
//       marginBottom: "20px",
//     },
//     textSectionP: {
//       fontSize: "1.1rem",
//       marginBottom: "20px",
//     },

//     imageSection: {
//       flex: 1,
//       textAlign: "center",
//     },
//     imageWrapper: {
//       display: "inline-block",
//       textAlign: "center",
//     },
//     wellnessImage: {
//       width: "100%",
//       borderRadius: "8px",
//     },
//     imageCaption: {
//       backgroundColor: "#f7d072",
//       padding: "10px 0",
//       marginTop: "10px",
//       borderRadius: "5px",
//       fontSize: "1rem",
//       width: "100%",
//       textAlign: "center",
//       margin: "0 auto",
//     },
//     waveSection: {
//       position: "relative",
//       paddingBottom: "50px",
//     },
//     fixedHeading: {
//       position: "absolute",
//       top: "22%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//       fontWeight: "bold",
//       color: "white",
//     },
//     card: {
//       display: "flex",
//       flexDirection: "column",
//       height: "100%",
//       minHeight: "350px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       overflow: "hidden",
//       backgroundColor: "#fff",
//       textAlign: "center",
//       margin: "20px",
//       borderRadius: "8px",
//     },
//     cardMedia: {
//       objectFit: "cover",
//       transition: "transform 0.3s ease",
//       borderRadius: "8%",
//       padding: "16px",
//       marginBottom: "-20px",
//     },
//     cardContent: {
//       flexGrow: 1,
//       backgroundColor: "#ffffff",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//       padding: "1px",
//     },
//     cardTitle: {
//       fontWeight: "bold",
//       marginTop: "0",
//       fontSize: "1.2rem",
//     },
//     cardPosition: {
//       color: "#007bff",
//       fontSize: "1rem",
//       marginTop: "-10px",
//     },
//     viewMore: {
//       marginTop: "10px",
//       padding: "8px 16px",
//       border: "none",
//       fontSize: "0.9rem",
//       borderRadius: "4px",
//       backgroundColor: "#007bff",
//       color: "#fff",
//       cursor: "pointer",
//       transition: "transform 0.3s ease, background-color 0.3s ease",
//       textTransform: "none",
//     },
//     viewMoreHover: {
//       backgroundColor: "#0056b3",
//       animation: "zoom 0.6s infinite",
//     },
//     searchContainer: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       marginTop: "-20px",
//     },
//     searchBox: {
//       width: "50%",
//       minWidth: "300px",
//       height: "40px",
//       borderRadius: "25px",
//       overflow: "hidden",
//       display: "flex",
//       alignItems: "center",
//       backgroundColor: "#fff",
//       boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
//     },
//     loaderContainer: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "flex-start",
//       height: "100vh",
//       paddingTop: "20vh",
//     },
//   };

//   // Media query styles
//   const mediaQueryStyles = `
//     @media (max-width: 768px) {
//       .responsive-card-title {
//       font-family:"Merriweather";
//         font-size: 1rem;
//       }
//       .responsive-card-position {
//         font-size: 0.75rem;
//       }
//     }
//   `;

//   // Add the keyframes for the zoom animation
//   const zoomKeyframes = `
//   @keyframes zoom {
//     0%, 100% {
//       transform: scale(1);
//     }
//     50% {
//       transform: scale(1.1);
//     }
//   }
//   `;

//   // Append the keyframes and media query styles to the document's stylesheet
//   const styleSheet = document.styleSheets[0];
//   styleSheet.insertRule(zoomKeyframes, styleSheet.cssRules.length);
//   styleSheet.insertRule(mediaQueryStyles, styleSheet.cssRules.length);

//   const filteredCounselors = counselors.filter(
//     (counselor) =>
//       counselor.counselorName
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase()) ||
//       counselor.counselorPosition
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <AnimatedWave />
//       <Typography
//         id="fixed-heading"
//         variant="h4"
//         component="div"
//         style={styles.fixedHeading}
//       >
//         Counselors
//       </Typography>
//       <Box sx={{ flexGrow: 1, p: 3 }}>
//         <div style={styles.searchContainer}>
//           <div style={styles.searchBox}>
//             <SearchIcon style={{ marginLeft: "10px" }} />
//             <TextField
//               variant="outlined"
//               placeholder="Search counselors..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               fullWidth
//               InputProps={{
//                 disableUnderline: true,
//                 style: { height: "40px" },
//               }}
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   borderRadius: "25px",
//                   "& fieldset": {
//                     borderColor: "transparent",
//                   },
//                   "&:hover fieldset": {
//                     borderColor: "transparent",
//                   },
//                   "&.Mui-focused fieldset": {
//                     borderColor: "transparent",
//                   },
//                 },
//               }}
//             />
//           </div>
//         </div>
//         {loading ? (
//           <div style={styles.loaderContainer}>
//             <Puff
//               height="100"
//               width="100"
//               radius="9"
//               color="#007bff"
//               ariaLabel="loading"
//             />
//           </div>
//         ) : (
//           <Grid container spacing={2}>
//             {filteredCounselors.map((counselor) => (
//               <Grid item xs={12} sm={6} md={4} key={counselor._id}>
//                 <Card style={styles.card}>
//                   <Link
//                     to={`/counselor/${counselor._id}`}
//                     style={{ textDecoration: "none", overflow: "hidden" }}
//                   >
//                     <CardMedia
//                       component="img"
//                       height="250px"
//                       image={
//                         counselor.counselorImageUrl || "/default-image.jpg"
//                       }
//                       alt={counselor.counselorName}
//                       style={styles.cardMedia}
//                       onMouseOver={(e) =>
//                         (e.currentTarget.style.transform = "scale(1.05)")
//                       }
//                       onMouseOut={(e) =>
//                         (e.currentTarget.style.transform = "scale(1)")
//                       }
//                     />
//                   </Link>
//                   <CardContent style={styles.cardContent}>
//                     <Typography
//                       gutterBottom
//                       variant="h6"
//                       component="div"
//                       className="responsive-card-title"
//                       style={styles.cardTitle}
//                     >
//                       {counselor.counselorName}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       className="responsive-card-position"
//                       style={styles.cardPosition}
//                     >
//                       {counselor.counselorPosition}
//                     </Typography>
//                     <Link
//                       to={`/counselor/${counselor._id}`}
//                       style={{ textDecoration: "none" }}
//                     >
//                       <Button
//                         style={styles.viewMore}
//                         onMouseOver={(e) => {
//                           e.currentTarget.style.backgroundColor =
//                             styles.viewMoreHover.backgroundColor;
//                           e.currentTarget.style.animation =
//                             styles.viewMoreHover.animation;
//                         }}
//                         onMouseOut={(e) => {
//                           e.currentTarget.style.backgroundColor =
//                             styles.viewMore.backgroundColor;
//                           e.currentTarget.style.animation = "none"; // Remove the animation
//                         }}
//                       >
//                         View More
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         )}
//       </Box>
//       <WellnessSection image={empathy} />
//     </div>
//   );
// };

// export default CounselorListPage;

import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllCounselorsApi } from "../apis/Api";
import AnimatedWave from "../components/AnimatedWave";
import WellnessSection from "../components/Ready";
import empathy from "../images/empathy.jpg";

const CounselorListPage = () => {
  const [counselors, setCounselors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCounselorsApi()
      .then((res) => {
        if (res.data.counselors) {
          setCounselors(res.data.counselors);
        } else {
          toast.error("Failed to fetch counselors.");
        }
      })
      .catch((error) => {
        console.error("Error fetching counselors:", error);
        toast.error("Error fetching counselors.");
      })
      .finally(() => {
        setLoading(false);
      });

    const handleScroll = () => {
      const heading = document.getElementById("fixed-heading");
      const waveSection = document.querySelector(".wave-section");

      if (window.scrollY > waveSection.offsetHeight) {
        heading.style.position = "relative";
        heading.style.top = "0";
        heading.style.transform = "translate(-50%, 0)";
      } else {
        heading.style.position = "fixed";
        heading.style.top = "25%";
        heading.style.transform = "translate(-50%, -50%)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  const styles = {
    container: {
      fontFamily: "Merriweather",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px",
      maxWidth: "1200px",
      margin: "20px auto",
    },
    textSection: {
      flex: 2.5,
      paddingRight: "20px",
    },
    textSectionH1: {
      fontSize: "2rem",
      marginBottom: "20px",
    },
    textSectionP: {
      fontSize: "1.1rem",
      marginBottom: "20px",
    },
    imageSection: {
      flex: 1,
      textAlign: "center",
    },
    imageWrapper: {
      display: "inline-block",
      textAlign: "center",
    },
    wellnessImage: {
      width: "100%",
      borderRadius: "8px",
    },
    imageCaption: {
      backgroundColor: "#f7d072",
      padding: "10px 0",
      marginTop: "10px",
      borderRadius: "5px",
      fontSize: "1rem",
      width: "100%",
      textAlign: "center",
      margin: "0 auto",
    },
    waveSection: {
      position: "relative",
      paddingBottom: "50px",
    },
    fixedHeading: {
      position: "absolute",
      top: "22%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontWeight: "bold",
      color: "white",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      minHeight: "280px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      backgroundColor: "#fff",
      textAlign: "center",
      margin: "20px",
      borderRadius: "8px",
    },
    cardMedia: {
      objectFit: "cover",
      transition: "transform 0.3s ease",
      borderRadius: "8%",
      padding: "16px",
      marginBottom: "-20px",
    },
    cardContent: {
      flexGrow: 1,
      backgroundColor: "#ffffff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "1px",
    },
    cardTitle: {
      fontWeight: "bold",
      marginTop: "-10px",
      fontSize: "1.2rem",
    },
    cardPosition: {
      color: "#007bff",
      fontSize: "0.95rem",
      marginTop: "-5px",
    },
    viewMore: {
      padding: "8px 16px",
      border: "none",
      fontSize: "0.9rem",
      borderRadius: "4px",
      backgroundColor: "#007bff",
      color: "#fff",
      cursor: "pointer",
      transition: "transform 0.3s ease, background-color 0.3s ease",
      textTransform: "none",
    },
    viewMoreHover: {
      backgroundColor: "#0056b3",
      animation: "zoom 0.6s infinite",
    },
    searchContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "-15px",
    },
    searchBox: {
      width: "50%",
      minWidth: "300px",
      height: "40px",
      borderRadius: "25px",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    },
    loaderContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      height: "100vh",
      paddingTop: "20vh",
    },
  };

  // Media query styles
  const mediaQueryStyles = `
    @media (max-width: 900px) {
      .responsive-card-title {
        font-size: 0.8rem;
      }
      .responsive-card-position {
        font-size: 0.6rem;
      }
    }
  `;

  // Add the keyframes for the zoom animation
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

  // Append the keyframes and media query styles to the document's stylesheet
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(zoomKeyframes, styleSheet.cssRules.length);
  styleSheet.insertRule(mediaQueryStyles, styleSheet.cssRules.length);

  const filteredCounselors = counselors.filter(
    (counselor) =>
      counselor.counselorName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      counselor.counselorPosition
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <AnimatedWave />
      <Typography
        id="fixed-heading"
        variant="h4"
        component="div"
        style={styles.fixedHeading}
      >
        Counselors
      </Typography>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <div style={styles.searchContainer}>
          <div style={styles.searchBox}>
            <SearchIcon style={{ marginLeft: "10px" }} />
            <TextField
              variant="outlined"
              placeholder="Search counselors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
              InputProps={{
                disableUnderline: true,
                style: { height: "40px" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "25px",
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent",
                  },
                },
              }}
            />
          </div>
        </div>
        {loading ? (
          <div style={styles.loaderContainer}>
            <Puff
              height="100"
              width="100"
              radius="9"
              color="#007bff"
              ariaLabel="loading"
            />
          </div>
        ) : (
          <Grid container spacing={2}>
            {filteredCounselors.map((counselor) => (
              <Grid item xs={12} sm={6} md={4} key={counselor._id}>
                <Card style={styles.card}>
                  <Link
                    to={`/counselor/${counselor._id}`}
                    style={{ textDecoration: "none", overflow: "hidden" }}
                  >
                    <CardMedia
                      component="img"
                      height="250px"
                      image={
                        counselor.counselorImageUrl || "/default-image.jpg"
                      }
                      alt={counselor.counselorName}
                      style={styles.cardMedia}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </Link>
                  <CardContent style={styles.cardContent}>
                    <h6
                      className="responsive-card-title"
                      style={styles.cardTitle}
                    >
                      {counselor.counselorName}
                    </h6>
                    <p
                      className="responsive-card-position"
                      style={styles.cardPosition}
                    >
                      {counselor.counselorPosition}
                    </p>
                    <Link
                      to={`/counselor/${counselor._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <button
                        style={styles.viewMore}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor =
                            styles.viewMoreHover.backgroundColor;
                          e.currentTarget.style.animation =
                            styles.viewMoreHover.animation;
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor =
                            styles.viewMore.backgroundColor;
                          e.currentTarget.style.animation = "none"; // Remove the animation
                        }}
                      >
                        View More
                      </button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      <WellnessSection images={empathy} />
    </div>
  );
};

export default CounselorListPage;
