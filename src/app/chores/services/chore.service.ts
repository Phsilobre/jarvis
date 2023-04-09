import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chore } from 'src/app/models/chore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChoreService {

  getAllChores(): Observable<Chore[]> {
    let url = environment.vision + 'chores';
    // Mock :
    // url = '/assets/mocks/getChores.json';


    return this.httpClient.get<Chore[]>(url);
  }

  constructor(public httpClient: HttpClient) { }
}
