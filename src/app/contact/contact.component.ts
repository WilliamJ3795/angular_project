import { Component, OnInit, } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  signupForm!: FormGroup; 
  ngOnInit() {
    this.signupForm = new FormGroup({ 
      'userData': new FormGroup({ 
        'username': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email,this.forbiddenEmails as ValidatorFn])
        }), 

      'courses': new FormArray([])
    });  
    
  }
   onSubmit() { 
    console.log(this.signupForm); 
    this.signupForm.reset(); 
    }
    
    forbiddenEmails(control: FormControl) { 
      let email = control.value; 
      if (email && email.indexOf("@") != -1) { 
      let [_, domain] = email.split("@"); 
      if (domain == "test.com") { 
      return {'emailIsForbidden': true}; 
      } 
      return null; 
      } 
      return null; 
      }


}
