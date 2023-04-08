import React, { PropsWithChildren } from "react";
type FooterButtonPropsTypes = {
  href: string;
};
const FooterSocialButton: React.FC<
  PropsWithChildren<FooterButtonPropsTypes>
> = (props) => {
  return (
    <a href={props.href}>
      <button className="footer-link-button">{props.children}</button>
    </a>
  );
};

export default FooterSocialButton;
