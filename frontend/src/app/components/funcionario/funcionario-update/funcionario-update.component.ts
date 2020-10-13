import { Funcionario } from '../../model/funcionario.model';
import { FuncionarioService } from '../funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Funcionario-update',
  templateUrl: './Funcionario-update.component.html',
  styleUrls: ['./Funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {

  Funcionario: Funcionario

  constructor(private FuncionarioService: FuncionarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.FuncionarioService.readbyId(id).subscribe(Funcionario =>
      this.Funcionario = Funcionario)
  }

  updateFuncionario(): void {
    this.FuncionarioService.updateFuncionario(this.Funcionario).subscribe(
      () => {
        this.FuncionarioService.showMessage("Produto alterado com sucesso!")
        this.router.navigate(["/Funcionarios"])
      }
    );
  }
  cancel(): void {
    this.router.navigate(["/Funcionarios"]);
  }
}
