import { Typography } from "@mui/material";
import axios from "axios";
import khaltiCheckout from "khalti-checkout-web";
import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AnimatedWave from "../components/AnimatedWave";
import FaqContainer from "../components/FAQ";
import AdditionalInfo from "../components/Namaste";
import QRCodeComponent from "../components/QRcodeScanner";
import WellnessSection from "../components/Ready";
import config from "../components/khalti/khaltiConfig";
import empathy from "../images/empathy.jpg";
import esewa from "../images/esewa.png";
import khalti from "../images/khalti.png";
import TimeSlotSelection from "./TimeSlotSelection";

const AppointmentForm = ({ fetchAppointments, counselors = [] }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  let checkout = new khaltiCheckout(config);

  const [formData, setFormData] = useState({
    userId: user ? user._id : "",
    counselorId: "",
    date: "",
    startTime: "",
    endTime: "",
    duration: "",
    price: "",
    sessionType: "Individual",
  });

  const [step, setStep] = useState(1);
  const [timeSlots, setTimeSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);

  const today = new Date().toISOString().split("T")[0];
  const twoMonthsFromNow = new Date();
  twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);
  const maxDate = twoMonthsFromNow.toISOString().split("T")[0];

  const faqData = [
    {
      question: "How do I book a session with a counselor on our platform?",
      answer:
        "Booking a session with a counselor on our platform is straightforward. First, navigate to the booking section on our website. Then, select a counselor from the dropdown list based on your preference. After selecting a counselor, choose the type of counseling session you are interested in, whether it be individual therapy, couples therapy, or another type of counseling. Next, you will need to select a date and time that works best for you from the available slots. Once you have made your selections, you can proceed to the payment section to complete your booking. Our system will guide you through each step to ensure a smooth booking experience.",
    },
    {
      question:
        "How will I know if my booking with a counselor is confirmed successfully?",
      answer:
        "After you have completed the booking process, you will receive a confirmation email to the email address you provided during booking. This email will contain all the details of your appointment, including the date, time, and the name of the counselor you booked with. Additionally, you can always check the status of your booking by logging into your account on our platform and navigating to the 'My Appointments' section. Here, you will find a list of all your upcoming and past appointments, along with their statuses.",
    },
    {
      question: "Can I cancel or reschedule my booking if something comes up?",
      answer:
        "Yes, you can cancel or reschedule your booking if your plans change. To do this, log into your account and go to your dashboard. From there, navigate to the 'My Appointments' section where you will see a list of your upcoming sessions. Select the appointment you wish to change and follow the prompts to either cancel or reschedule. Please note that our cancellation policy applies, and depending on how close to the appointment time you are making changes, a fee may be applicable. We recommend checking our cancellation policy for detailed information.",
    },
    {
      question:
        "Is it possible to switch counselors after I have already booked a session?",
      answer:
        "Switching counselors after booking a session is possible, but it requires contacting our support team. If you feel the need to switch to a different counselor, please reach out to our support team with your request. They will assist you in finding another counselor that fits your needs and preferences. Please note that switching counselors might affect your appointment time, so we advise making this request as soon as possible to accommodate your scheduling needs.",
    },
    {
      question:
        "Are there any fees associated with canceling or rescheduling a session?",
      answer:
        "There may be fees associated with canceling or rescheduling a session, depending on how close to the session date you make the change. Our cancellation policy outlines the specific conditions under which fees apply. Typically, if you cancel or reschedule a session well in advance, you may not incur any fees. However, cancellations or rescheduling requests made within a certain time frame before the session may be subject to a fee. We encourage you to review our detailed cancellation policy to understand any potential charges that might apply.",
    },
  ];

  useEffect(() => {
    if (!user || !token) {
      toast.error("You need to log in first.");
      return;
    }
  }, [user, token]);

  useEffect(() => {
    setLoading(true);

    if (formData.counselorId && formData.date) {
      axios
        .get("http://localhost:5000/api/appointments/booked", {
          params: {
            counselorId: formData.counselorId,
            date: formData.date,
          },
        })
        .then((response) => {
          setBookedSlots(response.data);
        })
        .catch((error) => {
          console.error("Error fetching booked slots:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    const handleScroll = () => {
      const heading = document.getElementById("fixed-heading");
      const waveSection = document.querySelector(".wave-section");

      if (window.scrollY > waveSection.offsetHeight) {
        heading.style.position = "relative";
        heading.style.top = "0";
        heading.style.transform = "translate(-50%, 0)";
      } else {
        heading.style.position = "fixed";
        heading.style.top = "25%";
        heading.style.transform = "translate(-50%, -50%)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [formData.counselorId, formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEsewaPayment = () => {
    if (!isConfirmed) {
      setShowError(true);
      return;
    }
    setShowQRCode(true);
  };

  const handleDurationChange = (duration) => {
    let slots = [];
    let price = 0;
    if (duration === "15") {
      slots = [
        "12:00 PM-12:15 PM",
        "12:15 PM-12:30 PM",
        "12:30 PM-12:45 PM",
        "12:45 PM-1:00 PM",
      ];
      price = 500;
    } else if (duration === "90") {
      slots = [
        "8:00 AM-9:30 AM",
        "10:30 AM-12:00 PM",
        "4:00 PM-5:30 PM",
        "5:30 PM-7:00 PM",
      ];
      price = 1200;
    }
    setTimeSlots(slots);
    setFormData({ ...formData, duration, price, startTime: "", endTime: "" });
  };

  const handleTimeSlotChange = (value) => {
    const [start, end] = value.split("-");
    setFormData({
      ...formData,
      startTime: start.trim(),
      endTime: end.trim(),
    });
  };

  const isSlotBooked = (slot) => {
    return bookedSlots.some((appointment) => {
      const [start, end] = slot.split("-");
      const appointmentStart = new Date(
        `${formData.date}T${appointment.startTime}`
      );
      const appointmentEnd = new Date(
        `${formData.date}T${appointment.endTime}`
      );
      const slotStart = new Date(`${formData.date}T${start.trim()}`);
      const slotEnd = new Date(`${formData.date}T${end.trim()}`);
      return (
        (slotStart >= appointmentStart && slotStart < appointmentEnd) ||
        (slotEnd > appointmentStart && slotEnd <= appointmentEnd)
      );
    });
  };

  const convertTo24HourFormat = (time12h) => {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");

    if (modifier === "PM" && hours !== "12") {
      hours = parseInt(hours, 10) + 12;
    } else if (modifier === "AM" && hours === "12") {
      hours = "00";
    }

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  };
  const submitAppointment = async () => {
    const startTime24h = convertTo24HourFormat(formData.startTime);
    const endTime24h = convertTo24HourFormat(formData.endTime);

    try {
      const payload = {
        userId: formData.userId,
        counselorId: formData.counselorId,
        date: formData.date,
        startTime: startTime24h,
        endTime: endTime24h,
        duration: formData.duration,
        price: formData.price,
        sessionType: formData.sessionType,
      };

      const response = await axios.post(
        "http://localhost:5000/api/appointments/book",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        fetchAppointments();
        setFormData({
          userId: user ? user._id : "",
          counselorId: "",
          date: "",
          startTime: "",
          endTime: "",
          duration: "",
          price: "",
          sessionType: "Individual",
        });
        toast.success("Appointment booked successfully!");
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Error booking appointment.";
      toast.error(errorMessage);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const startTime24h = convertTo24HourFormat(formData.startTime);
    const endTime24h = convertTo24HourFormat(formData.endTime);

    try {
      const payload = {
        userId: formData.userId,
        counselorId: formData.counselorId,
        date: formData.date,
        startTime: startTime24h,
        endTime: endTime24h,
        duration: formData.duration,
        price: formData.price,
        sessionType: formData.sessionType,
      };

      const response = await axios.post(
        "http://localhost:5000/api/appointments/book",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        fetchAppointments();
        setFormData({
          userId: user ? user._id : "",
          counselorId: "",
          date: "",
          startTime: "",
          endTime: "",
          duration: "",
          price: "",
          sessionType: "Individual",
        });
        toast.success("Appointment booked successfully!");

        // Timed page reload after 3 seconds
        setTimeout(() => {
          window.location.reload();
        }, 3000); // Adjust the delay time as needed (3000 milliseconds = 3 seconds)
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Error booking appointment.";
      toast.error(errorMessage);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const startTime24h = convertTo24HourFormat(formData.startTime);
  //   const endTime24h = convertTo24HourFormat(formData.endTime);

  //   try {
  //     const payload = {
  //       userId: formData.userId,
  //       counselorId: formData.counselorId,
  //       date: formData.date,
  //       startTime: startTime24h,
  //       endTime: endTime24h,
  //       duration: formData.duration,
  //       price: formData.price,
  //       sessionType: formData.sessionType,
  //     };

  //     const response = await axios.post(
  //       "http://localhost:5000/api/appointments/book",
  //       payload,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     if (response.status >= 200 && response.status < 300) {
  //       fetchAppointments();
  //       setFormData({
  //         userId: user ? user._id : "",
  //         counselorId: "",
  //         date: "",
  //         startTime: "",
  //         endTime: "",
  //         duration: "",
  //         price: "",
  //         sessionType: "Individual",
  //       });
  //       toast.success("Appointment booked successfully!");
  //     } else {
  //       throw new Error("Unexpected response status");
  //     }
  //   } catch (error) {
  //     console.error("Error booking appointment:", error);
  //     const errorMessage =
  //       error.response?.data?.message ||
  //       error.message ||
  //       "Error booking appointment.";
  //     toast.error(errorMessage);
  //   }
  // };

  const handlePayment = () => {
    if (!isConfirmed) {
      setShowError(true);
      return;
    }
    checkout.show({ amount: formData.price });
  };

  const validateStep = () => {
    let newErrors = {};
    if (step === 1 && !formData.counselorId) {
      newErrors.counselorId = "Please select a counselor.";
    }

    if (step === 3) {
      if (!formData.date) newErrors.date = "Please select a date.";
      if (!formData.duration) newErrors.duration = "Please select a duration.";
      // if (!formData.startTime || !formData.endTime) {
      //   newErrors.timeSlot = "Please select a time slot.";
      // }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleViewBookings = () => {
    navigate("/user/calendar");
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
        Book a Session
      </Typography>
      <div className="appointment-container">
        <div
          className="progress-bar"
          style={{ width: `${(step / 4) * 100}%` }}
        ></div>
        <div className="sidebar">
          <h5>Your Path to Wellness</h5>
          <button className={`sidebar-button ${step >= 1 && "completed"}`}>
            Counselor
          </button>
          <button className={`sidebar-button ${step >= 2 && "completed"}`}>
            Counseling Type
          </button>
          <button className={`sidebar-button ${step >= 3 && "completed"}`}>
            Date & Time
          </button>
          <button className={`sidebar-button ${step >= 4 && "completed"}`}>
            Payment
          </button>
          <button
            onClick={handleViewBookings}
            className="sidebar-button view-bookings"
          >
            View my Bookings
          </button>
        </div>
        <form onSubmit={handleSubmit} className="appointment-form">
          {step === 1 && (
            <div className="form-step">
              <div className="summary-header">
                <h4 style={{ marginTop: "-10px" }}>Counselor</h4>
              </div>
              <hr className="divider" />
              <label
                className="label-text"
                style={{ fontSize: "1.1rem", color: "#3973E1" }}
              >
                Select a Counselor
              </label>
              <div className="custom-select-container">
                <select
                  name="counselorId"
                  value={formData.counselorId}
                  onChange={handleChange}
                  required
                  className={`custom-select ${
                    errors.counselorId ? "is-invalid" : ""
                  }`}
                >
                  <option value="">Choose a counselor</option>
                  {counselors.map((counselor) => (
                    <option key={counselor._id} value={counselor._id}>
                      {counselor.counselorName}
                    </option>
                  ))}
                </select>
                {errors.counselorId && (
                  <div className="invalid-feedback">{errors.counselorId}</div>
                )}
                <div className="custom-select-arrow"></div>
              </div>
              {errors.counselorId && (
                <div className="invalid-feedback">{errors.counselorId}</div>
              )}
              <div className="form-navigation">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="prev-button"
                  >
                    Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={nextStep}
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
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="form-step">
              <div className="summary-header">
                <IoArrowBack
                  className="back-icon"
                  onClick={prevStep}
                  size={20}
                />
                <h4 style={{ marginTop: "-10px" }}>Counseling Type</h4>
              </div>
              <hr className="divider" />
              <label
                className="label-text"
                style={{ fontSize: "1.1rem", color: "#3973E1" }}
              >
                Select Counseling Type
              </label>
              <div className="custom-checkbox-container">
                <input
                  type="checkbox"
                  id="individual"
                  name="sessionType"
                  value="Individual"
                  checked={formData.sessionType === "Individual"}
                  onChange={handleChange}
                  className="custom-checkbox"
                />
                <label htmlFor="individual" className="custom-checkbox-label">
                  Individual
                </label>
              </div>
              <div className="custom-checkbox-container">
                <input
                  type="checkbox"
                  id="teenager"
                  name="sessionType"
                  value="Teenager"
                  checked={formData.sessionType === "Teenager"}
                  onChange={handleChange}
                  className="custom-checkbox"
                />
                <label htmlFor="teenager" className="custom-checkbox-label">
                  Teenager
                </label>
              </div>
              <div className="custom-checkbox-container">
                <input
                  type="checkbox"
                  id="couple"
                  name="sessionType"
                  value="Couple"
                  checked={formData.sessionType === "Couple"}
                  onChange={handleChange}
                  className="custom-checkbox"
                />
                <label htmlFor="couple" className="custom-checkbox-label">
                  Couple
                </label>
              </div>
              <div className="form-navigation">
                <button
                  type="button"
                  onClick={nextStep}
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
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="form-step">
              <div className="summary-header">
                <IoArrowBack
                  className="back-icon"
                  onClick={prevStep}
                  size={20}
                />
                <h4 style={{ marginTop: "-10px" }}>Date & Time</h4>
              </div>
              <hr className="divider" />
              <label style={{ fontSize: "1rem", color: "#3973E1" }}>
                Choose an appropriate date for session
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={today}
                max={maxDate}
                className={errors.date ? "is-invalid" : ""}
              />
              {errors.date && (
                <div className="invalid-feedback">{errors.date}</div>
              )}
              <label
                style={{
                  fontSize: "1rem",
                  color: "#3973E1",
                  marginTop: "-10px",
                }}
              >
                Select session duration
              </label>
              <select
                name="duration"
                value={formData.duration}
                onChange={(e) => handleDurationChange(e.target.value)}
                required
                className={errors.duration ? "is-invalid" : ""}
              >
                <option value="">Duration</option>
                <option value="15">15 minutes</option>
                <option value="90">1 and half hour</option>
              </select>
              {errors.duration && (
                <div className="invalid-feedback">{errors.duration}</div>
              )}
              <TimeSlotSelection
                date={formData.date}
                today={today}
                maxDate={maxDate}
                timeSlots={timeSlots}
                bookedSlots={bookedSlots}
                onDateChange={handleChange}
                onTimeSlotChange={handleTimeSlotChange}
                price={formData.price}
                checkout={checkout}
              />

              <div className="form-navigation">
                <button
                  type="button"
                  onClick={nextStep}
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
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="form-step payment-summary">
              <div className="summary-header">
                <IoArrowBack
                  className="back-icon"
                  onClick={prevStep}
                  size={24}
                />
                <h4 style={{ marginTop: "-10px" }}>Payment</h4>
              </div>
              <hr className="divider" />
              <div className="summary-box">
                <div className="summary-content">
                  <span>One counseling session * 1 person</span>
                  <span style={{ color: "green" }}>Rs. {formData.price}</span>
                </div>
                <hr className="summary-divider" />
                <div className="summary-total">
                  <span>Total:</span>
                  <span style={{ color: "green" }}>Rs. {formData.price}</span>
                </div>
                <hr className="summary-divider" />

                <div className="custom-checkbox-container">
                  <input
                    type="checkbox"
                    id="confirm"
                    onChange={() => setIsConfirmed(!isConfirmed)}
                    checked={isConfirmed}
                    className="custom-checkbox"
                  />
                  <label
                    htmlFor="confirm"
                    className="custom-checkbox-label"
                    style={{ color: "#3973E1" }}
                  >
                    I confirm that the payment summary is correct.
                  </label>
                </div>

                {showError && !isConfirmed && (
                  <p className="error-message">
                    Please confirm the payment summary first.
                  </p>
                )}

                <div className="payment-options">
                  <span>Pay via:</span>
                  <img
                    src={khalti}
                    alt="Khalti"
                    className="payment-logo"
                    onClick={handlePayment}
                  />
                  <img
                    src={esewa}
                    alt="eSewa"
                    className="payment-logo"
                    onClick={handleEsewaPayment}
                  />
                </div>
              </div>
              <div className="form-navigation">
                <button
                  type="submit"
                  className="submit-button"
                  style={styles.diagnoseBtn}
                  onClick={handleSubmit}
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
                  Complete Booking
                </button>
              </div>
            </div>
          )}
        </form>
        {showQRCode && (
          <div className="popup-overlay" onClick={() => setShowQRCode(false)}>
            <div onClick={(e) => e.stopPropagation()}>
              <QRCodeComponent onDone={() => setShowQRCode(false)} />
            </div>
          </div>
        )}

        <style jsx>{`
          .appointment-container {
            display: flex;
            flex-direction: row;
            max-width: 1170px;
            margin-left: 5%;
            margin-right: 5%;
            margin-top: 20px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            position: relative;
          }

          @media (max-width: 768px) {
            .appointment-container {
              flex-direction: column;
            }
          }

          .progress-bar {
            position: absolute;
            top: 0;
            left: 0;
            height: 5px;
            background-color: #3973e1;
            transition: width 0.3s ease-in-out;
          }

          .sidebar {
            background-color: #3973e1;
            color: #fff;
            padding: 20px;
            width: 30%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          @media (max-width: 768px) {
            .sidebar {
              width: 100%;
            }
          }

          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }

          .popup-content {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
            position: relative;
          }

          .label-text {
            margin-bottom: 8px;
            font-size: 5rem;
          }

          .sidebar h2 {
            margin-bottom: 20px;
            font-size: 1.5rem;
          }

          .sidebar-button {
            background: none;
            border: 1px solid #fff;
            color: #fff;
            padding: 5px;
            margin-bottom: 10px;
            width: 100%;
            text-align: center;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.95rem;
            height: 40px;
          }

          .sidebar-button.completed {
            background-color: #ffffff;
            color: #3586ff;
            border: none;
          }

          .sidebar-button.active,
          .sidebar-button:hover {
            background-color: #fff;
            color: #007bff;
          }

          .sidebar-button:focus {
            outline: none;
          }

          .view-bookings {
            margin-top: 30px;
            margin-bottom: 5px;
            background-color: #fff;
            color: #000;
          }

          .appointment-form {
            width: 70%;
            padding: 20px;
          }

          @media (max-width: 768px) {
            .appointment-form {
              width: 100%;
            }
          }

          .custom-select-container {
            position: relative;
            width: 100%;
          }

          .custom-select {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 100%;
            padding: 10px;
            padding-right: 30px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: white;
            font-size: 0.9rem;
          }

          .custom-select-arrow {
            position: absolute;
            top: 35%;
            right: 10px;
            width: 0;
            height: 0;
            pointer-events: none;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid #000;
            transform: translateY(-50%);
            transition: transform 0.3s ease;
          }

          .custom-select:focus + .custom-select-arrow,
          .custom-select:active + .custom-select-arrow {
            transform: translateY(-50%) rotate(180deg);
          }

          .form-step {
            margin-bottom: 20px;
          }

          .form-step label {
            display: block;
            margin-bottom: 10px;
            font-size: 0.955rem;
          }

          .form-step select,
          .form-step input {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 0.95rem;
          }

          .form-navigation {
            position: absolute;
            bottom: 10px;
            right: 10px;
            display: flex;
            justify-content: space-between;
            gap: 10px;
          }

          .next-button,
          .prev-button,
          .submit-button {
            background-color: #ffffff;
            color: #000000;
            padding: 5px 20px;
            border: 1px solid #000;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.95rem;
          }

          .next-button:hover,
          .prev-button:hover,
          .submit-button:hover {
            background-color: #f0f0f0;
          }

          .next-button:focus,
          .prev-button:focus,
          .submit-button:focus {
            outline: none;
          }

          .summary-header {
            display: flex;
            align-items: center;
          }

          .back-icon {
            cursor: pointer;
            margin-right: 10px;
            margin-top: -5px;
          }

          .divider {
            border: none;
            border-top: 2px solid #3973e1;
            margin-top: 1px;
            margin-bottom: 10px;
          }

          .summary-box {
            border: 1px solid #e6f7ff;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
          }

          .summary-content,
          .summary-total {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .summary-divider {
            border: none;
            border-top: 1px solid #3973e1;
            margin: 10px 0;
          }

          .confirmation-label {
            display: flex;
            align-items: center;
            margin: 10px 0;
          }

          .confirmation-checkbox {
            margin-right: 10px;
          }

          .confirmation-text {
            font-size: 0.95rem;
          }

          .error-message {
            color: red;
            font-size: 0.7rem;
            margin: -15px 20px 0px 0px;
          }

          .payment-options {
            display: flex;
            align-items: center;
            margin-top: 10px;
          }

          .payment-logo {
            margin: 0 10px;
            height: 40px;
            cursor: pointer;
          }

          .view-booking-button {
            background-color: #007bff;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            font-size: 0.95rem;
          }

          .view-booking-button:hover {
            background-color: #0056b3;
          }

          .view-booking-button:focus {
            outline: none;
          }
          .custom-checkbox-container {
            display: flex;
            align-items: center;
            margin: 10px 0;
          }

          .custom-checkbox {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }

          .custom-checkbox-label {
            position: relative;
            padding-left: 25px; /* Adjust padding to match the new checkbox size */
            cursor: pointer;
            user-select: none;
            display: flex;
            align-items: center;
            font-size: 0.95rem;
          }

          .custom-checkbox-label::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            height: 15px; /* Adjusted size */
            width: 15px; /* Adjusted size */
            background-color: white;
            border: 1px solid black;
            border-radius: 3px; /* Adjusted to fit smaller size */
            transition: background-color 0.3s, border-color 0.3s;
          }

          .custom-checkbox-label::after {
            content: "";
            position: absolute;
            left: 5px; /* Centering the tick */
            top: 4px; /* Centering the tick */
            width: 5px; /* Adjusted size */
            height: 9px; /* Adjusted size */
            border: solid #3973e1; /* Tick color */
            border-width: 0 2px 2px 0; /* Adjusted border width */
            transform: rotate(45deg);
            opacity: 0;
            transition: opacity 0.3s;
          }

          .custom-checkbox:checked + .custom-checkbox-label::before {
            background-color: white;
            border-color: #000000;
          }

          .custom-checkbox:checked + .custom-checkbox-label::after {
            opacity: 1;
          }

          .is-invalid {
            border-color: red;
          }

          .invalid-feedback {
            color: red;
            font-size: 0.8rem;
            margin-top: -15px;
            margin-bottom: 15px;
          }
        `}</style>
      </div>

      <AdditionalInfo />
      <div className="App">
        <FaqContainer faqs={faqData} />
      </div>
      <WellnessSection images={empathy} />
    </div>
  );
};

const styles = {
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
  loaderContainer: {
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "flex-start", // Align to the top
    height: "100vh", // Full viewport height
    paddingTop: "20vh", // Add some padding from the top to position it nicely
  },
};

export default AppointmentForm;
