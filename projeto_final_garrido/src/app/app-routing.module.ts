import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponentComponent } from './contador-component/contador-component.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { DadosAlunosComponent } from './dados-alunos/dados-alunos.component';

const routes: Routes = [
  {path: 'contador', component: ContadorComponentComponent},
  {path:'lista', component:ListItemsComponent},
  {path:'cadastro', component:FormCadastroComponent},
  {path:'alunos', component:DadosAlunosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
