import { Component } from '@angular/core';

@Component({
  selector: 'song',
  template: `<h1>Primera cancion</h1>`,
})

export class Song {
  constructor() {
    console.log("Cancion cargada");
  }
}
