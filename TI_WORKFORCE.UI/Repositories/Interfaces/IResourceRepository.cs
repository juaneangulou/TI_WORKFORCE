using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TI_WORKFORCE.UI.Dtos;

namespace TI_WORKFORCE.UI.Repositories.Interfaces
{
    public interface IResourceRepository
    {
         Task<SingleResourceDto> InsertResource(ResourceCreateInputDto resourceCreateInputDto);
         SingleResourceDto GetSingleResource(int id);
         IEnumerable<SingleResourceDto> GetAllResources();
        Task<SingleResourceDto> DeleteResource(int id);


    }
}
