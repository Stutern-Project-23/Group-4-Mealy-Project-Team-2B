/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = () => (
  <FooterSection>
    <footer className="top">
      <div>
        <div>
          <NavLink to="/" className="nav-logo footer-logo">
            MEALY
          </NavLink>
          <p>your fastest and reliable food and drink delivery partner</p>
        </div>
      </div>
      <div>
        <h2>Company</h2>
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Patnerships</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/">Policy</a>
          </li>
          <li>
            <a href="/">Customer</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Services</h2>
        <ul>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Recipe</a>
          </li>

          <li>
            <a href="/">Delivery</a>
          </li>

          <li>
            <a href="/">Customer</a>
          </li>
        </ul>
      </div>

      <div>
        <h2>Support</h2>
        <ul>
          <li>
            <a href="/">Help Center</a>
          </li>
          <li>
            <a href="/">Status</a>
          </li>
          <li>
            <a href="/"> Terms of services</a>
          </li>
        </ul>
      </div>

      <div>
        <h2>Contact us</h2>
        <div className="links">
          <ul>
            <li>
              <a className="github" href="/">
                fa-github
              </a>
            </li>
            <li>
              <a className="linkedin" href="/">
                fa-linkedin
              </a>
            </li>
            <li>
              <a className="docker" href="/">
                fa-docker
              </a>
            </li>
            <li>
              <a className="docker" href="/">
                fa-docker
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </FooterSection>
);

const FooterSection = styled.div`
  width: 97.5%;
  background: #fa5a00;
  padding: 1em;
  padding-top: 40px;
  font-style: normal;
  line-height: 18px;
  color: #ffffff !important;
  ul {
    margin-block-start: 0;
    padding-left: 0;

    li {
      list-style: none;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      a {
        color: #ffffff !important;
      }
    }
  }
  .footer-logo {
    margin-left: 0 !important;
    color: #ffffff !important;
  }
  footer {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;
    margin: 0 30px;
  }

  @media (width < 620px) {
    footer {
      flex-direction: column;
      justify-content: center !important;
      width: 50%;
      margin: 0 auto;
    }
  }

  @media (width >= 620px) {
    footer {
      margin: 0 auto;
      padding: 0;
    }
  }

  footer.top {
    padding-bottom: 20px;
  }

  footer.top .links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .links > div {
    display: grid;
    gap: 10px;
    margin-bottom: 30px;
  }

  footer h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 1em;
  }

  @media (width < 420px) {
    footer {
      text-align: center;
      align-items: center;
    }

    footer.top .links {
      grid-template-columns: 1fr;
    }
  }
`;

export default Footer;