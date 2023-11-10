import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/models/meal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KnownMealService {

  loadKnownMeals(): Observable<Meal[]> {

    const url = environment.baseUrl + '/knownMeals';

    return this.httpClient.get<Meal[]>(url);

  }

  addKnownMeal(meal: Meal): Observable<any> {
    
    const url = environment.baseUrl + '/knownMeals'

    return this.httpClient.post<Meal>(url, meal);
  }

  constructor(public httpClient: HttpClient) { }
}
