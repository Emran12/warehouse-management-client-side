import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="bg-dark text-light mt-5  ps-5 pe-3 pt-3 footer">
        <div className="ms-5">
          <h1>Contact</h1>
          <ul className="list-unstyled">
            <li>ABox 565,</li>
            <li>Charlestown, Nevis,</li>
            <li> West Indies,</li>
            <li>Caribbean</li>
            <li>contact@example.com</li>
            <li> Phone + 844 123 456 78 90</li>
          </ul>
        </div>
        <div>
          <h1>Product</h1>
          <ul className="list-unstyled">
            <li>
              <p>Medicines</p>
            </li>
            <li>
              <p>Skin Care</p>
            </li>
            <li>
              <p>Vitamins and Supplments</p>
            </li>
            <li>
              <p>Reflex Hammer</p>
            </li>
          </ul>
        </div>
        <div>
          <h1>Company</h1>
          <ul className="list-unstyled">
            <li>
              <p>Shipping and Returns</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <p>Terms and Conditions</p>
            </li>
            <li>
              <p>Vacancies</p>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center bg-dark text-light p-3">
        Copyright © 2019 Medicor. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
