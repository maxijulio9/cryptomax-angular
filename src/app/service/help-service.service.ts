import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelpRequest } from '../modelo/requests';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpServiceService {

  private readonly  baseUrl = 'http://localhost:3000/help';

  constructor(private http: HttpClient) { 

  }

  addHelpRequest(request : HelpRequest) {
    return this.http.post(this.baseUrl, request);
  }
  
  getHelpRequests(): Observable<HelpRequest[]> {
    return this.http.get<HelpRequest[]>(this.baseUrl);
  } 



}
