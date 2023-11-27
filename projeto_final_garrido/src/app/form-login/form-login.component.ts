import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  template: `
    <div *ngIf="!usuarioAutenticado; else areaLogada">
      <h2>Formulário de Login</h2>
      <label for="email">E-mail:</label>
      <input type="email" id="email" [(ngModel)]="email" />

      <label for="senha">Senha:</label>
      <input type="password" id="senha" [(ngModel)]="senha" />

      <button (click)="validar()">Fazer Login</button>
    </div>

    <ng-template #areaLogada>
      <app-area-logada [usuarioAutenticado]="usuarioAutenticado" [email]="email"></app-area-logada>
    </ng-template>
  `,
})


export class FormLoginComponent {

  usuarioAutenticado: boolean = false;
  email: string = '';
  senha: string = '';

  validar(){
    const validacao = this.email != '' && this.senha != '';

    if(validacao){
      this.usuarioAutenticado = true;
    } else {
      this.usuarioAutenticado = false;
    }
  }

}
