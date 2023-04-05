import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ChoreService } from '../../services/chore.service';
import { Location } from '@angular/common';
import { Chore } from 'src/app/models/chore';

@Component({
  selector: 'j-ecran-corvees',
  templateUrl: './ecran-corvees.component.html',
  styleUrls: ['./ecran-corvees.component.css']
})
export class EcranCorveesComponent implements OnInit {

  chores: Chore[] = [];

  onBack(): void {
    this.locService.back();
  }

  ngOnInit(): void {

    this.choreService.getAllChores().subscribe((chores: Chore[]): void => {
      this.chores = chores;
      console.log('Les corvees chargees : ', this.chores);
      
    })

  }


  constructor(private locService : Location, private stores: Store, private dialog: MatDialog, private choreService: ChoreService) { }

}
