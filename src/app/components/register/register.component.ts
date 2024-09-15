import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService,private snackBar: MatSnackBar,private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      contactNumber: ['', Validators.required]
    });

  }
  onSubmit() {
    if (this.signupForm.valid) {
      // this.registerService.register(this.signupForm.value)
      //   .subscribe(
      //     response => {
      //       this.router.navigate(['/home']);
      //       this.snackBar.open('Signup successful', 'Success',{
      //         duration: 3000,
      //       });
           
      //       });
            
         
            // Handle success or navigate to another page
        //  
        //   error => {
        //     this.snackBar.open('Registration failed', 'Error',{
        //       duration: 3000,
        //     });
        //     // Handle error
        //   }
        // );
        this.router.navigate(['/home']);
        this.snackBar.open('Signup successful', 'Success',{
          duration: 3000,
        });
    }
  }
}
