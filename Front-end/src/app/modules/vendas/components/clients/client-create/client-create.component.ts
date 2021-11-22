import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/core/service/client.service';
import { Client } from 'src/app/shared/models/clients.model';


@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {

  public client: Client = {
    name: '',
    CPF: null,
    address: '',
    date: null
  };

  public formClients: FormGroup;

  constructor(private ClientService: ClientService, private router: Router, private formBuilder: FormBuilder) {
    this.formClients = this.formBuilder.group({
      name: ['' , Validators.required],
      CPF: ['' , Validators.required],
      address: ['' , Validators.required],
      nascimento: ['' , Validators.required],
    })
   }

  ngOnInit(): void {
  }

  // Finalizar cadastro de clientes
  cadastrarClientes(): void {
    this.ClientService.createClient(this.client).subscribe(() => {
      this.router.navigate(['/clients'])
    })
  };

  Voltar(): void {
    this.router.navigate(['/clients'])
  }

};
