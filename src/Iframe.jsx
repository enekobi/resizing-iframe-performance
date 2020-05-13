import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useResize } from './ResizeContext';

const StyledIframe = styled.iframe`
border: solid 1px;
border-radius: 5px;
height: 100px;
width: 80%;
padding: 1px;
transition-duration: 500ms;
align-self: end;

&.big{
  height: 75%;
}
`;

export const Iframe = (props) => {
  const ifrRef = useRef(null);
  const [resized] = useResize();

  useEffect(() => {
    if (!props.src) {
      const script = document.createElement("script");
      script.src = "https://simple-msg.netlify.app/inject.js";
      script.async = true;

      ifrRef.current.contentWindow.document.head.appendChild(script);
    }
  }, [ifrRef, props.src]);


  return <StyledIframe className={resized ? 'big' : ''} ref={ifrRef} {...props} />;
}