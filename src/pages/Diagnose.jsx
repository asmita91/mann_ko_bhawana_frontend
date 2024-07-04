import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner"; // Import the loader component
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { submitQuestionnaire } from "../apis/Api";
import AnimatedWave from "../components/AnimatedWave";
import WellnessSection from "../components/Ready";
import NewPage from "../components/Therapy";
import hug from "../images/hug.jpg";
import therapy from "../images/therapy.png";
import ResponsivePage from "./Responsive";

const questions = [
  {
    id: 1,
    questionText:
      "In the past 4 weeks, about how often did you feel tired out for no good reason?",
    options: [
      { text: "None of the time", points: 1 },
      { text: "A little of the time", points: 2 },
      { text: "Some of the time", points: 3 },
      { text: "Most of the time", points: 4 },
      { text: "All of the time", points: 5 },
    ],
  },
  {
    id: 2,
    questionText: "In the past 4 weeks, about how often did you feel nervous?",
    options: [
      { text: "None of the time", points: 1 },
      { text: "A little of the time", points: 2 },
      { text: "Some of the time", points: 3 },
      { text: "Most of the time", points: 4 },
      { text: "All of the time", points: 5 },
    ],
  },
  {
    id: 3,
    questionText:
      "In the past 4 weeks, about how often did you feel so nervous that nothing could calm you down?",
    options: [
      { text: "None of the time", points: 1 },
      { text: "A little of the time", points: 2 },
      { text: "Some of the time", points: 3 },
      { text: "Most of the time", points: 4 },
      { text: "All of the time", points: 5 },
    ],
  },
  {
    id: 4,
    questionText: "In the past 4 weeks, about how often did you feel hopeless?",
    options: [
      { text: "None of the time", points: 1 },
      { text: "A little of the time", points: 2 },
      { text: "Some of the time", points: 3 },
      { text: "Most of the time", points: 4 },
      { text: "All of the time", points: 5 },
    ],
  },
  {
    id: 5,
    questionText:
      "In the past 4 weeks, about how often did you feel restless or fidgety?",
    options: [
      { text: "None of the time", points: 1 },
      { text: "A little of the time", points: 2 },
      { text: "Some of the time", points: 3 },
      { text: "Most of the time", points: 4 },
      { text: "All of the time", points: 5 },
    ],
  },
  {
    id: 6,
    questionText:
      "In the past 4 weeks, about how often did you feel so restless you could not sit still?",
    options: [
      { text: "None of the time", points: 1 },
      { text: "A little of the time", points: 2 },
      { text: "Some of the time", points: 3 },
      { text: "Most of the time", points: 4 },
      { text: "All of the time", points: 5 },
    ],
  },
  {
    id: 7,
    questionText:
      "In the past 4 weeks, about how often did you feel depressed?",
    options: [
      { text: "None of the time", points: 1 },
      { text: "A little of the time", points: 2 },
      { text: "Some of the time", points: 3 },
      { text: "Most of the time", points: 4 },
      { text: "All of the time", points: 5 },
    ],
  },
  {
    id: 8,
    questionText:
      "In the past 4 weeks, about how often did you feel that everything was an effort?",
    options: [
      { text: "None of the time", points: 1 },
      { text: "A little of the time", points: 2 },
      { text: "Some of the time", points: 3 },
      { text: "Most of the time", points: 4 },
      { text: "All of the time", points: 5 },
    ],
  },
  {
    id: 9,
    questionText:
      "In the past 4 weeks, about how often did you feel so sad that nothing could cheer you up?",
    options: [
      { text: "None of the time", points: 1 },
      { text: "A little of the time", points: 2 },
      { text: "Some of the time", points: 3 },
      { text: "Most of the time", points: 4 },
      { text: "All of the time", points: 5 },
    ],
  },
  {
    id: 10,
    questionText:
      "In the past 4 weeks, about how often did you feel worthless?",
    options: [
      { text: "None of the time", points: 1 },
      { text: "A little of the time", points: 2 },
      { text: "Some of the time", points: 3 },
      { text: "Most of the time", points: 4 },
      { text: "All of the time", points: 5 },
    ],
  },
];

const QUESTIONS_PER_PAGE = 1;

const QuestionnairePage = () => {
  const [answers, setAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [validationMessage, setValidationMessage] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  const handleChange = (questionId, option) => {
    setAnswers({
      ...answers,
      [questionId]: option,
    });
  };

  const handleSubmit = async () => {
    if (!answers[questions[currentPage].id]) {
      setValidationMessage("Please select an option for each question.");
      return;
    }
    setLoading(true); // Set loading to true before submitting
    const answersArray = Object.keys(answers).map((questionId) => ({
      questionId,
      points: answers[questionId].points,
    }));
    try {
      const { resultId, totalScore } = await submitQuestionnaire(answersArray);
      localStorage.setItem("resultId", resultId);
      toast.success("Questionnaire submitted successfully!");
      navigate("/diagnose/result", { state: { resultId, totalScore } });
    } catch (error) {
      console.error("Error submitting questionnaire", error);
      toast.error("Failed to submit questionnaire. Please try again.");
    } finally {
      setLoading(false); // Set loading to false after submitting
    }
  };

  const nextPage = () => {
    if (!answers[questions[currentPage].id]) {
      setValidationMessage("Please select an option for each question.");
      return;
    }
    setValidationMessage("");
    if (currentPage < Math.ceil(questions.length / QUESTIONS_PER_PAGE) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    setValidationMessage("");
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderQuestions = () => {
    const startIndex = currentPage * QUESTIONS_PER_PAGE;
    const endIndex = startIndex + QUESTIONS_PER_PAGE;
    return questions.slice(startIndex, endIndex).map((question) => (
      <div key={question.id} className="question-container">
        <div className="question-text">
          <h3>{question.questionText}</h3>
          {validationMessage && (
            <span className="validation-message" >{validationMessage}</span>
          )}
        </div>
        <div className="options-container">
          {question.options.map((option) => (
            <label key={option.points} className="option-label">
              <input
                type="checkbox"
                name={`question-${question.id}`}
                value={option.points}
                checked={answers[question.id] === option}
                onChange={() => handleChange(question.id, option)}
              />
              {option.text}
            </label>
          ))}
        </div>
      </div>
    ));
  };

  const progress = (
    (Object.keys(answers).length / questions.length) *
    100
  ).toFixed(0);

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
        K10 Assessment
      </Typography>

      <div className="progress-bar-container">
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>
        <span className="progress-text">{progress}%</span>
      </div>

      {loading ? ( // Display loader when loading is true
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px", // Adjust height as needed
          }}
        >
          <Puff
            height="100"
            width="100"
            radius="9"
            color="#007bff"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <>
          {renderQuestions()}
          <div className="navigation-buttons">
            {currentPage > 0 && (
              <button
                className="responsive-button"
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
                onClick={previousPage}
              >
                Previous
              </button>
            )}
            {currentPage <
              Math.ceil(questions.length / QUESTIONS_PER_PAGE) - 1 && (
              <button
                className="responsive-button"
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
                onClick={nextPage}
              >
                Next
              </button>
            )}
            {currentPage ===
              Math.ceil(questions.length / QUESTIONS_PER_PAGE) - 1 && (
              <button
                className="responsive-button"
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
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </>
      )}

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
          margin-top:-20px ;
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

        @media (max-width: 960px) {
          .responsive-container {
            flex-direction: column;
            align-items: center;
          }

          .responsive-textSection {
            text-align: center;
            order: 1;
            margin-left:-10px !important;
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
    </div>
  );
};

const styles = {
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
    marginLeft:"10px",
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

export default QuestionnairePage;
