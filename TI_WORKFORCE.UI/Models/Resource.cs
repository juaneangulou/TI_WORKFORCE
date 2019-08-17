using System;
using System.Collections.Generic;

namespace TI_WORKFORCE.UI.Models
{
    public partial class Resource
    {
        public Resource()
        {
            Timesheet = new HashSet<Timesheet>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Address { get; set; }

        public virtual ICollection<Timesheet> Timesheet { get; set; }
    }
}
