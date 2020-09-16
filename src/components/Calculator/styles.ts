import styled from 'styled-components/macro';
import { Flex, Section } from "../Layout/index";

export const SectionStyled = styled(Section)`
margin-top: 150px;
`;

export const InputField = styled.input`
display: flex;
width: 100%;
font-size: 20px;
line-height: 28px;
border: none;
border-radius: 4px 4px 0 0;
border-bottom: '2px solid transparent';
padding: 24px 12px 12px 12px;
background: hsla(211, 66%, 13%, 0.05);
transition: all 300ms cubic-bezier(0.694, 0, 0.335, 1);
&:hover {
  background: hsla(211, 66%, 13%, 0.1);
}
&:focus {
  outline-width: 0;
  border-color: blue;
}
`;

export const InputWrapper = styled(Flex)`
position: relative;
width: 100%;
color: ${props => (props.focused ? 'blue' : 'yellow')};
`;


export const Label = styled.label`
  position: absolute;
  top: 12px;
  padding-left: 12px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: black;

`;