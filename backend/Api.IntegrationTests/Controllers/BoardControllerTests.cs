using Api.Controllers;

namespace Api.IntegrationTests.Controllers;

public class BoardControllerTests
{
    private BoardController _sut = new();

    [Fact]
    public void GetReturnsBoard()
    {
        var board = _sut.Get();
        var lane1 = board.Lanes[0];
        var lane2 = board.Lanes[1];

        Assert.Equal("board1", board.Name);
        Assert.Equal(2, board.Lanes.Length);

        Assert.Equal("lane1", lane1.Name);
        Assert.Equal(2, lane1.Stages.Length);
        Assert.Equal("stage1", lane1.Stages[0].Name);
        Assert.Equal("stage2", lane1.Stages[1].Name);

        Assert.Equal("lane2", lane2.Name);
        Assert.Equal(2, lane2.Stages.Length);
        Assert.Equal("stage3", lane2.Stages[0].Name);
        Assert.Equal("stage4", lane2.Stages[1].Name);
    }
}
