import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-test-db',
  templateUrl: './test-db.component.html',
  styleUrls: ['./test-db.component.css']
})
export class TestDBComponent implements OnInit {

  canciones: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.canciones = firestore.collection('canciones').valueChanges();
  }

  ngOnInit(): void {
  }

}
