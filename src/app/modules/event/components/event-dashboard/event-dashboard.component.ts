import { Component, OnInit, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { Event } from '../../models/event';
import { EventListComponent } from '../event-list/event-list.component';

@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.css']
})
export class EventDashboardComponent implements OnInit {

  @ViewChild(EventListComponent)
  eventListComp: EventListComponent;

  @ViewChildren(EventListComponent)
  eventListComps: QueryList<EventListComponent>;

  constructor() { }

  ngOnInit() {
  }

  createEvent(event: Event) {
    console.log("event received in dashboard", event);
    this.eventListComp.events.push(event);

    // if we use view children, we have an array 
    // with all corresponding components
    this.eventListComps.first.events.push();
  }

}
