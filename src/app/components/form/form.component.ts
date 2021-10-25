import { Client } from './../../models/client';
import { ClientService } from "src/services/client.service";
import { Component, OnInit, Inject } from "@angular/core";
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})

export class FormComponent implements OnInit{
  public liveForm!: FormGroup;

  clients$: Observable<Client[]>;
  constructor(
    private clientService: ClientService,
    private fb: FormBuilder,
    /* public dialog: MatDialogRef<FormComponent> */) {
        this.clients$ = this.clientService.list();
  }


  ngOnInit(): void{
    //this.client = this.clientService.retrieveById(this.client.id)
    this.liveForm = this.fb.group({
      name: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      income: [null, [Validators.required]],
      birthDate: ['1975-05-28T02:00:00Z', [Validators.required]],
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
    this.clientService.create(this.liveForm.value).subscribe(resp => {});
  }
}
