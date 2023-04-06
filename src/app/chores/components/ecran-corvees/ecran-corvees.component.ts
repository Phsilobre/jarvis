import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ChoreService } from '../../services/chore.service';
import { Location } from '@angular/common';
import { Chore, ALL_CHORES_CATEGORIES, ChoreCategory } from 'src/app/models/chore';

@Component({
  selector: 'j-ecran-corvees',
  templateUrl: './ecran-corvees.component.html',
  styleUrls: ['./ecran-corvees.component.css']
})
export class EcranCorveesComponent implements OnInit {

  chores: Chore[] = [];

  categories: ChoreCategory[] = ALL_CHORES_CATEGORIES;

  onBack(): void {
    this.locService.back();
  }

  ngOnInit(): void {

    this.choreService.getAllChores().subscribe((chores: Chore[]): void => {
      this.chores = chores;
    })

  }

  getChores(category: ChoreCategory): Chore[] {
    return this.chores.filter((x: Chore) => x.category === category);
  }


  constructor(private locService : Location, private stores: Store, private dialog: MatDialog, private choreService: ChoreService) { }

}
