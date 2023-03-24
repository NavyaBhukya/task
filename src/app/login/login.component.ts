import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import UsersJson from 'src/assets/users.json';

interface USERS {
  name: String;
  password: String;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {
    console.log(this.Users);
  }
  ngOnInit(): void { }

  Users: USERS[] = UsersJson;

  username: string | undefined;
  password: string | undefined;

  regForm = new FormGroup({
    uname: new FormControl("", [Validators.required, Validators.minLength(5)]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)])
  })
  submit() {
    this.regForm
    console.log(this.regForm.value);
    for (let i = 0; i < this.Users.length; i++) {
      if (this.regForm.get('uname')?.value === this.Users[i].name && this.regForm.get('password')?.value === this.Users[i].password) {
        console.log("Login Successful");
        Swal.fire({
          icon: 'success',
          title: 'login successfully',
        })
        this.router.navigate(['/home'])
        break;
      } else {
        console.log("Login failed");
        Swal.fire({
          icon: 'warning',
          title: 'Enter Valid Details',
        })
      }
    }
  }
  reset() {
    this.regForm.reset()
    console.log(this.regForm.value);
  }

}
