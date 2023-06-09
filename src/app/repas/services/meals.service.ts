import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/models/meal';
import { environment } from 'src/environments/environment';
import * as RepasActions from 'src/app/ngrx/meals/meals.action';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  
  loadMeals(): Observable<Meal[]> {

    const url = environment.baseUrl + '/meals';

    return this.httpClient.get<Meal[]>(url);

  }

  addMeal(meal: Meal): Observable<any> {
    
    const url = environment.baseUrl + '/meals'

    return this.httpClient.post<Meal>(url, meal);
  }

  constructor(public httpClient: HttpClient) { }
}
