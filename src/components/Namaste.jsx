import React from "react";
import namaste from "../images/namaste.png";

const AdditionalInfo = () => {
  return (
    <div className="additional-info" style={{ marginTop: "40px" }}>
      <div className="container">
        <div className="textSection">
          <h4 className="textSectionH2">
            The Best Counseling Service That You Can Trust{" "}
          </h4>
          <div className="namaste">
            <h5>Experienced Counselors</h5>
            <p className="textSectionP" style={{ color: "grey" }}>
              Your privacy is our top priority. All sessions are conducted in a
              safe and confidential environment. We use the latest technology to
              ensure that your information is protected and that you feel secure
              during your counseling sessions.
            </p>
            <h5>Confidential and Secure</h5>
            <p className="textSectionP" style={{ color: "grey" }}>
              Your privacy is our top priority. All sessions are conducted in a
              safe and confidential environment. We use the latest technology to
              ensure that your information is protected and that you feel secure
              during your counseling sessions.
            </p>
            <h5>Proven Results</h5>
            <p className="textSectionP" style={{ color: "grey" }}>
              Our clients consistently report positive outcomes and improved
              well-being. We utilize evidence-based practices and continuously
              update our methods based on the latest research in psychology and
              mental health.
            </p>
          </div>
        </div>
        <div className="imageSection">
          <div className="imageWrapper">
            <img
              src={namaste}
              alt="Mental Health Assessment"
              className="wellnessImage"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          max-width: 1200px;
          margin: 20px auto;
        }

        .textSection {
          flex: 2.9;
          padding-right: 20px;
        }

        .textSectionH2 {
          font-size: 1.6rem;
          margin-bottom: 20px;
          text-align: right;
        }

        .textSectionP {
          font-size: 0.9rem;
          margin-bottom: 20px;
          text-align: right;
        }

        .namaste {
          font-size: 0.95rem;
          text-align: right;
        }

        .imageSection {
          flex: 1;
          text-align: center;
        }

        .imageWrapper {
          display: inline-block;
          text-align: center;
          width: 100%;
          max-width: 300px;
        }

        .wellnessImage {
          width: 100%;
          border-radius: 10px;
        }

        /* Media query for responsiveness */
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            text-align: center;
          }

          .textSection {
            padding-right: 0;
            padding-top: 20px;
          }

          .textSectionH2 {
            text-align: center;
          }

          .textSectionP {
            text-align: center;
          }

          .namaste {
            text-align: center;
          }

          .imageSection {
            order: -1; /* This will place the image on top on smaller screens */
          }
        }

      
        


        .loaderContainer {
          display: flex;
          justify-content: center; /* Center horizontally */
          align-items: flex-start; /* Align to the top */
          height: 100vh; /* Full viewport height */
          padding-top: 20vh; /* Add some padding from the top to position it nicely */
        }
      `}</style>
    </div>
  );
};

export default AdditionalInfo;
