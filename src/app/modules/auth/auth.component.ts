import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators as v,
} from '@angular/forms';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  formAuth: FormGroup = new FormGroup({});

  route = inject(Router);

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  public builderForm() {
    this.formAuth = this.formBuilder.group({
      email: new FormControl('', [
        v.required,
        v.minLength(10),
        v.maxLength(40),
        v.email,
      ]),
      password: new FormControl('', [
        v.required,
        v.minLength(5),
        v.maxLength(20),
      ]),
    });
  }

  ngOnInit(): void {
    this.builderForm();
  }

  public submitForm() {
    const { email, password } = this.formAuth.value;

    this.authService.sendCredentials(email, password).subscribe(
      (response) => {
        this.route.navigate(['/', 'tracks']);
      },
      (err) => {
        console.log('Algo ocurrio mal', err);
      }
    );
  }
}
