import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnviarACodificarService } from 'src/app/services/enviar-acodificar.service';

@Component({
  selector: 'app-encoder',
  templateUrl: './encoder.component.html',
  styleUrls: ['./encoder.component.scss']
})
export class EncoderComponent implements OnInit {

  demo: string = "";
  form!: FormGroup;

  constructor( private code: EnviarACodificarService, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      palabra:["", [Validators.required]],
      algoritmo:["alguno"]
    })
  }

  verDemo() {
    this.code.pedirDemo().subscribe( data => { this.demo = data } );
    console.log(this.demo);
  }

  submit() {
    const {palabra , algoritmo} = this.form.value;
    this.code.enviarPalabra({palabra, algoritmo}).subscribe( res => {this.demo = res.palabraCodificada} );
  }

}
