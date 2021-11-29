import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../../shared/models/products.model';
import { AlertService } from './alert.service';



@Injectable({
  providedIn: 'root'
})
export class ProductService {


  UrlBackEnd ="http://localhost:3001/products"


  constructor(private http: HttpClient, private alertService: AlertService) { }

  // Método para criar produtos
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.UrlBackEnd, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHendler(e))
    );
  };

  // Método para atualização da tabela de visualização
  readProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.UrlBackEnd).pipe(
      map(obj => obj),
      catchError(e => this.errorHendler(e))
    );
  };

  // Método para deletar produtos
  deleteId(id: number): Observable<Object> {
    const UrlBackEnd = `${this.UrlBackEnd}/${id}`
    return this.http.delete(UrlBackEnd).pipe(
      map(obj => obj),
      catchError(e => this.errorHendler(e))
    );
  };

  // Busca os produtos na tela de edição pelo ID
  readById(id: string): Observable<Product> {
    const UrlBackEnd = `${this.UrlBackEnd}/${id}`
    return this.http.get<Product>(UrlBackEnd).pipe(
      map(obj => obj),
      catchError(e => this.errorHendler(e))
    );
  };

  // Método para editar produtos
  update(product: Product): Observable<Product> {
    const url = `${this.UrlBackEnd}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHendler(e))
    );
  };

   // Mensagem de erro
   errorHendler(e: any): Observable<any> {
    console.log(e);    
    this.alertService.alertError("Não foi possível concluir a ação. Contacte o suporte!");
    return EMPTY
  };
}