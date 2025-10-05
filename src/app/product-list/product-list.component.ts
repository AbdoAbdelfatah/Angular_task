import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() favoriteToggled = new EventEmitter<number>();
  @Output() productDeleted = new EventEmitter<number>();
  @Output() productUpdated = new EventEmitter<Product>();

  toggleFavorite(productId: number | undefined) {
    if (productId) {
      this.favoriteToggled.emit(productId);
    }
  }

  deleteProduct(productId: number | undefined) {
    if (productId) {
      this.productDeleted.emit(productId);
    }
  }

  updateProduct(product: Product) {
    const newName = prompt('Enter new name:', product.name);
    const newPrice = prompt('Enter new price:', product.price.toString());
    const newCategory = prompt('Enter new category:', product.category);

    if (newName && newPrice && newCategory) {
      const updatedProduct: Product = {
        ...product,
        name: newName,
        price: parseFloat(newPrice),
        category: newCategory
      };
      this.productUpdated.emit(updatedProduct);
    }
  }
}
