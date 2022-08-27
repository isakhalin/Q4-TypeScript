import {Book} from './book.js';
import {Ratingable} from "./ratingable.js";

export function serialize (value: unknown) {
  if(value == null){
    return value + '';
  }

  if(value instanceof Book){
    return `${value.name}, ${value.genre}, ${value.price}`;
  }

  return value.toString()
}

export function showRating(entity: Ratingable) {
  if (entity.rating == null){
    return 'not rated yet'
  }

  const roundedRating = Math.round(entity.rating)
  let rating = ''

  for (let i = 0; i < roundedRating; i++){
    rating += '⭐'
  }

  return rating + ` (${entity.rating.toFixed(2)})`
}
