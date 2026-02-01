using System;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyApiController : BaseApiController
{

    [HttpGet("not-found")]
    public IActionResult GetNotFound()
    {
        return NotFound();
    }

    [HttpGet("bad-request")]
    public IActionResult GetBadRequest()
    {
        return BadRequest("please check request parameters bad request");
    }

    [HttpGet("unauthorized")]
    public IActionResult GetUnAuthorized()
    {
        return Unauthorized();
    }

    [HttpGet("validation-error")]
    public IActionResult GetValidationError()
    {
        ModelState.AddModelError("problem1", "this is issue one");
        ModelState.AddModelError("problem2", "this is issue two");
        return ValidationProblem();
    }
    [HttpGet("server-error")]
    public IActionResult GetServerError()
    {
        throw new Exception("This is server error");
    }
}
