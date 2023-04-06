import { Component, OnInit, Output } from '@angular/core';
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { select, Store } from '@ngrx/store';
import { Meal } from 'src/app/models/meal';
import * as fromMeals from 'src/app/ngrx/meals/meals.state';
import { MealsService } from '../../services/meals.service';
import { EcranAjoutRepasComponent } from '../ecran-ajout-repas/ecran-ajout-repas.component';
import * as RepasActions from 'src/app/ngrx/meals/meals.action';

@Component({
  selector: 'app-ecran-liste-repas-connus',
  templateUrl: './ecran-liste-repas-connus.component.html',
  styleUrls: ['./ecran-liste-repas-connus.component.css']
})
export class EcranListeRepasConnusComponent implements OnInit {

  repasSelectionne: Meal;
  meals: Meal[] = [];

  constructor(public dialogRef: MatDialogRef<EcranListeRepasConnusComponent>,
              public stores: Store,
              private dialog: MatDialog,
              private api: MealsService) { }

  cancel(): void {
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close(this.repasSelectionne);
  }

  ajouter(): void {
    let dialogRef = this.dialog.open(EcranAjoutRepasComponent, {
      height: '255px',
      width: '360px',
    });

    dialogRef.afterClosed().subscribe(nouveauRepas => {
      if (nouveauRepas) {
        this.api.addMeal(nouveauRepas).subscribe(result => {
          this.stores.dispatch(RepasActions.AddOne({payload: result}));
          this.repasSelectionne = result;
        });
      }
    });
  }

  ngOnInit(): void {
    this.stores.pipe(select(fromMeals.getAllMeals)).subscribe(meals => {
      this.meals = meals;
    });
  }

}
