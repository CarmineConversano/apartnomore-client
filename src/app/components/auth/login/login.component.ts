import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth/auth.service";
import {LoginForm} from "../../../interfaces/auth/loginForm";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private toastrService: ToastrService) {

  }

  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    })
  }

  login() {
    this.authService.login(this.loginForm.value as LoginForm).subscribe((jwtResponse) => {
      this.authService.getCurrentUser();
      this.router.navigate(['/dashboard']).then(r => r);
    }, error => {
      this.toastrService.error(error.error.message, 'Login error!');
      this.loginForm.reset();
    })
  }

}
