import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { KnownMeal } from 'src/app/models/knownMeals';
import { Meal } from 'src/app/models/meal';

@Component({
  selector: 'app-ecran-ajout-repas',
  templateUrl: './ecran-ajout-repas.component.html',
  styleUrls: ['./ecran-ajout-repas.component.css']
})
export class EcranAjoutRepasComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EcranAjoutRepasComponent>) {}
  
  nouveauRepas: KnownMeal = {
    id: '-1',
    title: ''
  };

  onValider(): void {
    this.dialogRef.close(this.nouveauRepas);
  }

  onAnnuler(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
