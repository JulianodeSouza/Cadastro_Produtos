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
  };

  // public error(msg: string) {
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: 'Something went wrong!',
  //   })
  // }



  public alertDelete(msg: string) {
    Swal.fire({
      title: msg,
      text: "Esta ação não poderá ser desfeita",
      icon: "warning",
    }).then(function (isConfirm) {
      if (isConfirm) {
        Swal.fire({
          title: "Excluído com sucesso",
          timer: 2000,
          icon: "success",
          showConfirmButton: false,
          timerProgressBar: true,
        })
      } else {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    })
  }

  

}




