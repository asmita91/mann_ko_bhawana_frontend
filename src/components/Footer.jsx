

// import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-custom text-white py-4">
//       <div className="container">
//         <div className="row mb-4">
//           <div
//             className="col-md-4 text-center text-md-left mb-4 mb-md-0 rounded p-3"
//             style={{ fontSize: "0.95rem" }}
//           >
//             <h5 className="font-weight-bold">MANN KO BHAWANA</h5>

//             <p className="disclaimer mt-2">
//               Disclaimer: The information provided on this website is for
//               general informational purposes only and is not a substitute for
//               professional advice.
//             </p>
//           </div>
//           <div
//             className="col-md-4 text-center mb-4 mb-md-0 rounded p-3"
//             style={{ fontSize: "0.95rem" }}
//           >
//             <h5 className="font-weight-bold">Quick Links</h5>
//             <ul className="list-unstyled">
//               <li>
//                 <a href="/user/form" className="text-white">
//                   Book session
//                 </a>
//               </li>
//               <li>
//                 <a href="/diagnose" className="text-white">
//                   Diagnose
//                 </a>
//               </li>
//               <li>
//                 <a href="/aboutus" className="text-white">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="text-white">
//                   Media
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div
//             className="col-md-4 text-center text-md-right rounded p-3"
//             style={{ fontSize: "0.95rem" }}
//           >
//             <h5 className="font-weight-bold">Follow Us</h5>
//             <a href="#" className="text-white mx-2">
//               <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
//             </a>
//             <a href="#" className="text-white mx-2">
//               <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
//             </a>
//             <a href="#" className="text-white mx-2">
//               <i className="bi bi-facebook" style={{ fontSize: "1.5rem" }}></i>
//             </a>
//           </div>
//         </div>
//         <hr className="bg-white rounded" />
//         <div className="row mt-4">
//           <div
//             className="col-md-4 text-center text-md-left mb-1 mb-md-0"
//             style={{ fontSize: "0.95rem" }}
//           >
//             <p>+977 9807960408 <br/> asmitakatel444@gmail.com </p>
//           </div>
//           <div
//             className="col-md-4 text-center mb-4 mb-md-0"
//             style={{ fontSize: "0.95rem" }}
//           >
//             A product of <strong>ASM</strong>
//           </div>
//           <div className="col-md-4 text-center text-md-right">
//             <p>&copy; 2020 Asm Media. All rights reserved.</p>
//           </div>
//         </div>
//       </div>
//       <style jsx>{`
//         /* Footer.css */
//         .bg-custom {
//           background-color: #91c0e8;
//         }

//         footer .rounded {
//           border-radius: 15px;
//         }

//         hr.rounded {
//           border-radius: 5px;
//         }

//         .disclaimer {
//           font-size: 0.95rem;
//         }

//         .btn-light {
//           background-color: #ffffff;
//           color: #3586ff;
//           border: none;
//         }

//         .btn-light:hover {
//           background-color: #f0f0f0;
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;


import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-custom text-white py-4 rounded-footer">
      <div className="container">
        <div className="row mb-4">
          <div
            className="col-md-4 text-center text-md-left mb-4 mb-md-0 rounded p-3"
            style={{ fontSize: "0.95rem" }}
          >
            <h5 className="font-weight-bold">MANN KO BHAWANA</h5>
            <p className="disclaimer mt-2">
              Disclaimer: The information provided on this website is for
              general informational purposes only and is not a substitute for
              professional advice.
            </p>
          </div>
          <div
            className="col-md-4 text-center mb-4 mb-md-0 rounded p-3"
            style={{ fontSize: "0.95rem" }}
          >
            <h5 className="font-weight-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/user/form" className="text-white rounded-link">
                  Book session
                </a>
              </li>
              <li>
                <a href="/diagnose" className="text-white rounded-link">
                  Diagnose
                </a>
              </li>
              <li>
                <a href="/aboutus" className="text-white rounded-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="text-white rounded-link">
                  Media
                </a>
              </li>
            </ul>
          </div>
          <div
            className="col-md-4 text-center text-md-right rounded p-3"
            style={{ fontSize: "0.95rem" }}
          >
            <h5 className="font-weight-bold">Follow Us</h5>
            <a href="#" className="text-white mx-2 rounded-icon">
              <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
            </a>
            <a href="#" className="text-white mx-2 rounded-icon">
              <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
            </a>
            <a href="#" className="text-white mx-2 rounded-icon">
              <i className="bi bi-facebook" style={{ fontSize: "1.5rem" }}></i>
            </a>
          </div>
        </div>
        <hr className="bg-white rounded" />
        <div className="row mt-4">
          <div
            className="col-md-4 text-center text-md-left mb-1 mb-md-0"
            style={{ fontSize: "0.95rem" }}
          >
            <p>+977 9807960408 <br/> asmitakatel444@gmail.com </p>
          </div>
          <div
            className="col-md-4 text-center mb-4 mb-md-0"
            style={{ fontSize: "0.95rem" }}
          >
            A product of <strong>ASM</strong>
          </div>
          <div className="col-md-4 text-center text-md-right">
            <p>&copy; 2020 Asm Media. All rights reserved.</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-custom {
          background-color: #91c0e8;
        }

        .rounded-footer {
          border-radius: 15px;
        }

        footer .rounded {
          border-radius: 15px;
        }

        hr.rounded {
          border-radius: 5px;
        }

        .disclaimer {
          font-size: 0.95rem;
        }

        .btn-light {
          background-color: #ffffff;
          color: #3586ff;
          border: none;
        }

        .btn-light:hover {
          background-color: #f0f0f0;
        }

        .rounded-link {
          display: inline-block;
          padding: 5px 10px;
          border-radius: 10px;
          transition: background-color 0.3s;
        }

        .rounded-link:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .rounded-icon {
          display: inline-block;
          padding: 5px;
          border-radius: 50%;
          transition: background-color 0.3s;
        }

        .rounded-icon:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
