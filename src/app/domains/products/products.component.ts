import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products  = signal([]);
  filteredProducts = signal([]);

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data:any) => {
      this.products.set(data);
      this.filteredProducts.set(data);
    });
  }

 /*  filterProducts(category: string): void {
    this.filteredProducts.update(
      prevState => {
        if (category === "All") {
          return prevState
      } else {
          return prevState.filter(product => product.category.type === category)
      }
      }
    )  
  } */
}
