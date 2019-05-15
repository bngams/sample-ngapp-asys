import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event';
import { environment } from 'src/environments/environment';

const API_BASE_URL = environment.apiBaseUrl;

@Injectable()
export class EventService {

  constructor(private httpClient: HttpClient) { }

  fetchEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(`${API_BASE_URL}/events`);
  }
}
