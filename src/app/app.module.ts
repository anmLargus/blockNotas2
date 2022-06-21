import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './pages/error/error.component';
import { BlockNotasComponent } from './pages/block-notas/block-notas.component';
import { ReadmeComponent } from './pages/readme/readme.component';
import { Nota1Component } from './components/nota1/nota1.component';
import { DetalleNotaComponent } from './pages/detalle-nota/detalle-nota.component';
import { FormNotaComponent } from './components/form-nota/form-nota.component';
import { AddNotaComponent } from './pages/add-nota/add-nota.component';
import { EditNotaComponent } from './pages/edit-nota/edit-nota.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    BlockNotasComponent,
    ReadmeComponent,
    Nota1Component,
    DetalleNotaComponent,
    FormNotaComponent,
    AddNotaComponent,
    EditNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
