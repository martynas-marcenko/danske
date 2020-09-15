import styled from 'styled-components/macro';


export const InputField = styled.input<{ active: boolean }>`
display: flex;
width: 100%;
border: none;
border-radius: 4px 4px 0 0;
border-bottom: ${props => (props.active ? '2px solid #c4ccd9' : '2px solid transparent')};
padding: 12px;
font-family: groteskRegular, sans-serif;
font-size: ${props => (props.active ? '20px' : '32px')};
line-height: 32px;
text-align: center;
height: 64px;
background: ${props => (props.active ? 'white' : 'hsla(211, 66%, 13%, 0.05)')};
transition: all 300ms cubic-bezier(0.694, 0, 0.335, 1);
&:hover {
  background: hsla(211, 66%, 13%, 0.1);
}
&:focus {
  font-size: 20px;
  outline-width: 0;
  border-color: blue;
}
`;
