import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    { id: 1, name: 'Product 1', price: 60, image: 'https://htmldemo.net/flone/flone/assets/img/product/hm3-pro-2.jpg', category: 'Pinceles' },
    { id: 2, name: 'Product 2', price: 70, image: 'https://htmldemo.net/flone/flone/assets/img/product/hm3-pro-2.jpg', category: 'Pinturas' },
    { id: 3, name: 'Product 3', price: 80, image: 'https://htmldemo.net/flone/flone/assets/img/product/hm3-pro-2.jpg', category: 'Lienzos' },
    { id: 4, name: 'Product 4', price: 90, image: 'https://htmldemo.net/flone/flone/assets/img/product/hm3-pro-2.jpg', category: 'Pinceles' }
  ];

  filteredProducts = this.products;

  constructor() {}

  ngOnInit(): void {}

  filterProducts(category: string): void {
    this.filteredProducts = category === 'All' ? this.products : this.products.filter(product => product.category === category);
  }
}
