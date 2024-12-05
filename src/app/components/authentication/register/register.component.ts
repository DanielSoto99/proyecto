import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/authregister';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm(): FormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  public enviarFormulario() {
    if (this.myForm.invalid) {
      Object.values(this.myForm.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }

    const formData = this.myForm.value;
    this.authService.register(formData).subscribe({
      next: (response) => {
        alert('El usuario se ha creado correctamente.');
        this.router.navigate(['/panelAdminSuperUser']); // Redirige al panel del superusuario
      },
      error: (error) => {
        console.error('Error al registrar el usuario:', error);
        alert('Hubo un error al crear el usuario. Por favor, inténtalo de nuevo.');
      },
    });
  }

  volver(): void {
    // Redirige al panel de superusuario
    this.router.navigate(['/panelAdminSuperUser']);
  }
}
