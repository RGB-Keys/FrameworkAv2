import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  marked:number[]=[]
  valor:string=''

  car: string[] = ["Andar de bicicleta", "Escalar mangueira", "Pular corda", "Correr na Jaqueira", "Caçar Tanajura"];
  delete(index:number){
    this.car.splice(index,1)
    let presence = this.marked.indexOf(index)
    if(presence!=-1){
      this.marked.splice(presence,1)
    }
  }
  done(index:number){
    let presence = this.marked.indexOf(index)
    if(presence===-1){
      this.marked.push(index)
    }
  }
  add(){
    this.car.push(this.valor)
  }
}
