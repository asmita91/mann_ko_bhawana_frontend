// import React, { useState } from "react";

// const FaqContainer = ({ faqs }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAnswer = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="faq-container">
//       <h3 className="title">Frequently Asked Questions</h3>
//       {faqs.map((item, index) => (
//         <div
//           key={index}
//           className={`faq-item ${openIndex === index ? "active" : ""}`}
//         >
//           <div className="faq-question" onClick={() => toggleAnswer(index)}>
//             <span>{item.question}</span>
//             <span className={`faq-icon ${openIndex === index ? "rotate" : ""}`}>
//               {openIndex === index ? "×" : "+"}
//             </span>
//           </div>
//           <div className={`faq-answer ${openIndex === index ? "active" : ""}`}>
//             {item.answer}
//           </div>
//         </div>
//       ))}
//       <style jsx>{`
//         @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap");

//         body {
//           font-family: "Merriweather", serif;
//         }

//         .faq-container {
//           max-width: 1170px;
//           margintop: "-30px";
//           margin: 40px auto;
//           padding: 20px;
//           background-color: #ffffff;
//           border-radius: 10px;
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
//         }

//         .title {
//           text-align: center;
//           font-size: 2em;
//           margin-bottom: 20px;
//           color: #333;
//         }

//         .faq-item {
//           border: 1px solid #ddd;
//           border-radius: 8px;
//           margin-bottom: 15px;
//           padding: 10px;
//           background-color: #fff;
//           transition: background-color 0.3s ease, box-shadow 0.3s ease;
//         }

//         .faq-item.active {
//           background-color: #ffffff;
//           box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
//         }

//         .faq-question {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           cursor: pointer;
//           font-size: 1.1em;
//           padding: 10px;
//           transition: background-color 0.3s ease;
//         }

//         .faq-question:hover {
//           background-color: #f0f4f8;
//         }

//         .faq-answer {
//           max-height: 0;
//           overflow: hidden;
//           padding: 0 15px;
//           font-size: 0.95em;
//           color: #555;
//           transition: max-height 0.3s ease, padding 0.3s ease;
//         }

//         .faq-answer.active {
//           max-height: 200px;
//           padding: 10px 15px;
//           border-top: 1px solid #ddd;
//           margin-top: 10px;
//         }

//         .faq-icon {
//           font-weight: bold;
//           transition: transform 0.3s ease;
//           font-size: 1.2em;
//           color: #000000;
//         }

//         .faq-icon.rotate {
//           transform: rotate(45deg);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default FaqContainer;

import React, { useState } from "react";

const FaqContainer = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h3 className="title">Frequently Asked Questions</h3>
      {faqs.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? "active" : ""}`}
        >
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <span>{item.question}</span>
            <span className={`faq-icon ${openIndex === index ? "rotate" : ""}`}>
              {openIndex === index ? "×" : "+"}
            </span>
          </div>
          <div className={`faq-answer ${openIndex === index ? "active" : ""}`}>
            {item.answer}
          </div>
        </div>
      ))}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap");

        body {
          font-family: "Merriweather", serif;
        }

        .faq-container {
          max-width: 1170px;
          margin-top: -30px;
          margin: 40px auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .title {
          text-align: center;
          font-size: 1.6rem;
          margin-bottom: 20px;
          color: #333;
        }

        .faq-item {
          border: 1px solid #ddd;
          border-radius: 8px;
          margin-bottom: 15px;
          padding: 10px;
          background-color: #fff;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .faq-item.active {
          background-color: #ffffff;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-size: 0.95rem;
          padding: 10px;
          transition: background-color 0.3s ease;
        }

        .faq-question:hover {
          background-color: #f0f4f8;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          padding: 0 15px;
          font-size: 0.9rem;
          color: #555;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }

        .faq-answer.active {
          max-height: 200px;
          padding: 10px 15px;
          border-top: 1px solid #ddd;
          margin-top: 10px;
        }

        .faq-icon {
          font-weight: bold;
          transition: transform 0.3s ease;
          font-size: 1.2em;
          color: #000000;
        }

        .faq-icon.rotate {
          transform: rotate(45deg);
        }
      `}</style>
    </div>
  );
};

export default FaqContainer;
