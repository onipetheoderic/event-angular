import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { BASEURL } from './constant';
import { IEvent, IEventList } from './interface/interface';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  apiUrl: string = BASEURL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Create
  createEvent(data: IEvent): Observable<any> {
    let API_URL = `${this.apiUrl}events`;
    return this.http.post(API_URL, data).pipe(catchError(this.error));
  }

  // Read
  showEvents() {
    return this.http.get<IEventList>(`${this.apiUrl}events`);
  }

  // Update
  updateEvent(data: IEventList): Observable<any> {
    let API_URL = `${this.apiUrl}events/${data.eventId}`;
    return this.http.put(API_URL, data).pipe(catchError(this.error));
  }

  // Delete
  deleteEvents(event: IEventList) {
    return this.http.delete<IEventList>(
      `${this.apiUrl}events/${event.eventId}`
    );
  }

  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    console.log(error, 'the error incured');
    // if (error.error instanceof ErrorEvent) {
    //   errorMessage = error.error.message;
    // } else {
    //   errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    // }
    // console.log(errorMessage, 'the error incured');
    return throwError(error);
  }
}
