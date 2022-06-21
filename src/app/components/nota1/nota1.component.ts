import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Nota } from 'src/app/models/nota';

@Component({
  selector: 'app-nota1',
  templateUrl: './nota1.component.html',
  styleUrls: ['./nota1.component.scss']
})
export class Nota1Component implements OnInit {

  @Input() nota: Nota = new Nota();  //notas[0];

  @Output() onDeleteNota: EventEmitter<Nota> = new EventEmitter();
  @Output() onViewNota: EventEmitter<Nota> = new EventEmitter();
  @Output() onEditNota: EventEmitter<Nota> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onView(nota: Nota) {
    this.onViewNota.emit(nota);
  }

  onEdit(nota: Nota) {
    this.onEditNota.emit(nota);
  }

  onDelete(nota: Nota) {
    this.onDeleteNota.emit(nota);
  }

}
