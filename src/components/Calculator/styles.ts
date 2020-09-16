import { Link } from "react-router-dom";
import styled from 'styled-components/macro';
import { Flex, Section, Col } from "../Layout/index";

export const SectionStyled = styled(Section)`
margin-top: 150px;
`;

export const ColInputs = styled(Col)`
flex: 1 1 45%;
flex-direction: column;
margin-bottom: 40px;
  @media (min-width: 992px) {
    flex: 1 1 45%;
  }
`;

export const ColOutput = styled(Col)`
  @media (min-width: 992px) {
    flex: 1 0 55%;
  }
`;

export const Input = styled(Flex)`
  position: relative;
  width: 100%;
`;

export const InputLoanWrapper = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const InputYearWrapper = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;
`;

export const InputField = styled.input`
display: flex;
width: 100%;
font-size: 20px;
line-height: 28px;
color: hsla(211, 66%, 13%, 1);
padding: 28px 12px 8px 12px;
border: none;
border-radius: 4px 4px 0 0;
border-bottom: 2px solid transparent;
background: hsla(211, 66%, 13%, 0.05);
transition: all 300ms cubic-bezier(0.694, 0, 0.335, 1);
&:hover {
  border-color: hsla(211, 66%, 13%, 0.25);
  background: hsla(211, 66%, 13%, 0.1);
}
&:focus {
  outline-width: 0;
  border-color: #003755;
  outline: none;
}
`;

export const Label = styled.label`
  position: absolute;
  top: 12px;
  padding-left: 12px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: black;
`;

export const MinMaxWrapper = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  position: relative;
  top: -4px;
`;

export const ClampedValue = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: hsla(211, 66%, 13%, 0.75);
`;


export const OfferWrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
  padding: 40px;
  background: #003755;
  border-radius: 2px;
`;

export const MainNumbers = styled(Flex)`
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

export const NumberWrapper = styled(Flex)`
 flex-direction: column;
 margin-right: 24px;
 margin-bottom: 56px;
 &:last-child {
  margin-right: 0;
 }
`;

export const BiggerText = styled.span`
  font-size: 32px;
  line-height: 40px;
  font-weight: 600;
  color: hsla(0, 0%, 100%, 1);
`;

export const Title = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: hsla(0, 0%, 100%, 0.75);
`;

export const ListWrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const ListItem = styled(Flex)`
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.15);
  &:last-child {
    border-bottom: none;
 }
`;
export const InnerTitle = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: hsla(0, 0%, 100%, 0.75);
`;
export const InnerValue = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: hsla(0, 0%, 100%, 1);
`;

export const Disclaimer = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: hsla(0, 0%, 0%, 0.75);
`;

export const Button = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  min-height: 48px;
  border-radius: 1000px;
  color: hsla(0, 0%, 100%, 1);
  transition: all 0.15s ease-in-out;
  background-image: linear-gradient(0deg,rgba(0,0,0,.02) 7%,rgba(255,255,255,0) 50%,rgba(255,255,255,.12) 100%);
  background-color: #009edd;

  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    background-color: #009edd;
    color: #fff;
  }
  &:active {
    background-color: #009edd;
  }
  @media (min-width: 768px) {
    width: 256px;
  }
`;