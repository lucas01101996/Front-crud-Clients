import { Client } from './../../models/client';
import { ClientService } from "src/services/client.service";
import { Component, OnInit, Inject } from "@angular/core";
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})

export class FormComponent implements OnInit{
  public liveForm!: FormGroup;

  clients$: Observable<Client[]>;
  constructor(private clientService: ClientService, private fb: FormBuilder) {
        this.clients$ = this.clientService.list();
  }

  ngOnInit(): void{
    //this.client = this.clientService.retrieveById(this.client.id)
    this.liveForm = this.fb.group({
      name: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      income: [null, [Validators.required]],
      birthDate: ['', [Validators.required]],
      children: [null, [Validators.required]],
    });
  }

  onSubmit(){
    console.log(this.liveForm)
  }

  onCancel(){
    this.liveForm.reset();
  }

  createClient(){
    let newDate: moment.Moment = moment.utc(this.liveForm.value.birthDate).local();
    this.liveForm.value.birthDate = newDate.format('YYYY-MM-DDTHH:MM:SSZ')
    this.clientService.create(this.liveForm.value).subscribe(resp => {
      console.log(resp.birthDate)
      alert('salvo com sucesso');
      this.liveForm.reset();
      window.location.reload();
    });

  }
}
