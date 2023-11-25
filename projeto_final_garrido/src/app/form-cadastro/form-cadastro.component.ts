import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  public formLogin:FormGroup;

  constructor(private fb:FormBuilder, private route:Router, private toast:ToastrService){
    this.formLogin = this.criarFormLogin();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public criarFormLogin():FormGroup{
    return this.fb.group({
      username:["", [Validators.required, Validators.minLength(6)]],
      password:["", [Validators.required, Validators.minLength(6)]]
    })
  }

  public isFormControlInvalid(controlName: string):boolean{
    return !!(this.formLogin.get(controlName)?.invalid && this.formLogin.get(controlName)?.touched)
  }

}
