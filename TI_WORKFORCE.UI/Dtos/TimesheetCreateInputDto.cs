using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TI_WORKFORCE.UI.Dtos
{
    public class TimesheetCreateInputDto
    {
        public int ResourceId { get; set; }
        public DateTime Date { get; set; }
        public decimal HoursWorked { get; set; }
        public DateTime DateReported { get; set; }
    }
}
