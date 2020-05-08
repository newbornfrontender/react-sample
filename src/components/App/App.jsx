import React from 'react';
import styled from 'reshadow/macro';

import { Counter, Button, increment } from '../Counter';

export const App = () => {
  return styled(null)`
    Counter {
      margin-block-end: 2rem;
    }
  `(
    <main>
      <Counter />

      <div>
        <Button text="increase" handler={increment} />
      </div>
    </main>,
  );
};
