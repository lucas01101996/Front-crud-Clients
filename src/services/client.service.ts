import { Client } from './../app/models/client';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { first, tap , delay, take} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { ResponsePageable } from 'src/app/models/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService{

  /* private readonly API = '../assets/clients.json'; */
  private readonly API = 'http://localhost:8080/clients';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient){}

  list(): Observable<any> {
    return this.httpClient.get<Client[]>(this.API)
    .pipe(
      delay(2000)
      ,tap(resp=> console.log(resp)
      ));
  }

  getLivesWithPage(page: number): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.API + '?page=' + page).pipe(take(1))
  }

  create(client: any): Observable<Client>{
    return this.httpClient.post<any>(this.API, client, this.httpOptions);
  }
}



