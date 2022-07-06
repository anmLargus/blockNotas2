import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.scss']
})
export class ReadmeComponent implements OnInit {

  constructor( private auth: AuthService ) { }

  ngOnInit(): void {
    console.log("Esta logueado?: " + this.auth.isLogged());
  }

  logout() {
    console.log("apretó logout");
    this.auth.logout();
  }

}
