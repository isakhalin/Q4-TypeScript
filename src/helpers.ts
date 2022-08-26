import {Book} from './book.js';

export function serialize (value: unknown) {
  if(value == null){
    return value + '';
  }

  if(value instanceof Book){
    return `${value.name}, ${value.genre}, ${value.price}`;
  }

  return value.toString()
}
