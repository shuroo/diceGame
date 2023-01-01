
class PlayerModel {
    constructor(playerNum,id) {
        this.id = id;
        this.playerNum = playerNum;
        this.currentScore = 0;
        this.totalScore = 0;
        this.bgColor="white"
    }

    setCurrentScore = (currentScore) =>{
        this.currentScore = currentScore;
    }

    setTotalScore = (totalScore)=>{
        this.totalScore = totalScore;
    }
    setBGColor = (bgColor)=>{
        this.bgColor = bgColor;
    }
}

export default PlayerModel;