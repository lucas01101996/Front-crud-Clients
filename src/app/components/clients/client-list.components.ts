import { ClientService } from '../../../services/client.service';
import { Component, OnInit, ViewChild } from "@angular/core";
import { Client } from "../../models/client";
import { Observable } from 'rxjs';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

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

    deleteModalRef!: BsModalRef;
    @ViewChild('deleteModal') deleteModal: any;

    clientSelect!: Client;

    constructor(private clientService :ClientService, private modalService: BsModalService){
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

    onEdit(id: any){

    }

    modalDelete(client: any){
      this.clientSelect = client;
      console.log(this.clientSelect)
      this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
    }

    onConfirmeDelete(){
      this.clientService.delete(this.clientSelect.id).subscribe(resp =>{
        alert('curso removido com sucesso');
        window.location.reload()
      });
    }

    onDeclineDelete(){
      this.deleteModalRef.hide();
    }







    /* set filter(value: string) {
      this.filterBy = value;

      this.filteredClients = this.clients.filter((client$: Client) => client$.name.toLocaleLowerCase().indexOf(this.filterBy.toLowerCase()) > -1);
    }

    get filter(){
      return this.filterBy;
    } */




}
