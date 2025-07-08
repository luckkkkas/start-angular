import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'meu-primeiro-app';

  Logar(event: string){
    console.log(event)
  }
}
