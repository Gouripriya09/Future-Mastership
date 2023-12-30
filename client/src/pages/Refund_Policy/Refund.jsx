import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Refund.css";

const Refund = () => {
  return (
    <div className="refund">
      <Navbar />
      <div className="refund-policy">
        <h2 className="col-class f-ss rf">Mastervance Refund Policy</h2>
        <p>Last Updated on 10 January 2024</p>
        <h4 className="rf-d">
          Master Vance is dedicated to ensuring a positive and fair learning
          experience for our users. This refund policy outlines the terms and
          conditions regarding refunds for courses and services offered on our
          platform at www.mastervance.com ("Website"). By using the Website, you
          agree to adhere to the terms of this refund policy.
        </h4>
        <div className="scroll-container">
          <h4 className="f-ss col-class">1. Course Enrollment and Payments:</h4>
          <h4 className="f-ss col-class">a. Payment Process:</h4>
          <p>
            Course enrollment on Master Vance requires payment, processed
            securely through trusted third-party payment gateways.
          </p>
          <h4 className="f-ss col-class">b. Refund Time Period:</h4>
          <p>
            Refunds are eligible within the first 24 hours of course enrollment.
            This time frame starts from the moment of purchase.
          </p>
          <h4 className="f-ss col-class">2. Refund Eligibility:</h4>
          <h4 className="f-ss col-class">a. Technical Issues:</h4>
          <p>
            If you encounter technical issues that prevent you from accessing
            the course content despite reasonable efforts on your part and ours
            within the first 24 hours, you may be eligible for a refund.
          </p>
          <h4 className="f-ss col-class">b. Course Content Dissatisfaction:</h4>
          <p>
            If you are dissatisfied with the course content and can demonstrate
            that the content does not align with the course description within
            the first 24 hours, you may request a refund.
          </p>
          <h4 className="f-ss col-class">3. Refund Process:</h4>
          <h4 className="f-ss col-class">a. Refund Request:</h4>
          <p>
            To initiate a refund request, contact our support team at
            mastervance16@gmail.com within the first 24 hours of course
            enrollment.
          </p>
          <h4 className="f-ss col-class">b. Review Process:</h4>
          <p>
            Refund requests will be reviewed on a case-by-case basis. We may
            request additional information to assess the validity of the
            request.
          </p>
          <h4 className="f-ss col-class">4. Non-Refundable Circumstances:</h4>
          <h4 className="f-ss col-class">a. Course Completion:</h4>
          <p>
            Refunds will not be provided for courses that have been completed or
            where a significant portion of the course content has been accessed.
          </p>
          <h4 className="f-ss col-class">
            b. Failure to Meet System Requirements:
          </h4>
          <p>
            Users are responsible for ensuring their devices meet the system
            requirements for accessing Master Vance courses. Refunds will not be
            granted for failure to meet these requirements.
          </p>
          <h4 className="f-ss col-class">5. Changes to this Refund Policy:</h4>
          <h4 className="f-ss col-class">Notification:</h4>
          <p>
            Users will be informed of any changes to this refund policy through
            the platform or via email.
          </p>
          <h4 className="f-ss col-class">6. Contact Information:</h4>
          <p>
            For refund inquiries, concerns, or requests, please contact us at
            mastervance16@gmail.com.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Refund;
