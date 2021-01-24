import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancionComponent } from './components/cancion/cancion.component';
import { TestDBComponent } from './test-db/test-db.component';

const routes: Routes = [
  { path: 'canciones', component: CancionComponent },
  { path: 'testDB', component: TestDBComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
