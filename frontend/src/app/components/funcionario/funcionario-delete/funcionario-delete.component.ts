import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../../model/funcionario.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funcionario-delete',
  templateUrl: './funcionario-delete.component.html',
  styleUrls: ['./funcionario-delete.component.css']
})
export class FuncionarioDeleteComponent implements OnInit {
  funcionario: Funcionario
  constructor(private funcionarioService: FuncionarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void{

    const id = +this.route.snapshot.paramMap.get("id");

    this.funcionarioService.readbyId(id).subscribe(funcionario =>
      this.funcionario = funcionario )


  }
  
  deleteFuncionario(): void {

    this.funcionarioService.deleteFuncionario(this.funcionario.id).subscribe(
      () => {
        this.funcionarioService.showMessage("Produto apagado com sucesso!")
        this.router.navigate(["/funcionarios"])
      }
    )
  }

  cancel():void{
    this.router.navigate(["/funcionarios"])
  }
  }


