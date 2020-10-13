import { Injectable } from '@angular/core';
import { Departamento } from '../model/departamento.model';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  apiRestUrl = 'http://localhost:5000/departamentos'

  constructor(private http: HttpClient) { }


  listarDepartamentos() : Observable<Departamento[]>{
    return this.http
          .get<Departamento[]>(this.apiRestUrl)
  }
}
