import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  db = [
    {id: '01', name: 'dont know 1'},
    {id: '02', name: 'dont know 2'}
  ];
  constructor() { }

  public fetch() {
    return this.db;
  }

  public query(id) {
    return this.db.filter(products => products.id === id);
  }
}
