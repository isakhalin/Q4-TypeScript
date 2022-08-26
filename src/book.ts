export class Book {
  name: string;
  genre: string;
  price: number

  constructor(name: string, genre?: string, price?: number) {
    this.name = name
    this.genre = genre
    this.price = price
  }
}
