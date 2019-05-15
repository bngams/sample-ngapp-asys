import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventDashboardComponent } from './components/event-dashboard/event-dashboard.component';

@NgModule({
  declarations: [EventCardComponent, EventListComponent, EventFormComponent, EventDashboardComponent],
  imports: [
    CommonModule
  ]
})
export class EventModule { }
