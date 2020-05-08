import React from 'react';
import styled from 'reshadow/macro';

const colorSwitcher = (text) => {
  switch (text) {
    case 'increase':
      return 'green';
    case 'decrease':
      return 'blue';
    case 'reset':
      return 'red';
    default:
      return 'grey';
  }
};

const transition = (target) => `0.2s ease-in-out ${target}`;
const transitions = [transition('transform'), transition('background-color')].join(',');

export const Button = ({ text, handler }) => styled(null)`
  button {
    min-block-size: 2rem;
    padding: 0 1rem;
    border: 0;
    border-radius: 7px;
    background-color: ${colorSwitcher(null)};
    color: white;
    transition: ${transitions};

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      background-color: ${colorSwitcher(text)};
    }
  }
`(<button onClick={handler}>{text}</button>);
