import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  @Output() productAdded = new EventEmitter<Product>();

  productName: string = '';
  productPrice: number | null = null;
  productCategory: string = '';

  addProduct() {
    if (this.productName && this.productPrice && this.productCategory) {
      const newProduct: Product = {
        id: Date.now(),
        name: this.productName,
        price: this.productPrice,
        category: this.productCategory,
        isFavorite: false
      };

      this.productAdded.emit(newProduct);

      this.productName = '';
      this.productPrice=null;
      this.productCategory = '';
    }
  }
}
