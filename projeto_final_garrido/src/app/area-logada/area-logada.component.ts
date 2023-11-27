import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-area-logada',
  template: `
  <div *ngIf="usuarioAutenticado">
    <p>Bem-vindo! E-mail: {{ email }}</p>
  </div>
`,
  styleUrls: ['./area-logada.component.css']
})
export class AreaLogadaComponent {
  @Input() usuarioAutenticado: boolean = false;
  @Input() email: string = '';
}
