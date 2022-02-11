import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  hostUrl="https://localhost:44379/api/books";

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any>{

    return this.http.get(this.hostUrl, {observe: 'response'})
  }

  getBook(id: number): Observable<any>{

    return this.http.get(this.hostUrl + `/${id}`, {observe: 'response'})
  }

  createBook(libro: any): Observable<any>{

    return this.http.post(this.hostUrl, libro, {observe: 'response'})
  }

  editBook(libro: any, id: number): Observable<any>{

    return this.http.put(this.hostUrl + `/${id}`, libro, {observe: 'response'})
  }

  deleteBook(id: number): Observable<any>{

    return this.http.delete(this.hostUrl + `/${id}`, {observe: 'response'})
  }
}
