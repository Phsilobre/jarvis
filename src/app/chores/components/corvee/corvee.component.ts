import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Chore } from 'src/app/models/chore';

@Component({
  selector: 'app-corvee',
  templateUrl: './corvee.component.html',
  styleUrls: ['./corvee.component.css']
})
export class CorveeComponent implements OnInit {

  @Input() chore: Chore = undefined;
  color: string = 'red';

  constructor() { }

  ngOnInit(): void {
    this.updateBorderColor();
  }

  updateBorderColor(): void {
    if (this.chore) {
      if (this.chore.category === 'LIVINGROOM') {
        this.chore.lastDone = new Date();
      }
      const diffInDays: number = moment(this.chore.lastDone).diff(moment(), 'days');
      console.log('Analyse de la date ', moment(this.chore.lastDone).toLocaleString());
      console.log('Diff de durée : ', moment(this.chore.lastDone).diff(moment(), 'days'));
      
      if (diffInDays < 0) {
        this.color = 'green';
      } else if (diffInDays < 3) {
        this.color = 'orange';
      } else {
        this.color = 'red';
      }
    }
  }
}
