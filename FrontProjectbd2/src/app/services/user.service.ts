import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, catchError, tap, map} from 'rxjs';
import { Token } from '@angular/compiler';
import { TokenService } from './token.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {



  private userService = 'http://localhost:3000/login';  // URL to web api
  private registerService = 'http://localhost:3000/registro';  // URL to web api




  constructor(
    private http: HttpClient,
    private tokenService: TokenService
    ) { }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  postRegister(ci: number, names: string, surnames: string, email: string, ubication: string, password: string, password2 : string, id_question: number, response: string){
    return this.http.post(this.registerService, {ci, names, surnames, email, ubication, password, password2, id_question, response})
    .pipe(
      map(_res => { return {error : false, type : 'success'} }),
      catchError(err => of({error: true, message: err.error.message}))
    );

  }




  postLogin(ci: number, password: string) {
    return this.http.post(this.userService, {ci, password})
    .pipe(
      tap((response: any) => {
        const token = response.token;
        this.tokenService.setToken(token);
      }),
      map(_res => { return {error : false, type : 'success'} }),
      catchError(err => of({error: true, message: err.error.message}))
    );
  }







}