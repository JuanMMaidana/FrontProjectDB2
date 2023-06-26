import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, catchError, tap, map} from 'rxjs';
import { Token } from '@angular/compiler';
import { TokenService } from './token.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {


  private url = 'http://localhost:3000/';  // URL to web api
  private userService = 'http://localhost:3000/login';  // URL to web api
  private registerService = 'http://localhost:3000/registro';  // URL to web api

  private friendStateService = 'http://localhost:3000/friendsState';  // URL to web api
  private followFriendService = 'http://localhost:3000/seguirAmigo';  // URL to web api



  constructor(
    private http: HttpClient,
    private tokenService: TokenService
    ) { }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}` })
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

  getProfile(){
    return this.http.get(`${this.url}getUser`, this.httpOptions).pipe(
      map((res: any) => res),
      catchError(err => of({error: true, message: err.error.message})));
  }

  postFollowFriend(ci_friend : number, friendbool: boolean) {

    const token = this.tokenService.getToken();

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${token}`);


    return this.http.post(this.followFriendService, {ci_friend, friendbool} , {headers})
    .pipe(
      map(_res => { return {error : false, type : 'success'} }),
      catchError(err => of({error: true, message: err.error.message}))
    );
  }


  postFriendState(ci_friend: number): Observable<boolean> {
    const token = this.tokenService.getToken();

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    return this.http.post<boolean>(this.friendStateService, { ci_friend }, { headers })
      .pipe(
        catchError(err => of(false))
      );
  }




}
