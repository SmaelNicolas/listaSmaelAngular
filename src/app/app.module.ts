import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { OrganizacionComponent } from './components/organizacion/organizacion.component';

@NgModule({
  declarations: [AppComponent, ListaAlumnosComponent, OrganizacionComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
