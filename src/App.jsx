import React from 'react';
import styled from 'styled-components';
import { Positions } from './Positions';
import { Resizer } from './Resizer';
import { ResizeProvider } from './ResizeContext';
import { Iframe } from './Iframe';

const AppWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-areas:
    'head head'
    'left right';

  grid-template-rows: 150px 1fr;

  .content__header {
    grid-area: head;
    display: grid;
    grid-template-columns: 70px 1fr;
    padding: 5px;
  }

  .content__left {
    grid-area: left;
    border-right: solid 1px;
    display: grid;
    justify-items: center;
  }

  .content__right {
    grid-area: right;
    border-left: solid 1px;
    display: grid;
    justify-items: center;
  }
`;



export const App = (props) => {
  return (
    <AppWrapper>
      <ResizeProvider>
        <div className="content__header">
          <Positions />
          <Resizer />
        </div>
        <div className="content__left">
          <h4>3rd party</h4>
          <Iframe id='3rd-party' src='https://simple-msg.netlify.app/aupa.html' />
        </div>
        <div className="content__right">
          <h4>1st party</h4>
          <Iframe id='1st-party' />
        </div>
      </ResizeProvider>
    </AppWrapper>
  );
};
