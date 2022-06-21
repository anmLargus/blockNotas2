import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from 'src/app/models/nota';
import { NotaService } from 'src/app/services/nota.service';

@Component({
  selector: 'app-edit-nota',
  templateUrl: './edit-nota.component.html',
  styleUrls: ['./edit-nota.component.scss']
})
export class EditNotaComponent implements OnInit {

  nota: Nota = new Nota();
  id: number = 0;

  constructor( private notaService: NotaService , private rutaActiva: ActivatedRoute , private router: Router ) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params['id'];
    this.notaService.getOne(this.id).subscribe( ( data: Nota ) => { this.nota = data } ) ;
  }

  edit(notaEditada: Nota) {
    this.notaService.update(notaEditada).subscribe();
    this.router.navigate([''])
  }


}
