import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { useAuth } from "../../AuthContext";
import { auth, db } from "../../firebase";
import {
  collection,
  setDoc,
  doc,
  updateDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import Navbar from "../../components/Navbar/Navbar";
import CourseCard from "../../components/Course/CourseCard";
import Footer from "../../components/Footer/Footer";

const Dash = () => {
  const [newName, setNewName] = useState("");
  const [ss, setss] = useState(1);
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
  }, []);

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
    <div className="dashboard light">
      <Navbar />
      <div className="welcome">
        <img src={auth.currentUser.photoURL} alt="ProfilePic" />
        <p className="greet">Hello {auth.currentUser.displayName} !</p>
      </div>
      <div className="bar">
        <div className="left-bar">
          <ul>
            <li
              onClick={() => {
                setss(1);
              }}
            >
              <i class="fa-solid fa-house"></i>Dashboard
            </li>
            <li
              onClick={() => {
                setss(2);
              }}
            >
              <i class="fa-solid fa-list"></i>My Courses
            </li>
            <li
              onClick={() => {
                setss(3);
              }}
            >
              <i class="fa-solid fa-gear"></i>Update Profile
            </li>
          </ul>
        </div>
        <div className="right-bar">
          {ss === 1 && (
            <>
              <h2>Continue Learning</h2>
              <div className="dash-in">
                <CourseCard
                  title="Java Course"
                  name="unknown"
                  rating="0"
                  num="0"
                  price="599"
                />
                <CourseCard
                  title="Digital Marketing Course"
                  name="unknown"
                  rating="0"
                  num="0"
                  price="599"
                />
              </div>
              <h2>Explore More Courses</h2>
              <br />
              <div className="df">
                <CourseCard
                  title="Cybersecurity Course"
                  name="unkown"
                  rating="0"
                  num="0"
                  price="599"
                />
                <CourseCard
                  title="Internet of Things (IoT) Course"
                  name="unkown"
                  rating="0"
                  num="0"
                  price="599"
                />
                <CourseCard
                  title="ReactJS Course"
                  name="unkown"
                  rating="0"
                  num="0"
                  price="599"
                />
              </div>
            </>
          )}

          {ss === 2 && (
            <div className="df">
              <CourseCard
                title="Java Course"
                name="unknown"
                rating="0"
                num="0"
                price="599"
              />
              <CourseCard
                title="Digital Marketing Course"
                name="unknown"
                rating="0"
                num="0"
                price="599"
              />
            </div>
          )}

          {ss === 3 && (
            <>
              <form className="update-form" onSubmit={handleProfileUpdate}>
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
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dash;
