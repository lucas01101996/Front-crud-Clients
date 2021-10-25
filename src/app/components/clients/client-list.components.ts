import { ClientService } from '../../../services/client.service';
import { Component, OnInit } from "@angular/core";
import { Client } from "../../models/client";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  preserveWhitespaces: true
})

export class ClientListComponent implements OnInit{//ciclo de vida OnInit

    clients: Client[] = [];
    data: Array<any>

    clients$: Observable<Client[]>;

    totalRecords: number = 1;
    page:number = 1;

    /* filterBy: string = '';

    filteredClients: Client[] = []; */

    constructor(private clientService :ClientService){
      this.clients$ = this.clientService.list();
      this.data = new Array<any>();
    }

    ngOnInit(): void{
      this.clients$.subscribe((resp: any)=> {
        this.clients = resp.content;
        console.log(resp.content)
      });
      /* this.clients = this.clientService.retrieveAll();
      this.filteredClients = this.clients */
    }

    getUsers(){
      this.clientService.pagination().subscribe((data: any) =>{
        this.data = data.content
        console.log(data.content);
        this.totalRecords = data.content.length;
      })
    }

    postData(){

    }










    /* set filter(value: string) {
      this.filterBy = value;

      this.filteredClients = this.clients.filter((client$: Client) => client$.name.toLocaleLowerCase().indexOf(this.filterBy.toLowerCase()) > -1);
    }

    get filter(){
      return this.filterBy;
    } */




}
