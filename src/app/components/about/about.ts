import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  enviaFormularioService = inject(EnviaFormulario);
  name = "Luis Carlos"
  @Input("name") minhaPropDeOutroComponent!: string;
  @Output() emitindoValorName = new EventEmitter<string>();

  submit(event: any){
    this.emitindoValorName.emit(this.name)
    this.enviaFormularioService.enviaDadosParaBackend(event);
  }
}
