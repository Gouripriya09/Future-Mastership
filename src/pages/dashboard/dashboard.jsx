import React, { useEffect, useState } from "react";
import { useAuth } from "../../AuthContext";
import { auth, db } from "../../firebase";
import { collection, setDoc, doc, updateDoc, getDocs, getDoc } from "firebase/firestore";
import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [userDocId, setUserDocId] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usersRef = collection(db, "users");
        const querySnapshot = await getDocs(usersRef);

        querySnapshot.forEach((doc) => {
          if (doc.data().uid === auth.currentUser.uid) {
            setUserDocId(doc.id);
            setUserData(doc.data());
            console.log(doc.id); // Store the document ID associated with the current user
          }
        });
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, [auth.currentUser.uid]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedProfile = {};
      // Check if the user has a phone number, and add it to the profile update if available
      if (newPhone !== "" && !userData.phoneNumber) {
        updatedProfile.phoneNumber = newPhone;
      }

      // Update name if it's different from the current value
      if (newName !== "" && newName !== userData.name) {
        updatedProfile.name = newName;
      }

      // Update phone number and other information in Firestore
      const userRef = doc(db, "users", userDocId);

      // Fetch the existing document data
      const existingData = (await getDoc(userRef)).data();

      // Merge the existing data with the updated profile
      const updatedData = { ...existingData, ...updatedProfile };

      // Use setDoc to create or update the user document
      await setDoc(userRef, updatedData);

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
