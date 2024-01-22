import React, { useEffect, useState } from "react";
import { useAuth } from "../../AuthContext";
import { auth, db } from "../../firebase";
import { collection, setDoc, doc } from "firebase/firestore";
import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedProfile = {};
      // Check if the user has a phone number, and add it to the profile update if available
      if (newPhone !== "" && auth.currentUser.phoneNumber === null) {
        updatedProfile.phoneNumber = newPhone;
      }

      // Update phone number and other information in Firestore
      const userRef = doc(db, "users", auth.currentUser.uid);

      // Use setDoc to create or update the user document
      await setDoc(userRef, {
        uid: auth.currentUser.uid,
        name: newName || auth.currentUser.displayName,
        email: auth.currentUser.email,
        phone: newPhone || null,
        // Add other fields as needed
      });

      console.log("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  return (
    <div className="light dashboard">
      <Navbar />
      <h1>Courses: List of courses</h1>
      <div>
        <p>Display Name: {auth.currentUser.displayName}</p>
        <p>Email: {auth.currentUser.email}</p>
        <p>UID: {auth.currentUser.uid}</p>
        <p>UID: {auth.currentUser.photoURL}</p>

        {auth.currentUser.photoURL && (
          <div>
            <h2>Profile Image:</h2>
            <img src={auth.currentUser.photoURL} alt="User Profile" />
          </div>
        )}

        {auth.currentUser.providerData && (
          <div>
            <h2>Provider Details:</h2>
            {auth.currentUser.providerData.map((provider, index) => (
              <div key={index}>
                <p>Provider ID: {provider.providerId}</p>
                <p>Provider UID: {provider.uid}</p>
                <p>Display Name: {provider.displayName}</p>
                <p>Email: {provider.email}</p>
                {provider.photoURL && (
                  <div>
                    <h3>Provider Image:</h3>
                    <img
                      src={provider.photoURL}
                      alt={`Provider ${index + 1}`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <form onSubmit={handleProfileUpdate}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder={auth.currentUser.displayName}
          name="name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <br />
        <label htmlFor="phone">Phone</label>

        <input
          type="number"
          placeholder="Phone"
          name="phone"
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
        />
        <br />
        <button type="submit">Update Profile</button>
      </form>
      <Footer />
    </div>
  );
};

export default Dashboard;
