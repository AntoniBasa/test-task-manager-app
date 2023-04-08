import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import FooterSocialButton from "./FooterSocialButton";

type FooterPropsTypes = {};

const Footer: React.FC<FooterPropsTypes> = () => {
  return (
    <div className="footer">
      Test task from Anton Basaliuk
      <div className="footer-buttons-wrapper">
        <FooterSocialButton href="https://t.me/AntoniBasaliuk">
          <FaTelegramPlane className="footer-link-button-icon" />
        </FooterSocialButton>
        <FooterSocialButton href="https://www.linkedin.com/in/antoniuxui/">
          <FaLinkedin className="footer-link-button-icon" />
        </FooterSocialButton>
        <FooterSocialButton href="https://github.com/AntoniBasa">
          <FaGithub className="footer-link-button-icon" />
        </FooterSocialButton>
      </div>
    </div>
  );
};

export default Footer;
