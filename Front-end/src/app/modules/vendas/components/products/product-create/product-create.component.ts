import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/products.model';
import { ProductService } from 'src/app/core/service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  public product: Product = {
    name: '',
    price: null
  };

  public formProducts: FormGroup;

  constructor(private ProductService: ProductService, private router: Router, private formBuilder: FormBuilder) {
    this.formProducts = this.formBuilder.group({
      name: ['' , Validators.required],
      price: ['' , Validators.required]
    })
   }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.ProductService.create(this.product).subscribe(() => {
    
      this.router.navigate(['/products'])
    })
  };
  cancel(): void {
    this.router.navigate(['/products'])
  }

}
