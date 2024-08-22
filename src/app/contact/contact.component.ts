import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  // Function to send the form data
  public sendEmail(e: Event) {
    e.preventDefault();  // Prevent form submission to the server

    emailjs.sendForm('service_zeejw9j', 'template_8qz88xm', e.target as HTMLFormElement, 'YIpZcIlRqdEX5UVvB')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.error(error.text);
        alert("Failed to send the message, please try again later.");
      });
  }

}
