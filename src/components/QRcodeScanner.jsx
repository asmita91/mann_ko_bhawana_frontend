import React from "react";
import qr from "../images/qr.png";
const QRCodeComponent = ({ qrImage, onDone }) => {
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
    <div className="qr-container">
      <p>Please scan the following QR to complete your booking procedure:</p>
      <img src={qr} alt="QR Code" className="qr-image" />
      <p>
        In case of any issues, you may be asked to provide the booking
        confirmation statement.
      </p>
      <button
        onClick={onDone}
        className="done-button"
        style={styles.diagnoseBtn}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor =
            styles.diagnoseBtnHover.backgroundColor;
          e.currentTarget.style.animation = styles.diagnoseBtnHover.animation;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor =
            styles.diagnoseBtn.backgroundColor;
          e.currentTarget.style.animation = "none"; // Remove the animation
        }}
      >
        Done →
      </button>

      <style jsx>{`
        .qr-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 10px;
          max-width: 400px;
          margin: 0 auto;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .qr-image {
          margin: 20px 0;
          width: 200px;
          height: 200px;
        }

        .done-button {
          color: black;
          padding: 5px 20px;
          border: 1px solid #000;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }

        .done-button:hover {
          background-color: #b2d5f5;
          border: none;
          color: white;
        }

        .done-button:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "flex-start", // Align to the top
    height: "100vh", // Full viewport height
    paddingTop: "20vh", // Add some padding from the top to position it nicely
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
};
export default QRCodeComponent;
