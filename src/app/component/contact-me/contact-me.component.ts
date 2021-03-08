import { jsDocComment } from '@angular/compiler';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  contact!: FormGroup;
  email: any;
  message: any;
  messageArray: string[] = [];;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contact = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void{
    console.log(this.contact.value);
    this.messageArray.push(this.contact.value)
    console.log(this.messageArray);

  }


}
