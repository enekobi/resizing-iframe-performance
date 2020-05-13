import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faArrowLeft,
  faArrowRight,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons';

const PositionWrapper = styled.div`
  display: grid;
  width: 70px;
  height: 70px;
  font-size: 30px;
  grid-template-areas:
    '1 up 2'
    'left 3 right'
    '4 down 5';

  .up {
    grid-area: up;
  }
  .down {
    grid-area: down;
  }

  .left {
    grid-area: left;
  }
  .right {
    grid-area: right;
  }

  svg {
    &:hover {
      color: #89a;
    }
    &:active {
      color: #cc5;
    }
  }
`;

export const Positions = (props) => (<PositionWrapper>
  <FontAwesomeIcon icon={faArrowUp} className="up" />
  <FontAwesomeIcon icon={faArrowDown} className="down" />
  <FontAwesomeIcon icon={faArrowLeft} className="left" />
  <FontAwesomeIcon icon={faArrowRight} className="right" />
</PositionWrapper>);