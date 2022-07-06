import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

const LOGIN_ENDPOINT = "http://localhost:8082/login";

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
          if(res?.jwtToken) {
            localStorage.setItem(TOKEN_KEY, res.jwtToken);
            
          } 
          console.log("token: " + this.getToken())
          return true;
        } catch (error) {
          return false;
        }
      }))
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    console.log("removido el token")
  }

  isLogged(): boolean {
    // Debe chequearse que exista el token en el localStorage y tambien chequear claims
    return localStorage.getItem(TOKEN_KEY) !== null;
  }

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }
  
}
