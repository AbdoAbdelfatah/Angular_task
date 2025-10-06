import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  
} from '@angular/forms';
import { Product } from '../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnChanges {

   
  @Output() productAdded = new EventEmitter<Product>();

  //  Reactive Form  
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    price: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(1)
    ]),
    category: new FormControl('', [Validators.required])
  });

   
  ngOnInit(): void {
    console.log('ngOnInit run');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:', changes);
  }

   
  addProduct(): void {
    if (this.productForm.valid) {
      const newProduct: Product = {
        id: Date.now(),
        name: this.productForm.value.name!,
        price: this.productForm.value.price!,
        category: this.productForm.value.category!,
        isFavorite: false
      };

      this.productAdded.emit(newProduct);
      this.productForm.reset();
    } else {
      //show validation messages
      this.productForm.markAllAsTouched();
    }
  }
 
  get name() { return this.productForm.get('name'); }
  get price() { return this.productForm.get('price'); }
  get category() { return this.productForm.get('category'); }
}
