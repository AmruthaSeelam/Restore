using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")] // https://localhost:5001/api/products
    [ApiController]

    //dependency injection => replaced traditional constructor approach to latest one as below line
    public class ProductsController(StoreContext context) : ControllerBase 
    {

        // curd methods here

        [HttpGet] 
        public async Task<ActionResult<List<Product>> >GetProducts()
        {
            return await context.Products.ToListAsync();
        }

        [HttpGet("{id}")] // api/products/2
         public async Task<ActionResult<Product>> GetProduct(int id) // added async Task<>
        {
            var product= await context.Products.FindAsync(id); // added await and updated method

            if(product==null) return NotFound();

            return product;
        }
    }
}
