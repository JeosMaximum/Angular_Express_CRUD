import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-estudiante-create',
  templateUrl: './estudiante-create.component.html',
  styleUrls: ['./estudiante-create.component.css']
})

export class EstudianteCreateComponent implements OnInit {  
  submitted = false;
  estudianteForm: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.estudianteForm = this.fb.group({
      name: ['', [Validators.required]],
      grado: ['', [Validators.required]],
      grupo: ['', [Validators.required]],
      materia: ['', [Validators.required]],
      calificacion: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }



  // Choose designation with select dropdown
  updateProfile(e){
    this.estudianteForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.estudianteForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.estudianteForm.valid) {
      return false;
    } else {
      this.apiService.createEstudiante(this.estudianteForm.value).subscribe(
        (res) => {
          console.log('Estudiante successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/estudiantes-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}