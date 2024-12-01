import React from "react";

const Footer: React.FC = () => {
  return (
    <footer 
      className="bg-gray-900 text-white py-4" 
      role="contentinfo" 
      aria-label="Footer"
    >
      <div className="container mx-auto text-center">
        <p>
          © <time dateTime="2024">2024</time> 
          <span className="font-semibold"> Zenials</span>. All rights reserved.
        </p>
        <nav 
          aria-label="Footer Navigation" 
          className="mt-2 flex justify-center space-x-4"
        >
          <a
            href="/privacy-policy"
            className="hover:text-gray-400"
            aria-label="Navigate to Privacy Policy"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="hover:text-gray-400"
            aria-label="Navigate to Terms of Service"
          >
            Terms of Service
          </a>
          <a
            href="/contact"
            className="hover:text-gray-400"
            aria-label="Navigate to Contact Us"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
