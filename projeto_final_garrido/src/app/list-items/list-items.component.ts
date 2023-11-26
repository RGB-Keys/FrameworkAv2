import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {

  car: string[] = ["Ferrari 246 Dino", "Pontiac GTO", "Porsche 968", "Land Rover Defender", "Mazda RX-7 GS"];
  
}
