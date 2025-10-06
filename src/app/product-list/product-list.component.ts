import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../types';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']  
})
export class ProductListComponent implements OnInit, OnChanges {

  
  @Input() products: Product[] = [];
  @Output() favoriteToggled = new EventEmitter<number>();
  @Output() productDeleted = new EventEmitter<number>();
  @Output() productUpdated = new EventEmitter<Product>();

   
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit run',this.products);
     
  }

   
  toggleFavorite(productId: number | undefined): void {
    if (productId) {
      this.favoriteToggled.emit(productId);
    }
  }

  deleteProduct(productId: number | undefined): void {
    if (productId) {
      this.productDeleted.emit(productId);
    }
  }

  updateProduct(product: Product): void {
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
