import { Component, OnInit } from '@angular/core';
import { JuegodemesaService } from 'src/app/services/juegodemesa.service';


@Component({
  selector: 'app-infojuegosdemesa',
  templateUrl: './infojuegosdemesa.component.html',
  styleUrls: ['./infojuegosdemesa.component.css']
})
export class InfojuegosdemesaComponent implements OnInit {

  juegos: any = Array<any>();
  juegosCopia: any = Array<any>();

  constructor(private _service: JuegodemesaService) { }

  ngOnInit(): void {
    this.obtieneJuegos();
  }

  obtieneJuegos(){
    this._service.getAllBoardgames().subscribe(data =>{
      this.juegos = data;
      this.juegosCopia = data;
      console.log(data);
    });
    
  }

}
