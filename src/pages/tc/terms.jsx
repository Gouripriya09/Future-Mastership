import React from "react";
import "./terms.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Terms = () => {
  return (
    <div className="terms light">
      <Navbar />
      <div className="tc">
        <h2 className="col-class f-ss rf">Master Vance Terms and Conditions</h2>
        <p>Last Updated on 10 January 2024</p>
        <div className="scroll-container">
          <h4 className="f-ss col-class">1. Acceptance of Terms</h4>
          <p>
            Welcome to Master Vance, the dynamic learning platform shaping the
            future of tech education. By accessing or using our website at
            www.mastervance.com ("Website"), you signify your agreement to
            adhere to the terms and conditions outlined below. If you have any
            questions or require clarification, feel free to contact us at
            mastervance16@gmail.com.
          </p>
          <h4 className="f-ss col-class">2. User Eligibility</h4>
          <p>
            To embark on your tech-enhanced journey with Master Vance, you must
            be at least 13 years old or have obtained parental or guardian
            consent. By utilizing the Site, you affirm your eligibility and
            commitment to these terms.
          </p>
          <h4 className="f-ss col-class">3. Account Registration</h4>
          <p>
            Create your Master Vance account to unlock a world of possibilities.
            By registering, you commit to providing accurate information and
            keeping it up-to-date. For any account-related queries, contact us
            at mastervance16@gmail.com.
          </p>
          <h4 className="f-ss col-class">4. Intellectual Empowerment</h4>
          <p>
            Master Vance is dedicated to fostering intellectual growth. All
            content on www.mastervance.com, including text, graphics, logos,
            images, and software, is proprietary and protected by applicable
            laws. We encourage responsible knowledge sharing while respecting
            intellectual property rights.
          </p>
          <h4 className="f-ss col-class">5. User Conduct</h4>
          <p>
            As a valued member of the Master Vance community, you pledge to
            contribute positively. We promote collaboration, respect, and the
            free exchange of ideas. Any conduct contrary to these principles
            will not be tolerated.
          </p>
          <h4 className="f-ss col-class">6. Community Connectivity</h4>
          <p>
            Our vibrant community is the heart of Master Vance. Embrace
            diversity, promote inclusivity, and adhere to our community
            guidelines to ensure a supportive learning environment. Connect with
            like-minded learners as you explore the possibilities of tech
            education.
          </p>
          <h4 className="f-ss col-class">7. Tech Enlightenment</h4>
          <p>
            Enroll in our courses at www.mastervance.com to embark on a
            transformative journey of tech enlightenment. Some courses may
            require payment; details will be provided during enrollment. Your
            investment in knowledge is non-refundable, reflecting your
            commitment to personal and professional growth.
          </p>
          <h4 className="f-ss col-class">8. Privacy Pledge</h4>
          <p>
            Your privacy is of utmost importance. Review our Privacy Policy on
            www.mastervance.com to understand how we collect, use, and safeguard
            your personal information. By using Master Vance, you entrust us
            with your data, and we are dedicated to protecting it.
          </p>
          <h4 className="f-ss col-class">9. Evolving Together</h4>
          <p>
            Master Vance is committed to continuous improvement. We reserve the
            right to enhance and evolve the platform regularly. Keep an eye on
            www.mastervance.com for updates to these terms and conditions.
          </p>
          <h4 className="f-ss col-class">10. Empowering Futures</h4>
          <p>
            These terms and conditions are governed by the laws of the Indian
            Government, reflecting our commitment to fairness, transparency, and
            educational empowerment.
          </p>
          <h4 className="f-ss col-class">11. Contact Us</h4>
          <p>
            For any questions, feedback, or concerns regarding these terms and
            conditions, connect with us at mastervance16@gmail.com.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
