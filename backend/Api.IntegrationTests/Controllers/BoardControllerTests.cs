using Api.Controllers;

namespace Api.IntegrationTests.Controllers;

public class BoardControllerTests
{
    private BoardController _sut = new();

    [Fact]
    public void GetReturnsBoard()
    {
        var board = _sut.Get();
        Assert.Equal("board1", board.Name);
        Assert.Equal(2, board.Lanes.Length);

        var lane1 = board.Lanes[0];
        Assert.Equal("lane1", lane1.Name);
        Assert.Equal(2, lane1.Stages.Length);
        var lane2 = board.Lanes[1];
        Assert.Equal("lane2", lane2.Name);
        Assert.Equal(2, lane2.Stages.Length);

        var stage1 = lane1.Stages[0];
        Assert.Equal("stage1", stage1.Name);
        var stage2 = lane1.Stages[1];
        Assert.Equal("stage2", stage2.Name);
        var stage3 = lane2.Stages[0];
        Assert.Equal("stage3", stage3.Name);
        var stage4 = lane2.Stages[1];
        Assert.Equal("stage4", stage4.Name);

        var tick1 = stage1.Tickets[0];
        Assert.Equal("tick1", tick1.Name);
        Assert.Equal("desc1", tick1.Description);
        var tick2 = stage2.Tickets[0];
        Assert.Equal("tick2", tick2.Name);
        Assert.Equal("desc2", tick2.Description);
        var tick3 = stage3.Tickets[0];
        Assert.Equal("tick3", tick3.Name);
        Assert.Equal("desc3", tick3.Description);
        var tick4 = stage4.Tickets[0];
        Assert.Equal("tick4", tick4.Name);
        Assert.Equal("desc4", tick4.Description);
    }
}
