import { Routes } from '@angular/router';
import { HomeComponent } from './domains/home/home.component';
import { AboutUsComponent } from './domains/about-us/about-us.component';
import { ProductsComponent } from './domains/products/products.component';
import { ProductDetailComponent } from './domains/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent } 
];
