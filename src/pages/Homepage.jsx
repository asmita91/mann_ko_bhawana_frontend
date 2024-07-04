// import React, { useEffect, useRef, useState } from "react";
// import ChatComponent from "../components/ChatComponent";
// import Convert from "../components/Footer";
// import "../output.css";

// const HomepageNew = () => {
//   return (
//     <div>
//       <Hero />
//       <BelowHero />
//       <OneStep />
//       <BottomBaner />
//       <Convert />
//       <ChatComponent />
//     </div>
//   );
// };

// export default HomepageNew;

// const Hero = () => {
//   return (
//     <div className="banner max-w-[1500px] rounded-b-xl mx-auto bg-[#126DA6] min-h-[60vh] md:min-h-[90vh] relative">
//       <div className="absolute bg-gray-500/10 w-full h-full top-0 left-0"></div>
//       <div className="flex flex-col md:flex-row min-h-[50vh] md:min-h-[70vh] items-center  justify-center  md:justify-between w-full max-w-[1300px] mx-auto">
//         <div className="min-h-full">
//           <AnimatedTestimonials />
//         </div>
//         <div className="min-h-full">
//           <Users />
//         </div>
//       </div>
//       <div className="absolute left-0 merriweather-regular  bottom-0 w-full ">
//         {/* <h1 className="merriweather-bold lg:px-6 pl-2 lg:pl-0 pt-2 lg:pt-6 border-top-radius bg-white md:text-4xl text-2xl w-[55%] lg:w-auto lg:max-w-[400px] ">
//           {"     "}You Don't Have
//         </h1>
//         <h1 className="merriweather-bold w-overide pl-2 pt-2 lg:pl-0 lg:px-6 lg:pt-4 lg:pb-6 lg:pr-8 border-top-radius bg-white text-2xl w-[70%] lg:w-auto md:text-4xl lg:max-w-[550px]">
//           to Suffer In Silence
//         </h1> */}
//         <div className="absolute left-0 merriweather-regular bottom-0 w-full">
//           {/* <h1 className="merriweather-bold lg:px-6 pl-2 lg:pl-6 pt-2 lg:pt-6 border-top-radius bg-white md:text-4xl text-2xl w-[55%] lg:w-auto lg:max-w-[400px]"> */}
//           <h1
//             style={{ fontSize: "1.8rem" }}
//             className="merriweather-regular lg:px-6 pt-2 lg:pl-6 border-top-radius bg-white md:text-4xl text-2xl w-[55%] lg:w-auto lg:max-w-[400px]"
//           >
//             You Don't Have to
//           </h1>
//           {/* <h1 className="merriweather-bold w-overide pl-2 lg:pl-6 pt-2 lg:pt-6 lg:pb-6 lg:pr-8 border-top-radius bg-white text-2xl w-[70%] lg:w-auto md:text-4xl lg:max-w-[550px]"> */}
//           <h2
//             style={{ fontSize: "1.8rem" }}
//             className="merriweather-bold w-overide pl-6 lg:pl-6  pt-2 lg:pb-4 lg:pr-8 border-top-radius bg-white text-2xl w-[30%] lg:w-auto md:text-4xl lg:max-w-[550px]"
//           >
//             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Suffer In Silence
//             Anymore ....
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// const AnimatedTestimonials = () => {
//   const testimonials = [
//     {
//       name: "User 1",
//       text: "This is a great service that has helped me a lot.",
//       image: "/home/Ellipse 4.png",
//     },
//     {
//       name: "User 2",
//       text: "I found the counseling sessions very helpful.",
//       image: "/home/Ellipse 5.png",
//     },
//     {
//       name: "User 3",
//       text: "Amazing support and great counselors.",
//       image: "/home/Ellipse 6.png",
//     },
//     {
//       name: "User 4",
//       text: "I highly recommend this service to everyone.",
//       image: "/home/Ellipse 7.png",
//     },
//     {
//       name: "User 5",
//       text: "The best mental health app I have ever used.",
//       image: "/home/Ellipse 8.png",
//     },
//   ];

//   const [selectedTestimonial, setSelectedTestimonial] = useState();
//   return (
//     // <>
//     //   <div className="bg-[#d9d9d934] rounded-xl relative text-white max-w-[300px] py-4">
//     //     <div className="testimonial-header">
//     //       <p className="font-semibold text-lg mb-2 text-center leading-tight">
//     //         See what our users have to <b></b>say about us!
//     //       </p>
//     //       <div className="testimonial-images">
//     //         {testimonials.map((testimonial, index) => (
//     //           <img
//     //             key={index}
//     //             src={testimonial.image}
//     //             alt={testimonial.name}
//     //             onMouseEnter={() => setSelectedTestimonial(testimonial)}
//     //             onMouseLeave={() => setSelectedTestimonial(null)}
//     //           />
//     //         ))}
//     //       </div>
//     //     </div>
//     //     {selectedTestimonial && (
//     //       <div className="testimonial-text text-center mt-4">
//     //         <p>{selectedTestimonial.text}</p>
//     //       </div>
//     //     )}
//     //   </div>
//     // </>
//     <>
//       <div className="bg-[#d9d9d934] rounded-xl relative text-white max-w-[300px] py-4 px-4 mt-6 ml-4">
//         {" "}
//         {/* Added pl-4 and mt-6 */}
//         <div className="testimonial-header">
//           <p className="text-base mb-2 text-center leading-tight">
//             See what our users have to say about us! {/* Removed bold tags */}
//           </p>
//           <div className="testimonial-images">
//             {testimonials.map((testimonial, index) => (
//               <img
//                 key={index}
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 onMouseEnter={() => setSelectedTestimonial(testimonial)}
//                 onMouseLeave={() => setSelectedTestimonial(null)}
//               />
//             ))}
//           </div>
//         </div>
//         {selectedTestimonial && (
//           <div className="testimonial-text text-center mt-4">
//             <p>{selectedTestimonial.text}</p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// const Users = () => {
//   const dailyUsersRef = useRef(null);
//   const totalSessionsRef = useRef(null);
//   const satisfiedUsersRef = useRef(null);

//   useEffect(() => {
//     const animateValue = (ref, start, end, duration, suffix = "") => {
//       let startTimestamp = null;
//       const step = (timestamp) => {
//         if (!startTimestamp) startTimestamp = timestamp;
//         const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//         ref.current.innerHTML =
//           Math.floor(progress * (end - start) + start) + suffix;
//         if (progress < 1) {
//           window.requestAnimationFrame(step);
//         }
//       };
//       window.requestAnimationFrame(step);
//     };

//     animateValue(dailyUsersRef, 0, 30, 2000, "+");
//     animateValue(totalSessionsRef, 0, 12000, 2000, "k");
//     animateValue(satisfiedUsersRef, 0, 95, 2000, "%");
//   }, []);
//   return (
//     // <>
//     //   <div className="flex flex-row md:flex-col gap-4">
//     //     <div>
//     //       <div className="stat">
//     //         <span ref={dailyUsersRef} className="number"></span>
//     //         <div className="text">daily users</div>
//     //       </div>
//     //     </div>
//     //     <div>
//     //       <div className="stat">
//     //         <span ref={totalSessionsRef} className="number"></span>
//     //         <div className="text">total sessions</div>
//     //       </div>
//     //     </div>
//     //     <div>
//     //       <div className="stat">
//     //         <span ref={satisfiedUsersRef} className="number"></span>
//     //         <div className="text">satisfied users</div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </>

//     <>
//       <div className="flex flex-col gap-1 custom-margin">
//         {" "}
//         {/* Applied custom margin class */}{" "}
//         {/* Reduced gap between divs to 1 */}
//         <div className="stat p-2 flex flex-col">
//           {" "}
//           {/* Ensure each stat is flex column */}
//           <span ref={dailyUsersRef} className="number text-2xl"></span>{" "}
//           {/* text-2xl for larger numbers */}
//           <div className="text custom-text-size mt-1 ">daily users</div>{" "}
//           {/* Custom text size for labels, added mt-2 and mr-2 */}
//         </div>
//         <div className="stat p-2 flex flex-col">
//           <span ref={totalSessionsRef} className="number text-2xl"></span>
//           <div className="text custom-text-size mt-1 ">total sessions</div>{" "}
//           {/* Added mt-2 and mr-2 */}
//         </div>
//         <div className="stat p-2 flex flex-col">
//           <span ref={satisfiedUsersRef} className="number text-2xl"></span>
//           <div className="text custom-text-size mt-1 ">
//             satisfied users
//           </div>{" "}
//           {/* Added mt-2 and mr-2 */}
//         </div>
//         <style jsx>{`
//           .custom-text-size {
//             font-size: 0.95rem;
//           }
//           .custom-margin {
//             margin-top: 10rem; /* Set your desired margin here */
//             margin-right: 1rem; /* Adjust as needed */
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

// // const BelowHero = () => {
// //   return (
// //     <div className=" max-w-[1100px] px-4 mx-auto my-20 merriweather-regular">
// //       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
// //         <div className="">
// //           <div className="flex h-full flex-col gap-2">
// //             <img
// //               className="rounded h-full w-full  object-cover"
// //               src={"/home/mentallyHealthy.png"}
// //               alt="experience"
// //             />
// //           </div>
// //         </div>
// //         <div className="">
// //           <div>
// //             <h4 className="md:text-2xl text-2xl font-bold">
// //               You Deserve to be Mentally Healthy
// //             </h4>
// //           </div>
// //           <p className="md:mt-4  mt-2 text-gray-700 md:mb-5 mb-4">
// //             Experience personalized support and professional guidance with our
// //             mental health counseling apps, designed to help you achieve
// //             emotional well-being and resilience.
// //           </p>
// //           <a
// //             href="/"
// //             className="text-lg w-full md:w-auto px-4 py-3 bg-black text-white font-medium rounded-xl border border-gray-700"
// //           >
// //             Get started{" "}
// //           </a>

// //           <div className="grid  md:grid-cols-2 gap-3 mt-5">
// //             <Card
// //               icon="conf.svg"
// //               title="Confidentiality "
// //               description=" With top-notch security
// // measures, our system
// // guarantee the confidentiality
// // of your information."
// //             />
// //             <Card
// //               icon="access.svg"
// //               title="Accessibility"
// //               description="The system allows you to
// // connect with professional
// // support anytime, anywhere,
// // right from your device."
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// const BelowHero = () => {
//   useEffect(() => {
//     const heartbeatKeyframes = `
//     @keyframes heartbeat {
//       0%, 100% {
//         transform: scale(1);
//       }
//       25%, 75% {
//         transform: scale(1.1);
//       }
//       50% {
//         transform: scale(1.2);
//       }
//     }
//     `;
//     const styleSheet = document.styleSheets[0];
//     styleSheet.insertRule(heartbeatKeyframes, styleSheet.cssRules.length);
//   }, []);

//   const styles = {
//     button: {
//       padding: "10px 20px",
//       backgroundColor: "#000000",
//       color: "#fff",
//       marginTop: "-10px",
//       border: "none",
//       borderRadius: "5px",
//       fontFamily: "merriweather",
//       cursor: "pointer",
//       fontSize: "0.95rem",
//       transition: "transform 0.3s ease",
//       textDecoration: "none",
//       textTransform: "none",
//       position: "relative",
//     },
//     diagnoseBtnHover: {
//       backgroundColor: "#0056b3",
//       animation: "heartbeat 1.5s infinite",
//     },
//   };

//   return (
//     <div className="max-w-[calc(100%-80px)] px-10 mx-5 my-20 merriweather-regular">
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//         <div>
//           <div className="flex h-full flex-col gap-2">
//             <img
//               className="rounded h-[300px] w-[300px] object-cover"
//               src={"/home/mentallyHealthy.png"}
//               alt="experience"
//             />
//           </div>
//         </div>
//         <div>
//           <div>
//             <h4 className="md:text-3xl text-3xl ">
//               You Deserve to be Mentally Healthy
//             </h4>
//           </div>
//           <p
//             style={{ fontSize: "0.95rem" }}
//             className="md:mt-4 mt-2 text-gray-700 md:mb-5 mb-4 text-[0.9rem] "
//           >
//             Experience personalized support and professional guidance with our
//             mental health counseling apps, designed to help you achieve
//             emotional well-being and resilience. We are there for you.
//             <br />
//             Discover customized support and professional guidance with our
//             mental health counseling app, created to foster emotional well-being
//             and strengthen resilience.
//           </p>
//           <a
//             href="/"
//             style={styles.button}
//             onMouseOver={(e) => {
//               e.currentTarget.style.backgroundColor =
//                 styles.diagnoseBtnHover.backgroundColor;
//               e.currentTarget.style.animation =
//                 styles.diagnoseBtnHover.animation;
//             }}
//             onMouseOut={(e) => {
//               e.currentTarget.style.backgroundColor =
//                 styles.button.backgroundColor;
//               e.currentTarget.style.animation = "none"; // Remove the animation
//             }}
//           >
//             Diagnose
//           </a>

//           <div className="grid md:grid-cols-2 gap-3 mt-3">
//             <Card
//               icon="conf.svg"
//               description="With top-notch security measures, our system guarantees the confidentiality of your information."
//             />
//             <Card
//               icon="access.svg"
//               description="The system allows you to connect with professional support anytime, anywhere, right from your device."
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Card = ({ icon, title, description }) => {
//   return (
//     <div className="rounded-xl border-1 shadow-md flex items-start flex-col gap-1 p-3">
//       <div className="bg-black flex items-center justify-center text-white rounded-full min-h-[40px] min-w-[40px]">
//         <img
//           className="h-[20px] w-[20px] object-contain"
//           src={`/aboutUs/${icon}`}
//           alt={icon}
//         />
//       </div>
//       <p className="text-gray-900 text-lg font-bold">{title}</p>
//       <p className="text-gray-700 text-start text-sm">{description}</p>
//     </div>
//   );
// };

// // const OneStep = () => {
// //   return (
// //     <div className=" max-w-[1100px] px-4 mx-auto my-20 merriweather-regular">
// //       <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 ">
// //         <div className="">
// //           <div>
// //             <h4 className="md:text-4xl lg:text-end text-2xl font-bold">
// //               One Step at a time
// //             </h4>
// //           </div>
// //           <div className="flex gap-2 md:gap-4 flex-col md:mt-4">
// //             <Steps
// //               title="Assessment"
// //               description="          Our diagnostic section and counselors will help you identify
// //           your specific issues and needs."
// //               num="1"
// //             />
// //             <Steps
// //               title="Booking"
// //               description="Schedule a session with a counselor who matches
// // your problem and convenience."
// //               num="2"
// //             />
// //             <Steps
// //               title="Session"
// //               description="We ensure you enjoy your sessions and work
// // towards getting better soon"
// //               num="3"
// //             />
// //           </div>
// //         </div>
// //         <div className="">
// //           <div className="flex h-full flex-col gap-2">
// //             <img
// //               className="rounded h-full w-full  object-cover"
// //               src={"/home/oneStep.png"}
// //               alt="experience"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const OneStep = () => {
// //   return (
// //     <div className="max-w-[calc(100%-80px)] px-10 mx-5 my-20 merriweather-regular">
// //       <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
// //         <div>
// //           <div>
// //             <h4 className="md:text-4xl lg:text-end text-2xl font-bold">
// //               One Step at a time
// //             </h4>
// //           </div>
// //           <div className="flex gap-1 md:gap-2 flex-col md:mt-2">
// //             <Steps
// //               title="Assessment"
// //               description="Our diagnostic section and counselors will help you identify your specific issues and needs."
// //               num="1"
// //             />
// //             <Steps
// //               title="Booking"
// //               description="Schedule a session with a counselor who matches your problem and convenience."
// //               num="2"
// //             />
// //             <Steps
// //               title="Session"
// //               description="We ensure you enjoy your sessions and work towards getting better soon."
// //               num="3"
// //             />
// //           </div>
// //         </div>
// //         <div>

// //           <div className="flex h-full flex-col gap-2">
// //             <img
// //               className="rounded h-[100px] w-[100px] object-cover"
// //               src="/home/oneStep.png"
// //               alt="experience"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // const OneStep = () => {
// //   return (
// //     <div className="max-w-[1100px] px-4 mx-auto my-10 merriweather-regular">
// //       <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
// //         <div>
// //           <div>
// //             <h4 className="md:text-4xl text-2xl font-bold text-center md:text-left">
// //               The Best Counseling Service That You Can Trust
// //             </h4>
// //           </div>
// //           <div className="flex gap-4 flex-col mt-4">
// //             <Steps
// //               title="Experienced Counselors"
// //               description="Your privacy is our top priority. All sessions are conducted in a safe and confidential environment. We use the latest technology to ensure that your information is protected and that you feel secure during your counseling sessions."
// //               num="1"
// //             />
// //             <Steps
// //               title="Confidential and Secure"
// //               description="Your privacy is our top priority. All sessions are conducted in a safe and confidential environment. We use the latest technology to ensure that your information is protected and that you feel secure during your counseling sessions."
// //               num="2"
// //             />
// //             <Steps
// //               title="Proven Results"
// //               description="Our clients consistently report positive outcomes and improved well-being. We utilize evidence-based practices and continuously update our methods based on the latest research in psychology and mental health."
// //               num="3"
// //             />
// //           </div>
// //         </div>
// //         <div>
// //           <div className="flex h-full flex-col gap-2">
// //             <img
// //               className="rounded h-auto w-full object-cover"
// //               src="/home/oneStep.png"
// //               alt="experience"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// const OneStep = () => {
//   return (
//     <div className="max-w-[1200px] px-4 mx-auto my-10 merriweather-regular">
//       {/* <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3"> */}
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//         <div className="md:col-span-2">
//           <div>
//             <h4 className="md:text-3xl text-2xl  text-center md:text-left">
//               The Best Counseling Service That You Can Trust
//             </h4>
//           </div>
//           <div className="flex gap-4 flex-col mt-4">
//             <Steps
//               title="Experienced Counselors"
//               description="Your privacy is our top priority. All sessions are conducted in a safe and confidential environment. We use the latest technology to ensure that your information is protected and that you feel secure during your counseling sessions."
//               num="1"
//             />
//             <Steps
//               title="Confidential and Secure"
//               description="Your privacy is our top priority. All sessions are conducted in a safe and confidential environment. We use the latest technology to ensure that your information is protected and that you feel secure during your counseling sessions."
//               num="2"
//             />
//             <Steps
//               title="Session"
//               description="We ensure you enjoy your sessions and work towards achieving your emotional well-being and resilience."
//               num="3"
//             />
//           </div>
//         </div>
//         <div className="md:col-span-1">
//           <div className="flex h-full flex-col gap-2">
//             <img
//               className="rounded h-auto w-full object-cover"
//               src="/home/oneStep.png"
//               alt="experience"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Steps = ({ title, description, num }) => {
//   return (
//     <div className="my-1 lg:my-1 lg:translate-x-[54px] ">
//       <div className="flex items-center lg:flex-row-reverse gap-4 lg:gap-5">
//         <div>
//           <div className="bg-black flex items-center justify-center text-white rounded-full lg:min-h-[60px] min-h-[40px] lg:min-w-[60px] min-w-[40px]">
//             <span className="text-xl font-semibold">{num}</span>
//           </div>
//         </div>
//         <div className="lg:text-end">
//           <p
//             style={{ fontSize: "1.1rem" }}
//             className="text-lg lg:text-1xl font-semibold"
//           >
//             {title}{" "}
//           </p>
//           <p
//             style={{ fontSize: "0.95rem" }}
//             className="leading-tight lg:mt-1 text-gray-700"
//           >
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // const BottomBaner = () => {
// //   return (
// //     <div className="bottomBanner max-w-[1200px] mx-auto my-4 rounded-xl text-center min-h-[45vh]">
// //       <div className="min-h-[20vh] flex justify-end flex-col">
// //         <p className="text-2xl merriweather-regular  max-w-[600px] font-semibold mx-auto md:text-4xl">
// //           Ready To Start Your Journey Of Mental Wellness?
// //         </p>
// //         <p>Start your transformation with our experienced therapist today.</p>
// //       </div>
// //     </div>
// //   );
// // };
// const BottomBaner = () => {
//   return (
//     <div className="bottomBanner max-w-[1200px] mx-auto my-4 rounded-xl text-center min-h-[45vh] sm:mx-4 md:mx-6 lg:mx-8">
//       <div className="min-h-[20vh] flex justify-end flex-col">
//         <p className="text-2xl merriweather-regular max-w-[600px] font-semibold mx-auto md:text-2xl">
//           Ready To Start Your Journey Of Mental Wellness?
//         </p>
//         <p>Start your transformation with our experienced therapist today.</p>
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useRef, useState } from "react";

const HomepageNew = () => {
  return (
    <div>
      <Hero />
      <BelowHero />
      <OneStep />
      <BottomBanner />
    </div>
  );
};

export default HomepageNew;

const Hero = () => {
  return (
    <div className="container-fluid bg-primary text-white min-vh-60 d-flex flex-column align-items-center justify-content-center rounded-bottom">
      <div className="overlay"></div>
      <div className="row w-100">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <AnimatedTestimonials />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <Users />
        </div>
      </div>
      <div className="text-center w-100 position-absolute bottom-0">
        <h1 className="bg-white text-dark p-2 rounded-top d-inline-block">
          You Don't Have
        </h1>
        <h1 className="bg-white text-dark p-2 rounded-top d-inline-block">
          to Suffer In Silence
        </h1>
      </div>
    </div>
  );
};

const AnimatedTestimonials = () => {
  const testimonials = [
    {
      name: "User 1",
      text: "This is a great service that has helped me a lot.",
      image: "/home/Ellipse 4.png",
    },
    {
      name: "User 2",
      text: "I found the counseling sessions very helpful.",
      image: "/home/Ellipse 5.png",
    },
    {
      name: "User 3",
      text: "Amazing support and great counselors.",
      image: "/home/Ellipse 6.png",
    },
    {
      name: "User 4",
      text: "I highly recommend this service to everyone.",
      image: "/home/Ellipse 7.png",
    },
    {
      name: "User 5",
      text: "The best mental health app I have ever used.",
      image: "/home/Ellipse 8.png",
    },
  ];

  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  return (
    <div className="bg-light text-dark rounded p-4">
      <p className="font-weight-bold text-center mb-3">
        See what our users have to say about us!
      </p>
      <div className="d-flex justify-content-around mb-3">
        {testimonials.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-img"
            onMouseEnter={() => setSelectedTestimonial(testimonial)}
            onMouseLeave={() => setSelectedTestimonial(null)}
          />
        ))}
      </div>
      {selectedTestimonial && (
        <div className="text-center">
          <p>{selectedTestimonial.text}</p>
        </div>
      )}
    </div>
  );
};

const Users = () => {
  const dailyUsersRef = useRef(null);
  const totalSessionsRef = useRef(null);
  const satisfiedUsersRef = useRef(null);

  useEffect(() => {
    const animateValue = (ref, start, end, duration, suffix = "") => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        ref.current.innerHTML =
          Math.floor(progress * (end - start) + start) + suffix;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    animateValue(dailyUsersRef, 0, 30, 2000, "+");
    animateValue(totalSessionsRef, 0, 12000, 2000, "k");
    animateValue(satisfiedUsersRef, 0, 95, 2000, "%");
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="p-2 text-center">
        <span ref={dailyUsersRef} className="display-4"></span>
        <div className="text-muted">daily users</div>
      </div>
      <div className="p-2 text-center">
        <span ref={totalSessionsRef} className="display-4"></span>
        <div className="text-muted">total sessions</div>
      </div>
      <div className="p-2 text-center">
        <span ref={satisfiedUsersRef} className="display-4"></span>
        <div className="text-muted">satisfied users</div>
      </div>
    </div>
  );
};

const BelowHero = () => {
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const heartbeatKeyframes = `
      @keyframes heartbeat {
        0%, 100% {
          transform: scale(1);
        }
        25%, 75% {
          transform: scale(1.1);
        }
        50% {
          transform: scale(1.2);
        }
      }
    `;
    styleSheet.insertRule(heartbeatKeyframes, styleSheet.cssRules.length);
  }, []);

  const buttonStyles = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1rem",
    transition: "transform 0.3s ease",
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="/home/mentallyHealthy.png"
            alt="experience"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-primary">You Deserve to be Mentally Healthy</h4>
          <p className="text-muted">
            Experience personalized support and professional guidance with our
            mental health counseling apps, designed to help you achieve
            emotional well-being and resilience.
          </p>
          <a
            href="/"
            style={buttonStyles}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#0056b3";
              e.currentTarget.style.animation = "heartbeat 1.5s infinite";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#007bff";
              e.currentTarget.style.animation = "none";
            }}
          >
            Diagnose
          </a>
          <div className="row mt-4">
            <div className="col-6">
              <Card
                icon="conf.svg"
                description="With top-notch security measures, our system guarantees the confidentiality of your information."
              />
            </div>
            <div className="col-6">
              <Card
                icon="access.svg"
                description="The system allows you to connect with professional support anytime, anywhere, right from your device."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, description }) => {
  return (
    <div className="card shadow-sm p-3 mb-3">
      <div className="d-flex align-items-center">
        <img src={`/aboutUs/${icon}`} alt={icon} className="me-3" />
        <div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

const OneStep = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-8">
          <h4 className="text-primary text-center text-md-start">
            The Best Counseling Service That You Can Trust
          </h4>
          <div className="mt-4">
            <Steps
              title="Experienced Counselors"
              description="Your privacy is our top priority. All sessions are conducted in a safe and confidential environment. We use the latest technology to ensure that your information is protected and that you feel secure during your counseling sessions."
              num="1"
            />
            <Steps
              title="Confidential and Secure"
              description="Your privacy is our top priority. All sessions are conducted in a safe and confidential environment. We use the latest technology to ensure that your information is protected and that you feel secure during your counseling sessions."
              num="2"
            />
          </div>
        </div>
        <div className="col-md-4">
          <img
            src="/home/oneStep.png"
            alt="experience"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

const Steps = ({ title, description, num }) => {
  return (
    <div className="my-3">
      <div className="d-flex align-items-center">
        <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3">
          <span className="h3">{num}</span>
        </div>
        <div>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const BottomBanner = () => {
  return (
    <div className="container my-5 text-center">
      <div className="p-4 bg-light rounded">
        <h4 className="text-primary mb-3">
          Ready To Start Your Journey Of Mental Wellness?
        </h4>
        <p>Start your transformation with our experienced therapist today.</p>
      </div>
    </div>
  );
};
