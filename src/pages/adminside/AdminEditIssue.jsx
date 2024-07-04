import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getSingleIssueApi, updateIssueApi } from "../../apis/Api";
import AnimatedWave from "../../components/AnimatedWave";

const AdminEditIssue = () => {
  // Receive id from url
  const { id } = useParams();

  // State management for issue data
  const [issueName, setIssueName] = useState("");
  const [issueQuestion, setIssueQuestion] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [stat, setStat] = useState("");
  const [whatIsIt, setWhatIsIt] = useState("");
  const [oldImage, setOldImage] = useState("");
  const [issueImage, setIssueImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load issue data
  useEffect(() => {
    getSingleIssueApi(id).then((res) => {
      const issue = res.data.issue;
      setIssueName(issue.issueName);
      setIssueQuestion(issue.issueQuestion);
      setIssueDescription(issue.issueDescription);
      setYoutubeUrl(issue.youtubeUrl);
      setStat(issue.stat);
      setWhatIsIt(issue.whatIsIt);
      setOldImage(issue.issueImageUrl);
      setLoading(false);
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
  }, [id]);

  const handleImageFunction = (event) => {
    const file = event.target.files[0];
    setIssueImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  // Handle submit function
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("issueName", issueName);
    formData.append("issueQuestion", issueQuestion);
    formData.append("issueDescription", issueDescription);
    formData.append("youtubeUrl", youtubeUrl);
    formData.append("stat", stat);
    formData.append("whatIsIt", whatIsIt);
    formData.append("issueImage", issueImage);

    updateIssueApi(id, formData)
      .then((res) => {
        if (!res.data.success) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          navigate("/admin/issueDashboard");
        }
      })
      .catch((err) => {
        toast.error("Internal server error!");
      });
  };

  const styles = {
    loaderContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      height: "100vh",
      paddingTop: "20vh",
    },
    formControl: {
      fontSize: "0.9rem",
      padding: "0.375rem 0.75rem",
    },
    container: {
      maxWidth: "100vw",
      overflowX: "hidden",
    },
    imageColumn: {
      padding: "20px",
      textAlign: "center",
    },
    image: {
      maxWidth: "100%",
      height: "auto",
      marginBottom: "20px",
    },
    boldLabel: {
      fontWeight: "bold",
      fontSize: "0.95rem",
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
    fixedHeading: {
      position: "absolute",
      top: "22%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontWeight: "bold",
      color: "white",
    },
  };
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
        {issueName}{" "}
      </Typography>
      <div className="container-fluid" style={styles.container}>
        <div className="m-4">
          {loading ? (
            <div style={styles.loaderContainer}>
              <Puff
                height="100"
                width="100"
                radiu="9"
                color="#007bff"
                ariaLabel="loading"
              />
              Loading issues..
            </div>
          ) : (
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-md-6 col-12 order-md-1 order-1"
                style={styles.imageColumn}
              >
                <div className="mb-3">
                  <h6 style={styles.boldLabel}>Old Image Preview</h6>
                  <img style={styles.image} src={oldImage} alt="Old Issue" />
                </div>
                <div>
                  <h6 style={styles.boldLabel}>New Image</h6>
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="New Issue"
                      style={styles.image}
                    />
                  ) : (
                    <p>No image selected!</p>
                  )}
                </div>
              </div>
              <div
                className="col-lg-6 col-md-8 col-12 order-md-2 order-2"
                style={{ padding: "20px" }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label style={styles.boldLabel}>Issue Name</label>
                    <input
                      value={issueName}
                      onChange={(e) => setIssueName(e.target.value)}
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="Enter issue name"
                      style={styles.formControl}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label style={styles.boldLabel}>Issue Question</label>
                    <input
                      value={issueQuestion}
                      onChange={(e) => setIssueQuestion(e.target.value)}
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="Enter issue question"
                      style={styles.formControl}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label style={styles.boldLabel}>Issue Description</label>
                    <textarea
                      value={issueDescription}
                      onChange={(e) => setIssueDescription(e.target.value)}
                      className="form-control form-control-sm"
                      placeholder="Enter description"
                      rows="4"
                      style={styles.formControl}
                    ></textarea>
                  </div>
                  <div className="form-group mb-3">
                    <label style={styles.boldLabel}>Issue YouTube URL</label>
                    <textarea
                      value={youtubeUrl}
                      onChange={(e) => setYoutubeUrl(e.target.value)}
                      className="form-control form-control-sm"
                      placeholder="Enter YouTube URL"
                      rows="4"
                      style={styles.formControl}
                    ></textarea>
                  </div>
                  <div className="form-group mb-3">
                    <label style={styles.boldLabel}>Issue What Is It</label>
                    <textarea
                      value={whatIsIt}
                      onChange={(e) => setWhatIsIt(e.target.value)}
                      className="form-control form-control-sm"
                      placeholder="Enter what is it"
                      rows="4"
                      style={styles.formControl}
                    ></textarea>
                  </div>
                  <div className="form-group mb-3">
                    <label style={styles.boldLabel}>Issue Stats</label>
                    <textarea
                      value={stat}
                      onChange={(e) => setStat(e.target.value)}
                      className="form-control form-control-sm"
                      placeholder="Enter stat"
                      rows="4"
                      style={styles.formControl}
                    ></textarea>
                  </div>
                  <div className="form-group mb-3">
                    <label style={styles.boldLabel}>Issue Image</label>
                    <input
                      onChange={handleImageFunction}
                      type="file"
                      className="form-control form-control-sm"
                      style={styles.formControl}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mt-2">
                    Update Issue
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminEditIssue;
