import React from "react";
import therapy from "../images/therapy.png";

const NewPage = () => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px",
      maxWidth: "1200px",
      margin: "20px auto",
      flexDirection: "row",
    },
    imageSection: {
      flex: 1,
      textAlign: "center",
    },
    imageWrapper: {
      display: "inline-block",
      textAlign: "center",
      width: "100%",
      maxWidth: "300px",
    },
    wellnessImage: {
      width: "100%",
      borderRadius: "10px",
    },
    textSection: {
      flex: 2,
      paddingLeft: "20px",
    },
    textSectionH2: {
      fontSize: "2rem",
      marginBottom: "20px",
      textAlign: "left", // Default alignment for larger screens
    },
    textSectionP: {
      fontSize: "0.95rem",
      marginBottom: "20px",
    },
  };

  return (
    <div>
      <style jsx>{`
        .additional-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 30px 30px;
        }

        @media (max-width: 960px) {
          .responsive-container {
            flex-direction: column;
            align-items: center;
            padding: 20px;
          }

          .responsive-textSection {
            text-align: center;
            order: 1;
            margin-left: 0; /* Ensure no left margin */
            padding: 0 20px; /* Add padding for side spacing */
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
            padding: 0 20px; /* Add padding for side spacing */
            text-align: center;
            margin: 20px 0;
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
        }
      `}</style>

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
            <h2 className="text-section-h2" style={styles.textSectionH2}>
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
    </div>
  );
};

export default NewPage;
