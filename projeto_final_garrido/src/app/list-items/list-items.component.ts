import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {

  car = [ {
    id: 1,
    name: "Ferrari",
    model: "246 Dino",
    year: "1969 - 1974",
    annualvalue: "US$ 402,5 mil",
    image: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2010/03/18/24515/113467/ferrari_246_dino_gt_1968_1976_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1391996_o.jpg"
  },
  {
    id: 2,
    name: "Pontiac",
    model: "GTO",
    year: "1966 - 1967",
    annualvalue: "US$ 100 mil",
    image: "https://lartbr.com.br/wp-content/webp-express/webp-images/uploads/2022/12/14137A1B-9D06-4E88-97FF-F57BAAE3AEB2.jpeg.webp"
  },
  {
    id: 3,
    name: "Porsche ",
    model: "968",
    year: "1992 - 1995",
    annualvalue: "US$ 129 mil",
    image: "https://files.porsche.com/filestore/image/multimedia/none/rd-2014-porscheclassic-models-968-968-teaser/preview/38d35e78-7c75-11e4-bbba-001a64c55f5c;sI;twebp/porsche-preview.webp"
  },
  {
    id: 4,
    name: "Land Rover Defender",
    model: "90",
    year: "1991",
    annualvalue: "US$ 38 mil",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/2015_Land_Rover_Defender_90_XS_TD_2.2_Front.jpg"
  },
  {
    id: 5,
    name: "Mazda",
    model: "RX-7",
    year: "1983",
    annualvalue: "US$ 61,5 mil",
    image: "https://cdn.motor1.com/images/mgl/xqqyPv/s3/mazda-rx-7-1992.webp"
  },

  ];
}
