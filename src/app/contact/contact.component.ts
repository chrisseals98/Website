import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Email } from '../services/smtp';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  form = new FormGroup({
    name: new FormControl("", Validators.required),
    subject: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required)
  });

  Send()
  {
    if(this.form.valid) {
      document.getElementById("input")!.style.display = "none";
      document.getElementById("success")!.style.display = "block";

      Email.send
      ({
          SecureToken: environment.secureToken,
          To : "chrisseals9893@gmail.com",
          From : environment.from,
          Subject : "From - " + this.form.value.name + " | " + this.form.value.subject,
          Body : this.form.value.message
      }).then
      (
          message => {
              if(message == "OK"){
                  alert("Email Sent Successfully!")
              }
              else{
                  alert("Error: " + message)
              }
          }
      );
    }
    else
    {
      alert("Please fill out the entire form before trying to submit!");
    }
  }
}
