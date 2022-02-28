import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Drugs } from '../model/drugs';

@Injectable({
  providedIn: 'root'
})
export class DrugService {
  apiUrl: string = environment.apiUrl;
  entityName: string = 'drugs';
  constructor(private http: HttpClient,) { }
  getAll(): Observable<Drugs[]> {
    return this.http.get<Drugs[]>(`${this.apiUrl}${this.entityName}`);
  }
}
