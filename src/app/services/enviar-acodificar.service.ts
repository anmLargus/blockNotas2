import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Palabra } from '../models/palabra';

const apiUrl = "http://localhost:8082/encode";

const httpOptions = {
  headers: new HttpHeaders( {'Content-type': 'application/json'} )
}

@Injectable({
  providedIn: 'root'
})
export class EnviarACodificarService {

  constructor( private http: HttpClient ) { }

  pedirDemo() {
    return this.http.get(apiUrl, {responseType: 'text'} )    
  }

  enviarPalabra(palabra: Palabra): Observable<any> {
    return this.http.post<Palabra>(apiUrl, palabra, httpOptions)
      .pipe(map( (res: any) => {
        try {
          if(res?.palabraCodificada) {
            console.log("Ok, recibida la codificación")
          }
          return res;
        } catch (error) {
          return "Hubo un error"
        }
      } ))

  }


}
