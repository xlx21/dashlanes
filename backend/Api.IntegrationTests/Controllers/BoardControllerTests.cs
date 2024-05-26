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
        Assert.Equal(2, res.Lanes.Length);
        Assert.Equal("Lane #1", res.Lanes[0].Name);
        Assert.Equal("Lane #2", res.Lanes[1].Name);
    }
}
