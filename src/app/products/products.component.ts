import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../domain/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product [];
  constructor(private _service: ProductService ) { }

  ngOnInit() {
    this.products = this._service.getAllProducts();
  }

}
