import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  loginError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  enviarFormulario(): void {
    if (this.myForm.invalid) {
      return;
    }

    const { username, password } = this.myForm.value;

    this.authService.login(username, password).subscribe({
      next: (response) => {
        // Guardamos el token y el rol en el localStorage
        this.authService.saveUserData({ token: response.token, role: response.role });

        // Redirigimos según el rol del usuario
        this.redirectBasedOnRole(response.role);
      },
      error: (error) => {
        console.error('Error al iniciar sesión:', error);
        this.loginError = true;
      },
    });
  }

  redirectBasedOnRole(role: string): void {
    if (role === 'superadmin') {
      this.router.navigate(['/panelAdminSuperUser']);
    } else if (role === 'admin') {
      this.router.navigate(['/panelAdmin']);
    } else {
      console.error('Rol desconocido');
      this.router.navigate(['/login']);
    }
  }
}
