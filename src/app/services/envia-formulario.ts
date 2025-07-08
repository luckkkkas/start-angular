import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormulario {

  constructor() { }

  enviaDadosParaBackend(event: any) {
    console.log(event);
  }
}
