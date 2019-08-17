using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TI_WORKFORCE.UI.Dtos;
using TI_WORKFORCE.UI.Repositories;
using TI_WORKFORCE.UI.Repositories.Interfaces;

namespace TI_WORKFORCE.UI.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class TimesheetsController : ControllerBase
    {
        public TimesheetsController()
        {
            _timesheetRepository = new TimesheetRepository();
        }

        [HttpPost]
        public async Task<ActionResult<SingleTimesheetDto>> InsertTimesheet(TimesheetCreateInputDto timesheetInput)
        {

            var timesheetResult = await _timesheetRepository.InsertTimesheet(timesheetInput);
            return timesheetResult;

        }

        [HttpPut("{id}")]
        public async Task<ActionResult<SingleTimesheetDto>> UpdatetTimesheet(int id, TimesheetCreateInputDto timesheetInput)
        {
            var timesheetResult = await _timesheetRepository.UpdateTimesheet(id, timesheetInput);
            return timesheetResult;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<SingleTimesheetDto>> GetSingleTimesheet(int id)
        {

            var timesheetResult = _timesheetRepository.GetSingleTimesheet(id);
            return timesheetResult;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SingleTimesheetDto>>> GetAllTimesheets()
        {

            var timesheetResult = _timesheetRepository.GetAllTimesheets();
            return timesheetResult.ToList();

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<SingleTimesheetDto>> Deletetimesheet(int id)
        {

            var timesheetResult = await _timesheetRepository.DeleteTimesheet(id);
            return timesheetResult;
        }

        private ITimesheetRepository _timesheetRepository;
    }
}