import { Estudiante } from '../../model/Estudiante';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-estudiante-edit',
  templateUrl: './estudiante-edit.component.html',
  styleUrls: ['./estudiante-edit.component.css']
})

export class EstudianteEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  estudianteData: Estudiante[];
  EstudianteProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateEstudiante();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEstudiante(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      grado: ['', [Validators.required]],
      grupo: ['', [Validators.required]],
      materia: ['', [Validators.required]],
      calificacion: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getEstudiante(id) {
    this.apiService.getEstudiante(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        grado: data['grado'],
        grupo: data['grupo'],
        materia: data['materia'],
        calificacion: data['calificacion'],
      });
    });
  }

  updateEstudiante() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      grado: ['', [Validators.required]],
      grupo: ['', [Validators.required]],
      materia: ['', [Validators.required]],
      calificacion: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Estas seguro?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateEstudiante(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/estudiantes-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}