import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/service/product.service';
import { Product } from '../../models/products.model';


@Component({
  selector: 'app-product-screen',
  templateUrl: './product-screen.component.html',
  styleUrls: ['./product-screen.component.scss']
})
export class ProductScreenComponent implements OnInit {

  products: Product[]
 

  constructor(private route: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.consultarProdutos()
  }

  // Ir para página de criação de produtos
  public navegarProductCrate(): void {
    this.route.navigate(["products/create"])
  }

  // Atualizar tabela de visualização
  public consultarProdutos() {
    this.productService.readProducts().subscribe(products => {
      this.products = products;
      console.log(products);
    });
    
  }
    
}


