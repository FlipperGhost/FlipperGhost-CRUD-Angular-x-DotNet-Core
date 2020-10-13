using Microsoft.EntityFrameworkCore;
using ProjetoANG.Models;

namespace ProjetoANG.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }

        public DbSet<Funcionario> funcionario {get; set; }
        
        public DbSet<Departamento> departamento {get; set; }


    
    }










}