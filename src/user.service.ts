import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { getLocaleDateFormat } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getData(){
    let URL = "https://cricapi.com/api/matches";
    let APIKEY = "Slhuyhx2nCgnqMDz0XTAh13pLUn1";
    return this.http.post(URL, {"apikey":APIKEY});
  }

  // getData(){
  //   let url = "https://cricapi.com/api/matches";
  //   return this.http.post(url, {"apikey":"Slhuyhx2nCgnqMDz0XTAh13pLUn1"}
  //   );
  // }
}
