import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import app from "../firebaseConfig";
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User} from 'firebase/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localUrl = "http://localhost:1010";

  auth = getAuth(app);
  provider = new GoogleAuthProvider();
  uid: string = '';
  user: User | null  = null;
  currentUser:User | null = null;



  constructor(private http: HttpClient, private router:Router) {
    this.listenForChanges();
   }


  listenForChanges(){
    onAuthStateChanged(this.auth, (user)=>{
      this.currentUser = user;
      console.log("user restored")
    })
  }

  loginWithGoogle(){
    return signInWithPopup(this.auth, this.provider).then(async (res)=>{
      this.user = res.user;
      this.uid = this.user.uid;
      const token = await this.user.getIdToken();
      console.log("token check: ", token);

      this.sendFirebaseToken(token).subscribe({
        next: (res) => console.log("Token sent to backend:", res),
        error: (err) => console.error("Error sending token to backend:", err)
      });

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
    return this.http.post(`${this.localUrl}/verify/token/`, {token}, httpOptions)
  }
}
