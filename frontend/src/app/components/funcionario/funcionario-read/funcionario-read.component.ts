import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../model/funcionario.model';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.css']
})
export class FuncionarioReadComponent implements OnInit {
  funcionarios: Funcionario[]
  displayedColumns = ['id','name','price','categoria','action']
  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
  
    this.funcionarioService.readFuncionario().subscribe(funcionarios => 
      {this.funcionarios = funcionarios
      console.log(this.funcionarios)}

    )

  }

}
