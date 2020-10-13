import { Funcionario } from '../../model/funcionario.model';
import { FuncionarioService } from '../funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from '../../model/departamento.model';
import { DepartamentoService } from '../../departamento/departamento.service';


@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  funcionario: Funcionario ={
    nome: null,
    photo: null,
    rg:null,
    idDepartamento:null
  }

  departamentos: Departamento[]


  constructor(private funcionarioService: FuncionarioService,private departamentoService: DepartamentoService, private router: Router) { }

  ngOnInit(): void {

    this.departamentoService.listarDepartamentos().subscribe(
      departaments => this.departamentos = departaments) 
    ;
    
  }
  createFuncionario(): void {
    this.funcionarioService.createFuncionario(this.funcionario).subscribe(
      () => {
        this.funcionarioService.showMessage(" Operacao Realizada com sucesso!")
        this.router.navigate(["/funcionario-create"])

      }
    )
  }
  cancel(): void {
    this.router.navigate(["/home"])
  }

}
