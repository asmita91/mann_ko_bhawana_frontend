

import { Typography } from "@mui/material";
import { Chart } from "chart.js";
import "chart.js/auto";
import { Puff } from "react-loader-spinner"; // Import the loader component

import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { useLocation } from "react-router-dom";
import AnimatedWave from "../components/AnimatedWave";
import WellnessSection from "../components/Ready";
import hug from "../images/hug.jpg";
import therapy from "../images/therapy.png";
import ResponsivePage from "./Responsive";

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

const ResultPage = () => {
  const location = useLocation();
  const { resultId, totalScore, user } = location.state || {
    resultId: "",
    totalScore: 0,
    user: {},
  };
  const [animatedScore, setAnimatedScore] = useState(0);
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching data

    const loaderTimeout = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds

      let start = 0;
      const end = totalScore;
      if (start === end) return;

      let totalMilSecDur = 1000; // Total animation duration
      let incrementTime = (totalMilSecDur / end) * 2; // Adjusting the speed

      const timer = setInterval(() => {
        start += 1;
        setAnimatedScore(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }, 2000); // Set loader timeout for 2 seconds

    return () => clearTimeout(loaderTimeout); // Clear timeout on component unmount
  }, [totalScore]);

  const getBackgroundColor = (score) => {
    if (score >= 0 && score <= 19) return ["#D2E58D", "#ffffff"]; // Green
    if (score >= 20 && score <= 29) return ["#F8E98C", "#ffffff"]; // Yellow
    if (score >= 30 && score <= 50) return ["#E57373", "#ffffff"]; // Red
    return ["#ffffff", "#ffffff"];
  };

  const data = {
    datasets: [
      {
        data: [animatedScore, 50 - animatedScore],
        backgroundColor: getBackgroundColor(animatedScore),
        hoverBackgroundColor: getBackgroundColor(animatedScore),
        borderRadius: 15, // Curve the ends
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
        text: animatedScore.toString(),
        color: "#000000", // Default is #000000
        fontStyle: "Arial", // Default is Arial
        sidePadding: 20, // Default is 20 (as a percentage)
        minFontSize: 10, // Default is 20 (in px), set to false and text will not wrap.
        lineHeight: 25, // Default is 25 (in px), used for wrapping.
      },
    },
  };

  return (
    <div>
      <AnimatedWave />
      <Typography
        id="fixed-heading"
        variant="h4"
        component="div"
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontWeight: "bold",
          color: "white",
        }}
      >
        K10 Assessment Result
      </Typography>
      <div style={{ margin: "10px 50px" }}>
        {loading ? ( // Display loader when loading is true
          <div style={styles.loaderContainer}>
            <Puff
              height="100"
              width="100"
              radius="9"
              color="#007bff"
              ariaLabel="loading"
            />
            <p style={{marginLeft:"10px", color:"#3586FF"}}>Generating report..</p>
          </div>
        ) : (
          <div>
            <p className="score-text">
              Based on your score of <strong>{totalScore}</strong>, here's what
              it means for your psychological distress level:
            </p>

            <div className="chart-container">
              <Doughnut
                data={data}
                options={options}
                className="custom-doughnut-chart"
              />
            </div>
          </div>
        )}
        <div className="score-explanation">
          <p>
            <strong>10–19:</strong> You are likely to be well. Maintain your
            current habits and continue to take care of your mental health.
          </p>
          <p>
            <strong>20–24:</strong> You may have a mild mental disorder. It
            might be helpful to monitor your mental health and consider talking
            to a healthcare provider if symptoms persist.
          </p>
          <p>
            <strong>25–29:</strong> You may have a moderate mental disorder.
            Seeking advice from a mental health professional for further
            evaluation and support is recommended.
          </p>
          <p>
            <strong>30–50:</strong> You may have a severe mental disorder. It is
            important to seek help from a mental health professional as soon as
            possible.
          </p>
        </div>
      </div>

      <div className="additional-info">
        <div className="responsive-container" style={styles.container}>
          <div className="responsive-imageSection" style={styles.imageSection}>
            <div style={styles.imageWrapper}>
              <img
                src={therapy}
                alt="Mental Health Assessment"
                style={styles.wellnessImage}
              />
            </div>
          </div>
          <div className="responsive-textSection-1" style={styles.textSection}>
            <h2 style={styles.textSectionH2}>
              Accuracy of Mental Health Assessment
            </h2>
            <p className="responsive-textSection" style={styles.textSectionP}>
              The accuracy of an Assessment can depend on several factors,
              including the honesty and accuracy of the responses provided by
              the user, and the individual’s current state of mental health.
              It’s essential to note that an Assessment is not a substitute for
              a formal diagnosis.
            </p>
            <p className="responsive-textSection" style={styles.textSectionP}>
              In this context, the assessment uses the{" "}
              <strong>Kessler Psychological Distress Scale (K10)</strong> to
              measure general psychological distress. The K10 is a valuable tool
              for providing an initial indication of distress levels, but it
              does not diagnose specific mental health conditions. High scores
              on the K10 suggest the need for further evaluation by a mental
              health professional to identify and address specific issues.
            </p>
            <p className="responsive-textSection" style={styles.textSectionP}>
              Regular self-assessment can be a useful part of managing mental
              health, but it should be complemented by professional support and
              guidance.
            </p>
          </div>
        </div>
      </div>
      <ResponsivePage />

      <WellnessSection images={hug} />

      <style jsx>{`
        .questionnaire-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        .progress-bar-container {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .progress-bar {
          height: 10px;
          background-color: #e0e0e0;
          border-radius: 5px;
          overflow: hidden;
          flex: 1;
          margin: 10px 30px -10px 30px; /* This adds a 20px bottom margin */
        }
        .progress {
          height: 100%;
          background-color: #007bff;
          transition: width 0.3s;
        }
        .progress-text {
          font-size: 20px;
          font-weight: bold;
          margin-right: 20px;
          color: #3973e1;
        }
        .question-container {
          margin: 0 40px 0px 40px; /* Only bottom and sides */
          padding: 10px;
          border: 0.5px solid #ddd;
          border-radius: 10px;
          background-color: #ffffff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .question-container h3 {
          font-size: 1rem; /* Smaller question text */
          margin: 10px;
        }
        .options-container {
          display: flex;
          flex-wrap: wrap;
          gap: 2px;
        }
        .option-label {
          display: flex;
          align-items: center;
          font-size: 0.9rem;
          padding: 10px;
          cursor: pointer;
          transition: background-color 0.3s, border-color 0.3s;
          flex: 1 1 48%;
          border-radius: 10px;
          width: "40%"; // Set the width to 50%
        }
        .option-label:hover {
          background-color: #b2d5f5;
        }
        .option-label input {
          margin-right: 10px;
        }
        .navigation-buttons {
          display: flex;
          justify-content: center; /* Center the button */
          margin-top: 20px;
        }
        button {
          align: center;
          padding: 7px 20px;
          border: 1px solid black;
          background-color: transparent;
          color: #000;
          margin-right: 10px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
          font-size: 14px;
        }
        button:hover {
          background-color: #b2d5f5;
          color: white;
          border: none;
        }
        .additional-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 30px 30px;
        }
        .validation-message {
          color: red;
          margin-left: 10px;
          font-size: 0.8rem;
          align-self: center;
          margin-top: -20px;
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

        .responsive-button:hover {
          background-color: #0056b3;
          animation: zoom 0.6s infinite;
          color: #fff;
          border: none;
        }

        .responsive-bounce-button:hover {
          animation: bounce 0.6s infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .chart-container {
          max-width: 150px; /* Set a max width for the chart */
          margin: 10px auto; /* Center the chart container */
        }

        @media (max-width: 960px) {
          .responsive-container {
            flex-direction: column;
            align-items: center;
          }

          .responsive-textSection {
            text-align: center;
            order: 1;
            margin-left: -10px !important;
          }
          .responsive-textSection-1 {
            text-align: center;
          }
          .responsive-button {
            width: 15%;
          }

          .responsive-imageSection img {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .responsive-container {
            flex-direction: column;
            align-items: center;
            padding: 20px;
          }

          .text-section-h2 {
            text-align: center; /* Center the title on smaller screens */
          }

          .text-section-p {
            text-align: center; /* Center the paragraphs on smaller screens */
          }

          .responsive-imageSection {
            display: none; /* Hide the image section on smaller screens */
          }

          .responsive-textSection {
            padding: 0;
            text-align: center;
            margin: 20px 0;
          }

          .chart-container {
            max-width: 150px; /* Reduce the max width for smaller screens */
          }
        }

        @media (max-width: 480px) {
          .responsive-container {
            padding: 10px;
          }

          .text-section-h2 {
            font-size: 1.2rem;
          }

          .text-section-p {
            font-size: 0.8rem;
          }

          .chart-container {
            max-width: 150px; /* Further reduce the max width for very small screens */
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px", // Adjust height to fit your design
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    maxWidth: "1200px",
    margin: "20px auto", // Center the container with equal margins
  },
  textSection: {
    flex: 2.6,
    marginLeft: "10px",
    // paddingLeft: "20px",
  },
  textSectionH2: {
    fontSize: "1.7rem",
    marginBottom: "20px",
    marginRight: "10px",
  },
  textSectionH1: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  textSectionP: {
    fontSize: "0.95rem",
    marginBottom: "20px",
  },
  textSectionPa: {
    fontSize: "0.95rem",
    marginBottom: "20px",
  },
  getStartedBtn: {
    padding: "10px 20px",
    backgroundColor: "transparent",
    color: "#000",
    border: "1px solid black",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  getStartedBtnHover: {
    backgroundColor: "#0056b3",
    animation: "zoom 0.6s infinite", // Add this line to apply the zoom animation on hover
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
    width: "90%", // Reduce the size of the image
    borderRadius: "8px",
  },
  imageCaption: {
    backgroundColor: "#f7d072",
    padding: "10px 0",
    marginTop: "10px",
    borderRadius: "5px",
    fontSize: "1rem",
    width: "100%", // Match the width of the image
    textAlign: "center",
    margin: "0 auto",
  },
  waveSection: {
    position: "relative",
    paddingBottom: "50px",
  },
  additionalInfoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    maxWidth: "1200px",
    marginTop: "-55px",
    margin: "20px auto", // Center the container with equal margins
  },
  infoTextSection: {
    flex: 2.5,
    paddingRight: "20px",
  },
  infoImageSection: {
    flex: 1,
    textAlign: "center",
  },
  infoImage: {
    width: "100%",
    borderRadius: "8px",
  },
  longImage: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "20px",
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

export default ResultPage;
