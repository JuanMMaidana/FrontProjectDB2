import { Injectable } from '@angular/core';
import { Publication } from '../components/entities/publication';
import { PUBLICATIONS } from '../mocks/mock-publications';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(
    private http: HttpClient,

  ) { }

 @Injectable({
    providedIn: 'root'
  })

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  private publicationsUrl = 'http://localhost:3000/publicationsFilters';  // URL to web api



  // servicio para traer publicaciones oferta, en el backend ver si el boolean es 1 o 0 para traer las ofertas

  getPublicationsOfer(): Observable<Publication[]>{
    return this.http.get<Publication[]>(this.publicationsUrl)
    .pipe(
      catchError(this.handleError<Publication[]>('getPublications', []))
    );

  }




  // servicio para traer publicaciones oferta, en el backend ver si el boolean es 1 o 0 para traer las necesidaddes

  getPublicationsNecesity(): Observable<Publication[]>{
    return this.http.get<Publication[]>(this.publicationsUrl)
    .pipe(
      catchError(this.handleError<Publication[]>('getPublications', []))
    );

  }




  //tengo el metodo en el otro projecto
  getPublicationByTitleAndCategory(): Observable<Publication[]>{
    return this.http.get<Publication[]>(this.publicationsUrl)
    .pipe(
      catchError(this.handleError<Publication[]>('getPublications', []))
    );


  }



















  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
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
