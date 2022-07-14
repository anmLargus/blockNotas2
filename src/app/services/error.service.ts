import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  show(message: string) {
    alert("Ocurrió un error (ver consola para más detalle)");
    console.log(message);
  }

}
