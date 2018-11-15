import { Component, OnInit } from '@angular/core';
import { Estelina } from '../shared/model/estelina';
import { EstelinaMock } from '../shared/estelina-mock';

@Component({
  selector: 'app-estelina',
  templateUrl: './estelina.component.html',
  styleUrls: ['./estelina.component.css']
})
export class EstelinaComponent implements OnInit {
 
  estelinaArr: Array<Estelina>;
  selectOrder: Estelina;
  constructor() { }

  ngOnInit() {
    this.estelinaArr = EstelinaMock;
  }
onSelect(estelina:Estelina):void{
this.selectOrder = estelina;

}
backToMenu (){
this.selectOrder= null;

}
}
