import { Funcionario } from '../model/funcionario.model';
import { Injectable } from '@angular/core';
import {  MatSnackBar } from "@angular/material/snack-bar"
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import {map, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

    baseUrl ="http://localhost:5000/funcionarios"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string, isError: boolean =false ):void
   {
    this.snackBar.open(msg, "", 
    { duration: 1000, 
      horizontalPosition: "right",
       verticalPosition: "top",
       panelClass: isError? ['msg-error'] : ['msg-sucess']
    })

  }
  createFuncionario(funcionario: Funcionario): Observable<Funcionario> 
  {

   return this.http.post<Funcionario>(this.baseUrl,funcionario).pipe(
     map(obj => obj),
     catchError(e => this.errorHandler(e))
   )

  }
 readFuncionario() :Observable<Funcionario[]>
 {
 return this.http.get<Funcionario[]>(this.baseUrl)
 }
 readbyId(id: number): Observable<Funcionario>
 {
  const url = `${this.baseUrl}/${id}`
    return this.http.get<Funcionario>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
 }

 updateFuncionario(funcionario: Funcionario): Observable<Funcionario>
 {
  const url = `${this.baseUrl}/${funcionario.id}`
  return this.http.put<Funcionario>(url,funcionario).pipe(
    map(obj => obj),
    catchError(e => this.errorHandler(e))
  )
 }
 
 deleteFuncionario(id: number): Observable<Funcionario> 
 {
  const url = `${this.baseUrl}/${id}`
  return this.http.delete<Funcionario>(url).pipe(
    map(obj => obj),
    catchError(e => this.errorHandler(e))
  )
 }
 
 errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage("Ocorreu um erro! ", true)
    return EMPTY
  }


}