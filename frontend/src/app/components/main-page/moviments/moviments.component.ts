import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-moviments',
  templateUrl: './moviments.component.html',
  styleUrls: ['./moviments.component.css']
})
export class MovimentsComponent {

  constructor(private titleService:Title){
    this.titleService.setTitle('Movimentos')
  }
}
