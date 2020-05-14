import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faArrowLeft,
  faArrowRight,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons';
import { usePosition, positions } from '../contexts/PositionContext';

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
    cursor: pointer;
    &:hover {
      color: #89a;
    }
    &:active {
      color: #cc5;
    }
  }
`;

export const Positions = (props) => {

  /* eslint-disable no-unused-vars */
  const [position, setPosition] = usePosition();

  return (<PositionWrapper>
    <FontAwesomeIcon icon={faArrowUp} className="up" onClick={() => setPosition(positions.UP)} />
    <FontAwesomeIcon icon={faArrowDown} className="down" onClick={() => setPosition(positions.DOWN)} />
    <FontAwesomeIcon icon={faArrowLeft} className="left" onClick={() => setPosition(positions.LEFT)} />
    <FontAwesomeIcon icon={faArrowRight} className="right" onClick={() => setPosition(positions.RIGHT)} />
  </PositionWrapper>);
}