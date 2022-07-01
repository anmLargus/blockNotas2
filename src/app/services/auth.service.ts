import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

const LOGIN_ENDPOINT = "http://localhost:8081/login";

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor( private http: HttpClient ) { }

  login(usuario: string, clave: string): Observable<boolean> {
    return this.http.post( LOGIN_ENDPOINT, {usuario , clave}) // En el backend espera recibir con esos nombres
      .pipe(map( (res: any) => {
        try {
          if(res?.token) {
            localStorage.setItem(TOKEN_KEY, res.token);
          } 
          return true;
        } catch (error) {
          return false;
        }
      }))
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  isLogged(): boolean {
    // Debe chequearse que exista el token en el localStorage y tambien chequear claims
    return localStorage.getItem(TOKEN_KEY) !== null;
  }
  
}
