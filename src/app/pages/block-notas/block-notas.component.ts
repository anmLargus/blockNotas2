import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nota } from 'src/app/models/nota';
import { AuthService } from 'src/app/services/auth.service';
import { NotaService } from 'src/app/services/nota.service';

@Component({
  selector: 'app-block-notas',
  templateUrl: './block-notas.component.html',
  styleUrls: ['./block-notas.component.scss']
})
export class BlockNotasComponent implements OnInit {

  notas: Nota[] = []; 
  notaActual: Nota = new Nota();  
  isLogged: boolean = false

  constructor(
    private notaService: NotaService ,
    private router: Router ,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.notaService.getAll().subscribe( data => {      
      this.notas = data // TODO: ORDENAR POR ID
    });

    this.isLogged = this.auth.isLogged();
  }

  gotoAdd() {
    this.router.navigate(['/addNota'])
  }

  view(nota: Nota) {
    //   
    this.notaActual = nota ;
    console.log(this.notaActual)  
    this.router.navigateByUrl(`/blockNotas/${nota.id}`) ;
  }

  edit(nota: Nota): void {
    console.log("BOTON EDIT")
    this.router.navigateByUrl(`/blockNotas/${nota.id}/editNota`);
  }

  delete(nota: Nota) {
    this.notaActual = nota ;
    this.notaService.deleteOne(nota).subscribe( ( ) => ( this.notas = this.notas.filter( (n) => n.id !== nota.id) ) );
  }

  mostrarMensaje() {
    alert("Para poder borrar primero debe Loguearse");
  }

 

}
