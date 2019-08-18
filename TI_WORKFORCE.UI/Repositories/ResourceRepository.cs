using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TI_WORKFORCE.UI.Dtos;
using TI_WORKFORCE.UI.Models;
using TI_WORKFORCE.UI.Repositories.Interfaces;

namespace TI_WORKFORCE.UI.Repositories
{
    public class ResourceRepository : IResourceRepository
    {
        private TI_WORKFORCEDBContext _context;
        public ResourceRepository( TI_WORKFORCEDBContext dbContext)
        {
            _context = dbContext;
        }
        public async Task<SingleResourceDto> InsertResource(ResourceCreateInputDto resourceCreateInputDto)
        {
            try
            {
                var resource = new Resource()
                {
                    FirstName = resourceCreateInputDto.FirstName,
                    LastName = resourceCreateInputDto.LastName,
                    DateOfBirth = resourceCreateInputDto.DateOfBirth,
                    Address = resourceCreateInputDto.Address,
                };
                _context.Resource.Add(resource);
                await _context.SaveChangesAsync();

              var result = new SingleResourceDto()
                {
                    Id = resource.Id,
                    FirstName = resourceCreateInputDto.FirstName,
                    LastName = resourceCreateInputDto.LastName,
                    DateOfBirth = resourceCreateInputDto.DateOfBirth,
                    Address = resourceCreateInputDto.Address,
                };

                return result;

            }
            catch (Exception ex)
            {
                throw ex;
            }          
        }

        public async Task<SingleResourceDto> UpdateResource(int id, SingleResourceDto resourceCreateInputDto)
        {
            var result = new SingleResourceDto();
            try
            {
                var resource = _context.Resource.Where(x => x.Id == id).FirstOrDefault();

                if (resource == null)
                    throw new Exception();

                resource.FirstName = resourceCreateInputDto.FirstName;
                resource.LastName = resourceCreateInputDto.LastName;
                resource.DateOfBirth = resourceCreateInputDto.DateOfBirth;
                resource.Address = resourceCreateInputDto.Address;

                await _context.SaveChangesAsync();

                result = new SingleResourceDto()
                {
                    Id = resource.Id,
                    FirstName = resourceCreateInputDto.FirstName,
                    LastName = resourceCreateInputDto.LastName,
                    DateOfBirth = resourceCreateInputDto.DateOfBirth,
                    Address = resourceCreateInputDto.Address,
                };

                return result;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public SingleResourceDto GetSingleResource(int id)
        {
            var result = new SingleResourceDto();
            try
            {
                var resource = _context.Resource.Where(x => x.Id == id).FirstOrDefault();

                result = new SingleResourceDto()
                {
                    Id = resource.Id,
                    FirstName = resource.FirstName,
                    LastName = resource.LastName,
                    DateOfBirth = resource.DateOfBirth,
                    Address = resource.Address,
                };

                return result;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<SingleResourceDto> GetAllResources()
        {
            var result = new List<SingleResourceDto>();
            try
            {
                result = (from resource in _context.Resource
                          select new SingleResourceDto()
                          {
                              Id = resource.Id,
                              FirstName = resource.FirstName,
                              LastName = resource.LastName,
                              DateOfBirth = resource.DateOfBirth,
                              Address = resource.Address,
                          }
                                ).ToList();


                return result;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<SingleResourceDto> DeleteResource(int id)
        {
            var result = new SingleResourceDto();
            try
            {
                var resource = _context.Resource.Where(x => x.Id == id).FirstOrDefault();
                if (result != null)
                {
                    result = new SingleResourceDto()
                    {
                        Id = resource.Id,
                        FirstName = resource.FirstName,
                        LastName = resource.LastName,
                        DateOfBirth = resource.DateOfBirth,
                        Address = resource.Address,
                    };

                    var timesheets = _context.Timesheet.Where(x => x.ResourceId == resource.Id);
                    if (timesheets.Count() > 0)
                        _context.Timesheet.RemoveRange(timesheets);
                    _context.Resource.Remove(resource);
                    await _context.SaveChangesAsync();
                }
                return result;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }        
    }
}
