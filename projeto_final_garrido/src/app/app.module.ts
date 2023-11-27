import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponentComponent } from './contador-component/contador-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ListItemsComponent } from './list-items/list-items.component';
import { DadosAlunosComponent } from './dados-alunos/dados-alunos.component';
import { ControleAcessoComponent } from './controle-acesso/controle-acesso.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { AreaLogadaComponent } from './area-logada/area-logada.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponentComponent,
    FormCadastroComponent,
    ListItemsComponent,
    DadosAlunosComponent,
    ControleAcessoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    FormLoginComponent,
    AreaLogadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
