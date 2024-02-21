import React from 'react';

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to FlowerShop!</h1>
      {/* Other content of your home page */}
      <TermsAndConditions />
    </div>
  );
}

function TermsAndConditions() {
  return (
    <div className="terms">
      <h2>Terms and Conditions</h2>
      <p>
        Please read our terms and conditions carefully before using our website. By accessing or using the service,
        you agree to be bound by these terms.
      </p>
      {/* Include your terms and conditions text here */}
      <p>
        These terms and conditions outline the rules and regulations for the use of FlowerShop's Website, located at
        www.flowershop.com.
      </p>
      {/* Add more terms and conditions content */}
    </div>
  );
}
