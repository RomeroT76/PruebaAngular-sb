import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { DemoComponent } from './app/components/demo/demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DemoComponent],
  template: `
    <h1>Hello Ups {{ name }}!</h1>
    <h2>{{funcion}}</h2>
    <h3>mi edad es {{edad}} años</h3>

    <ul>
      <li>
      <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
     </a>
      </li>
      <li><a target="_blank" href="https://google.com">
      google
    </a> 
    </li>
    <app-demo>
      
    </app-demo>
    </ul>
      
`,
})
export class App {
  name = 'Roberto';
  funcion = 'Estudiante';
  edad = '25';

}

bootstrapApplication(App);
