import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailPipePipe } from 'src/app/common/pipes/email-pipe.pipe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private pipe: EmailPipePipe) {}

  loginForm!: FormGroup;
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  passwordPattern: string = '^[0-9]+$';

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(this.emailPattern)]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(this.passwordPattern)]),
    });
  }

  get userEmail() {
    return this.loginForm.get('userEmail')?.value;
  }


  get userPassword() {
    return this.loginForm.get('userPassword')?.value;
  }

  extractUseName() {
    const userName = this.pipe.transform(this.userEmail);
    localStorage.setItem('userName', userName);
  }

  onSubmit() {
    // console.log(this.userEmail);
    // console.log(this.userPassword);
    // console.log(this.extractUseName());
    this.extractUseName();

  }
}
