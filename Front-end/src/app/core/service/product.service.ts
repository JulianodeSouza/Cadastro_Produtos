import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/products.model';
import { AlertService } from './alert.service';



@Injectable({
  providedIn: 'root'
})
export class ProductService {


  UrlBackEnd ="http://localhost:3001/products"


  constructor(private http: HttpClient, private alert: AlertService) { }

  // Método para criar produtos
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.UrlBackEnd, product)
  };

  // Método para atualização da tabela de visualização
  readProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.UrlBackEnd)
  };

  // Método para deletar produtos
  deleteId(id: number): Observable<Object> {
    const UrlBackEnd = `${this.UrlBackEnd}/${id}`
    return this.http.delete(UrlBackEnd)
  };

  // Método para editar produtos
  update(product: Product): Observable<Product> {
    const urlBack = `${this.UrlBackEnd}/${product.id}`
    return this.http.put<Product>(urlBack, product)
  };

  // Busca os produtos na tela de edição pelo ID
  readById(id: string): Observable<Product> {
    const UrlBackEnd = `${this.UrlBackEnd}/${id}`
    return this.http.get<Product>(UrlBackEnd)
  };

  
}