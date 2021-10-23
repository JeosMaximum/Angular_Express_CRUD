import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudianteCreateComponent } from './components/estudiante-create/estudiante-create.component';
import { EstudianteListComponent } from './components/estudiante-list/estudiante-list.component';
import { EstudianteEditComponent } from './components/estudiante-edit/estudiante-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-estudiante' },
  { path: 'create-estudiante', component: EstudianteCreateComponent },
  { path: 'edit-estudiante/:id', component: EstudianteEditComponent },
  { path: 'estudiantes-list', component: EstudianteListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }