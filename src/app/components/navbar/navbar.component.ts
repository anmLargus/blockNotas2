import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isMenuCollapsed = true;

  public isLogged = false;

  constructor( private auth: AuthService , private router: Router ) { }

  ngOnInit(): void {
    this.isLogged = this.auth.isLogged();
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl("/");
    // TODO: MEJORAR EL COMPORTAMIENTO DE LOGOUT
  }

}
