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

    clients$: Observable<Client[]>;

    totalRecords: number = 1;
    page:number = 1;

    constructor(private clientService :ClientService){
      this.clients$ = this.clientService.list();
    }

    ngOnInit(): void{
      this.getClients();
    }

    getClients(){
      this.clientService.getLivesWithPage(0).subscribe(data =>{
        this.clients = data.content;
        console.log(this.clients);
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
