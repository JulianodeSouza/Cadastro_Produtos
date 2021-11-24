import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/service/alert.service';
import { ClientService } from 'src/app/core/service/client.service';
import { Client } from 'src/app/shared/models/clients.model';


@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {

  public client: Client;

  public formClients: FormGroup;

  constructor(
    private ClientService: ClientService,
    private router: Router,
    private formBuilder: FormBuilder,
    private alert: AlertService,
  ) {
    this.inicalizar();  
  }

  ngOnInit(): void {
  }

  public inicalizar(): void {
    this.client = {
      name: '',
      CPF: null,
      address: '',
      date: null
    };

    this.formClients = this.formBuilder.group({
      name: ['', Validators.required],
      CPF: ['', Validators.required],
      address: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  // Finalizar cadastro de clientes
  cadastrarClientes(): void {
    this.ClientService.createClient(this.client).subscribe(() => {
      this.alert.alertSuccess("Cliente cadastrado com sucesso!");
      this.router.navigate(['/clients'])
    })
  };
  Voltar(): void {
    this.router.navigate(['/clients'])
  }

};
