import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  template: `
  <h2>Componente Pai</h2>
  <app-componente-filho [listaItens]="itens"></app-componente-filho>
`})

export class ComponentePaiComponent {
  
  itens = ['Item 1', 'Item 2', 'Item 3'];

}

