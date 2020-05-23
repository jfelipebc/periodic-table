import { writable, get } from 'svelte/store';
import records from './data/records';

export const data = writable(records);

export const getElement = (atomicNumber) => {
  let elements = get(data);
  let details = elements.find(
    (element) => element.AtomicNumber === atomicNumber
  );
  return details;
};
