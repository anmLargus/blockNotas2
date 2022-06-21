import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Nota } from 'src/app/models/nota';

@Component({
  selector: 'app-form-nota',
  templateUrl: './form-nota.component.html',
  styleUrls: ['./form-nota.component.scss']
})
export class FormNotaComponent implements OnInit {

  @Input() nota: Nota = new Nota();
  @Input() receivedNota: Nota = new Nota(); // 
  @Output() enviarNota = new EventEmitter<Nota>()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.nota.id = this.receivedNota.id;
    this.nota.title = this.receivedNota.title;
    this.nota.body = this.receivedNota.body;
   
    this.enviarNota.emit(this.nota)
  }

}
