import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/service/alert.service';
import { ClientService } from 'src/app/core/service/client.service';
import { Client } from 'src/app/shared/models/clients.model';

@Component({
  selector: 'app-client-screen',
  templateUrl: './client-screen.component.html',
  styleUrls: ['./client-screen.component.scss']
})
export class ClientScreenComponent implements OnInit {

  public clients: Array<Client>;

  constructor(
    private route: Router,
    private clientService: ClientService,
    private alertService: AlertService
  ) {
    this.clients = [];
  }

  ngOnInit(): void {
    this.consultarClientes()
  }

  // Ir para página de cadastro de clientes
  navigateToClientCrate(): void {
    this.route.navigate(["client/create"])
  };

  // Atualizar tabela de clientes
  public consultarClientes() {
    this.clientService.readClients().subscribe(clients => {
      this.clients = clients;
      console.log(this.clients);
    }), err => {
      console.log(err);
    };
  };

  // Deletar Clientes
  public removerCliente(id: number) {
    this.clientService.deleteId(id).subscribe(() => {
      this.alertService.alertSuccess("Cadastro deletado com sucesso!")
      this.consultarClientes()
    }), err => {
      console.log(err);
    };
  };
}