import { Row,Col, Container } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import "./player.css"


function Player({playerNum,currentScore,totalScore,bgColor,id}) {
  return (
    <Card className="playerClass" id= {id} style={{"backgroundColor":bgColor}}>
      <Card.Body className="playerBody">
        <Card.Title>PLAYER {playerNum}</Card.Title> 
        <Card.Text class="totalScore">
          {totalScore}
        </Card.Text>
        <Card.Footer className="footerBox">Current:<p>
        <span>{currentScore}</span></p></Card.Footer>
      </Card.Body>
    </Card>
  );

}

export default Player;