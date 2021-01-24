import { Component, OnInit } from '@angular/core';
import { Cancion } from '../../cancion';
import { SongListService } from '../../service/song-list.service';


@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css'],
})
export class CancionComponent implements OnInit {

  canciones: Cancion[];
  cancionSeleccionada!: Cancion;
  busqueda = '';


  constructor(private songService: SongListService) { }

  getCanciones(): void {
    this.songService.getCanciones().subscribe(canciones => this.canciones = canciones);
  }

  ngOnInit(): void {
    this.getCanciones();
  }
  onSelectCancion(cancion: Cancion): void {

    this.cancionSeleccionada = cancion;
  }

}
