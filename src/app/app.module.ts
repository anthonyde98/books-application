//Modulos
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';

//Componentes
import { AppComponent } from './app.component';
import { CrearComponent } from './components/crear/crear.component';
import { EditarComponent } from './components/editar/editar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ListaComponent } from './components/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearComponent,
    EditarComponent,
    EliminarComponent,
    DetalleComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
