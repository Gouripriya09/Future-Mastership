import React, { useEffect } from "react";

const RazorpayPaymentGateway = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handlePayment = async () => {
    const options = {
      key: "rzp_live_SKPCBesG7JigAa",
      key_secret: "EpygdgQ7f53atZsMxI2pbDEB",
      amount: 500,
      currency: "INR",
      name: "Courseeess",
      description: "Something",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "1234567890",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default RazorpayPaymentGateway;
