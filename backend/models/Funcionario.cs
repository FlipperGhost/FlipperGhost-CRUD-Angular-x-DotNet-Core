using System.ComponentModel.DataAnnotations;

namespace ProjetoANG.Models
{   public class Funcionario
    {
        [Key]
        public int id {get; set; }
        
            [Required(ErrorMessage = "O nome é Obrigatório")]
            [MaxLength(150, ErrorMessage = "Este campo deve conter no máximo 150 caracteres")]
            [MinLength(3, ErrorMessage = "Este campo deve conter no mínimo 3 caracteres")]
            public string nome {get; set; }

      
            

            [Required(ErrorMessage = "O RG é Obrigatório")]
            [MaxLength(14, ErrorMessage = "Este campo deve conter no máximo 14 caracteres")]
            [MinLength(9, ErrorMessage = "Este campo deve conter no máximo 9 caracteres")]
            public string rg {get; set;}

            public string photo {get; set; }
             
            public int idDepartamento {get; set; }

    
        




    }
}