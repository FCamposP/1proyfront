import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 
    
  }

  sendLogin(data){
    const url=environment.urlBase+'/api/login';
    return this.http.post(url,data);
  }
}
