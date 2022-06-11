import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LibroService } from 'src/app/services/libro.service';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  agregarLibro!: FormGroup;
  libroId: any;
  text: string = "Agregar";
  libro: any;

  constructor(private fb: FormBuilder, private toastr: ToastrService, 
    private libroService: LibroService, private rutaActiva: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    if(this.rutaActiva.snapshot.paramMap.get('id') != ''){
      this.libroId = this.rutaActiva.snapshot.paramMap.get('id');
      this.text = "Editar";
      this.setFormAgregar()
      this.setInputs()
    }
    else{
      this.setFormAgregar()
    }
  }

  agregarLibros(){
    if(this.agregarLibro.invalid){
      this.toastr.warning("Debe de completar cada uno de los campos para continuar.", "Formulario");
      return;
    }

    let libro = {
      titulo: this.agregarLibro.get('titulo')?.value,
      autor: this.agregarLibro.get('autor')?.value,
      editorial: this.agregarLibro.get('editorial')?.value,
      fechaPublicacion: this.agregarLibro.get('fechaPub')?.value,
      precio: this.agregarLibro.get('precio')?.value
    }

    if(this.libroId != null){
      libro.fechaPublicacion =  libro.fechaPublicacion == "" ? this.libro.fechaPublicacion : libro.fechaPublicacion;

      this.libroService.editBook(libro, this.libroId).subscribe(datos => {
        if(datos.status == 200){
          this.toastr.success("El libro fue editado correctamente.")
        }
      }, error => {
        this.toastr.warning("Hubo un problema al editar el libro.")
      })
    }
    else{
      
      this.libroService.createBook(libro).subscribe(datos => {
        if(datos.status == 201){
          this.toastr.success("El libro fue agregado correctamente.")
        }
      }, error => {
        this.toastr.warning("Hubo un problema al agregar el libro.")
      })
    }
  }

  setInputs(){
    this.libroService.getBook(Number(this.libroId)).subscribe(datos => {
      this.agregarLibro.patchValue({
        titulo: datos.body.titulo,
        autor: datos.body.autor,
        editorial: datos.body.editorial,
        fechaPub: datos.body.fechaPublicacion,
        precio: datos.body.precio
      })

      this.libro = datos.body;
    })
  }

  setFormAgregar(){
    this.agregarLibro = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      editorial: ['', Validators.required],
      fechaPub: ['', Validators.required],
      precio: ['', Validators.required]
    })
  }
}
