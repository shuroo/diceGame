 
import React, { Component,useState,useEffect } from 'react';
import Glyphicon from '@strongdm/glyphicon';
import Form from 'react-bootstrap/Form';
 import Container from 'react-bootstrap/Container';
// import Alert from 'react-bootstrap/Alert';
import './style.css';
import Player from '../components/Player';
import { Button } from 'react-bootstrap';

function HomePage(){

    const [won,setWon] =  useState(null); 
    const [destScore, setDestScore] = useState([
        100
    ])
    const [turn, setTurn] = useState([
      1
    ])
    const [players] = useState([
      new PlayerModel(1,"Player1"),new PlayerModel(2,"Player2")
  ])
    function refreshPage() {
        window.location.reload(false);
      }

    function rollDice(){
      let randValue = Math.floor(Math.random() * 10) + 2;
      // todo: change bg color when played
      if (randValue == 12){
        setTurn(3-turn);
      }
      else{
        players[turn-1].setBGColor("lightgray")
        players[turn-1].setCurrentScore(randValue)
        await delay(5000);
        players[turn-1].setBGColor("white")
      }
    }

    function hold(){
      let current = players[turn-1].currentScore
      console.log(current)
      players[turn-1].setTotalScore(randValue);
      setTurn(3-turn);
    }

    function checkIsWon(){
      let isWon = true === (players[turn-1].totalScore >= destScore)
      if (isWon){
        setWon(turn)
      }
    }
       
    useEffect(()=>{ checkIsWon()
    
    },[players]);
    const wonAlert = ((won != null)?<Alert className="info alertBox">Player {turn} Won!</Alert> : null);

return (
    <Container class="wrapper">
        {wonAlert}
    <Player playerNum={players[0].playerNum} bgColor={players[0].bgColor} currentScore={players[0].currentScore} 
    totalScore ={players[0].totalScore} id={players[0].id}/>
    <Button onClick={refreshPage} className='newGameButton'> <svg xmlns="http://www.w3.org/2000/svg" width="16" 
    height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg> NEW GAME</Button>
 
<Button onClick={rollDice} className='roll-dice'>
<Glyphicon glyph='glyphicon glyphicon-refresh' /> ROLL DICE</Button>
<Button onClick={hold} className='hold'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg>
  HOLD</Button>
  <Form.Control className="destScore" type="text" placeholder="100" 
  onChange={e => setDestScore(e.target)}/>
<Player playerNum={players[1].playerNum} bgColor={players[1].bgColor} currentScore={players[1].currentScore} 
totalScore ={players[1].totalScore} id={players[1].totalScore} />
</Container>
);

}

export default HomePage;