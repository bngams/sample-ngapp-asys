import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Event } from '../../models/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  @Output()
  addEvent = new EventEmitter<Event>();

  // creer le form group
  eventForm: FormGroup;
  simpleField: FormControl;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  // initialiser le form group
  initForm() {
    this.eventForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      category: new FormControl('')
    });

    this.simpleField = new FormControl('category');
  }

  save() {
    console.log(this.eventForm.value);
    this.addEvent.emit(this.eventForm.value);
  }

}
