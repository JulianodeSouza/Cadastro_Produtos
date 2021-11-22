import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/core/service/client.service';
import { Client } from '../../models/clients.model';

@Component({
  selector: 'app-client-screen',
  templateUrl: './client-screen.component.html',
  styleUrls: ['./client-screen.component.scss']
})
export class ClientScreenComponent implements OnInit {

  constructor(private route: Router, private clientService: ClientService) { }

  clients: Client[];

  ngOnInit(): void {
  }


  // Ir para página de cadastro de clientes
  navigateToClientCrate(): void {
    this.route.navigate(["client/create"])
  }
  
  public consultarClientes() {
    this.clientService.readClients().subscribe(clients => {
      this.clients = clients;
      console.log(clients);
    });
    
  }



  // public consultarClientes() {
  //   this.ClientService.readClients().subscribe(clients => {
  //     this.clients = clients;
  //     console.log(clients);
  //   });
    
  // }


}
