using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TI_WORKFORCE.UI.Dtos
{
    public class ResourceCreateInputDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Address { get; set; }
    }
}
