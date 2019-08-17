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
    public class ResourcesController : ControllerBase
    {
        public ResourcesController(IResourceRepository resourceRepository)
        {
            _resourceRepository = resourceRepository;
        }

        [HttpPost]
        public async Task<ActionResult<SingleResourceDto>> InsertResource(ResourceCreateInputDto resourceInput)
        {

            var resourceResult =await _resourceRepository.InsertResource(resourceInput);
            return  resourceResult;

        }

        [HttpPut("{id}")]
        public async Task<ActionResult<SingleResourceDto>> UpdatetResource(int id, SingleResourceDto resourceInput)
        {
            var resourceResult = await _resourceRepository.UpdateResource(id,resourceInput);
            return resourceResult;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<SingleResourceDto>> GetSingleResource(int id)
        {

            var resourceResult = _resourceRepository.GetSingleResource(id);
            return resourceResult;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SingleResourceDto>>> GetAllResources()
        {

            var resourceResult = _resourceRepository.GetAllResources();
            return resourceResult.ToList();

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<SingleResourceDto>> DeleteResource(int id)
        {

            var resourceResult = await _resourceRepository.DeleteResource(id);
            return resourceResult;
        }
        
        private IResourceRepository _resourceRepository;
    }
}