import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner"; // Import the loader component
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllIssuesApi } from "../apis/Api";
import AnimatedWave from "../components/AnimatedWave";
import WellnessSection from "../components/Ready";
import free from "../images/free.png";

const IssueListPage = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching data
    getAllIssuesApi()
      .then((res) => {
        if (res.data.issues) {
          setIssues(res.data.issues);
        } else {
          toast.error("Failed to fetch issues.");
        }
      })
      .catch((error) => {
        console.error("Error fetching issues:", error);
        toast.error("Error fetching issues.");
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetching data
      });

    const handleScroll = () => {
      const heading = document.getElementById("fixed-heading");
      const waveSection = document.querySelector(".wave-section");

      if (heading && waveSection) {
        if (window.scrollY > waveSection.offsetHeight) {
          heading.style.position = "relative";
          heading.style.top = "0";
          heading.style.transform = "translate(-50%, 0)";
        } else {
          heading.style.position = "fixed";
          heading.style.top = "25%";
          heading.style.transform = "translate(-50%, -50%)";
        }
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
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px",
      maxWidth: "1200px",
      margin: "30px auto",
    },
    textSection: {
      flex: 2.5,
      paddingRight: "20px",
    },
    textSectionH1: {
      fontSize: "1.7rem",
      marginBottom: "20px",
    },
    textSectionP: {
      fontSize: "0.95rem",
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
      backgroundColor: "#F7E98D",
      padding: "10px 0",
      borderRadius: "5px",
      fontSize: "1rem",
      width: "100%",
      textAlign: "center",
      margin: "10px 0px 0px 0px",
    },
    fixedHeading: {
      position: "absolute",
      top: "22%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontWeight: "bold",
      color: "white",
    },
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0px 15px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      overflow: "hidden",
      transition: "transform 0.3s ease",
      backgroundColor: "#f8f8f8",
    },
    cardImage: {
      width: "100%",
      height: "auto",
    },
    cardTextContainer: {
      padding: "20px",
      backgroundColor: "#f8f8f8",
      width: "100%",
      textAlign: "center",
    },
    cardText: {
      color: "#000000",
      fontSize: "0.9rem",
      fontFamily: "Merriweather",
    },
    cardLink: {
      textDecoration: "none",
      color: "#007bff",
      fontSize: "14px",
    },
    diagnoseSection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "20px 0",
    },
    diagnoseText: {
      fontSize: "1.2rem",
      marginRight: "10px",
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
      transform: scale(1.1);
    }
  }
  `;

  // Append the keyframes to the document's stylesheet
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(zoomKeyframes, styleSheet.cssRules.length);

  return (
    <div>
      <AnimatedWave />
      <Typography
        id="fixed-heading"
        variant="h4"
        component="div"
        style={styles.fixedHeading}
      >
        Issues
      </Typography>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {loading ? ( // Display loader when loading is true
          <div style={styles.loaderContainer}>
            <Puff
              height="100"
              width="100"
              radiu="9"
              color="#007bff"
              ariaLabel="loading"
            />
          </div>
        ) : (
          <Grid container spacing={2}>
            {issues.map((issue) => (
              <Grid item xs={12} sm={6} md={4} key={issue._id}>
                <div style={styles.cardContainer}>
                  <Link
                    to={`/issue/${issue._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CardMedia
                      component="img"
                      image={issue.issueImageUrl || "/default-image.jpg"}
                      alt={issue.issueName}
                      style={styles.cardImage}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.02)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </Link>
                  <div style={styles.cardTextContainer}>
                    <Typography variant="body2" style={styles.cardText}>
                      {issue.issueQuestion}{" "}
                      <Link to={`/issue/${issue._id}`} style={styles.cardLink}>
                        Learn More
                      </Link>
                    </Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      <div style={styles.diagnoseSection}>
        <Typography style={styles.diagnoseText}>
          Unsure about the type of care you require?
        </Typography>
        <Link to="/diagnose" style={{ textDecoration: "none" }}>
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
            Diagnose
          </Button>
        </Link>
      </div>

      <WellnessSection images={free} />
    </div>
  );
};

export default IssueListPage;
