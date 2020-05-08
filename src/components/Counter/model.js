import { createStore } from 'effector';
import { increment, decrement, reset } from './events';

const handleIncrement = (state) => state + 1;
const handleDecrement = (state) => state - 1;

export const counter = createStore(0)
  .on(increment, handleIncrement)
  .on(decrement, handleDecrement)
  .reset(reset);
