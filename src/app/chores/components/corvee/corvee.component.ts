import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Chore } from 'src/app/models/chore';
import { ChoreService } from '../../services/chore.service';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ChoresAction } from 'src/app/ngrx/chores/chores.action';

@Component({
  selector: 'app-corvee',
  templateUrl: './corvee.component.html',
  styleUrls: ['./corvee.component.css']
})
export class CorveeComponent implements OnInit {

  @Input() chore: Chore = undefined;
  color: string = 'red';

  constructor(private readonly router: Router, private readonly stores: Store) { }

  ngOnInit(): void {
    this.updateBorderColor();
  }

  updateBorderColor(): void {
    if (this.chore) {
      const diffInDays: number = moment().diff(moment(this.chore.lastDone), 'days');
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
    this.updateBorderColor();
    this.stores.dispatch(new ChoresAction.UpdateLastDone(this.chore));
  }

  onLongPress(): void {
    this.router.navigate(['corvee', this.chore._id]);
  }
}

