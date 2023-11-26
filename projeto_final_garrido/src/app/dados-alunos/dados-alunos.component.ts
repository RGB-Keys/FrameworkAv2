import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';


@Component({
  selector: 'app-dados-alunos',
  templateUrl: './dados-alunos.component.html',
  styleUrls: ['./dados-alunos.component.css']
})
export class DadosAlunosComponent implements OnInit {
dados: any;

  constructor(private apiService: AlunosService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(data => {
      this.dados = data;
      for (const alunos of this.dados) {
        var quantidade = Object.values(alunos.rendimentoEscolar).length
        alunos.media = Object.values(alunos.rendimentoEscolar)
      }
    })
  }
}
