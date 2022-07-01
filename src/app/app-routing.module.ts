import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotaComponent } from './pages/add-nota/add-nota.component';
import { BlockNotasComponent } from './pages/block-notas/block-notas.component';
import { DetalleNotaComponent } from './pages/detalle-nota/detalle-nota.component';
import { EditNotaComponent } from './pages/edit-nota/edit-nota.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { ReadmeComponent } from './pages/readme/readme.component';

const routes: Routes = [
  { path: "" , redirectTo: "blockNotas", pathMatch: "full" },
  { path: "blockNotas" , component: BlockNotasComponent },
  { path: "readme" , component: ReadmeComponent },
  { path: "blockNotas/:id", component: DetalleNotaComponent},
  { path: "blockNotas/:id/editNota", component: EditNotaComponent},
  { path: "addNota", component: AddNotaComponent},
  { path: "login", component: LoginComponent}, //  , canActivate: [IsNotLoggedGuard]

  { path: "**", component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
