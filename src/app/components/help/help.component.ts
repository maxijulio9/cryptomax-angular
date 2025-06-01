import { Component, inject } from '@angular/core';
import { FaqsCriptoComponent } from "../faqs-cripto/faqs-cripto.component";
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HelpServiceService } from '../../service/help-service.service';
import { HelpRequest } from '../../modelo/requests';
import { waitForAsync } from '@angular/core/testing';


@Component({
  selector: 'app-help',
  imports: [FaqsCriptoComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {
  private formBuilder = inject(FormBuilder);
  private requestHelp = inject(HelpServiceService);

  formSubmitted: boolean = false;
  requestHelpList: HelpRequest[] = [];
  lastPositionRequestHelp: number = 0;

  formContactUs: FormGroup;
  constructor(){
    this.formContactUs = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['',Validators.required]
    });
  }
  onSubmit(){
    if(this.formContactUs.valid){
      this.requestHelp.addHelpRequest(this.formContactUs.value).subscribe(() => {
        this.getRequestHelp();  
      }
      );
      console.log("Mensaje enviado exitosamente!");
      this.resetForm();

    }else{
      this.formContactUs.markAllAsTouched();
       
      console.log('Form is invalid. Please fill out all required fields.');
       return;
    }
  }
  
  getRequestHelp() {
    this.requestHelp.getHelpRequests().subscribe((helpRequests: HelpRequest[]) => {
      this.requestHelpList = helpRequests;
      this.lastPositionRequestHelp = this.requestHelpList.length - 1;
      this.formSubmitted = true;

      console.log('Help requests obtanied successfully');
    });
  }



  resetForm() {
    this.formContactUs.reset();
   
    setTimeout(() => {
        this.formSubmitted = false;
    }, 4000);
  }

}
