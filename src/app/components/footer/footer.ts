import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isLoading = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  async onSubmit() {
    if (this.isLoading) return;
    
    this.isLoading = true;
    this.submitStatus = 'idle';

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'service_h165kiu', // Replace with your EmailJS service ID
        'template_bzau0dc', // Replace with your EmailJS template ID
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message,
          to_email: 'Baher1088@gmail.com', // Your primary email
          from_email_sender: 'Bahercheetah1088@gmail.com' // Your secondary email
        },
        'g_EiyzqzIwOJ2ESt4' // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result);
      this.submitStatus = 'success';
      this.resetForm();
      this.hideStatusMessage();
    } catch (error) {
      console.error('Error sending email:', error);
      this.submitStatus = 'error';
      this.hideStatusMessage();
    } finally {
      this.isLoading = false;
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  hideStatusMessage() {
    setTimeout(() => {
      this.submitStatus = 'idle';
    }, 4000); // 4 seconds
  }
}
