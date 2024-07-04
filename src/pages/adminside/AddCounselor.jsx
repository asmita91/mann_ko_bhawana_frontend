import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createCounselorApi,
  deleteCounselorApi,
  getPaginatedCounselorsApi,
} from "../../apis/Api";
import AnimatedWave from "../../components/AnimatedWave";

const AdminArticleDashboard = () => {
  const navigate = useNavigate();

  const articleCardStyle = {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "20px",
    margin: "10px 0",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    backgroundColor: "white",
    fontSize: "0.95rem",
  };

  const articleImageStyle = {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const articleInfoStyle = {
    flex: "1",
    marginLeft: "20px",
  };

  const fixedHeading = {
    position: "absolute",
    top: "22%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontWeight: "bold",
    color: "white",
  };

  const headerStyle = {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
    margin: "0 auto 30px",
  };

  const paginationControlsStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  };

  const paginationButtonStyle = {
    border: "none",
    padding: "10px 15px",
    margin: "0 10px",
    borderRadius: "8px",
    backgroundColor: "#f8c6d1",
    color: "white",
    fontWeight: "bold",
  };

  const loaderContainer = {
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "flex-start", // Align to the top
    height: "100vh", // Full viewport height
    paddingTop: "20vh", // Add some padding from the top to position it nicely
  };

  const diagnoseBtn = {
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
  };
  const diagnoseBtnHover = {
    backgroundColor: "#0056b3",
    animation: "zoom 0.6s infinite", // Add this line to apply the zoom animation on hover
  };
    const red = {
    padding: "7px 17px",
    marginRight:"10px",
    backgroundColor: "#ff0000",
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
  };
  const redHover = {
    backgroundColor: "#ff0000",
    animation: "zoom 0.6s infinite", // Add this line to apply the zoom animation on hover
  };

  const [counselorName, setCounselorName] = useState("");
  const [counselorDescription, setCounselorDescription] = useState("");
  const [counselorPosition, setCounselorPosition] = useState("");
  const [expertise, setExpertise] = useState("");
  const [approach, setApproach] = useState("");
  const [philosophy, setPhilosophy] = useState("");
  const [educationalDegree, setEducationalDegree] = useState("");
  const [counselorCode, setCounselorCode] = useState("");

  const [counselorImage, setCounselorImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  //image upload function
  const handleImageFunction = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setCounselorImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };
  //load all products when page loads
  const [counselors, setCounselors] = useState([]);

  // States for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // Fetch paginated products
  useEffect(() => {
    setLoading(true); // Set loading to true before fetching data

    getPaginatedCounselorsApi(currentPage)
      .then((res) => {
        if (res.data.success) {
          setCounselors(res.data.counselors);
          setTotalPages(res.data.totalPages);
        } else {
          toast.error("Failed to fetch counselors.");
        }
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
  }, [currentPage]);

  // ... (existing functions for form submission and deletion)

  // Function to navigate to the next page
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  // Function to navigate to the previous page
  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  //submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("counselorName", counselorName);
    formData.append("counselorDescription", counselorDescription);
    formData.append("counselorPosition", counselorPosition);
    formData.append("expertise", expertise);
    formData.append("approach", approach);
    formData.append("philosophy", philosophy);
    formData.append("educationalDegree", educationalDegree);
    formData.append("counselorCode", counselorCode);

    formData.append("counselorImage", counselorImage);

    //send request to backend api
    createCounselorApi(formData)
      .then((res) => {
        if (res.data.success == false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          navigate("/admin/counselorDashboard"); // Navigate to counselor dashboard on success
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Internal Server Error!");
      });
  };

  //delete product function
  const handleDelete = (id) => {
    //confirm dialog box
    const confirm = window.confirm(
      "Are you sure you want to delete this detail of counselor?"
    );
    if (!confirm) {
      return;
    } else {
      deleteCounselorApi(id).then((res) => {
        if (res.data.success == false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          window.location.reload();
        }
      });
    }
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
        style={fixedHeading}
      >
        Counselor Dashboard
      </Typography>
      <div className="m-4">
        {loading ? ( // Display loader when loading is true
          <div style={loaderContainer}>
            <Puff
              height="100"
              width="100"
              radiu="9"
              color="#007bff"
              ariaLabel="loading"
            />
          </div>
        ) : (
          <div>
            <div className="d-flex justify-content-end">
              <Button
                style={diagnoseBtn}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor =
                    diagnoseBtnHover.backgroundColor;
                  e.currentTarget.style.animation = diagnoseBtnHover.animation;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor =
                    diagnoseBtn.backgroundColor;
                  e.currentTarget.style.animation = "none"; // Remove the animation
                }}
              >
                Add Counselors
              </Button>
            </div>
            <div className="d-flex justify-content-between">
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5 text-center"
                        id="exampleModalLabel"
                      >
                        Create a new profile for counselor!
                      </h1>
                      <button
                        type="button"
                        className="btn btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <label>Counselor Name</label>
                      <input
                        onChange={(e) => setCounselorName(e.target.value)}
                        className="form-control mb-2"
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter counselor name"
                      />
                      <label htmlFor="">Counselor Description</label>
                      <textarea
                        onChange={(e) =>
                          setCounselorDescription(e.target.value)
                        }
                        className="form-control mb-2"
                        placeholder={"Enter description"}
                        cols="2"
                        rows="2"
                      ></textarea>

                      <label htmlFor="">Counselor Position</label>
                      <input
                        onChange={(e) => setCounselorPosition(e.target.value)}
                        className="form-control mb-2"
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter counselor position"
                      />

                      <label htmlFor="">Expertise</label>
                      <textarea
                        onChange={(e) => setExpertise(e.target.value)}
                        className="form-control mb-2"
                        placeholder={"Enter expertise"}
                        cols="2"
                        rows="2"
                      ></textarea>

                      <label htmlFor="counselorCode">Counselor Code</label>
                      <input
                        type="number"
                        onChange={(e) => setCounselorCode(e.target.value)}
                        className="form-control mb-2"
                        placeholder="Enter counselor code"
                        id="counselorCode"
                      />

                      <label htmlFor="">Approach</label>
                      <textarea
                        onChange={(e) => setApproach(e.target.value)}
                        className="form-control mb-2"
                        placeholder={"Enter approach"}
                        cols="2"
                        rows="2"
                      ></textarea>
                      <label htmlFor="">Philosophy</label>

                      <textarea
                        onChange={(e) => setPhilosophy(e.target.value)}
                        className="form-control mb-2"
                        placeholder={"Enter philosophy"}
                        cols="2"
                        rows="2"
                      ></textarea>
                      <label htmlFor="">Educational Degree</label>

                      <textarea
                        onChange={(e) => setEducationalDegree(e.target.value)}
                        className="form-control mb-2"
                        placeholder={"Enter educational degree"}
                        cols="2"
                        rows="2"
                      ></textarea>

                      <label> Counselor Image</label>
                      <input
                        onChange={handleImageFunction}
                        type="file"
                        className="form-control mb-2"
                      />

                      {/* preview image */}
                      {previewImage && (
                        <img
                          src={previewImage}
                          className="img-fluid rounded object-cover mt-2 "
                        />
                      )}
                    </div>
                    <div className="modal-footer">
                      

                      <Button
                        data-bs-dismiss="modal"
                        onClick={handleSubmit}
                        style={red}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor =
                            redHover.backgroundColor;
                          e.currentTarget.style.animation =
                            redHover.animation;
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor =
                            red.backgroundColor;
                          e.currentTarget.style.animation = "none"; // Remove the animation
                        }}
                      >
                        Close{" "}
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        style={diagnoseBtn}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor =
                            diagnoseBtnHover.backgroundColor;
                          e.currentTarget.style.animation =
                            diagnoseBtnHover.animation;
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor =
                            diagnoseBtn.backgroundColor;
                          e.currentTarget.style.animation = "none"; // Remove the animation
                        }}
                      >
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Make table */}
        <div className="articles-list">
          {counselors.map((item) => (
            <div
              key={item._id}
              style={articleCardStyle}
              className="d-flex align-items-center"
            >
              <img
                src={item.counselorImageUrl}
                style={articleImageStyle}
                alt={item.counselorName}
              />
              <div style={articleInfoStyle}>
                <h5>{item.counselorName}</h5>
                <p>{item.counselorDescription.slice(0, 200)}...</p>
              </div>
              <div>
                <Link
                  to={`/admin/edit-counselor/${item._id}`}
                  className="btn btn-success mr-4"
                  style={{ marginRight: "10px" }}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <table className="table  table-striped mt-2">
          <thead className="table-dark">
            <tr>
              <th scope="col">Article Image</th>
              <th scope="col">Article Name</th>
              <th scope="col">Article Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((item) => (
              <tr>
                <td>
                  <img src={item.articleImageUrl} height={40} width={40} />
                </td>
                <td>{item.articleName}</td>
                <td>{item.articleDescription.slice(0, 10)}</td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Link
                      to={`/admin/edit-article/${item._id}`}
                      type="button"
                      className="btn btn-success"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      type="button"
                      className="btn btn-primary btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <div className="pagination-controls text-center mt-3">
          <button
            className="btn btn-outline-primary mx-2 rounded"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="pagination-info">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-outline-primary mx-2 rounded"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminArticleDashboard;
