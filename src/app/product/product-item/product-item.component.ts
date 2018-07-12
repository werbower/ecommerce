import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  public product: Product;

  constructor() { }

  ngOnInit() {
    this.product = new Product('product', 100, 'image');
  }
  a

}
