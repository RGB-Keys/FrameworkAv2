import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponentComponent } from './contador-component/contador-component.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';

const routes: Routes = [
  {path: 'contador', component: ContadorComponentComponent},
  {path:'cadastro', component:FormCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
