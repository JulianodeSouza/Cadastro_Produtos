import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/core/service/alert.service';
import { ClientService } from 'src/app/core/service/client.service';
import { Client } from 'src/app/shared/models/clients.model';

@Component({
  selector: 'app-clients-update',
  templateUrl: './clients-update.component.html',
  styleUrls: ['./clients-update.component.scss']
})
export class ClientsUpdateComponent implements OnInit {

  public ClientsForm: FormGroup;

  public client: Client;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private route: ActivatedRoute
  ) {
    this.inicalizar();
  }

  public inicalizar(): void {
    this.client = {
      name: '',
      CPF: null,
      address: '',
      date: null
    };

    this.ClientsForm = this.formBuilder.group({
      name: ['', Validators.required],
      CPF: ['', Validators.required],
      address: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clientService.readById(id).subscribe(client => {
      this.client = client;
    });
  }

  // Editar clientes
  updateClientes(): void {
    this.clientService.update(this.client).subscribe(() => {
      this.alert.alertSuccess("Cadastro alterado com sucesso!");
      this.router.navigate(['/clients']);
    });
  };

  cancel(): void {
    this.router.navigate(['/clients']);
  };

}
