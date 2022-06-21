import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nota } from 'src/app/models/nota';
import { NotaService } from 'src/app/services/nota.service';

@Component({
  selector: 'app-block-notas',
  templateUrl: './block-notas.component.html',
  styleUrls: ['./block-notas.component.scss']
})
export class BlockNotasComponent implements OnInit {

  notas: Nota[] = []; 
  notaActual: Nota = new Nota();  

  constructor(
    private notaService: NotaService ,
    private router: Router ,
  ) { }

  ngOnInit(): void {
    this.notaService.getAll().subscribe( data => {      
      this.notas = data // TODO: ORDENAR POR ID
    })
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
    //this.router.navigateByUrl(`/principalNotas/${nota.id}/editNota`);
  }

  delete(nota: Nota) {
    this.notaActual = nota ;
    this.notaService.deleteOne(nota).subscribe( ( ) => ( this.notas = this.notas.filter( (n) => n.id !== nota.id) ) );
  }

}
