import { Component, inject } from '@angular/core';
import { FaqsCriptoComponent } from "../faqs-cripto/faqs-cripto.component";
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-help',
  imports: [FaqsCriptoComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {
  private formBuilder = inject(FormBuilder);

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
      const formData = this.formContactUs.value;
      console.log('Form submitted successfully:', formData);
    }else{
      console.log('Form is invalid. Please fill out all required fields.');
    }
  }

}
