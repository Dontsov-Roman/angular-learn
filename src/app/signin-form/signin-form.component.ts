import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
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
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatCardModule, MatInputModule],
  templateUrl: './signin-form.component.html',
  styleUrl: './signin-form.component.scss'
})
export class SigninFormComponent {
  user = new FormBuilder().nonNullable.group({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(4)]),
  })
  
  constructor(private authService: AuthService, private dialogRef: DialogRef) { }
  
  async submit() {
    const { valid, value: { name, password } } = this.user;
    if (valid && name && password) {
      await this.authService.login(name, password);
      if (this.authService.isAuthenticated())
        this.close();
    }
  }
  close() {
    this.dialogRef.close();
  }
}
