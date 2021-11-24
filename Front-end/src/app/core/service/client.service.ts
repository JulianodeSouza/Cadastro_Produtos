import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/clients.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private UrlBackEnd: string = "http://localhost:3001/clients"

  isError: boolean = false

  constructor(private http: HttpClient) { }

  // Método para criar cadastro de clientes
  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.UrlBackEnd, client);
  };

  // Método para atualização da tabela de visualização
  readClients(): Observable<Array<Client>> {
    return this.http.get<Array<Client>>(this.UrlBackEnd);
  };

  // Método para deletar clientes
  deleteId(id: number): Observable<Object> {
    const UrlBackEnd = `${this.UrlBackEnd}/${id}`
    return this.http.delete(UrlBackEnd);
  };

  // Método para editar clientes
  update(client: Client): Observable<Client> {
    const url =`${this.UrlBackEnd}/${client.id}`
    return this.http.put<Client>(url, client);
  };

  // Busca os clientes pelo ID
  readById(id:string): Observable<Client> {
    const UrlBackEnd = `${this.UrlBackEnd}/${id}`
    return this.http.get<Client>(UrlBackEnd);    
  };

  // Mensagem de Erro
  errorHandler(e: any): void {
    
  }
}