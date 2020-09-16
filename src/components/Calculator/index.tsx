import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {
  ColInputs,
  ColOutput,
  InputField,
  Label,
  InputLoanWrapper,
  InputYearWrapper,
  Input,
  MinMaxWrapper,
  ClampedValue,
  OfferWrapper,
  MainNumbers,
  NumberWrapper,
  BiggerText,
  Title,
  ListItem,
  ListWrapper,
  InnerTitle,
  InnerValue,
  Disclaimer,
  Button,
} from "./styles";

import {
  calculateInterest,
  calculateMonthlyPayments,
  clampValue,
  formatNumberAsCurrency,
} from "./util";

const Calculator = () => {
  const [loan, setLoan] = useState<number>(5000);
  const [years, setYears] = useState<number>(3);

  const loanBounds = { min: 2000, max: 10000 };
  const yearBounds = { min: 1, max: 5 };

  const clampedLoan = clampValue(loan || 0, loanBounds.min, loanBounds.max);
  const clampedYears = clampValue(years || 0, yearBounds.min, yearBounds.max);
  const interestRate = 3;
  const interest = calculateInterest(loan, interestRate, years);
  const MonthlyPayments = calculateMonthlyPayments(loan, interest, years);

  return (
    <>
      <ColInputs>
        <InputLoanWrapper>
          <Input>
            <Label>Loan Amount</Label>
            <InputField
              value={loan}
              onBlur={() => setLoan(Number(clampedLoan))}
              onChange={(event) => setLoan(Number(event.target.value))}
              type="number"
            />
          </Input>
          <Slider
            min={loanBounds.min}
            max={loanBounds.max}
            value={clampedLoan}
            onChange={setLoan}
            railStyle={{
              backgroundColor: "transparent",
              height: 2,
              borderRadius: 0,
            }}
            trackStyle={{
              backgroundColor: "#009edd",
              height: 2,
              borderRadius: 0,
            }}
            handleStyle={{
              backgroundColor: "#009edd",
              borderColor: "#009edd",
              marginTop: "-6px",
            }}
          />
          <MinMaxWrapper>
            <ClampedValue>
              {formatNumberAsCurrency(loanBounds.min)}
            </ClampedValue>
            <ClampedValue>
              {formatNumberAsCurrency(loanBounds.max)}
            </ClampedValue>
          </MinMaxWrapper>
        </InputLoanWrapper>
        <InputYearWrapper>
          <Input>
            <Label>Choose Years</Label>
            <InputField
              value={years}
              onBlur={() => setYears(Number(clampedYears))}
              onChange={(event) => setYears(Number(event.target.value))}
              type="number"
            />
          </Input>
          <Slider
            min={yearBounds.min}
            max={yearBounds.max}
            value={clampedYears}
            onChange={setYears}
            railStyle={{
              backgroundColor: "transparent",
              height: 2,
              borderRadius: 0,
            }}
            trackStyle={{
              backgroundColor: "#009edd",
              height: 2,
              borderRadius: 0,
            }}
            handleStyle={{
              backgroundColor: "#009edd",
              borderColor: "#009edd",
              marginTop: "-6px",
            }}
          />
          <MinMaxWrapper>
            <ClampedValue>{yearBounds.min} year</ClampedValue>
            <ClampedValue>{yearBounds.max} year</ClampedValue>
          </MinMaxWrapper>
        </InputYearWrapper>
        <Disclaimer>
          Results of loan simulator are for informational purposes only and
          should not be considered financial advice.
        </Disclaimer>
      </ColInputs>

      <ColOutput>
        <OfferWrapper>
          <MainNumbers>
            <NumberWrapper>
              <Title>Payment Every Month</Title>
              <BiggerText>{formatNumberAsCurrency(MonthlyPayments)}</BiggerText>
            </NumberWrapper>
            <NumberWrapper>
              <Title>Interest Rate</Title>
              <BiggerText>{interestRate}%</BiggerText>
            </NumberWrapper>
          </MainNumbers>
          <ListWrapper>
            <ListItem>
              <InnerTitle>Total Interest</InnerTitle>
              <InnerValue>{formatNumberAsCurrency(interest)} </InnerValue>
            </ListItem>
            <ListItem>
              <InnerTitle>Loan Amount</InnerTitle>
              <InnerValue>{formatNumberAsCurrency(loan)}</InnerValue>
            </ListItem>
            <ListItem>
              <InnerTitle>Loan Term</InnerTitle>
              <InnerValue>{years} years</InnerValue>
            </ListItem>
          </ListWrapper>
          <Button to="/thankyou">Apply for loan</Button>
        </OfferWrapper>
      </ColOutput>
    </>
  );
};

export default Calculator;
