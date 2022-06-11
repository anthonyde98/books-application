import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './components/crear/crear.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { EditarComponent } from './components/editar/editar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  {path: '', component: ListaComponent},
  {path: 'crear/:id', component: CrearComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'eliminar/:id', component: EliminarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
