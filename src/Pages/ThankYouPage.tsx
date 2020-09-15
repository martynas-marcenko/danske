import React from "react";
import { Link } from "react-router-dom";

import "rc-slider/assets/index.css";

import { Section, MaxWidth, LayoutRow } from "../components/Layout";

const ThankYouPage = () => {
  return (
    <>
      <Section>
        <MaxWidth>
          <LayoutRow>Thank you page</LayoutRow>
          <Link to="/">Go Back</Link>
        </MaxWidth>
      </Section>
    </>
  );
};

export default ThankYouPage;
