import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { AuthService } from '../services/auth.service';

/*
    username: mor_2314
    password: 83r5^_
*/
@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatCardModule, MatInputModule],
  templateUrl: './signin-form.component.html',
  styleUrl: './signin-form.component.scss'
})
export class SigninFormComponent {
  user = new FormBuilder().nonNullable.group({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(4)]),
  })
  asyncErrors?: string;
  
  constructor(private authService: AuthService, private dialogRef: DialogRef) {}
  
  get name() {
    return this.user.get('name');
  }
  get nameErrors() {
    const errors = this.name?.errors;
    return errors ? this.extractErrors(errors) : '';
  }
  get password() {
    return this.user.get('password');
  }
  get passwordErrors() {
    const errors = this.password?.errors;
    return errors ? this.extractErrors(errors) : '';
  }
  extractErrors(errors: ValidationErrors): string {
    const requiredError = `${errors?.['required'] ? 'Field is required' : ''}`;
    const minLengthError = `${errors?.['minlength'] ? `Min length: ${errors?.['minlength'].requiredLength}` : ''}`;
    return `${requiredError} ${minLengthError}`;
  }
  async submit() {
    const { valid, value: { name, password } } = this.user;
    if (valid && name && password) {
      this.asyncErrors = '';
      try {
        await this.authService.login(name.trim(), password.trim());
        if (this.authService.isAuthenticated())
            this.close();
      } catch (e) {
        this.asyncErrors = String(e);
      }
    }
  }
  close() {
    this.dialogRef.close();
  }
}
