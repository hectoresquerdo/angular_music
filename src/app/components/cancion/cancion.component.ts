import { Component, OnInit } from '@angular/core';
import { Cancion } from '../../cancion';
import { Canciones } from '../../coleccion';
import { ReproductorComponent } from '../reproductor/reproductor.component';



@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css'],
})
export class CancionComponent implements OnInit {

  canciones = Canciones;
  cancionSeleccionada!: Cancion;
  busqueda = '';


  constructor() { }

  ngOnInit(): void {

  }
  onSelectCancion(cancion: Cancion): void {

    this.cancionSeleccionada = cancion;
  }

}
