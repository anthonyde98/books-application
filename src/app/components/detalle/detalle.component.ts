import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  libro: any;

  constructor(private rutaActiva: ActivatedRoute, private libroService: LibroService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.buscarLibro()
  }

  buscarLibro(){
    let id = this.rutaActiva.snapshot.paramMap.get('id')

    this.libroService.getBook(Number(id)).subscribe(datos => {
      if(datos.status == 200){
        this.libro = datos.body;
      }
    }, error => {
      if(error.status == 404){
      this.toastr.error("Este libro no fue encontrado.");
      }
      else{
        this.toastr.error("Hubo un error al solicitar este libro.");
      }
    })
  }

}
