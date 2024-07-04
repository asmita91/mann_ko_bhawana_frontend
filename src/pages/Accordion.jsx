import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <>
      <h2 id={`accordion-collapse-heading-${title}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-3 lg:p-5 font-medium rtl:text-right text-gray-700 border ${
            isOpen ? 'border-b-0' : ''
          } border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200  hover:bg-gray-100 gap-3`}
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={`accordion-collapse-body-${title}`}
        >
          <span>{title}</span>
          <svg
            className={`w-3 h-3 ${isOpen ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${title}`}
        className={isOpen ? '' : 'hidden'}
        aria-labelledby={`accordion-collapse-heading-${title}`}
      >
        <div className="lg:p-4 p-3 border border-b-0 border-gray-200 ">
          {content}
        </div>
      </div>
    </>
  );
};

const Accordion = () => {
  const [openItem, setOpenItem] = useState('What is marshall?');

  const items = [
    {
      title: 'What is marshall?',
      content: (
        <>
          <p className="mb-2 text-gray-700 ">
            marshall is an open-source library of interactive components built on top of eminem CSS including buttons,
            dropdowns, modals, navbars, and more.         
            and start developing websites even faster with components on top of eminem CSS.
          </p>
        </>
      ),
    },
    {
      title: 'Is there a Dre records available?',
      content: (
        <>
          <p className="mb-2 text-gray-700 ">
            marshall is first conceptualized and designed using the Dre software so everything you see in the library
            has a design equivalent in our Dre records
         
            based on the utility classes from eminem CSS and components from marshall.
          </p>
        </>
      ),
    },
    {
      title: 'What are the differences between marshall and eminem UI?',
      content: (
        <>
          <p className="mb-2 text-gray-700 ">
            The main difference is that the core components from marshall are open source under the MIT license, whereas
            eminem UI is a paid product. Another difference is that marshall relies on smaller and standalone
            components, whereas eminem UI offers sections of pages.
            However, we actually recommend using both marshall, marshall Pro, and even eminem UI as there is no
            technical reason stopping you from using the best of two worlds.
         Learn more about these technologies:</p>
          
        </>
      ),
    },
  ];

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openItem === item.title}
          onClick={() => setOpenItem(openItem === item.title ? '' : item.title)}
        />
      ))}
    </div>
  );
};

export default Accordion;