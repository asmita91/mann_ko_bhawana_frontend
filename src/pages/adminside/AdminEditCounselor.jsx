import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getSingleCounselorApi, updateCounselorApi } from "../../apis/Api";
import AnimatedWave from "../../components/AnimatedWave";

const AdminEditArticle = () => {
  const { id } = useParams();

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching data

    getSingleCounselorApi(id)
      .then((res) => {
        const counselor = res.data.counselor;
        setCounselorCode(counselor.counselorCode);
        setCounselorName(counselor.counselorName);
        setCounselorDescription(counselor.counselorDescription);
        setCounselorPosition(counselor.counselorPosition);
        setExpertise(counselor.expertise);
        setApproach(counselor.approach);
        setPhilosophy(counselor.philosophy);
        setEducationalDegree(counselor.educationalDegree);
        setOldImage(counselor.counselorImageUrl);
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
  }, [id]);

  const styles = {
    fixedHeading: {
      position: "absolute",
      top: "22%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontWeight: "bold",
      color: "white",
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

  const [counselorName, setCounselorName] = useState("");
  const [counselorCode, setCounselorCode] = useState("");

  const [counselorDescription, setCounselorDescription] = useState("");
  const [counselorPosition, setCounselorPosition] = useState("");
  const [expertise, setExpertise] = useState("");
  const [approach, setApproach] = useState("");
  const [philosophy, setPhilosophy] = useState("");
  const [educationalDegree, setEducationalDegree] = useState("");
  const [oldImage, setOldImage] = useState("");
  const [counselorImage, setCounselorImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const handleImageFunction = (event) => {
    const file = event.target.files[0];
    setCounselorImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("counselorName", counselorName);
    formData.append("counselorCode", counselorCode);
    formData.append("counselorDescription", counselorDescription);
    formData.append("counselorPosition", counselorPosition);
    formData.append("expertise", expertise);
    formData.append("approach", approach);
    formData.append("philosophy", philosophy);
    formData.append("educationalDegree", educationalDegree);
    formData.append("counselorImage", counselorImage);

    updateCounselorApi(id, formData)
      .then((res) => {
        if (!res.data.success) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          navigate("/admin/counselorDashboard");
        }
      })
      .catch((err) => {
        toast.error("Internal server error!");
      });
  };

  return (
    <div>
      <AnimatedWave />
      <Typography
        id="fixed-heading"
        variant="h4"
        component="div"
        style={styles.fixedHeading}
      >
        {counselorName}
      </Typography>
      <div className="container-fluid" style={styles.container}>
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
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-12 order-md-1 order-1"
              style={styles.imageColumn}
            >
              <div className="mb-3">
                <h6 style={styles.boldLabel}>Old Image Preview</h6>
                <img style={styles.image} src={oldImage} alt="Old Counselor" />
              </div>
              <div>
                <h6 style={styles.boldLabel}>New Image</h6>
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="New Counselor"
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
                  <label style={styles.boldLabel}>Counselor Image</label>
                  <input
                    onChange={handleImageFunction}
                    type="file"
                    className="form-control form-control-sm"
                    style={styles.formControl}
                  />
                </div>
                <div className="form-group mb-3">
                  <label style={styles.boldLabel}>Counselor Name</label>
                  <input
                    value={counselorName}
                    onChange={(e) => setCounselorName(e.target.value)}
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Enter counselor name"
                    style={styles.formControl}
                  />
                </div>
                <div className="form-group mb-3">
                  <label style={styles.boldLabel}>Counselor Description</label>
                  <textarea
                    value={counselorDescription}
                    onChange={(e) => setCounselorDescription(e.target.value)}
                    className="form-control form-control-sm"
                    placeholder="Enter description"
                    rows="4"
                    style={styles.formControl}
                  ></textarea>
                </div>
                <div className="form-group mb-3">
                  <label style={styles.boldLabel}>Counselor Code</label>
                  <input
                    value={counselorCode}
                    onChange={(e) => setCounselorCode(e.target.value)}
                    className="form-control form-control-sm"
                    type="number"
                    placeholder="Enter counselor code"
                    style={styles.formControl}
                  />
                </div>
                <div className="form-group mb-3">
                  <label style={styles.boldLabel}>Counselor Position</label>
                  <input
                    value={counselorPosition}
                    onChange={(e) => setCounselorPosition(e.target.value)}
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Enter counselor position"
                    style={styles.formControl}
                  />
                </div>
                <div className="form-group mb-3">
                  <label style={styles.boldLabel}>Expertise</label>
                  <input
                    value={expertise}
                    onChange={(e) => setExpertise(e.target.value)}
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Enter expertise"
                    style={styles.formControl}
                  />
                </div>
                <div className="form-group mb-3">
                  <label style={styles.boldLabel}>Approach</label>
                  <input
                    value={approach}
                    onChange={(e) => setApproach(e.target.value)}
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Enter approach"
                    style={styles.formControl}
                  />
                </div>
                <div className="form-group mb-3">
                  <label style={styles.boldLabel}>Philosophy</label>
                  <input
                    value={philosophy}
                    onChange={(e) => setPhilosophy(e.target.value)}
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Enter philosophy"
                    style={styles.formControl}
                  />
                </div>
                <div className="form-group mb-3">
                  <label style={styles.boldLabel}>Educational Degree</label>
                  <input
                    value={educationalDegree}
                    onChange={(e) => setEducationalDegree(e.target.value)}
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Enter educational degree"
                    style={styles.formControl}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-30 mt-2">
                  Update Counselor
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminEditArticle;
