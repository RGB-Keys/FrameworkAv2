import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';


@Component({
  selector: 'app-dados-alunos',
  templateUrl: './dados-alunos.component.html',
  styleUrls: ['./dados-alunos.component.css']
})
export class DadosAlunosComponent implements OnInit {
dados: any[] = [];

constructor(private alunosService: AlunosService) {}

ngOnInit() {
  this.alunosService.getAlunos().subscribe((data) => {
    this.dados = data;
  });
}

calcula(rendimentoEscolar: any): number {
  if (rendimentoEscolar) {
    const notas = Object.values(rendimentoEscolar) as number[];
     if (notas.length > 0) {
      const soma = notas.reduce((acc, nota) => acc + nota, 0);
      return soma / notas.length
     }
  }
  return 0;
}
}
