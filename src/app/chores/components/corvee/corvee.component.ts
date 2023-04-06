import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Chore, ChoreCategory } from 'src/app/models/chore';

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
      const diffInDays: number = moment().diff(moment(this.chore.lastDone), 'days');
      console.log('DiffInDays: ', diffInDays);
      if (diffInDays === 0) {
        this.color = 'green';
      } else if (diffInDays < 3) {
        this.color = 'orange';
      } else {
        this.color = 'red';
      }
    }
  }

  onClick(): void {
    this.chore.lastDone = new Date();
    this.updateBorderColor();
    // TODO : mettre à jour dans le store, et à distance
  }
}

