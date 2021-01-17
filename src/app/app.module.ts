import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CancionComponent } from './components/cancion/cancion.component';
import { CancionDetalleComponent } from './components/cancion-detalle/cancion-detalle.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { ReproductorComponent } from './components/reproductor/reproductor.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    CancionComponent,
    CancionDetalleComponent,
    FiltroPipe,
    ReproductorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatListModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
