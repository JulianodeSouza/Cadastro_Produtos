import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/clients.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  UrlBackEnd = "http://localhost:3001/clients"

  constructor(private http: HttpClient) { }

  // Método para criar cadastro de clientes
  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.UrlBackEnd, client)
  }

  // Método para atualização da tabela de visualização
  readClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.UrlBackEnd)
  }

  // Método para deletar produtos
  deleteId(id: number): Observable<Object> {
    const UrlBackEnd = `${this.UrlBackEnd}/${id}`
    return this.http.delete(UrlBackEnd)
  }
}