import React from "react";
import FaqContainer from "../components/FAQ";
import Footer from "../components/Footer";
import WellnessSection from "../components/Ready";
import free from "../images/free.png";
import "../output.css";

export const AboutUsContents = () => {
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
  return (
    <>
      <div className="max-w-[1300px] px-4 mx-auto mt-8  merriweather-regular">
        {/* images section starts */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-4 mb-6">
          {/* 3 boxes goes here */}
          <div className="md:w-[58%] grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-3">
            {/* first box */}
            <div>
              <div className="flex flex-col">
                <span
                  style={{ fontSize: "1.5rem" }}
                  className="text-blue-500 md:text-3xl text-xl "
                >
                  10+
                </span>{" "}
                <p className="md:text-xl">years of experience</p>
              </div>
              <div className="overflow-hidden mt-4 h-[290px] grid gap-4 grid-rows-2">
                <div className="">
                  <img
                    className="rounded h-full w-full object-cover"
                    src={"/aboutUs/first-first.png"}
                    alt="experience"
                  />
                </div>
                <div className="">
                  <img
                    className="rounded h-full w-full object-cover"
                    src={"/aboutUs/first-second.png"}
                    alt="experience"
                  />
                </div>
              </div>
            </div>
            {/* second box */}
            <div>
              <div className="flex flex-col">
                <span
                  style={{ fontSize: "1.5rem" }}
                  className="text-blue-500 md:text-3xl text-xl "
                >
                  7000+
                </span>{" "}
                <p className="md:text-xl">empowered Clients</p>
              </div>
              <div className="overflow-hidden mt-4 h-[290px] ">
                <div className="h-full">
                  <img
                    className="rounded min-h-full w-full object-cover"
                    src={"/aboutUs/second.png"}
                    alt="experience"
                  />
                </div>
              </div>
            </div>
            {/* third box */}
            <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
              <div className="flex flex-col">
                <span
                  style={{ fontSize: "1.5rem", marginTop: "-28px" }}
                  className="text-blue-500 md:text-3xl text-xl "
                >
                  150+
                </span>{" "}
                <p className="md:text-xl">Expert Collaborations</p>
              </div>
              <div className="overflow-hidden mt-4 md:mt-2 md:h-[290px]">
                <div className="flex h-full flex-col gap-2">
                  <div className=" flex-grow">
                    <img
                      className="rounded h-full w-full object-cover"
                      src={"/aboutUs/third.png"}
                      alt="experience"
                    />
                  </div>
                  <button
                    style={{ fontSize: "1.1rem" }}
                    className="bg-yellow-300  text-xl font-medium rounded-1xl shadow-lg"
                  >
                    #TherapyWorks
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* final box for video section goes here */}
          <div className="md:w-2/6">
            <div>
              <img
                src={"/aboutUs/lastBox.png"}
                className="rounded-xl"
                alt="welcome-image"
              />
            </div>
            <p
              style={{ fontSize: "1.1rem" }}
              className="text-gray-500 mt-2 text-base md:text-lg text-center"
            >
              Welcome to Mann Ko Bhawana. Join us on our transformative journey
              towards lasting peace.
            </p>
          </div>
        </div>
        {/* images section ends */}

        {/* what willyou get  */}
        {/* <div className="max-w-[1300px] px-4 mx-auto my-14 text-center merriweather-regular"> */}
        <div className="my-14">
          <h4
            style={{ fontSize: "1.5rem" }}
            className="md:text-3xl text-center text-3xl mt-6 mb-2"
          >
            What will you get?
          </h4>
          <div className=" grid gird-cols-1 md:grid-cols-3 gap-3 md:gap-4 md:max-w-[1000px] mx-auto">
            {/* card */}
            <Card
              icon="yoga.svg"
              title="Improved Mental Health"
              description="Experience improved mental health with our award- winning support."
            />
            <Card
              icon="heart.svg"
              title="Better Personal Relation"
              description="You will experience improved personal relationships through accessible and effective mental health support."
            />
            <Card
              icon="Vectorbulb.svg"
              title="Enhanced Productivity"
              description=" Boost your productivity by experiencing effective and personalized mental health support."
            />
          </div>
        </div>
        {/* what willyou get ends */}
      </div>
      {/* awards section begins */}
      <div className="awards">
        <div className="max-w-[1200px] mx-auto my-12 px-4 ruonded-xl py-10 md:px-14  rounded gap-10 md:grid grid-cols-2 items-start">
          <div>
            <button className="bg-black px-4 py-1 text-sm text-white rounded-3xl">
              #Awards
            </button>
            <h3 className="text-2xl md:text-3xl mt-3">Recognized Excellence</h3>
            <p>
              See what we have achieved throughout our journey helping our
              clients.
            </p>
            <p className="mt-10 md:text-lg font-medium">
              Be a part of our award-winning journey in mental health
              excellence.
            </p>
          </div>
          <div className="flex mt-4 md:mt-0 flex-col gap-4">
            {/* award */}
            <div className="flex items-center bg-white gap-2 md:gap-3 p-3 rounded-lg">
              <img
                className="max-h-[20px] max-w-[20px] md:max-w-[30px] md:max-h-[30px] object-contain"
                src="/aboutUs/award.svg"
                alt="award"
              />
              <p className="text-sm md:text-base font-medium">
                National mental health excellence award
              </p>
            </div>
            {/* award */}
            <div className="flex items-center bg-white gap-2 md:gap-3 p-3 rounded-lg">
              <img
                className="max-h-[20px] max-w-[20px] md:max-w-[30px] md:max-h-[30px] object-contain"
                src="/aboutUs/award.svg"
                alt="award"
              />
              <p className="text-sm md:text-base font-medium">
                Certified mental health support provider
              </p>
            </div>
            {/* award */}
            <div className="flex items-center bg-white gap-2 md:gap-3 p-3 rounded-lg">
              <img
                className="max-h-[20px] max-w-[20px] md:max-w-[30px] md:max-h-[30px] object-contain"
                src="/aboutUs/award.svg"
                alt="award"
              />
              <p className="text-sm md:text-base font-medium">
                Best community in mental health
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* awards section ends */}

      <FaqContainer faqs={faqData} />

      <WellnessSection images={free} />

      <Footer />
    </>
  );
};

const Card = ({ icon, title, description }) => {
  return (
    <div className="rounded-xl border-1 shadow-md flex items-start flex-col gap-1 p-4">
      <div className="bg-black flex items-center justify-center text-white rounded-full min-h-[40px] min-w-[40px]">
        <img
          className="h-[20px] w-[20px] object-contain"
          src={`/aboutUs/${icon}`}
          alt={icon}
        />
      </div>
      <p
        style={{ fontSize: "1.15rem" }}
        className="text-gray-900 text-lg font-bold"
      >
        {title}
      </p>
      <p
        style={{ fontSize: "0.9rem" }}
        className="text-gray-700 text-start text-sm"
      >
        {description}
      </p>
    </div>
  );
};
