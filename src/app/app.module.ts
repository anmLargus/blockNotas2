import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { EncoderComponent } from './pages/encoder/encoder.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { HttpErrorInterceptor } from './services/http-error.interceptor';

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
    EditNotaComponent,
    NavbarComponent,
    LoginComponent,
    EncoderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
