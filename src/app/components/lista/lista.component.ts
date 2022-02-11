import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  libros: any;

  constructor(private libroService: LibroService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getLibros()
  }

  getLibros(){
    this.libroService.getBooks().subscribe(datos => {
      if(datos.status == 200){
        this.libros = datos.body;
      }
    }, error => {
      this.toastr.error("Hubo un error al solicitar los libros.", "Solicitud de libros")
    })
  }

}
