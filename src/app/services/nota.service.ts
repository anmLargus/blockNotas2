import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nota } from '../models/nota';

const apiUrl = "http://localhost:3000/notas"

const httpOptions = {
  headers: new HttpHeaders( {'Content-type': 'application/json'} )
}

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  constructor( private http: HttpClient ) { }

  getAll(): Observable<Nota[]> {
    return this.http.get<Nota[]>(apiUrl)
  }

  getOne(id: number): Observable<Nota> {
    return this.http.get<Nota>(`${apiUrl}/${id}`);
  }

  add(nota: Nota): Observable<Nota> {
    return this.http.post<Nota>(apiUrl, nota, httpOptions);
  }

  update(nota: Nota): Observable<Nota> {
    const url = `${apiUrl}/${nota.id}`;
    return this.http.put<Nota>(url, nota, httpOptions);
  }

  deleteOne(nota: Nota): Observable<Nota> {
    return this.http.delete<Nota>(`${apiUrl}/${nota.id}`);
  }
}
