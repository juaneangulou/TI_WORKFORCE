using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TI_WORKFORCE.UI.Dtos;

namespace TI_WORKFORCE.UI.Repositories.Interfaces
{
    public interface ITimesheetRepository
    {
        Task<SingleTimesheetDto> InsertTimesheet(TimesheetCreateInputDto timesheetCreateInputDto);
        SingleTimesheetDto GetSingleTimesheet(int id);
        IEnumerable<SingleTimesheetDto> GetAllTimesheets();
        Task<SingleTimesheetDto> DeleteTimesheet(int id);
        Task<SingleTimesheetDto> UpdateTimesheet(int id, TimesheetCreateInputDto TimesheetCreateInputDto);
    }
}
