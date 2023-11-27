import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponentComponent } from './contador-component/contador-component.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { DadosAlunosComponent } from './dados-alunos/dados-alunos.component';
import { ControleAcessoComponent } from './controle-acesso/controle-acesso.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { AreaLogadaComponent } from './area-logada/area-logada.component';

const routes: Routes = [
  {path: 'contador', component: ContadorComponentComponent},
  {path:'lista', component:ListItemsComponent},
  {path:'cadastro', component:FormCadastroComponent},
  {path:'alunos', component:DadosAlunosComponent},
  {path:'controle',component:ControleAcessoComponent},
  {path:'pai',component: ComponentePaiComponent},
  {path:'login',component: FormLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
