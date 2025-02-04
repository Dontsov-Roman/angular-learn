import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { DialogModule, DialogRef } from '@angular/cdk/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs';

import { AuthService } from '../services/auth/auth.service';
import { SnackService } from '../snack/snack.service';
import { SnackModule } from '../snack/snack.module';
import { MessageType } from '../snack/snack.types';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    DialogModule,
    SnackModule,
  ],
  templateUrl: './signin-form.component.html',
  styleUrl: './signin-form.component.scss'
})
export class SigninFormComponent {
  private mockedCreds = {
    username: 'mor_2314',
    password: '83r5^_'
  };
  disabled = false;
  user = new FormBuilder().nonNullable.group({
    name: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(3)],
      updateOn: 'submit',
    }),
    password: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'submit',
    }),
  })
  
  constructor(
    private authService: AuthService,
    private dialogRef: DialogRef,
    private snackService: SnackService,
  ) { }
  
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
    const serverMessage = `${errors?.['serverMessage'] ?? ''}`;
    return `${requiredError} ${minLengthError} ${serverMessage}`;
  }
  async submit() {
    const { valid, value: { name, password } } = this.user;
    if (valid && name && password) {
      this.authService.loginRequest(name.trim(), password.trim()).pipe(catchError(async (error) => {
        const message = `${error.error}. Try: username: ${this.mockedCreds.username} and password: ${this.mockedCreds.password}`;
        this.user.controls.password
          .setErrors({
            serverMessage: message,
          });
        this.snackService.showMessage({ message, type: MessageType.Info }, 7000);
      })).subscribe((response) => {
        if (response?.token) {
          this.authService.successLogin(response.token);
          this.close();
        }
      });
    } else {
      this.snackService.showMessage({ message: 'Not valid username or password', type: MessageType.Alert });
    }
  }
  close() {
    this.dialogRef.close();
  }
}
