// Author: Tushardeep Singh

import { Fragment } from "react";
import "./Footer.css";

export const Footer = ({ title }) => {
  return (
    <Fragment>
      <section className="footer">
        <section className="footer-title">
          <h3>{title}</h3>
        </section>
      </section>
    </Fragment>
  );
};
