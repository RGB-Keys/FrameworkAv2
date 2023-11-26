import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  public formCadastro:FormGroup;

  validation:string=''

  constructor(private fb:FormBuilder, private toast:ToastrService){
    this.formCadastro = this.criarFormCadastro();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public criarFormCadastro():FormGroup{
    return this.fb.group({
      email:[""],
      nome:[""],
      senha:[""]
    })
  }

  
  validar(){
    const { nome, senha , email } = this.formCadastro.value;

    const validacao = nome != '' && senha != '' && email != '';

    if(validacao){
      this.validation = `Olá, ${nome}, seu cadastro foi realizado com sucesso.`
    } else {
      this.validation = `Olá, informe os campos corretamente.`
    }
  }

}
