import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  fb=inject(FormBuilder);
  userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });




 // userForm = new FormGroup({
   // username: new FormControl(''),
   // email: new FormControl(''),
    //password: new FormControl(''),
  //});

  submitForm() {
    const { username, email, password } = this.userForm.getRawValue();
    console.log('Form submitted:', {
      username,
      email,
      passwordEntered: Boolean(password),
    });
  }
}
  
