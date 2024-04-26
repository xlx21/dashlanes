using Api.Controllers;

namespace Api.IntegrationTests.Controllers;

public class BoardControllerTests
{
    private BoardController _sut = new();

    [Fact]
    public void GetReturnsBoard()
    {
        var res = _sut.Get();
        Assert.Equal("MyBoard", res.Name);
    }
}
