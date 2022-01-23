import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { JuegodemesaService } from 'src/app/services/juegodemesa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  usuarios: number = 0;
  juegos: number = 0;

  constructor(private _service: UserService, private _serviceJuegos: JuegodemesaService) { }

  ngOnInit(): void {
    this.obtieneUsuarios();
    this.obtieneJuegos();
  }

  obtieneUsuarios(){
    this._service.getAllUsers().subscribe(data =>{
      this.usuarios = data.length;
      console.log(data);
    });
    
  }

  obtieneJuegos(){
    this._serviceJuegos.getAllBoardgames().subscribe(data =>{
      this.juegos = data.length;
      console.log(data);
    });
    
  }

}
