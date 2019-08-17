using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TI_WORKFORCE.UI.Dtos;
using TI_WORKFORCE.UI.Models;
using TI_WORKFORCE.UI.Repositories.Interfaces;

namespace TI_WORKFORCE.UI.Repositories
{
    public class TimesheetRepository : ITimesheetRepository
    {
        public TimesheetRepository()
        {
            _context = new TI_WORKFORCEDBContext();
        }

        public async Task<SingleTimesheetDto> InsertTimesheet(TimesheetCreateInputDto timesheetCreateInputDto)
        {
            var result = new SingleTimesheetDto();
            try
            {
                var timesheet = new Timesheet()
                {
                    Date = timesheetCreateInputDto.Date,
                    HoursWorked = timesheetCreateInputDto.HoursWorked,
                    DateReported = timesheetCreateInputDto.DateReported,
                    ResourceId = timesheetCreateInputDto.ResourceId,
                };
                _context.Timesheet.Add(timesheet);
                await _context.SaveChangesAsync();

                result = new SingleTimesheetDto()
                {
                    Id = timesheet.Id,
                    Date = timesheetCreateInputDto.Date,
                    HoursWorked = timesheetCreateInputDto.HoursWorked,
                    DateReported = timesheetCreateInputDto.DateReported,
                    ResourceId = timesheetCreateInputDto.ResourceId,
                };

                return result;

            }
            catch (Exception ex)
            {

            }
            finally
            {
                _context.Dispose();
            }

            return result;

        }

        public async Task<SingleTimesheetDto> UpdateTimesheet(int id, TimesheetCreateInputDto timesheetCreateInputDto)
        {
            var result = new SingleTimesheetDto();
            try
            {
                var timesheet = _context.Timesheet.Where(x => x.Id == id).FirstOrDefault();

                if (timesheet == null)
                    throw new Exception();

                timesheet.Date = timesheetCreateInputDto.Date;
                timesheet.HoursWorked = timesheetCreateInputDto.HoursWorked;
                timesheet.DateReported = timesheetCreateInputDto.DateReported;
                timesheet.ResourceId = timesheetCreateInputDto.ResourceId;

                await _context.SaveChangesAsync();

                result = new SingleTimesheetDto()
                {
                    Id = timesheet.Id,
                    Date = timesheetCreateInputDto.Date,
                    HoursWorked = timesheetCreateInputDto.HoursWorked,
                    DateReported = timesheetCreateInputDto.DateReported,
                    ResourceId = timesheetCreateInputDto.ResourceId,
                };

                return result;

            }
            catch (Exception ex)
            {

            }
            finally
            {
                _context.Dispose();
            }

            return result;

        }


        public SingleTimesheetDto GetSingleTimesheet(int id)
        {
            var result = new SingleTimesheetDto();
            try
            {
                var timesheet = _context.Timesheet.Where(x => x.Id == id).FirstOrDefault();

                result = new SingleTimesheetDto()
                {
                    Id = timesheet.Id,
                    Date = timesheet.Date,
                    HoursWorked = timesheet.HoursWorked,
                    DateReported = timesheet.DateReported,
                    ResourceId = timesheet.ResourceId,
                };

                return result;

            }
            catch (Exception ex)
            {

            }
            finally
            {
                _context.Dispose();
            }

            return result;
        }

        public IEnumerable<SingleTimesheetDto> GetAllTimesheets()
        {
            var result = new List<SingleTimesheetDto>();
            try
            {
                result = (from timesheet in _context.Timesheet
                          select new SingleTimesheetDto()
                          {
                              Id = timesheet.Id,
                              Date = timesheet.Date,
                              HoursWorked = timesheet.HoursWorked,
                              DateReported = timesheet.DateReported,
                              ResourceId = timesheet.ResourceId,
                          }
                                ).ToList();


                return result;

            }
            catch (Exception ex)
            {

            }
            finally
            {
                _context.Dispose();
            }

            return result;

        }

        public async Task<SingleTimesheetDto> DeleteTimesheet(int id)
        {
            var result = new SingleTimesheetDto();
            try
            {
                var timesheet = _context.Timesheet.Where(x => x.Id == id).FirstOrDefault();
                if (timesheet != null)
                {
                    result = new SingleTimesheetDto()
                    {
                        Id = timesheet.Id,
                        Date = timesheet.Date,
                        HoursWorked = timesheet.HoursWorked,
                        DateReported = timesheet.DateReported,
                        ResourceId = timesheet.ResourceId,
                    };
                    _context.Timesheet.Remove(timesheet);
                    await _context.SaveChangesAsync();

                }

                return result;

            }
            catch (Exception ex)
            {

            }
            finally
            {
                _context.Dispose();
            }

            return result;

        }


        private TI_WORKFORCEDBContext _context;
    }
}
