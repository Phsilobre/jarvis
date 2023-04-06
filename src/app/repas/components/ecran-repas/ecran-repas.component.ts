import { Component, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meal, FullPlanning } from 'src/app/models/meal';
import { select, Store } from '@ngrx/store';
import * as RepasActions from 'src/app/ngrx/meals/meals.action';
import * as fromRepas from 'src/app/ngrx/meals/meals.state';
import { MenuLink } from 'src/app/models/menu-lien';
import { AppRepasParameters } from 'src/app/models/app-repas-parameters';
import { MatDialog } from '@angular/material/dialog';
import { EcranListeRepasConnusComponent } from '../ecran-liste-repas-connus/ecran-liste-repas-connus.component';
import { MealsService } from '../../services/meals.service';
import { PlanningService } from '../../services/planning.service';
import { PlanningAdapterService } from '../../services/planning-adapter.service';

@Component({
  selector: 'app-ecran-repas',
  templateUrl: './ecran-repas.component.html',
  styleUrls: ['./ecran-repas.component.css']
})
export class EcranRepasComponent implements OnInit {

  columnsToDisplay: string[] = ['repas', 'samedi', 'dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];
  
  isDisplayContextMenu: boolean = false;
  isDisplayContextMenuChange: boolean = false;
  
  planning: FullPlanning[] = []; //[0] = Planning des repas
  meals: Meal[] = []; // Tous les menus connus

  updatingMealNumber: number;
  updatingLunchDinner: string;
  contextMenuX: number;
  contextMenuY: number;

  isLoaded: boolean = false;

  contextMenuItemsBase: MenuLink[] = [
    {
      "title": "Changer le repas",
      "link": AppRepasParameters.EVENT_CHANGE_MEAL,
      "autoclose": false
    },
    {
      "title": "Détail du repas",
      "link": AppRepasParameters.EVENT_DETAIL_MEAL,
      "autoclose": true
    }
  ];
  contextMenuItemsChange: MenuLink[] = [
    {
      "title": "Je choisis",
      "link": AppRepasParameters.EVENT_CHANGE_MEAL_ME,
      "autoclose": true
    },
    {
      "title": "Au hasard",
      "link": AppRepasParameters.EVENT_CHANGE_MEAL_RDM,
      "autoclose": true
    }
  ];
  
  onBack(): void {
    this.locService.back();
  }

  onGenerateAllMeals(): void {
    const meals: Meal[] = this.getRandomMeals(14);
    // this.planningService.addPlannings()
    this.planning[0].updateAllMeals(meals);
  }

  isHighlightDay(dayNum: number): boolean {
    return (new Date().getDay() + 1) % 7 === dayNum;
  }

  openContextMenu(event: any, lunchDinner: string, dayNumber: number): void {
    this.contextMenuX = event.x;
    this.contextMenuY = event.y;
    this.updatingLunchDinner = lunchDinner;
    this.updatingMealNumber = dayNumber;
    this.isDisplayContextMenu = true;
  }

  handleMenuClick(event: any): void {
    switch(event.data) {
      case AppRepasParameters.EVENT_CHANGE_MEAL : 
        this.isDisplayContextMenuChange = true;
      break;
      case AppRepasParameters.EVENT_DETAIL_MEAL : 
      break;
      case AppRepasParameters.EVENT_CHANGE_MEAL_ME :
        this.openMealSelectionPopup();
      break;
      case AppRepasParameters.EVENT_CHANGE_MEAL_RDM :
        this.changeMeal(this.getRandomMeal());
      break;
      default: 
        console.error('Erreur, cas non pris en compte : ', event.data);
      break;
    }
  }

  openMealSelectionPopup(): void {
    let dialogRef = this.dialog.open(EcranListeRepasConnusComponent, {
      height: '300px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.changeMeal(result);
      };
    });
  }

  getRandomMeal(): Meal {
    return this.meals[Math.floor((Math.random() * this.meals.length))];
  }

  /**
   * Number of meals wanted.
   * @param nb Starts at 1, not 0
   */
  getRandomMeals(nb: number): Meal[] {

    const returnedMeals: Meal[] = [];
    for(let i: number = 1; i <= nb; i++) {
        returnedMeals.push(this.meals[Math.floor((Math.random() * this.meals.length))]);
    }
    return returnedMeals;
  }

  changeMeal(meal: Meal): void {
    if (this.updatingLunchDinner === 'l') {
      this.planning[0].updateLunch(meal, this.updatingMealNumber);
    } else {
      this.planning[0].updateDinner(meal, this.updatingMealNumber);
    }
  }

  @HostListener('document:click', ['$event.target'])
  documentClick(args: any): void {
    if (!args || !args.classList || (args && args.classList && !args.classList.contains('contextMenuBase') && args.classList.contains('autoclose'))) {
      this.isDisplayContextMenu = false;
      this.isDisplayContextMenuChange = false;
    }
  }

  ngOnInit(): void {
    if (!this.isLoaded) {
      this.isLoaded = true;

      this.planning[0] = new FullPlanning();
      this.planning[0].init();
      
      this.mealsService.loadMeals().subscribe((repas: Meal[]) => {
        this.stores.dispatch(RepasActions.Clear());
        this.stores.dispatch(RepasActions.AddMany({payload: repas}));
      });
      
      this.stores.pipe(select(fromRepas.getAllMeals)).subscribe((meals) => {
        this.meals = meals;

        // TODO : charger les repas, une seule fois, plutôt que de les re-générer
        /* if (meals.length > 0) {
          this.onGenerateAllMeals();
        }*/
      });
    }
  }

  constructor(private locService : Location, private stores: Store, private dialog: MatDialog, private mealsService: MealsService, private planningService: PlanningService, private readonly adapterPlanning: PlanningAdapterService) { }

}
