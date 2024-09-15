import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  signUpfirst: boolean = false;

  constructor(private fb: FormBuilder,private loginService: LoginService,private snackBar: MatSnackBar,private router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      // this.loginService.login(this.loginForm.value)
      // .subscribe(
      //   response => {
      //     console.log("response", response);
      //     this.snackBar.open('Login successful', 'Success',{
      //       duration: 3000,
      //     });
      //    
          // Handle success or navigate to another page
      //   },
      //   error => {
      //     this.snackBar.open('Your account does not exist please signup first', 'Error',{
      //       duration: 3000,
      //     });
      //     this.signUpfirst = true;
      //     // Handle error
      //   }
      // );
      this.router.navigate(['/restrolist']);
    }
  }

  navigateToSignUp() {
    this.router.navigate(['/register']);
  }

}
