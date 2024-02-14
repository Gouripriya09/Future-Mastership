import React, { useEffect, useRef } from "react";
import "./Certificate.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import refIMG from "../../assets/cert.png";
import "./certificate.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cert = () => {
  const canvasRef = useRef(null);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Customize the text and position
    const text = "C M Yogeshwar";
    const x = 420; // X-coordinate
    const y = 372; // Y-coordinate

    // Draw the image on the canvas
    const image = new Image();
    image.src = refIMG;

    image.onload = () => {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Customize text style
      context.font = "32px Arial";
      context.fillStyle = "black";

      // Draw text on the canvas
      context.fillText(text, x, y);

      // Trigger download
      const link = document.createElement("a");
      link.download = "certificate.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="certificate light">
      <Navbar />
      <div className="cert">
        <h3>Verify Certificate</h3>
        <div className="cert1">
          {" "}
          <p>
            To verify the legitimacy of any certificate issued by Mastervance
            please enter "Certificate Serial Number" given on your certificate.
          </p>
        </div>
        <div className="input">
          Certificate Serial Number
          <div className="verify">
            <input type="number" placeholder="Enter Number" />
            <button className="button">Verify</button>
            <div className="gen">
              <button id="download-cert" onClick={handleDownload}>
                Download Image
              </button>
              <canvas ref={canvasRef} width={1080} height={720} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cert;
