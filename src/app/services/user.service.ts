import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _hhtp: HttpClient) { }

  createUser(data:any):Observable<any>{
    let urlService = environment.urlBase2+ "creaUsuario";
    return this._hhtp.post(urlService, data);
  }

  getAllUsers(): Observable<any>{
    let urlService = environment.urlBase2+ "usuarios";
    return this._hhtp.get(urlService);
  }

  deleteUser(id:number):Observable<any>{
    let urlService = environment.urlBase2+ "eliminaUsuario/" + id;
    return this._hhtp.get(urlService);
  }
}
