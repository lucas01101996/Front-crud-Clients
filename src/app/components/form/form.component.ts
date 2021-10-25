import { Client } from './../../models/client';
import { ClientService } from "src/services/client.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})

export class FormComponent implements OnInit{


  data: Array<any>

  constructor(private clientService: ClientService){
    this.data = new Array<any>();

  }


  ngOnInit(): void{
    //this.client = this.clientService.retrieveById(this.client.id)
  }

  onSubmit(){


  }

  onCancel(){

  }


  save(): void{
    alert('cliente salvo')
  }
}
