import React from "react";
import { LogoMark } from "../assets/logo";
import Calculator from "../components/Calculator";
import styled from "styled-components/macro";
import { Flex, MaxWidth, LayoutRow, Section } from "../components/Layout";

export const SectionLogo = styled(Section)`
  margin-top: 32px;
  margin-bottom: 80px;
  @media (min-width: 992px) {
    margin-bottom: 160px;
  }
`;
export const SectionCalculator = styled(Section)`
  margin-bottom: 80px;
  @media (min-width: 992px) {
    margin-bottom: 160px;
  }
`;
export const MaxWidthStyled = styled(MaxWidth)`
  max-width: 576px;
  @media (min-width: 992px) {
    max-width: 1312px;
  }
`;

export const MaxWidthLogo = styled(MaxWidth)`
  max-width: 160px;
`;

export const SectionTitle = styled(Flex)`
  font-size: 28px;
  line-height: 40px;
  margin-bottom: 80px;
  justify-content: center;
  @media (min-width: 992px) {
    font-size: 36px;
    line-height: 40px;
  }
`;

export const LayoutRowCalulator = styled(LayoutRow)`
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const Landing = () => {
  return (
    <>
      <SectionLogo>
        <MaxWidthLogo>
          <LayoutRow>
            <LogoMark />
          </LayoutRow>
        </MaxWidthLogo>
      </SectionLogo>
      <SectionCalculator>
        <MaxWidthStyled>
          <SectionTitle>Loan Calculator</SectionTitle>
          <LayoutRowCalulator>
            <Calculator />
          </LayoutRowCalulator>
        </MaxWidthStyled>
      </SectionCalculator>
    </>
  );
};

export default Landing;
