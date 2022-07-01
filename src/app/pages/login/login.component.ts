import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder ,
    private authService: AuthService , 
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      usuario:['', [Validators.required]],
      password:['',
        [
          Validators.required, 
          Validators.minLength(6), 
          Validators.maxLength(12), 
         // Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')    
        ]
      ]
    })
  }

  login() {
    console.log(this.form);

    const {usuario , password} = this.form.value;

    this.authService.login(usuario, password)
      .subscribe({
        next: (data:any) => { 
          console.log (data);
          if(data) {
            this.router.navigate(['/blockNotas']);// 
          } else {
            //Informar al usuario que no se pudo loguear
            console.log("No se pudo loguear");
            alert("No se pudo loguear");
          }        
        },
         error: e => { console.log(e) }  
      });
  }



}
