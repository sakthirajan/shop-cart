import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private product: Product[];

  constructor() {
    this.product = [
      { id: 'p01', name: 'name 1', price: 100, photo: 'thumb1.gif' },
      { id: 'p02', name: 'name 2', price: 200, photo: 'thumb2.gif' },
      { id: 'p03', name: 'name 3', price: 300, photo: 'thumb3.gif' }
    ]
  }

  findAll(): Product[] {
    console.log(this.product);
    return this.product;
  }

  find(id: string): Product {
    return this.product[this.getSelectedIndex(id)];
  }
  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.product.length; i++) {
      if (this.product[i].id == id) {
        return i;
      }
    }
    return -1;
  }
}
