import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { InputField } from "./styles";
import { Link } from "react-router-dom";
import { Section, MaxWidth, LayoutRow } from "../Layout";

const calculateInterest = (
  loan: number,
  interestRate: number,
  years: number
) => {
  return loan * (interestRate / 100) * years;
};

const clampValue = (value: number, min: number, max: number) =>
  Math.max(Math.min(value, max), min);

const formatNumber = (value: number) => {
  return value.toFixed(2);
};

const Calculator = () => {
  const [showHoverContent, setShowHoverContent] = useState(false);
  const [loan, setLoan] = useState<number>(5000);
  const [years, setYears] = useState<number>(3);

  const loanBounds = { min: 2000, max: 10000 };
  const yearBounds = { min: 1, max: 5 };

  const clampedLoan = clampValue(loan || 0, loanBounds.min, loanBounds.max);
  const clampedYears = clampValue(years || 0, yearBounds.min, yearBounds.max);
  const interestRate = 3;
  const interest = calculateInterest(loan, interestRate, years);
  console.log(interest);

  return (
    <>
      <Section>
        <MaxWidth>
          <LayoutRow>
            <InputField
              active={showHoverContent}
              value={loan}
              onBlur={() => setLoan(Number(clampedLoan))}
              onChange={(event) => setLoan(Number(event.target.value))}
              type="number"
            />
            <Slider
              min={20}
              max={2000}
              railStyle={{
                backgroundColor: "#c4ccd9",
                height: 2,
                borderRadius: 0,
              }}
              trackStyle={{
                backgroundColor: "blue",
                height: 2,
                borderRadius: 0,
              }}
              handleStyle={{
                backgroundColor: "blue",
                borderColor: "blue",
                marginTop: "-6px",
              }}
            />
            <InputField
              active={showHoverContent}
              value={years}
              onBlur={() => setYears(Number(clampedYears))}
              onChange={(event) => setYears(Number(event.target.value))}
              type="number"
            />
          </LayoutRow>
          <LayoutRow>
            DKK {formatNumber(loan)}
            <br />
            {years} years
            <br />
            {interestRate}%
            <br />
            DKK {formatNumber(interest)}
            <Link to="/thankyou">Apply credit</Link>
          </LayoutRow>
        </MaxWidth>
      </Section>
    </>
  );
};

export default Calculator;
