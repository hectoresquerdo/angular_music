import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cancion } from '../cancion';
import { Canciones } from '../coleccion';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SongListService {

  constructor(private firestore: AngularFirestore) { }

  getCanciones(): Observable<Cancion[]> {
    return this.firestore.collection<Cancion>('canciones').valueChanges();
  }
}
