import React, { useEffect } from "react";
import { useAuth } from "../../AuthContext";
import { auth } from "../../firebase";
import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  useEffect(() => {
    window.alert("payment successful");
  }, []);

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
      <Footer />
    </div>
  );
};

export default Dashboard;
