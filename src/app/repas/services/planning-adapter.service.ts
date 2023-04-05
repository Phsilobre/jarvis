import { Injectable } from '@angular/core';
import { Meal } from 'src/app/models/meal';
import { Planning } from 'src/app/models/planning';

@Injectable({
  providedIn: 'root'
})
export class PlanningAdapterService {

  mealsToPlannings(meals: Meal[]): Planning[] {
    return meals.map((meal: Meal, index: number) => (new Planning(
      -1,
      new Date(), //TODO
      index % 2 === 0 ? 'L' : 'D',
      meal.id
    )));
  }

  constructor() { }
}
