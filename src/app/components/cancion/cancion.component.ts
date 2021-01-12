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

  constructor() { }

  ngOnInit(): void {
  }

}
