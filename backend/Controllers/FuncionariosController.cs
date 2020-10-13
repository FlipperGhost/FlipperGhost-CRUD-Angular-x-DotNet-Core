using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoANG.Data;
using ProjetoANG.Models;


namespace ProjetoANG.Controllers
{
        [ApiController]
        [Route("v1/funcionarios")]
    public class FuncionariosController: ControllerBase {


        [HttpGet]
        [Route("")]
        public async Task<ActionResult<List<Funcionario>>>  GetFuncionarios([FromServices] DataContext context)
        {
            var funcionarios = await context.funcionario.ToListAsync();
            return funcionarios;
        }

        [HttpPost]
        [Route("")]
        public async Task<ActionResult<Funcionario>>  PostFuncionario ([FromServices] DataContext context
        ,[FromBody] Funcionario funcionario){
            if(ModelState.IsValid) {
            context.funcionario.Add(funcionario);
            await context.SaveChangesAsync();
            return funcionario;
            } else {
                return BadRequest(ModelState);
            }
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<ActionResult<Funcionario>>  GetFuncionario ([FromServices] DataContext context
        , int id){
            var funcionario = await context.funcionario.Include(x => x.id)
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.id == id);
            return funcionario;
        }

        
        [HttpGet]
        [Route("departaments/{idDepartment:int}")]
        public async Task<ActionResult<List<Funcionario>>>  GetFuncionarioByDepartments ([FromServices] DataContext context
        , int idDepartment){
            var funcionario = await context.funcionario
            .Include(x => x.idDepartamento)
            .AsNoTracking()
            .Where(x => x.idDepartamento == idDepartment)
            .ToListAsync();

            return funcionario;
        }


    }
}