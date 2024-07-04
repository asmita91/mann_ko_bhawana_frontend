import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const WellnessSection = ({ images }) => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px",
      maxWidth: "1200px",
      margin: "30px auto",
      flexDirection: "row",
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
      color: "var(--paragraph-color)",
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
      backgroundColor: "var(--accent-color)",
      padding: "10px 0",
      borderRadius: "5px",
      fontSize: "1rem",
      width: "100%",
      textAlign: "center",
      margin: "10px 0px 0px 0px",
    },
    button: {
      padding: "7px 17px",
      backgroundColor: "var(--main-color)",
      color: "var(--fixed-title-color)",
      border: "none",
      borderRadius: "5px",
      fontFamily: "merriweather, sans-serif",
      cursor: "pointer",
      fontSize: "0.95rem",
      transition: "transform 0.3s ease, background-color 0.3s ease",
      textDecoration: "none",
      textTransform: "none",
      position: "relative",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
      animation: "zoom 0.6s infinite",
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

  // Append the keyframes and media query styles to the document's stylesheet
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(zoomKeyframes, styleSheet.cssRules.length);

  const mediaQueryStyles = `
    @media (max-width: 768px) {
      .responsive-container {
        flex-direction: column;
        padding: 40px 20px;
        margin: 20px;
      }
      .responsive-text-section {
        order: 1;
        width: 95%;
        padding: 0;
        text-align: center;
margin: -10px 20px 0px 20px    }

      .responsive-image-section {
        display: none;
      }
      .responsive-image-caption {
        display: none;
      }
      .responsive-button {
        order: 3;
        width: 30%;
        margin-bottom: 20px;
      }
      .responsive-paragraph {
        order: 4;
        width: 100%;
        padding: 0;
      }
    }
  `;
  styleSheet.insertRule(mediaQueryStyles, styleSheet.cssRules.length);

  return (
    <div style={styles.container} className="responsive-container">
      <div style={styles.textSection} className="responsive-text-section">
        <h1 style={styles.textSectionH1}>
          Ready To Embark On The Journey Of Wellness?
        </h1>
        <p style={styles.textSectionP} className="responsive-paragraph">
          Start your mental transformation with our experienced counselors and
          therapists today. Embrace the journey towards ultimate inner peace and
          lasting well-being with our comprehensive programs, specifically
          tailored to meet your unique health needs. Our dedicated team is here
          to support you every step of the way, offering personalized care that
          addresses your emotional, mental, and spiritual well-being.
          <br />
          Join us in creating a balanced life where you can thrive and achieve
          your fullest potential. Experience the transformative power of
          holistic wellness and unlock a healthier, happier you.
        </p>
        <Link to="/get-started" style={{ textDecoration: "none" }}>
          <Button
            style={styles.button}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor =
                styles.buttonHover.backgroundColor;
              e.currentTarget.style.animation = styles.buttonHover.animation;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor =
                styles.button.backgroundColor;
              e.currentTarget.style.animation = "none"; // Remove the animation
            }}
          >
            Get Started
          </Button>
        </Link>
      </div>
      <div style={styles.imageSection} className="responsive-image-section">
        <div style={styles.imageWrapper}>
          <img src={images} alt="Wellness" style={styles.wellnessImage} />
          <div style={styles.imageCaption} className="responsive-image-caption">
            #Lets Grow Together
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessSection;
