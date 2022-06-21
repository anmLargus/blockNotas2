import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from 'src/app/models/nota';
import { NotaService } from 'src/app/services/nota.service';

@Component({
  selector: 'app-detalle-nota',
  templateUrl: './detalle-nota.component.html',
  styleUrls: ['./detalle-nota.component.scss']
})
export class DetalleNotaComponent implements OnInit {

  id: number = 0;
  nota: Nota = new Nota();

  constructor( 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private notaService: NotaService 
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.notaService.getOne(this.id).subscribe( ( data: Nota ) => { this.nota = data } )
  }

    // Volver al inicio
    gotoPrincipal() {
      this.router.navigate([''])
    }

}
