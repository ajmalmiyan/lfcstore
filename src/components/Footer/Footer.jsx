import React from "react";
import { FooterCont, FooterLink, A } from "./Styles";

const Footer = () => {
  return (
    <FooterCont>
      <FooterLink>
        <A
          href="https://ajmalmiyan.com"
          target="_blank" rel="noreferrer"
        >
          Portfolio
        </A>
        <span> | </span>
        <A href="https://github.com/ajmalmiyan" target="_blank" rel="noreferrer">
          Github
        </A>
        <span> | </span>
        <A href="https://linkedin.com/in/ajmalmiyan" target="_blank" rel="noreferrer">
          LinkedIn
        </A>
        <span> | </span>
        <A href="https://twitter.com/ajmalmiyan" target="_blank" rel="noreferrer">
          Twitter
        </A>
      </FooterLink>
      <p>
        <strong>You'll Never Walk Alone</strong>
      </p>
    </FooterCont>
  );
};

export default Footer;
