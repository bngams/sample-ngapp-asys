import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event';
import { environment } from 'src/environments/environment';
import { ResourceService } from '../../shared/api/resource.service';

const API_BASE_URL = environment.apiBaseUrl;

@Injectable()
export class EventService extends ResourceService<number, Event> {

  constructor(private http: HttpClient) {
    super(http, 'events')
  }

}
