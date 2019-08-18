using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TI_WORKFORCE.UI.Dtos
{
    public class TimesheetCreateInputDto
    {
        [Required]
        public int ResourceId { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public decimal HoursWorked { get; set; }
        public DateTime DateReported { get; set; }
    }
}
