import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  db = [
    {id: '01', name: 'dont know 1', price: 10},
    {id: '02', name: 'dont know 2', price: 30}
  ];

  cart = [];
  constructor() { }

  public fetch() {
    return this.db;
  }

  public query(id) {
    return this.db.filter(products => products.id === id);
  }

  public addToCart(product) {
    const index = this.cart.findIndex((prod) => prod.id === product.id);
    if (index !== -1) {
      this.cart.push({id: product.id, quantity: 1});
    } else {
      this.cart[index].quantity++;
    }
  }

  public removeFromCart(cartProductIndex) {
    if (this.cart[cartProductIndex].quantity === 1) {
      this.cart = this.cart.splice(cartProductIndex, 1);
    } else {
      this.cart[cartProductIndex].quantity--;
    }
  }
}
