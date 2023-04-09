import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChoreService } from '../../services/chore.service';
import { Location } from '@angular/common';
import { Chore, ALL_CHORES_CATEGORIES, ChoreCategory } from 'src/app/models/chore';
import * as moment from 'moment';

@Component({
  selector: 'j-ecran-corvees',
  templateUrl: './ecran-corvees.component.html',
  styleUrls: ['./ecran-corvees.component.css']
})
export class EcranCorveesComponent implements OnInit {

  chores: Chore[] = [];
  choresByDate: Chore[] = [];

  categories: ChoreCategory[] = ALL_CHORES_CATEGORIES;
  triAlpha: boolean = false;
  triPieces: boolean = true;
  triDate: boolean = false;
  reverse: boolean = false;

  onBack(): void {
    this.locService.back();
  }

  ngOnInit(): void {

    this.choreService.getAllChores().subscribe((chores: Chore[]): void => {
      this.chores = chores;
      /* Verrue à améliorer */
      this.chores.forEach((chore: Chore) => chore.lastDone = new Date(chore.lastDone));
      this.choresByDate = [...this.chores].sort((a, b): number => a.lastDone.getTime() - b.lastDone.getTime());
      console.log('Length : ', this.choresByDate.length);
      
    })

  }

  getChoresByCategory(category: ChoreCategory): Chore[] {
    return this.chores.filter((x: Chore) => x.category === category);
  }

  getChoresByDate(): Chore[] {
    return this.reverse ? this.getChoresByDateReverse() : [...this.chores].sort((a, b): number => a.lastDone.getTime() - b.lastDone.getTime());
  }

  getChoresByDateReverse(): Chore[] {
    return [...this.chores].sort((a, b): number => b.lastDone.getTime() - a.lastDone.getTime());
  }

  getChoresByAlpha(): Chore[] {
    return this.reverse ? this.getChoresByAlphaReverse() : [...this.chores].sort((a, b): number => a.name.localeCompare(b.name));
  }

  getChoresByAlphaReverse(): Chore[] {
    return [...this.chores].sort((a, b): number => b.name.localeCompare(a.name));
  }

  trierParAlphabetique(): void {
    this.reverse = this.triAlpha;
    this.triPieces = false;
    this.triDate = false;
    this.triAlpha = true;
  }

  trierParPieces(): void {
    // this.reverse = this.triPieces;
    this.triDate = false;
    this.triAlpha = false;
    this.triPieces = true;
  }

  trierParDate(): void {
    this.reverse = this.triDate;
    this.triAlpha = false;
    this.triPieces = false;
    this.triDate = true;
  }

  test(): void {
    console.log('Nombre de corvees : ', this.chores.length);
    console.log('Nombre de corvees par alpha: ', this.getChoresByAlpha().length);
    console.log('Nombre de corvees par date: ', this.getChoresByDate().length);

  }


  constructor(private locService : Location, private stores: Store, private choreService: ChoreService) { }

}
