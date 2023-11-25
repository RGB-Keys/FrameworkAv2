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

  constructor(private fb:FormBuilder, private toast:ToastrService){
    this.formCadastro = this.criarFormCadastro();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public criarFormCadastro():FormGroup{
    return this.fb.group({
      email:["", [Validators.required, Validators.minLength(10)]],
      username:["", [Validators.required, Validators.minLength(6)]],
      password:["", [Validators.required, Validators.minLength(6)]]
    })
  }

  public isFormControlInvalid(controlName: string):boolean{
    return !!(this.formCadastro.get(controlName)?.invalid && this.formCadastro.get(controlName)?.touched)
  }

  criarUsuario() {
    const { username, password } = this.formCadastro.value;

    const validacao = username == 'usuario' && password == 111111;

    if(validacao){
      this.toast.success(`Olá, ${username}, seu cadastro foi realizado com sucesso.`)
    } else {
      this.toast.error(`Olá, informe os campos corretamente.`)
    }
  }

}
