import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Canciones } from '../../coleccion';
import { Cancion } from '../../cancion';
import * as moment from 'moment';


@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  @Input() cancion: Cancion;

  audioCancion = new Audio();
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];

  currentTime = "00:00";
  duration = "00:00";
  seek = 0;

  constructor() { }


  ngOnInit(): void {
  }

  streamObserver(url) {
    return new Observable(observer => {

      this.audioCancion.src = url;
      this.audioCancion.load();
      this.audioCancion.play();


      const handler = (e: Event) => {

        this.seek = this.audioCancion.currentTime;
        this.duration = this.timeFormat(this.audioCancion.duration);
        this.currentTime = this.timeFormat(this.audioCancion.currentTime);

      }
      this.addEvent(this.audioCancion, this.audioEvents, handler);
      return () => {
        this.audioCancion.pause();
        this.audioCancion.currentTime = 0;

        this.removeEvent(this.audioCancion, this.audioEvents, handler);
      }
    });
  }

  addEvent(obj, events, handler) {
    events.forEach(e => {
      obj.addEventListener(e, handler);
    });
  }

  removeEvent(obj, events, handler) {
    events.forEach(e => {
      obj.removeEventListener(e, handler);
    });
  }

  setSeekTo(e) {
    this.audioCancion.currentTime = e.target.value;
  }
  setVolume(e) {
    this.audioCancion.volume = e.target.value;
    console.log(e.target.value);
  }
  openFile(url) {

    this.streamObserver(url).subscribe(e => { });

  }
  play() {
    this.audioCancion.play();

  }
  stop() {
    this.audioCancion.pause();
    this.audioCancion.currentTime = 0;
  }
  pause() {
    this.audioCancion.pause();
  }
  timeFormat(time, format = "mm:ss") {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

}
