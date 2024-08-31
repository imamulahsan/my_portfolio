import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private toastr: ToastrService, private router: Router) {}

  // Function to send the form data
  public sendEmail(e: Event) {
    e.preventDefault();  // Prevent form submission to the server

    emailjs.sendForm('service_zeejw9j', 'template_8qz88xm', e.target as HTMLFormElement, 'YIpZcIlRqdEX5UVvB')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.toastr.success('Message sent successfully!', 'Success');
      // Redirect to the home page after a short delay
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 3000); // 3 seconds delay before redirect
    }, (error) => {
      console.error(error.text);
      this.toastr.error('Failed to send the message, please try again later.', 'Error');
    });
  }

}
