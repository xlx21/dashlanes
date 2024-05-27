using Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class BoardController : ControllerBase
{
    [HttpGet]
    public Board Get() =>
        new Board(
            "board1",
            new Lane[]
            {
                new(
                    "lane1",
                    new Stage[]
                    {
                        new("stage1", new Ticket[] { new("tick1", "desc1") }),
                        new("stage2", new Ticket[] { new("tick2", "desc2") })
                    }
                ),
                new(
                    "lane2",
                    new Stage[]
                    {
                        new("stage3", new Ticket[] { new("tick3", "desc3") }),
                        new("stage4", new Ticket[] { new("tick4", "desc4") })
                    }
                )
            }
        );
}
