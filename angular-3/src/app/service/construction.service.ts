import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Construction } from '../model/construction';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {
  apiUrl: string = environment.apiUrl;
  entityName: string = 'constructions';
  constructor(
    private http: HttpClient,
  ) { }
  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Construction> {
    return this.http.get<Construction>(`${this.apiUrl}${this.entityName}/${id}`);
  }


  add(construction: Construction): Observable<any> {
    return this.http.post<Observable<any>>(this.apiUrl, construction);
  }

  update(construction: Construction): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${construction.id}`, construction);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}`);
  }
}
