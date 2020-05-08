import { createEvent, split } from 'effector';

export const change = createEvent();
export const click = change.prepend((e) => e.target.innerText);

export const { increment, decrement, reset } = split(change, {
  increment: (value) => value === 'increase',
  decrement: (value) => value === 'decrease',
  reset: (value) => value === 'reset',
});
