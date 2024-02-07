import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./faq.css";
import FoldCard from "../../components/foldCard/foldCard";
import Footer from "../../components/Footer/Footer";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="faq">
      <Navbar />
      <div className="faq-main light">
        <h1 className="f-ss col-class faq-head">Frequently Asked Questions</h1>
        {/* <p className="faq-sub">Some text goes here</p> */}
        <div className="faq-window">
          <FoldCard
            qstn="1. What is Master Vance?"
            ans="Master Vance is a dynamic online learning platform that offers courses in trending areas such as AI, ML, Cyber Security, and Digital Forensics. Our platform also provides a vibrant community for like-minded learners."
          />
          <FoldCard
            qstn="2. How do I get started on Master Vance?"
            ans="
          To get started, simply visit our website at www.mastervance.com, create an account, and explore our courses. You can enroll in courses, engage with the community, and enhance your tech skills."
          />
          <FoldCard
            qstn="3. What courses does Master Vance offer?"
            ans="Master Vance offers courses in Artificial Intelligence, Machine Learning, Cyber Security, and Digital Forensics. Our courses are designed to be relevant, up-to-date, and taught by industry experts."
          />
          <FoldCard
            qstn="4. Can I interact with other learners on Master Vance?"
            ans="Absolutely! Master Vance has a vibrant community where you can connect with fellow learners, participate in discussions, and collaborate on projects. Learning together is a key aspect of the Master Vance experience.
          "
          />
          <FoldCard
            qstn="5. Are the instructors on Master Vance qualified?"
            ans="Yes, our instructors are industry experts with extensive experience in their respective fields. They bring real-world insights and practical knowledge to the courses they teach."
          />
          <FoldCard
            qstn="6. How do I enroll in a course?"
            ans="To enroll in a course, log in to your Master Vance account, browse our course catalog, and click on the course you're interested in. Follow the enrollment instructions, and you'll be on your way to mastering new skills."
          />
          <FoldCard
            qstn="7. What is the refund policy on Master Vance?"
            ans="We offer a 24-hour refund period for course enrollments. If you encounter technical issues or are dissatisfied with the course content within the first 24 hours, you may request a refund. For more details, please refer to our Refund Policy."
          />
          <FoldCard
            qstn="8. Is my personal information secure on Master Vance?"
            ans="Yes, we take the security of your personal information seriously. Our Privacy Policy outlines how we collect, use, and safeguard your data. We use secure payment gateways for transactions, and our platform is designed with privacy in mind."
          />
          <FoldCard
            qstn="9. Can I access Master Vance courses on mobile devices?"
            ans="Yes, our platform is designed to be accessible on various devices, including mobile phones and tablets. Learn on the go and access your courses whenever and wherever it's convenient for you."
          />
          <FoldCard
            qstn="10. How can I contact Master Vance for support?"
            ans="For any inquiries, support, or feedback, you can contact us at mastervance16@gmail.com. We're here to assist you on your learning journey."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
