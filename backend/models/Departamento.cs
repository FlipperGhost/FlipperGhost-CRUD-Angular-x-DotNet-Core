using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProjetoANG.Models
{
    public class Departamento 
    {
        [Key]
        public int id {get; set; }
        
            [Required(ErrorMessage = "Este campo é Obrigatório")]
            [MaxLength(60, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
            [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]

         public string nome {get; set; }

            [Required(ErrorMessage = "Este campo é Obrigatório")]
            [MaxLength(60, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
            [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]

         public string sigla {get; set; }

    }
}