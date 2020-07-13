import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  controlador: string;

  constructor(private http: HttpClient) { }

  get(): Observable<any>{
      return this.http.get(`${environment.rutaApi}${this.controlador}`);
  }

  post(body: any): Observable<any>{
    return this.http.post(`${environment.rutaApi}${this.controlador}`, body);
  }
}
