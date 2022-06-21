import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockNotasComponent } from './pages/block-notas/block-notas.component';
import { DetalleNotaComponent } from './pages/detalle-nota/detalle-nota.component';
import { ErrorComponent } from './pages/error/error.component';
import { ReadmeComponent } from './pages/readme/readme.component';

const routes: Routes = [
  { path: "" , redirectTo: "blockNotas", pathMatch: "full" },
  { path: "blockNotas" , component: BlockNotasComponent },
  { path: "readme" , component: ReadmeComponent },
  { path: "blockNotas/:id", component: DetalleNotaComponent},

  { path: "**", component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
