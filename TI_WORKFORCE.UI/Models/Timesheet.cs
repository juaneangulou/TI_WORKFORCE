using System;
using System.Collections.Generic;

namespace TI_WORKFORCE.UI.Models
{
    public partial class Timesheet
    {
        public int Id { get; set; }
        public int ResourceId { get; set; }
        public DateTime Date { get; set; }
        public decimal HoursWorked { get; set; }
        public DateTime DateReported { get; set; }

        public virtual Resource Resource { get; set; }
    }
}
