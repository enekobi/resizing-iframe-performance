import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useResize } from './ResizeContext';
import { usePosition } from './PositionContext';

const StyledIframe = styled.iframe`
border: solid 1px;
border-radius: 5px;

padding: 1px;
transition: 500ms;

&.down, &.up   {
  height: 100px;
  width: 80%;

  :not(.up){
    align-self: end;
  }

  :not(.down){
    align-self: start;
  }

  &.big {
    height: 75%;
    }
  }

  &.right, &.left {
    align-self: center;
    width: 100px;
    height: 80%;
  
    
  :not(.right){
    justify-self: start;
  }

  :not(.left){
    justify-self: end;
  }

    &.big{
      width: 75%;
    }
  }

`;

export const Iframe = (props) => {
  const ifrRef = useRef(null);
  const [resized] = useResize();
  const [position] = usePosition();

  useEffect(() => {
    if (!props.src) {
      const script = document.createElement("script");
      script.src = "https://simple-msg.netlify.app/inject.js";
      script.async = true;

      ifrRef.current.contentWindow.document.head.appendChild(script);
    }
  }, [ifrRef, props.src]);

  return <StyledIframe className={`${position} ${resized ? 'big' : ''}`} ref={ifrRef}  {...props} />;
}