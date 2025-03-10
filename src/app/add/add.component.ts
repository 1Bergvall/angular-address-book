import { Component } from '@angular/core';
import { Contact } from '../model/contact';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contacts/contacts.service';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  contactForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactService: ContactService,
    private readonly router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  addContact(): void {
    // Add contact logic here
    const newContact: Contact = {
      id: 0,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.contactService.AddContact(newContact);
    console.log(newContact);
    this.contactForm.reset();
    this.router.navigate(['/contacts']);
  }
}
