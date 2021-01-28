import { Injectable } from '@angular/core';
import { AppConfig } from '../app.config';
import { Subject, BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, filter, tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  baseUrl: string;
  apiKey: string;

  constructor(
    private _httpClient: HttpClient,
  ) {
    this.baseUrl = AppConfig.baseUrl;
    this.apiKey = AppConfig.apiKey;
  }

  public getCharacters(): Observable<any> {
    const url = `${this.baseUrl}v1/public/characters?apikey=${this.apiKey}`;
    return this._httpClient.get(url).pipe(
      catchError((err: HttpErrorResponse) => {
        return this.processError(err);
      }),
      map(data => data.data.results),
    )
  }

  public getComicsByCharacters(id): Observable<any> {
    const url = `${this.baseUrl}v1/public/characters/${id}/comics?apikey=${this.apiKey}`;
    return this._httpClient.get(url).pipe(
      catchError((err: HttpErrorResponse) => {
        return this.processError(err);
      }),
      map(data => data.data.results),
    )
  }

  public getCharacterById(id): Observable<any> {
    const url = `${this.baseUrl}v1/public/characters/${id}?apikey=${this.apiKey}`;
    return this._httpClient.get(url).pipe(
      catchError((err: HttpErrorResponse) => {
        return this.processError(err);
      }),
      map(data => data.data.results),
    )
  }

  private processError(err): Observable<any> {

    const error = err.error.message || 'Error';
    return throwError(new Error(error));
  }
}
