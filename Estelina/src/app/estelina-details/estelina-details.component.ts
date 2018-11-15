import { Component, OnInit } from '@angular/core';
import { Estelina } from '../shared/model/estelina';

@Component({
  selector: 'app-estelina-details',
  templateUrl: './estelina-details.component.html',
  styleUrls: ['./estelina-details.component.css']
})
export class EstelinaDetailsComponent implements OnInit {

  constructor() { }
  Estelina: Estelina;
  ngOnInit() {
  }

}
