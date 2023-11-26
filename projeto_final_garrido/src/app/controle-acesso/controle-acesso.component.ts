import { Component } from '@angular/core';

@Component({
  selector: 'app-controle-acesso',
  templateUrl: './controle-acesso.component.html',
  styleUrls: ['./controle-acesso.component.css']
})
export class ControleAcessoComponent {
  role:string=''
  administrador(){
    this.role = 'administrador'
  }
  colaborador(){
    this.role = 'colaborador'
  }
  usuario(){
    this.role = 'usuario'
  }
}
