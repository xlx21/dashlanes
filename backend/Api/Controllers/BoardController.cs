using Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class BoardController : ControllerBase
{
    [HttpGet]
    public Board Get()
    {
        return new("MyBoard");
    }
}
