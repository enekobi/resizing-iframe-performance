
import React from 'react';
import styled from 'styled-components';
import { useResize } from './ResizeContext';
const ResizerWrapper = styled.div`
background: #29a;
border: solid 2px;
border-radius: 25px;
height: 100px;
display: grid;
align-items: center;
justify-items: center;
letter-spacing: 2px;
text-transform: uppercase;
margin: 0 50px;
font-weight: 20px;

&:hover {
  cursor: pointer;
  background: #5ca;
}

&:active {
  background: #af6;
}
`;

export const Resizer = (props) => {
  const [resized, setResized] = useResize();
  return (<ResizerWrapper onClick={() => setResized(!resized)}> Click me to resize iframes</ResizerWrapper>);

}