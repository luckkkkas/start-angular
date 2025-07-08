import { Component, inject } from '@angular/core';
import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  meubooleano = false;
  enviaFormularioService = inject(EnviaFormulario);
  nome = "Lucas";
  idDeDentroDaclasse = 3;
  deveMostrarTitulo = false;
  listItem = ["banana","arroz","meat","orange","lemon","tortilhas","cadete"]

  atualizaBooleano(valor: boolean){
    this.meubooleano = valor;
  }

  submit(event: any){
    this.enviaFormularioService.enviaDadosParaBackend(event);
  }
}
