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
        var lanes = new Lane[] { new("Lane #1"), new("Lane #2") };
        var board = new Board("MyBoard", lanes);
        return board;
    }
}
