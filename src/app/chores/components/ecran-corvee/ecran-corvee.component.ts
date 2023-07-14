import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngxs/store';
import { ALL_CHORES_CATEGORIES, ALL_CHORES_CATEGORIES_LABEL, Chore, ChoreCategory } from 'src/app/models/chore';
import { ChoresAction } from 'src/app/ngrx/chores/chores.action';
import { ChoresState } from 'src/app/ngrx/chores/chores.state';

@Component({
  selector: 'app-ecran-corvee',
  templateUrl: './ecran-corvee.component.html',
  styleUrls: ['./ecran-corvee.component.css']
})
export class EcranCorveeComponent implements OnInit {

  chore: Chore;
  categories = ALL_CHORES_CATEGORIES_LABEL;

  frequences = [
    { 'label': 'Toutes les semaines', 'value': 7 },
    { 'label': 'Toutes les 2 semaines', 'value': 14 },
    { 'label': 'Toutes les 3 semaines', 'value': 21 },
    { 'label': 'Tous les mois', 'value': 30 },
    { 'label': 'Tous les 2 mois', 'value': 60 },
    { 'label': 'Tous les trimestres', 'value': 90 },
    { 'label': 'Tous les semestres', 'value': 180 },
  ]

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.chore = this.stores.selectSnapshot(ChoresState.getAllChores).find((x: Chore) => x._id === params['corveeId']);
    });
  }

  onBack(): void {
    this.locService.back();
  }

  onDelete(): void {
    // TODO : ouvrir une modale de confirmation, puis appel au service de suppression
  }

  onChangeFrequence(frequence :number): void {
    const chore = {...this.chore, frequency: frequence};
    this.stores.dispatch(new ChoresAction.UpdateOne(chore))
  }

  onChangeCategorie(categorie: ChoreCategory): void {
    const chore = {...this.chore, category: categorie};
    this.stores.dispatch(new ChoresAction.UpdateOne(chore))
  }

  constructor(private locService: Location, private route: ActivatedRoute, private stores: Store) {}

}
