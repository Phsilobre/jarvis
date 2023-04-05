import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Planning } from 'src/app/models/planning';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  loadMeals(): Observable<Planning[]> {

    const url = environment.baseUrl + '/planning';

    return this.httpClient.get<Planning[]>(url);

  }

  addPlannings(plannings: Planning[]): Observable<any> {
    
    const url = environment.baseUrl + '/planning'

    return this.httpClient.post<Planning>(url, plannings);
  }

  constructor(public httpClient: HttpClient, private stores: Store) { }
}
