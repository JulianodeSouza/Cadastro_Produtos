import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public alertSuccess(msg: string) {
    Swal.fire({
      title: msg,
      timer: 2000,
      icon: "success",
      showConfirmButton: false,
      timerProgressBar: true,
    });
  }
}
