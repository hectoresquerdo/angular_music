import { Component, OnInit } from '@angular/core';
import { Cancion } from '../../cancion';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css'],
})
export class CancionComponent implements OnInit {

  cancion: Cancion = {
    titulo: "Maximo exponente",
    autor: "Violadores del Verso",
    year: 1999,
    disc: "Genios",
    style: "hip-hop"
  }


  constructor() { }

  ngOnInit(): void {
  }

}
