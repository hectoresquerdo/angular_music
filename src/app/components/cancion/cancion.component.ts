import { Component, OnInit } from '@angular/core';
import { Cancion } from '../../cancion';
import { Canciones } from '../../coleccion';



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
    console.log(Canciones);
    this.cancionSeleccionada = cancion;
  }

}
