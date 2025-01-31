import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { AuthService } from '../services/auth.service';
import { User } from './user.type';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatCardModule, MatInputModule],
  templateUrl: './signin-form.component.html',
  styleUrl: './signin-form.component.scss'
})
export class SigninFormComponent {
  user: User = {
    name: '',
    password: '',
  };
  dialog = inject(Dialog);
  
  constructor(private authService: AuthService, private dialogRef: DialogRef) { }
  signin() {
    console.log(this.user);
  }
  close() {
    this.dialogRef.close();
  }
}
