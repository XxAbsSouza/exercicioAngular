import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteComponent } from "./components/cliente/cliente.component";
import { TarefasComponent } from './components/tarefas-component/tarefas-component.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [TarefasComponent,RouterOutlet, ClienteComponent]
})
export class AppComponent {
  title = 'service_1804';
}
