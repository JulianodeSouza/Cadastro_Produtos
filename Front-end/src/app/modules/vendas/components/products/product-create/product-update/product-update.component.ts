import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/core/service/alert.service';
import { ProductService } from 'src/app/core/service/product.service';
import { Product } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  public product: Product;
  
  public productsForm: FormGroup;

  

  constructor(
    private ProductService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private route: ActivatedRoute
  ) {
    this.productsForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [null, Validators.required]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.ProductService.readById(id).subscribe(product => {
      this.product = product;
    })
  }

  // Editar Produtos
  updateProducts(): void {
    this.ProductService.update(this.product).subscribe(() => {
      this.alert.alertSuccess("Produto alterado com sucesso!");
      this.router.navigate(['/products']);
    });
  };

  cancel() {
    this.router.navigate(['/products']);
  }

}
