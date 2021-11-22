import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/products.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  UrlBackEnd= "http://localhost:3001/products"


  constructor(private http: HttpClient) { }

  // Método para criar produtos
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.UrlBackEnd, product)
  }


  // Método para atualização da tabela de visualização
  readProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.UrlBackEnd)
  }

}
