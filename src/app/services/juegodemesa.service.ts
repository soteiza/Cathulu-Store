import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class JuegodemesaService {

  constructor(private _hhtp: HttpClient) { }

  getAllBoardgames(): Observable<any>{
    let urlService = environment.urlBase + "search?limit=100&client_id=z4GDASNoqC"; 
    return this._hhtp.get(urlService); 
  }
}
