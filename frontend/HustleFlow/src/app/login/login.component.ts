import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:any;

  constructor(private route:ActivatedRoute,private auth: AuthService, private router: Router){}

  // ngOninit(){

  // }

  loginWithGoogle(){
    this.auth.loginWithGoogle().then(()=>{
      console.log("login")
    })
  }
}
