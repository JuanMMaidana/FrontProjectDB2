import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, catchError} from 'rxjs';
import { Question } from '../components/entities/questions';



@Injectable({
  providedIn: 'root'
})
export class SecurityQuestionsService {


  private securityquestions = 'api/securityquestions';  // URL to web api


  constructor(
    private http: HttpClient,
    ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getSecurityQuestions(): Observable<Question[]>{
    return this.http.get<Question[]>(this.securityquestions)
    .pipe(
      catchError(this.handleError<Question[]>('getSecurityQuestions', []))
    );
  }


















  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
