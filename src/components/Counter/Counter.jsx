import React from 'react';
import styled from 'reshadow/macro';
import { useStore } from 'effector-react';

import { List } from './components';

import styles from './styles.shadow.css';
import { click } from './events';
import { counter } from './model';

const list = [
  {
    text: 'increase',
    handler: click,
  },
  {
    text: 'decrease',
    handler: click,
  },
  {
    text: 'reset',
    handler: click,
  },
];

export const Counter = ({ className }) => {
  const counterState = useStore(counter);

  return styled(styles)`
    p {
      color: ${counterState > 0 ? 'green' : counterState < 0 ? 'blue' : 'black'};
    }
  `(
    <content as="section" className={className}>
      <p data-testid="counter">{counterState}</p>

      <List list={list} />
    </content>,
  );
};
