import React, { useRef } from "react";
import refIMG from "../../assets/cert.png";
import "./certificate.css";

const Generate = () => {
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

  return (
    <div className="gen">
      <canvas ref={canvasRef} width={1080} height={720} />
      <button id="download-cert" onClick={handleDownload}>
        Download Image
      </button>
    </div>
  );
};

export default Generate;
