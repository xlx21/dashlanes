using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class BoardController : ControllerBase
{
    [HttpGet]
    public string Get()
    {
        return "board";
    }
}
