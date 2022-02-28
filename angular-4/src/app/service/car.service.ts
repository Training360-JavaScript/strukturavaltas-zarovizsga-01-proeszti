import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = environment.apiUrl;
  entityName: string = 'constructions';
  constructor(
    private http: HttpClient,
  ) { }
  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}${this.entityName}/${id}`);
  }


  add(car: Car): Observable<any> {
    return this.http.post<Car<any>>(this.apiUrl, car);
  }

  update(car: Car): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${car.id}`, car);
  }

  remove(car: Car): Observable<any> {
    return this.http.delete(${ this.apiUrl } / ${ id });
  }
}
