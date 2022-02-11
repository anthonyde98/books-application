import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute, private libroService: LibroService,
    private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  eliminarLibro(){
    let id = this.rutaActiva.snapshot.paramMap.get('id')

    this.libroService.deleteBook(Number(id)).subscribe(data => {},
      error => {
        if(error.status == 200){
          setTimeout(() => {
            this.toastr.success("Libro eliminado con exito.");
          }, 2000);

          this.router.navigateByUrl("lista");
        }
        else{
          this.toastr.error("Hubo un error al intentar eliminar este libro.")
        }
      })
  }

}
