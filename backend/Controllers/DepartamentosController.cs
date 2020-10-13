using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoANG.Data;
using ProjetoANG.Models;

namespace ProjetoANG.Controllers
{
    
        [ApiController]
        [Route("/departamentos")]

        public class DepartamentosController: ControllerBase {


            [HttpGet]
            [Route("")]
    public async Task<ActionResult<List<Departamento>>> GetDepartamentos([FromServices] DataContext context) {

        var departamentos = await context.departamento.ToListAsync();
    return departamentos;
    }
    public async Task<ActionResult<Departamento>> PostDepartamentos([FromServices] DataContext context
    ,[FromBody] Departamento departamento) {

        if(ModelState.IsValid) {
            context.departamento.Add(departamento);

            await context.SaveChangesAsync();

        }

        
    return departamento;
    }




        }



}