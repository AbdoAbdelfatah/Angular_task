import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotificationCenterComponent } from './notification-center/notification-center.component';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductFormComponent, ProductListComponent,NotificationCenterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products: Product[] = [];
  favoriteProduct: Product[] =[];

  onProductAdded(product: Product) {
    this.products = [...this.products, product];
  }

onFavoriteToggled(productId: number) {
  this.products = this.products.map(p => ({
    ...p,
    isFavorite: p.id === productId ? !p.isFavorite : p.isFavorite
  }));
  this.favoriteProduct = this.products.filter(p => p.isFavorite);
}

onProductDeleted(productId: number) {
  this.products = this.products.filter(p => p.id !== productId);
  this.favoriteProduct = this.favoriteProduct.filter(p => p.id !== productId);
}

onProductUpdated(updatedProduct: Product) {
  this.products = this.products.map(p =>
    p.id === updatedProduct.id ? updatedProduct : p
  );
  this.favoriteProduct = this.favoriteProduct.map(p =>
    p.id === updatedProduct.id ? updatedProduct : p
  );
}

}
