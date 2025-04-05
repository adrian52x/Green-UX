import "../styles/form.css";
import { useState } from "react";

export default function FormDisplay() {
  const [formValid, setFormValid] = useState(false);
  const [emailError, setEmailError] = useState(""); // State to store email validation error

  const validateEmail = (email) => {
    // Regex for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validate email format
    if (email && !validateEmail(email)) {
      setEmailError("Invalid email format");
      setFormValid(false);
    } else {
      setEmailError("");
      setFormValid(name !== "" && email !== "");
    }
  };

  return (
    <section id="form" className="container-form">
      <div className="form-section section-padding">
        <header className="form-header">
          <span className="form-tag">Sign our petition!</span>
          <h2 className="form-title">Help us make a change</h2>
        </header>

        <div className="wrapper">
          <p className="form-sentence">
            Every day, Danish consumers unknowingly support deforestation
            through products containing unsustainable palm oil. By signing this
            petition, you're urging the Danish Ministry of Environment to:
          </p>

          <ul className="form-checklist">
            <li className="form-check-item">
              <img
                src="/assets/check.svg"
                alt="Check"
                className="form-check-icon"
                aria-hidden="true"
              />
              <span>Enforce clear palm oil labeling</span>
            </li>
            <li className="form-check-item">
              <img
                src="/assets/check.svg"
                alt="Check"
                className="form-check-icon"
                aria-hidden="true"
              />
              <span>Demand full supply chain transparency</span>
            </li>
            <li className="form-check-item">
              <img
                src="/assets/check.svg"
                alt="Check"
                className="form-check-icon"
                aria-hidden="true"
              />
              <span>
                Ensure products sold in Denmark are deforestation-free
              </span>
            </li>
          </ul>

          {/* Form fields */}
          <div className="form-group">
            <label htmlFor="name">
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="E.g. John Doe"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="E.g. john.doe@gmail.com"
              onChange={handleInputChange}
              required
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>

          <div className="form-group form-checkbox">
            <input type="checkbox" id="updates" />
            <label htmlFor="updates">Receive updates</label>
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              className="form-input"
              placeholder="E.g. Aarhus"
            />
            <p className="form-note">
              We collect this information to illustrate the diverse support from
              across the country 🌱{" "}
            </p>
          </div>

          <button className="primary-button" disabled={!formValid}>
            Sign our petition!
          </button>
        </div>
      </div>
    </section>
  );
}
