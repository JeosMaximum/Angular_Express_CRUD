import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EstudianteCreateComponent } from './components/estudiante-create/estudiante-create.component';
import { EstudianteListComponent } from './components/estudiante-list/estudiante-list.component';
import { EstudianteEditComponent } from './components/estudiante-edit/estudiante-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteCreateComponent,
    EstudianteListComponent,
    EstudianteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }