import React from 'react';
import styled from 'reshadow/macro';

import { ListItem } from './ListItem';

export const List = ({ list }) => styled(null)`
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

    & :global(li) {
      &:not(:last-child) {
        margin-inline-end: 0.8rem;
      }
    }
  }
`(
  <ul>
    {list.map(({ text, handler }, index) => (
      <ListItem text={text} handler={handler} key={index} />
    ))}
  </ul>,
);
