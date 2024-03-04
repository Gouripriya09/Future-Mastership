import React, { useEffect } from "react";
import "./privacypolicy.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Privacypolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="privacy light">
      <Navbar />
      <div className="privacypolicy">
        <h2 className="col-class f-ss rf">Mastervance Privacy Policy</h2>
        <p>Last Updated on 10 January 2024</p>
        <h4 className="rf-d">
          Master Vance is dedicated to safeguarding your privacy. This Privacy
          Policy outlines how we collect, use, and protect your personal
          information when you engage with our platform at www.mastervance.com
          ("Website"). By using the Website, you agree to the terms outlined in
          this Privacy Policy.
        </h4>
        <div className="scroll-container">
          <h4 className="f-ss col-class">1. Information We Collect:</h4>
          <h4 className="f-ss col-class">a. Personal Information:</h4>
          <p>
            When you register for a Master Vance account, we collect necessary
            information such as your name, email address, and profile details.
          </p>
          <h4 className="f-ss col-class">b. Learning Data:</h4>
          <p>
            To enhance your learning experience, we collect data on course
            progress, quiz results, and other relevant information within the
            platform.
          </p>
          <h4 className="f-ss col-class">2. How We Use Your Information:</h4>
          <h4 className="f-ss col-class">a. Personalized Learning:</h4>
          <p>
            We utilize the information collected to personalize your learning
            journey, recommend courses, and track your progress.
          </p>
          <h4 className="f-ss col-class">b. Communication:</h4>
          <p>
            We may use your email address to send you updates, course
            recommendations, and platform-related communications.
          </p>
          <h4 className="f-ss col-class">c. Platform Enhancement:</h4>
          <p>
            Usage data is analyzed to improve our courses, platform features,
            and overall user experience.
          </p>
          <h4 className="f-ss col-class">3. Information Sharing:</h4>
          <h4 className="f-ss col-class">a. Third-Party Instructors:</h4>
          <p>
            Your learning data may be shared with instructors to facilitate
            course engagement and improvement.
          </p>
          <h4 className="f-ss col-class">b. Third-Party Service Providers:</h4>
          <p>
            We engage trusted third-party service providers for functions such
            as analytics, payment processing, and platform operation.
          </p>
          <h4 className="f-ss col-class">4. Cookies and Tracking:</h4>
          <h4 className="f-ss col-class">a. Cookies:</h4>
          <p>
            We use cookies to enhance your browsing experience and provide
            personalized content.
          </p>
          <h4 className="f-ss col-class">b. Analytics:</h4>
          <p>
            Third-party analytics tools help us understand user interactions and
            improve the platform.
          </p>
          <h4 className="f-ss col-class">5. Your Choices:</h4>
          <h4 className="f-ss col-class">a. Account Controls:</h4>
          <p>
            You have the ability to manage your account settings, update
            information, and control your privacy preferences.
          </p>
          <h4 className="f-ss col-class">b. Communication Preferences:</h4>
          <p>
            You can choose to opt out of certain communications through your
            account settings.
          </p>
          <h4 className="f-ss col-class">6. Data Security:</h4>
          <h4 className="f-ss col-class">Secure Environment:</h4>
          <p>
            We employ robust security measures to protect your personal
            information from unauthorized access and misuse.
          </p>
          <h4 className="f-ss col-class">7. Changes to this Privacy Policy:</h4>
          <h4 className="f-ss col-class">Notification:</h4>
          <p>
            Users will be informed of any material changes to this Privacy
            Policy through the platform or via email.
          </p>
          <h4 className="f-ss col-class">8. Contact Information:</h4>
          <p>
            For inquiries, concerns, or requests related to this Privacy Policy,
            please reach out to us at mastervance16@gmail.com.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacypolicy;
