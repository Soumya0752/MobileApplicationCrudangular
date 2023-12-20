import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mobile } from './mobile';

@Injectable({
  providedIn: 'root'
})
export class MobileService
 {
  private baseUrl="http://localhost:8080/mobiles";
  private baseUrl2="http://localhost:8080/mobiles/addnewmobile";


  constructor(private httpClient:HttpClient) 
  { 
  }

   getMobilesList():Observable<Mobile[]>
   {
     return this.httpClient.get<Mobile[]>(`${this.baseUrl}`);
   }

   createMobile(mobile:Mobile):Observable<Object>
   {
    return this.httpClient.post(`${this.baseUrl2}`,mobile);
   }
   
   getMobileById(id:number):Observable<Mobile>
   {
    return this.httpClient.get<Mobile>(`${this.baseUrl}/${id}`);
   }

   updateMobile(id:number,mobile:Mobile):Observable<Object>
   {
    return this.httpClient.put(`${this.baseUrl}/${id}`,mobile);
   }

   deleteMobile(id:number):Observable<any>
   {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
   }

}
