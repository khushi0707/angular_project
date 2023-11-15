import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  api:any
  constructor(private client: HttpClient) { 
    this.api = 'localhost:3000/api'
  }

  saveUser(data: any): Observable<any> { 
    return this.client 
      .post<any>('', data) 
      .pipe(map((result: any) => result.data)); 
  } 
 
  getUser(): Observable<any> { 
    return this.client 
      .get<any>(this.api+"/getAll") 
      .pipe(map((result: any) => result)); 
  } 
 
  updateUser(id:string,data:any): Observable<any> { 
    return this.client 
      .post<any>(``,data) 
      .pipe(map((result: any) => result)); 
  } 
 
  getCompanyOperator(): Observable<any>{ 
return this.client 
      .get<any>('') 
      .pipe(map((result: any) => result)); 
  }

}
