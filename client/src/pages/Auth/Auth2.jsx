import React, { useState } from "react";
import { useAuth } from "../../AuthContext";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

const Auth2 = () => {
  const { currentUser } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberSubmit = async (e) => {
    window.alert("payment successful");
    e.preventDefault();

    // Update the user's profile in Firestore with the provided phone number
    try {
      const userDocRef = doc(db, "users", currentUser.uid);
      await updateDoc(userDocRef, {
        phoneNumber: phoneNumber,
        // Add other phone number-related attributes as needed
      });

      // Redirect to another page or perform additional actions
      // For example, redirect back to the main application after phone number submission
      navigate("/");
    } catch (error) {
      console.error("Error updating phone number:", error.message);
    }
  };

  return (
    <div className="Auth2">
      <h1>Additional Information Page</h1>
      <form onSubmit={handlePhoneNumberSubmit}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Link to="/dashboard" className="unformat-link">
          <button type="submit">Submit Phone Number</button>
        </Link>
      </form>
    </div>
  );
};

export default Auth2;
