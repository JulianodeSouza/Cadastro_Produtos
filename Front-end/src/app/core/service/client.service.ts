import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/clients.model';
import { AlertService } from './alert.service';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private UrlBackEnd: string = "http://localhost:3001/clients"

  isError: boolean = false

  constructor(private http: HttpClient, private alertService: AlertService) { }

  // Método para criar cadastro de clientes
  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.UrlBackEnd, client).pipe(
      map(obj => obj),
      catchError(e => this.errorHendler(e))
    );
  };

  // Método para atualização da tabela de visualização
  readClients(): Observable<Array<Client>> {
    return this.http.get<Array<Client>>(this.UrlBackEnd).pipe(
      map(obj => obj),
      catchError(e => this.errorHendler(e))
    );
  };

  // Método para deletar clientes
  deleteId(id: number): Observable<Object> {
    const UrlBackEnd = `${this.UrlBackEnd}/${id}`
    return this.http.delete(UrlBackEnd).pipe(
      map(obj => obj),
      catchError(e => this.errorHendler(e))
    );
  };

  // Método para editar clientes
  update(client: Client): Observable<Client> {
    const url =`${this.UrlBackEnd}/${client.id}`
    return this.http.put<Client>(url, client).pipe(
      map(obj => obj),
      catchError(e => this.errorHendler(e))
    );
  };

  // Busca os clientes pelo ID
  readById(id:string): Observable<Client> {
    const UrlBackEnd = `${this.UrlBackEnd}/${id}`
    return this.http.get<Client>(UrlBackEnd).pipe(
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