import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  isSending = false;
  isSent = false;

  private readonly serviceId = 'service_zeejw9j';
  private readonly templateId = 'template_8qz88xm';
  private readonly publicKey = 'YIpZcIlRqdEX5UVvB';

  constructor(
    private toastr: ToastrService
  ) {}

  public sendEmail(event: Event): void {
    event.preventDefault();

    if (this.isSending) {
      return;
    }

    const form = event.target as HTMLFormElement;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    this.isSending = true;

    emailjs
      .sendForm(
        this.serviceId,
        this.templateId,
        form,
        {
          publicKey: this.publicKey
        }
      )
      .then(
        (response: EmailJSResponseStatus) => {
          console.log(
            'Email sent successfully:',
            response.status,
            response.text
          );

          this.toastr.success(
            'Message sent successfully!',
            'Success'
          );

          form.reset();

          this.isSent = true;
          this.isSending = false;
        },
        (error: EmailJSResponseStatus) => {
          console.error(
            'EmailJS error:',
            error
          );

          this.toastr.error(
            'Failed to send the message. Please try again.',
            'Error'
          );

          this.isSending = false;
        }
      );
  }
}