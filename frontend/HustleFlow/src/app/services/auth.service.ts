import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import app from "../firebaseConfig";
import {getAuth, GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localUrl = "http://localhost:1010";

  auth = getAuth(app);
  provider = new GoogleAuthProvider();
  uid: string = '';
  user: User | null  = null;



  constructor(private http: HttpClient, private router:Router) { }

  loginWithGoogle(){
    return signInWithPopup(this.auth, this.provider).then(async (res)=>{
      this.user = res.user;
      this.uid = this.user.uid;
      const token = await this.user.getIdToken();
      console.log("token check: ", token);

      //implement send token back to backend
      return token
    }).catch (err=>{
      console.log("Google login failed", err);
      return "";
    })
  }

  sendFirebaseToken(token: string){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }),
    }
    //sending the info back to the backend api endpoint
    // return this.http.post()
  }
}
