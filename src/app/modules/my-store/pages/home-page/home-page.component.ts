import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public products: { id: number, name: string, description: string }[];

  constructor() {
    this.products = [
      {id: 1, name: 'abc', description: 'def'},
      {id: 2, name: 'abc', description: 'def'},
      {id: 3, name: 'abc', description: ''},
    ]
  }

  public getProduct(product: { id: number, name: string, description: string }): void {
    this.products = this.products.filter(value => value.id != product.id);
  }

}
