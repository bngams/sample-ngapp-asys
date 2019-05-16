import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { EVENTS } from '../../mocks/events.mock';
import { EventService } from '../../services/event.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [EventService]
})
export class EventListComponent implements OnInit {

  // if we need to mock values
  // events: Event[] = EVENTS;
  events: Event[] = new Array();

  $events: Observable<Event[]>;

  // DI
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    // get results manually
    // let request: Observable<Event[]> = this.eventService.list();
    // request.subscribe(
    //   (data) => { this.events = data }
    // );

    // get observable directly 
    this.$events = this.eventService.list();
  }

}
