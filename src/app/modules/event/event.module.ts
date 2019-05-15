import { NgModule } from '@angular/core';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventDashboardComponent } from './components/event-dashboard/event-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { EventRoutingModule } from './event-routing.module';

@NgModule({
  declarations: [
    EventCardComponent,
    EventListComponent,
    EventFormComponent,
    EventDashboardComponent
  ],
  imports: [
    SharedModule,
    EventRoutingModule
  ],
})
export class EventModule { }
