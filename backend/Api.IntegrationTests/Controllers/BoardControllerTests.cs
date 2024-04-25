using Api.Controllers;

namespace Api.IntegrationTests.Controllers;

public class BoardControllerTests
{
    [Fact]
    public void GetReturnsBoardString()
    {
        var sut = new BoardController();
        var res = sut.Get();
        Assert.Equal("board", res);
    }
}
