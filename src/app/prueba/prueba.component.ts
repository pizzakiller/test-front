import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import clientesData from '../../assets/data.json';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  title = 'Listado Clientes';
  dtOptions: DataTables.Settings = {};
  clientes: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
    }

    };
         this.clientes = clientesData;
         this.muestraCorreo();
  }

    muestraCorreo():void{

      this.clientes.forEach((cliente: any) => {
             console.log("correo:", cliente.email );
      });
    }


}
