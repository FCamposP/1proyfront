import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  usuarioActual = 'usuario actual'; /*el vendedor con el que está chat en ese momento */
  usuarioLocal = 'Usuario Local';
  mensajeUsuarioActual = 'Mensaje de usuario actual';
  mensajeUsuarioLocal = 'Mensaje de usuario local';
  horaUsuarioActual = '00:00';
  horaUsuarioLocal = '00:03';
  constructor() { }

  ngOnInit(): void {
  }

 
}
