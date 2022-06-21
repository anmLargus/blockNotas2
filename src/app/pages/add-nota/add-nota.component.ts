import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nota } from 'src/app/models/nota';
import { NotaService } from 'src/app/services/nota.service';

@Component({
  selector: 'app-add-nota',
  templateUrl: './add-nota.component.html',
  styleUrls: ['./add-nota.component.scss']
})
export class AddNotaComponent implements OnInit {

  nota: Nota = new Nota();

  constructor( private notaService: NotaService , private router: Router ) { }

  ngOnInit(): void {
  }

  agregarNota(nota: Nota) {
    this.notaService.add(nota).subscribe();
    this.router.navigate([""]);
    
  }

}
