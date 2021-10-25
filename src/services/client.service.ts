import { Client } from './../app/models/client';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { first, tap , delay} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService{

  /* private readonly API = '../assets/clients.json'; */
  private readonly API = 'http://localhost:8080/clients';


  constructor(private httpClient: HttpClient){}

  list(): Observable<any> {
    return this.httpClient.get<Client[]>(this.API)
    .pipe(
      delay(2000)
      ,tap(resp=> console.log(resp)
      ));
  }

  pagination(): Observable<any> {
    return this.httpClient.get<Client[]>(this.API)
  }

  create(Client: any): Observable<any>{
    return this.httpClient.post<any>(this.API, Client)
  }

  /* retrieveAll(): Client[]{
    return CLIENTS;
  } */

  /* retrieveById(id: number): Client | undefined{
    return CLIENTS.find((clientIterator: Client) => clientIterator.id ===id);
  } */
}



