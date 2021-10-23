import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})

export class EstudianteListComponent implements OnInit {
  
  Estudiante:any = [];

  constructor(private apiService: ApiService) { 
    this.readEstudiante();
  }

  ngOnInit() {}

  readEstudiante(){
    this.apiService.getEstudiantes().subscribe((data) => {
     this.Estudiante = data;
    })    
  }

  removeEstudiante(estudiante, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteEstudiante(estudiante._id).subscribe((data) => {
          this.Estudiante.splice(index, 1);
        }
      )    
    }
  }

}